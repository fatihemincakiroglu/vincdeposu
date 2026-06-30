import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/istanbul-vinc-kiralama",
  },
  title: "İstanbul Vinç Kiralama | 39 İlçede 7/24 Hizmet — Vinç Deposu",
  description:
    "İstanbul vinç kiralama hizmetinde lider firma. 39 ilçede sepetli, mobil, kule, paletli vinç ve manlift. Sertifikalı operatör, tam sigorta. 7/24: 0532 303 90 89",
  keywords: ["istanbul vinç kiralama", "istanbul kiralık vinç", "vinç kiralama istanbul", "istanbul sepetli vinç", "istanbul mobil vinç kiralama"],
};

/* ─────────────────────────────────────────────
   VERİ
───────────────────────────────────────────── */

const ilceler = {
  avrupa: [
    { ad: "Avcılar", slug: "avcilar", emoji: "🏙️" },
    { ad: "Bağcılar", slug: "bagcilar", emoji: "🏗️" },
    { ad: "Bahçelievler", slug: "bahcelievler", emoji: "🌳" },
    { ad: "Bakırköy", slug: "bakirkoy", emoji: "🏖️" },
    { ad: "Başakşehir", slug: "basaksehir", emoji: "🏘️" },
    { ad: "Bayrampaşa", slug: "bayrampasa", emoji: "🏭" },
    { ad: "Beşiktaş", slug: "besiktas", emoji: "⚓" },
    { ad: "Beylikdüzü", slug: "beylikduzu", emoji: "🏢" },
    { ad: "Beyoğlu", slug: "beyoglu", emoji: "🌉" },
    { ad: "Büyükçekmece", slug: "buyukcekmece", emoji: "🌊" },
    { ad: "Çatalca", slug: "catalca", emoji: "🌿" },
    { ad: "Esenler", slug: "esenler", emoji: "🏙️" },
    { ad: "Esenyurt", slug: "esenyurt", emoji: "🏗️" },
    { ad: "Eyüpsultan", slug: "eyupsultan", emoji: "🕌" },
    { ad: "Eyüp", slug: "eyup", emoji: "🕌" },
    { ad: "Fatih", slug: "fatih", emoji: "🏛️" },
    { ad: "Gaziosmanpaşa", slug: "gaziosmanpasa", emoji: "🏘️" },
    { ad: "Güngören", slug: "gungoren", emoji: "🏙️" },
    { ad: "Kağıthane", slug: "kagithane", emoji: "🏭" },
    { ad: "Küçükçekmece", slug: "kucukcekmece", emoji: "🌊" },
    { ad: "Sarıyer", slug: "sariyer", emoji: "🌲" },
    { ad: "Silivri", slug: "silivri", emoji: "🌾" },
    { ad: "Şişli", slug: "sisli", emoji: "🏢" },
    { ad: "Sultangazi", slug: "sultangazi", emoji: "🏘️" },
    { ad: "Zeytinburnu", slug: "zeytinburnu", emoji: "⚓" },
    { ad: "Arnavutköy", slug: "arnavutkoy", emoji: "✈️" },
    { ad: "Adalar", slug: "adalar", emoji: "🏝️" },
    { ad: "Şile", slug: "sile", emoji: "🏖️" },
  ],
  anadolu: [
    { ad: "Ataşehir", slug: "atasehir", emoji: "🏢" },
    { ad: "Beykoz", slug: "beykoz", emoji: "🌲" },
    { ad: "Çekmeköy", slug: "cekmekoy", emoji: "🌿" },
    { ad: "Kadıköy", slug: "kadikoy", emoji: "🎨" },
    { ad: "Kartal", slug: "kartal", emoji: "🏭" },
    { ad: "Maltepe", slug: "maltepe", emoji: "🏖️" },
    { ad: "Pendik", slug: "pendik", emoji: "⚓" },
    { ad: "Sancaktepe", slug: "sancaktepe", emoji: "🏗️" },
    { ad: "Sultanbeyli", slug: "sultanbeyli", emoji: "🏘️" },
    { ad: "Tuzla", slug: "tuzla", emoji: "🚢" },
    { ad: "Ümraniye", slug: "umraniye", emoji: "🏙️" },
    { ad: "Üsküdar", slug: "uskudar", emoji: "🕌" },
  ],
};

const vincTurleri = [
  {
    icon: "🚛",
    renk: "#F59E0B",
    renkBg: "#FEF3C7",
    title: "Sepetli Vinç",
    href: "/sepetli-vinc",
    kapasite: "12m – 90m",
    kullanim: "Cephe, bakım, peyzaj",
    desc: "İstanbul'un dar sokak ve yoğun trafiğine uyum sağlayan sepetli vinçlerimiz, personel taşıma ve yüksek noktalara erişimde en yaygın tercih. Boğaz çevresi ve tarihi yarımadada da sorunsuz çalışır.",
    ozellikler: ["Personel taşıma", "Dar alanlara uygun", "Hızlı kurulum", "Geniş erişim açısı"],
  },
  {
    icon: "🏗️",
    renk: "#3B82F6",
    renkBg: "#DBEAFE",
    title: "Mobil Vinç",
    href: "/mobil-vinc",
    kapasite: "25 – 500 ton",
    kullanim: "İnşaat, sanayi, enerji",
    desc: "İstanbul'un büyük inşaat ve sanayi projelerinde hız ve esneklik sağlayan tekerlekli mobil vinçler. Avrupa'dan Anadolu yakasına aynı gün mobilizasyon imkânı.",
    ozellikler: ["Hızlı mobilizasyon", "Yüksek kapasite", "Her araziye uygun", "Farklı bom uzunlukları"],
  },
  {
    icon: "🗼",
    renk: "#8B5CF6",
    renkBg: "#EDE9FE",
    title: "Kule Vinç",
    href: "/kule-vinc",
    kapasite: "1 – 25 ton",
    kullanim: "Uzun süreli inşaat",
    desc: "İstanbul'daki büyük konut ve ticari yapı projelerinde aylarca sabit çalışan, yüksek irtifada hassas yük taşıma yapan vinç türü. Uzun vadeli projeler için en ekonomik seçenek.",
    ozellikler: ["Uzun vadeli proje", "Yüksek irtifa", "Sabit kurulum", "Düşük günlük maliyet"],
  },
  {
    icon: "🐙",
    renk: "#EC4899",
    renkBg: "#FCE7F3",
    title: "Ahtapot Vinç",
    href: "/ahtapot-vinc",
    kapasite: "10 – 50 ton",
    kullanim: "Dar alan, bina içi",
    desc: "İstanbul'un tarihi bina restorasyonları ve dar yapı adalarında kompakt yapısı ve çok yönlü hareketliliği ile tercih edilen vinç türü. Kapalı mekân projelerinde fark yaratır.",
    ozellikler: ["Bina içi çalışma", "Dar alan manevra", "Kompakt yapı", "Çok yönlü hareket"],
  },
  {
    icon: "⚙️",
    renk: "#F97316",
    renkBg: "#FFEDD5",
    title: "Paletli Vinç",
    href: "/paletli-vinc",
    kapasite: "50 – 3000 ton",
    kullanim: "Ağır sanayi, enerji",
    desc: "İstanbul'un liman, tersane ve ağır sanayi bölgelerinde yumuşak ve zorlu arazide çalışabilen yüksek kapasiteli paletli vinçler. Büyük enerji ve altyapı projelerinin tercihi.",
    ozellikler: ["Zorlu arazi", "Çok yüksek kapasite", "Stabil yapı", "Uzun bom seçenekleri"],
  },
  {
    icon: "🚚",
    renk: "#10B981",
    renkBg: "#D1FAE5",
    title: "Kamyon Üstü Vinç",
    href: "/kamyon-ustu-vinc",
    kapasite: "3 – 50 ton",
    kullanim: "Lojistik, nakliye",
    desc: "İstanbul limanları, şantiyeler ve lojistik merkezlerinde kamyon kasasına monte edilen pratik vinç türü. Yük taşıma ve indirme işlemlerini araç üzerinden hızlıca gerçekleştirir.",
    ozellikler: ["Yük taşıma + indirme", "Limanlar, şantiye", "Hızlı teslimat", "Araç üstü çalışma"],
  },
];

const fiyatTablosu = [
  { tur: "18m Sepetli Vinç", saatlik: "1.500 TL", gunluk: "8.000 TL", haftalik: "45.000 TL", aylik: "Teklif" },
  { tur: "32m Sepetli Vinç", saatlik: "2.000 TL", gunluk: "10.000 TL", haftalik: "55.000 TL", aylik: "Teklif" },
  { tur: "53m Sepetli Vinç", saatlik: "3.000 TL", gunluk: "14.000 TL", haftalik: "75.000 TL", aylik: "Teklif" },
  { tur: "Mobil Vinç (50t)", saatlik: "1.500 TL", gunluk: "15.000 TL", haftalik: "80.000 TL", aylik: "250.000 TL" },
  { tur: "Mobil Vinç (100t)", saatlik: "2.000 TL", gunluk: "30.000 TL", haftalik: "150.000 TL", aylik: "500.000 TL" },
  { tur: "Kule Vinç", saatlik: "—", gunluk: "3.000 TL", haftalik: "18.000 TL", aylik: "65.000 TL" },
  { tur: "Paletli Vinç", saatlik: "Teklif", gunluk: "Teklif", haftalik: "Teklif", aylik: "Teklif" },
  { tur: "Operatör (ek)", saatlik: "500 TL", gunluk: "2.000 TL", haftalik: "10.000 TL", aylik: "35.000 TL" },
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "Yüksek Yapı İnşaatı", desc: "İstanbul'un yükselen konut ve ofis projelerinde kat arası beton döküm, kolon montajı, iskelet kurulumu." },
  { icon: "🏭", title: "Fabrika & Sanayi", desc: "İstanbul sanayi bölgelerinde ağır makine montajı, ekipman taşıma ve yerleştirme." },
  { icon: "⚡", title: "Enerji Projeleri", desc: "İstanbul çevresinde rüzgar türbini montajı, trafo kurulumu, solar panel çalışmaları." },
  { icon: "🏠", title: "Dış Cephe Bakımı", desc: "Tarihi binaların ve modern yapıların boya, cam temizleme, cephe onarımı ve mantolama işleri." },
  { icon: "🚢", title: "Liman & Tersane", desc: "İstanbul limanlarında konteyner yükleme, tekne bakımı ve liman operasyonları." },
  { icon: "🛣️", title: "Altyapı Projeleri", desc: "İstanbul'un köprü, tünel, metro ve otoyol inşaat çalışmalarında profesyonel destek." },
  { icon: "📡", title: "Telekom & Anten", desc: "İstanbul genelinde baz istasyonu kurulumu, anten montajı, çatı ekipmanı yerleşimi." },
  { icon: "🌳", title: "Peyzaj & Park", desc: "İstanbul park ve bahçelerinde ağırlıklı ağaç nakliyesi, anıt taş ve heykel yerleşimi." },
];

const adimlar = [
  { no: "01", icon: "📞", title: "Arayın veya WhatsApp Yazın", desc: "İstanbul'daki projenizi, yükün ağırlığını, çalışma yüksekliğini ve süreyi belirtin." },
  { no: "02", icon: "🔍", title: "Keşif & Uygun Vinç Seçimi", desc: "İstanbul uzmanımız projenizi ve bölgenizi analiz eder, doğru vinç tipini belirler." },
  { no: "03", icon: "📋", title: "Fiyat Teklifi", desc: "Şeffaf, kalem kalem fiyatlandırma e-posta ile iletilir." },
  { no: "04", icon: "✍️", title: "Sözleşme İmzalanır", desc: "Kiralama koşulları, sigorta ve operatör detayları netleşir." },
  { no: "05", icon: "🚛", title: "Vinç İstanbul'a Teslim Edilir", desc: "Belirlenen tarihte İstanbul'daki şantiyenize kurulum ekibi ile ulaşırız." },
  { no: "06", icon: "✅", title: "İş Tamamlanır", desc: "Operasyon sona erince vinç teslim alınır, alan temizlenir." },
];

const neden = [
  { icon: "🏆", title: "25 Yıllık İstanbul Deneyimi", desc: "İstanbul'da çeyrek asır, 1000+ başarıyla tamamlanan proje." },
  { icon: "🛡️", title: "Tam Sigortalı", desc: "Tüm ekipman ve operasyonlar kapsamlı sigorta güvencesinde." },
  { icon: "⚡", title: "Aynı Gün Teslimat", desc: "İstanbul genelinde stok garantisiyle acil taleplerde aynı gün vinç sahada." },
  { icon: "👷", title: "Sertifikalı Operatör", desc: "MEB onaylı belgeli, ISG eğitimli operatörler." },
  { icon: "🔧", title: "Bakımlı Filo", desc: "Her ekipman periyodik bakımdan geçer, arıza riski minimumda." },
  { icon: "📞", title: "7/24 Destek", desc: "Gece, hafta sonu, resmi tatil dahil her an ulaşabilirsiniz." },
];

const sss = [
  {
    s: "İstanbul'da vinç kiralama fiyatları nasıl belirleniyor?",
    c: "İstanbul'da vinç kiralama fiyatı; ilçe ve ulaşım mesafesi, seçilen vinç türü ve kapasitesi, kiralama süresi ile operatör ihtiyacına göre değişir. Uzmanımız projenizi inceleyerek şeffaf fiyat teklifi sunar.",
  },
  {
    s: "İstanbul'un her ilçesine hizmet veriyor musunuz?",
    c: "Evet. Boğazın her iki yakasında Avrupa ve Anadolu yakasındaki tüm 39 ilçeye aynı gün hizmet sunuyoruz. Araç filomuz stratejik noktalara dağılmış olup en hızlı şekilde sahaya ulaşıyor.",
  },
  {
    s: "İstanbul trafiğinde vinç ulaşımı nasıl sağlanıyor?",
    c: "İstanbul trafiğine hakim ekibimiz, vinç sevkiyatlarını gece saatlerinde veya yoğunluğu az olan güzergahlarda planlayarak maksimum hız sağlar. Büyük ekipmanlar için belediye izinlerini de biz alıyoruz.",
  },
  {
    s: "Operatörsüz vinç kiralayabilir miyim?",
    c: "Teknik olarak mümkün olsa da yasal düzenlemeler gereği belgeli operatör zorunludur. Operatörsüz kullanım iş güvenliği ihlali oluşturur ve yaptırım gerektirir.",
  },
  {
    s: "Minimum kiralama süresi ne kadar?",
    c: "Sepetli vinçte minimum yarım gün (4 saat), mobil ve kule vinçte minimum 1 tam gün uygulanmaktadır.",
  },
  {
    s: "Fiyata ne dahil, ne değil?",
    c: "Standart fiyata vinç, operatör ve sigorta dahildir. İstanbul içi nakliye belirli sınırlar dahilinde ücretsizdir; şehir dışı nakliye, gece çalışması ve özel izin ücretleri ayrıca yansıtılır.",
  },
  {
    s: "Uzun dönem kiralama daha mı ucuz?",
    c: "Evet. Aylık ve üzeri kiralamalarda günlük fiyata göre %20–35 indirim uygulanmaktadır. Büyük İstanbul projeleri için özel paket fiyatları da sunulmaktadır.",
  },
  {
    s: "İstanbul dışına da hizmet veriyor musunuz?",
    c: "Trakya, Marmara ve çevre illere hizmet verilmektedir. İstanbul dışı nakliye bedeli ayrıca hesaplanır.",
  },
];

const istatistikler = [
  { v: "39", l: "İlçede Hizmet", icon: "📍" },
  { v: "25+", l: "Yıllık Deneyim", icon: "🏆" },
  { v: "1000+", l: "Tamamlanan Proje", icon: "✅" },
  { v: "90 dk", l: "Acil Yanıt Süresi", icon: "⚡" },
  { v: "50+", l: "Belgeli Operatör", icon: "👷" },
  { v: "7/24", l: "Destek Hattı", icon: "📞" },
];

export default function IstanbulVincKiralamaPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-gray-950 text-white min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-yellow-400 opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-10">
            <a href="/" className="hover:text-yellow-400 transition">Ana Sayfa</a>
            <span>›</span>
            <span className="text-gray-300">İstanbul Vinç Kiralama</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Sol */}
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 text-sm font-bold tracking-wide">İstanbul&apos;un 39 İlçesinde 7/24</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-8">
                İstanbul<br />
                <span className="text-yellow-400">Vinç</span><br />
                Kiralama
              </h1>

              <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                İstanbul&apos;un tüm 39 ilçesinde sepetli, mobil, kule, paletli ve daha fazlası.
                Sertifikalı operatör, tam sigorta ve aynı gün teslimat ile İstanbul genelinde
                profesyonel vinç kiralama hizmeti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:05323039089"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-5 rounded-2xl text-lg transition text-center shadow-lg shadow-yellow-400/20"
                >
                  📞 0532 303 90 89
                </a>
                <a
                  href="#vinc-turleri"
                  className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-5 rounded-2xl text-lg transition text-center"
                >
                  Vinç Türlerini Keşfet ↓
                </a>
              </div>

              {/* Mini istatistikler */}
              <div className="grid grid-cols-3 gap-5 border-t border-white/10 pt-8">
                {[
                  { v: "39", l: "İlçe" },
                  { v: "25+", l: "Yıl Deneyim" },
                  { v: "7/24", l: "Destek" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black text-yellow-400">{s.v}</div>
                    <div className="text-gray-500 text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ — Vinç türü grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {vincTurleri.slice(0, 6).map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-yellow-400/40 transition"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-3"
                    style={{ background: v.renk + "25" }}
                  >
                    {v.icon}
                  </div>
                  <div className="text-white font-bold text-sm group-hover:text-yellow-400 transition mb-1">{v.title}</div>
                  <div className="text-gray-500 text-xs">{v.kapasite}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          İSTATİSTİK BARI
      ══════════════════════════════════════ */}
      <section className="bg-gray-900 py-10 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {istatistikler.map((s) => (
            <div key={s.l}>
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-black text-yellow-400">{s.v}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          VİNÇ TÜRLERİ
      ══════════════════════════════════════ */}
      <section id="vinc-turleri" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Ürün Kataloğu</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">İstanbul Vinç Kiralama Türleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              İstanbul projenizin ölçeğine ve ihtiyacına göre doğru vinç türünü seçin. Uzmanımız en uygun seçeneği belirler.
            </p>
          </div>

          <div className="space-y-6">
            {vincTurleri.map((v) => (
              <div
                key={v.href}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
                  style={{ background: `linear-gradient(135deg, ${v.renk}15 0%, ${v.renk}04 100%)`, borderBottom: `2px solid ${v.renk}25` }}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: v.renkBg, border: `2px solid ${v.renk}40` }}
                    >
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1">İstanbul {v.title} Kiralama</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-gray-500">
                          <span>⚖️</span> Kapasite: <strong className="text-gray-800">{v.kapasite}</strong>
                        </span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <span>🔨</span> Kullanım: <strong className="text-gray-800">{v.kullanim}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl transition text-sm whitespace-nowrap flex-shrink-0 text-white hover:opacity-90"
                    style={{ background: v.renk }}
                  >
                    Detaylı Bilgi →
                  </Link>
                </div>

                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-5">{v.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {v.ozellikler.map((o) => (
                        <div key={o} className="flex items-center gap-2.5">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                            style={{ background: v.renk }}
                          >
                            ✓
                          </div>
                          <span className="text-gray-700 text-sm">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="rounded-2xl p-5 text-center flex flex-col items-center justify-center gap-3"
                    style={{ background: v.renkBg, border: `1px solid ${v.renk}30` }}
                  >
                    <div className="text-4xl">{v.icon}</div>
                    <div className="font-black text-gray-900">{v.title}</div>
                    <div className="text-sm text-gray-600">{v.kapasite}</div>
                    <a
                      href="tel:05323039089"
                      className="mt-2 w-full text-center text-sm font-bold py-2.5 rounded-xl text-white transition hover:opacity-90"
                      style={{ background: v.renk }}
                    >
                      📞 Fiyat Al
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FİYAT TABLOSU
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Fiyatlandırma</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">İstanbul Vinç Kiralama Fiyat Listesi</h2>
            <p className="text-gray-500 text-lg">
              Aşağıdaki fiyatlar yol gösterici niteliktedir. İstanbul projenize özel teklif için arayın.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-5 font-black text-base">Vinç / Hizmet</th>
                  <th className="text-center px-5 py-5 font-bold">Saatlik</th>
                  <th className="text-center px-5 py-5 font-bold">Günlük</th>
                  <th className="text-center px-5 py-5 font-bold">Haftalık</th>
                  <th className="text-center px-5 py-5 font-bold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((r, i) => (
                  <tr
                    key={r.tur}
                    className={`border-b border-gray-100 hover:bg-yellow-50 transition ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 font-bold text-gray-900">{r.tur}</td>
                    <td className="px-5 py-4 text-center text-gray-700">{r.saatlik}</td>
                    <td className="px-5 py-4 text-center text-gray-700 font-medium">{r.gunluk}</td>
                    <td className="px-5 py-4 text-center text-gray-700">{r.haftalik}</td>
                    <td className="px-5 py-4 text-center font-bold text-yellow-600">{r.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">Fiyata dahil</div>
                <div className="text-gray-600 text-xs leading-relaxed">Vinç, sertifikalı operatör ve sigorta standartta dahildir.</div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">Ek ücretler</div>
                <div className="text-gray-600 text-xs leading-relaxed">İstanbul dışı nakliye, gece mesaisi ve özel izin ayrıca fiyatlandırılır.</div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">Uzun dönem indirim</div>
                <div className="text-gray-600 text-xs leading-relaxed">Aylık kiralama anlaşmalarında %20–35 indirim uygulanmaktadır.</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-400">
            * Tüm fiyatlar KDV hariç olup piyasa koşullarına göre değişkenlik gösterebilir. İstanbul projenize özel kesin fiyat için teklif alınız.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KULLANIM ALANLARI
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Nerede Kullanılır?</span>
            <h2 className="text-4xl font-black mt-3 mb-4">İstanbul Vinç Kiralama Kullanım Alanları</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              İnşaattan enerjiye, limanlardan telekomünikasyona — İstanbul&apos;da vinç gereken her yerde yanınızdayız.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {kullanımAlanlari.map((k) => (
              <div
                key={k.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/30 transition group"
              >
                <div className="text-4xl mb-4">{k.icon}</div>
                <h4 className="text-white font-black mb-2 group-hover:text-yellow-400 transition">{k.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SÜREÇ
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Nasıl Çalışır?</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">6 Adımda İstanbul Vinç Kiralama</h2>
            <p className="text-gray-500 text-lg">Telefon etmekten sahaya teslimata, her adım kolay ve şeffaf.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {adimlar.map((a, i) => (
              <div key={a.no} className="text-center relative">
                {i < adimlar.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-yellow-400/40 to-yellow-400/10" />
                )}
                <div className="w-16 h-16 bg-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 relative z-10">
                  {a.icon}
                </div>
                <div className="text-yellow-500 text-xs font-black tracking-widest mb-2">{a.no}</div>
                <h4 className="text-gray-900 font-black text-sm mb-2">{a.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="tel:05323039089"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-5 rounded-2xl text-lg transition shadow-lg shadow-yellow-400/20"
            >
              📞 Hemen Başlayın — 0532 303 90 89
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NEDEN BİZ
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div>
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Neden Biz?</span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                İstanbul&apos;un<br />Tercih Ettiği<br />Vinç Kiralama Firması
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                İstanbul&apos;da 25 yılı aşkın deneyim, geniş ve bakımlı filomuz, sertifikalı
                operatörlerimiz ve 7/24 destek hattımızla İstanbul vinç kiralama sektöründe fark yaratıyoruz.
              </p>
              <a
                href="tel:05323039089"
                className="inline-block bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-black px-6 py-4 rounded-xl transition"
              >
                Hemen Arayın
              </a>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {neden.map((n) => (
                <div
                  key={n.title}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-yellow-300 hover:shadow-md transition group"
                >
                  <div className="text-3xl flex-shrink-0">{n.icon}</div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-1 group-hover:text-yellow-600 transition">{n.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SSS
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">SSS</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">İstanbul Vinç Kiralama Sık Sorulan Sorular</h2>
            <p className="text-gray-500 text-lg">İstanbul vinç kiralama hakkında en çok merak edilenler.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {sss.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-6 hover:border-yellow-300 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-black text-sm flex-shrink-0 mt-0.5">
                    S{i + 1}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 mb-2">{item.s}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.c}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-yellow-400 rounded-3xl text-center">
            <div className="text-2xl font-black text-gray-900 mb-2">İstanbul vinç kiralama hakkında başka sorunuz mu var?</div>
            <p className="text-gray-800 mb-6">Uzmanlarımız 7/24 hatta, hemen yanıt alın.</p>
            <a
              href="tel:05323039089"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl transition"
            >
              📞 0532 303 90 89 — Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          İLÇELER — AVRUPA + ANADOLU
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-950 text-white" id="ilceler">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Hizmet Bölgeleri</span>
            <h2 className="text-4xl font-black mt-3 mb-4">İstanbul Vinç Kiralama — 39 İlçede Hizmet</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Bulunduğunuz ilçeye tıklayarak bölgeye özel İstanbul vinç kiralama hizmet sayfasına ulaşın.
            </p>
          </div>

          {/* Dekoratif harita */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-14 p-10 text-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 50%, rgba(250,204,21,0.5) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(59,130,246,0.4) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-7xl mb-4">🗺️</div>
              <div className="text-white text-2xl font-black mb-2">İstanbul — Avrupa + Anadolu Yakası</div>
              <div className="text-gray-400">Boğazın her iki yakasında, tüm İstanbul&apos;da aynı gün vinç kiralama hizmeti</div>
            </div>
          </div>

          {/* Avrupa Yakası */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/10" />
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
                <span>🌉</span>
                <span className="text-white font-bold text-sm">Avrupa Yakası</span>
                <span className="text-gray-500 text-xs">({ilceler.avrupa.length} ilçe)</span>
              </div>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
              {ilceler.avrupa.map((ilce) => (
                <Link
                  key={ilce.slug}
                  href={`/${ilce.slug}-vinc-kiralama`}
                  className="group bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:bg-yellow-400 hover:border-yellow-400 transition"
                >
                  <div className="text-xl mb-1">{ilce.emoji}</div>
                  <div className="text-white text-xs font-bold group-hover:text-black leading-tight">{ilce.ad}</div>
                  <div className="text-gray-600 text-[10px] group-hover:text-gray-900 mt-0.5">Vinç Kiralama</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Anadolu Yakası */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/10" />
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
                <span>🌉</span>
                <span className="text-white font-bold text-sm">Anadolu Yakası</span>
                <span className="text-gray-500 text-xs">({ilceler.anadolu.length} ilçe)</span>
              </div>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
              {ilceler.anadolu.map((ilce) => (
                <Link
                  key={ilce.slug}
                  href={`/${ilce.slug}-vinc-kiralama`}
                  className="group bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:bg-yellow-400 hover:border-yellow-400 transition"
                >
                  <div className="text-xl mb-1">{ilce.emoji}</div>
                  <div className="text-white text-xs font-bold group-hover:text-black leading-tight">{ilce.ad}</div>
                  <div className="text-gray-600 text-[10px] group-hover:text-gray-900 mt-0.5">Vinç Kiralama</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DİĞER HİZMETLER
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Diğer Hizmetler</span>
            <h2 className="text-3xl font-black text-gray-900 mt-3">İstanbul Vinç Kiralama ile Birlikte</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "👷", title: "Operatörlü Hizmet", desc: "Sertifikalı operatör ile tam hizmet paketi.", href: "/operatorlu-vinc-hizmeti", renk: "#10B981" },
              { icon: "🔧", title: "Bakım & Onarım", desc: "Vinci arızalandığında saha servisi.", href: "/vinc-bakim-ve-onarim", renk: "#3B82F6" },
              { icon: "🚨", title: "Acil Hizmet", desc: "7/24 acil vinç ihtiyaçlarınız için.", href: "/vinc-acil-durum-hizmetleri", renk: "#EF4444" },
              { icon: "🚛", title: "Taşıma & Lojistik", desc: "Vinç nakliye ve şantiye kurulumu.", href: "/vinc-tasima-ve-lojistik", renk: "#14B8A6" },
            ].map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-md transition"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: h.renk + "20" }}
                >
                  {h.icon}
                </div>
                <h4 className="font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition">{h.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{h.desc}</p>
                <span className="text-sm font-bold" style={{ color: h.renk }}>İncele →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SON CTA
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <div className="text-4xl font-black text-gray-900 mb-3">
              İstanbul&apos;da kiralık vinç ihtiyacınız mı var?
            </div>
            <div className="text-gray-800 text-lg">
              Projenizi anlatın, İstanbul&apos;un doğru vinci hemen belirleyelim.
            </div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-black px-10 py-5 rounded-2xl transition text-lg"
            >
              📞 Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-10 py-5 rounded-2xl transition text-lg"
            >
              Teklif Al →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
