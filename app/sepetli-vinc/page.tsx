import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sepetli-vinc",
  },
  title: "Sepetli Vinç Kiralama | Kiralık Sepetli Vinç Hizmetleri",
  description:
    "İstanbul'da profesyonel kiralık sepetli vinç hizmetleri. Araç üstü, paletli ve izci sepetli vinç modelleri. 7/24 hizmet: 0532 303 90 89",
};

const sepetliVincTurleri = [
  {
    icon: "🚛",
    title: "Araç Üstü Sepetli Vinç",
    desc: "Kamyon şasisi üzerine monte edilen, hızlı konumlanma ve şehir içi ulaşım avantajı sunan model.",
    fiyat: "6.000 – 12.000 TL / gün",
    href: "/arac-ustu-sepetli-vinc",
    ozellikler: ["Hızlı ulaşım", "Şehir içi uygun", "Geniş erişim"],
  },
  {
    icon: "🦾",
    title: "Paletli Sepetli Vinç",
    desc: "Paletli hareket sistemiyle zorlu zeminlerde stabilite sağlayan, ağır projeler için tercih edilen model.",
    fiyat: "8.000 – 15.000 TL / gün",
    href: "/paletli-sepetli-vinc",
    ozellikler: ["Zorlu zemin", "Yüksek stabilite", "Ağır iş yükü"],
  },
  {
    icon: "🧭",
    title: "İzci Sepetli Vinç",
    desc: "Kompakt yapısı ve manevra kabiliyeti sayesinde dar alanlarda ve iç mekanlarda kullanılan model.",
    fiyat: "5.000 – 10.000 TL / gün",
    href: "/izci-sepetli-vinc",
    ozellikler: ["Dar alan", "Kompakt yapı", "Kolay manevra"],
  },
  {
    icon: "🏢",
    title: "Yüksek Erişimli Sepetli Vinç",
    desc: "Uzun bom yapısı ile yüksek katlı bina cephe ve çatı çalışmalarında büyük erişim avantajı sunar.",
    fiyat: "Teklif alınız",
    href: "/yuksek-erisimli-sepetli-vinc",
    ozellikler: ["Yüksek erişim", "Cephe çalışması", "Geniş açı"],
  },
  {
    icon: "⚡",
    title: "Telekom & Elektrik Tipi Sepetli Vinç",
    desc: "Direk ve hat çalışmalarında izole sepet ve özel donanımlarla güvenli erişim sağlayan model.",
    fiyat: "Teklif alınız",
    href: "/telekom-elektrik-sepetli-vinc",
    ozellikler: ["İzoleli sepet", "Direk çalışması", "Güvenli erişim"],
  },
  {
    icon: "🌳",
    title: "Bahçe & Peyzaj Tipi Sepetli Vinç",
    desc: "Ağaç budama ve peyzaj çalışmalarında hafif yapısı ile zemine zarar vermeyen model.",
    fiyat: "4.500 – 9.000 TL / gün",
    href: "/bahce-peyzaj-sepetli-vinc",
    ozellikler: ["Hafif yapı", "Zemine zarar vermez", "Peyzaj uyumlu"],
  },
];

const fiyatTablosu = [
  { tur: "18m Araç Üstü Sepetli Vinç", saatlik: "1.000 TL", gunluk: "6.500 TL", aylik: "95.000 TL" },
  { tur: "25m Paletli Sepetli Vinç", saatlik: "1.300 TL", gunluk: "9.500 TL", aylik: "130.000 TL" },
  { tur: "20m İzci Sepetli Vinç", saatlik: "900 TL", gunluk: "5.500 TL", aylik: "80.000 TL" },
  { tur: "40m Yüksek Erişimli Sepetli Vinç", saatlik: "1.800 TL", gunluk: "15.000 TL", aylik: "Teklif" },
  { tur: "Telekom Tipi Sepetli Vinç", saatlik: "1.200 TL", gunluk: "8.000 TL", aylik: "Teklif" },
  { tur: "Operatör Hizmeti", saatlik: "400 TL", gunluk: "1.800 TL", aylik: "Teklif" },
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "İnşaat", desc: "Bina cephe ve yapı çalışmalarında personel erişimi" },
  { icon: "🏠", title: "Cephe Bakımı", desc: "Boya, izolasyon ve cephe onarım işleri" },
  { icon: "⚡", title: "Elektrik & Telekom", desc: "Direk, hat ve baz istasyonu bakım çalışmaları" },
  { icon: "💡", title: "Aydınlatma", desc: "Sokak ve stadyum aydınlatma bakım işleri" },
  { icon: "🌳", title: "Peyzaj", desc: "Ağaç budama ve bahçe düzenleme çalışmaları" },
  { icon: "🏭", title: "Sanayi", desc: "Fabrika ve tesis içi yüksek bakım operasyonları" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Belirleme", desc: "Çalışma yüksekliği, zemin tipi ve alanı belirleyin." },
  { no: "02", title: "Teklif Alın", desc: "Bizi arayın, projenize özel fiyat teklifi alın." },
  { no: "03", title: "Sözleşme", desc: "Güvenli kiralama sözleşmesi imzalayın." },
  { no: "04", title: "Teslimat", desc: "Sepetli vinç çalışma alanınıza teslim edilir." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı operatörümüz güvenli şekilde çalışır." },
  { no: "06", title: "Tamamlama", desc: "İş bitiminde ekipman teslim alınır, alan temizlenir." },
];

const guvenlikkurallari = [
  "Operatörlerin sepetli vinç kullanma sertifikaları mevcut",
  "Düzenli bakım ve kontroller zamanında yapılmaktadır",
  "Hava koşulları sürekli takip edilmekte, kötü havada çalışma durdurulmaktadır",
  "Sepet kapasitesi hiçbir şekilde aşılmamaktadır",
  "Çalışma alanında gerekli uyarı işaretleri bulundurulmaktadır",
  "Tüm ekipmanlar sigortalı ve sertifikalıdır",
];

const sss = [
  {
    soru: "Sepetli vinç nedir?",
    cevap: "Sepetli vinç, personelin güvenli bir sepet içinde yükseğe çıkarılarak çalışma yapmasını sağlayan, cephe ve bakım işlerinde sıkça kullanılan bir erişim ekipmanıdır.",
  },
  {
    soru: "Sepetli vinç ile diğer platformlar arasındaki fark nedir?",
    cevap: "Sepetli vinçler genellikle daha uzun bom yapısı ve hareketli şasi sayesinde geniş bir alana ve yüksekliğe erişim sağlarken, makaslı veya örümcek platformlar daha sınırlı erişim alanına sahiptir.",
  },
  {
    soru: "Kiralık sepetli vinç fiyatları nelere bağlıdır?",
    cevap: "Vinç tipi ve erişim yüksekliği, kiralama süresi, çalışma lokasyonu, operatör hizmeti gerekliliği ve nakliye maliyetleri fiyatı belirler.",
  },
  {
    soru: "Operatörlü kiralama ne anlama gelir?",
    cevap: "Sertifikalı ve deneyimli bir sepetli vinç operatörünün ekipmanı sizin için kullandığı hizmettir. Hem güvenli hem de verimli çalışma sağlar.",
  },
  {
    soru: "Sepetli vinç kiralama hizmeti nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz.",
  },
];

export default function KiralikSepetliVincPage() {
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
              🏗️ Sepetli Vinç Kiralama Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Sepetli Vinç Kiralama<br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde profesyonel kiralık sepetli vinç hizmeti. Sertifikalı operatörler,
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
                href="#sepetli-vinc-turleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Sepetli Vinç Türlerini İncele ↓
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
            <h2 className="text-4xl font-black mb-4">Kiralık Sepetli Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar vinç türü ve projeye göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Sepetli Vinç Türü</th>
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

      {/* Sepetli Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinç Nedir? Diğer Platformlardan Farkı</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Sepetli vinç, ucunda personel taşıma sepeti bulunan bom yapısı sayesinde yüksekteki
              noktalara güvenli erişim sağlayan bir kaldırma ekipmanıdır. Araç üstü, paletli veya izci
              şasiler üzerine monte edilebilir ve uzun bom yapısı sayesinde örümcek veya makaslı
              platformlara göre çok daha geniş bir erişim alanı sunar. Özellikle yüksek binaların cephe
              çalışmalarında, elektrik direklerinde ve geniş alana yayılmış bakım projelerinde sepetli
              vinçler hem yatay hem dikey hareket esnekliği açısından öne çıkar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏗️ Sepetli Vinç</h3>
              <p className="text-gray-500 text-sm">Uzun bom ve hareketli şasi sayesinde geniş bir alana erişim sağlar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🕷️ Örümcek Platform</h3>
              <p className="text-gray-500 text-sm">Dar ve engebeli alanlarda kompakt erişim için tasarlanmıştır.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">✂️ Makaslı Platform</h3>
              <p className="text-gray-500 text-sm">Düz zeminlerde dikey erişim ve geniş platform alanı sunar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sepetli Vinç Türleri */}
      <section id="sepetli-vinc-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinç Modelleri: Araç Üstü, Paletli ve İzci</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her projeye uygun sepetli vinç seçeneği. İhtiyacınıza göre doğru modeli belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sepetliVincTurleri.map((v) => (
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

          {/* Araç Üstü ve Paletli Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚛 Araç Üstü Sepetli Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Araç üstü sepetli vinçler, kamyon şasisi üzerine monte edildiği için şehir içi
                ulaşımda büyük avantaj sağlar. Trafik kurallarına uygun şekilde hızlıca proje
                sahasına intikal edebilir ve kısa süreli işlerde verimli bir çözüm sunar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🦾 Paletli Sepetli Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Paletli sepetli vinçler, geniş palet tabanı sayesinde engebeli ve yumuşak zeminlerde
                üstün stabilite sunar. İnşaat sahası, arazi ve şantiye gibi zorlu çalışma koşullarında
                güvenli bir erişim platformu oluşturur.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinç Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Kiralık sepetli vinçler hangi projelerde kullanılır?</p>
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

          {/* İnşaat / Elektrik Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ İnşaat ve Bina Dış Cephe Çalışmalarında Sepetli Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Bina dış cephe izolasyonu, boya ve onarım çalışmalarında sepetli vinç, personeli
                güvenli bir şekilde yüksek noktalara taşıyarak iskele kurma ihtiyacını ortadan
                kaldırır. İnşaat sahalarında zaman ve maliyet açısından önemli avantaj sağlar.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Elektrik, Aydınlatma ve Telekom Projelerinde Sepetli Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Elektrik direği bakımı, sokak aydınlatması ve telekom baz istasyonu çalışmalarında
                sepetli vinç, özel izoleli sepet donanımıyla güvenli erişim sağlar. Yüksekteki
                hatlara ve ekipmanlara hızlı ve kontrollü ulaşım imkanı sunar.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinç Kiralama Avantajları</h2>
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

      {/* Doğru Sepetli Vinç Nasıl Seçilir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Seçim Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Doğru Sepetli Vinç Nasıl Seçilir?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📏 Çalışma Yüksekliği</h3>
              <p className="text-gray-500 text-sm">Ulaşılması gereken maksimum yüksekliğe göre bom uzunluğu belirlenir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Sepet Kapasitesi</h3>
              <p className="text-gray-500 text-sm">Sepete binecek personel ve malzeme ağırlığı kapasiteyi belirler.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🪨 Zemin ve Ulaşım</h3>
              <p className="text-gray-500 text-sm">Zemin yapısı ve sahaya ulaşım koşullarına göre araç üstü ya da paletli model seçilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinç Kiralama Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel sepetli vinç kiralama</p>
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinç Fiyatlarını Etkileyen Faktörler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Sepetli vinç yüksekliği ve erişim mesafesi",
              "Araç üstü, paletli veya izci model tercihi",
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
              <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinçlerde İş Güvenliği ve Operatör Belgesi</h2>
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sepetli Vinç Kiralama Hakkında Sıkça Sorulan Sorular</h2>
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
          <h2 className="text-4xl font-black mb-4">Projeniz İçin Teklif Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun sepetli vinci belirleyelim.
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
