import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telehandler Kiralama | Kiralık Telehandler Hizmetleri",
  description:
    "İstanbul'da profesyonel kiralık telehandler hizmetleri. Sabit, döner ve yüksek erişimli telehandler modelleri. 7/24 hizmet: 0532 303 90 89",
};

const telehandlerTurleri = [
  {
    icon: "📦",
    title: "Sabit Telehandler",
    desc: "Şasi üzerinde sabit yapıya sahip, inşaat ve depo alanlarında yük taşıma için tercih edilen klasik model.",
    fiyat: "5.000 – 10.000 TL / gün",
    href: "/sabit-telehandler",
    ozellikler: ["Stabil yapı", "Yük taşıma", "Depo uyumlu"],
  },
  {
    icon: "🔄",
    title: "Döner Telehandler",
    desc: "360 derece dönüş kabiliyeti sayesinde sabit konumdan geniş çalışma alanına erişim sağlayan üst düzey model.",
    fiyat: "8.000 – 15.000 TL / gün",
    href: "/doner-telehandler",
    ozellikler: ["360° dönüş", "Geniş erişim", "Üstün esneklik"],
  },
  {
    icon: "🏗️",
    title: "Yüksek Erişimli Telehandler",
    desc: "Uzun bom yapısı ile yüksek katlı yapılarda ve geniş şantiyelerde malzeme taşıma işlemleri için idealdir.",
    fiyat: "Teklif alınız",
    href: "/yuksek-erisimli-telehandler",
    ozellikler: ["Uzun bom", "Yüksek erişim", "Şantiye uyumlu"],
  },
  {
    icon: "🚜",
    title: "Tarım Tipi Telehandler",
    desc: "Çiftlik ve tarım arazilerinde balya, yem ve malzeme taşımada kullanılan kompakt ve dayanıklı model.",
    fiyat: "4.500 – 9.000 TL / gün",
    href: "/tarim-tipi-telehandler",
    ozellikler: ["Arazi uyumlu", "Balya taşıma", "Dayanıklı yapı"],
  },
  {
    icon: "⚖️",
    title: "Yüksek Kapasiteli Telehandler",
    desc: "Ağır yük taşıma ve istif işlemlerinde kullanılan, büyük kaldırma kapasitesine sahip güçlü model.",
    fiyat: "Teklif alınız",
    href: "/yuksek-kapasiteli-telehandler",
    ozellikler: ["Ağır yük", "Yüksek kapasite", "İstif işlemi"],
  },
  {
    icon: "🧰",
    title: "Kompakt Telehandler",
    desc: "Dar alanlarda ve sınırlı şantiye sahalarında manevra kolaylığı sunan küçük boyutlu telehandler.",
    fiyat: "4.000 – 8.000 TL / gün",
    href: "/kompakt-telehandler",
    ozellikler: ["Dar alan", "Kolay manevra", "Küçük boyut"],
  },
];

const fiyatTablosu = [
  { tur: "Sabit Telehandler (2.5 ton)", saatlik: "600 TL", gunluk: "5.000 TL", aylik: "75.000 TL" },
  { tur: "Döner Telehandler (3 ton)", saatlik: "900 TL", gunluk: "8.500 TL", aylik: "120.000 TL" },
  { tur: "Yüksek Erişimli Telehandler", saatlik: "1.100 TL", gunluk: "12.000 TL", aylik: "Teklif" },
  { tur: "Tarım Tipi Telehandler", saatlik: "550 TL", gunluk: "4.500 TL", aylik: "65.000 TL" },
  { tur: "Yüksek Kapasiteli Telehandler (5 ton+)", saatlik: "1.300 TL", gunluk: "15.000 TL", aylik: "Teklif" },
  { tur: "Operatör Hizmeti", saatlik: "400 TL", gunluk: "1.800 TL", aylik: "Teklif" },
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "İnşaat", desc: "Şantiyede malzeme ve palet taşıma işleri" },
  { icon: "🌾", title: "Tarım", desc: "Balya, yem ve hasat ürünleri taşıma" },
  { icon: "🏭", title: "Depo & Lojistik", desc: "Yüksek raflarda istifleme ve yükleme" },
  { icon: "🏢", title: "Cephe & Yapı", desc: "Yüksek katlara malzeme ve aparat taşıma" },
  { icon: "⚡", title: "Enerji", desc: "Saha kurulum ve ekipman yerleştirme" },
  { icon: "🛣️", title: "Altyapı", desc: "Yol ve saha düzenleme çalışmaları" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Belirleme", desc: "Yükün ağırlığı, erişim yüksekliği ve çalışma alanını belirleyin." },
  { no: "02", title: "Teklif Alın", desc: "Bizi arayın, projenize özel fiyat teklifi alın." },
  { no: "03", title: "Sözleşme", desc: "Güvenli kiralama sözleşmesi imzalayın." },
  { no: "04", title: "Teslimat", desc: "Telehandler çalışma alanınıza teslim edilir." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı operatörümüz güvenli şekilde çalışır." },
  { no: "06", title: "Tamamlama", desc: "İş bitiminde ekipman teslim alınır, alan temizlenir." },
];

const ekipmanlar = [
  { icon: "🍴", title: "Palet Çatalı", desc: "Standart yük ve palet taşıma işlemleri için temel aparat." },
  { icon: "🪣", title: "Kova (Bucket)", desc: "Dökme malzeme, toprak ve agrega taşıma işlerinde kullanılır." },
  { icon: "👷", title: "Man Basket", desc: "Personel yükseklik erişimi gerektiren güvenli çalışma sepeti." },
  { icon: "🪝", title: "Vinç Kancası", desc: "Askıya alınan yüklerin kontrollü şekilde taşınmasını sağlar." },
  { icon: "🧱", title: "Tuğla/Blok Tutucu", desc: "İnşaat malzemelerinin güvenli şekilde taşınması için özel aparat." },
  { icon: "🔄", title: "Döner Aparat", desc: "Yükün farklı açılarda konumlandırılmasına imkan tanır." },
];

const sss = [
  {
    soru: "Telehandler nedir?",
    cevap: "Telehandler, teleskopik kol yapısı sayesinde yükleri yüksek ve uzak noktalara taşıyabilen, çok amaçlı bir yük taşıma ve kaldırma makinesidir.",
  },
  {
    soru: "Telehandler ile forklift arasındaki fark nedir?",
    cevap: "Forklift düz zeminlerde sınırlı yükseklikte çalışırken, telehandler teleskopik kolu sayesinde daha yüksek ve uzak noktalara, engebeli zeminlerde de erişebilir.",
  },
  {
    soru: "Kiralık telehandler fiyatları nelere bağlıdır?",
    cevap: "Telehandler tipi ve kapasitesi, kiralama süresi, çalışma lokasyonu, operatör hizmeti gerekliliği ve kullanılacak aparatlar fiyatı belirler.",
  },
  {
    soru: "Operatörlü kiralama ne anlama gelir?",
    cevap: "Sertifikalı ve deneyimli bir telehandler operatörünün ekipmanı sizin için kullandığı hizmettir. Hem güvenli hem de verimli çalışma sağlar.",
  },
  {
    soru: "Telehandler kiralama hizmeti nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz.",
  },
];

export default function KiralikTelehandlerPage() {
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
              📦 Telehandler Kiralama Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Telehandler Kiralama<br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde profesyonel kiralık telehandler hizmeti. Sertifikalı operatörler,
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
                href="#telehandler-turleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Telehandler Türlerini İncele ↓
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
            <h2 className="text-4xl font-black mb-4">Kiralık Telehandler Fiyatları 2026 – Güncel Ücret Tablosu</h2>
            <p className="text-gray-400 text-lg">Fiyatlar telehandler türü ve projeye göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Telehandler Türü</th>
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

      {/* Telehandler Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Nedir? Forklift ve Eklemli Platformdan Farkı</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Telehandler, teleskopik kol yapısı sayesinde yükleri hem yükseğe hem de uzağa taşıyabilen
              çok amaçlı bir iş makinesidir. Forkliftler genellikle düz zeminlerde sınırlı yükseklikte
              çalışırken, telehandler engebeli arazide de stabil çalışabilir ve daha geniş bir erişim
              menzili sunar. Eklemli platformlar personel erişimi için tasarlanmışken, telehandler
              öncelikli olarak yük taşıma, istifleme ve malzeme transferi amacıyla kullanılır; uygun
              aparatlarla personel taşıma gibi ek işlevler de kazanabilir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📦 Telehandler</h3>
              <p className="text-gray-500 text-sm">Teleskopik kol ile hem yükseğe hem uzağa yük taşıma imkanı sunar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🚛 Forklift</h3>
              <p className="text-gray-500 text-sm">Düz zeminlerde sınırlı yükseklikte yük taşıma için idealdir.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🦾 Eklemli Platform</h3>
              <p className="text-gray-500 text-sm">Personel erişimi ve yükseklik çalışmaları için tasarlanmıştır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telehandler Türleri */}
      <section id="telehandler-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Çeşitleri: Sabit, Döner ve Yüksek Erişimli Modeller</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her projeye uygun telehandler seçeneği. İhtiyacınıza göre doğru modeli belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {telehandlerTurleri.map((v) => (
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

          {/* Döner ve Yüksek Kapasiteli Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔄 Döner Telehandler Kiralama – 360 Derece Dönüş Kabiliyetiyle Üstün Esneklik</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Döner telehandlerler, gövdenin sabit kalmasına gerek olmadan kabin ve bom kısmının 360
                derece dönebilmesi sayesinde tek bir konumdan geniş bir çalışma alanına erişim sağlar.
                Şantiye içinde sürekli yer değiştirmeden farklı noktalara yük taşımak gereken projelerde
                zaman ve verimlilik avantajı sunar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚖️ Yüksek Kapasiteli Telehandler Kiralama – Ağır Yük Taşıma ve İstif İşlemleri İçin</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Yüksek kapasiteli telehandlerler, ağır inşaat malzemelerinin ve büyük paletlerin güvenli
                şekilde taşınması ve istiflenmesi için tasarlanmıştır. Geniş kaldırma kapasitesi sayesinde
                depo, liman ve büyük çaplı şantiye projelerinde tercih edilir.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Hangi Sektörlerde ve Alanlarda Kullanılır?</h2>
            <p className="text-gray-500 text-lg">Kiralık telehandlerler hangi projelerde kullanılır?</p>
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

          {/* İnşaat / Tarım Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ İnşaat ve Şantiye Alanlarında Telehandler Kullanımı</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Şantiyelerde tuğla, blok, çimento torbası ve diğer inşaat malzemelerinin yüksek katlara
                taşınmasında telehandler, vinç kurmaya gerek kalmadan hızlı ve verimli bir çözüm sunar.
                Engebeli şantiye zeminlerinde de stabil çalışma kabiliyeti ile öne çıkar.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌾 Tarım ve Çiftlik Çalışmalarında Telehandler</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Çiftlik ve tarım arazilerinde balya taşıma, yem dağıtımı ve hasat ürünlerinin
                depolanmasında telehandler geniş kullanım alanı bulur. Arazi tipi modeller, yumuşak ve
                engebeli zeminlerde de güvenli manevra imkanı sağlar.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Kiralama Avantajları – Neden Satın Almak Yerine Kiralamalısınız?</h2>
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

      {/* Doğru Telehandler Nasıl Seçilir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Seçim Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Doğru Telehandler Nasıl Seçilir? Kapasite, Erişim Yüksekliği ve Ekipman Rehberi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Yük Kapasitesi</h3>
              <p className="text-gray-500 text-sm">Taşınacak malzemenin ağırlığına göre uygun kapasitedeki model seçilir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📏 Erişim Yüksekliği</h3>
              <p className="text-gray-500 text-sm">Malzemenin ulaşması gereken maksimum yüksekliğe göre bom uzunluğu belirlenir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🧰 Ekipman İhtiyacı</h3>
              <p className="text-gray-500 text-sm">Çalışmanın türüne göre palet çatalı, kova ya da man basket gibi aparatlar seçilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Kiralama Süreci Nasıl İşler?</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel telehandler kiralama</p>
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Kiralama Fiyatlarını Etkileyen Faktörler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Telehandler kapasitesi ve erişim yüksekliği",
              "Sabit, döner veya tarım tipi model tercihi",
              "Kiralama süresi (saatlik, günlük, aylık)",
              "Çalışma lokasyonu ve nakliye mesafesi",
              "Operatör hizmeti gerekliliği",
              "Kullanılacak ek aparatlar (kova, man basket vb.)",
            ].map((f) => (
              <div key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-yellow-600 font-bold text-lg shrink-0">●</span>
                <p className="text-gray-700 text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekipman ve Aparatlar */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Aparat Seçenekleri</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Ekipman ve Aparatları: Palet Çatalı, Kova, Man Basket ve Daha Fazlası</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ekipmanlar.map((e) => (
              <div key={e.title} className="flex gap-4 items-start bg-white/70 rounded-xl p-5">
                <div className="text-3xl shrink-0">{e.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{e.title}</h3>
                  <p className="text-gray-700 text-sm">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Telehandler Kiralama Hakkında Sıkça Sorulan Sorular (SSS)</h2>
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
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun telehandleri belirleyelim.
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
