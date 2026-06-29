import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İstanbul Vinç Kiralama | 7/24 Operatörlü, Hızlı ve Güvenilir Hizmet",
  description:
    "İstanbul'un 39 ilçesinde profesyonel vinç kiralama hizmeti. Mobil vinç, sepetli vinç, hiyap ve manlift kiralama. Sertifikalı operatörler, 7/24 hizmet: 0532 303 90 89",
};

const vincTurleri = [
  {
    icon: "🏗️",
    title: "Mobil Vinç Kiralama",
    desc: "5 tondan 500 tona kadar geniş kapasite yelpazesiyle inşaat, sanayi ve lojistik projelerine çözüm.",
    href: "/mobil-vinc-kiralama",
    ozellikler: ["5T – 500T kapasite", "Hızlı mobilizasyon", "Operatörlü"],
  },
  {
    icon: "🚛",
    title: "Sepetli Vinç Kiralama",
    desc: "10 metreden 55 metreye teleskopik ve eklemli bom seçenekleriyle yüksekte güvenli çalışma.",
    href: "/sepetli-vinc-kiralama",
    ozellikler: ["10m – 55m erişim", "İzoleli sepet", "Dar alana uygun"],
  },
  {
    icon: "🚚",
    title: "Hiyap Vinç Kiralama",
    desc: "Kamyon üstü hiyap vinclerle konteyner taşıma, malzeme indirme ve yükleme operasyonları.",
    href: "/hiyap-vinc-kiralama",
    ozellikler: ["Konteyner taşıma", "Yükleme/boşaltma", "Şehir içi uygun"],
  },
  {
    icon: "🔧",
    title: "Kule Vinç Kiralama",
    desc: "Şantiye kurulumundan söküme kadar komple kule vinç hizmetleri. Uzun vadeli projeler için avantajlı.",
    href: "/kule-vinc-kiralama",
    ozellikler: ["Şantiye kurulumu", "Uzun vadeli", "Yüksek kapasite"],
  },
  {
    icon: "🦾",
    title: "Manlift & Platform Kiralama",
    desc: "Makaslı ve eklemli platformlarla iç mekan, cephe ve endüstriyel bakım çalışmaları.",
    href: "/manlift-kiralama",
    ozellikler: ["İç mekan uygun", "Düşük zemin baskısı", "Elektrikli model"],
  },
  {
    icon: "⚙️",
    title: "Forklift Kiralama",
    desc: "Depo içi taşıma ve lojistik operasyonları için LPG, elektrikli ve dizel forklift seçenekleri.",
    href: "/forklift-kiralama",
    ozellikler: ["LPG / Elektrikli", "Depo içi", "Çeşitli kapasite"],
  },
];

const fiyatTablosu = [
  { tur: "Sepetli Vinç (18m)", saatlik: "1.000 TL", gunluk: "6.500 TL", aylik: "95.000 TL" },
  { tur: "Sepetli Vinç (35m)", saatlik: "1.500 TL", gunluk: "10.000 TL", aylik: "140.000 TL" },
  { tur: "Mobil Vinç (50T)", saatlik: "2.000 TL", gunluk: "14.000 TL", aylik: "Teklif" },
  { tur: "Mobil Vinç (200T)", saatlik: "4.500 TL", gunluk: "30.000 TL", aylik: "Teklif" },
  { tur: "Hiyap Vinç", saatlik: "800 TL", gunluk: "5.000 TL", aylik: "70.000 TL" },
  { tur: "Kule Vinç", saatlik: "—", gunluk: "Teklif", aylik: "Teklif" },
  { tur: "Manlift / Makaslı", saatlik: "600 TL", gunluk: "3.500 TL", aylik: "50.000 TL" },
  { tur: "Operatör Hizmeti", saatlik: "400 TL", gunluk: "1.800 TL", aylik: "Teklif" },
];

const avrupaIlceleri = [
  { ad: "Arnavutköy", href: "/arnavutkoy-vinc-kiralama", desc: "Yeni gelişim bölgelerinde inşaat ve lojistik vinç desteği." },
  { ad: "Avcılar", href: "/avcilar-vinc-kiralama", desc: "E-5 aksı boyunca hızlı mobilizasyonla vinç kiralama." },
  { ad: "Bağcılar", href: "/bagcilar-vinc-kiralama", desc: "Yoğun sanayi ve ticaret bölgesine özel vinç çözümleri." },
  { ad: "Bahçelievler", href: "/bahcelievler-vinc-kiralama", desc: "Konut ve ticari yapı çalışmaları için profesyonel vinç." },
  { ad: "Bakırköy", href: "/bakirkoy-vinc-kiralama", desc: "Dar alanlara uygun kompakt vinç ve platform kiralama." },
  { ad: "Başakşehir", href: "/basaksehir-vinc-kiralama", desc: "Büyük ölçekli konut projeleri ve OSB vinç hizmetleri." },
  { ad: "Bayrampaşa", href: "/bayrampasa-vinc-kiralama", desc: "Sanayi ve depolama tesisleri için hiyap ve mobil vinç." },
  { ad: "Beşiktaş", href: "/besiktas-vinc-kiralama", desc: "Tarihi ve yoğun kentsel dokuda özel vinç çözümleri." },
  { ad: "Beylikdüzü", href: "/beylikduzu-vinc-kiralama", desc: "Hızla büyüyen konut bölgesine 7/24 vinç desteği." },
  { ad: "Beyoğlu", href: "/beyoglu-vinc-kiralama", desc: "Tarihi yapı restorasyonu ve cephe çalışmaları için vinç." },
  { ad: "Büyükçekmece", href: "/buyukcekekmece-vinc-kiralama", desc: "Sahil ve sanayi bölgelerinde esnek vinç kiralama." },
  { ad: "Çatalca", href: "/catalca-vinc-kiralama", desc: "Geniş arazi ve tarım tesislerine uygun vinç hizmetleri." },
  { ad: "Esenler", href: "/esenler-vinc-kiralama", desc: "Yoğun kentsel dönüşüm projelerine vinç ve platform desteği." },
  { ad: "Esenyurt", href: "/esenyurt-vinc-kiralama", desc: "İstanbul'un en büyük konut bölgesinde kapsamlı vinç hizmetleri." },
  { ad: "Eyüpsultan", href: "/eyupsultan-vinc-kiralama", desc: "Tarihi doku ve yeni gelişim alanlarında vinç çözümleri." },
  { ad: "Fatih", href: "/fatih-vinc-kiralama", desc: "Tarihi yarımadada hassas ve deneyimli vinç operasyonları." },
  { ad: "Gaziosmanpaşa", href: "/gaziosmanpasa-vinc-kiralama", desc: "Kentsel dönüşüm ve inşaat projelerine vinç desteği." },
  { ad: "Güngören", href: "/gungoren-vinc-kiralama", desc: "Küçük sanayi ve konut alanlarına uygun vinç kiralama." },
  { ad: "Kağıthane", href: "/kagithane-vinc-kiralama", desc: "Ofis ve rezidans projelerinde hızlı vinç hizmetleri." },
  { ad: "Küçükçekmece", href: "/kucukcekekmece-vinc-kiralama", desc: "OSB ve konut bölgelerine 7/24 vinç ve hiyap hizmetleri." },
  { ad: "Sarıyer", href: "/sariyer-vinc-kiralama", desc: "Boğaz hattı ve lüks konut projelerinde özel vinç çözümleri." },
  { ad: "Silivri", href: "/silivri-vinc-kiralama", desc: "Büyük sanayi ve tarım tesisleri için mobil vinç kiralama." },
  { ad: "Sultangazi", href: "/sultangazi-vinc-kiralama", desc: "Konut ve ticari yapı projelerine hızlı vinç desteği." },
  { ad: "Şişli", href: "/sisli-vinc-kiralama", desc: "Ticari merkezde cephe, tabela ve bakım işleri için vinç." },
  { ad: "Zeytinburnu", href: "/zeytinburnu-vinc-kiralama", desc: "Sanayi dönüşümü ve konut projelerine vinç ve platform hizmetleri." },
];

const anadoluIlceleri = [
  { ad: "Adalar", href: "/adalar-vinc-kiralama", desc: "Ada koşullarına uygun kompakt ve hafif vinç çözümleri." },
  { ad: "Ataşehir", href: "/atasehir-vinc-kiralama", desc: "Finans merkezi ve rezidans projelerinde profesyonel vinç." },
  { ad: "Beykoz", href: "/beykoz-vinc-kiralama", desc: "Boğaz kıyısı ve ormanlık alanda özel vinç operasyonları." },
  { ad: "Çekmeköy", href: "/cekmekoy-vinc-kiralama", desc: "Yeni gelişim bölgelerinde inşaat vinç ve platform hizmetleri." },
  { ad: "Kadıköy", href: "/kadikoy-vinc-kiralama", desc: "Yoğun kentsel dokuda hassas ve hızlı vinç kiralama." },
  { ad: "Kartal", href: "/kartal-vinc-kiralama", desc: "Sanayi ve konut dönüşüm projelerine kapsamlı vinç desteği." },
  { ad: "Maltepe", href: "/maltepe-vinc-kiralama", desc: "Sahil projelerinde ve konut alanlarında güvenli vinç hizmetleri." },
  { ad: "Pendik", href: "/pendik-vinc-kiralama", desc: "Havalimanı bölgesi ve tersane yakınında 7/24 vinç kiralama." },
  { ad: "Sancaktepe", href: "/sancaktepe-vinc-kiralama", desc: "OSB ve sanayi tesislerine ağır mobil vinç hizmetleri." },
  { ad: "Sultanbeyli", href: "/sultanbeyli-vinc-kiralama", desc: "Konut ve kentsel dönüşüm projelerine hızlı vinç desteği." },
  { ad: "Şile", href: "/sile-vinc-kiralama", desc: "Geniş arazili projeler için esnek mobil vinç kiralama." },
  { ad: "Tuzla", href: "/tuzla-vinc-kiralama", desc: "Tersane, liman ve sanayi tesisleri için ağır vinç çözümleri." },
  { ad: "Ümraniye", href: "/umraniye-vinc-kiralama", desc: "Teknoloji vadisi ve ofis projelerinde güvenilir vinç hizmetleri." },
  { ad: "Üsküdar", href: "/uskudar-vinc-kiralama", desc: "Tarihi yapı ve konut projelerinde deneyimli vinç operasyonları." },
];

const avantajlar = [
  { icon: "🏅", title: "Sertifikalı Operatörler", desc: "Tüm operatörlerimiz TS EN 13000 belgeli ve periyodik eğitim sertifikalıdır." },
  { icon: "🛡️", title: "Tam Sigorta Kapsamı", desc: "Ekipman ve sorumluluk sigortası ile iş yerinde tam güvence sağlanır." },
  { icon: "⚡", title: "30–60 Dk. Mobilizasyon", desc: "İstanbul genelinde acil çağrılarda en kısa sürede sahadayız." },
  { icon: "🔍", title: "Ücretsiz Saha Analizi", desc: "Projenize başlamadan önce uzman ekibimiz ücretsiz keşif yapar." },
  { icon: "📋", title: "Şeffaf Sözleşme", desc: "Net fiyatlar, açık kapsam ve gizli maliyet olmayan kiralama sözleşmesi." },
  { icon: "🔧", title: "7/24 Teknik Destek", desc: "Saha operasyonu süresince teknik ekibimiz her an ulaşılabilir." },
];

const sss = [
  {
    soru: "İstanbul'da vinç kiralama fiyatları nasıl belirlenir?",
    cevap: "Vinç tipi ve kapasitesi, kiralama süresi (saatlik/günlük/aylık), çalışma lokasyonu, nakliye mesafesi ve operatör hizmeti gerekliliği fiyatı etkileyen başlıca faktörlerdir. Kesin fiyat için ücretsiz keşif hizmetimizden yararlanabilirsiniz.",
  },
  {
    soru: "Operatörlü vinç kiralama nedir, farkı ne?",
    cevap: "Operatörlü kiralama; sertifikalı ve deneyimli bir operatörün ekipmanı sizin adınıza kullandığı hizmettir. İş güvenliği sorumluluğu firmamızda kalır, iş verimi artar ve kaza riski minimize edilir.",
  },
  {
    soru: "İstanbul'un her ilçesine hizmet veriyor musunuz?",
    cevap: "Evet, Avrupa Yakası'ndaki 25 ilçe ve Anadolu Yakası'ndaki 14 ilçe dahil İstanbul'un tüm 39 ilçesinde aktif kadromuzla hizmet sunuyoruz. Acil çağrılarda 30–60 dakika içinde sahada oluyoruz.",
  },
  {
    soru: "Hangi belge ve sigortalar sunuluyor?",
    cevap: "Tüm ekipmanlarımız periyodik bakım ve TS EN standartlarına uygun sertifikalara sahiptir. Kiralama kapsamında ekipman sigortası ve üçüncü şahıs sorumluluk sigortası sağlanmaktadır.",
  },
  {
    soru: "Minimum kiralama süresi ne kadardır?",
    cevap: "Saatlik, yarım günlük, günlük, haftalık ve aylık kiralama seçenekleri mevcuttur. Minimum süre ekipman tipine göre değişmekle birlikte çoğu model için 4 saatlik kiralama yapılabilmektedir.",
  },
];

export default function IstanbulVincKiralamaPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏗️ İstanbul Vinç Kiralama Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              İstanbul Vinç Kiralama<br />
              <span className="text-yellow-400">7/24 Operatörlü Hizmet</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un 39 ilçesinde mobil vinç, sepetli vinç, hiyap ve manlift kiralama.
              Sertifikalı operatörler, sigortalı ekipmanlar ve 30–60 dakika mobilizasyon garantisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#vinc-turleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Vinç Türlerini İncele ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { sayi: "39", birim: "İlçe", acik: "Tüm İstanbul" },
              { sayi: "500T", birim: "Kapasite", acik: "Maksimum yük" },
              { sayi: "55m", birim: "Erişim", acik: "Sepetli vinçte" },
              { sayi: "7/24", birim: "Hizmet", acik: "Acil çağrı hattı" },
            ].map((s) => (
              <div key={s.birim}>
                <div className="text-3xl font-black text-yellow-400">{s.sayi}</div>
                <div className="text-white font-bold">{s.birim}</div>
                <div className="text-gray-400 text-sm">{s.acik}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2-1: Nasıl Çalışır? ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Süreç</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İstanbul&apos;da Kiralık Vinç Hizmeti Nasıl Çalışır?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Talebi aldığımız andan ekipman sahadayken tamamlanana kadar her adımı biz yönetiyoruz.
              Siz yalnızca projenize odaklanın.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { no: "01", title: "Talep & Keşif", desc: "Bizi arayın veya form doldurun. Uzman ekibimiz sahayı ücretsiz değerlendirir, doğru ekipmanı belirler." },
              { no: "02", title: "Teklif & Sözleşme", desc: "Proje kapsamına göre net fiyat teklifi sunulur. Gizli maliyet olmayan şeffaf sözleşme imzalanır." },
              { no: "03", title: "Mobilizasyon", desc: "Acil çağrılarda 30–60 dakika, standart planlamada mutabık kalınan saatte ekipman sahada olur." },
              { no: "04", title: "Operasyon", desc: "Sertifikalı operatörümüz güvenlik prosedürlerine uyarak çalışmayı yürütür, alanı denetler." },
              { no: "05", title: "Teknik Destek", desc: "Operasyon süresince 7/24 teknik destek hattımız aktiftir. Herhangi bir sorunla anında ilgilenilir." },
              { no: "06", title: "Teslim & Kapanış", desc: "İş tamamlandığında ekipman teslim alınır, alan temizlenir ve iş kapanış tutanağı hazırlanır." },
            ].map((a) => (
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

      {/* ── H2-2: Vinç Türleri ── */}
      <section id="vinc-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipman</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç, Sepetli Vinç ve Hiyap Kiralama Seçenekleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her proje farklıdır. Çalışma yüksekliğinize, zemin koşulunuza ve taşıma kapasitenize
              göre en uygun ekipmanı birlikte belirleyelim.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vincTurleri.map((v) => (
              <Link
                key={v.title}
                href={v.href}
                className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition block"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-gray-900 font-bold text-xl mb-2 group-hover:text-yellow-600 transition">{v.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{v.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {v.ozellikler.map((o) => (
                    <span key={o} className="bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-200">
                      {o}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* H3 Alt Başlıklar */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🔭 Teleskopik ve Eklemli Vinç Modelleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Teleskopik bom vincler geniş açık alanlarda doğrusal erişim sağlarken, eklemli (articulated)
                modeller engellerin üzerinden atlayarak dar çalışma bölgelerine ulaşır. İstanbul&apos;un yoğun
                kentsel dokusunda her ikisine de ihtiyaç duyulabilir; uzmanlarımız projenize en uygun
                konfigürasyonu ücretsiz keşifte belirler.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 text-lg mb-2">📏 10 Metreden 55 Metreye Sepetli Vinç Seçenekleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Filomuzda 10m kompakt izcilerden 55m teleskopik araç üstü modellere kadar geniş bir
                yükseklik aralığı mevcuttur. Cephe boyama, çatı onarımı, aydınlatma bakımı ve ağaç
                budama gibi farklı iş türleri için doğru yüksekliği ve bom tipini belirliyoruz.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 text-lg mb-2">⚖️ 5 Tondan 500 Tona Mobil Vinç Kapasiteleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Küçük ölçekli malzeme kaldırma operasyonlarından ağır endüstriyel ekipman montajına
                kadar her kapasite için doğru mobil vinç filomuzda yer alıyor. Kaldırma kapasitesi
                hesabında yük ağırlığına ek olarak çalışma yarıçapı ve bom açısı da değerlendirilir.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🏙️ İstanbul Şehir İçi Dar Alanlarda Vinç Kullanımı</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tarihi yarımada, Beyoğlu ve Kadıköy gibi yoğun ilçelerde sokak genişlikleri ve çevre
                yapılar önemli kısıtlar oluşturur. İzci sepetli vinçler ve kompakt mobil vinçler bu
                alanlara özel çözümler sunar; trafik koordinasyonu ve izin süreçleri için de destek sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2-3 & H2-4: Yakalar ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Avrupa Yakası</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">İstanbul Avrupa Yakası Vinç Kiralama Hizmetleri</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Esenyurt&apos;tan Sarıyer&apos;e, Silivri&apos;den Fatih&apos;e Avrupa Yakası&apos;nın 25 ilçesinde aktif ekiplerimizle
              hizmet sunuyoruz. TEM ve E-5 aksındaki stratejik konumumuz sayesinde herhangi bir noktaya
              en kısa sürede ulaşıyor, büyük ölçekli inşaat projelerinden acil tek operasyonlara kadar
              her ihtiyacı karşılıyoruz.
            </p>
            <div className="space-y-2">
              {[
                "Kentsel dönüşüm projelerinde kule ve mobil vinç desteği",
                "OSB ve sanayi bölgelerinde ağır kaldırma operasyonları",
                "Tarihi yapı restorasyon ve cephe çalışmaları",
                "Konut projelerinde sepetli vinç ve manlift kiralama",
              ].map((m) => (
                <div key={m} className="flex gap-3 items-start bg-gray-50 rounded-xl p-3">
                  <span className="text-yellow-600 font-bold shrink-0">●</span>
                  <p className="text-gray-700 text-sm">{m}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Anadolu Yakası</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">İstanbul Anadolu Yakası Vinç Kiralama Hizmetleri</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Kartal&apos;dan Beykoz&apos;a, Tuzla&apos;dan Üsküdar&apos;a Anadolu Yakası&apos;nın 14 ilçesinde kesintisiz hizmet.
              Pendik ve Tuzla&apos;daki tersane ve liman projelerinden Ataşehir&apos;deki ofis kulelerine, Şile&apos;nin
              geniş arazilerinden Kadıköy&apos;ün yoğun kentsel dokusuna kadar her projeye uygun ekipman
              ve operatörle yanınızdayız.
            </p>
            <div className="space-y-2">
              {[
                "Tersane ve liman projelerinde ağır mobil vinç hizmetleri",
                "Finans ve teknoloji merkezi projelerine kule vinç desteği",
                "Sahil projeleri için özel vinç ve platform çözümleri",
                "OSB ve lojistik merkezlerde hiyap ve forklift kiralama",
              ].map((m) => (
                <div key={m} className="flex gap-3 items-start bg-gray-50 rounded-xl p-3">
                  <span className="text-yellow-600 font-bold shrink-0">●</span>
                  <p className="text-gray-700 text-sm">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2-5: Fiyatlar ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Saatlik, Günlük ve Aylık Vinç Kiralama Fiyatları</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Aşağıdaki fiyatlar 2026 yılı referans ücretleri olup nakliye, ek süre ve özel koşullar
              fiyatı etkileyebilir. Kesin teklif için bizi arayın.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-bold rounded-tl-2xl">Vinç Türü</th>
                  <th className="text-center px-6 py-4 font-bold">Saatlik</th>
                  <th className="text-center px-6 py-4 font-bold">Günlük</th>
                  <th className="text-center px-6 py-4 font-bold rounded-tr-2xl">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((r, i) => (
                  <tr key={r.tur} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{r.tur}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{r.saatlik}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{r.gunluk}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{r.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* H3: Ek ekipmanlar */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🔩 Kule Vinç Kiralama ve Şantiye Kurulumu</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Uzun vadeli şantiyeler için kule vinç kurulumu, operasyon ve demontaj hizmetinin tamamı
                tek sözleşmeyle sunulur. Kurulum süresi ve maliyeti vinç tipine ve şantiye koşullarına göre ayrıca planlanır.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏭 Forklift Kiralama ve Depo İçi Taşıma Çözümleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                1.5T&apos;dan 10T&apos;a LPG, elektrikli ve dizel forklift seçenekleriyle depo, üretim tesisi ve
                açık saha operasyonlarına hızlı çözüm. Günlük ve aylık kiralama planları mevcuttur.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🛗 Manlift ve Makaslı Platform Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Elektrikli makaslı platformlar iç mekanda sessiz ve düşük zemin basıncıyla çalışır.
                Eklemli manliftler ise dış cephe ve yüksek tavanlı endüstriyel alanlar için idealdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2-6: Operatörlü Avantajlar ── */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Neden Operatörlü?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Operatörlü Vinç Kiralama Avantajları</h2>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              Operatörsüz kiralama ilk bakışta daha ucuz görünse de iş güvenliği sorumluluğu,
              verim kaybı ve olası hasar maliyetleri göz önüne alındığında operatörlü seçenek
              çok daha avantajlıdır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantajlar.map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-white rounded-2xl border border-yellow-200">
                <div className="text-3xl shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2-7: Fiyatı Etkileyen Faktörler ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Bilgi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İstanbul&apos;da Vinç Kiralamayı Etkileyen Faktörler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              "Vinç tipi ve kaldırma kapasitesi",
              "Çalışma yüksekliği ve bom uzunluğu",
              "Kiralama süresi (saatlik / günlük / aylık)",
              "İstanbul içi nakliye mesafesi ve trafik koşulları",
              "Operatör hizmeti gerekliliği",
              "Zemin ve erişim koşulları (dar sokak, eğimli arazi vb.)",
              "Sezon ve talep yoğunluğu",
              "Sigorta kapsamı ve sözleşme süresi",
            ].map((f) => (
              <div key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-yellow-600 font-bold text-lg shrink-0">●</span>
                <p className="text-gray-700 text-sm">{f}</p>
              </div>
            ))}
          </div>

          {/* H3 çift blok */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🏷️ Dış Cephe, Tabela Montajı ve Bakım İşleri İçin Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Bina dış cephesi boyama, ısı yalıtımı, tabela ve klima montajı ile çatı bakım
                çalışmalarında sepetli vinç veya manlift kullanımı hem güvenliği artırır hem de
                iskele kurulum maliyetini ortadan kaldırır. Saatlik kiralama seçeneğiyle küçük
                işler için ekonomik çözüm sunulur.
              </p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🚢 Konteyner Taşımacılığı ve Hiyap Vinç Hizmetleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hiyap vincler kamyon şasisi üzerine entegre edilerek yükleme ve boşaltma işlemlerini
                tek araçla çözer. İstanbul limanları, lojistik depolar ve dar şantiye girişlerinde
                konteyner, makine ve ağır malzeme taşımacılığında tercih edilen en esnek çözümdür.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2-8: Sertifika & Sigorta ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Güvence</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Sertifikalı ve Sigortalı Vinç Kiralama Hizmeti</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                İş güvenliği mevzuatı kapsamında vinç operasyonları sertifikalı personel ve sigortalı
                ekipman zorunluluğu içerir. Tüm süreçlerimiz TS EN standartlarına ve İSG mevzuatına
                tam uyumludur.
              </p>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-3">📋 İstanbul&apos;da Vinç Kiralama Sözleşmesi ve Sigorta Kapsamı</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Kiralama sözleşmemiz; ekipman teslim ve iade koşullarını, operasyon sınırlarını,
                  sorumluluk paylaşımını ve sigorta kapsamını açıkça belirtir. Üçüncü şahıs sorumluluk
                  sigortası ve ekipman hasarı sigortası standart olarak dahildir. Proje özeline göre
                  ek teminat seçenekleri de sunulabilir.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "TS EN 13000 standardına uygun vinç operatörü belgeleri",
                "Periyodik bakım ve muayene sertifikaları güncel tutulmaktadır",
                "Ekipman ve üçüncü şahıs sorumluluk sigortası standart dahildir",
                "Hava koşulları rüzgar hız limitlerinde çalışma durdurulur",
                "Kaldırma kapasitesi hiçbir koşulda aşılmamaktadır",
                "Çalışma alanında emniyet şeridi ve uyarı levhaları zorunlu tutulur",
                "Yüksekte çalışma ve kişisel koruyucu ekipman standartlarına uyum",
              ].map((k) => (
                <div key={k} className="flex gap-3 items-start bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                  <p className="text-gray-700 text-sm">{k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2-9: Sektörler ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İnşaat, Sanayi ve Lojistik Projelerinde Vinç Çözümleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Farklı sektörlerin farklı ihtiyaçları vardır. Deneyimli ekibimiz her sektöre
              özel operasyon planı hazırlar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏗️",
                title: "İnşaat Sektörü",
                desc: "Temel kazıdan çatı montajına; kolon demiri bağlamadan prefabrik panel yerleştirmeye kadar her inşaat aşamasında mobil ve kule vinç hizmetleri sunuyoruz. Şantiye kurulumundan ekipman demobasına komple proje yönetimi.",
                h3: "Ücretsiz Keşif ve Saha Analizi Hizmeti",
                h3desc: "Şantiyenize gelmeden önce zemin etüdü, erişim analizi ve vinç konumlama planı hazırlanır. Bu ücretsiz hizmet operasyon güvenliğini ve verimliliğini doğrudan artırır.",
              },
              {
                icon: "🏭",
                title: "Sanayi ve Üretim",
                desc: "Fabrika içi makine yerleşim değişikliği, üretim hattı kurulumu ve ağır ekipman bakım-onarım operasyonlarında yüksek kapasiteli mobil vinçlerle destek. Planlı ve acil müdahale seçenekleri mevcuttur.",
                h3: "30–60 Dakikada Mobilizasyon: İstanbul Hız Garantisi",
                h3desc: "İstanbul genelindeki stratejik ekip konumlandırmamız sayesinde acil çağrılarda 30 dakika, standart taleplerde ise sözleşmede belirlenen sürede sahadayız. Üretim durması maliyetini minimize ediyoruz.",
              },
              {
                icon: "🚛",
                title: "Lojistik ve Depolama",
                desc: "Depo reyonu kurulumu, konteyner istifleme, ağır palet kaldırma ve taşıma operasyonlarında forklift, hiyap ve makaslı platform kombinasyonlarıyla entegre lojistik çözümler.",
                h3: null,
                h3desc: null,
              },
              {
                icon: "⚡",
                title: "Enerji ve Altyapı",
                desc: "Elektrik direk ve hat çalışmaları, baz istasyonu kurulumu, güneş paneli montajı ve rüzgar türbini bakımında izoleli sepetli vinçler ve yüksek erişimli platformlarla güvenli operasyonlar.",
                h3: null,
                h3desc: null,
              },
            ].map((s) => (
              <div key={s.title} className="p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                {s.h3 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">💡 {s.h3}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.h3desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2-10: 39 İlçe ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Hizmet Bölgeleri</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İstanbul&apos;un 39 İlçesinde Vinç Kiralama Hizmetleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Bulunduğunuz ilçeye özel fiyat ve ekipman bilgisi için ilçenizi seçin.
            </p>
          </div>

          {/* Avrupa Yakası */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌉</span>
              <h3 className="text-xl font-black text-gray-900">Avrupa Yakası — 25 İlçe</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {avrupaIlceleri.map((ilce) => (
                <Link
                  key={ilce.href}
                  href={ilce.href}
                  className="group flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-md transition"
                >
                  <span className="text-yellow-500 font-bold shrink-0 mt-0.5">📍</span>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-yellow-600 transition text-sm">
                      {ilce.ad} Vinç Kiralama
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{ilce.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Anadolu Yakası */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌁</span>
              <h3 className="text-xl font-black text-gray-900">Anadolu Yakası — 14 İlçe</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {anadoluIlceleri.map((ilce) => (
                <Link
                  key={ilce.href}
                  href={ilce.href}
                  className="group flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-md transition"
                >
                  <span className="text-yellow-500 font-bold shrink-0 mt-0.5">📍</span>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-yellow-600 transition text-sm">
                      {ilce.ad} Vinç Kiralama
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{ilce.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İstanbul Vinç Kiralama Hakkında Sıkça Sorulan Sorular</h2>
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

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">İstanbul&apos;da Vinç Kiralamanın En Hızlı Yolu</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, projenize en uygun vinci birlikte belirleyelim.
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
