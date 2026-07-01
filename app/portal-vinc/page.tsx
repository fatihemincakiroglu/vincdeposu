import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/portal-vinc",
  },
  title: "Portal Vinç: Özellikleri, Kullanım Alanları ve Fiyatları (2026)",
  description:
    "Portal vinç nedir, çeşitleri nelerdir, fiyatları ne kadar? Tam portal, yarı portal, tekerlekli ve raylı portal vinç sistemleri hakkında kapsamlı rehber. 7/24 hizmet: 0532 303 90 89",
};

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://example.com/portal-vinc#article",
      headline: "Portal Vinç: Özellikleri, Kullanım Alanları ve Fiyatları (2026)",
      description:
        "Portal vinç sistemleri hakkında kapsamlı rehber. Çeşitleri, teknik özellikleri, kullanım alanları, kiralama fiyatları ve satın alma tavsiyeleri.",
      image: "https://example.com/images/portal-vinc-hero.jpg",
      author: { "@type": "Organization", name: "Vinç Sistemleri" },
      publisher: {
        "@type": "Organization",
        name: "Vinç Sistemleri",
        logo: { "@type": "ImageObject", url: "https://example.com/logo.png" },
      },
      datePublished: "2026-01-01",
      dateModified: "2026-06-01",
    },
    {
      "@type": "FAQPage",
      "@id": "https://example.com/portal-vinc#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Portal vinç nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Portal vinç (gantry crane), iki ayak üzerine oturan bir ana kiriş ve bu kirişin altında hareket eden bir vinç mekanizmasından oluşan, kapalı ya da açık alanlarda ağır yük kaldırma ve taşıma işlemleri için kullanılan endüstriyel bir kaldırma ekipmanıdır.",
          },
        },
        {
          "@type": "Question",
          name: "Portal vinç ile köprülü vinç arasındaki fark nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Köprülü vinç bina içindeki kirişlere asılı çalışırken, portal vinç kendi taşıyıcı ayakları sayesinde zemin üzerinde hareket eder. Bu nedenle portal vinçler açık alanda da kullanılabilir.",
          },
        },
        {
          "@type": "Question",
          name: "Portal vinç kapasite aralığı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Portal vinçler genellikle 1 tondan 900 tona kadar farklı kapasitelerde üretilir. Liman ve tersane uygulamalarında 300–900 ton kapasiteli modeller tercih edilir.",
          },
        },
        {
          "@type": "Question",
          name: "Portal vinç kiralama fiyatları ne kadardır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Portal vinç kiralama fiyatları; vincin kapasitesi, kiralama süresi, çalışma lokasyonu ve operatör ihtiyacına göre değişir. Günlük fiyatlar 8.000 TL'den başlarken aylık fiyatlar proje bazlı belirlenir.",
          },
        },
        {
          "@type": "Question",
          name: "Portal vinç montajı ne kadar sürer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Küçük kapasiteli portal vinçlerin montajı 1–3 gün sürerken, büyük liman tipi portal vinçlerin kurulumu birkaç haftaya kadar uzayabilir. Bu süre ray sistemi ve temel altyapısına göre değişir.",
          },
        },
        {
          "@type": "Question",
          name: "Portal vinç hangi sektörlerde kullanılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Portal vinçler; liman ve konteyner terminalleri, tersane ve gemi inşaatı, prefabrik beton sektörü, açık depo ve stok sahaları, çelik fabrikaları ve ağır sanayi tesislerinde yaygın biçimde kullanılır.",
          },
        },
        {
          "@type": "Question",
          name: "CE belgesi olan portal vinç satın almak zorunlu mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, Türkiye'de iş güvenliği mevzuatı gereği kullanılan tüm kaldırma ekipmanlarının CE belgeli ve periyodik kontrole tabi olması zorunludur. CE belgesi olmayan vinçlerin kullanımı yasal değildir.",
          },
        },
        {
          "@type": "Question",
          name: "Liebherr, Konecranes ve Gottwald'dan hangisi daha iyi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Her marka farklı nişlerde üstündür. Liebherr liman ve açık hava uygulamalarında, Konecranes endüstriyel ve tersane projelerinde, Gottwald mobil liman vinçlerinde öne çıkar. Seçim, projenin ihtiyaçlarına göre yapılmalıdır.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://example.com/portal-vinc#product",
      name: "Portal Vinç Kiralama ve Satış",
      description:
        "Tam portal, yarı portal, tekerlekli ve raylı portal vinç sistemleri. Kiralama ve satış hizmetleri.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "TRY",
        lowPrice: "8000",
        offerCount: "4",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://example.com" },
        { "@type": "ListItem", position: 2, name: "Vinç Sistemleri", item: "https://example.com/vinc" },
        { "@type": "ListItem", position: 3, name: "Portal Vinç", item: "https://example.com/portal-vinc" },
      ],
    },
  ],
};

// ─── Veri ─────────────────────────────────────────────────────────────────────

const portalVincCesitleri = [
  {
    icon: "🏗️",
    title: "Tam Portal Vinç (Full Gantry Crane)",
    desc: "Her iki tarafta zemin rayı bulunan, kirişin iki ayağa oturduğu klasik portal vinç yapısıdır. Açık depo, tersane ve büyük sanayi sahalarında tercih edilir.",
    kapasite: "5 – 500 ton",
    href: "/tam-portal-vinc",
    ozellikler: ["Yüksek stabilite", "Geniş açıklık", "Uzun ömür"],
  },
  {
    icon: "🔀",
    title: "Yarı Portal Vinç (Semi-Gantry Crane)",
    desc: "Bir tarafı binada mevcut bir kirişe ya da duvara asılı, diğer tarafı zemin rayına oturan karma yapıdır. Sınırlı alanlarda yer tasarrufu sağlar.",
    kapasite: "2 – 100 ton",
    href: "/yari-portal-vinc",
    ozellikler: ["Alan tasarrufu", "Esnek montaj", "Düşük maliyet"],
  },
  {
    icon: "🚛",
    title: "Tekerlekli Portal Vinç (RTG – Rubber Tyred Gantry)",
    desc: "Ray gerektirmeyen, lastik tekerlekli hareket sistemi sayesinde konteyner terminallerinde serbest hareket edebilen modern portal vinç modelidir.",
    kapasite: "30 – 65 ton",
    href: "/tekerlekli-portal-vinc",
    ozellikler: ["Ray gereksiz", "Hızlı konumlama", "Konteyner uyumlu"],
  },
  {
    icon: "🛤️",
    title: "Raylı Portal Vinç (RMG – Rail Mounted Gantry)",
    desc: "Sabit ray sistemi üzerinde hareket eden, konteyner terminallerinde ve depolarda yüksek verimlilik sağlayan otomasyon uyumlu portal vinç türüdür.",
    kapasite: "40 – 100 ton",
    href: "/rayli-portal-vinc",
    ozellikler: ["Otomasyon uyumlu", "Yüksek verimlilik", "Hassas konumlama"],
  },
  {
    icon: "📦",
    title: "Tek Kiriş Portal Vinç",
    desc: "Tek ana kiriş üzerine kurulu, hafif ve orta kapasiteli yük taşıma işlemleri için idealdir. Düşük yatırım maliyeti ve kolay montaj avantajı sunar.",
    kapasite: "1 – 20 ton",
    href: "/tek-kiris-portal-vinc",
    ozellikler: ["Hafif yapı", "Kolay montaj", "Düşük maliyet"],
  },
  {
    icon: "⚙️",
    title: "Çift Kiriş Portal Vinç",
    desc: "Çift ana kiriş yapısıyla ağır yüklerde sehim yapmadan taşıma imkânı sağlar. Tersane, çelik fabrikası ve ağır sanayi tesisleri için tercih edilen modeldir.",
    kapasite: "20 – 900 ton",
    href: "/cift-kiris-portal-vinc",
    ozellikler: ["Ağır yük kapasitesi", "Minimum sehim", "Uzun açıklık"],
  },
];

const kullanımAlanlari = [
  { icon: "⚓", title: "Liman & Terminal", desc: "Konteyner yükleme, boşaltma ve istifleme operasyonları" },
  { icon: "🚢", title: "Tersane", desc: "Gemi blok montajı ve deniz platformu üretimi" },
  { icon: "🏭", title: "Açık Depo", desc: "Büyük ölçekli stok sahası ve malzeme yönetimi" },
  { icon: "🧱", title: "Prefabrik", desc: "Ağır beton eleman üretimi ve sahaya taşıma" },
  { icon: "🔩", title: "Çelik Sektörü", desc: "Çelik kütük, rulo ve profil taşıma hatları" },
  { icon: "⚡", title: "Enerji Santrali", desc: "Türbin, jeneratör ve ağır ekipman montajı" },
];

const teknikOzellikler = [
  { label: "Kapasite Aralığı", deger: "1 – 900 ton" },
  { label: "Açıklık (Span)", deger: "6 – 60 m" },
  { label: "Kaldırma Yüksekliği", deger: "6 – 30 m (liman tipi 50 m+)" },
  { label: "Hareket Hızı", deger: "10 – 60 m/dak" },
  { label: "Kaldırma Hızı", deger: "2 – 20 m/dak" },
  { label: "FEM Sınıfı", deger: "A3 – A8" },
  { label: "Koruma Sınıfı", deger: "IP54 – IP65" },
  { label: "Çalışma Sıcaklığı", deger: "-20°C / +50°C" },
];

const fiyatTablosu = [
  { tur: "5–10 ton Küçük Portal Vinç", gunluk: "8.000 TL", aylik: "Teklif", satin: "1.200.000 TL~" },
  { tur: "20–50 ton Orta Portal Vinç", gunluk: "18.000 TL", aylik: "Teklif", satin: "4.500.000 TL~" },
  { tur: "RTG Tekerlekli Portal Vinç", gunluk: "35.000 TL", aylik: "Teklif", satin: "Teklif" },
  { tur: "RMG Raylı Portal Vinç", gunluk: "50.000 TL", aylik: "Teklif", satin: "Teklif" },
  { tur: "100 ton+ Ağır Portal Vinç", gunluk: "Teklif", aylik: "Teklif", satin: "Teklif" },
  { tur: "Operatör + Montaj Hizmeti", gunluk: "3.500 TL", aylik: "Teklif", satin: "—" },
];

const montajAdimlari = [
  { no: "01", title: "Saha Etüdü", desc: "Zemin taşıma kapasitesi, ray mesafesi ve engeller tespit edilir." },
  { no: "02", title: "Temel & Ray Sistemi", desc: "Geoteknik rapora göre beton temel ve ray hattı hazırlanır." },
  { no: "03", title: "Ayak Montajı", desc: "Ana taşıyıcı ayaklar ray üzerine yerleştirilerek hizalanır." },
  { no: "04", title: "Kiriş Montajı", desc: "Ana kiriş veya kirişler kaldırma yardımıyla ayaklara bağlanır." },
  { no: "05", title: "Elektrik & Kumanda", desc: "Motor, fren ve uzaktan kumanda sistemleri devreye alınır." },
  { no: "06", title: "Yük Testi & Belge", desc: "EN 15011 standardına göre yük testi yapılır, belge düzenlenir." },
];

const markaKarsilastirma = [
  {
    marka: "Liebherr",
    kuvvetli: "Liman vinçleri, yüksek tonaj, açık hava dayanımı",
    zayif: "Yüksek fiyat, uzun temin süresi",
    ideal: "Büyük liman & tersane projeleri",
  },
  {
    marka: "Konecranes",
    kuvvetli: "Otomasyon, yazılım entegrasyonu, servis ağı",
    zayif: "Yedek parça maliyeti yüksek",
    ideal: "Endüstriyel & akıllı depo uygulamaları",
  },
  {
    marka: "Gottwald",
    kuvvetli: "Mobil portal vinç, çok yönlü liman çözümleri",
    zayif: "Sınırlı Türkiye servis ağı",
    ideal: "Çok amaçlı liman ve kuru yük terminalleri",
  },
];

const guvenlikMaddeleri = [
  "CE belgeli ve periyodik muayenesi yapılmış ekipman kullanılmaktadır",
  "Operatörler geçerli vinç operatörü sertifikasına sahiptir",
  "Rüzgar hızı izleme sistemi ile kötü havada çalışma otomatik durdurulur",
  "Aşırı yük koruma (SWL) sensörleri tüm modellerde standarttır",
  "Ray kilitleyici ve fırtına çapası sistemleri dış mekan kullanımında zorunludur",
  "FEM 1.001 ve ISO 4301 standartlarına göre tasarım ve üretim yapılmaktadır",
  "Her kaldırma işlemi öncesi günlük görsel kontrol zorunludur",
];

const sss = [
  {
    soru: "Portal vinç nedir?",
    cevap:
      "Portal vinç (gantry crane), iki ayak üzerine oturan bir ana kiriş ve bu kirişin altında hareket eden vinç mekanizmasından oluşan endüstriyel bir kaldırma ekipmanıdır. Köprülü vinçten farkı kendi taşıyıcı ayaklarının olmasıdır; bu sayede bina dışında, açık sahalarda da kullanılabilir.",
  },
  {
    soru: "Portal vinç ile köprülü vinç arasındaki temel fark nedir?",
    cevap:
      "Köprülü vinç, bina içindeki mevcut kirişlere asılı çalışır ve yalnızca kapalı alanlarda kullanılabilir. Portal vinç ise kendi bağımsız ayak yapısına sahiptir; hem kapalı hem de açık alanlarda, ray veya lastik tekerlekli sistemlerle hareket edebilir.",
  },
  {
    soru: "Portal vinç kapasite aralığı nedir?",
    cevap:
      "Portal vinçler 1 tondan 900 tona kadar farklı kapasitelerde üretilir. Küçük atölye uygulamalarında 2–10 tonluk modeller yeterliyken, liman ve tersane projelerinde 100–900 tonluk ağır modeller tercih edilir.",
  },
  {
    soru: "Portal vinç kiralama fiyatları ne kadardır?",
    cevap:
      "Portal vinç kiralama fiyatları vincin kapasitesi, türü, kiralama süresi, çalışma lokasyonu ve operatör ihtiyacına göre değişmektedir. Küçük kapasiteli modellerde günlük fiyat 8.000 TL'den başlarken büyük kapasite modeller için proje bazlı teklifle belirlenir.",
  },
  {
    soru: "Portal vinç montajı ve kurulumu ne kadar sürer?",
    cevap:
      "Küçük kapasiteli (5–20 ton) portal vinçlerin montajı genellikle 2–5 gün sürer. Büyük liman ve tersane tipi portal vinçlerin kurulumu ise temel altyapısı ve ray sistemiyle birlikte birkaç haftadan birkaç aya kadar uzayabilir.",
  },
  {
    soru: "CE belgesi ve FEM standardı neden önemlidir?",
    cevap:
      "Türkiye iş güvenliği mevzuatı (6331 sayılı Kanun) gereği tüm kaldırma ekipmanlarının CE belgeli olması zorunludur. FEM ve ISO 4301 standartları ise vincin yapısal güvenliğini ve yorulma ömrünü güvence altına alır. Belgesiz vinç kullanımı hem yasal yaptırıma hem de iş kazasına neden olabilir.",
  },
  {
    soru: "İkinci el portal vinç alırken neye dikkat edilmelidir?",
    cevap:
      "İkinci el portal vinç alırken mutlaka periyodik muayene belgesini, yapısal kaynak kontrolü raporunu, rulman ve fren sistemlerini ve operasyonel saatini incelemeniz gerekir. Ayrıca yetkili bir vinç mühendisi eşliğinde yük testi yapılması şiddetle tavsiye edilir.",
  },
  {
    soru: "Rüzgar yükü portal vinç seçimini nasıl etkiler?",
    cevap:
      "Dış mekânda kullanılan portal vinçler rüzgar yükü hesaplamalarına göre boyutlandırılmalıdır. EN 13001 standardına göre çalışma halinde genellikle 20 m/s, fırtına yükü ise 50 m/s'ye kadar hesaba katılır. Bu değerlerin üzerinde vincin çalışması durdurularak rüzgar çapasına bağlanması zorunludur.",
  },
];

// ─── Bileşen ──────────────────────────────────────────────────────────────────

export default function PortalVincPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="bg-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🏗️ Portal Vinç Kapsamlı Rehber 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Portal Vinç:<br />{" "}
                <span className="text-yellow-400">Özellikleri, Çeşitleri</span><br />{" "}
                ve Fiyatları (2026)
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Tam portal, yarı portal, tekerlekli ve raylı portal vinç sistemleri hakkında bilmeniz gereken her şey.
                Teknik özellikler, kullanım alanları, kiralama fiyatları ve satın alma rehberi tek sayfada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:05323039089"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
                >
                  📞 Teklif Al: 0532 303 90 89
                </a>
                <a
                  href="#portal-vinc-cesitleri"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
                >
                  Portal Vinç Çeşitlerini İncele ↓
                </a>
              </div>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { rakam: "1–900", birim: "ton", label: "Kapasite Aralığı" },
                { rakam: "6–60", birim: "m", label: "Açıklık (Span)" },
                { rakam: "50+", birim: "m", label: "Liman Kaldırma Yük." },
                { rakam: "25+", birim: "yıl", label: "Tasarım Ömrü" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-yellow-400">
                    {s.rakam} <span className="text-lg">{s.birim}</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portal Vinç Nedir? ───────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Tanım</p>
                <h2 className="text-4xl font-black text-gray-900 mb-6">Portal Vinç Nedir?</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Portal vinç (gantry crane), iki bağımsız taşıyıcı ayak üzerine oturan yatay bir ana kiriş ve bu
                  kirişin boyunca hareket eden bir vinç mekanizmasından oluşan endüstriyel kaldırma ekipmanıdır.
                  Türkçede "gantri vinç" olarak da adlandırılır.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Köprülü vinçten en temel farkı, kendi bağımsız taşıyıcı yapısına sahip olmasıdır. Bu özellik
                  sayesinde portal vinçler bina içindeki kirişlere bağımlı olmadan, hem kapalı hem de açık sahalarda
                  kullanılabilir. Ray sistemi üzerine monte edilerek sabit bir hat boyunca hareket edebildiği gibi,
                  tekerlekli modellerde ray olmaksızın serbest konumlanma da mümkündür.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Kapasite aralığı 1 tondan 900 tonun üzerine çıkabilen portal vinçler; liman ve konteyner
                  terminalleri, tersane ve gemi inşaatı, prefabrik beton üretimi, çelik sektörü ve ağır sanayi
                  tesislerinde vazgeçilmez bir kaldırma çözümü sunar.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                {/* Görsel placeholder – gerçek projede next/image ile değiştirin */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-200 to-gray-300">
                  <span className="text-7xl">🏗️</span>
                  <span className="text-gray-500 font-semibold text-sm">Portal Vinç Genel Görünüm</span>
                  <span className="text-gray-400 text-xs">Görsel: Full Gantry Crane</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Portal Vinç ile Köprülü Vinç Farkı ──────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Karşılaştırma</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Portal Vinç ile Köprülü Vinç Arasındaki Fark
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Doğru vinç sistemini seçmek için iki temel kaldırma çözümü arasındaki kritik farkları anlamak gerekir.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  baslik: "🏗️ Portal Vinç (Gantry Crane)",
                  maddeler: [
                    "Bağımsız taşıyıcı ayaklar – bina kirişine gerek yok",
                    "Açık alan ve dış mekânda kullanılabilir",
                    "Ray veya lastik tekerlekle hareket",
                    "Kapasitesi 1 – 900+ ton",
                    "Tersane, liman, açık depo için ideal",
                    "Kurulum maliyeti daha yüksek",
                  ],
                  renk: "border-yellow-400 bg-yellow-50",
                },
                {
                  baslik: "🏭 Köprülü Vinç (Overhead Crane)",
                  maddeler: [
                    "Mevcut bina kirişlerine veya özel konstrüksiyona asılı",
                    "Yalnızca kapalı alanlarda kullanılır",
                    "Sabit ray sistemi üzerinde hareket",
                    "Kapasitesi genellikle 0,5 – 500 ton",
                    "Fabrika, atölye, depo içi için ideal",
                    "Kurulum maliyeti görece düşük",
                  ],
                  renk: "border-gray-200 bg-white",
                },
              ].map((k) => (
                <div key={k.baslik} className={`p-8 border-2 rounded-2xl ${k.renk}`}>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{k.baslik}</h3>
                  <ul className="space-y-3">
                    {k.maddeler.map((m) => (
                      <li key={m} className="flex gap-3 items-start text-gray-700 text-sm">
                        <span className="text-yellow-600 font-bold shrink-0 mt-0.5">●</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portal Vinç Çeşitleri ─────────────────────────────────────────── */}
        <section id="portal-vinc-cesitleri" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Modeller</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Portal Vinç Çeşitleri ve Modelleri</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Proje gereksinimlerinize ve çalışma koşullarınıza göre altı farklı portal vinç türünden en uygununu seçin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portalVincCesitleri.map((v) => (
                <Link
                  key={v.title}
                  href={v.href}
                  className="group p-6 border-2 border-gray-100 rounded-2xl hover:border-yellow-400 hover:shadow-lg transition flex flex-col"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{v.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.ozellikler.map((o) => (
                      <span key={o} className="text-xs bg-yellow-50 text-yellow-700 font-medium px-2 py-1 rounded-full border border-yellow-200">
                        {o}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Kapasite: <strong className="text-gray-700">{v.kapasite}</strong></span>
                    <span className="text-yellow-600 font-bold text-sm group-hover:underline">İncele →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Alt Başlıklar: Modeller detay görselleri ─────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-16">

            {/* Tekerlekli RTG */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="text-7xl">🚛</span>
                  <span className="text-gray-500 font-semibold text-sm">RTG – Rubber Tyred Gantry</span>
                  <span className="text-gray-400 text-xs">Tekerlekli Portal Vinç</span>
                </div>
              </div>
              <div>
                <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-2">RTG</p>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Tekerlekli Portal Vinç (Rubber Tyred Gantry) Kullanım Avantajları
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  RTG vinçler, lastik tekerlekli hareket sistemleri sayesinde ray altyapısı gerektirmeden konteyner
                  terminali içinde serbestçe konumlanabilir. Bu esneklik, terminal planlamasını önemli ölçüde
                  kolaylaştırır ve yatırım maliyetini düşürür.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Ray ve beton temel altyapısı gerektirmez",
                    "Birden fazla koridor (lane) arasında geçiş yapabilir",
                    "Dizel-elektrik veya tam elektrikli tahrik seçeneği",
                    "Modern terminallerde otomasyon (ARTG) ile entegre çalışır",
                  ].map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="text-yellow-500 font-bold">✓</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Raylı RMG */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-2">RMG</p>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Raylı Portal Vinç (Rail Mounted Gantry) Karşılaştırması
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  RMG vinçler, sabit ray sistemi üzerinde hareket ederek RTG'ye kıyasla daha yüksek çevrim hızı ve
                  hassas konumlama imkânı sunar. Tam otomasyon (ARMG) ile desteklendiğinde insansız terminal
                  operasyonunu mümkün kılar.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Çevrim Hızı", rmg: "Yüksek", rtg: "Orta" },
                    { label: "Otomasyon", rmg: "Tam ARMG", rtg: "Yarı ARTG" },
                    { label: "Altyapı", rmg: "Ray gerekli", rtg: "Ray yok" },
                    { label: "Enerji", rmg: "Elektrikli", rtg: "Dizel/Elek." },
                  ].map((r) => (
                    <div key={r.label} className="bg-white rounded-xl p-3 border border-gray-100 text-xs">
                      <div className="font-bold text-gray-700 mb-1">{r.label}</div>
                      <div className="text-green-600">RMG: {r.rmg}</div>
                      <div className="text-gray-400">RTG: {r.rtg}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3] order-1 md:order-2">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="text-7xl">🛤️</span>
                  <span className="text-gray-500 font-semibold text-sm">RMG – Rail Mounted Gantry</span>
                  <span className="text-gray-400 text-xs">Raylı Portal Vinç</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Kullanım Alanları ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Portal Vincin Kullanım Alanları</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Portal vinçler; liman operasyonlarından prefabrik beton üretimine, tersanelerden çelik fabrikalarına
                kadar geniş bir sektör yelpazesinde etkin biçimde kullanılır.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {kullanımAlanlari.map((a) => (
                <div key={a.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-yellow-300 transition">
                  <div className="text-3xl shrink-0">{a.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                    <p className="text-gray-500 text-sm">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Liman & Tersane detay açıklamaları */}
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                  <h3 className="font-black text-gray-900 mb-3">⚓ Liman ve Konteyner Terminallerinde Portal Vinç Kullanımı</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Konteyner terminallerinde RTG ve RMG tipi portal vinçler, 20 ve 40 fit konteynerleri gemiden rıhtıma
                    veya rıhtımdan sahalara hızla taşımak için kullanılır. Modern terminallerde otomatik (ARMG) sistemler
                    vinç operatörü gerekmeksizin 7/24 kesintisiz çalışabilmektedir. Yüksek çevrim kapasitesi sayesinde
                    gemi bekleme süreleri minimize edilir.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <h3 className="font-black text-gray-900 mb-3">🚢 Tersane ve Gemi İnşaatında Portal Vinç</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tersanelerde çift kiriş, yüksek kapasiteli portal vinçler gemi bloklarının montajında kritik rol oynar.
                    100–900 ton kapasiteli modeller, bütünleşik gemi bloklarını hassas biçimde kaldırarak iskele üzerinde
                    konumlandırır. Tersane portal vinçleri deniz ortamında dayanıklı olacak şekilde galvanizli ve epoksi
                    boyalı malzemeden üretilir.
                  </p>
                </div>
                <div className="p-6 bg-orange-50 border border-orange-100 rounded-2xl">
                  <h3 className="font-black text-gray-900 mb-3">🧱 Prefabrik ve Beton Sektöründe Portal Vinç Uygulamaları</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Prefabrik beton fabrikalarında portal vinçler; kalıp taşıma, kürleme havuzu transferi ve bitmiş
                    elemanların stok sahasına nakledilmesinde kullanılır. 10–50 ton kapasiteli modeller bu sektörde
                    en sık tercih edilen aralıktır. Açık stok sahasında kullanım nedeniyle yağmur, kar ve rüzgar
                    dayanımı ön planlama aşamasında hesaba katılmalıdır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Teknik Özellikler ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Teknik Veriler</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Portal Vinç Teknik Özellikleri</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Portal vinç seçiminde kapasite, açıklık, kaldırma yüksekliği ve FEM sınıfı birlikte değerlendirilmelidir.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {teknikOzellikler.map((t) => (
                <div key={t.label} className="flex items-center justify-between bg-white rounded-xl px-6 py-4 border border-gray-100">
                  <span className="text-gray-600 font-medium text-sm">{t.label}</span>
                  <span className="text-gray-900 font-black text-sm">{t.deger}</span>
                </div>
              ))}
            </div>

            {/* Ray ve temel sistem */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Portal Vinç Ray ve Temel Sistemi Hesaplama</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Portal vinç ray sistemi, vincin toplam ağırlığı (tara + yük), dinamik katsayılar ve zemin taşıma
                kapasitesine göre tasarlanır. Temel hesabında DIN 18800 ve EN 1993 standartları referans alınır.
                Ray seçiminde A45, A55, A65, A75 ve A100 profilleri yaygın olarak kullanılır; ağır uygulamalarda
                Crane Rail CR80–CR175 gibi özel ray profilleri tercih edilir.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { baslik: "Beton Temel", aciklama: "Genellikle C25/30 beton, derinlik zemin etüdüne göre belirlenir." },
                  { baslik: "Ray Klipsi", aciklama: "Elastik ray klipsleri titreşim ve termal genleşmeyi absorbe eder." },
                  { baslik: "Drenaj", aciklama: "Açık sahalarda ray dibine drenaj kanalı eklenmesi zorunludur." },
                ].map((r) => (
                  <div key={r.baslik} className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{r.baslik}</h4>
                    <p className="text-gray-500 text-xs">{r.aciklama}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Elektrik motorlu ve uzaktan kumanda */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 mt-4">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Elektrik Motorlu ve Uzaktan Kumandalı Portal Vinç Sistemleri</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modern portal vinçler frekans invertörlü (VFD) tahrik sistemleri ile donatılır. Bu sistemler hassas
                hız kontrolü, yumuşak kalkış-frenleme ve enerji geri kazanımı sağlar. Uzaktan kumanda seçenekleri
                şunlardır:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { tip: "Kollu Kumanda Panosu", aciklama: "Operatörün vinç kabininde oturarak yönettiği klasik sistem." },
                  { tip: "Radyo Uzaktan Kumanda", aciklama: "Telli veya kablosuz kumandalı, 50–100 m mesafeden kontrol." },
                  { tip: "Tam Otomatik ARMG/ARTG", aciklama: "PLC ve görüntü işleme ile insansız terminal operasyonu." },
                ].map((k) => (
                  <div key={k.tip} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{k.tip}</h4>
                    <p className="text-gray-500 text-xs">{k.aciklama}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Kurulum ve Montaj ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kurulum</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Portal Vinç Kurulum ve Montaj Süreci</h2>
              <p className="text-gray-500 text-lg">6 adımda profesyonel portal vinç kurulumu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {montajAdimlari.map((a) => (
                <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group bg-white">
                  <div className="text-5xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition mb-4 leading-none">
                    {a.no}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fiyat Tablosu ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Portal Vinç Kiralama Fiyatları</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                2026 yılı referans fiyatlarıdır. Gerçek proje fiyatı; kapasite, lokasyon ve süreye göre değişir.
                Kesin teklif için bizimle iletişime geçin.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left px-6 py-4 font-bold">Vinç Türü</th>
                      <th className="text-center px-4 py-4 font-bold">Günlük</th>
                      <th className="text-center px-4 py-4 font-bold">Aylık</th>
                      <th className="text-center px-4 py-4 font-bold">Satın Alma</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fiyatTablosu.map((f, i) => (
                      <tr key={f.tur} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="px-6 py-4 font-medium text-gray-800">{f.tur}</td>
                        <td className="text-center px-4 py-4 text-yellow-700 font-bold">{f.gunluk}</td>
                        <td className="text-center px-4 py-4 text-gray-600">{f.aylik}</td>
                        <td className="text-center px-4 py-4 text-gray-600">{f.satin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              * Fiyatlara KDV dahil değildir. Nakliye, montaj ve operatör hizmetleri ayrıca ücretlendirilir.
            </p>

            {/* Günlük vs Aylık */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                <h3 className="font-black text-gray-900 mb-2">📅 Günlük Kiralama Ne Zaman Tercih Edilmeli?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kısa süreli proje, tek seferlik yükleme-boşaltma veya acil ihtiyaç durumlarında günlük kiralama
                  avantajlıdır. Kiralama süresi 5 günün altındaysa günlük birim fiyat yüksek görünse de toplam
                  maliyet daha düşük kalır.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <h3 className="font-black text-gray-900 mb-2">📆 Aylık Kiralama Ne Zaman Avantajlı?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  İnşaat veya üretim projelerinde sürekli kullanım söz konusuysa aylık kiralama birim maliyeti
                  önemli ölçüde düşürür. 30 günlük kullanımda aylık kira, günlük ücretin yaklaşık 15–18 katı
                  düzeyinde seyredebilir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Satın Alma Rehberi ────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Satın Alma</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Portal Vinç Satın Alma Rehberi</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "⚖️", baslik: "Kapasiteyi Doğru Belirleyin", aciklama: "Mevcut maksimum yük değil, gelecekteki ihtiyaçlar gözetilerek %20–30 kapasite payı bırakın. Taşınacak yükün ağırlığı, şekli ve kaldırma frekansı (FEM sınıfı) birlikte değerlendirilmelidir." },
                { icon: "📐", baslik: "Açıklık ve Yükseklik", aciklama: "Vinç açıklığı (span) proje sahasının genişliğine, kaldırma yüksekliği ise yükün maksimum istif seviyesine göre hesaplanmalıdır. Hatalı açıklık seçimi sonradan değiştirilemez." },
                { icon: "🏷️", baslik: "CE Belgesi Zorunlu", aciklama: "Türkiye'de satışa sunulan tüm vinçlerin CE belgeli olması ve TS EN 15011 kapsamında tasarım hesabı yapılmış olması yasal zorunluluktur. Belgesiz ürün almayın." },
                { icon: "🔧", baslik: "Yedek Parça ve Servis", aciklama: "Satın alma öncesi yedek parça temin süresini ve servis ağını sorgulayın. Türkiye'de yerel servis ağı olmayan markaların arızalarında beklenmedik duruş süreleri oluşabilir." },
                { icon: "⚡", baslik: "Enerji Verimliliği", aciklama: "VFD (frekans invertörü) destekli modeller enerji tüketimini %30–40 oranında azaltabilir. Yüksek frekansla çalışan tesislerde bu yatırım kısa sürede geri döner." },
                { icon: "📋", baslik: "Garanti ve Sözleşme", aciklama: "Yapısal aksamlarda en az 2 yıl, elektrik-elektronik aksamlarda 1 yıl garanti standart kabul edilir. Performans testi (yük testi) sonuçlarını garanti belgesine ekletin." },
              ].map((m) => (
                <div key={m.baslik} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-3xl shrink-0">{m.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{m.baslik}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.aciklama}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── İkinci El ────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">İkinci El</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                İkinci El Portal Vinç Alırken Dikkat Edilmesi Gerekenler
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                İkinci el portal vinç önemli maliyet avantajı sağlayabilir; ancak göz ardı edilen bir teknik sorun
                hem güvenliği hem de verimliliği ciddi biçimde tehdit edebilir.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Periyodik muayene belgesi (son 12 ay içinde) mutlaka isteniyor mu?",
                "Yapısal kaynaklar NDT (tahribatsız muayene) ile kontrol edildi mi?",
                "Ana kiriş ortası sehimi ölçüldü mü, izin verilen değerin altında mı?",
                "Taşıyıcı tambur, halat ve kanca son ne zaman değiştirildi?",
                "Fren ve aşırı yük koruma sistemleri çalışıyor mu?",
                "Elektrik panosu ve motor sarımları orijinal mi, kaç saatte?",
                "Rust ve aşınma durumu; boyalı mı yoksa gerçekten sağlam mı?",
                "Satıcı, alıcı adına yük testi yapılmasına izin veriyor mu?",
              ].map((m) => (
                <div key={m} className="flex gap-3 items-start bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-yellow-600 font-bold text-lg shrink-0">?</span>
                  <p className="text-gray-700 text-sm">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bakım ────────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Bakım</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Portal Vinç Bakımı ve Periyodik Kontroller</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Düzenli bakım hem iş güvenliği hem de ekipman ömrü açısından kritik öneme sahiptir.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  periyot: "Günlük",
                  kontroller: ["Görsel hasarı kontrolü", "Halat ve kanca kontrolü", "Fren testi", "Sınır switch testi", "Yağlama noktaları"],
                },
                {
                  periyot: "Aylık",
                  kontroller: ["Rulman gürültü kontrolü", "Elektrik bağlantıları", "Ray hizalama ölçümü", "Tambur ve halat aşınması", "Frekans invertörü arıza kodu"],
                },
                {
                  periyot: "Yıllık",
                  kontroller: ["Tam yapısal muayene", "NDT kaynakları", "Kiriş sehim ölçümü", "Yük testi (%110 SWL)", "Resmi periyodik muayene belgesi"],
                },
              ].map((b) => (
                <div key={b.periyot} className="border border-gray-100 rounded-2xl p-6">
                  <div className="inline-block bg-yellow-400 text-black font-black text-sm px-3 py-1 rounded-full mb-4">
                    {b.periyot}
                  </div>
                  <ul className="space-y-2">
                    {b.kontroller.map((k) => (
                      <li key={k} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-yellow-500 font-bold">✓</span> {k}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
              <h3 className="font-black text-gray-900 mb-2">📋 Portal Vinç Bakım Planı Nasıl Oluşturulur?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bakım planı; vincin FEM/ISO kullanım sınıfı (A3–A8), günlük ortalama çevrim sayısı ve çalışma
                ortamı koşullarına (toz, nem, sıcaklık) göre hazırlanır. Üretici OEM kılavuzu temel referanstır;
                Türkiye'de 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında yıllık periyodik muayene zorunludur.
                Bakım planının yetkili servis tarafından imzalanarak arşivlenmesi iş güvenliği denetimlerinde zorunludur.
              </p>
            </div>
          </div>
        </section>

        {/* ── Güvenlik ─────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-yellow-400">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Güvenlik</p>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Portal Vinç Güvenlik Standartları ve Belgeler
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  Portal vinç işletiminde güvenlik, teknik performans kadar kritik bir gerekliliktir.
                  Türkiye'deki yasal mevzuat ve uluslararası standartlar hem imalatçı hem de işletmeci
                  için kapsamlı yükümlülükler tanımlar.
                </p>
                <div className="p-4 bg-white/60 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Portal Vinç Rüzgar Yükü ve Dış Mekan Güvenlik Kriterleri</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dış mekanda kullanılan portal vinçler EN 13001-1 standardı kapsamında rüzgar yükü hesabına
                    tabi tutulmalıdır. Çalışma halinde 20 m/s, devre dışı fırtına yükünde ise 50 m/s rüzgar hızı
                    esas alınır. Bu değerlerin üzerinde anemometre alarmı devreye girerek vincin otomatik olarak
                    durdurulması ve ray kilitleyici sisteme bağlanması sağlanmalıdır.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {guvenlikMaddeleri.map((kural) => (
                  <div key={kural} className="flex gap-3 items-start bg-white/60 rounded-xl p-4">
                    <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                    <p className="text-gray-800 text-sm">{kural}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CE & ISO & FEM ───────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Standartlar</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">CE Belgesi ve ISO / FEM Standartları</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  baslik: "CE Belgesi",
                  icerik: "Avrupa Makineler Direktifi 2006/42/EC kapsamında zorunludur. Türkiye'de yasal kullanım için CE belgesi şarttır.",
                  renk: "border-blue-200 bg-blue-50",
                },
                {
                  baslik: "ISO 4301 / FEM 1.001",
                  icerik: "Kaldırma ekipmanı kullanım sınıflarını (A1–A8) ve tasarım ömrünü belirler. Vinç seçiminin temeli bu standarttır.",
                  renk: "border-green-200 bg-green-50",
                },
                {
                  baslik: "EN 15011",
                  icerik: "Köprülü ve portal vinçlere özel Avrupa standardıdır. Hesap yöntemleri, güvenlik faktörleri ve test şartlarını kapsar.",
                  renk: "border-orange-200 bg-orange-50",
                },
              ].map((s) => (
                <div key={s.baslik} className={`p-6 border-2 rounded-2xl ${s.renk}`}>
                  <h3 className="font-black text-gray-900 mb-3">{s.baslik}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.icerik}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marka Karşılaştırması ─────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Markalar</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Liebherr, Konecranes, Gottwald: Popüler Marka Karşılaştırması
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Her markanın öne çıktığı niş ve ideal proje türü farklıdır. Karar verirken projenizin önceliklerini belirleyin.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {markaKarsilastirma.map((m) => (
                <div key={m.marka} className="border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-lg transition">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{m.marka}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-green-600 font-bold">+ Güçlü Yönler</span>
                      <p className="text-gray-600 mt-1">{m.kuvvetli}</p>
                    </div>
                    <div>
                      <span className="text-red-500 font-bold">− Zayıf Yönler</span>
                      <p className="text-gray-600 mt-1">{m.zayif}</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                      <span className="text-yellow-700 font-bold">✦ İdeal Kullanım</span>
                      <p className="text-gray-700 mt-1">{m.ideal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Portal Vinç Hakkında Sıkça Sorulan Sorular
              </h2>
            </div>
            <div className="space-y-4">
              {sss.map((s, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 transition">
                  <h3 className="font-bold text-gray-900 mb-2">❓ {s.soru}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.cevap}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/sik-sorulan-sorular" className="text-yellow-600 font-semibold hover:underline">
                Tüm soruları görüntüle →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gray-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-4">Projeniz İçin Portal Vinç Teklifi Alın</h2>
            <p className="text-gray-400 mb-8 text-lg">
              7/24 hizmetinizdeyiz. Hemen arayın, ihtiyacınıza en uygun portal vinç sistemini birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05323039089"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 0532 303 90 89
              </a>
              <Link
                href="/iletisim"
                className="border-2 border-gray-600 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Mesaj Gönder
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
