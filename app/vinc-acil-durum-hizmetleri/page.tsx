import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vinç Acil Durum Hizmetleri | 7/24 Hızlı Müdahale ve Kurtarma",
  description:
    "7/24 acil vinç hizmeti. Kaza sonrası araç kurtarma, enkaz kaldırma, ağır yük taşıma ve endüstriyel acil müdahale. Sertifikalı operatörler: 0532 303 90 89",
};

const hizmetKategorileri = [
  {
    icon: "🚨",
    title: "7/24 Acil Vinç Hizmeti ve Anında Müdahale",
    desc: "Gece veya gündüz fark etmeksizin acil çağrınıza ortalama 30-60 dakika içinde sahada yanıt veriyoruz.",
    sure: "Ort. 30-60 dk",
    href: "/acil-vinc-hizmeti",
    ozellikler: ["7/24 hazır", "Hızlı intikal", "Tüm İstanbul"],
  },
  {
    icon: "🚗",
    title: "Kaza Sonrası Araç Kurtarma ve Çekme",
    desc: "Trafik kazası, hendek ve şarampol düşmelerinde araç kaldırma, çekme ve yol açma operasyonları.",
    sure: "Acil öncelikli",
    href: "/arac-kurtarma",
    ozellikler: ["Araç kaldırma", "Yol açma", "Çekici desteği"],
  },
  {
    icon: "🏚️",
    title: "Enkaz Kaldırma ve Afet Müdahale",
    desc: "Doğal afet, bina çöküşü ve yangın sonrası enkaz kaldırma operasyonları. Koordineli ekip çalışması.",
    sure: "Koordineli müdahale",
    href: "/enkaz-kaldirma",
    ozellikler: ["Afet müdahale", "Koordineli ekip", "Ağır enkaz"],
  },
  {
    icon: "⚠️",
    title: "Acil Ağır Yük Kaldırma ve Taşıma",
    desc: "Endüstriyel ekipman, makine ve ağır yüklerin acil kaldırma ve güvenli taşıma operasyonları.",
    sure: "Teklif alınız",
    href: "/agir-yuk-kaldirma",
    ozellikler: ["Ağır yük", "Hassas kaldırma", "Güvenli taşıma"],
  },
  {
    icon: "🏭",
    title: "Endüstriyel Acil Arıza ve Kurtarma",
    desc: "Fabrika ve tesis içi makine arızası, ekipman devrilmesi ve üretim hattı kurtarma desteği.",
    sure: "Öncelikli müdahale",
    href: "/endustriyel-acil-kurtarma",
    ozellikler: ["Fabrika içi", "Makine kurtarma", "Üretim desteği"],
  },
  {
    icon: "⚓",
    title: "Liman ve Nakliyat Acil Kurtarma",
    desc: "Konteyner devrilmesi, yük kayması ve liman içi acil kurtarma operasyonları. Deneyimli liman ekibi.",
    sure: "Teklif alınız",
    href: "/liman-kurtarma",
    ozellikler: ["Konteyner", "Yük kurtarma", "Liman içi"],
  },
];

const fiyatTablosu = [
  { hizmet: "Acil Araç Kurtarma (şehir içi)", sure: "1-2 saat", fiyat: "3.500 TL'den", notlar: "7/24 geçerli" },
  { hizmet: "Devrilmiş Araç / İş Makinesi Kaldırma", sure: "2-4 saat", fiyat: "6.000 TL'den", notlar: "Kapasite & mesafeye göre" },
  { hizmet: "Enkaz Kaldırma Operasyonu", sure: "Proje bazlı", fiyat: "Teklif alınız", notlar: "Ekip + ekipman dahil" },
  { hizmet: "Endüstriyel Acil Kurtarma", sure: "Proje bazlı", fiyat: "Teklif alınız", notlar: "Saha analizi gerekli" },
  { hizmet: "Acil Vinç Kiralama (gece)", sure: "Min. 4 saat", fiyat: "8.000 TL'den", notlar: "Operatör dahil" },
  { hizmet: "Liman / Konteyner Kurtarma", sure: "Proje bazlı", fiyat: "Teklif alınız", notlar: "Liman iznine göre" },
  { hizmet: "Hafta Sonu / Resmi Tatil Müdahalesi", sure: "—", fiyat: "+%25 ek ücret", notlar: "Normal tarife üzeri" },
];

const mudahaleAlanlari = [
  { icon: "🛣️", title: "Karayolları", desc: "Otoyol, şehir içi ve şehirler arası karayollarında trafik kazası müdahalesi" },
  { icon: "🏗️", title: "İnşaat Sahaları", desc: "Şantiye kazaları, iş makinesi devrilmesi ve yapı çöküşü operasyonları" },
  { icon: "🏭", title: "Sanayi Tesisleri", desc: "Fabrika içi ekipman kurtarma ve üretim hattı acil desteği" },
  { icon: "⚓", title: "Liman & Tersane", desc: "Konteyner ve yük kurtarma, tersane içi acil müdahale" },
  { icon: "🔥", title: "Afet Bölgeleri", desc: "Yangın, deprem ve sel sonrası enkaz kaldırma ve kurtarma" },
  { icon: "🌉", title: "Dar & Ulaşılmaz Alanlar", desc: "Mobil vinçlerle dar alan ve zemin erişimi zor bölgelerde müdahale" },
];

const adimlar = [
  { no: "01", title: "Acil Çağrı", desc: "7/24 hattımızı arayın, konum ve durum bilgisini paylaşın." },
  { no: "02", title: "Risk Analizi", desc: "Uzman ekibimiz telefonda ön değerlendirme ve güvenlik analizi yapar." },
  { no: "03", title: "Ekip İntikali", desc: "En yakın ekip ve uygun vinç derhal sahaya yönlendirilir." },
  { no: "04", title: "Saha Güvenliği", desc: "Sahaya ulaşan operatörümüz güvenlik çevresi oluşturur." },
  { no: "05", title: "Müdahale", desc: "Sertifikalı operatör eşliğinde güvenli kurtarma operasyonu yürütülür." },
  { no: "06", title: "Raporlama", desc: "Operasyon tamamlanır, sigorta ve resmi süreçler için rapor düzenlenir." },
];

const guvenlikProtokolleri = [
  "Tüm operatörler acil müdahale sertifikasına ve iş güvenliği belgesine sahiptir",
  "Sahaya ilk ulaşan ekip risk analizi ve güvenlik çevresi oluşturmadan müdahale başlatmaz",
  "Gece operasyonlarında sahaya özel aydınlatma ekipmanı getirilmektedir",
  "Her araç ve ekipman, acil müdahaleye hazır tutmak için haftalık bakımdan geçirilmektedir",
  "Müdahale sırasında ikinci bir kaza riskini minimize etmek için trafik yönlendirme yapılır",
  "Tüm acil müdahale operasyonları zorunlu sigorta kapsamında gerçekleştirilmektedir",
];

const sss = [
  {
    soru: "Acil vinç hizmetine ne kadar sürede ulaşabilirsiniz?",
    cevap: "İstanbul genelinde ortalama 30-60 dakika içinde sahaya intikal sağlıyoruz. Konum ve trafik durumuna bağlı olarak bu süre değişebilir; ancak acil çağrılarda her zaman en yakın ekip yönlendirilir.",
  },
  {
    soru: "Gece ve hafta sonları da hizmet veriyor musunuz?",
    cevap: "Evet, 365 gün 7/24 kesintisiz hizmet sunuyoruz. Gece, hafta sonu ve resmi tatil müdahalelerinde standart tarifeye ek bir ücret uygulanabilir.",
  },
  {
    soru: "Acil kurtarma hizmetleri sigorta kapsamında mı?",
    cevap: "Operasyonlarımız zorunlu sorumluluk sigortası kapsamındadır. Ayrıca araç kasko sigortanız kapsamında ödeme yapılması durumunda sigorta şirketinizle koordineli çalışabiliyoruz.",
  },
  {
    soru: "Hangi bölgelere acil müdahale yapıyorsunuz?",
    cevap: "İstanbul'un tüm 39 ilçesine acil vinç hizmeti veriyoruz. Şehir dışı acil talepler için ek bilgi ve fiyat alabilirsiniz.",
  },
  {
    soru: "Devrilmiş TIR veya iş makinesi kurtarabilir misiniz?",
    cevap: "Evet, ağır ticari araçlar ve iş makineleri için gerekli kapasitede vinç ekibimiz mevcuttur. Bu tür operasyonlar için saha analizi yapıldıktan sonra uygun ekipman belirlenir.",
  },
];

const h3Bolumler = [
  {
    id: "trafik-kazasi",
    baslik: "Trafik Kazası Sonrası Araç Kaldırma ve Yol Açma",
    icerik: "Trafik kazasında hasarlanan, devrilen veya yola düşen araçların kaldırılması ve trafik akışının yeniden sağlanması için anlık müdahale ekibimiz sahaya yönlendirilir. Yetkililer ve çekici hizmetiyle koordineli çalışılır.",
    icon: "🚗",
  },
  {
    id: "devrilmis-arac",
    baslik: "Devrilmiş Araç ve İş Makinesi Kurtarma Operasyonları",
    icerik: "Devrilmiş TIR, kamyon, iş makinesi ve ağır ekipmanların kaldırılması özel kaldırma tekniği gerektirir. Sertifikalı operatörlerimiz dengeleme ve kaldırma planını sahada belirleyerek güvenli kurtarma gerçekleştirir.",
    icon: "🏗️",
  },
  {
    id: "gece-hafta-sonu",
    baslik: "Gece ve Hafta Sonu Acil Vinç Çağrısı",
    icerik: "Acil durumlar mesai saatine uymaz. Gece 03:00'te veya pazar günü öğleden sonra fark etmeksizin çağrınıza yanıt veriyoruz. Gece operasyonlarında saha aydınlatma ekipmanı da birlikte getirilmektedir.",
    icon: "🌙",
  },
  {
    id: "fabrika-kurtarma",
    baslik: "Fabrika ve Sanayi Tesislerinde Acil Ekipman Kurtarma",
    icerik: "Üretim hattındaki bir ekipman arızası veya devrilmesi, tüm tesisi durdurabilir. Endüstriyel acil ekibimiz fabrika içi dar alanlarda manevra yapabilen kompakt vinçlerle minimum sürede sahada olur.",
    icon: "🏭",
  },
  {
    id: "dar-alan",
    baslik: "Dar Alanlarda Acil Müdahale İçin Mobil Vinç",
    icerik: "Sokak arası, bodrum kat girişi, yeraltı geçidi ve benzeri dar alanlarda standart vinçlerin erişemeyeceği noktalara kompakt mobil vinçlerimizle ulaşıyoruz. İzci ve paletli modeller bu operasyonlar için özellikle tercih edilir.",
    icon: "📐",
  },
  {
    id: "yangin-afet",
    baslik: "Yangın ve Doğal Afet Sonrası Enkaz Kaldırma",
    icerik: "Yangın, deprem veya sel felaketi sonrasında enkaz kaldırma operasyonları hem teknik hem de koordinasyon açısından son derece kritiktir. AFAD ve belediye birimleriyle koordineli çalışarak güvenli ve hızlı enkaz temizliği yapıyoruz.",
    icon: "🔥",
  },
  {
    id: "konteyner",
    baslik: "Konteyner ve Yük Kazaları İçin Hızlı Müdahale",
    icerik: "Liman, tersane veya karayolunda devrilen ya da yere düşen konteyner ve ağır yük kazalarına özel ekipmanla müdahale ediyoruz. Yük güvenliği ve çevre koruma protokollerine uygun operasyon yürütülür.",
    icon: "📦",
  },
  {
    id: "mudahale-suresi",
    baslik: "Acil Durum Müdahale Süresi ve Bölge Kapsamı",
    icerik: "İstanbul'un tüm 39 ilçesinde ortalama 30-60 dakika içinde sahada oluyoruz. Avrupa yakasında Bakırköy, Avcılar, Esenyurt; Anadolu yakasında Kadıköy, Pendik, Gebze hattına kadar tüm bölgeler kapsam dahilindedir.",
    icon: "📍",
  },
  {
    id: "operatorlu",
    baslik: "Operatörlü Acil Vinç Hizmeti Avantajları",
    icerik: "Acil operasyonlarda sertifikalı operatör olmadan vinç kullanmak ikincil kazalara davetiye çıkarabilir. Operatörlerimiz sahada anlık karar vererek müdahale süresini kısaltır ve güvenliği en üst düzeyde tutar.",
    icon: "👷",
  },
  {
    id: "fiyatlar",
    baslik: "Acil Vinç Hizmeti Fiyatları ve Ödeme Seçenekleri",
    icerik: "Acil müdahale fiyatları; vinç tipi, mesafe, operasyon süresi ve müdahale saatine göre değişmektedir. Nakit, kredi kartı ve kurumsal fatura seçenekleri mevcuttur. Sigorta şirketiyle doğrudan koordinasyon da sağlanabilir.",
    icon: "💳",
  },
  {
    id: "sigorta",
    baslik: "Sigorta Kapsamlı Acil Kurtarma Hizmetleri",
    icerik: "Araç kasko veya işyeri sigortanız kapsamında gerçekleştirilen kurtarma operasyonları için gerekli belgeleri (operasyon raporu, fotoğraf, zaman kaydı) eksiksiz olarak düzenliyor ve sigorta şirketinizle koordineli hareket ediyoruz.",
    icon: "📋",
  },
  {
    id: "risk-analizi",
    baslik: "Acil Müdahale Öncesi Risk Analizi ve Güvenlik Değerlendirmesi",
    icerik: "Sahaya ulaşan operatör ekibi müdahaleye başlamadan önce zemin durumu, yük dengesi, çevresel tehlikeler ve ikincil kaza riskleri değerlendirilir. Bu analiz hem güvenliği artırır hem de operasyon süresini optimize eder.",
    icon: "🔍",
  },
];

export default function VincAcilDurumPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚨 7/24 Acil Vinç Müdahale Hattı
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Vinç Acil Durum<br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde 7/24 acil vinç müdahalesi. Araç kurtarma, enkaz
              kaldırma ve endüstriyel acil operasyonlarda sertifikalı ekip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                🚨 Acil Hattı Ara: 0532 303 90 89
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
              { deger: "30-60 dk", label: "Ortalama İntikal" },
              { deger: "7/24", label: "Kesintisiz Hizmet" },
              { deger: "39", label: "İlçede Kapsam" },
              { deger: "500+", label: "Acil Operasyon" },
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
            <h2 className="text-4xl font-black mb-4">Acil Vinç Hizmeti Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar operasyon tipi, mesafe ve süreye göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Hizmet Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Süre</th>
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
                    <td className="px-6 py-4 text-center text-gray-400">{f.sure}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.fiyat}</td>
                    <td className="px-6 py-4 text-center text-gray-500 text-xs">{f.notlar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar KDV hariç olup operasyon detaylarına ve mesafeye göre değişebilir.
          </p>
          <div className="text-center mt-8">
            <a
              href="tel:05323039089"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 Acil Teklif Alın
            </a>
          </div>
        </div>
      </section>

      {/* Acil Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Acil Ağır Yük Kaldırma ve Taşıma Hizmetleri Nedir?</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Acil vinç hizmetleri; trafik kazaları, endüstriyel arızalar, doğal afetler veya
              beklenmedik yük kazaları gibi durumlarda zaman kaybetmeden sahaya intikal eden
              profesyonel kaldırma ve kurtarma operasyonlarını kapsar. Standart hizmetlerden farkı,
              7/24 hazır ekip, öncelikli saha yönlendirmesi ve güvenlik protokollerine dayalı
              hızlı müdahale sürecidir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⏱️ Hız</h3>
              <p className="text-gray-500 text-sm">Her dakika kritik olduğunda ortalama 30-60 dakika içinde sahada oluyoruz.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🛡️ Güvenlik</h3>
              <p className="text-gray-500 text-sm">Sertifikalı operatörler ve risk protokolleriyle ikincil kazaların önüne geçilir.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📋 Dokümantasyon</h3>
              <p className="text-gray-500 text-sm">Sigorta ve resmi süreçler için eksiksiz operasyon raporu ve fotoğraflı belgeleme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Kategorileri */}
      <section id="hizmet-kategorileri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Hizmetlerimiz</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kaza Sonrası Araç Kurtarma ve Çekme ile Tüm Acil Hizmetler</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her acil duruma özel müdahale kapasitesi. İhtiyacınıza göre doğru hizmeti hızla belirleyin.
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
                      <div className="text-xs text-gray-400">Müdahale Süresi</div>
                      <div className="text-gray-800 font-bold text-sm">{v.sure}</div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ İnşaat Kazaları İçin Hızlı Vinç Desteği</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Şantiye ortamında iş makinesi devrilmesi, yapı elemanı düşmesi veya iskele kazası
                gibi durumlarda hızlı vinç desteği hayati önem taşır. Ekibimiz inşaat sahası
                koşullarına uygun ekipmanla kısa sürede sahada olur.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ Acil Vinç Kiralama ve Ekipman Temini</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kendi ekibinizle müdahale etmek istediğinizde operatörlü veya operatörsüz acil
                vinç kiralama seçeneği de sunuyoruz. Kapasite ve zemin koşullarına göre en uygun
                model belirlenerek sahaya yönlendirilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Müdahale Alanları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kapsam</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Enkaz Kaldırma ve Afet Müdahale Operasyonları Kapsamı</h2>
            <p className="text-gray-500 text-lg">Acil vinç hizmetimizin ulaştığı ortamlar ve sektörler</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mudahaleAlanlari.map((k) => (
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛣️ Sertifikalı Operatörlerle Güvenli Acil Müdahale</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Her acil operasyonda görev alan operatörlerimiz İş Sağlığı ve Güvenliği mevzuatı
                kapsamında sertifikalıdır. Kritik karar noktalarında doğru değerlendirme yaparak
                hem ekip hem de çevre güvenliğini sağlarlar.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚓ Liman ve Nakliyat Acil Kurtarma Hizmetleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Liman sahasında konteyner devrilmesi veya yük kayması ciddi operasyonel ve
                güvenlik riski oluşturur. Liman yetkilisi ve gümrük koordinasyonuyla
                yürütülen kurtarma operasyonlarında deneyimli ekibimiz hızla devreye girer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Müdahale Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Acil Durum Müdahalesinde Güvenlik Protokolleri ve Süreç</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel acil vinç müdahalesi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adimlar.map((a) => (
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

      {/* H3 Detay Bölümleri */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Detaylı Bilgi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Endüstriyel Acil Arıza ve Kurtarma – Tüm Operasyon Türleri</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {h3Bolumler.map((b) => (
              <div key={b.id} id={b.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-yellow-300 transition">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{b.icon} {b.baslik}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.icerik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güvenlik Protokolleri */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Acil Müdahalede Güvenlik ve Sertifikalı Operatör Standardı</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Acil müdahalelerde hız kadar güvenlik de kritiktir.
                Her operasyonumuzda standart güvenlik protokolleri eksiksiz
                uygulanmakta, sertifikalı operatörlerimiz risk almadan hareket etmektedir.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikProtokolleri.map((kural) => (
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Acil Durum Hizmetleri Hakkında Sıkça Sorulan Sorular</h2>
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
          <h2 className="text-4xl font-black mb-4">Acil Durumda Bizi Arayın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 acil hattımız her an aktiftir. Zaman kaybetmeden arayın, ekibimiz yola çıksın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05323039089"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              🚨 0532 303 90 89 – ACİL HAT
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
