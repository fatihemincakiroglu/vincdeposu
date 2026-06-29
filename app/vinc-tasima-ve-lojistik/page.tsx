import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vinç Taşıma ve Lojistik Hizmetleri | Ağır Yük, Güvenli Teslimat",
  description:
    "Profesyonel vinçli taşımacılık ve lojistik hizmetleri. Ağır yük, makine taşıma, konteyner operasyonları ve proje kargo. Türkiye geneli hizmet: 0532 303 90 89",
};

const hizmetKategorileri = [
  {
    icon: "🏗️",
    title: "Ağır Yük ve Standart Dışı Kargo Taşımacılığı",
    desc: "Standart taşıma araçlarıyla mümkün olmayan ağır, uzun veya geniş yüklerin özel ekipmanla güvenli taşınması.",
    kapasite: "50 tona kadar",
    href: "/agir-yuk-tasimaciligi",
    ozellikler: ["Standart dışı kargo", "Özel rota", "Eskort desteği"],
  },
  {
    icon: "🏭",
    title: "Fabrika ve Tesis Taşıma Hizmetleri",
    desc: "Üretim hatları, ağır sanayi ekipmanları ve tesis içi makine gruplarının söküm, taşıma ve kurulum operasyonları.",
    kapasite: "Proje bazlı",
    href: "/fabrika-tasima",
    ozellikler: ["Söküm & kurulum", "Üretim hattı", "Tesis içi"],
  },
  {
    icon: "⚓",
    title: "Konteyner Yükleme ve Boşaltma Operasyonları",
    desc: "Liman, depo ve tesis sahalarında konteyner yükleme, boşaltma ve istifleme operasyonları.",
    kapasite: "20-40 ft konteyner",
    href: "/konteyner-operasyonlari",
    ozellikler: ["20-40 ft", "İstif operasyonu", "Liman uyumlu"],
  },
  {
    icon: "🚢",
    title: "Liman ve Deniz Taşımacılığında Vinç Hizmetleri",
    desc: "Gemi yükleme ve boşaltma, tersane içi ekipman taşıma ve liman lojistik operasyonları.",
    kapasite: "Teklif alınız",
    href: "/liman-vinc-hizmetleri",
    ozellikler: ["Gemi yükleme", "Tersane içi", "Liman lojistik"],
  },
  {
    icon: "📦",
    title: "Proje Kargo ve Özel Lojistik Çözümleri",
    desc: "Enerji santrali, köprü bileşeni ve endüstriyel tesis kurulumu gibi büyük ölçekli proje kargo operasyonları.",
    kapasite: "Teklif alınız",
    href: "/proje-kargo",
    ozellikler: ["Proje bazlı", "Rota analizi", "Çok modlu taşıma"],
  },
  {
    icon: "⚙️",
    title: "Ağır Makine Taşıma ve Montaj Hizmetleri",
    desc: "CNC tezgah, pres, jeneratör ve sanayi makinelerinin güvenli söküm, nakliye ve tekrar montaj hizmetleri.",
    kapasite: "Her kapasitede",
    href: "/makine-tasima",
    ozellikler: ["Söküm dahil", "Güvenli nakliye", "Yeniden montaj"],
  },
];

const fiyatTablosu = [
  { hizmet: "Şehir İçi Vinçli Nakliyat (günlük)", kapasite: "10 tona kadar", fiyat: "4.500 TL'den", notlar: "Operatör dahil" },
  { hizmet: "Şehirlerarası Ağır Yük Taşıma", kapasite: "25 tona kadar", fiyat: "Teklif alınız", notlar: "Rota & mesafeye göre" },
  { hizmet: "Fabrika / Tesis Taşıma", kapasite: "Proje bazlı", fiyat: "Teklif alınız", notlar: "Saha keşfi gerekli" },
  { hizmet: "Konteyner Yükleme / Boşaltma", kapasite: "20-40 ft", fiyat: "2.800 TL'den", notlar: "Adet başı" },
  { hizmet: "Hiyap Vinç ile Dar Alan Taşıma", kapasite: "5 tona kadar", fiyat: "3.200 TL'den", notlar: "Günlük" },
  { hizmet: "Operatörlü Vinç (haftalık paket)", kapasite: "Her kapasite", fiyat: "18.000 TL'den", notlar: "5 iş günü" },
  { hizmet: "Aylık Vinçli Nakliyat Paketi", kapasite: "Her kapasite", fiyat: "Teklif alınız", notlar: "Kurumsal anlaşma" },
];

const hizmetAlanlari = [
  { icon: "🏭", title: "Sanayi & Üretim", desc: "Makine grupları, üretim hattı ve ağır sanayi ekipmanı taşıma" },
  { icon: "⚡", title: "Enerji Sektörü", desc: "Rüzgar türbini, trafo ve enerji santrali ekipman lojistiği" },
  { icon: "🏗️", title: "İnşaat", desc: "Çelik kiriş, beton blok ve prefabrik eleman taşıma operasyonları" },
  { icon: "⚓", title: "Liman & Tersane", desc: "Konteyner operasyonları ve gemi yükleme/boşaltma hizmetleri" },
  { icon: "🏢", title: "Perakende & Depolama", desc: "Depo içi yük taşıma ve raf sistemi kurulum lojistiği" },
  { icon: "🌍", title: "Proje & EPC", desc: "Büyük ölçekli altyapı ve tesis projelerinde komple lojistik" },
];

const adimlar = [
  { no: "01", title: "Saha Keşfi", desc: "Taşıma güzergahı, zemin ve yük özellikleri yerinde incelenir." },
  { no: "02", title: "Proje Planı", desc: "Rota analizi, ekipman seçimi ve zaman çizelgesi hazırlanır." },
  { no: "03", title: "İzin & Koordinasyon", desc: "Gerekli taşıma izinleri ve eskort düzenlemeleri yapılır." },
  { no: "04", title: "Ekip & Ekipman", desc: "Uygun vinç ve nakliye aracı sahaya yönlendirilir." },
  { no: "05", title: "Güvenli Taşıma", desc: "Sertifikalı operatör eşliğinde yük güvenle teslim noktasına ulaştırılır." },
  { no: "06", title: "Kurulum & Rapor", desc: "Gerekirse montaj yapılır, operasyon belgesi teslim edilir." },
];

const guvenlikStandartlari = [
  "Tüm taşımalar zorunlu nakliyat sigortası kapsamında gerçekleştirilmektedir",
  "Standart dışı yükler için rota fizibilite analizi ve köprü yük hesabı yapılmaktadır",
  "Öncü araç (eskort) eşliği gerektiren taşımalarda koordinasyon ekibimizce sağlanmaktadır",
  "Operatörlerimiz ağır yük ve proje kargo sertifikasına sahiptir",
  "Gece ve hafta sonu taşımalarında özel güvenlik ve aydınlatma protokolü uygulanır",
  "Tüm yük bağlama ve sabitleme işlemleri EN 12195 standardına uygun yapılmaktadır",
];

const sss = [
  {
    soru: "Ağır yük taşımacılığı için önceden ne kadar süre gereklidir?",
    cevap: "Standart ağır yük taşımaları için genellikle 2-5 iş günü önceden planlama yeterlidir. Büyük ölçekli proje kargo ve standart dışı yükler için ise rota analizi, izin ve koordinasyon süreçleri nedeniyle 1-3 hafta öncesinden başvurmanız önerilir.",
  },
  {
    soru: "Şehirlerarası vinçli taşımacılık yapıyor musunuz?",
    cevap: "Evet, Türkiye genelinde şehirlerarası vinçli taşımacılık hizmeti sunuyoruz. Rota, mesafe ve yük özelliklerine göre fiyat teklifi hazırlanmaktadır.",
  },
  {
    soru: "Taşıma sırasında yüke zarar gelirse ne olur?",
    cevap: "Tüm taşımalarımız nakliyat sigortası kapsamındadır. Olası hasar durumunda sigorta sürecini ekibimiz yönetir ve gerekli belgeleri hazırlar.",
  },
  {
    soru: "Makine söküm ve yeniden kurulum hizmeti veriyor musunuz?",
    cevap: "Evet, makine taşıma hizmetlerimiz söküm, güvenli nakliye ve teslim noktasında yeniden kurulumu kapsamaktadır. Elektrik ve mekanik bağlantı için alt yüklenici koordinasyonu da sağlanabilir.",
  },
  {
    soru: "Rüzgar türbini ve enerji ekipmanı taşıyabiliyor musunuz?",
    cevap: "Evet, kanat, nasel ve kule gibi rüzgar türbini bileşenlerinin taşınması için özel taşıma araçları ve vinç kombinasyonlarıyla hizmet veriyoruz. Bu tür taşımalar için detaylı proje planlaması gerekmektedir.",
  },
];

const h3Bolumler = [
  {
    id: "celik-beton",
    baslik: "Çelik Kirişler ve Beton Blokların Vinçle Taşınması",
    icerik: "İnşaat projelerinde çelik kiriş, prefabrik beton panel ve hazır beton bloklar özel yük bağlama ekipmanı ve ağır taşıma araçlarıyla güvenle taşınır. Montaj noktasına hassas yerleştirme vinç operatörü tarafından gerçekleştirilir.",
    icon: "🏗️",
  },
  {
    id: "makine-soküm",
    baslik: "Sanayi Makineleri Söküm, Taşıma ve Kurulum Hizmetleri",
    icerik: "CNC tezgah, pres makinesi, enjeksiyon makinesi ve endüstriyel fırınların söküm planı hazırlanarak güvenli taşıma ve teslim noktasında yeniden kurulum sağlanır. Tüm aşamalar fotoğraflı olarak belgelenir.",
    icon: "⚙️",
  },
  {
    id: "ruzgar-turbini",
    baslik: "Rüzgar Türbini ve Enerji Ekipmanı Taşımacılığı",
    icerik: "60-80 metre uzunluğa ulaşabilen türbin kanatları, nasel ve kule bölümleri özel uzun araç kombinasyonları ve rota izinleriyle taşınır. Enerji santrali trafo ve jeneratör nakliyatı da bu kapsamda değerlendirilir.",
    icon: "🌀",
  },
  {
    id: "konteyner-liman",
    baslik: "Konteyner Vinçleriyle Liman Operasyonları",
    icerik: "20 ve 40 feet standart konteynerların liman sahasında yüklenmesi, boşaltılması ve istiflenmesi reach stacker ve mobil vinçlerle gerçekleştirilir. Liman yetkilisi ve gümrük koordinasyonu ekibimizce sağlanır.",
    icon: "⚓",
  },
  {
    id: "sehir-ici-dis",
    baslik: "Şehir İçi ve Şehirlerarası Vinçli Nakliyat",
    icerik: "İstanbul içi kısa mesafeli ağır yük taşımalarında hiyap ve mobil vinç kombinasyonu kullanılır. Şehirlerarası taşımalarda güzergah izinleri, gece taşıma planlaması ve eskort koordinasyonu sağlanır.",
    icon: "🛣️",
  },
  {
    id: "hiyap",
    baslik: "Hiyap (Hi-Up) Vinç ile Dar Alanlarda Taşıma",
    icerik: "Kamyon üstü hiyap vincin kendi yükünü kaldırıp indirme özelliği sayesinde forklift erişiminin mümkün olmadığı dar alanlarda, katmanlı depolarda ve bina içlerinde yük operasyonları kolaylıkla gerçekleştirilir.",
    icon: "🔀",
  },
  {
    id: "eskort",
    baslik: "Öncü Araç (Escort) Eşliğinde Ağır Nakliyat",
    icerik: "Karayolu taşıma mevzuatı gereği belirli boyut ve ağırlığı aşan yükler öncü araç eşliğinde taşınmalıdır. Eskort planlama, izin temini ve güzergah koordinasyonu tarafımızca yürütülür.",
    icon: "🚔",
  },
  {
    id: "depo-vinc",
    baslik: "Depolama Tesislerinde Gezer Köprülü Vinç Kullanımı",
    icerik: "Depo içi yük hareketlerinde gezer köprülü (overhead crane) vinçler raf sistemi kurulum ve söküm, ağır palet taşıma ve ürün istifleme operasyonlarında kullanılır. Sabit veya mobil sistem kurulumu için danışmanlık sağlanır.",
    icon: "🏢",
  },
  {
    id: "operatorlu",
    baslik: "Operatörlü Vinçli Taşımacılık Avantajları",
    icerik: "Sertifikalı operatör eşliğinde gerçekleştirilen vinçli taşımacılık; yük hasarı riskini minimize eder, operasyon süresini kısaltır ve iş güvenliği mevzuatına tam uyum sağlar. İşveren sorumluluğunu da ortadan kaldırır.",
    icon: "👷",
  },
  {
    id: "sigorta",
    baslik: "Sigortalı Vinç Taşımacılığı ve Güvence Kapsamı",
    icerik: "Her taşıma operasyonu CMR nakliyat sigortası veya özel proje sigortası kapsamına alınmaktadır. Yüke gelen hasar, gecikmeden kaynaklanan kayıplar ve üçüncü taraf zararlar için güvence sağlanır.",
    icon: "📋",
  },
  {
    id: "paketler",
    baslik: "Günlük, Haftalık ve Aylık Vinçli Nakliyat Paketleri",
    icerik: "Tek seferlik taşımalar için günlük kiralama, süregelen projelerde haftalık veya aylık paket anlaşmaları mevcuttur. Kurumsal müşteriler için özel fiyatlandırma ve öncelikli ekipman tahsisi sağlanır.",
    icon: "📅",
  },
  {
    id: "danismanlik",
    baslik: "Lojistik Proje Danışmanlığı ve Saha Keşfi",
    icerik: "Büyük ölçekli taşıma projelerinde operasyon öncesi saha keşfi, yük analizi, güzergah fizibilitesi ve ekipman seçimi danışmanlığı sunulmaktadır. Ücretsiz keşif talebi için hattımızı arayabilirsiniz.",
    icon: "🔍",
  },
];

export default function VincTasimaLojistikPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚛 Vinç Taşıma ve Lojistik Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Vinç Taşıma ve<br />
              <span className="text-yellow-400">Lojistik Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Ağır yük, makine ve proje kargo taşımacılığında güvenli çözümler.
              Türkiye genelinde sertifikalı operatörler ve modern vinç filosuyla
              zamanında teslimat garantisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Teklif Alın
              </a>
              <a
                href="#hizmet-kategorileri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Hizmetleri İncele ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { deger: "50 ton", label: "Maks. Taşıma Kapasitesi" },
              { deger: "81 İl", label: "Türkiye Geneli Hizmet" },
              { deger: "25+", label: "Yıllık Deneyim" },
              { deger: "1000+", label: "Tamamlanan Proje" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-yellow-400">{s.deger}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Vinçli Nakliyat Fiyatları ve Kiralama Seçenekleri 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar yük kapasitesi, mesafe ve operasyon tipine göre değişebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Hizmet</th>
                  <th className="text-center px-6 py-4 font-semibold">Kapasite</th>
                  <th className="text-center px-6 py-4 font-semibold">Fiyat</th>
                  <th className="text-center px-6 py-4 font-semibold">Notlar</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr
                    key={f.hizmet}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}
                  >
                    <td className="px-6 py-4 font-medium text-white">{f.hizmet}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{f.kapasite}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.fiyat}</td>
                    <td className="px-6 py-4 text-center text-gray-500 text-xs">{f.notlar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar KDV hariç olup güzergah ve proje detaylarına göre değişebilir.
          </p>
          <div className="text-center mt-8">
            <a
              href="tel:05323039089"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 Özel Fiyat Teklifi Alın
            </a>
          </div>
        </div>
      </section>

      {/* Vinçli Taşımacılık Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinçli Taşımacılık Hizmetleri ve Çözümleri</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Vinçli taşımacılık; standart nakliye araçlarıyla taşınamayacak kadar ağır, büyük
              veya hassas yüklerin özel kaldırma ekipmanı ve izinli güzergahlarla güvenli biçimde
              taşınmasını kapsar. Sanayi makinelerinden rüzgar türbini bileşenlerine, konteynerdan
              çelik kirişe kadar geniş bir yelpazede profesyonel lojistik çözümü sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📐 Saha Keşfi</h3>
              <p className="text-gray-500 text-sm">Her büyük taşıma operasyonu öncesinde güzergah ve zemin analizi yapılır.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📄 İzin & Belgeleme</h3>
              <p className="text-gray-500 text-sm">Standart dışı yükler için gerekli taşıma izinleri ve eskort koordinasyonu sağlanır.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🛡️ Sigorta Güvencesi</h3>
              <p className="text-gray-500 text-sm">Tüm taşımalarda nakliyat sigortası kapsamında tam güvence sunulur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Kategorileri */}
      <section id="hizmet-kategorileri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Hizmetlerimiz</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Fabrika ve Tesis Taşıma ile Tüm Lojistik Hizmetleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her sektöre ve yük tipine özel taşımacılık çözümleri. İhtiyacınıza göre doğru hizmeti seçin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hizmetKategorileri.map((v) => (
              <div
                key={v.href}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center">
                  <div className="text-6xl mb-3">{v.icon}</div>
                  <h3 className="text-white text-xl font-bold">{v.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{v.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.ozellikler.map((o) => (
                      <span key={o} className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full border border-yellow-200">
                        ✓ {o}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Kapasite</div>
                      <div className="text-gray-800 font-bold text-sm">{v.kapasite}</div>
                    </div>
                    <Link
                      href={v.href}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg text-sm transition"
                    >
                      İncele →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alt Bölüm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📦 Depo İçi Yük Taşıma ve Lojistik Sistemleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Depo ve lojistik merkezlerinde raf kurulum ve söküm, ağır palet taşıma ile
                yük istifleme operasyonları gezer köprülü veya mobil vinçlerle
                gerçekleştirilir. Tesis içi lojistik verimliliğini artıran çözümler sunulur.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Türkiye Geneli Vinçli Taşımacılık Hizmet Ağı</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                İstanbul merkezli operasyonlarımız Türkiye&apos;nin 81 iline uzanan hizmet ağıyla
                desteklenmektedir. Şehirlerarası büyük ölçekli taşımalarda bölgesel iş
                ortaklarımızla koordineli çalışarak zamanında teslimat sağlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Proje Kargo ve Özel Lojistik Çözümleri – Hizmet Verdiğimiz Sektörler</h2>
            <p className="text-gray-500 text-lg">Vinçli taşımacılık ve lojistik hizmetlerimizden yararlanan sektörler</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {hizmetAlanlari.map((k) => (
              <div key={k.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition group">
                <div className="text-4xl shrink-0">{k.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-700">{k.title}</h3>
                  <p className="text-gray-500 text-sm">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Ağır Makine Taşıma ve Montaj Hizmetleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fabrika taşıma veya hat yenileme projelerinde her makine için ayrı bir
                taşıma planı hazırlanır. Üretim duruş süresini minimize edecek şekilde
                planlanan söküm-taşıma-montaj takvimi titizlikle uygulanır.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚢 Liman ve Deniz Taşımacılığında Vinç Hizmetleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Liman sahası içinde gemi yükleme ve boşaltma operasyonları, özellikle proje
                kargo ve ağır parça taşımalarda özel vinç ve lift ekipmanlarıyla
                gerçekleştirilir. Gümrük ve liman otoritesiyle tam koordinasyon sağlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Neden Biz?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Operatörlü Vinçli Taşımacılık Avantajları</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🗺️", title: "Rota Planlaması", desc: "Güzergah fizibilite analizi, köprü yük hesabı ve izin süreçleri ekibimizce yönetilir." },
              { icon: "📋", title: "Tam Belgeleme", desc: "CMR, yük listesi, operasyon fotoğrafları ve sigorta belgesi eksiksiz teslim edilir." },
              { icon: "⏱️", title: "Zamanında Teslimat", desc: "Üretim ve proje takvimine uygun teslimat planlaması ve gerçek zamanlı takip." },
              { icon: "🔧", title: "Komple Hizmet", desc: "Söküm, paketleme, nakliye, kurulum ve test aşamaları tek çatı altında sunulur." },
            ].map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100">
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

      {/* Operasyon Süreci */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinçli Taşımacılık Operasyon Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel vinçli lojistik</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adimlar.map((a) => (
              <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group bg-gray-50">
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

      {/* H3 Detay Bölümleri */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Detaylı Bilgi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sigortalı Vinç Taşımacılığı – Tüm Hizmet Detayları</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {h3Bolumler.map((b) => (
              <div key={b.id} id={b.id} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-300 transition">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{b.icon} {b.baslik}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.icerik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güvenlik Standartları */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Sigortalı ve Sertifikalı Vinçli Taşımacılık Standartları</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Ağır yük taşımacılığında güvenlik, yasal uyumluluk ve sigorta
                güvencesi birbirinden ayrılmaz. Her operasyonumuzda uluslararası
                taşımacılık standartları ve Türkiye karayolu mevzuatına tam uyum sağlarız.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikStandartlari.map((kural) => (
                <div key={kural} className="flex gap-3 items-start bg-white/60 rounded-xl p-4">
                  <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                  <p className="text-gray-800 text-sm">{kural}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Taşıma ve Lojistik Hakkında Sıkça Sorulan Sorular</h2>
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

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Lojistik Projeniz İçin Teklif Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Saha keşfinden teslimat raporuna kadar her aşamada yanınızdayız.
            Hemen arayın, projenizi birlikte planlayalım.
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
