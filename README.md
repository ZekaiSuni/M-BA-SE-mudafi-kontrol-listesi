# Müdafi Kontrol Listesi — CMK Soruşturma Evresi ⚖️

[![GitHub Pages](https://img.shields.io/badge/Canlı%20Uygulama-GitHub%20Pages-721c2a?style=for-the-badge&logo=github)](https://zekaisuni.github.io/M-BA-SE-mudafi-kontrol-listesi/)
[![PWA](https://img.shields.io/badge/PWA-Çevrimdışı%20Destekli-dfb44e?style=for-the-badge)](https://zekaisuni.github.io/M-BA-SE-mudafi-kontrol-listesi/)
[![License: MIT](https://img.shields.io/badge/Lisans-MIT-1e7e48?style=for-the-badge)](LICENSE)

Ceza Muhakemesi Kanunu (CMK) soruşturma evresinde görev alan avukatlar ve müdafiler için geliştirilmiş **dijital saha denetim asistanı, canlı gözaltı sayacı ve itiraz şerhi üreteci**.

🌐 **Canlı Web Uygulaması:**  
👉 **[https://zekaisuni.github.io/M-BA-SE-mudafi-kontrol-listesi/](https://zekaisuni.github.io/M-BA-SE-mudafi-kontrol-listesi/)**

---

## 📌 Teşekkür & Atıf

Bu uygulama; **Sayın Avukat M. Baran Selanik** tarafından titizlikle hazırlanan ve X (Twitter) platformunda kamuoyuyla paylaşılan 8 sayfalık **“Müdafi Kontrol Listesi — CMK Soruşturma Evresi”** dokümanı esas alınarak, karakol ve adliye koridorlarında avukatların en pratik ve hızlı şekilde faydalanabilmesi amacıyla açık kaynaklı bir web aracına dönüştürülmüştür.

---

## 🎯 Temel Özellikler

- ⚖️ **Eksiksiz 7 Aşama & 106 Denetim Maddesi:** Orijinal belgedeki tüm maddeler sıra numaraları, kanun referansları ve sayfa numaralarıyla korunmuştur.
- ⏱️ **Canlı Gözaltı Süre Sayacı (CMK m. 91):** Yakalama saati ve yol süresine (azami 12 saat) göre azami 24 saatlik yasal gözaltı süresini anlık olarak geri sayar; süre dolumunda kırmızı alarm verir.
- 📋 **Hukuki Zabıt Şerhleri & İtiraz Şablonları:** Tespit edilen her usulsüzlük için (hukuka aykırı arama, avukatsız ifade, doktor mahremiyeti ihlali vb.) tek tıkla kopyalanıp ifade/sorgu tutanağına geçirtilebilecek hazır şerh metinleri.
- 💡 **Pratik Müdafilik Tavsiyeleri:** Orijinal dokümandaki kritik savunma stratejileri ve sahadaki tecrübe notları ayrı vurgularla sunulur.
- 🖨️ **Resmi A4 Rapor & PDF Çıktısı:** Soruşturma künyesi, tespit edilen hukuka aykırılıklar tablosu, kanun maddeleri ve müdafi imza bloğuyla resmi yazdırma çıktısı.
- 🔒 **Sıfır Sunucu & %100 Müvekkil Gizliliği:** Hiçbir veri harici sunucuya veya buluta gönderilmez. Tüm veriler yalnızca avukatın kendi cihazındaki tarayıcı hafızasında (LocalStorage) şifresiz/güvenli tutulur.
- 📱 **Çevrimdışı Çalışma (PWA):** İnternet bağlantısı olmasa dahi nezarethanede, karakolda veya bodrum kattaki sorgu odasında tam kapasite çalışır; telefona uygulama olarak yüklenebilir.
- 🎨 **Ceza Yargısı Bordo & Altın Paleti:** Ceza mahkemesi cübbesi bordosu (`#721c2a`) ve asil altın sırma (`#dfb44e`) renkleriyle tasarlanmış, göz yormayan Açık ve Koyu Tema seçenekleri.
- 💾 **JSON Yedekleme:** Farklı soruşturma dosyaları için verileri tek tıkla dışa aktarma ve tekrar yükleme olanağı.

---

## 📑 7 Aşama Rehberi

| Aşama | Başlık | Kapsam & Kanuni Dayanaklar |
|:---:|---|---|
| **1** | İlgili Birime Gitmeden Önce Yapılacaklar | Görevlendirme teyidi, dosya inceleme hazırlığı, soruşturmanın gizliliği sınırları *(CMK m. 153)* |
| **2** | İlgili Birime Gidildiğinde Yapılacak İlk İşlemler | Müdafi girişi, dosya inceleme ve örnek alma hakkı, gizlilik kararı denetimi *(CMK m. 153/2)* |
| **3** | Yakalama ve Gözaltı Kararının Denetimi | Yakalama tutanağı, gözaltı gerekçeleri, azami süreler, sağlık kontrolü ve hekim mahremiyeti *(CMK m. 90, 91)* |
| **4** | İfade Öncesi / Koruma Tedbirlerinin Denetimi | Arama, elkoyma, dijital inceleme, beden muayenesi, teşhis ve teknik araçlarla izleme denetimleri |
| **5** | Şüpheli ile Başbaşa Görüşme | Vekaletnamesiz görüşme, görüşme gizliliği, susma hakkı ve savunma stratejisinin belirlenmesi *(CMK m. 154)* |
| **6** | Kollukta İfade Alma Aşaması | İfade alma yasakları, baskı/vaat denetimi, CMK m. 147 haklarının hatırlatılması, tutanağa şerh düşme *(CMK m. 147, 148)* |
| **7** | Savcılık İfadesi ve Sulh Ceza Hâkimliği | Savcılık sevki, tutuklama ve adli kontrol istemine karşı savunma, delil karartma değerlendirmesi *(CMK m. 100, 109)* |

---

## 🚀 Kurulum ve Yerel Kullanım

Uygulama hiçbir kütüphane, derleme adımı (build) veya Node.js bağımlılığı gerektirmez:

1. Bu depoyu indirin:
   ```bash
   git clone https://github.com/ZekaiSuni/M-BA-SE-mudafi-kontrol-listesi.git
   ```
2. Klasör içerisindeki `index.html` dosyasını tarayıcınızda çift tıklayarak doğrudan çalıştırın.
3. Ya da doğrudan internet üzerinden [https://zekaisuni.github.io/M-BA-SE-mudafi-kontrol-listesi/](https://zekaisuni.github.io/M-BA-SE-mudafi-kontrol-listesi/) adresini ziyaret edin.

---

## 📁 Kaynak Belgeler

Orijinal 8 sayfalık tarama nüshaları ve her sayfanın kelimesi kelimesine metin transkripsiyonu [`kaynak_belgeler/`](kaynak_belgeler/) dizininde yer almaktadır:
- `kaynak_belgeler/taramalar/`: `CMK 1.jpg` – `CMK 8.jpg`
- `kaynak_belgeler/metinler/`: `page1.md` – `page8.md`

---

## ⚖️ Yasal Uyarı

Bu yazılım bir kontrol ve denetim rehberi niteliğinde olup, doğrudan hukuki tavsiye veya mütalaa teşkil etmez. Somut olayın özelliklerine göre uygulanacak usul kuralları ve savunma taktikleri avukatın mesleki takdirindedir.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında açık kaynak olarak lisanslanmıştır.
