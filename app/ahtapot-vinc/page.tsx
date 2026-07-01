import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/ahtapot-vinc",
  },
  title: "Ahtapot Vinç Kiralama | Kiralık Ahtapot Vinç Hizmetleri",
  description:
    "İstanbul'da profesyonel kiralık ahtapot vinç hizmeti. Dar alan, bina içi, cam ve panel taşıma projeleri. 7/24 hizmet: 0532 303 90 89",
};

const ahtapotVincTurleri = [
  {
    icon: "🐙",
    title: "Kompakt Ahtapot Vinç",
    desc: "Dar ve sınırlı alanlarda mükemmel manevra kabiliyeti sunan, bina içi ve kapalı mekân çalışmalarına özel model.",
    fiyat: "5.000 – 9.000 TL / gün",
    href: "/kompakt-ahtapot-vinc",
    ozellikler: ["Dar alan", "Kompakt yapı", "Bina içi"],
  },
  {
    icon: "🏋️",
    title: "Yüksek Kapasiteli Ahtapot Vinç",
    desc: "Ağır ekipman, cam paneli ve endüstriyel bileşenlerin güvenli taşınmasında tercih edilen yüksek kaldırma kapasiteli model.",
    fiyat: "8.000 – 14.000 TL / gün",
    href: "/yuksek-kapasiteli-ahtapot-vinc",
    ozellikler: ["Yüksek kapasite", "Ağır yük", "Endüstriyel"],
  },
  {
    icon: "🪟",
    title: "Cam ve Panel Taşıma Ahtapot Vinç",
    desc: "Vantuz aparatlarıyla büyük cam ve cephe panellerini hassas şekilde taşıyıp yerine yerleştiren özel donanımlı model.",
    fiyat: "7.000 – 12.000 TL / gün",
    href: "/cam-panel-ahtapot-vinc",
    ozellikler: ["Vantuz aparatı", "Hassas yerleştirme", "Cam uyumlu"],
  },
  {
    icon: "🏗️",
    title: "Bina İçi Ahtapot Vinç",
    desc: "Düşük tavan yüksekliği ve dar koridorlarda çalışabilen, iç mekân montaj ve taşıma projelerine özel tasarlanmış model.",
    fiyat: "6.000 – 10.000 TL / gün",
    href: "/bina-ici-ahtapot-vinc",
    ozellikler: ["Alçak tavan", "Dar koridor", "İç mekân"],
  },
  {
    icon: "⚙️",
    title: "Sanayi Tipi Ahtapot Vinç",
    desc: "Fabrika ve tesis içi makine montajı, büyük ekipman yerleştirme ve ağır yük taşımada güvenle kullanılan endüstriyel model.",
    fiyat: "Teklif alınız",
    href: "/sanayi-ahtapot-vinc",
    ozellikler: ["Makine montajı", "Fabrika içi", "Endüstriyel"],
  },
  {
    icon: "🔧",
    title: "Elektrikli Ahtapot Vinç",
    desc: "Gürültüsüz ve emisyonsuz çalışan elektrikli modeli; hastane, ofis ve kapalı alanlar için tercih edilen çevre dostu seçenek.",
    fiyat: "5.500 – 9.500 TL / gün",
    href: "/elektrikli-ahtapot-vinc",
    ozellikler: ["Sessiz çalışma", "Sıfır emisyon", "Kapalı alan"],
  },
];

const fiyatTablosu = [
  { tur: "Kompakt Ahtapot Vinç (1–2 ton)", saatlik: "800 TL", gunluk: "5.500 TL", aylik: "80.000 TL" },
  { tur: "Orta Kapasite Ahtapot Vinç (3–5 ton)", saatlik: "1.100 TL", gunluk: "8.000 TL", aylik: "110.000 TL" },
  { tur: "Yüksek Kapasiteli Ahtapot Vinç (6–10 ton)", saatlik: "1.500 TL", gunluk: "12.000 TL", aylik: "Teklif" },
  { tur: "Cam & Panel Taşıma Ahtapot Vinç", saatlik: "1.200 TL", gunluk: "9.000 TL", aylik: "Teklif" },
  { tur: "Elektrikli Ahtapot Vinç", saatlik: "900 TL", gunluk: "6.000 TL", aylik: "85.000 TL" },
  { tur: "Operatör Hizmeti", saatlik: "400 TL", gunluk: "1.800 TL", aylik: "Teklif" },
];

const kullanımAlanlari = [
  { icon: "🪟", title: "Cam Montajı", desc: "Büyük cam ve cephe panellerinin hassas taşıma ve montaj işleri" },
  { icon: "🏢", title: "Bina İçi Taşıma", desc: "Dar alan ve alçak tavanlı mekânlarda ağır ekipman taşıma" },
  { icon: "🏭", title: "Sanayi & Fabrika", desc: "Makine montajı, ekipman yerleştirme ve tesis içi taşıma" },
  { icon: "🔩", title: "Çelik Konstrüksiyon", desc: "Çelik yapı elemanlarının montaj ve yerleştirme çalışmaları" },
  { icon: "🏗️", title: "İnşaat", desc: "Yapı içi ağır malzeme taşıma ve bileşen yerleştirme işleri" },
  { icon: "🛒", title: "Mağaza & AVM", desc: "Büyük reklam panosu, klima ve ekipman montaj çalışmaları" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Belirleme", desc: "Yük kapasitesi, alan ölçüsü ve çalışma koşullarını belirleyin." },
  { no: "02", title: "Teklif Alın", desc: "Bizi arayın, projenize özel fiyat teklifi alın." },
  { no: "03", title: "Sözleşme", desc: "Güvenli kiralama sözleşmesi imzalayın." },
  { no: "04", title: "Teslimat", desc: "Ahtapot vinç çalışma alanınıza teslim edilir." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı operatörümüz güvenli şekilde çalışır." },
  { no: "06", title: "Tamamlama", desc: "İş bitiminde ekipman teslim alınır, alan temizlenir." },
];

const guvenlikKurallari = [
  "Operatörlerin ahtapot vinç kullanma sertifikaları mevcuttur",
  "Düzenli bakım ve kontroller zamanında yapılmaktadır",
  "Zemin taşıma kapasitesi çalışma öncesinde kontrol edilmektedir",
  "Kaldırma kapasitesi hiçbir şekilde aşılmamaktadır",
  "Çalışma alanında gerekli uyarı işaretleri bulundurulmaktadır",
  "Tüm ekipmanlar sigortalı ve sertifikalıdır",
];

const sss = [
  {
    soru: "Ahtapot vinç nedir?",
    cevap: "Ahtapot vinç; kompakt gövdesi ve çok yönlü bom hareketi sayesinde dar alanlarda, bina içlerinde ve sınırlı mekânlarda ağır yükleri kaldırmak ve taşımak için kullanılan özel bir kaldırma ekipmanıdır. Adını esnek ve çok kollu çalışma kabiliyetinden alır.",
  },
  {
    soru: "Ahtapot vinç ile diğer vinçler arasındaki fark nedir?",
    cevap: "Geleneksel vinçler geniş alanlarda ve açık sahalarda çalışmak üzere tasarlanmışken, ahtapot vinçler dar koridorlar, alçak tavanlar ve kapalı mekânlar gibi sınırlı alanlarda üstün manevra kabiliyeti sunar. Özellikle cam montajı ve bina içi çalışmalarda alternatifsizdir.",
  },
  {
    soru: "Kiralık ahtapot vinç fiyatları nelere bağlıdır?",
    cevap: "Ahtapot vinç kapasitesi, kiralama süresi, çalışma lokasyonu, zemin koşulları, operatör hizmeti gerekliliği ve nakliye mesafesi fiyatı belirleyen başlıca etkenlerdir.",
  },
  {
    soru: "Ahtapot vinç dar alanlarda kullanılabilir mi?",
    cevap: "Evet. Ahtapot vinçlerin en büyük avantajı bu özellikleridir. Standart kapı genişliğinden geçebilen kompakt modeller, normal vinçlerin çalışamayacağı dar koridor, asma kat ve kapalı depo gibi mekânlarda verimle çalışabilir.",
  },
  {
    soru: "Ahtapot vinç kiralama hizmeti nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz.",
  },
];

export default function KiralikAhtapotVincPage() {
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
              🐙 Ahtapot Vinç Kiralama Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Ahtapot Vinç Kiralama<br />{" "}
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde profesyonel kiralık ahtapot vinç hizmeti. Dar alan,
              bina içi ve cam montajı projelerinde sertifikalı operatörler ve modern ekipmanlarla 7/24 yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#ahtapot-vinc-turleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Ahtapot Vinç Modellerini İncele ↓
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
            <h2 className="text-4xl font-black mb-4">Kiralık Ahtapot Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar vinç türü ve projeye göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Ahtapot Vinç Türü</th>
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

      {/* Ahtapot Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Nedir? Diğer Vinçlerden Farkı</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Ahtapot vinç; kompakt gövdesi, düşük taban ağırlığı ve çok yönlü bom hareketi sayesinde
              dar koridorlar, bina içleri ve sınırlı çalışma alanlarında ağır yükleri güvenle kaldıran
              özel bir kaldırma ekipmanıdır. Adını esnek ve çok kollu çalışma kabiliyetinden alır.
              Cam montajı, panel taşıma ve fabrika içi makine yerleştirme gibi hassasiyet gerektiren
              uygulamalarda geleneksel vinçlerin ulaşamadığı noktalara erişim imkânı sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🐙 Ahtapot Vinç</h3>
              <p className="text-gray-500 text-sm">Kompakt yapısı ve çok yönlü hareketi ile dar alanlarda ve bina içlerinde üstün performans sunar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏗️ Mobil Vinç</h3>
              <p className="text-gray-500 text-sm">Açık sahalar ve geniş alanlarda yüksek kaldırma kapasitesiyle çalışmak için tasarlanmıştır.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🕷️ Örümcek Vinç</h3>
              <p className="text-gray-500 text-sm">Engebeli ve eğimli zeminlerde stabilite sağlayan paletli yapısıyla öne çıkar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ahtapot Vinç Türleri */}
      <section id="ahtapot-vinc-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Modelleri ve Kapasite Seçenekleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her projeye uygun ahtapot vinç seçeneği. İhtiyacınıza göre doğru modeli belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ahtapotVincTurleri.map((v) => (
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

          {/* Kompakt ve Yüksek Kapasiteli Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🐙 Küçük ve Kompakt Ahtapot Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Küçük ve kompakt ahtapot vinçler, standart kapı genişliğinden geçebilen dar gövdeleri
                sayesinde alçak tavanlı depolar, ofis katları ve dar koridor gibi mekânlarda rahatlıkla
                çalışır. Düşük zemin baskısı ile hassas zeminlere zarar vermeden taşıma yapabilir.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏋️ Yüksek Kapasiteli Ahtapot Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Yüksek kapasiteli ahtapot vinçler, 6 ila 10 ton arasındaki ağır ekipman, makine ve
                büyük cam panellerinin taşınmasında güvenle kullanılır. Fabrika ve tesis içi montaj
                projelerinde hassas konumlandırma imkânı sunar.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Kiralık ahtapot vinçler hangi projelerde kullanılır?</p>
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

          {/* Dar Alan / Cam Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏢 Dar Alan ve Bina İçi Çalışmalarda Ahtapot Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ahtapot vinçler, standart vinçlerin giremeyeceği kapalı alanlarda, dar koridorlarda
                ve alçak tavanlı mekânlarda güvenle çalışabilir. Hastane, otel, AVM ve ofis binası
                gibi işlevsel yapılarda sürekli kullanıma açık alanları kapatmadan iş yapma imkânı sunar.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🪟 Cam, Panel ve Ağır Ekipman Taşımada Ahtapot Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Özel vantuz aparatları ile büyük cam, cephe paneli ve ayna taşıma işlerinde ahtapot
                vinç hassas konumlandırma sağlar. Kırılma riski yüksek malzemeleri güvenle taşır ve
                fabrika içi ağır ekipman kurulum çalışmalarında da sıkça tercih edilir.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Kiralama Avantajları</h2>
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

      {/* Doğru Ahtapot Vinç Nasıl Seçilir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Seçim Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Doğru Ahtapot Vinç Nasıl Seçilir?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Yük Kapasitesi</h3>
              <p className="text-gray-500 text-sm">Taşınacak yükün ağırlığı ve boyutlarına göre doğru kapasite belirlenir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📐 Çalışma Alanı Ölçüsü</h3>
              <p className="text-gray-500 text-sm">Koridor genişliği, tavan yüksekliği ve zemin tipi model seçimini doğrudan etkiler.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🔩 Aparat İhtiyacı</h3>
              <p className="text-gray-500 text-sm">Cam, panel veya özel ekipman taşımak için vantuz ya da özel bağlantı aparatı gerekebilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Kiralama Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel ahtapot vinç kiralama</p>
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Fiyatlarını Etkileyen Faktörler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Ahtapot vinç kaldırma kapasitesi ve model tipi",
              "Kompakt veya yüksek kapasiteli model tercihi",
              "Kiralama süresi (saatlik, günlük, aylık)",
              "Çalışma lokasyonu ve nakliye mesafesi",
              "Özel aparat gerekliliği (vantuz, panel tutucu vb.)",
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
              <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Güvenli Kullanım ve Operatör Gereksinimleri</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Ağır yük taşıma ve hassas konumlandırma çalışmalarında güvenlik her şeyin önünde gelir.
                Tüm ekipmanlarımız düzenli bakımdan geçmekte, operatörlerimiz
                güncel sertifikalara sahip olmakta ve her proje öncesinde zemin analizi yapılmaktadır.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikKurallari.map((kural) => (
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ahtapot Vinç Kiralama Hakkında Sıkça Sorulan Sorular</h2>
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
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun ahtapot vinci belirleyelim.
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
