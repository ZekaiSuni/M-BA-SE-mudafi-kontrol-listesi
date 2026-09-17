/* ════════════════════════════════════════════════════════════════
   MÜDAFİ KONTROL LİSTESİ — CMK SORUŞTURMA EVRESİ
   Uygulama Mantığı (Core Application Logic v2.0)
   - 106 Madde Denetimi
   - Canlı Gözaltı Süre Sayacı (CMK m. 91)
   - Otomatik Zabıt Şerhi & İtiraz Paneli
   - Koyu / Açık Tema Yönetimi
   - Resmi A4 Yazdırma & PDF Çıktısı
   - %100 Çevrimdışı (Client-side) Yerel Depolama
   ════════════════════════════════════════════════════════════════ */

"use strict";

(() => {

/* ──────────── Sabitler & Başlangıç ──────────── */
const STORE_KEY = "mudafi-cmk-kontrol-v2";

const META_FIELDS = [
  { key: "suspect",  label: "Şüpheli / Müvekkil", placeholder: "Adı Soyadı" },
  { key: "caseNo",   label: "Soruşturma / Dosya No", placeholder: "2026/.... Sor." },
  { key: "crime",    label: "İsnat Edilen Suç", placeholder: "Örn: TCK 142/2" },
  { key: "office",   label: "Kolluk / Savcılık Birimi", placeholder: "Örn: Kadıköy İlçe Emniyet" },
  { key: "lawyer",   label: "Müdafi Avukat", placeholder: "Av. ...." },
  { key: "date",     label: "Görev Tarihi", type: "date" }
];

/* ──────────── Durum Yönetimi (State) ──────────── */
let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        meta: parsed.meta || {},
        items: parsed.items || {},
        detention: parsed.detention || null,
        theme: parsed.theme || "light"
      };
    }
  } catch (e) {
    console.warn("Kayıt okunamadı:", e);
  }
  return {
    meta: { date: new Date().toISOString().split("T")[0] },
    items: {},
    detention: null,
    theme: "light"
  };
}

let saveTimer = null;
function persist() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) {
      toast("Kayıt başarısız: Tarayıcı yerel belleği dolu veya erişilemez.");
    }
  }, 200);
}

/* ──────────── Veri ve İstatistik Yardımcıları ──────────── */
const ALL_ITEMS = CHECKLIST.stages.flatMap(st =>
  st.sections.flatMap(se =>
    se.items.map(it => ({
      ...it,
      stageId: st.id,
      stageNo: st.no,
      stageTitle: st.title,
      sectionHeading: se.heading || null
    }))
  )
);

const itemByNo = new Map(ALL_ITEMS.map(i => [i.no, i]));

function getStageStats(stage) {
  let total = 0, done = 0, ok = 0, problem = 0;
  stage.sections.forEach(se => se.items.forEach(it => {
    total++;
    const s = state.items[it.no]?.s;
    if (s === "ok") { ok++; done++; }
    else if (s === "problem") { problem++; done++; }
  }));
  return {
    total,
    done,
    ok,
    problem,
    pending: total - done,
    pct: total ? Math.round((done / total) * 100) : 0
  };
}

function getOverallStats() {
  let total = 0, done = 0, ok = 0, problem = 0;
  ALL_ITEMS.forEach(it => {
    total++;
    const s = state.items[it.no]?.s;
    if (s === "ok") { ok++; done++; }
    else if (s === "problem") { problem++; done++; }
  });
  return {
    total,
    done,
    ok,
    problem,
    pending: total - done,
    pct: total ? Math.round((done / total) * 100) : 0
  };
}

/* ──────────── DOM Yardımcıları ──────────── */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined && v !== false) node.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) {
    if (c === null || c === undefined || c === false) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

function esc(s) {
  return String(s || "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function markQueryHits(text, q) {
  const safe = esc(text);
  if (!q) return safe;
  const words = q.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return safe;
  const rx = new RegExp("(" + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "gi");
  return safe.replace(rx, "<mark style='background:rgba(212,169,68,0.35);color:inherit;padding:0 2px;border-radius:2px;'>$1</mark>");
}

let toastTimer = null;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2800);
}

/* ──────────── Tema Yönetimi ──────────── */
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  $("#themeLabel").textContent = isDark ? "Açık Tema" : "Koyu Tema";
  $("#icoTheme").innerHTML = isDark
    ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
    : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  persist();
}

/* ──────────── Gözaltı Canlı Süre Sayacı ──────────── */
function updateDetentionWidget() {
  const widget = $("#detentionWidget");
  const countdownEl = $("#detentionCountdown");
  const fillEl = $("#detentionBarFill");
  const subEl = $("#detentionSub");

  if (!state.detention || !state.detention.captureTime) {
    widget.className = "detention-widget";
    countdownEl.textContent = "Süre ayarlanmadı";
    fillEl.style.width = "0%";
    subEl.textContent = "Yakalama saatini girin (CMK 91)";
    return;
  }

  const captureDate = new Date(state.detention.captureTime);
  if (isNaN(captureDate.getTime())) {
    widget.className = "detention-widget";
    countdownEl.textContent = "Geçersiz Tarih";
    return;
  }

  const detentionHours = Number(state.detention.type || 24);
  const travelHours = Number(state.detention.travelHours || 0);
  const totalAllowedHours = detentionHours + travelHours;
  const totalAllowedMs = totalAllowedHours * 3600 * 1000;
  const deadline = captureDate.getTime() + totalAllowedMs;
  const now = Date.now();
  const diff = deadline - now;
  const elapsedMs = now - captureDate.getTime();
  const pct = Math.min(100, Math.max(0, (elapsedMs / totalAllowedMs) * 100));

  fillEl.style.width = pct + "%";

  if (diff <= 0) {
    widget.className = "detention-widget detention-widget--expired";
    const overMs = Math.abs(diff);
    const overHours = Math.floor(overMs / (3600 * 1000));
    const overMinutes = Math.floor((overMs % (3600 * 1000)) / (60 * 1000));
    countdownEl.textContent = `SÜRE AŞILDI! (+${overHours}s ${overMinutes}d)`;
    subEl.textContent = "DİKKAT: CMK m. 91/5 uyarınca derhal salıverilme talep edin!";
  } else {
    widget.className = "detention-widget detention-widget--active";
    const leftHours = Math.floor(diff / (3600 * 1000));
    const leftMinutes = Math.floor((diff % (3600 * 1000)) / (60 * 1000));
    countdownEl.textContent = `${leftHours} saat ${leftMinutes} dk kaldı`;
    subEl.textContent = `Bitiş: ${new Date(deadline).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })} (${totalAllowedHours} sa. azami)`;
  }
}

setInterval(updateDetentionWidget, 10000);

/* ──────────── Yönlendirme (Routing) ──────────── */
let currentView = "dashboard";
let currentQuery = "";
let currentFilter = "all";

function navigate(view) {
  currentView = view;
  render();
  $("#sidebar").classList.remove("sidebar--open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ──────────── Kenar Çubuğu Render ──────────── */
function renderSidebar() {
  const stats = getOverallStats();

  // Donut
  const pct = stats.pct;
  const circumference = 2 * Math.PI * 30; // 188.5
  const offset = circumference - (pct / 100) * circumference;
  $("#navDonutFg").style.strokeDashoffset = offset;
  $("#navDonutPct").textContent = pct + "%";
  $("#navDoneCount").textContent = `${stats.done} / ${stats.total}`;
  $("#navOkCount").textContent = `${stats.ok} Uygun`;
  $("#navProblemCount").textContent = `${stats.problem} Sorunlu`;

  // Zabıt Şerhleri Butonu
  const objectionsNavBadge = $("#objectionsNavBadge");
  const quickObjectionCount = $("#quickObjectionCount");
  if (stats.problem > 0) {
    objectionsNavBadge.hidden = false;
    objectionsNavBadge.textContent = stats.problem;
    quickObjectionCount.textContent = stats.problem;
  } else {
    objectionsNavBadge.hidden = true;
    quickObjectionCount.textContent = "0";
  }

  // Navigasyon Aşamaları
  const nav = $("#stageNav");
  $$(".nav__item--stage", nav).forEach(n => n.remove());

  CHECKLIST.stages.forEach(st => {
    const s = getStageStats(st);
    let badgeText = `${s.done}/${s.total}`;
    let badgeClass = "nav__stage-badge";
    if (s.problem > 0) {
      badgeClass += " nav__stage-badge--warn";
      badgeText += ` (⚠️${s.problem})`;
    } else if (s.done === s.total && s.total > 0) {
      badgeClass += " nav__stage-badge--done";
      badgeText = "✓ Tamam";
    }

    const btn = el("button", {
      class: `nav__item nav__item--stage ${currentView === st.id ? "nav__item--active" : ""}`,
      "data-view": st.id,
      onclick: () => navigate(st.id)
    },
      el("span", { class: "nav__num" }, `${st.no}.`),
      el("span", { class: "nav__label" }, st.title),
      el("span", { class: badgeClass }, badgeText)
    );
    nav.append(btn);
  });

  // Aktif Görünüm Butonunu Vurgula
  $$("#stageNav .nav__item").forEach(item => {
    const view = item.getAttribute("data-view");
    if (view === currentView) item.classList.add("nav__item--active");
    else item.classList.remove("nav__item--active");
  });

  updateDetentionWidget();
}

/* ──────────── Ana Görünüm Render ──────────── */
function render() {
  renderSidebar();
  const content = $("#content");
  content.innerHTML = "";

  if (currentQuery.trim()) {
    renderSearchResults(content);
    return;
  }

  if (currentView === "dashboard") {
    renderDashboard(content);
  } else if (currentView === "objections") {
    renderObjectionsView(content);
  } else {
    const stage = CHECKLIST.stages.find(s => s.id === currentView);
    if (stage) renderStageView(content, stage);
    else renderDashboard(content);
  }
}

/* ──────────── 1. Görünüm: Genel Bakış (Dashboard) ──────────── */
function renderDashboard(container) {
  $("#viewTitle").textContent = "Genel Bakış";
  $("#viewSubtitle").textContent = "CMK Soruşturma Evresi · 7 Aşama, 106 Madde";

  // Başlık & Açıklama
  const dashHeader = el("div", { class: "dash-header" },
    el("h2", {}, CHECKLIST.meta.documentTitle),
    el("p", {}, CHECKLIST.meta.description),
    el("div", { class: "dash-attribution" },
      el("svg", { class: "ico", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" },
        el("path", { d: "M12 20h9" }),
        el("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
      ),
      el("span", {}, "Avukat M. Baran Selanik tarafından paylaşılan “Müdafi Kontrol Listesi” dikkate alınarak üretilmiştir.")
    )
  );

  // Dosya Künyesi Kartı
  const caseCard = el("div", { class: "case-card" },
    el("div", { class: "case-card__title" },
      el("svg", { class: "ico", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" },
        el("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
        el("polyline", { points: "14 2 14 8 20 8" })
      ),
      "Dosya ve Şüpheli Bilgileri"
    ),
    el("div", { class: "case-grid" },
      META_FIELDS.map(f =>
        el("div", { class: "case-field" },
          el("label", { for: `meta_${f.key}` }, f.label),
          el("input", {
            id: `meta_${f.key}`,
            type: f.type || "text",
            placeholder: f.placeholder || "",
            value: state.meta[f.key] || "",
            oninput: (e) => {
              state.meta[f.key] = e.target.value;
              persist();
            }
          })
        )
      )
    )
  );

  // 7 Aşama Kartı Izgarası
  const stageGrid = el("div", { class: "stage-grid" },
    CHECKLIST.stages.map(st => {
      const s = getStageStats(st);
      return el("div", {
        class: "stage-card",
        onclick: () => navigate(st.id)
      },
        el("div", { class: "stage-card__header" },
          el("span", { class: "stage-card__num" }, `${st.no}. Aşama`),
          el("span", { class: "badge-pill " + (s.problem > 0 ? "badge-pill--problem" : (s.done === s.total && s.total > 0 ? "badge-pill--ok" : "")) },
            s.problem > 0 ? `${s.problem} Sorun` : (s.done === s.total && s.total > 0 ? "Tamamlandı" : `%${s.pct}`)
          )
        ),
        el("div", {},
          el("h3", { class: "stage-card__title" }, st.title),
          el("div", { class: "stage-card__subtitle" }, st.subtitle || "")
        ),
        el("p", { class: "stage-card__lead" }, st.lead),
        el("div", { class: "stage-card__footer" },
          el("span", {}, `${s.total} Denetim Maddesi`),
          el("div", { class: "stage-card__stats" },
            s.ok > 0 ? el("span", { style: "color:var(--ok);font-weight:600;" }, `✓ ${s.ok}`) : null,
            s.problem > 0 ? el("span", { style: "color:var(--problem);font-weight:600;" }, `⚠️ ${s.problem}`) : null
          )
        )
      );
    })
  );

  container.append(dashHeader, caseCard, stageGrid);
}

/* ──────────── 2. Görünüm: Aşama Detayı (Stage View) ──────────── */
function renderStageView(container, stage) {
  $("#viewTitle").textContent = `${stage.no}. Aşama: ${stage.title}`;
  $("#viewSubtitle").textContent = stage.subtitle || "";

  const stats = getStageStats(stage);

  // Hero Alanı & Hızlı Aksiyonlar
  const hero = el("div", { class: "stage-hero" },
    el("div", {},
      el("div", { class: "stage-hero__meta" }, `${stage.no}. AŞAMA · ${stats.done}/${stats.total} DENETLENDİ`),
      el("h2", { class: "stage-hero__title" }, stage.title),
      el("p", { class: "stage-hero__lead" }, stage.lead)
    ),
    el("div", { class: "stage-hero__actions" },
      el("button", {
        class: "btn btn--ghost",
        type: "button",
        title: "Bu aşamadaki tüm maddeleri uygun işaretle",
        onclick: () => {
          stage.sections.forEach(sec => sec.items.forEach(it => {
            if (!state.items[it.no]) state.items[it.no] = { s: "ok", note: "" };
            else if (!state.items[it.no].s) state.items[it.no].s = "ok";
          }));
          persist();
          render();
          toast("Aşamadaki incelenmemiş tüm maddeler 'Uygun' işaretlendi.");
        }
      }, "Tümünü Uygun İşaretle"),
      el("button", {
        class: "btn btn--ghost btn--danger",
        type: "button",
        title: "Bu aşamadaki işaretleri temizle",
        onclick: () => {
          if (!confirm("Bu aşamadaki tüm işaretler sıfırlansın mı?")) return;
          stage.sections.forEach(sec => sec.items.forEach(it => {
            delete state.items[it.no];
          }));
          persist();
          render();
          toast("Aşama işaretleri temizlendi.");
        }
      }, "Aşamayı Temizle")
    )
  );

  container.append(hero);

  // Bölümler ve Maddeler
  stage.sections.forEach(sec => {
    if (sec.heading) {
      container.append(el("div", { class: "section-header" }, sec.heading));
    }

    const filteredItems = sec.items.filter(it => matchFilter(it));
    filteredItems.forEach(it => {
      container.append(createItemCard(it));
    });
  });
}

/* ──────────── 3. Görünüm: Zabıt Şerhleri & İtirazlar Paneli ──────────── */
function renderObjectionsView(container) {
  $("#viewTitle").textContent = "Zabıt Şerhleri & İtirazlar";
  $("#viewSubtitle").textContent = "Soruşturma Tutanağına Geçirilecek Şerh ve İtiraz Taslakları";

  const problemItems = ALL_ITEMS.filter(it => state.items[it.no]?.s === "problem");

  const panel = el("div", { class: "objections-panel" },
    el("div", { class: "objections-panel__header" },
      el("div", { class: "objections-panel__title" },
        el("h2", {}, `Tespit Edilen Hukuka Aykırılıklar (${problemItems.length})`),
        el("p", {}, "Aşağıdaki itiraz ve şerhleri doğrudan ifade tutanağı veya sorgu zaptına geçirtebilirsiniz.")
      ),
      problemItems.length > 0 ? el("button", {
        class: "btn btn--primary",
        type: "button",
        onclick: () => copyAllObjections(problemItems)
      },
        el("svg", { class: "ico", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" },
          el("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
          el("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
        ),
        "Tüm Şerhleri Metin Olarak Kopyala"
      ) : null
    )
  );

  if (problemItems.length === 0) {
    panel.append(el("div", { class: "empty-state" },
      el("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" },
        el("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        el("polyline", { points: "22 4 12 14.01 9 11.01" })
      ),
      el("h3", {}, "Henüz Sorunlu / İtirazlı Madde Bulunmuyor"),
      el("p", {}, "Kontrol listesinde denetim yaptıkça 'Sorunlu' olarak işaretlediğiniz maddeler ve hazır zabıt şerhleri burada toplanır.")
    ));
  } else {
    const list = el("div", { class: "objections-list" },
      problemItems.map(it => {
        const itemState = state.items[it.no];
        const objectionText = it.objection || "Bu işlemde usul ve yasaya aykırılık tespit edilmiş olup zabta şerh düşülmüştür.";
        return el("div", { class: "objection-item" },
          el("div", { class: "objection-item__meta" },
            el("span", {}, `Madde ${it.no} · ${it.stageTitle}`),
            it.lawRefs && it.lawRefs.length ? el("span", { class: "law-ref-tag" }, it.lawRefs.join(", ")) : null
          ),
          el("div", { style: "font-size:13.5px;margin-bottom:6px;color:var(--text-muted);" }, it.text),
          el("div", { class: "objection-item__text" }, `“${objectionText}”`),
          itemState?.note ? el("div", { class: "objection-item__note" }, `📝 Müdafi Özel Notu: ${itemState.note}`) : null
        );
      })
    );
    panel.append(list);
  }

  container.append(panel);
}

function copyAllObjections(problemItems) {
  let fullText = `MÜDAFİ ZABIT ŞERHİ VE İTİRAZLARI\n`;
  if (state.meta.suspect) fullText += `Şüpheli: ${state.meta.suspect}\n`;
  if (state.meta.caseNo) fullText += `Soruşturma No: ${state.meta.caseNo}\n`;
  fullText += `Tarih: ${state.meta.date || new Date().toLocaleDateString("tr-TR")}\n\n`;
  fullText += `Soruşturma işlemlerinde tarafımızca tespit edilen hukuka aykırılıklar ve zabta geçirilmesini talep ettiğimiz şerhler aşağıdadır:\n\n`;

  problemItems.forEach((it, idx) => {
    const objText = it.objection || "Hukuka aykırılık tespit edilmiştir.";
    const lawText = it.lawRefs?.length ? ` (${it.lawRefs.join(", ")})` : "";
    fullText += `${idx + 1}. [Madde ${it.no}${lawText}]:\n${objText}\n`;
    const itemNote = state.items[it.no]?.note;
    if (itemNote) fullText += `Ek Açıklama: ${itemNote}\n`;
    fullText += `\n`;
  });

  fullText += `Gereğinin yapılmasını, itirazlarımızın zapta aynen geçirilmesini saygıyla talep ederim.\nŞüpheli Müdafii`;

  navigator.clipboard.writeText(fullText).then(() => {
    toast("Tüm itiraz ve şerhler panoya kopyalandı!");
  }).catch(() => {
    toast("Kopyalama başarısız, lütfen manuel seçin.");
  });
}

/* ──────────── 4. Görünüm: Arama Sonuçları ──────────── */
function renderSearchResults(container) {
  const q = currentQuery.trim().toLowerCase();
  $("#viewTitle").textContent = `Arama: "${currentQuery}"`;

  const results = ALL_ITEMS.filter(it => {
    const textMatch = it.text.toLowerCase().includes(q);
    const tipMatch = it.tip && it.tip.toLowerCase().includes(q);
    const objMatch = it.objection && it.objection.toLowerCase().includes(q);
    const lawMatch = it.lawRefs && it.lawRefs.some(lr => lr.toLowerCase().includes(q));
    const noMatch = String(it.no) === q;
    return textMatch || tipMatch || objMatch || lawMatch || noMatch;
  });

  $("#viewSubtitle").textContent = `${results.length} sonuç bulundu`;

  if (results.length === 0) {
    container.append(el("div", { class: "empty-state" },
      el("h3", {}, "Eşleşen Madde Bulunamadı"),
      el("p", {}, `"${currentQuery}" aramasına uygun hiçbir madde veya kanun referansı bulunamadı.`)
    ));
    return;
  }

  results.forEach(it => {
    container.append(createItemCard(it, q));
  });
}

/* ──────────── Filtre Kontrolü ──────────── */
function matchFilter(it) {
  const s = state.items[it.no]?.s;
  if (currentFilter === "pending") return !s;
  if (currentFilter === "ok") return s === "ok";
  if (currentFilter === "problem") return s === "problem";
  if (currentFilter === "has_tip") return Boolean(it.tip);
  if (currentFilter === "has_objection") return Boolean(it.objection);
  return true;
}

/* ──────────── Madde Kartı Bileşeni (Item Card Component) ──────────── */
function createItemCard(it, highlightQuery = "") {
  const itemState = state.items[it.no] || { s: null, note: "" };
  const cardClass = `item-card ${itemState.s === "ok" ? "item-card--ok" : (itemState.s === "problem" ? "item-card--problem" : "")}`;

  const card = el("div", { class: cardClass, id: `item_${it.no}` },
    el("div", { class: "item-card__main" },
      el("div", { class: "item-card__badge" }, String(it.no)),
      el("div", { class: "item-card__content" },
        // Madde Metni
        el("div", {
          class: "item-card__text",
          html: markQueryHits(it.text, highlightQuery)
        }),

        // Kanun ve Sayfa Referansları Etiketleri
        el("div", { class: "item-card__tags" },
          it.page ? el("span", { class: "page-ref-tag" }, `Sayfa ${it.page}`) : null,
          it.lawRefs && it.lawRefs.length ? it.lawRefs.map(ref => el("span", {
            class: "law-ref-tag",
            onclick: () => {
              $("#searchInput").value = ref;
              currentQuery = ref;
              $("#btnSearchClear").hidden = false;
              render();
            }
          }, ref)) : null
        ),

        // Pratik Avukat Notu (Tip)
        it.tip ? el("div", { class: "item-card__tip" },
          el("svg", { class: "ico", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" },
            el("circle", { cx: "12", cy: "12", r: "10" }),
            el("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
            el("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
          ),
          el("span", { html: `<strong>📌 Pratik Uyarı:</strong> ${markQueryHits(it.tip, highlightQuery)}` })
        ) : null,

        // Hazır İtiraz Şablonu (Sadece Sorunlu seçilince veya özel filtrede görünür)
        (itemState.s === "problem" || currentFilter === "has_objection") && it.objection ? el("div", { class: "item-card__objection" },
          el("div", { class: "item-card__objection-head" },
            el("span", { class: "item-card__objection-title" }, "⚠️ Tutanağa Geçirilecek İtiraz Şerhi:"),
            el("button", {
              class: "btn-xs btn-text",
              type: "button",
              onclick: () => {
                navigator.clipboard.writeText(it.objection);
                toast("İtiraz şerhi kopyalandı!");
              }
            }, "Kopyala")
          ),
          el("div", { class: "item-card__objection-text" }, `“${it.objection}”`)
        ) : null
      )
    ),

    // Durum Seçim Butonları
    el("div", { class: "item-card__actions" },
      el("button", {
        type: "button",
        class: `btn-choice btn-choice--ok ${itemState.s === "ok" ? "is-selected" : ""}`,
        onclick: () => setItemStatus(it.no, "ok")
      },
        el("svg", { class: "ico", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5" },
          el("polyline", { points: "20 6 9 17 4 12" })
        ),
        "Uygun"
      ),
      el("button", {
        type: "button",
        class: `btn-choice btn-choice--problem ${itemState.s === "problem" ? "is-selected" : ""}`,
        onclick: () => setItemStatus(it.no, "problem")
      },
        el("svg", { class: "ico", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5" },
          el("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          el("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ),
        "Sorunlu / İtiraz"
      ),
      itemState.s ? el("button", {
        type: "button",
        class: "btn-clear",
        onclick: () => clearItemStatus(it.no)
      }, "Seçimi Kaldır") : null
    ),

    // Müdafi Özel Notu
    el("div", { class: "item-card__notes" },
      el("textarea", {
        class: "item-card__note-input",
        placeholder: "Bu madde için özel not, tutanak detayı veya saat bilgisi ekleyin…",
        value: itemState.note || "",
        oninput: (e) => {
          if (!state.items[it.no]) state.items[it.no] = { s: null, note: "" };
          state.items[it.no].note = e.target.value;
          persist();
        }
      })
    )
  );

  return card;
}

function setItemStatus(no, status) {
  if (!state.items[no]) state.items[no] = { s: status, note: "" };
  else state.items[no].s = status;
  persist();
  render();
}

function clearItemStatus(no) {
  if (state.items[no]) {
    state.items[no].s = null;
    if (!state.items[no].note) delete state.items[no];
  }
  persist();
  render();
}

/* ──────────── Resmi Yazdırma ve A4 PDF Raporu ──────────── */
function renderPrintReport() {
  const printRoot = $("#printRoot");
  printRoot.innerHTML = "";

  const stats = getOverallStats();
  const problemItems = ALL_ITEMS.filter(it => state.items[it.no]?.s === "problem");

  const page = el("div", { class: "print-page" },
    el("div", { class: "print-header" },
      el("h1", {}, CHECKLIST.meta.documentTitle),
      el("p", {}, CHECKLIST.meta.description),
      el("p", { style: "font-size:8.5pt;color:#666;margin-top:4px;" }, "Avukat M. Baran Selanik tarafından paylaşılan “Müdafi Kontrol Listesi” dikkate alınarak üretilmiştir.")
    ),

    // Dosya Bilgileri Tablosu
    el("table", { class: "print-table" },
      el("tr", {},
        el("th", { style: "width:25%;" }, "Şüpheli / Müvekkil"),
        el("td", { style: "width:25%;" }, state.meta.suspect || "—"),
        el("th", { style: "width:25%;" }, "Soruşturma / Dosya No"),
        el("td", { style: "width:25%;" }, state.meta.caseNo || "—")
      ),
      el("tr", {},
        el("th", {}, "İsnat Edilen Suç"),
        el("td", {}, state.meta.crime || "—"),
        el("th", {}, "Kolluk / Savcılık"),
        el("td", {}, state.meta.office || "—")
      ),
      el("tr", {},
        el("th", {}, "Müdafi Avukat"),
        el("td", {}, state.meta.lawyer || "—"),
        el("th", {}, "Denetim Tarihi"),
        el("td", {}, state.meta.date || new Date().toLocaleDateString("tr-TR"))
      ),
      el("tr", {},
        el("th", {}, "Denetim Özeti"),
        el("td", { colspan: "3" },
          `Toplam 106 Maddeden ${stats.done} madde denetlendi. (${stats.ok} Uygun, ${stats.problem} Hukuka Aykırılık/Sorun tespit edildi.)`
        )
      )
    ),

    // Tespit Edilen Hukuka Aykırılıklar (Zabıt Şerhleri)
    problemItems.length > 0 ? el("div", { class: "print-objections" },
      el("h3", {}, `TESPİT EDİLEN HUKUKA AYKIRILIKLAR VE ZABIT ŞERHLERİ (${problemItems.length})`),
      el("table", { class: "print-table" },
        el("thead", {},
          el("tr", {},
            el("th", { style: "width:10%;" }, "Md."),
            el("th", { style: "width:25%;" }, "Aşama / Konu"),
            el("th", { style: "width:40%;" }, "Hukuka Aykırılık & İtiraz Şerhi"),
            el("th", { style: "width:25%;" }, "Müdafi Notu")
          )
        ),
        el("tbody", {},
          problemItems.map(it => el("tr", {},
            el("td", { style: "font-weight:700;" }, String(it.no)),
            el("td", {}, `${it.stageTitle}<br><small>${it.lawRefs ? it.lawRefs.join(", ") : ""}</small>`),
            el("td", { style: "font-style:italic;" }, it.objection || it.text),
            el("td", {}, state.items[it.no]?.note || "—")
          ))
        )
      )
    ) : null,

    // Tüm Maddelerin Denetim Tablosu
    el("h3", { style: "margin:16px 0 8px;font-size:12pt;" }, "CMK SORUŞTURMA DENETİM LİSTESİ DÖKÜMÜ"),
    el("table", { class: "print-table" },
      el("thead", {},
        el("tr", {},
          el("th", { style: "width:8%;" }, "No"),
          el("th", { style: "width:54%;" }, "Denetlenen Husus (Madde Metni)"),
          el("th", { style: "width:14%;" }, "Hukuki Dayanak"),
          el("th", { style: "width:10%;" }, "Sonuç"),
          el("th", { style: "width:14%;" }, "Not")
        )
      ),
      el("tbody", {},
        ALL_ITEMS.map(it => {
          const s = state.items[it.no]?.s;
          const statusText = s === "ok" ? "UYGUN" : (s === "problem" ? "SORUNLU" : "—");
          return el("tr", {},
            el("td", { style: "text-align:center;font-weight:600;" }, String(it.no)),
            el("td", {}, it.text),
            el("td", {}, it.lawRefs ? it.lawRefs.join(", ") : "—"),
            el("td", { style: `font-weight:700;text-align:center;color:${s === "ok" ? "#2e7d4f" : (s === "problem" ? "#b0332c" : "#888")}` }, statusText),
            el("td", {}, state.items[it.no]?.note || "")
          );
        })
      )
    ),

    // İmza Bloğu
    el("div", { class: "print-signature" },
      el("div", { class: "print-signature-box" },
        el("p", { style: "font-weight:700;" }, state.meta.lawyer || "Şüpheli Müdafii"),
        el("p", {}, "Avukat"),
        el("p", { style: "margin-top:20px;" }, "İmza")
      )
    )
  );

  printRoot.append(page);
  window.print();
}

/* ──────────── İçe / Dışa Aktarma (Import/Export) ──────────── */
function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const filename = `CMK_Mudafi_Kontrol_${state.meta.suspect ? state.meta.suspect.replace(/\s+/g, "_") : "Dosya"}_${new Date().toISOString().split("T")[0]}.json`;
  const dl = el("a", { href: dataStr, download: filename });
  document.body.append(dl);
  dl.click();
  dl.remove();
  toast("Dosya başarıyla indirildi.");
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.items && typeof parsed.items === "object") {
        state = {
          meta: parsed.meta || {},
          items: parsed.items || {},
          detention: parsed.detention || null,
          theme: parsed.theme || "light"
        };
        persist();
        applyTheme(state.theme);
        render();
        toast("Veriler başarıyla içe aktarıldı.");
      } else {
        alert("Geçersiz dosya formatı.");
      }
    } catch (err) {
      alert("JSON dosyası ayrıştırılamadı.");
    }
  };
  reader.readAsText(file);
}

function resetAll() {
  if (!confirm("TÜM VERİLER SIFIRLANSIN MI?\nBu işlem mevcut denetim işaretlerini, notları ve dosya bilgilerini silecektir.")) return;
  state = {
    meta: { date: new Date().toISOString().split("T")[0] },
    items: {},
    detention: null,
    theme: state.theme || "light"
  };
  persist();
  render();
  toast("Tüm veriler sıfırlandı.");
}

/* ──────────── Olay Dinleyicileri (Event Listeners) ──────────── */
function initEvents() {
  // Menü Burger (Mobil)
  $("#btnBurger").addEventListener("click", () => {
    $("#sidebar").classList.toggle("sidebar--open");
  });

  // Tema Butonu
  $("#btnThemeToggle").addEventListener("click", () => {
    const nextTheme = state.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  // Arama Girişi
  const searchInput = $("#searchInput");
  const btnSearchClear = $("#btnSearchClear");

  searchInput.addEventListener("input", (e) => {
    currentQuery = e.target.value;
    btnSearchClear.hidden = !currentQuery;
    render();
  });

  btnSearchClear.addEventListener("click", () => {
    searchInput.value = "";
    currentQuery = "";
    btnSearchClear.hidden = true;
    render();
  });

  // Filtre Seçimi
  $("#filterSelect").addEventListener("change", (e) => {
    currentFilter = e.target.value;
    render();
  });

  // Üst Bar Hızlı Zabıt Şerhleri Butonu
  $("#btnQuickObjections").addEventListener("click", () => {
    navigate("objections");
  });

  // Kenar Çubuğu Butonları
  $("#btnPrint").addEventListener("click", renderPrintReport);
  $("#btnExport").addEventListener("click", exportData);
  $("#btnImport").addEventListener("click", () => $("#importFile").click());
  $("#importFile").addEventListener("change", (e) => {
    if (e.target.files?.[0]) importData(e.target.files[0]);
  });
  $("#btnReset").addEventListener("click", resetAll);

  // Gözaltı Modal Olayları
  $("#btnEditDetention").addEventListener("click", () => {
    if (state.detention?.captureTime) {
      $("#inputCaptureTime").value = state.detention.captureTime;
      $("#selectDetentionType").value = String(state.detention.type || 24);
      $("#inputTravelHours").value = String(state.detention.travelHours || 0);
    } else {
      const now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      $("#inputCaptureTime").value = now.toISOString().slice(0, 16);
    }
    $("#detentionModal").hidden = false;
  });

  const closeModal = () => { $("#detentionModal").hidden = true; };
  $("#btnCloseDetentionModal").addEventListener("click", closeModal);
  $("#detentionModalOverlay").addEventListener("click", closeModal);

  $("#btnSaveDetention").addEventListener("click", () => {
    const captureTime = $("#inputCaptureTime").value;
    if (!captureTime) {
      alert("Lütfen yakalama tarihi ve saatini seçin.");
      return;
    }
    state.detention = {
      captureTime,
      type: Number($("#selectDetentionType").value || 24),
      travelHours: Number($("#inputTravelHours").value || 0)
    };
    persist();
    updateDetentionWidget();
    closeModal();
    toast("Gözaltı süresi başlatıldı.");
  });

  $("#btnClearDetention").addEventListener("click", () => {
    state.detention = null;
    persist();
    updateDetentionWidget();
    closeModal();
    toast("Gözaltı süresi sıfırlandı.");
  });
}

/* ──────────── Başlatıcı (Init) ──────────── */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(state.theme || "light");
  initEvents();
  render();
});

})();
