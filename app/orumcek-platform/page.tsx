import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/orumcek-platform",
  },
  title: "Örümcek Platform Kiralama | Kiralık Örümcek Platform Hizmetleri",
  description:
    "İstanbul'da profesyonel kiralık örümcek platform hizmetleri. Akülü, dizel ve izci örümcek platform modelleri. 7/24 hizmet: 0532 303 90 89",
};

const platformTurleri = [
  {
    icon: "🔋",
    title: "Akülü Örümcek Platform",
    desc: "Sessiz ve emisyonsuz çalışma sağlayan, dar alan ve iç mekan çalışmalarına uygun platform türü.",
    fiyat: "4.000 – 8.000 TL / gün",
    href: "/akulu-orumcek-platform",
    ozellikler: ["Sessiz çalışma", "İç mekan uygun", "Emisyonsuz"],
  },
  {
    icon: "⛽",
    title: "Dizel Örümcek Platform",
    desc: "Açık alan ve engebeli zeminlerde güçlü performans sunan, ağır iş yükleri için tercih edilen platform.",
    fiyat: "6.000 – 12.000 TL / gün",
    href: "/dizel-orumcek-platform",
    ozellikler: ["Açık alan", "Engebeli zemin", "Yüksek güç"],
  },
  {
    icon: "🧭",
    title: "İzci Örümcek Platform",
    desc: "Paletli hareket sistemiyle zorlu arazi koşullarında manevra kabiliyeti sunan kompakt platform.",
    fiyat: "5.000 – 10.000 TL / gün",
    href: "/izci-orumcek-platform",
    ozellikler: ["Paletli sistem", "Zorlu arazi", "Kolay manevra"],
  },
  {
    icon: "🌳",
    title: "Bahçe Tipi Örümcek Platform",
    desc: "Peyzaj ve bahçe çalışmalarında yumuşak zemine zarar vermeyen, hafif yapılı örümcek platform.",
    fiyat: "4.500 – 9.000 TL / gün",
    href: "/bahce-orumcek-platform",
    ozellikler: ["Hafif yapı", "Zemine zarar vermez", "Peyzaj uyumlu"],
  },
  {
    icon: "🏢",
    title: "Yüksek Erişimli Örümcek Platform",
    desc: "Cephe ve çatı çalışmalarında büyük yükseklik avantajı sunan, geniş erişim mesafeli platform.",
    fiyat: "Teklif alınız",
    href: "/yuksek-erisimli-orumcek-platform",
    ozellikler: ["Yüksek erişim", "Geniş açı", "Cephe çalışması"],
  },
  {
    icon: "🧱",
    title: "Kompakt Örümcek Platform",
    desc: "Dar geçitlerden geçebilen, iç mekan ve sınırlı alan projelerinde tercih edilen küçük boyutlu platform.",
    fiyat: "Teklif alınız",
    href: "/kompakt-orumcek-platform",
    ozellikler: ["Dar geçit", "Küçük boyut", "Esnek kullanım"],
  },
];

const fiyatTablosu = [
  { tur: "14m Akülü Örümcek Platform", saatlik: "500 TL", gunluk: "4.000 TL", aylik: "60.000 TL" },
  { tur: "18m Dizel Örümcek Platform", saatlik: "700 TL", gunluk: "6.000 TL", aylik: "90.000 TL" },
  { tur: "25m İzci Örümcek Platform", saatlik: "900 TL", gunluk: "8.000 TL", aylik: "120.000 TL" },
  { tur: "30m Yüksek Erişimli Platform", saatlik: "1.200 TL", gunluk: "12.000 TL", aylik: "Teklif" },
  { tur: "Bahçe Tipi Örümcek Platform", saatlik: "550 TL", gunluk: "4.500 TL", aylik: "65.000 TL" },
  { tur: "Operatör Hizmeti", saatlik: "400 TL", gunluk: "1.800 TL", aylik: "Teklif" },
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "İnşaat", desc: "Bina iç ve dış cephe yapım çalışmaları" },
  { icon: "🏠", title: "Cephe Bakımı", desc: "Cephe boya, izolasyon ve onarım işleri" },
  { icon: "🏛️", title: "Çatı Çalışmaları", desc: "Çatı tamiratı ve bakım operasyonları" },
  { icon: "🌳", title: "Peyzaj", desc: "Ağaç budama ve bahçe düzenleme işleri" },
  { icon: "💡", title: "Aydınlatma", desc: "Sokak ve stadyum aydınlatma bakımı" },
  { icon: "🏭", title: "Fabrika İçi", desc: "Yüksek tavanlı tesislerde bakım çalışmaları" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Belirleme", desc: "Çalışma yüksekliği, zemin tipi ve alanı belirleyin." },
  { no: "02", title: "Teklif Alın", desc: "Bizi arayın, projenize özel fiyat teklifi alın." },
  { no: "03", title: "Sözleşme", desc: "Güvenli kiralama sözleşmesi imzalayın." },
  { no: "04", title: "Teslimat", desc: "Platform çalışma alanınıza teslim edilir, kurulur." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı operatörümüz güvenli şekilde çalışır." },
  { no: "06", title: "Tamamlama", desc: "İş bitiminde platform teslim alınır, alan temizlenir." },
];

const guvenlikkurallari = [
  "Operatörlerin örümcek platform kullanma sertifikaları mevcut",
  "Düzenli bakım ve kontroller zamanında yapılmaktadır",
  "Hava koşulları sürekli takip edilmekte, kötü havada çalışma durdurulmaktadır",
  "Platform kapasitesi hiçbir şekilde aşılmamaktadır",
  "Çalışma alanında gerekli uyarı işaretleri bulundurulmaktadır",
  "Tüm ekipmanlar sigortalı ve sertifikalıdır",
];

const sss = [
  {
    soru: "Örümcek platform nedir?",
    cevap: "Örümcek platform, dar ve zor erişilen alanlarda yükseklik çalışması yapmak için kullanılan, ayaklarıyla zemine sabitlenebilen kompakt bir yükseklik erişim ekipmanıdır.",
  },
  {
    soru: "Örümcek platform ile makaslı platform arasındaki fark nedir?",
    cevap: "Örümcek platform, açılabilen ayakları sayesinde dar ve engebeli alanlarda çalışabilirken, makaslı platform daha çok düz ve geniş zeminlerde dikey erişim için kullanılır.",
  },
  {
    soru: "Kiralık örümcek platform fiyatları nelere bağlıdır?",
    cevap: "Platform tipi ve yüksekliği, kiralama süresi, çalışma lokasyonu, operatör hizmeti gerekliliği ve nakliye maliyetleri fiyatı belirler.",
  },
  {
    soru: "Operatörlü kiralama ne anlama gelir?",
    cevap: "Sertifikalı ve deneyimli bir platform operatörünün ekipmanı sizin için kullandığı hizmettir. Hem güvenli hem de verimli çalışma sağlar.",
  },
  {
    soru: "Örümcek platform kiralama hizmeti nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz.",
  },
];

export default function KiralikOrumcekPlatformPage() {
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
              🕷️ Örümcek Platform Kiralama Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Örümcek Platform Kiralama<br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde profesyonel kiralık örümcek platform hizmeti. Sertifikalı operatörler,
              modern ekipmanlar ve 7/24 teknik destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#platform-turleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Platform Türlerini İncele ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { deger: "25+", label: "Yıllık Deneyim" },
              { deger: "7/24", label: "Kesintisiz Hizmet" },
              { deger: "39", label: "İlçede Hizmet" },
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
            <h2 className="text-4xl font-black mb-4">Kiralık Örümcek Platform Fiyatları 2026 – Güncel Ücret Tablosu</h2>
            <p className="text-gray-400 text-lg">Fiyatlar platform türü ve projeye göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Platform Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Saatlik</th>
                  <th className="text-center px-6 py-4 font-semibold">Günlük</th>
                  <th className="text-center px-6 py-4 font-semibold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr
                    key={f.tur}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}
                  >
                    <td className="px-6 py-4 font-medium text-white">{f.tur}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.saatlik}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.gunluk}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar KDV hariç olup lokasyon ve proje detaylarına göre değişebilir.
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

      {/* Örümcek Platform Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platform Nedir? Eklemli ve Makaslı Platformdan Farkı</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Örümcek platform, açılabilen ve zemine sabitlenebilen ayakları sayesinde dar, engebeli ve
              dengesiz alanlarda yükseklik çalışması yapılabilmesini sağlayan kompakt bir erişim ekipmanıdır.
              Eklemli platformlar daha uzun kol erişimi sunarken engebeli zeminde stabilite açısından örümcek
              platformların ayak sistemi avantaj sağlar. Makaslı platformlar ise yalnızca düz ve sağlam
              zeminlerde dikey hareket için uygundur; örümcek platformlar bu noktada hem yatay hem dikey
              erişimde daha fazla esneklik sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🕷️ Örümcek Platform</h3>
              <p className="text-gray-500 text-sm">Açılabilen ayaklarla engebeli ve dar alanlarda stabil çalışma sağlar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🦾 Eklemli Platform</h3>
              <p className="text-gray-500 text-sm">Uzun kollu yapısıyla engel üzerinden erişim gerektiren işlerde tercih edilir.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">✂️ Makaslı Platform</h3>
              <p className="text-gray-500 text-sm">Düz zeminlerde dikey erişim ve geniş platform alanı sunar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Türleri */}
      <section id="platform-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platform Çeşitleri: Akülü, Dizel ve İzci Modeller</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her projeye uygun örümcek platform seçeneği. İhtiyacınıza göre doğru modeli belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformTurleri.map((v) => (
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
                      <div className="text-xs text-gray-400">Fiyat</div>
                      <div className="text-gray-800 font-bold text-sm">{v.fiyat}</div>
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

          {/* Akülü ve Dizel Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔋 Akülü Örümcek Platform Kiralama – Dar Alan ve İç Mekan Çalışmaları İçin</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Akülü örümcek platformlar sessiz çalışma prensibi sayesinde fabrika, alışveriş merkezi,
                otel ve ofis gibi iç mekanlarda tercih edilir. Egzoz emisyonu üretmediği için kapalı alan
                havalandırma sorunlarına yol açmaz ve dar koridorlardan geçebilir.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⛽ Dizel Örümcek Platform Kiralama – Açık Alan, Engebeli ve Yumuşak Zemin İçin</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Dizel örümcek platformlar yüksek tork ve güç sunarak inşaat sahası, orman ve arazi gibi
                engebeli ortamlarda etkin çalışır. Yumuşak ve düzensiz zeminlerde geniş ayak açıklığı ile
                stabil bir çalışma platformu oluşturur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platform Hangi Sektörlerde ve Alanlarda Kullanılır?</h2>
            <p className="text-gray-500 text-lg">Kiralık örümcek platformlar hangi projelerde kullanılır?</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {kullanımAlanlari.map((k) => (
              <div key={k.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition group">
                <div className="text-4xl shrink-0">{k.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-700">{k.title}</h3>
                  <p className="text-gray-500 text-sm">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* İnşaat / Orman Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ İnşaat, Cephe ve Çatı Çalışmalarında Örümcek Platform Kullanımı</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                İnşaat sahalarında cephe izolasyonu, boya ve sıva işlerinde örümcek platform; operatöre
                ve malzemeye güvenli erişim sağlar. Çatı bakım ve onarım çalışmalarında da iskele kurmaya
                gerek kalmadan hızlı bir çözüm sunar.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌳 Orman, Bahçe ve Peyzaj Alanlarında Örümcek Platform</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ağaç budama, peyzaj düzenleme ve park bakım çalışmalarında örümcek platformun ayak
                sistemi, yumuşak ve eğimli zeminlerde dengeyi korur. Bahçe ve orman alanlarında zemine
                en az hasarla çalışma imkanı sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Avantajları */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Neden Kiralama?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platform Kiralama Avantajları – Neden Satın Almak Yerine Kiralamalısınız?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💰", title: "Düşük Maliyet", desc: "Yüksek satın alma maliyetinden kaçınarak ihtiyaç süresine göre ödeme yaparsınız." },
              { icon: "🔧", title: "Bakım Derdi Yok", desc: "Bakım, onarım ve periyodik kontroller kiralama firması tarafından yapılır." },
              { icon: "🔄", title: "Güncel Ekipman", desc: "Projeye en uygun model ve kapasiteyi her seferinde seçme şansınız olur." },
              { icon: "👷", title: "Operatör Desteği", desc: "Sertifikalı operatör hizmeti ile güvenli ve verimli çalışma sağlanır." },
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

      {/* Doğru Platform Nasıl Seçilir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Seçim Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Doğru Örümcek Platform Nasıl Seçilir? Yükseklik, Ağırlık ve Zemin Rehberi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📏 Çalışma Yüksekliği</h3>
              <p className="text-gray-500 text-sm">Ulaşılması gereken maksimum yüksekliğe göre uygun model belirlenir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Taşıma Ağırlığı</h3>
              <p className="text-gray-500 text-sm">Sepete binecek operatör ve malzeme ağırlığı kapasiteyi belirler.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🪨 Zemin Yapısı</h3>
              <p className="text-gray-500 text-sm">Düz, engebeli veya yumuşak zemine göre akülü, dizel ya da izci model seçilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platform Kiralama Süreci Nasıl İşler?</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel örümcek platform kiralama</p>
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

      {/* Fiyatı Etkileyen Faktörler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platform Kiralama Fiyatlarını Etkileyen Faktörler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Platform yüksekliği ve erişim kapasitesi",
              "Akülü, dizel veya izci model tercihi",
              "Kiralama süresi (saatlik, günlük, aylık)",
              "Çalışma lokasyonu ve nakliye mesafesi",
              "Operatör hizmeti gerekliliği",
              "Sezon ve talep yoğunluğu",
            ].map((f) => (
              <div key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-yellow-600 font-bold text-lg shrink-0">●</span>
                <p className="text-gray-700 text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güvenlik */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platformlarda İş Güvenliği ve Operatör Sertifikası Gereksinimleri</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Yükseklik çalışmalarında güvenlik her şeyin önünde gelir.
                Tüm ekipmanlarımız düzenli bakımdan geçmekte, operatörlerimiz
                güncel sertifikalara sahiptir.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikkurallari.map((kural) => (
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Örümcek Platform Kiralama Hakkında Sıkça Sorulan Sorular (SSS)</h2>
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

      {/* İlçe Linkleri */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">İstanbul&apos;un Tüm İlçelerinde Örümcek Platform Kiralama</h2>
            <p className="text-gray-500">Size en yakın bölgeden hizmet alın</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { label: "Adalar", href: "/adalar-orumcek-platform-kiralama" },
              { label: "Arnavutköy", href: "/arnavutkoy-orumcek-platform-kiralama" },
              { label: "Avcılar", href: "/avcilar-orumcek-platform-kiralama" },
              { label: "Bağcılar", href: "/bagcilar-orumcek-platform-kiralama" },
              { label: "Bahçelievler", href: "/bahcelievler-orumcek-platform-kiralama" },
              { label: "Bakırköy", href: "/bakirkoy-orumcek-platform-kiralama" },
              { label: "Başakşehir", href: "/basaksehir-orumcek-platform-kiralama" },
              { label: "Bayrampaşa", href: "/bayrampasa-orumcek-platform-kiralama" },
              { label: "Beşiktaş", href: "/besiktas-orumcek-platform-kiralama" },
              { label: "Beykoz", href: "/beykoz-orumcek-platform-kiralama" },
              { label: "Beylikdüzü", href: "/beylikduzu-orumcek-platform-kiralama" },
              { label: "Beyoğlu", href: "/beyoglu-orumcek-platform-kiralama" },
              { label: "Büyükçekmece", href: "/buyukcekmece-orumcek-platform-kiralama" },
              { label: "Çatalca", href: "/catalca-orumcek-platform-kiralama" },
              { label: "Çekmeköy", href: "/cekmekoy-orumcek-platform-kiralama" },
              { label: "Esenler", href: "/esenler-orumcek-platform-kiralama" },
              { label: "Esenyurt", href: "/esenyurt-orumcek-platform-kiralama" },
              { label: "Eyüp", href: "/eyup-orumcek-platform-kiralama" },
              { label: "Eyüpsultan", href: "/eyupsultan-orumcek-platform-kiralama" },
              { label: "Fatih", href: "/fatih-orumcek-platform-kiralama" },
              { label: "Gaziosmanpaşa", href: "/gaziosmanpasa-orumcek-platform-kiralama" },
              { label: "Güngören", href: "/gungoren-orumcek-platform-kiralama" },
              { label: "Kadıköy", href: "/kadikoy-orumcek-platform-kiralama" },
              { label: "Kağıthane", href: "/kagithane-orumcek-platform-kiralama" },
              { label: "Kartal", href: "/kartal-orumcek-platform-kiralama" },
              { label: "Küçükçekmece", href: "/kucukcekmece-orumcek-platform-kiralama" },
              { label: "Maltepe", href: "/maltepe-orumcek-platform-kiralama" },
              { label: "Pendik", href: "/pendik-orumcek-platform-kiralama" },
              { label: "Sancaktepe", href: "/sancaktepe-orumcek-platform-kiralama" },
              { label: "Sarıyer", href: "/sariyer-orumcek-platform-kiralama" },
              { label: "Silivri", href: "/silivri-orumcek-platform-kiralama" },
              { label: "Şile", href: "/sile-orumcek-platform-kiralama" },
              { label: "Şişli", href: "/sisli-orumcek-platform-kiralama" },
              { label: "Sultanbeyli", href: "/sultanbeyli-orumcek-platform-kiralama" },
              { label: "Sultangazi", href: "/sultangazi-orumcek-platform-kiralama" },
              { label: "Tuzla", href: "/tuzla-orumcek-platform-kiralama" },
              { label: "Ümraniye", href: "/umraniye-orumcek-platform-kiralama" },
              { label: "Üsküdar", href: "/uskudar-orumcek-platform-kiralama" },
              { label: "Zeytinburnu", href: "/zeytinburnu-orumcek-platform-kiralama" },
            ].map((ilce) => (
              <Link
                key={ilce.href}
                href={ilce.href}
                className="text-center text-sm text-gray-600 hover:text-yellow-600 hover:underline py-2 px-3 rounded-lg hover:bg-yellow-50 transition"
              >
                {ilce.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Projeniz İçin Teklif Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun örümcek platformu belirleyelim.
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
