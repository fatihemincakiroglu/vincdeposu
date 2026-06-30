import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/kamyon-ustu-vinc",
  },
  title: "Kamyon Üstü Vinç Kiralama | Kiralık Kamyon Üstü Vinç Hizmetleri",
  description:
    "İstanbul'da profesyonel kiralık kamyon üstü vinç hizmeti. Hidrolik ve operatörlü modeller. Nakliye, inşaat ve lojistik projeleri için 7/24 hizmet: 0532 303 90 89",
};

const kamyonUstuVincTurleri = [
  {
    icon: "🚛",
    title: "Hidrolik Kamyon Üstü Vinç",
    desc: "Kamyon şasisi üzerine monte edilmiş hidrolik sistemli vinç; yükleme, taşıma ve boşaltma işlemlerini tek araçla gerçekleştirir.",
    fiyat: "5.000 – 10.000 TL / gün",
    href: "/hidrolik-kamyon-ustu-vinc",
    ozellikler: ["Hidrolik sistem", "Hızlı montaj", "Çok amaçlı"],
  },
  {
    icon: "👷",
    title: "Operatörlü Kamyon Üstü Vinç",
    desc: "Sertifikalı operatör eşliğinde güvenli ve verimli yükleme-taşıma operasyonu sunan tam hizmet seçeneği.",
    fiyat: "6.500 – 12.000 TL / gün",
    href: "/operatorlu-kamyon-ustu-vinc",
    ozellikler: ["Sertifikalı operatör", "Güvenli çalışma", "Verimli operasyon"],
  },
  {
    icon: "🏗️",
    title: "İnşaat Malzemesi Taşıma Vinci",
    desc: "Demir, beton blok ve ağır inşaat malzemelerinin yüklenmesi ve taşınmasına özel yapılandırılmış kamyon üstü vinç.",
    fiyat: "5.500 – 11.000 TL / gün",
    href: "/insaat-malzemesi-kamyon-ustu-vinc",
    ozellikler: ["Ağır yük", "İnşaat uyumlu", "Geniş erişim"],
  },
  {
    icon: "📦",
    title: "Lojistik & Nakliye Tipi Vinç",
    desc: "Lojistik ve nakliye sektöründe yük yükleme-boşaltma işlemlerini hızlandıran, vinç entegre kamyon çözümü.",
    fiyat: "4.500 – 9.000 TL / gün",
    href: "/lojistik-kamyon-ustu-vinc",
    ozellikler: ["Hızlı yükleme", "Lojistik uyumlu", "Esnek kullanım"],
  },
  {
    icon: "🏭",
    title: "Sanayi & Fabrika Tipi Vinç",
    desc: "Fabrika ve sanayi tesislerinde ağır ekipman ve makine nakliyesinde kullanılan yüksek kapasiteli kamyon üstü vinç.",
    fiyat: "Teklif alınız",
    href: "/sanayi-kamyon-ustu-vinc",
    ozellikler: ["Yüksek kapasite", "Sanayi uyumlu", "Güvenli taşıma"],
  },
  {
    icon: "🌐",
    title: "Özel Proje & Uzun Dönem Kiralama",
    desc: "Büyük ölçekli projelere ve uzun süreli ihtiyaçlara özel fiyatlandırma ile esnek kamyon üstü vinç kiralama.",
    fiyat: "Teklif alınız",
    href: "/ozel-proje-kamyon-ustu-vinc",
    ozellikler: ["Uzun dönem", "Özel fiyat", "Esnek süre"],
  },
];

const fiyatTablosu = [
  { tur: "5 Ton Hidrolik Kamyon Üstü Vinç", saatlik: "800 TL", gunluk: "5.500 TL", aylik: "80.000 TL" },
  { tur: "10 Ton Kamyon Üstü Vinç", saatlik: "1.100 TL", gunluk: "7.500 TL", aylik: "110.000 TL" },
  { tur: "15 Ton Kamyon Üstü Vinç", saatlik: "1.400 TL", gunluk: "9.500 TL", aylik: "140.000 TL" },
  { tur: "20 Ton Kamyon Üstü Vinç", saatlik: "1.800 TL", gunluk: "13.000 TL", aylik: "Teklif" },
  { tur: "Lojistik & Nakliye Tipi Vinç", saatlik: "750 TL", gunluk: "4.800 TL", aylik: "70.000 TL" },
  { tur: "Operatör Hizmeti", saatlik: "400 TL", gunluk: "1.800 TL", aylik: "Teklif" },
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "İnşaat", desc: "Demir, beton ve ağır inşaat malzemelerinin taşınması" },
  { icon: "📦", title: "Lojistik", desc: "Depo, liman ve nakliye süreçlerinde yük yükleme-boşaltma" },
  { icon: "🏭", title: "Sanayi", desc: "Fabrika ve tesis içi makine ve ekipman taşımacılığı" },
  { icon: "🚧", title: "Altyapı", desc: "Yol, köprü ve altyapı projelerinde malzeme temini" },
  { icon: "⚡", title: "Enerji", desc: "Trafo, jeneratör ve enerji ekipmanlarının nakliyesi" },
  { icon: "🌲", title: "Orman & Tarım", desc: "Ağır tarım makineleri ve orman ürünleri taşımacılığı" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Belirleme", desc: "Yük tonajı, taşıma mesafesi ve çalışma koşullarını belirleyin." },
  { no: "02", title: "Teklif Alın", desc: "Bizi arayın, projenize özel fiyat teklifi alın." },
  { no: "03", title: "Sözleşme", desc: "Güvenli kiralama sözleşmesi imzalayın." },
  { no: "04", title: "Araç Tahsisi", desc: "Uygun tonajda kamyon üstü vinç projenize tahsis edilir." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı operatörümüz yükleme ve taşımayı güvenle yürütür." },
  { no: "06", title: "Tamamlama", desc: "İş bitiminde araç teslim alınır, evraklar düzenlenir." },
];

const guvenlikkurallari = [
  "Tüm operatörler kamyon üstü vinç kullanma sertifikasına sahiptir",
  "Araçlar periyodik bakım ve zorunlu teknik kontrollere tabidir",
  "Yük kapasitesi hiçbir koşulda aşılmamaktadır",
  "Taşıma izni ve ruhsatlar eksiksiz şekilde temin edilmektedir",
  "Tüm araç ve ekipmanlar trafik sigortası ve kargo sigortasıyla güvence altındadır",
  "Çalışma sahalarında gerekli uyarı ve güvenlik işaretleri kullanılmaktadır",
];

const sss = [
  {
    soru: "Kamyon üstü vinç nedir?",
    cevap:
      "Kamyon üstü vinç, bir kamyon şasisine monte edilmiş hidrolik veya mekanik kaldırma kolundan oluşan ekipmandır. Yük taşıma aracı ile vincin bir arada kullanılmasını sağlar; yükleme, taşıma ve boşaltma işlemleri tek araçla gerçekleştirilir.",
  },
  {
    soru: "Kamyon üstü vinç ile mobil vinç arasındaki fark nedir?",
    cevap:
      "Mobil vinçler ağırlıklı olarak kaldırma ve konumlandırma işlemleri için kullanılırken, kamyon üstü vinçler yükü hem kaldırır hem de taşır. Lojistik ve nakliye süreçlerinde kamyon üstü vinçler maliyet ve zaman avantajı sağlar.",
  },
  {
    soru: "Kiralık kamyon üstü vinç fiyatları nelere bağlıdır?",
    cevap:
      "Vinç tonajı ve kaldırma kapasitesi, kiralama süresi, çalışma lokasyonu ve nakliye mesafesi, operatör hizmeti gerekliliği ile sezon ve talep yoğunluğu fiyatı belirleyen başlıca faktörlerdir.",
  },
  {
    soru: "Operatörlü kiralama ne anlama gelir?",
    cevap:
      "Sertifikalı ve deneyimli bir kamyon üstü vinç operatörünün aracı sizin adınıza kullandığı hizmettir. İş güvenliği ve operasyon verimliliği açısından büyük avantaj sunar.",
  },
  {
    soru: "Kamyon üstü vinç kiralama hizmeti nasıl alınır?",
    cevap:
      "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz.",
  },
];

export default function KiralikKamyonUstuVincPage() {
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
              🚛 Kamyon Üstü Vinç Kiralama Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Kamyon Üstü Vinç Kiralama<br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde profesyonel kiralık kamyon üstü vinç hizmeti. Sertifikalı operatörler,
              modern araçlar ve 7/24 teknik destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#kamyon-ustu-vinc-turleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Kamyon Üstü Vinç Türlerini İncele ↓
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
            <h2 className="text-4xl font-black mb-4">Kiralık Kamyon Üstü Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar vinç tonajı ve proje detaylarına göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Kamyon Üstü Vinç Türü</th>
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

      {/* Kamyon Üstü Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Nedir? Mobil Vinçten Farkı</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Kamyon üstü vinç, bir kamyon şasisine kalıcı olarak monte edilmiş hidrolik kaldırma kolundan
              oluşan çok işlevli bir ekipmandır. Yükü hem kaldırma hem de taşıma kapasitesiyle lojistik
              ve nakliye süreçlerinde tek araçla operasyon imkânı sunar. Mobil vinçlerden farklı olarak
              kamyon üstü vinçler ayrı bir nakliye aracına ihtiyaç duymaz; yükleme, taşıma ve boşaltma
              işlemlerini tek seferde tamamlar. Özellikle inşaat malzemesi taşımacılığı, sanayi ekipmanı
              nakliyesi ve lojistik projelerinde zaman ve maliyet tasarrufu sağlar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🚛 Kamyon Üstü Vinç</h3>
              <p className="text-gray-500 text-sm">Kaldırma ve taşıma işlemlerini tek araçta birleştirir; lojistik maliyetini düşürür.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏗️ Mobil Vinç</h3>
              <p className="text-gray-500 text-sm">Ağır ve hassas kaldırma operasyonlarına odaklanır; taşıma için ayrı araç gerektirir.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🦾 Sabit Vinç</h3>
              <p className="text-gray-500 text-sm">Belirli bir konuma sabit olarak monte edilir; mobilite ve taşıma imkânı sunmaz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kamyon Üstü Vinç Türleri */}
      <section id="kamyon-ustu-vinc-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Modelleri ve Tonaj Seçenekleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her projeye uygun kamyon üstü vinç seçeneği. Tonaj ve kullanım alanına göre doğru modeli belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kamyonUstuVincTurleri.map((v) => (
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

          {/* Hidrolik ve Operatörlü Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💧 Hidrolik Kamyon Üstü Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hidrolik sistemli kamyon üstü vinçler, yüksek kaldırma kapasitesi ve hassas kontrol
                imkânı sayesinde ağır yük operasyonlarında üstün performans sunar. Hızlı montaj ve
                demontaj özellikleriyle farklı proje sahalarına kolayca intikal edebilir.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">👷 Operatörlü Kamyon Üstü Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sertifikalı operatör eşliğinde sunulan kamyon üstü vinç kiralama hizmeti; iş güvenliği,
                operasyon hızı ve mevzuat uyumluluğu açısından büyük avantaj sağlar. Tüm sorumluluk
                ekibimize ait olduğundan projenize odaklanabilirsiniz.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Kiralık kamyon üstü vinçler hangi projelerde kullanılır?</p>
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

          {/* Nakliye / İnşaat Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚚 Nakliye ve Lojistik Sektöründe Kamyon Üstü Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nakliye ve lojistik süreçlerinde kamyon üstü vinç, depo ve aktarma noktalarında ayrı
                bir forklift ya da kaldırma ekipmanı gerektirmeden yükleme-boşaltma işlemlerini
                kolaylaştırır. Teslimat sürelerini kısaltarak operasyonel verimliliği artırır.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ İnşaat Malzemesi ve Demir Taşımacılığında Kamyon Üstü Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                İnşaat sahalarında demir, çimento blok ve prefabrik elemanların taşınmasında kamyon
                üstü vinç, hem nakliye hem kaldırma işlevini bir arada karşılar. İskele kurma veya
                ek ekipman kiralama ihtiyacını ortadan kaldırarak maliyet tasarrufu sağlar.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Kiralama Avantajları</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💰", title: "Düşük Maliyet", desc: "Yüksek satın alma maliyetinden kaçınarak ihtiyaç süresine göre ödeme yaparsınız." },
              { icon: "🔧", title: "Bakım Derdi Yok", desc: "Bakım, onarım ve periyodik kontroller kiralama firması tarafından yapılır." },
              { icon: "🔄", title: "Doğru Tonaj Seçimi", desc: "Projeye en uygun tonaj ve modeli her seferinde seçme şansınız olur." },
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

      {/* Doğru Kamyon Üstü Vinç Nasıl Seçilir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Seçim Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Doğru Kamyon Üstü Vinç Nasıl Seçilir?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Yük Tonajı</h3>
              <p className="text-gray-500 text-sm">Kaldırılacak ve taşınacak yükün toplam ağırlığına göre doğru tonaj belirlenir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📏 Erişim Mesafesi</h3>
              <p className="text-gray-500 text-sm">Vincin ulaşması gereken yatay ve dikey mesafeye göre bom uzunluğu seçilir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🪨 Zemin ve Saha Koşulları</h3>
              <p className="text-gray-500 text-sm">Çalışma sahasının zemin yapısı ve araç erişim koşullarına göre uygun model belirlenir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Kiralama Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel kamyon üstü vinç kiralama</p>
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Fiyatlarını Etkileyen Faktörler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Kamyon üstü vincin tonajı ve kaldırma kapasitesi",
              "Hidrolik sistem tipi ve bom uzunluğu",
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
              <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Ruhsat, Taşıma İzni ve Operatör Gereksinimleri</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Kamyon üstü vinç operasyonlarında yasal uyum ve iş güvenliği her şeyin önündedir.
                Tüm araçlarımız güncel ruhsat ve taşıma izinlerine sahip olup operatörlerimiz
                geçerli sertifikalarla çalışmaktadır.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kamyon Üstü Vinç Kiralama Hakkında Sıkça Sorulan Sorular</h2>
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
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun kamyon üstü vinci belirleyelim.
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
