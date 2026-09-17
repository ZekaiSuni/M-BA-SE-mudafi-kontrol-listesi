/* ════════════════════════════════════════════════════════════════
   MÜDAFİ KONTROL LİSTESİ — CMK SORUŞTURMA EVRESİ (RESMİ VERİ TABANI)
   Kaynak: 8 Sayfalık Orijinal Taranmış Belge (CMK 1.jpg – CMK 8.jpg)
   Toplam 7 Aşama, 106 Madde, Sayfa Dağılımı ve Hazır İtiraz Şerhleri
   ════════════════════════════════════════════════════════════════ */

const CHECKLIST = {
  meta: {
    title: "Müdafi Kontrol Listesi",
    subtitle: "CMK · Soruşturma Evresi",
    documentTitle: "CEZA MUHAKEMESİ · SORUŞTURMA EVRESİ — MÜDAFİ KONTROL LİSTESİ",
    description: "Yakalama, gözaltı, ifade alma, kolluk, Cumhuriyet savcılığı ve sulh ceza hâkimliği aşamalarında müdafiin denetleyeceği hususlara ilişkin öneriler",
    attribution: "Av. M. Baran Selanik tarafından hazırlanan ve paylaşılan “Müdafi Kontrol Listesi” esas alınarak geliştirilmiştir.",
    totalItems: 106,
    totalPages: 8,
    version: "2.1"
  },

  stages: [
    /* ─────────────── 1. AŞAMA ─────────────── */
    {
      id: "asama1",
      no: 1,
      title: "Görevlendirme ve hazırlık",
      subtitle: "İlgili birime gitmeden önce",
      lead: "Görevlendirmeyi üstlendikten ilgili birime ulaşana kadarki hazırlık, iletişim ve ilk temas adımları.",
      sections: [
        {
          heading: "İLGİLİ BİRİME GİTMEDEN ÖNCE",
          items: [
            {
              no: 1,
              page: 1,
              text: "Dosyada benden önce görevlendirilmiş/atanmış ya da seçilmiş bir müdafi olup olmadığını kontrol ettim; varsa herhangi bir işlem yapmadan durumu şüpheliye, o müdafiye, savcılığa ve baroya bildirdim.",
              tip: "CMK'den görevlendirilen bir müdafii olarak şüphelinin özel müdafii olması durumunda dosyadaki görevinizin sona ereceğini unutmayınız.",
              lawRefs: ["CMK m. 156"],
              objection: "Şüphelinin önceden görevlendirilmiş/seçilmiş müdafii bulunduğu anlaşıldığından, mükerrer müdafilik ve savunma hakkının kısıtlanmaması adına durumun açıklığa kavuşturulması talep olunur."
            },
            {
              no: 2,
              page: 1,
              text: "Özel müdafilikte, benimle iletişime geçen kişiden; şüpheliye, isnat edilen suça ve şüphelinin götürüldüğü yere ilişkin ayrıntılı bilgi aldım.",
              tip: null,
              lawRefs: ["Av. K. m. 34"],
              objection: null
            },
            {
              no: 3,
              page: 1,
              text: "Şüphelinin yaşını (çocuk / yetişkin) ve fiilen tutulduğu yeri öğrendim.",
              tip: "Çocuk şüphelilerde Çocuk Koruma Kanunu ve CMK hükümleri gereği işlemler çocuk büro veya doğrudan savcılık tarafından yürütülmelidir.",
              lawRefs: ["ÇKK m. 15", "CMK m. 150/2"],
              objection: "Müvekkilin çocuk olduğu gözetilmeden genel soruşturma usullerinin tatbik edilmesi ÇKK ve CMK m. 150/2'ye açıkça aykırıdır."
            },
            {
              no: 4,
              page: 1,
              text: "Soruşturma savcısı, nöbetçi savcı veya sulh ceza hâkimliği ile baroda ulaşabileceğim yetkili kişilerin (Avukat Hakları Merkezi, yönetim kurulu vb.) iletişim bilgilerini temin ettim.",
              tip: null,
              lawRefs: ["Av. K. m. 58"],
              objection: null
            },
            {
              no: 5,
              page: 1,
              text: "Not defteri, boş A4 kağıdı, kalem ve ilgili ceza muhakemesi mevzuatını (yönetmelikler dâhil) yanıma aldım.",
              tip: null,
              lawRefs: [],
              objection: null
            },
            {
              no: 6,
              page: 1,
              text: "Cep telefonu şarj sorununa karşı önlem aldım (powerbank) ve bulunduğum yerdeki Cumhuriyet Başsavcılığı e-posta adresini not ettim (dilekçe sunumu için gerekebilir).",
              tip: null,
              lawRefs: [],
              objection: null
            },
            {
              no: 7,
              page: 1,
              text: "Avukat kimliğimin yanımda olduğundan emin oldum.",
              tip: null,
              lawRefs: ["Av. K. m. 9"],
              objection: null
            }
          ]
        }
      ]
    },

    /* ─────────────── 2. AŞAMA ─────────────── */
    {
      id: "asama2",
      no: 2,
      title: "Birime giriş ve iletişim",
      subtitle: "Kolluk · Savcılık · Hâkimlik",
      lead: "Kolluk, savcılık veya mahkeme birimlerine giriş, kimlik ibrazı ve müdafilik yetkilerinin kullanımı.",
      sections: [
        {
          heading: "KOLLUK · SAVCILIK · HÂKİMLİK",
          items: [
            {
              no: 8,
              page: 1,
              text: "Girişte kim olduğumu ve hangi nedenle geldiğimi açıklayıp avukat kimliğimi gösterdim.",
              tip: null,
              lawRefs: ["Av. K. m. 9", "Av. K. m. 2"],
              objection: null
            },
            {
              no: 9,
              page: 1,
              text: "Birime girişte zorluk çıkarılması hâlinde; önceden edindiğim iletişim bilgilerinden yararlanarak kolluk amiri, nöbetçi savcılık ve baro birimleriyle görüştüm ve durumu tutanak altına aldım.",
              tip: "Müdafiin görevini yapmasının engellenmesi TCK m. 265 (Görevi yaptırmamak için direnme) ve TCK m. 257 (Görevi kötüye kullanma) suçlarını oluşturur.",
              lawRefs: ["Av. K. m. 2", "Av. K. m. 58", "TCK m. 257"],
              objection: "Müdafiin kolluk birimine ve şüphelinin yanına girişine haksız ve hukuka aykırı şekilde engel çıkarılmış olup durum tarafımızca tutanak altına alınmıştır; ilgililer hakkında suç duyurusunda bulunulacaktır."
            },
            {
              no: 10,
              page: 1,
              text: "Hakkımda CMK m. 151/3 uyarınca müdafilikten yasaklama kararı olup olmadığını kontrol ettim; varsa CMK m. 151/4 ve m. 267 uyarınca itiraz ettim.",
              tip: null,
              lawRefs: ["CMK m. 151/3", "CMK m. 151/4", "CMK m. 267"],
              objection: "Müdafilikten yasaklama kararı hukuki dayanaktan yoksun olup savunma hakkının özünü zedelemektedir; CMK m. 151/4 ve m. 267 gereğince itiraz ederiz."
            },
            {
              no: 11,
              page: 2,
              text: "Şüpheliyle önce kısa bir ön görüşme yaparak kendimi tanıttım; dosyayı inceledikten sonra ayrıntılı görüşeceğimi söyledim ve maddi-manevi bütünlüğünün zarar görmediğinden emin oldum.",
              tip: null,
              lawRefs: ["CMK m. 149", "CMK m. 154"],
              objection: "Müdafi ile şüphelinin baş başa, kısıtlama olmaksızın görüşmesi engellenemez; aksi yöndeki uygulama savunma hakkının ağır ihlalidir."
            },
            {
              no: 12,
              page: 2,
              text: "Soruşturmayı yürüten kolluk görevlisiyle görüştüm (savcının sözlü veya yazılı talimatları, tüm işlemlerin tutanağa geçirilip geçirilmediği, işlemleri yapan veya yazanların sicil numaralarının ve imzalarını vb. bilgileri kontrol ettim).",
              tip: null,
              lawRefs: ["CMK m. 161", "CMK m. 169"],
              objection: "İşlemleri gerçekleştiren kolluk görevlilerinin sicil ve imzalarının tutanakta yer almaması CMK m. 169'a aykırılık teşkil etmektedir."
            }
          ]
        }
      ]
    },

    /* ─────────────── 3. AŞAMA ─────────────── */
    {
      id: "asama3",
      no: 3,
      title: "Soruşturma dosyasının incelenmesi",
      subtitle: "Genel · Kısıtlama · Yakalama · Gözaltı · Diğer Tedbirler",
      lead: "Evrak inceleme, kısıtlama denetimi, yakalama-gözaltı usul ve süreleri, arama-elkoyma koruma tedbirleri denetimi.",
      sections: [
        {
          heading: "A) GENEL",
          items: [
            {
              no: 13,
              page: 2,
              text: "Dosya içeriğinin tamamını CMK m. 153/1 uyarınca inceledim ve istediğim belgelerin bir örneğini harçsız aldım.",
              tip: null,
              lawRefs: ["CMK m. 153/1"],
              objection: "Müdafiin dosya içeriğini inceleme ve harçsız örnek alma hakkı CMK m. 153/1 ile teminat altındadır; evrakın gizlenmesi veya incelettirilmemesi hukuka aykırıdır."
            },
            {
              no: 14,
              page: 2,
              text: "Dosyayı şüpheli ile görüşmeden önce/sonra inceledim; görüşme sonrası yeniden inceleme ihtiyacı doğduysa inceleyip şüpheliyi bilgilendirdim.",
              tip: null,
              lawRefs: ["CMK m. 153"],
              objection: null
            }
          ]
        },
        {
          heading: "B) KISITLAMA KARARI",
          items: [
            {
              no: 15,
              page: 2,
              text: "Dosyada CMK m. 153/2 uyarınca bir kısıtlama kararı olup olmadığını kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 153/2"],
              objection: null
            },
            {
              no: 16,
              page: 2,
              text: "Kısıtlama kararı varsa bir örneğini istedim (kısıtlama kararının kendisi kısıtlanamaz).",
              tip: "Kısıtlama kararının kendisi asla dosya kısıtlaması kapsamına sokulamaz; bir örneğinin müdafiye verilmesi zorunludur.",
              lawRefs: ["CMK m. 153/2"],
              objection: "Kısıtlama kararının kendisi kısıtlama kapsamına alınamaz; kararın suretinin tarafımıza verilmemesi savunma hakkını yok saymaktadır."
            },
            {
              no: 17,
              page: 2,
              text: "Kararın tarihini, hangi suç ve şüpheli için verildiğini, şüpheliye isnat edilen suçun CMK’nin 153. maddesinde sayılan suçlardan olup olmadığını inceledim.",
              tip: null,
              lawRefs: ["CMK m. 153/2"],
              objection: "İsnat edilen suç CMK m. 153/2'de tahdidi olarak sayılan katalog suçlardan olmadığından dosya kısıtlama kararı kanuna açıkça aykırıdır."
            },
            {
              no: 18,
              page: 2,
              text: "Kısıtlama kararına CMK m. 267 uyarınca itiraz ettim.",
              tip: null,
              lawRefs: ["CMK m. 153/2", "CMK m. 267"],
              objection: "Soruşturmanın amacını tehlikeye düşürecek somut bir olgu gösterilmeksizin verilen soyut kısıtlama kararına CMK m. 267 uyarınca itiraz ederiz."
            },
            {
              no: 19,
              page: 2,
              text: "Kısıtlama olsa dahi CMK m. 153/3 uyarınca kısıtlanamayacak belgeleri (şüphelinin/yakalananın ifade tutanağı, hazır bulunmaya yetkili olduğu işlem tutanakları, adli muayene raporları dâhil bilirkişi raporları) inceledim.",
              tip: "Kısıtlama kararı olsa dahi; şüphelinin ifadesi, bilirkişi raporları ve adli muayene raporları KISITLANAMAZ!",
              lawRefs: ["CMK m. 153/3"],
              objection: "CMK m. 153/3 emredici hükmü gereğince ifade tutanakları, bilirkişi raporları ve adli muayene raporları kısıtlama kapsamı dışındadır; bu belgelerin müdafiden gizlenmesi açık kanun ihlalidir."
            },
            {
              no: 20,
              page: 2,
              text: "Bana verilenler dışında başka belge/tutanak olup olmadığını sordum ve tarafıma verilen belgeler için bir belge inceleme tutanağı düzenlenmesini istedim.",
              tip: "Böyle bir tutanak düzenlenmezse dosya inceleme saatini ve dakikasını yazarak, hangi belgelerin tarafınıza verildiğine ilişkin tutanağı kendiniz tutabilirsiniz. Ayrıca ifade tutanağında size söz verildiğinde, ifadeden önce hangi belgelerin inceletildiğini belirtebilirsiniz.",
              lawRefs: ["CMK m. 153", "CMK m. 169"],
              objection: "Tarafımıza incelenmek üzere sunulan evraklar için belge inceleme tutanağı tanziminden imtina edilmiş olup hangi evrakların incelendiği tarafımızca tutanak altına alınmıştır."
            }
          ]
        },
        {
          heading: "C) İSNAT, YAKALAMA VE ZOR KULLANMA",
          items: [
            {
              no: 21,
              page: 2,
              text: "İsnat edilen suçun şikâyete bağlı olup olmadığını; ön ödeme, uzlaştırma, kamu davasının açılmasının ertelenmesi, seri muhakeme veya etkin pişmanlık kapsamında bulunup bulunmadığını değerlendirdim.",
              tip: null,
              lawRefs: ["CMK m. 250", "CMK m. 253", "TCK m. 73"],
              objection: null
            },
            {
              no: 22,
              page: 2,
              text: "Şikâyete bağlı bir suçta CMK m. 90/3 ve m. 96 uyarınca şikâyetin varlığının araştırıldığını denetledim.",
              tip: null,
              lawRefs: ["CMK m. 90/3", "CMK m. 96"],
              objection: "Şikâyete bağlı suçta hak sahibi tarafından usulüne uygun yapılmış bir şikâyet bulunmaksızın yakalama ve soruşturma işlemi yapılması CMK m. 90/3'e aykırıdır."
            },
            {
              no: 23,
              page: 3,
              text: "Yakalama işlemini denetledim: Yakalamanın kim tarafından, hangi dayanakla (suçüstü/yakalama emri/tutuklama kararı) yapıldığı; yeri, tarihi, saati ile yakalananın neden ve nasıl yakalandığının tutanakta yazılı olduğunu kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 90", "YGAİAY m. 5"],
              objection: "Yakalama tutanağında yakalamanın kanuni dayanağı, tam saati ve yakalama sebebi somut olarak gösterilmemiş olup işlem usul ve yasaya aykırıdır."
            },
            {
              no: 24,
              page: 3,
              text: "Tutanakta hukuki dayanağın (CMK m. 90/1, m. 90/2 veya yakalama emri) açıkça gösterildiğini denetledim.",
              tip: null,
              lawRefs: ["CMK m. 90/1", "CMK m. 90/2"],
              objection: "Yakalama tutanağında hukuki dayanak açıkça belirtilmemiştir; keyfi yakalama yasağı ihlal edilmiştir."
            },
            {
              no: 25,
              page: 3,
              text: "Yakalama tutanağının bir suretinin müvekkile verilip verilmediğini kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 97", "YGAİAY m. 6"],
              objection: "CMK m. 97 ve Yönetmelik m. 6 uyarınca yakalama tutanağının bir nüshasının şüpheliye derhâl verilmesi zorunlu olup bu yükümlülük yerine getirilmemiştir."
            },
            {
              no: 26,
              page: 3,
              text: "CMK m. 90/2'ye dayanılıyorsa üç şartın da (tutuklama kararı veya yakalama emri düzenlenmesini gerektiren bir hal + gecikmesinde sakınca bulunan hâl + Cumhuriyet savcısına veya kolluk amirlerine derhâl başvurma imkânının bulunmaması) ayrı ayrı gerekçelendirildiğini inceledim.",
              tip: "Bu üç şartın aynı anda var olması gerektiğini unutmayın.",
              lawRefs: ["CMK m. 90/2"],
              objection: "CMK m. 90/2'deki üç kümülatif şart (tutuklama/yakalama gerektiren hal + gecikmesinde sakınca + savcı/amire başvuramama) somut olarak gerçekleşmediğinden yakalama hukuka aykırıdır."
            },
            {
              no: 27,
              page: 3,
              text: "Suçüstü iddiasının bulunması halinde CMK m. 2/1-j'deki hangi alt tipe (işlenmekte olan suç; henüz işlenmiş fiil; takip sonucu yakalanma; suçun pek az önce işlendiğini gösteren eşya ile yakalanma) girdiğini belirledim.",
              tip: null,
              lawRefs: ["CMK m. 2/1-j"],
              objection: "Olayda CMK m. 2/1-j anlamında hiçbir suçüstü hali bulunmadığı halde suçüstü hükümlerine dayanılarak işlem tesisi hukuka aykırıdır."
            },
            {
              no: 28,
              page: 3,
              text: "Yakalama işleminin hukuka uygunluğunu denetleyebilmek için yakalama saati, adli muayene saati (gözaltı giriş raporu) ve nezarethane giriş saatlerinin örtüşüp örtüşmediğini karşılaştırdım.",
              tip: null,
              lawRefs: ["CMK m. 90", "YGAİAY m. 9"],
              objection: "Yakalama saati ile doktor raporu ve nezarethane giriş saatleri arasında açıklanamayan zaman çelişkileri mevcuttur; fiili gözaltı süresi gizlenmektedir."
            },
            {
              no: 29,
              page: 3,
              text: "Yakalanan kişiye haklarının CMK m. 90/4 ve m. 97 uyarınca tam olarak anlatılıp anlatılmadığını denetledim.",
              tip: null,
              lawRefs: ["CMK m. 90/4", "CMK m. 97"],
              objection: "Müvekkile yakalama anında kanuni hakları bildirilmemiş, Anayasa m. 19 ve CMK m. 90/4 ihlal edilmiştir."
            },
            {
              no: 30,
              page: 3,
              text: "Şüpheli ve Sanık Hakları Formunun imzalı olarak müvekkile verildiğini ve müvekkilin haklarını anladığını kendisine sorarak teyit ettim.",
              tip: null,
              lawRefs: ["YGAİAY Ek-A"],
              objection: "Şüpheli ve Sanık Hakları Formu usulünce tanzim edilip müvekkile tebliğ edilmemiştir."
            },
            {
              no: 31,
              page: 3,
              text: "Zor kullanma ve kelepçe uygulamasını denetledim. Gerekçesi, kanuna uygunluğu ve ölçülülüğü; koşulları yoksa işkence/kötü muamele yönünden değerlendirdim. İşkence ve kötü muamele bulgusu veya şüphelinin iddiası varsa durumu derhâl baroya bildirdim.",
              tip: null,
              lawRefs: ["PVSK m. 16", "CMK m. 93", "TCK m. 94"],
              objection: "Ölçülülük ve zorunluluk şartları oluşmaksızın orantısız güç ve zor kullanılmış olup kötü muamele/işkence oluşturan eylemler nedeniyle suç duyurusunda bulunulacaktır."
            },
            {
              no: 32,
              page: 3,
              text: "Kelepçe takılmışsa CMK m. 93'teki şartların (sevk sırasında kaçma, kendisine veya başkalarına zarar verme tehlikesi) tutanakta somut olarak gösterildiğini denetledim.",
              tip: "Ters kelepçenin işkence/kötü muamele oluşturacağını unutmayın.",
              lawRefs: ["CMK m. 93", "YGAİAY m. 7"],
              objection: "CMK m. 93 şartları (kaçma veya saldırı tehlikesi) bulunmaksızın ve somut gerekçe gösterilmeksizin kelepçe/ters kelepçe takılması kanuna ve insan onuruna aykırıdır."
            },
            {
              no: 33,
              page: 3,
              text: "Zor kullanılmışsa yakalama anındaki sağlık durumunun hekim raporuyla doğru şekilde belirlendiğini kontrol ettim.",
              tip: null,
              lawRefs: ["YGAİAY m. 9"],
              objection: "Zor kullanılmasına rağmen müvekkilin yakalama anındaki sağlık durumu hekim raporunda ayrıntılı tespit edilmemiş, lezyonlar zapta geçirilmemiştir."
            },
            {
              no: 34,
              page: 3,
              text: "Yakalama emri üzerine yakalama yapılmışsa, emrin konusu kalmadığından CMK m. 90/6 uyarınca yakalama emrinin iadesinin istendiğini kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 90/6"],
              objection: "Yakalama emrinin infazı akabinde CMK m. 90/6 gereği emrin derhal iadesi sağlanmalıdır."
            },
            {
              no: 35,
              page: 3,
              text: "Çocuklara zincir/kelepçe ve benzeri aletlerin takılmadığını kontrol ettim.",
              tip: "Çocuklara hiçbir surette zincir, kelepçe veya benzeri bağlama vasıtaları takılamaz (ÇKK m. 18).",
              lawRefs: ["ÇKK m. 18", "CMK m. 93"],
              objection: "Çocuk Koruma Kanunu m. 18'in amir hükmüne aykırı olarak suça sürüklenen çocuğa kelepçe/zincir takılmıştır; ilgililer hakkında yasal yollara başvurulacaktır."
            },
            {
              no: 36,
              page: 3,
              text: "İsnat edilen suçun yakalama gerektirir nitelikte olup olmadığını değerlendirdim; yakalamayı hukuka aykırı görüyorsam CMK m. 91/5, YGAİAY m. 6/4 ve 15 uyarınca sulh ceza hâkimliğine başvurdum.",
              tip: null,
              lawRefs: ["CMK m. 91/5", "YGAİAY m. 6/4", "YGAİAY m. 15"],
              objection: "Yakalamanın koşulları bulunmadığından yakalama işlemine ve gözaltına derhal son verilmesi talebiyle CMK m. 91/5 uyarınca Sulh Ceza Hâkimliğine itiraz edilmiştir."
            },
            {
              no: 37,
              page: 3,
              text: "Nezarethaneye Alınanlar Defterindeki kayıtların dosyadaki diğer tutanaklarla uyumlu olduğunu karşılaştırdım.",
              tip: null,
              lawRefs: ["YGAİAY m. 12"],
              objection: "Nezarethane defter kayıtları ile yakalama/üst arama tutanakları arasındaki zaman ve işlem uyumsuzlukları zapta geçirilmiştir."
            }
          ]
        },
        {
          heading: "D) GÖZALTI KARARI VE SÜRELER",
          items: [
            {
              no: 38,
              page: 4,
              text: "Gözaltı kararının yazılı olduğunu ve CMK m. 91/2'deki iki şartın (işlemin soruşturma yönünden zorunlu olması + kişinin suç işlediği şüphesini gösteren somut delillerin varlığı) ayrı ayrı gerekçelendirildiğini denetledim.",
              tip: null,
              lawRefs: ["CMK m. 91/2"],
              objection: "Gözaltı kararında CMK m. 91/2'de aranan 'soruşturma için zorunlu olma' ve 'somut delil bulunma' şartları gerekçelendirilmemiştir; gözaltı kararı hukuka aykırıdır."
            },
            {
              no: 39,
              page: 4,
              text: "Gözaltı işlemini, emri kimin verdiği, kanuni dayanağı, süreler (CMK m. 91), nezarethane defteri kayıtları ve olası süre aşımı olup olmadığı yönünden denetledim. CMK m. 91/4 kapsamındaki hâllerde isnat edilen suçun maddede sayılan katalog suçlardan olup olmadığını ve suç üstü halinin varlığını inceledim.",
              tip: null,
              lawRefs: ["CMK m. 91", "CMK m. 91/4"],
              objection: "Kolluk amiri tarafından verilen gözaltı kararının isnat edilen suç itibariyle CMK m. 91/4 şartlarını ve suçüstü kriterini taşımadığı tespit edilmiştir."
            },
            {
              no: 40,
              page: 4,
              text: "Gözaltı süresinin yakalama anından itibaren hesaplanıp hesaplanmadığını denetledim. Gözaltı kararı ve sürelere ilişkin tespit ettiğim hususlar çerçevesinde yakalama ve gözaltı işleminin sona erdirilmesine ilişkin sulh ceza hâkimliğine başvuru yaptım (CMK m. 91/5).",
              tip: null,
              lawRefs: ["CMK m. 91/1", "CMK m. 91/5"],
              objection: "Gözaltı süresi yakalama anından itibaren 24 saati doldurmuş olup müvekkilin derhal salıverilmesi için CMK m. 91/5 uyarınca itiraz ediyoruz."
            },
            {
              no: 41,
              page: 4,
              text: "Yol süresinin gerçekten yolda geçirilip geçirilmediğini ve on iki saati aşıp aşmadığını kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 91/1"],
              objection: "Yol süresi azami sınır olan 12 saati aşmış olup fiili nakil dışında geçen sürelerin yol süresi gibi gösterilmesi hukuka aykırıdır."
            },
            {
              no: 42,
              page: 4,
              text: "Uzatma emrinin yazılı olduğunu, birer günlük verildiğini ve gözaltına alınana derhâl tebliğ edildiğini denetledim.",
              tip: null,
              lawRefs: ["CMK m. 91/3"],
              objection: "Gözaltı uzatma kararı yazılı verilmemiş ve/veya müvekkile derhâl tebliğ edilmemiştir."
            },
            {
              no: 43,
              page: 4,
              text: "Kollukta işlemleri tamamlanan müvekkil için gözaltı süresinin dolmasını beklemeden salıverme/savcılığa sevk talep ettim.",
              tip: null,
              lawRefs: ["CMK m. 91/1", "YGAİAY m. 16"],
              objection: "Kolluk işlemleri ve ifade tamamlanmış olmasına rağmen gözaltı süresinin dolması beklenerek hürriyet haksız yere kısıtlanmaktadır; derhal sevk veya salıverilme talep ederiz."
            },
            {
              no: 44,
              page: 4,
              text: "İfadesi alınmak amacıyla düzenlenen yakalama emri üzerine mesai saatleri dışında yakalanan kişinin CMK m. 94/3 uyarınca taahhütle serbest bırakılmasını “gerektiğinde” talep ettim.",
              tip: null,
              lawRefs: ["CMK m. 94/3"],
              objection: "İfade amacıyla yakalanan müvekkilin CMK m. 94/3 gereğince belirlenen tarihte hazır bulunacağı taahhüdü alınarak derhal serbest bırakılması gerekmektedir."
            },
            {
              no: 45,
              page: 4,
              text: "Gözaltının sona erdiği saat ile sevk saati arasında açıklanamayan bir boşluk bulunup bulunmadığını denetledim.",
              tip: "Savcılığın, şüpheliyi sulh ceza hâkimliğine sevk etmesi ile gözaltı süresi bitmez. Süre, şüphelinin hâkim önüne çıktığı anda kesilir. Sulh ceza hâkimliğinin kaleminde, sorgudan önce kimlik tespiti yapılmışsa, sorguda bu durumu ve şüphelinin gerçekte saat kaçta hâkim karşısında çıktığını tutanağa yazdırın.",
              lawRefs: ["CMK m. 91/7"],
              objection: "Savcılığın sevk yazısı ile hâkim önüne çıkarılma saati arasındaki sürede yasal gözaltı süresi dolmuştur; gecikme tutanağa şerh düşülmüştür."
            }
          ]
        },
        {
          heading: "E) SAĞLIK KONTROLÜ VE HABER VERME",
          items: [
            {
              no: 46,
              page: 4,
              text: "Giriş/çıkış sağlık raporlarını inceledim; muayenenin hekim ile şüpheli arasında mahremiyet içinde yapılıp yapılmadığını kontrol ettim.",
              tip: null,
              lawRefs: ["YGAİAY m. 9", "CMK m. 90"],
              objection: "Doktor muayenesinde hekim-hasta mahremiyeti çiğnenmiş, muayene kolluk nezaretinde yapılmıştır; rapor hukuken sakattır."
            },
            {
              no: 47,
              page: 4,
              text: "Nezarethane giriş raporunun alındığını ve bir nüshasının müvekkile verildiğini kontrol ettim.",
              tip: null,
              lawRefs: ["YGAİAY m. 9"],
              objection: "Nezarethane giriş raporunun bir nüshası şüpheliye veya müdafiine verilmemiştir."
            },
            {
              no: 48,
              page: 4,
              text: "Muayenede kolluk gözetimi istenmişse bunun hekim tarafından yazılı olarak belgelendirildiğini denetledim. Muayene esnasında odada bulunan herkesin bilgilerinin raporda yazdığını kontrol ettim.",
              tip: null,
              lawRefs: ["YGAİAY m. 9"],
              objection: "Muayene odasında kolluk bulunmasının hekim tarafından yazılı talep edilmediği ve odadakilerin kimliğinin raporda belirtilmediği tespit edilmiştir."
            },
            {
              no: 49,
              page: 4,
              text: "İfadeyi alan görevli ile muayeneye götüren görevlinin farklı kişiler olmasını sağladım.",
              tip: null,
              lawRefs: ["YGAİAY m. 9/son"],
              objection: "Yönetmelik m. 9 uyarınca şüpheliyi sağlık muayenesine götüren görevli ile ifadeyi alan kolluk görevlisinin aynı kişi olması yasaktır; bu usulsüzlük tutanağa kaydedilmiştir."
            },
            {
              no: 50,
              page: 4,
              text: "Şüphelinin sağlık şikâyeti veya şiddet iddiası varsa adli tabipliğe sevkini talep ettim. Gözaltı süresi uzatılmışsa ya da şüphelinin tutulduğu birim değiştirilmişse de sağlık muayenesi raporu alınması gerekir; bu raporların varlığını ve içeriğini incelemeyi unutmayın.",
              tip: "Gözaltı süresi uzatıldığında veya tutulduğu birim değiştirildiğinde mutlaka ara/ek sağlık muayenesi yaptırılmalıdır.",
              lawRefs: ["YGAİAY m. 9"],
              objection: "Şüphelinin şiddet iddiası ve darp şikayeti bulunmasına rağmen adli tabipliğe sevki yapılmamıştır; acilen sevk talep ederiz."
            },
            {
              no: 51,
              page: 5,
              text: "İşkence bulgusu ya da iddiası varsa durumu baroya bildirmenin yanı sıra Cumhuriyet savcısına da bildirdim.",
              tip: null,
              lawRefs: ["TCK m. 94", "CMK m. 158"],
              objection: "Şüpheliye yönelik işkence ve kötü muamele emareleri tespit edilmiş olup ivedilikle Cumhuriyet Savcılığına ve Baro İnsan Hakları Merkezine ihbarda bulunulmuştur."
            },
            {
              no: 52,
              page: 5,
              text: "Müvekkilin yakınına veya belirlediği kişiye CMK m. 95 uyarınca gecikmeksizin haber verildiğini kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 95"],
              objection: "CMK m. 95 gereğince yakalanan kişinin yakınına derhâl haber verilmesi zorunlu olmasına karşın haber verilmemiştir."
            },
            {
              no: 53,
              page: 5,
              text: "Müvekkil yabancı ise konsolosluğa bildirim yapıldığını; bildirim istemiyorsa yazılı itirazının alındığını denetledim.",
              tip: null,
              lawRefs: ["CMK m. 95/2", "Viyana Sözleşmesi m. 36"],
              objection: "Yabancı uyruklu şüphelinin konsolosluğuna bildirim yapılmamış veya yazılı muvafakat/itirazı alınmamıştır."
            },
            {
              no: 54,
              page: 5,
              text: "Müvekkil çocuk ise müdafiye, kanuni temsilcisine ve ailesine haber verildiğini kontrol ettim.",
              tip: "Failin aile olduğundan şüphelenilen durumlarda aileye haber verilmez.",
              lawRefs: ["ÇKK m. 15", "CMK m. 95"],
              objection: "Suça sürüklenen çocuğun kanuni temsilcisine gecikmeksizin haber verilmemiştir."
            },
            {
              no: 55,
              page: 5,
              text: "Adli süreçteki çocuğun ifadesinin bizzat Cumhuriyet savcısı tarafından alınıp alınmadığını denetledim. Çocuklar açısından dosyada SİR ve adli psikiyatrik değerlendirme raporu olup olmadığını kontrol ettim.",
              tip: "Özellikle 12-15 yaş arası çocuklar açısından işlediği fiilin anlam ve sonuçlarını algılayıp algılamadığına dair dosyada bir rapor bulunup bulunmadığına dikkat ediniz.",
              lawRefs: ["ÇKK m. 15", "TCK m. 31/2"],
              objection: "Çocuğun kollukça ifadesinin alınması yasaya aykırıdır; ifade bizzat savcıca alınmalı ve dosyada SİR / Farik Mümeyyizlik raporu tanzim edilmelidir."
            }
          ]
        },
        {
          heading: "F) ARAMA, ELKOYMA VE DİĞER KORUMA TEDBİRLERİ",
          items: [
            {
              no: 56,
              page: 5,
              text: "Adli aramayı denetledim. Hâkim kararı/gecikmesinde sakınca bulunan hâlde Cumhuriyet savcısı kararı/yetkili amir emrinin bulunup bulunmadığı kontrol ettim.",
              tip: "Konut, işyeri veya kapalı alan söz konusu ise kolluk amiri emri ile arama yapılamaz.",
              lawRefs: ["CMK m. 119", "Anayasa m. 21"],
              objection: "Konut/işyerinde hâkim veya savcı kararı olmaksızın kolluk amiri emriyle yapılan arama Anayasa m. 21 ve CMK m. 119'a açıkça aykırıdır; elde edilen deliller mutlak surette hukuka aykırıdır."
            },
            {
              no: 57,
              page: 5,
              text: "Arama kararında, aramanın nedenini oluşturan fiil, aranacak kişi/adres/eşya ve geçerlilik süresinin açıkça yazılı olup olmadığını kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 119/2"],
              objection: "Arama kararında aranacak yer, şahıs ve süre somut olarak gösterilmemiş, genel ve soyut ibarelerle hukuka aykırı arama yapılmıştır."
            },
            {
              no: 58,
              page: 5,
              text: "Konut, işyeri veya diğer kapalı yerlerde yapılan bir arama varsa ve savcı aramaya katılmamışsa o yer ihtiyar heyetinden veya komşulardan iki kişinin işlem tanığı olarak hazır olup olmadığına dikkat ettim.",
              tip: null,
              lawRefs: ["CMK m. 119/4"],
              objection: "Cumhuriyet savcısının bulunmadığı kapalı yer aramasında ihtiyar heyetinden veya komşulardan iki işlem tanığı hazır bulundurulmamıştır; arama CMK m. 119/4 gereğince geçersizdir."
            },
            {
              no: 59,
              page: 5,
              text: "Elkoyma yapılmışsa ve hâkim kararı yoksa bu işlemin 24 saat içinde hâkim onayına sunulup sunulmadığını ve işlemin onaylanıp onaylanmadığını kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 127/3"],
              objection: "Savcı/kolluk emriyle yapılan elkoyma işlemi 24 saat içinde görevli hâkimin onayına sunulmamış veya onaylanmamıştır; elkoyma kendiliğinden hükümsüz kalmıştır."
            },
            {
              no: 60,
              page: 5,
              text: "Dijital materyale/bilgisayar sistemlerine el koymada CMK m. 134 kararının bulunup bulunmadığını ve el koyma ile kopyalama uygulanıp uygulanmadığını denetledim.",
              tip: "CMK m. 134 özel bir koruma tedbiridir; genel arama-elkoyma kararıyla telefon, bilgisayar ve dijital veri incelenemez ve kopyası verilmeden el konulamaz.",
              lawRefs: ["CMK m. 134"],
              objection: "CMK m. 134 uyarınca verilmiş özel bir hâkim kararı bulunmaksızın dijital cihazlara el konulması ve imaj alınmaksızın incelenmesi hukuka aykırıdır; delil olarak kullanılamaz."
            },
            {
              no: 61,
              page: 5,
              text: "Yer gösterme, teşhis (gözaltı kararına dayanması ve şüphelinin önceden gösterilmemesi) ve olay yeri incelemesi işlemlerini denetledim.",
              tip: null,
              lawRefs: ["CMK m. 85", "PVSK Ek m. 6"],
              objection: "Teşhis işlemi kurallarına uyulmamış, şüpheli teşhis edene önceden gösterilmiş veya benzer nitelikte kişilerle sıraya konulmamıştır; teşhis geçersizdir."
            },
            {
              no: 62,
              page: 5,
              text: "Yer gösterme veya teşhis işleminin, müdafi hazır bulunmaksızın alınmış bir ifadeye dayanıp dayanmadığını denetledim.",
              tip: null,
              lawRefs: ["CMK m. 148/4", "CMK m. 85"],
              objection: "Müdafisiz alınan ifadeye dayanılarak yapılan yer gösterme işlemi hukuka aykırıdır ve delil niteliği taşımaz."
            },
            {
              no: 63,
              page: 5,
              text: "Kolluğun “mülakat/şifahi görüşme/sohbet” gibi yöntemlerle beyan almaya çalışıp çalışmadığını kontrol ettim.",
              tip: "Mülakat adı altında tutanaksız veya müdafisiz yapılan görüşmeler ve bunlardan üretilen deliller yasak sorgu yöntemidir.",
              lawRefs: ["CMK m. 148"],
              objection: "Kollukça yapılan 'şifahi mülakat/sohbet' adı altındaki sorgulama CMK m. 148 kapsamında yasak yöntemdir; bu yolla düzenlenen tutanaklar hükümsüzdür."
            },
            {
              no: 64,
              page: 5,
              text: "İletişimin tespiti/dinlenmesi ile fiziki/teknik takip gibi tedbirlerin hukuka uygunluğunu denetledim.",
              tip: null,
              lawRefs: ["CMK m. 135", "CMK m. 140"],
              objection: "İletişimin tespiti/dinlenmesi veya teknik takip tedbirleri kanuni şartlar ve sürelere uyulmaksızın uygulanmıştır."
            },
            {
              no: 65,
              page: 6,
              text: "Her adli işlem için Cumhuriyet savcısından ayrı talimat alınıp alınmadığını kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 161"],
              objection: "Kolluğun savcı talimatı olmaksızın re'sen yaptığı işlemler CMK m. 161'e aykırıdır."
            },
            {
              no: 66,
              page: 6,
              text: "Kolluğun mevzuata aykırı davrandığını tespit edersem somut olguları belirterek adli merciler ile Kolluk Gözetim Komisyonuna/ilgili mercilere bildirdim.",
              tip: null,
              lawRefs: ["6713 sayılı K. m. 5", "CMK m. 161/5"],
              objection: null
            },
            {
              no: 67,
              page: 6,
              text: "Arama ve elkoyma işlemlerindeki hukuka aykırılıklara ilişkin CMK m. 267 uyarınca itirazda bulundum.",
              tip: null,
              lawRefs: ["CMK m. 267"],
              objection: "Arama ve elkoyma işlemlerindeki açık hukuka aykırılıklar nedeniyle CMK m. 267 uyarınca itiraz ediyoruz; el konulan eşyanın iadesini talep ederiz."
            }
          ]
        }
      ]
    },

    /* ─────────────── 4. AŞAMA ─────────────── */
    {
      id: "asama4",
      no: 4,
      title: "Şüpheli (müvekkil) ile görüşme",
      subtitle: "CMK m. 149, 154",
      lead: "Müdafi-müvekkil mahremiyeti, kısıtlama kararları, menfaat çatışması ve hakların müvekkile anlatılması.",
      sections: [
        {
          heading: null,
          items: [
            {
              no: 68,
              page: 6,
              text: "Görüşmeyi, konuşmaların duyulmayacağı, müdafiye ayrılmış özel bir ortamda yaptım. Görüşme sırasında kolluk görevlisinin bulunmadığından, konuşmaların kayıt/dinleme yapılmadığından emin oldum.",
              tip: null,
              lawRefs: ["CMK m. 154/1"],
              objection: "Müdafi ile şüphelinin başkalarının duymayacağı bir ortamda görüşme hakkı (CMK m. 154/1) ihlal edilmiş, görüşme ortamına müdahale edilmiştir."
            },
            {
              no: 69,
              page: 6,
              text: "Kendimi müdafi olarak tanıtıp kimliğimi gösterdim; baro tarafından atandığımı ve bu hizmet için ücret talep etmeyeceğimi anlattım.",
              tip: null,
              lawRefs: ["CMK m. 156"],
              objection: null
            },
            {
              no: 70,
              page: 6,
              text: "Kolluğun kendisine nasıl davrandığını sordum; şiddet iddiası varsa adli tabipliğe sevkini talep ettim. Yakınlarına haber verilip verilmediğini teyit ettim.",
              tip: null,
              lawRefs: ["CMK m. 95", "TCK m. 94"],
              objection: null
            },
            {
              no: 71,
              page: 6,
              text: "Şüpheli hakkında CMK m. 154/2 uyarınca alınmış müdafi ile görüşme kısıtlamasına ilişkin bir karar varsa, kararın bir örneğini ve gerekçesini istedim; karara karşı itiraz kanun yoluna başvurdum.",
              tip: null,
              lawRefs: ["CMK m. 154/2", "CMK m. 267"],
              objection: "CMK m. 154/2 uyarınca verilen görüş kısıtlama kararının somut delile dayanmaması sebebiyle kaldırılması için itiraz edilmiştir."
            },
            {
              no: 72,
              page: 6,
              text: "Görüşme CMK m. 154/2 uyarınca kısıtlanmışsa, bu süre içinde müvekkilin ifadesinin alınmadığını denetledim.",
              tip: "Avukatla görüşme kısıtlandığı süre boyunca asla ifade alınamaz!",
              lawRefs: ["CMK m. 154/2"],
              objection: "Görüşme kısıtlaması devam ederken şüphelinin ifadesinin alınması kanuna açıkça aykırı olup bu ifade hükümsüzdür."
            },
            {
              no: 73,
              page: 6,
              text: "Menfaat çatışmasını değerlendirdim; birden fazla şüpheli varsa çatışmanın çıktığı aşamaya göre çekilme/devam kararı verdim ve durumu kolluğa/savcılığa ve baroya bildirdim.",
              tip: null,
              lawRefs: ["CMK m. 152", "Av. K. m. 38"],
              objection: "Şüpheliler arasında menfaat çatışması doğduğundan savunmanın bağımsızlığı gereği görevden çekinme/ayrılma bildirilmiştir."
            },
            {
              no: 74,
              page: 6,
              text: "Şüphelinin beni anladığından ve sağlığının yerinde olduğundan emin oldum; gerekiyorsa tercüman talep ettim.",
              tip: null,
              lawRefs: ["CMK m. 202"],
              objection: "Şüphelinin meramını anlatacak ölçüde Türkçe bilmediği/engeli bulunduğu halde tercüman görevlendirilmemiştir."
            },
            {
              no: 75,
              page: 6,
              text: "Şüpheliden olayı baştan sona kendi anlatımıyla dinledim ve dosyadaki delilleri kendisine anlattım.",
              tip: null,
              lawRefs: ["CMK m. 149"],
              objection: null
            },
            {
              no: 76,
              page: 6,
              text: "Lehe delilleri birlikte değerlendirip bunların nereden ve nasıl toplanacağını konuştum.",
              tip: null,
              lawRefs: ["CMK m. 147/1-f", "CMK m. 160/2"],
              objection: null
            },
            {
              no: 77,
              page: 6,
              text: "Kanuni haklarını anlattım: Susma hakkı, kendisini/yakınlarını suçlayıcı beyanda bulunmama, müdafi yardımı, lehe delil ileri sürme, yakınına haber verilmesi, hekime erişim ve itiraz hakkı.",
              tip: null,
              lawRefs: ["Anayasa m. 38", "CMK m. 147"],
              objection: null
            },
            {
              no: 78,
              page: 6,
              text: "Kimlik bilgileri dışında hiçbir soruya cevap vermek zorunda olmadığını anlattım; susma hakkının ve “kısmi susma”nın sonuçlarını açıkladım; ifade vermeye hazır olduğunda bunu bildirmesini söyledim.",
              tip: null,
              lawRefs: ["CMK m. 147/1-e"],
              objection: null
            },
            {
              no: 79,
              page: 7,
              text: "Uzlaşma, seri muhakeme ve etkin pişmanlık müesseseleri hakkında bilgi verdim.",
              tip: null,
              lawRefs: ["CMK m. 250", "CMK m. 253", "TCK m. 221"],
              objection: null
            },
            {
              no: 80,
              page: 7,
              text: "Müvekkille görüştüğüm konulara ilişkin bir görüşme tutanağı hazırladım.",
              tip: null,
              lawRefs: ["Av. K. m. 34"],
              objection: null
            }
          ]
        }
      ]
    },

    /* ─────────────── 5. AŞAMA ─────────────── */
    {
      id: "asama5",
      no: 5,
      title: "Kollukta ifade alma",
      subtitle: "CMK m. 147, 148",
      lead: "İfade sürecinin başlangıç/bitiş denetimi, soru tarzı, yasak sorgu yöntemleri ve zapta müdahale.",
      sections: [
        {
          heading: null,
          items: [
            {
              no: 81,
              page: 7,
              text: "İfadenin başlangıç ve bitiş saatini not ettim; ses ve görüntü kaydı yapılıp yapılmadığını kontrol ettim (CMK m. 147/1-h).",
              tip: null,
              lawRefs: ["CMK m. 147/1-h"],
              objection: "İfade tutanağında ifadenin başlama ve bitiş saatlerinin yer almaması CMK m. 147'ye aykırıdır."
            },
            {
              no: 82,
              page: 7,
              text: "Kimlik tespitinin doğru yapıldığını, isnat edilen fiilin yer/zaman/kişi belirtilerek anlatıldığını ve susma hakkının yeniden hatırlatıldığını denetledim.",
              tip: null,
              lawRefs: ["CMK m. 147/1-a", "CMK m. 147/1-e"],
              objection: "İsnat edilen fiil somutlaştırılmadan, yer ve zaman gösterilmeden soyut şekilde ifadeye başlanmıştır."
            },
            {
              no: 83,
              page: 7,
              text: "CMK m. 147'deki dokuz başlığın tümünün (kimlik tespiti; isnadın anlatılması; müdafi seçme hakkı ve müdafiin hukuki yardımı; yakınına haber verme; susma hakkı; şüpheden kurtulmak için somut delillerin toplanmasını isteme; lehe hususların ileri sürülmesi; teknik imkânlarla kayıt; tutanağa geçirilme) ayrı ayrı anlatıldığını ve tutanağa geçirildiğini denetledim.",
              tip: null,
              lawRefs: ["CMK m. 147"],
              objection: "CMK m. 147'deki yasal haklar matbu şablon olarak geçiştirilmiş, hakların içeriği şüpheliye fiilen izah edilmemiştir."
            },
            {
              no: 84,
              page: 7,
              text: "Birden fazla olay isnat ediliyorsa hepsinin ayrı ayrı bildirildiğini kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 147/1-b"],
              objection: "Birden fazla suç isnadı olmasına rağmen isnatlar teker teker ve net olarak açıklanmamıştır."
            },
            {
              no: 85,
              page: 7,
              text: "Soruların “anlattırıcı” nitelikte olmasını sağladım; yönlendirici, suçlayıcı veya vaat/tehdit içeren soru ve işlemlere müdahale ettim ve müdahalemi tutanağa geçirttim.",
              tip: null,
              lawRefs: ["CMK m. 148", "CMK m. 147"],
              objection: "Kollukça yönlendirici, vaat ve tehdit içeren sorular sorulmuş; müdafi olarak yapılan müdahaleler zapta geçirilmiştir."
            },
            {
              no: 86,
              page: 7,
              text: "Soru ve cevapların tutanağa aynen geçirilmesini sağladım.",
              tip: null,
              lawRefs: ["CMK m. 147/1-i"],
              objection: "Şüphelinin beyanları tutanağa aynen geçirilmemiş, kolluğun kendi yorum ve ifadeleriyle tutanak tanzim edilmek istenmiştir; düzeltme talep edilmiştir."
            },
            {
              no: 87,
              page: 7,
              text: "İfadenin şüphelinin özgür iradesine dayandığından emin oldum (yasak sorgu yöntemleri CMK m. 148). Şüpheli madde etkisi altındaysa etki geçmeden ifade alınmamasını sağladım.",
              tip: null,
              lawRefs: ["CMK m. 148"],
              objection: "Şüphelinir iradesini sakatlayan yasak sorgu usulleri (baskı, yorma, aldatma vb.) kullanılmıştır; CMK m. 148 gereğince ifade geçersizdir."
            },
            {
              no: 88,
              page: 7,
              text: "Lehe delil taleplerimi CMK m. 147/1-f ve m. 160/2'ye dayanarak ifade tutanağına yazdırdım.",
              tip: null,
              lawRefs: ["CMK m. 147/1-f", "CMK m. 160/2"],
              objection: "Şüpheli lehine olan delillerin toplanması talebimiz ifade tutanağına yazdırılmıştır; savcılık CMK m. 160/2 uyarınca şüphelinin lehindeki delilleri de toplamak zorundadır."
            },
            {
              no: 89,
              page: 7,
              text: "Hukuka aykırı delil/işlem varsa bu durumu ifade tutanağına geçirttim.",
              tip: null,
              lawRefs: ["CMK m. 206/2-a", "CMK m. 217/2"],
              objection: "Soruşturmada elde edilen hukuka aykırı delillerin hükme esas alınamayacağına ilişkin şerhimiz tutanağa işlenmiştir."
            },
            {
              no: 90,
              page: 7,
              text: "İfade tutanağının beyanları doğru yansıttığını kontrol ettim. İfadeye katılan ve tutanağı yazan kolluk görevlilerinin sicillerinin, ad-soyadlarının ve imzalarının bulunduğunu denetledim.",
              tip: null,
              lawRefs: ["CMK m. 169", "CMK m. 147"],
              objection: "İfade tutanağında hazır bulunan görevlilerin kimlik ve imzaları eksiktir; tutanak bu haliyle imzalanamaz."
            },
            {
              no: 91,
              page: 7,
              text: "Daha önce kollukta müdafi hazır bulunmaksızın alınmış bir ifade olup olmadığını araştırdım. Böyle bir ifade varsa, hâkim veya mahkeme huzurunda şüpheli tarafından doğrulanmadıkça hükme esas alınamayacağına ilişkin CMK m. 148/4'teki hükümle ilgili şüpheliye bilgi verdim.",
              tip: "Müdafi olmadan kollukta alınan ifadeler, hâkim veya mahkeme huzurunda şüpheli tarafından doğrulanmadıkça ASLA hükme esas alınamaz (CMK m. 148/4).",
              lawRefs: ["CMK m. 148/4"],
              objection: "Müdafi hazır bulunmaksızın kollukça alınan önceki ifadenin CMK m. 148/4 gereğince hiçbir hukuki geçerliliği bulunmadığı ve hükme esas alınamayacağı şerh edilmiştir."
            },
            {
              no: 92,
              page: 7,
              text: "İfade işlemi bittikten sonra şüpheli ile tekrar görüştüm ve süreci açıkladım.",
              tip: null,
              lawRefs: ["CMK m. 149"],
              objection: null
            }
          ]
        }
      ]
    },

    /* ─────────────── 6. AŞAMA ─────────────── */
    {
      id: "asama6",
      no: 6,
      title: "Cumhuriyet savcılığı aşaması",
      subtitle: "CMK m. 153, 160/2",
      lead: "Fezleke incelemesi, lehe delillerin toplatılması ve serbest bırakma / sevk yönetimi.",
      sections: [
        {
          heading: null,
          items: [
            {
              no: 93,
              page: 8,
              text: "Kolluk amiri tarafından düzenlenen fezlekeyi/olay özetini inceledim; şüphelinin lehine hususların ve ifade sırasındaki itiraz/müdahalelerimin yer alıp almadığını kontrol ettim.",
              tip: null,
              lawRefs: ["CMK m. 160/2", "CMK m. 161"],
              objection: "Kolluk fezlekesinde şüpheli lehine olan deliller ve savunmalar kasıtlı olarak ayıklanmış/yer verilmemiştir; fezleke eksik ve tek taraflıdır."
            },
            {
              no: 94,
              page: 8,
              text: "Savcılıkta şüpheliyle görüştüm.",
              tip: null,
              lawRefs: ["CMK m. 154"],
              objection: null
            },
            {
              no: 95,
              page: 8,
              text: "Şüpheli lehine delillerin toplanmasını ve varsa tanıkların dinlenmesini talep ettim.",
              tip: null,
              lawRefs: ["CMK m. 160/2"],
              objection: "Savcılıktan lehe tanıkların dinlenmesi ve lehe delillerin ivedilikle toplanması talep olunmuştur."
            },
            {
              no: 96,
              page: 8,
              text: "Bekleme sırasında gözaltı süresinin dolması hâlinde şüphelinin serbest bırakılmasını talep ettim.",
              tip: null,
              lawRefs: ["CMK m. 91"],
              objection: "Savcılıkta ifade sırası beklenirken yasal gözaltı süresi (24 saat) dolmuştur; şüphelinin derhal serbest bırakılması zorunludur."
            },
            {
              no: 97,
              page: 8,
              text: "Savcı serbest bırakırsa kimliğini alıp ayrılmasını sağladım; tutuklamaya sevk edilecekse sonraki adımları planladım.",
              tip: null,
              lawRefs: ["CMK m. 101"],
              objection: null
            }
          ]
        }
      ]
    },

    /* ─────────────── 7. AŞAMA ─────────────── */
    {
      id: "asama7",
      no: 7,
      title: "Sulh ceza hâkimliği · sorgu",
      subtitle: "CMK m. 91/7, 100, 109",
      lead: "Tutuklama sevk yazısı incelemesi, duruşma salonu güvenliği, tutuklama ve adli kontrol tartışması.",
      sections: [
        {
          heading: null,
          items: [
            {
              no: 98,
              page: 8,
              text: "Sorgudan önce şüpheliyle ve gerektiğinde sulh ceza hâkimiyle görüştüm. Soruşturma dosyasını tekrar inceledim.",
              tip: null,
              lawRefs: ["CMK m. 154"],
              objection: null
            },
            {
              no: 99,
              page: 8,
              text: "Sevk yazısını ve Cumhuriyet savcısının tutuklama talebini inceledim.",
              tip: null,
              lawRefs: ["CMK m. 101/1"],
              objection: "Savcılığın sevk yazısında tutuklama talep edilen sevk maddeleri ve gerekçeleri somutlaştırılmamıştır."
            },
            {
              no: 100,
              page: 8,
              text: "Nezarethane çıkış raporunun alındığını tekrar kontrol ettim ve giriş raporuyla karşılaştırdım.",
              tip: null,
              lawRefs: ["YGAİAY m. 9"],
              objection: "Giriş ve çıkış sağlık raporları arasındaki lezyon farkları gözaltında kötü muamele yapıldığını göstermektedir; rapor zapta geçirilmiştir."
            },
            {
              no: 101,
              page: 8,
              text: "Bu aşamada da şüpheli lehine delil ve tanık taleplerimi sundum.",
              tip: null,
              lawRefs: ["CMK m. 177"],
              objection: null
            },
            {
              no: 102,
              page: 8,
              text: "Sorgu esnasında sorgu salonun kolluk görevlisi olup olmadığını kontrol ettim. Varsa salondan çıkartılmasını ve çıkartılmazsa durumun zapta geçirilmesini talep ettim.",
              tip: "Sorgu esnasında salonda kolluk görevlisinin bulunması savunmanın serbestliğini sakatlar; kolluk salondan çıkarılmalıdır.",
              lawRefs: ["CMK m. 149", "CMK m. 154"],
              objection: "Sorgu salonunda kolluk görevlilerinin bulunması şüphelinin serbest iradesini baskıladığından kolluğun salondan çıkarılması, çıkarılmıyorsa durumun zapta geçirilmesi talep edilmiştir."
            },
            {
              no: 103,
              page: 8,
              text: "Gözaltı süresi, hâkim karşısına çıkıldığında sona ereceğinden, bekleme sırasında gözaltı süresi dolmuşsa şüphelinin serbest bırakılmasını talep ettim.",
              tip: null,
              lawRefs: ["CMK m. 91/7"],
              objection: "Şüpheli hâkim önüne çıkarılana kadar yasal gözaltı süresi aşılmıştır; haksız gözaltı nedeniyle derhal salıverilme talep edilmiştir."
            },
            {
              no: 104,
              page: 8,
              text: "Tutuklamanın şartlarını (kuvvetli suç şüphesini gösterir somut deliller+bir tutuklama nedeninin varlığı+ölçülülük+adli kontrol tedbirlerinin yetersiz kalacağı) ayrı ayrı tartıştım.",
              tip: "Adli kontrol talebi ile sevklerde de tutuklama nedenlerinin oluşmadığını tartışmayı unutmayın (CMK m. 109/1).",
              lawRefs: ["CMK m. 100", "CMK m. 101", "CMK m. 109"],
              objection: "CMK m. 100 gereğince kuvvetli suç şüphesini gösteren somut delil ve kaçma/delil karartma şüphesi bulunmadığından tutuklama talebinin reddine, ölçülülük ilkesi uyarınca serbest bırakılmaya/adli kontrole karar verilmesi talep olunur."
            },
            {
              no: 105,
              page: 8,
              text: "Yakalama ve gözaltı aşamasındaki hukuka aykırılıkları sorgu tutanağına da şerh düşürdüm.",
              tip: null,
              lawRefs: ["CMK m. 148", "CMK m. 217/2"],
              objection: "Yakalama, arama ve gözaltı evrelerindeki tüm usulsüzlük ve hukuka aykırılıklar sorgu tutanağına tek tek şerh düşürülmüştür."
            },
            {
              no: 106,
              page: 8,
              text: "Hâkim serbest bırakırsa kimliğini alarak adliyeden ayrılmasını sağladım.",
              tip: null,
              lawRefs: ["CMK m. 101"],
              objection: null
            }
          ]
        }
      ]
    }
  ]
};
