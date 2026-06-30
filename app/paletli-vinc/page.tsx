import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/paletli-vinc",
  },
  title: "Paletli Vinç: Özellikleri, Kullanım Alanları ve Fiyatları (2026)",
  description:
    "Paletli vinç nedir, çeşitleri nelerdir, kaç ton kaldırır? Kiralama ve satın alma rehberi, fiyat tablosu, marka karşılaştırması ve SSS. 0532 303 90 89",
};

// ── JSON-LD Schema ──────────────────────────────────────────────────────────
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://example.com/paletli-vinc#article",
      headline: "Paletli Vinç: Özellikleri, Kullanım Alanları ve Fiyatları (2026)",
      description:
        "Paletli vinç hakkında kapsamlı rehber: çeşitleri, teknik özellikleri, kiralama fiyatları ve satın alma tavsiyeleri.",
      image: "https://example.com/images/paletli-vinc-hero.jpg",
      datePublished: "2026-01-01",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "VinçPro" },
      publisher: {
        "@type": "Organization",
        name: "VinçPro",
        logo: { "@type": "ImageObject", url: "https://example.com/logo.png" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Paletli vinç nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paletli vinç, lastik tekerlekler yerine çelik palet sistemi üzerine kurulu, ağır yük kaldırma ve uzun süreli şantiye operasyonları için tasarlanmış mobil vinç türüdür.",
          },
        },
        {
          "@type": "Question",
          name: "Paletli vinç kaç ton kaldırır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paletli vinçler kapasite aralığına göre 25 tondan 3.000 tona kadar yük kaldırabilir. En yaygın kullanılan modeller 100–400 ton aralığındadır.",
          },
        },
        {
          "@type": "Question",
          name: "Paletli vinç kiralama maliyeti nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paletli vinç kiralama fiyatları tonaj, kiralama süresi ve operatör ihtiyacına göre değişmekte olup günlük 15.000 TL ile 80.000 TL arasında seyretmektedir.",
          },
        },
        {
          "@type": "Question",
          name: "Paletli vinç ile tekerlekli vinç arasındaki fark nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paletli vinçler zemin baskısını geniş bir alana dağıtarak yumuşak ve engebeli zeminlerde üstün stabilite sağlar. Tekerlekli vinçler ise karayolunda taşınabilirlik açısından avantajlıdır.",
          },
        },
        {
          "@type": "Question",
          name: "Paletli vinç için CE belgesi zorunlu mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, AB ve Türkiye mevzuatına göre tüm kaldırma ekipmanlarının CE belgesi taşıması zorunludur. Ayrıca TS EN 13000 standardına uyumluluk aranmaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "İkinci el paletli vinç alırken nelere dikkat edilmeli?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Çalışma saati, krom ve palet aşınması, muayene sertifikası, yedek parça temin kolaylığı ve servis ağı başlıca incelenmesi gereken unsurlardır.",
          },
        },
        {
          "@type": "Question",
          name: "Paletli vinç nakliyesi nasıl yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paletli vinçler büyük boyutları nedeniyle parçalı sökülerek özel lowboy TIR'larla taşınır. Nakliye maliyeti mesafe ve parça sayısına göre hesaplanır.",
          },
        },
        {
          "@type": "Question",
          name: "Lattice boom (kafes bom) ne demektir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lattice boom, çelik profillerin kafes şeklinde birleştirilmesiyle oluşturulan, hafif ama yüksek rijitliğe sahip bom sistemidir. Uzun erişim ve yüksek kapasite gerektiren projelerde tercih edilir.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      name: "Paletli Vinç Kiralama Hizmeti",
      description: "Profesyonel paletli vinç kiralama; operatörlü, sigortalı, 7/24 destek.",
      brand: { "@type": "Brand", name: "VinçPro" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "TRY",
        lowPrice: "15000",
        highPrice: "80000",
        offerCount: "6",
      },
    },
  ],
};

// ── Veri ────────────────────────────────────────────────────────────────────

const vincCesitleri = [
  {
    icon: "⚙️",
    title: "Standart Lattice Boom Paletli Vinç",
    desc: "Kafes bom sistemiyle donatılmış, 50–600 ton arası en yaygın kullanılan model. İnşaat, enerji ve petrokimya projelerinde tercih edilir.",
    kapasite: "50 – 600 ton",
    erisum: "30 – 120 m bom",
    href: "/lattice-boom-paletli-vinc",
    etiket: "En Popüler",
    ozellikler: ["Yüksek stabilite", "Uzun bom", "Zorlu zemin"],
  },
  {
    icon: "🏗️",
    title: "Süper Ağır Paletli Vinç",
    desc: "600 ton üzeri kapasitesiyle mega endüstriyel projeler, reaktör montajı ve LNG tesisleri için tasarlanmış dev vinçler.",
    kapasite: "600 – 3.000+ ton",
    erisum: "150 m+ bom",
    href: "/super-agir-paletli-vinc",
    etiket: "Mega Proje",
    ozellikler: ["Mega kapasite", "Reaktör montajı", "LNG tesisi"],
  },
  {
    icon: "🔩",
    title: "Mini / Kompakt Paletli Vinç",
    desc: "25–100 ton kapasiteli, dar ve kapalı alanlarda manevra kabiliyetiyle öne çıkan model. Fabrika içi ve tünel projeleri için idealdir.",
    kapasite: "25 – 100 ton",
    erisum: "10 – 40 m bom",
    href: "/kompakt-paletli-vinc",
    etiket: "Dar Alan",
    ozellikler: ["Dar alan", "Fabrika içi", "Tünel projeleri"],
  },
  {
    icon: "🌬️",
    title: "Rüzgar Türbini Montaj Vinci",
    desc: "Nacelle ve kanat montajı için 100–600 ton arasında özel konfigürasyonla donatılmış, rüzgar enerjisi projelerinin vazgeçilmezi.",
    kapasite: "100 – 600 ton",
    erisum: "Özel konfigürasyon",
    href: "/ruzgar-turbini-montaj-vinc",
    etiket: "Enerji",
    ozellikler: ["Kanat montajı", "Nacelle", "Yenilenebilir enerji"],
  },
  {
    icon: "🛢️",
    title: "Petrokimya Serisi Paletli Vinç",
    desc: "ATEX onaylı, kıvılcım önleyici donanımlarla atex bölgelerde ve rafinerilerde güvenli kaldırma operasyonu sağlar.",
    kapasite: "100 – 800 ton",
    erisum: "Yapılandırılabilir",
    href: "/petrokimya-paletli-vinc",
    etiket: "ATEX",
    ozellikler: ["ATEX bölge", "Rafineri", "Kıvılcım önleyici"],
  },
  {
    icon: "🌊",
    title: "Amfibi / Bataklık Paletli Vinç",
    desc: "Genişletilmiş palet tabanı ve su geçirmez sistemleriyle deniz kenarı, bataklık ve kıyı inşaat projelerinde kullanılır.",
    kapasite: "50 – 300 ton",
    erisum: "Özel şasi",
    href: "/amfibi-paletli-vinc",
    etiket: "Su Kenarı",
    ozellikler: ["Bataklık zemin", "Kıyı inşaat", "Genişletilmiş palet"],
  },
];

const fiyatTablosu = [
  { model: "50 Ton Paletli Vinç", gunluk: "15.000 TL", haftalik: "80.000 TL", aylik: "250.000 TL" },
  { model: "100 Ton Paletli Vinç", gunluk: "22.000 TL", haftalik: "130.000 TL", aylik: "380.000 TL" },
  { model: "200 Ton Paletli Vinç", gunluk: "38.000 TL", haftalik: "220.000 TL", aylik: "650.000 TL" },
  { model: "300 Ton Paletli Vinç", gunluk: "55.000 TL", haftalik: "320.000 TL", aylik: "Teklif" },
  { model: "400 Ton Paletli Vinç", gunluk: "70.000 TL", haftalik: "420.000 TL", aylik: "Teklif" },
  { model: "600 Ton+ Paletli Vinç", gunluk: "Teklif", haftalik: "Teklif", aylik: "Teklif" },
  { model: "Operatör + Rigger Ekibi", gunluk: "4.500 TL", haftalik: "25.000 TL", aylik: "70.000 TL" },
  { model: "Nakliye (İstanbul içi)", gunluk: "8.000 TL", haftalik: "–", aylik: "–" },
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "İnşaat & Altyapı", desc: "Köprü kirişi yerleştirme, prefabrik yapı montajı, kolon ve kiriş kurulumu" },
  { icon: "⚡", title: "Enerji Sektörü", desc: "Trafo kurulumu, santral ekipmanları, HES ve termik santral inşaatları" },
  { icon: "🌬️", title: "Rüzgar Enerjisi", desc: "Türbin kulesi, nacelle ve kanat montajı; 80–160 m yükseklikte hassas konumlama" },
  { icon: "🛢️", title: "Petrokimya & Rafineri", desc: "Reaktör, kolon ve basınçlı kap montajı; ATEX bölge uyumlu operasyonlar" },
  { icon: "🚢", title: "Liman & Tersane", desc: "Gemi modül yerleştirme, duba ve platform montajı, liman altyapı çalışmaları" },
  { icon: "🏭", title: "Ağır Sanayi", desc: "Preslerin, türbinlerin ve büyük makine bloklarının fabrika içi konumlanması" },
  { icon: "🌉", title: "Köprü & Viyadük", desc: "Uzun açıklıklı köprü segmentlerinin hassas yerleştirilmesi" },
  { icon: "🔥", title: "Petrol & Doğalgaz", desc: "Boru hatları, LNG tankları ve offshore platform ekipmanlarının kurulumu" },
];

const teknikOzellikler = [
  { baslik: "Kapasite Aralığı", deger: "25 ton – 3.000+ ton" },
  { baslik: "Bom Uzunluğu", deger: "10 m – 150 m (lattice boom)" },
  { baslik: "Çalışma Yarıçapı", deger: "4 m – 120 m (modele göre)" },
  { baslik: "Palet Genişliği", deger: "0,6 m – 1,5 m (zemine göre)" },
  { baslik: "Zemin Basıncı", deger: "4 – 10 t/m² (tekerlekliye kıyasla %60 daha az)" },
  { baslik: "Motor Gücü", deger: "200 kW – 1.000+ kW (dizel/hibrit)" },
  { baslik: "Hareket Hızı", deger: "1 – 3 km/saat (palet tahrikli)" },
  { baslik: "Güvenlik Sistemleri", deger: "SLI, RCI, eğim sensörü, rüzgar ölçer" },
];

const markalar = [
  {
    marka: "Liebherr",
    mensei: "🇩🇪 Almanya",
    populerModel: "LR 1300, LR 1750, LR 11000",
    kapasite: "100 – 3.000 ton",
    avantaj: "Üstün teknoloji, Litronic kontrol sistemi, geniş servis ağı",
    renk: "yellow",
  },
  {
    marka: "Tadano",
    mensei: "🇯🇵 Japonya",
    populerModel: "GCC-3000, CC 3800-1, AC 700-3",
    kapasite: "50 – 3.000 ton",
    avantaj: "Güvenilirlik, yakıt verimliliği, compact tasarım",
    renk: "red",
  },
  {
    marka: "Manitowoc",
    mensei: "🇺🇸 ABD",
    populerModel: "MLC650, MLC300, 2250",
    kapasite: "150 – 2.500 ton",
    avantaj: "VPC (Variable Position Counterweight) teknolojisi, yüksek kapasite",
    renk: "blue",
  },
];

const guvenlikStandartlari = [
  "CE Belgesi (2006/42/EC Makine Direktifi)",
  "TS EN 13000 – Seyyar Vinçler Güvenlik Standardı",
  "ISO 4306 – Vinç Terminoloji ve Sınıflandırma",
  "LEEA (Lifting Equipment Engineers Association) Uyumluluğu",
  "OSHA 1926.1400 İnşaat Sahası Vinç Standartları",
  "Periyodik Muayene (6 ayda bir zorunlu)",
];

const bakimAdimları = [
  { no: "01", baslik: "Günlük Kontrol", icerik: "Palet ve tahrik sistemi, hidrolik sızdırmazlık, kanca ve bom bağlantıları görsel kontrol." },
  { no: "02", baslik: "Haftalık Servis", icerik: "Yağ seviyeleri, yük sınırlayıcı (SLI/RCI) kalibrasyon testi, paletten gres yenileme." },
  { no: "03", baslik: "Aylık Revizyon", icerik: "Halat ve kanca aşınma ölçümü, bom kafes bağlantı noktaları torku, elektrik devre testi." },
  { no: "04", baslik: "Yıllık Muayene", icerik: "Yetkili mühendis tarafından yük testi, NDT (tahribatsız muayene) ve belge yenileme." },
];

const sss = [
  {
    soru: "Paletli vinç nedir?",
    cevap:
      "Paletli vinç, lastik tekerlekler yerine çelik palet (tırtıl) sistemiyle hareket eden, zemin baskısını geniş alana dağıtan ve ağır yük kaldırma için tasarlanmış mobil vinç türüdür. Özellikle yumuşak, çamurlu veya engebeli zeminlerde tekerlekli vinçlere kıyasla çok daha yüksek stabilite sunar.",
  },
  {
    soru: "Paletli vinç ile tekerlekli (mobil) vinç arasındaki temel fark nedir?",
    cevap:
      "Paletli vinçler, düşük zemin basıncı ve üstün yük kapasitesi sayesinde zor şantiye koşullarına daha uygundur. Ancak karayolunda kendi gücüyle hareket edemez; özel lowboy araçlarla taşınması gerekir. Tekerlekli vinçler ise taşınabilirlik açısından avantajlıdır fakat zemin kapasitesi paletliye göre daha sınırlıdır.",
  },
  {
    soru: "Paletli vinç kaç ton kaldırır?",
    cevap:
      "Modele bağlı olarak 25 tondan 3.000 tona kadar farklı kapasiteler mevcuttur. En yaygın kullanılan aralık 100–400 ton olup rüzgar türbini ve petrokimya projelerinde 600–1.000 ton kapasiteli vinçler de sıkça tercih edilmektedir.",
  },
  {
    soru: "Paletli vinç kiralama fiyatları nasıl belirlenir?",
    cevap:
      "Fiyat; vincin tonaj kapasitesi, kiralama süresi (günlük/haftalık/aylık), şantiye konumu, nakliye mesafesi, operatör ve rigger ekip gereksinimi ile piyasa konjonktürüne göre şekillenmektedir. Genel aralık günlük 15.000 TL ile 80.000 TL arasında değişmektedir.",
  },
  {
    soru: "Lattice boom (kafes bom) ne anlama gelir?",
    cevap:
      "Lattice boom, çelik profil ve boruların üçgen kafes geometrisiyle birleştirildiği bom sistemidir. Yüksek rijitliği ve düşük ağırlığı sayesinde uzun erişim mesafelerinde bile yüksek kapasite sunar. Paletli vinçlerin neredeyse tamamında bu sistem kullanılmaktadır.",
  },
  {
    soru: "Paletli vinci karayolunda sürülebilir mi?",
    cevap:
      "Hayır. Paletli vinçler karayolunda bağımsız olarak hareket edemez. Şantiyeler arası nakliye için özel lowboy TIR platformları ve gerektiğinde yol izni alınması zorunludur. Büyük kapasiteli modellerde vinç parçalara ayrılarak birden fazla araçla taşınır.",
  },
  {
    soru: "CE belgesi ve TS EN 13000 nedir?",
    cevap:
      "CE belgesi, vincin AB Makine Direktifi (2006/42/EC) gerekliliklerini karşıladığını kanıtlayan uygunluk beyanıdır. TS EN 13000 ise Türkiye'de geçerli seyyar vinç güvenlik standardıdır. Tüm ticari operasyonlarda bu belgeler yasal olarak zorunludur.",
  },
  {
    soru: "İkinci el paletli vinç alırken en çok neye dikkat edilmeli?",
    cevap:
      "Toplam çalışma saati (genellikle 10.000 saatin altı tercih edilir), krom silindir ve palet aşınması, mevcut muayene sertifikası, yedek parça temin kolaylığı ve yetkili servis ağına erişim öncelikli inceleme noktalarıdır.",
  },
];

const ikinciElDikkat = [
  { icon: "🕐", baslik: "Çalışma Saati", aciklama: "10.000 saatin altındaki vinçler daha uzun ömür sunar. Sayaç sıfırlama riskine karşı servis kayıtlarını talep edin." },
  { icon: "🔩", baslik: "Palet & Tırtıl Aşınması", aciklama: "Palet dişlerinin derin aşınması ve zincir salgısı yüksek bakım maliyetine işaret eder." },
  { icon: "💧", baslik: "Hidrolik Sistem", aciklama: "Silindir sızdırmazlıkları ve hortum bütünlüğü kontrol edilmeli; hydraulic yağ analizi yaptırılmalıdır." },
  { icon: "📋", baslik: "Sertifika & Muayene", aciklama: "Geçerli CE belgesi ve en fazla 6 aylık periyodik muayene raporu olmalıdır." },
  { icon: "🏭", baslik: "Yedek Parça Erişimi", aciklama: "Liebherr, Tadano ve Manitowoc gibi markalar için Türkiye'de yetkili servis ve parça deposu mevcuttur." },
  { icon: "📊", baslik: "Servis Geçmişi", aciklama: "Aylık yağ değişimi, yıllık bom muayenesi ve halat yenileme kayıtları tam olmalıdır." },
];

// ── Bileşen ─────────────────────────────────────────────────────────────────

export default function PaletliVincPage() {
  return (
    <div className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏗️ Paletli Vinç Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Paletli Vinç:<br />
              <span className="text-yellow-400">Kapsamlı Rehber</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Özellikler, çeşitler, tonaj bilgileri, kiralama fiyatları ve satın alma tavsiyeleri.
              Türkiye&apos;nin en kapsamlı paletli vinç kaynağı.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Teklif Al: 0532 303 90 89
              </a>
              <a
                href="#vinc-cesitleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Vinç Çeşitlerini Gör ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { rakam: "25 – 3.000+", birim: "Ton Kapasite" },
              { rakam: "6", birim: "Farklı Model" },
              { rakam: "150 m", birim: "Max Bom Uzunluğu" },
              { rakam: "7/24", birim: "Teknik Destek" },
            ].map((s) => (
              <div key={s.birim}>
                <div className="text-3xl font-black text-yellow-400">{s.rakam}</div>
                <div className="text-gray-400 text-sm mt-1">{s.birim}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PALETLİ VİNÇ NEDİR? ── */}
      <section className="py-20 px-4 bg-white" id="paletli-vinc-nedir">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Kavram</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Paletli Vinç Nedir?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Paletli vinç; çelik tırtıl (palet) sistemi üzerine inşa edilmiş, ağır yük kaldırma ve taşıma
                operasyonları için tasarlanmış bir mobil vinç türüdür. Lastik tekerlekli muadiline kıyasla zemin
                baskısını çok daha geniş bir yüzeye dağıtır; bu özellik sayesinde çamurlu, gevşek veya engebeli
                zeminlerde üstün stabilite sunar.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kafes bom (lattice boom) sistemiyle donatılan paletli vinçler, teleskopik bomlu tekerlekli vinçlerin
                ulaşamadığı kapasitelere erişebilir. 25 tondan 3.000 tona kadar geniş bir yelpazede üretilen bu
                vinçler; inşaat, petrokimya, rüzgar enerjisi, liman ve tersane gibi ağır iş sektörlerinin
                vazgeçilmez ekipmanları arasındadır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Karayolunda bağımsız hareket edemediğinden sahalara özel lowboy TIR araçlarıyla taşınır. Buna karşın
                uzun süreli şantiye operasyonlarında ve yüksek kapasiteli kaldırmalarda rakipsiz performans sunar.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-96 bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Paletli vinç büyük inşaat sahasında çalışıyor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                📸 Lattice boom paletli vinç – saha uygulaması
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VİNÇ ÇEŞİTLERİ ── */}
      <section className="py-20 px-4 bg-gray-50" id="vinc-cesitleri">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Model Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vinç Çeşitleri ve Modelleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Projenizin kapasitesine, zeminimne ve bom uzunluğu ihtiyacına göre doğru modeli seçin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vincCesitleri.map((v) => (
              <div
                key={v.title}
                className="relative bg-white rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition p-6 flex flex-col"
              >
                {v.etiket && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {v.etiket}
                  </span>
                )}
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{v.desc}</p>
                <div className="space-y-1 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Kapasite:</span>
                    <span className="font-semibold text-gray-700">{v.kapasite}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Erişim:</span>
                    <span className="font-semibold text-gray-700">{v.erisum}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {v.ozellikler.map((o) => (
                    <span key={o} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{o}</span>
                  ))}
                </div>
                <Link
                  href={v.href}
                  className="mt-auto inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 font-semibold px-4 py-2 rounded-xl text-sm transition"
                >
                  Detaylı İncele →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KÜÇÜK & AĞIR TONAJ ── */}
      <section className="py-20 px-4 bg-white" id="tonaj">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kapasite Sınıfları</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vinç Kapasite ve Tonaj Bilgileri</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Küçük Tonaj */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Küçük Tonajlı Paletli Vinçler (25–100 ton)</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Kompakt gövdeleriyle fabrika içleri, tünel projeleri ve dar şantiyeler için idealdir. Paletli
                yapıları sayesinde beton zemin üzerinde bile düşük taban basıncıyla güvenle çalışır. Montaj ve
                sökümü hızlı olduğundan kısa süreli ve çok noktalı operasyonlarda maliyet avantajı sağlar.
              </p>
              <ul className="space-y-2">
                {["25 ton – küçük ekipman montajı, fabrika içi", "50 ton – orta ölçekli endüstriyel vinçleme", "75–100 ton – altyapı projeleri, köprü elemanları"].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-yellow-600 font-bold shrink-0">▶</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ağır Tonaj */}
            <div className="bg-gray-900 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-black mb-3">Ağır Tonajlı Paletli Vinçler (100 ton ve üzeri)</h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Büyük inşaat projeleri, enerji santralleri ve petrokimya tesislerinin olmazmazı olan ağır
                tonajlı paletli vinçler; 100 tondan başlayıp 3.000 tona uzanan kapasitesiyle mega mühendislik
                operasyonlarını mümkün kılar. LR 11000 ve MLC650 gibi süper ağır modeller, tek bir kaldırmada
                santral reaktörü yerleştirebilmektedir.
              </p>
              <ul className="space-y-2">
                {["200–400 ton – rüzgar türbini, rafineri kolonu", "400–800 ton – büyük köprü kirişleri, LNG tankları", "800–3.000+ ton – reaktör, mega platform, tersane blokları"].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-300">
                    <span className="text-yellow-400 font-bold shrink-0">▶</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PALETLİ vs TEKERLEKLİ ── */}
      <section className="py-20 px-4 bg-gray-50" id="karsilastirma">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Karşılaştırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vinç ile Tekerlekli Vinç Arasındaki Fark</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Hangi durum için hangi vinç? İki sistemin güçlü ve zayıf yönlerini karşılaştırdık.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-bold">Özellik</th>
                  <th className="text-center px-6 py-4 font-bold">🏗️ Paletli Vinç</th>
                  <th className="text-center px-6 py-4 font-bold">🚛 Tekerlekli Vinç</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Zemin Basıncı", "✅ Düşük (geniş palet tabanı)", "⚠️ Yüksek (tekerlekten nokta yükü)"],
                  ["Kapasite Aralığı", "✅ 25 ton – 3.000+ ton", "⚠️ 25 ton – 1.200 ton"],
                  ["Zemin Uyumu", "✅ Çamur, kaya, gevşek zemin", "⚠️ Sert ve düz zemin gerekir"],
                  ["Kendi Kendine Hareket", "❌ Karayolunda hareket edemez", "✅ Karayolunda seyredebilir"],
                  ["Nakliye Kolaylığı", "❌ Lowboy TIR + parçalı taşıma", "✅ Kendi başına seyahat"],
                  ["Uzun Süreli Operasyon", "✅ İdeal (sabit pozisyon)", "⚠️ Sınırlı süre"],
                  ["Kurulum Süresi", "⚠️ Uzun (bom montajı)", "✅ Kısa (hızlı hazırlık)"],
                  ["Maliyet (günlük)", "⚠️ Daha yüksek", "✅ Nispeten düşük"],
                ].map(([ozellik, paletli, tekerlekli]) => (
                  <tr key={ozellik} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">{ozellik}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{paletli}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{tekerlekli}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── KULLANIM ALANLARI ── */}
      <section className="py-20 px-4 bg-white" id="kullanim-alanlari">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vincin Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Paletli vinçler, ağır mühendislik gerektiren her sektörde kilit rol üstlenir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {kullanımAlanlari.map((k) => (
              <div key={k.title} className="p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 hover:border-yellow-200 border border-transparent transition">
                <div className="text-4xl mb-3">{k.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{k.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>

          {/* Detaylı Kullanım Alanı Kartları */}
          <div className="space-y-10">
            {/* İnşaat */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80"
                  alt="İnşaat sektöründe paletli vinç kullanımı"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">İnşaat Sektöründe Paletli Vinç Kullanımı</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Köprü kirişlerinin hassas yerleştirilmesinden prefabrik bina elemanlarının montajına kadar geniş
                  bir operasyon yelpazesinde paletli vinçler inşaat sektörünün bel kemiğidir. Stabiliteleri
                  sayesinde zemin takviyesi yapılmadan bile yüksek kapasiteli kaldırma işlemi gerçekleştirilebilir.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {["Köprü ve viyadük kirişi yerleştirme", "Prefabrik beton panel montajı", "Çelik çatı konstrüksiyon kurulumu", "Tünel borusu ve kazık montajı"].map((m) => (
                    <li key={m} className="flex gap-2"><span className="text-yellow-600">✓</span>{m}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Rüzgar Türbini */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Rüzgar Türbini Montajında Paletli Vinç</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Modern rüzgar türbinleri 80 ile 160 metre arasında yükselen kule sistemleriyle birlikte
                  kurulur. Nacelle ağırlıkları 50-100 ton, kanat uzunlukları ise 70 metreyi aşabilmektedir.
                  Bu ölçütler, yüksek kapasiteli ve uzun bomlu paletli vinçlerin kullanımını zorunlu kılar.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Türbin kurulum sahalarının genellikle tarım arazisi veya dağlık bölgelerde yer alması,
                  zemin uyumluluğu yüksek paletli vinçleri rakipsiz kılar. Özellikle 200–400 ton kapasiteli
                  modeller bu tür projelerde standart tercih haline gelmiştir.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80"
                  alt="Rüzgar türbini montajında paletli vinç"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Petrokimya */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                  alt="Petrokimya ve enerji projelerinde paletli vinç"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Petrokimya ve Enerji Projelerinde Paletli Vinç</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Rafineri ve petrokimya tesislerinde reaktör kolonu ve basınçlı kapların tek parçalı montajı,
                  ancak 400 ton üzeri kapasiteli paletli vinçlerle mümkündür. ATEX bölgelerinde kullanılan
                  özel donanımlı modeller kıvılcım oluşumunu önleyerek yangın ve patlama riskini minimize eder.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {["Reaktör ve destilasyon kolonu montajı", "LNG tankı kurulumu", "Trafo ve jeneratör yerleştirme", "Boru köprüsü ve raf sistemi kurulumu"].map((m) => (
                    <li key={m} className="flex gap-2"><span className="text-yellow-600">✓</span>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEKNİK ÖZELLİKLER ── */}
      <section className="py-20 px-4 bg-gray-900 text-white" id="teknik-ozellikler">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Teknik Veriler</p>
            <h2 className="text-4xl font-black mb-4">Paletli Vinç Teknik Özellikleri</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Lattice boom paletli vinçlerin genel teknik parametre aralıkları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {teknikOzellikler.map((t) => (
              <div key={t.baslik} className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <span className="text-gray-400 text-sm">{t.baslik}</span>
                <span className="font-bold text-yellow-400 text-sm text-right">{t.deger}</span>
              </div>
            ))}
          </div>

          {/* Lattice Boom Detay */}
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-yellow-400 mb-4">Lattice Boom (Kafes Bom) Paletli Vinç Özellikleri</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Lattice boom sistemi, ince çelik profillerin üçgen kafes geometrisiyle birleştirilerek
                  oluşturduğu bom yapısıdır. Bu tasarım; yüksek rijitliği, düşük öz ağırlığı ve uzun
                  erişim mesafesini bir arada sunar. Standart bom uzunlukları 10 metrelik modüller
                  halinde artırılabilir; gerektiğinde jib (uzatma bom) eklenerek erişim daha da uzatılır.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    "Teleskopik boma kıyasla %30–50 daha uzun erişim",
                    "Modüler yapı sayesinde farklı bom konfigürasyonları",
                    "Luffing jib ile çok katlı yapılarda hassas manevra",
                    "Aşırı yük koruma sistemi (RCI/SLI) entegre",
                  ].map((m) => (
                    <li key={m} className="flex gap-2"><span className="text-yellow-400">▶</span>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  Süper ağır modellerde ek olarak Superlift ve Carbody ağırlık sistemleri devreye girerek
                  devrilme momentine karşı denge sağlar. Bu sistemler, vinç boyutunu büyütmeden kapasite
                  artışına olanak tanır. Liebherr LR 11000, Tadano GCC-3000 ve Manitowoc MLC650 bu
                  teknolojinin en ileri temsilcileridir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FİYAT TABLOSU ── */}
      <section className="py-20 px-4 bg-white" id="fiyatlar">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">2026 Fiyat Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vinç Kiralama Fiyatları</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Aşağıdaki fiyatlar yaklaşık baz fiyatlar olup nakliye, operatör ve proje detaylarına göre değişiklik gösterir.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-yellow-400">
                  <th className="text-left px-6 py-4 font-black text-black">Model</th>
                  <th className="text-center px-6 py-4 font-black text-black">Günlük</th>
                  <th className="text-center px-6 py-4 font-black text-black">Haftalık</th>
                  <th className="text-center px-6 py-4 font-black text-black">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr key={f.model} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition`}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{f.model}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{f.gunluk}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{f.haftalik}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{f.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fiyatı etkileyen faktörler */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-5">Günlük ve Aylık Kiralama Fiyat Karşılaştırması</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Uzun süreli kiralamalar genellikle günlük fiyata göre %20–35 arasında indirim imkânı sunar.
                1 ayı aşan projelerde aylık paket fiyat görüşülmesi, toplam maliyeti önemli ölçüde düşürmektedir.
              </p>
              <div className="space-y-3">
                {[
                  "Günlük kiralama: kısa süreli ve acil operasyonlar için",
                  "Haftalık kiralama: 1–2 haftalık proje paketleri",
                  "Aylık kiralama: büyük inşaat ve enerji projeleri",
                ].map((f) => (
                  <div key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                    <span className="text-yellow-600 font-bold text-lg shrink-0">●</span>
                    <p className="text-gray-700 text-sm">{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-5">Operatörlü Paletli Vinç Kiralama Avantajları</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sertifikalı operatör ve rigger ekibi kiralama paketine dahil edildiğinde hem yasal yükümlülük
                hem de operasyonel verimlilik tek bir çatı altında çözülmektedir.
              </p>
              <div className="space-y-3">
                {[
                  "İş güvenliği sorumluluğu kiralama firmasına geçer",
                  "Uzman ekip operasyon süresini kısaltır",
                  "Hasar ve kaza sigortası kapsamı genişler",
                  "Periyodik kontrol ve bakım dahil edilebilir",
                ].map((f) => (
                  <div key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                    <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                    <p className="text-gray-700 text-sm">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nakliye */}
          <div className="mt-10 bg-gray-900 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-black mb-4">Paletli Vinç Taşıma ve Nakliye Maliyetleri</h3>
            <p className="text-gray-300 leading-relaxed mb-5">
              Paletli vinçler karayolunda bağımsız hareket edemediğinden şantiyeler arası nakliye özel lowboy TIR
              araçları gerektirmektedir. 100 ton altı modeller genellikle 2–3 araçla, 300 ton üzeri modeller
              ise 10'dan fazla araçla taşınır; nakliye rota planlaması ve olası yol izni maliyetleri de hesaba
              katılmalıdır.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { etiket: "İl İçi Nakliye", fiyat: "8.000 – 20.000 TL" },
                { etiket: "İller Arası Nakliye", fiyat: "25.000 – 80.000 TL" },
                { etiket: "Yol İzni (Gerekirse)", fiyat: "2.500 – 15.000 TL" },
              ].map((n) => (
                <div key={n.etiket} className="bg-white/10 rounded-xl px-5 py-4">
                  <div className="text-gray-400 text-xs mb-1">{n.etiket}</div>
                  <div className="text-yellow-400 font-black">{n.fiyat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SATIN ALMA REHBERİ ── */}
      <section className="py-20 px-4 bg-gray-50" id="satin-alma">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Yatırım Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vinç Satın Alma Rehberi</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Sıfır veya ikinci el paletli vinç yatırımında doğru kararı vermek için bu adımları izleyin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { no: "01", baslik: "İhtiyaç Analizi", icerik: "Ortalama yük kapasitesi, bom uzunluğu, zemin koşulları ve yıllık çalışma saatini belirleyin." },
              { no: "02", baslik: "Marka & Model Seçimi", icerik: "Liebherr, Tadano veya Manitowoc gibi yaygın markalar yerli servis ağı ve yedek parça avantajı sunar." },
              { no: "03", baslik: "Finansman Planı", icerik: "Leasing, banka kredisi veya nakit satın alma seçeneklerini toplam sahip olma maliyeti (TCO) bazında karşılaştırın." },
              { no: "04", baslik: "Teknik İnceleme", icerik: "Sıfır modellerde fabrika testi, ikinci el modellerde bağımsız mühendis denetimi şarttır." },
              { no: "05", baslik: "Sigorta & Belgelendirme", icerik: "All-risk makine sigorası, CE belgesi ve TS EN 13000 uyumluluk belgesi temin edin." },
              { no: "06", baslik: "Servis Anlaşması", icerik: "İlk 3 yıl için yetkili servis bakım sözleşmesi; yedek parça temin süresi garantisi alın." },
            ].map((a) => (
              <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group bg-white">
                <div className="text-5xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition mb-4 leading-none">
                  {a.no}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{a.baslik}</h3>
                <p className="text-gray-500 text-sm">{a.icerik}</p>
              </div>
            ))}
          </div>

          {/* Marka Karşılaştırması */}
          <div className="mb-4">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Liebherr, Tadano, Manitowoc: Popüler Marka Karşılaştırması</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {markalar.map((m) => (
              <div key={m.marka} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
                <div className={`h-2 ${m.marka === "Liebherr" ? "bg-yellow-400" : m.marka === "Tadano" ? "bg-red-500" : "bg-blue-600"}`} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-black text-gray-900">{m.marka}</h4>
                    <span className="text-sm">{m.mensei}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Popüler Modeller</div>
                      <div className="font-semibold text-gray-700">{m.populerModel}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Kapasite Aralığı</div>
                      <div className="font-semibold text-gray-700">{m.kapasite}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Öne Çıkan Özellik</div>
                      <div className="text-gray-600 leading-relaxed">{m.avantaj}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── İKİNCİ EL ── */}
      <section className="py-20 px-4 bg-white" id="ikinci-el">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">İkinci El Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İkinci El Paletli Vinç Alırken Dikkat Edilmesi Gerekenler</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              İkinci el paletli vinç yatırımı doğru değerlendirme yapıldığında ciddi tasarruf imkânı sunar.
              Ancak göz ardı edilen detaylar yüksek maliyetlere dönüşebilir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ikinciElDikkat.map((d) => (
              <div key={d.baslik} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:bg-yellow-50 transition">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{d.baslik}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAKIM ── */}
      <section className="py-20 px-4 bg-gray-50" id="bakim">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Bakım & Servis</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vinç Bakımı ve Servisi</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Düzenli bakım hem operasyonel güvenliği hem de vincin ekonomik ömrünü doğrudan etkiler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {bakimAdimları.map((a) => (
              <div key={a.no} className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-md transition">
                <div className="text-3xl font-black text-yellow-400/30 leading-none shrink-0">{a.no}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{a.baslik}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.icerik}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-400 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-gray-900 mb-4">Yıllık Bakım Planı Nasıl Oluşturulur?</h3>
            <p className="text-gray-800 leading-relaxed mb-5">
              Yıllık bakım planı oluşturulurken vincin model yılı, çalışma saati, çevre koşulları (tuz, nem,
              toz) ve üretici tavsiyeleri göz önünde bulundurulmalıdır. Yetkili servis ile imzalanacak yıllık
              bakım sözleşmesi hem planlı duruş sürelerini minimize eder hem de garanti kapsamını korur.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { etiket: "Yıllık Bakım Maliyeti (100 ton)", fiyat: "80.000 – 150.000 TL" },
                { etiket: "Halat Yenileme (periyodik)", fiyat: "20.000 – 60.000 TL" },
                { etiket: "NDT Muayene (yıllık)", fiyat: "15.000 – 30.000 TL" },
              ].map((n) => (
                <div key={n.etiket} className="bg-white/60 rounded-xl px-5 py-4">
                  <div className="text-gray-600 text-xs mb-1">{n.etiket}</div>
                  <div className="text-gray-900 font-black">{n.fiyat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GÜVENLİK ── */}
      <section className="py-20 px-4 bg-gray-900 text-white" id="guvenlik">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black mb-6">Paletli Vinç Güvenlik Standartları ve Belgeler</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ağır yük operasyonlarında güvenlik ihmali kabul edilemez. Türkiye ve Avrupa mevzuatı
                kapsamında paletli vinçler için aşağıdaki standart ve belgeler zorunludur.
              </p>
              <div className="space-y-3">
                {guvenlikStandartlari.map((g) => (
                  <div key={g} className="flex gap-3 items-start bg-white/5 rounded-xl p-4">
                    <span className="text-green-400 font-bold text-lg shrink-0">✓</span>
                    <p className="text-gray-300 text-sm">{g}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-7 mb-6">
                <h3 className="text-xl font-black text-yellow-400 mb-3">CE Belgesi ve TS EN Standartları</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  CE belgesi, vincin Avrupa Makine Direktifi (2006/42/EC) kapsamında tasarım, imalat ve
                  test süreçlerini başarıyla tamamladığını gösterir. TS EN 13000 ise Türkiye Standartlar
                  Enstitüsü tarafından benimsenen seyyar vinç güvenlik standardıdır; periyodik muayene
                  sertifikası en fazla 12 ayda bir yenilenmelidir.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-64 bg-gray-700">
                <Image
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80"
                  alt="Paletli vinç güvenlik kontrolü ve sertifikasyon"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black/60 text-white text-sm font-medium px-4 py-2 rounded-full">
                    🛡️ Periyodik muayene ve sertifikasyon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="py-20 px-4 bg-gray-50" id="sss">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Paletli Vinç Hakkında Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {sss.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 transition">
                <h3 className="font-bold text-gray-900 mb-2">❓ {s.soru}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Projeniz İçin Paletli Vinç Teklifi Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Kapasite, bom uzunluğu ve proje detaylarınızı paylaşın;
            size en uygun modeli belirleyelim.
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
  );
}
