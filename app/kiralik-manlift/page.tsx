import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/kiralik-manlift",
  },
  title: "Kiralık Manlift | Manlift Kiralama Fiyatları 2025",
  description:
    "İstanbul'da profesyonel kiralık manlift hizmetleri. Makaslı, eklemli, örümcek ve sepetli platform kiralama. 7/24 operatör desteği. Hemen teklif alın: 0532 303 90 89",
  keywords: ["kiralık manlift", "manlift kiralama", "sepetli platform", "makaslı platform", "eklemli platform"],
};

const manliftTurleri = [
  {
    icon: "🦾",
    title: "Eklemli Platform",
    slug: "/eklemli-platform",
    desc: "Mafsallı yapısıyla engellerin üzerinden geçerek dar ve zor alanlarda erişim sağlar.",
    ozellikler: ["Elektrikli & Dizel", "Dar alan uyumlu", "Bakım-onarım işleri"],
    renk: "from-blue-500 to-blue-700",
    fiyat: "7.000 – 20.000 TL/gün",
  },
  {
    icon: "⬆️",
    title: "Makaslı Platform",
    slug: "/makasli-platform",
    desc: "Dikey hareket kabiliyetiyle geniş çalışma alanı sunar, aynı anda birden fazla kişi çalışabilir.",
    ozellikler: ["Geniş platform", "Çok kişili çalışma", "İç mekan montaj"],
    renk: "from-yellow-500 to-orange-500",
    fiyat: "4.000 – 15.000 TL/gün",
  },
  {
    icon: "🕷️",
    title: "Örümcek Platform",
    slug: "/orumcek-platform",
    desc: "Hafif yapısı ve esnek ayak sistemiyle hassas zeminlere zarar vermeden çalışır.",
    ozellikler: ["İç & dış mekan", "Hassas zemin uyumlu", "Kompakt tasarım"],
    renk: "from-purple-500 to-purple-700",
    fiyat: "8.000 – 25.000 TL/gün",
  },
  {
    icon: "🚛",
    title: "Sepetli Platform",
    slug: "/sepetli-vinc",
    desc: "Kamyon üzeri monte edilmiş, dış cephe ve yüksek nokta erişimi için ideal çözüm.",
    ozellikler: ["Araç üstü", "Dış cephe", "Yol aydınlatma"],
    renk: "from-green-500 to-green-700",
    fiyat: "5.000 – 30.000 TL/gün",
  },
];

const fiyatTablosu = [
  { tur: "Makaslı Platform", gunluk: "4.000 – 15.000 TL", aylik: "90.000 – 200.000 TL", saatlik: "500 – 1.500 TL" },
  { tur: "Eklemli Platform", gunluk: "7.000 – 20.000 TL", aylik: "150.000 – 300.000 TL", saatlik: "800 – 2.000 TL" },
  { tur: "Örümcek Platform", gunluk: "8.000 – 25.000 TL", aylik: "180.000 – 350.000 TL", saatlik: "1.000 – 2.500 TL" },
  { tur: "Sepetli Platform", gunluk: "5.000 – 30.000 TL", aylik: "120.000 – 280.000 TL", saatlik: "1.500 – 3.000 TL" },
];

const kullanimAlanlari = [
  { icon: "🏗️", baslik: "İnşaat & Şantiye", aciklama: "Bina cephe çalışmaları, montaj ve yüksek nokta erişimi" },
  { icon: "🏭", baslik: "Endüstriyel Tesis", aciklama: "Fabrika içi makine montajı, bakım ve onarım işleri" },
  { icon: "🏬", baslik: "Ticari Yapılar", aciklama: "AVM, otel, hastane elektrik tesisatı ve havalandırma" },
  { icon: "💡", baslik: "Altyapı & Enerji", aciklama: "Yol aydınlatma direkleri ve enerji altyapı çalışmaları" },
  { icon: "🪟", baslik: "Dış Cephe Temizlik", aciklama: "Cam, cephe ve yüksek bina temizlik operasyonları" },
  { icon: "📦", baslik: "Depo & Lojistik", aciklama: "Depo raf sistemleri ve yüksek alan düzenleme işleri" },
];

const guvenlikMaddeleri = [
  "Operatörlerin manlift kullanma ehliyeti ve sertifikaları bulunur",
  "Düzenli bakım ve teknik kontroller zamanında yapılır",
  "Kötü hava şartlarında çalışma durdurulur",
  "Platformun yük kapasitesi asla aşılmaz",
  "Çalışma alanında uyarı işaretleri ve güvenlik bariyerleri bulunur",
  "Tüm güvenlik ekipmanları kullanım öncesinde kontrol edilir",
];

const sorular = [
  {
    soru: "Manlift nedir?",
    cevap: "Manlift, yüksek noktalarda güvenli erişim sağlamak amacıyla kullanılan ve belirli süre için kiralanabilen profesyonel iş makineleridir.",
  },
  {
    soru: "Manlift kiralamak mı satın almak mı avantajlıdır?",
    cevap: "Kiralamak, satın alma, bakım ve sigorta gibi ek masraflardan kurtarır. Projeye uygun platform seçimi esnekliği ve 7/24 teknik destek avantajı sunar.",
  },
  {
    soru: "Manlift kiralarken nelere dikkat edilmeli?",
    cevap: "Çalışma yüksekliği, alan tipi (kapalı/açık), zemin durumu, sigorta kapsamı ve sözleşme şartları dikkatle incelenmelidir.",
  },
  {
    soru: "Operatör hizmeti gerekli midir?",
    cevap: "Evet, sertifikalı operatör hem iş güvenliği hem de verimlilik açısından büyük önem taşır. Operatör ücreti 500 – 5.000 TL arasında değişir.",
  },
  {
    soru: "Kiralık manlift fiyatları neye göre değişir?",
    cevap: "Manlift türü, erişim yüksekliği, kiralama süresi, çalışma lokasyonu ve operatör hizmeti fiyatları belirleyen temel faktörlerdir.",
  },
  {
    soru: "Manlift bakımları kim tarafından yapılır?",
    cevap: "Kiralama firması tüm bakım ve onarım işlemlerini üstlenir. Siz sadece güvenle çalışırsınız.",
  },
];

const ilceler = [
  "Adalar", "Arnavutköy", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy",
  "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu",
  "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan",
  "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal",
  "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri",
  "Şile", "Şişli", "Sultanbeyli", "Sultangazi", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu",
];

function ilceToSlug(ilce: string) {
  return ilce
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
    .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/İ/g, "i");
}

const ilgiliUrunler = [
  { title: "Kiralık Vinç", href: "/kiralik-vinc", icon: "🏗️" },
  { title: "Forklift Kiralama", href: "/forklift-kiralama", icon: "🚜" },
  { title: "Telehandler", href: "/telehandler-kiralama", icon: "🦺" },
  { title: "Sepetli Vinç", href: "/sepetli-vinc", icon: "🚛" },
  { title: "Mobil Vinç", href: "/mobil-vinc", icon: "🔧" },
  { title: "Operatörlü Hizmet", href: "/operatorlu-vinc-hizmeti", icon: "👷" },
];

export default function KiralikManliftPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        {/* decorative grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* yellow glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 opacity-10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-yellow-400 text-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                İstanbul • 7/24 Hizmet
              </span>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Kiralık<br />
                <span className="text-yellow-400">Manlift</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                İnşaattan endüstriye, dış cepheden depolara — her yüksek nokta
                çalışması için doğru platformu kiralayın. Sertifikalı operatör,
                tam sigorta, zamanında teslimat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:05323039089"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-xl text-lg transition text-center"
                >
                  📞 0532 303 90 89
                </a>
                <a
                  href="#fiyatlar"
                  className="border-2 border-gray-600 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition text-center"
                >
                  Fiyatları Gör
                </a>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4", label: "Farklı Platform Tipi", sub: "Makaslı · Eklemli · Örümcek · Sepetli" },
                { value: "40m", label: "Maksimum Yükseklik", sub: "Eklemli platformlarda" },
                { value: "7/24", label: "Teknik Destek", sub: "Kesintisiz operatör hizmeti" },
                { value: "38", label: "İlçede Hizmet", sub: "İstanbul'un tamamında" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur">
                  <div className="text-3xl font-black text-yellow-400 mb-1">{s.value}</div>
                  <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                  <div className="text-gray-500 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM TÜRLERİ ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Platform Çeşitleri</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">Hangi Manlift Size Uygun?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Çalışma alanınıza ve projenizin ihtiyaçlarına göre en doğru platformu seçin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {manliftTurleri.map((m) => (
              <Link
                key={m.slug}
                href={m.slug}
                className="group relative border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${m.renk}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{m.icon}</div>
                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                      {m.fiyat}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-yellow-600 transition">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 mb-5 leading-relaxed">{m.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.ozellikler.map((o) => (
                      <span key={o} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {o}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-yellow-600 font-bold text-sm group-hover:gap-3 transition-all">
                    Detaylı İncele <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── KULLANIM ALANLARI ── */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Kullanım Alanları</span>
            <h2 className="text-4xl font-black mt-2 mb-4">Her Sektörde Güvenli Erişim</h2>
            <p className="text-gray-400 text-lg">
              Manliftler inşaattan enerjiye, lojistikten ticarete geniş bir alanda kullanılır.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kullanimAlanlari.map((k) => (
              <div
                key={k.baslik}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 hover:bg-white/10 transition"
              >
                <div className="text-4xl mb-4">{k.icon}</div>
                <h3 className="text-lg font-black mb-2">{k.baslik}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{k.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FİYAT TABLOSU ── */}
      <section id="fiyatlar" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Güncel Fiyatlar</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">Kiralık Manlift Fiyatları 2025</h2>
            <p className="text-gray-500 text-lg">
              Fiyatlar platform türü, yükseklik ve kiralama süresine göre değişmektedir.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-black">Platform Türü</th>
                  <th className="text-left px-6 py-4 font-black">Saatlik</th>
                  <th className="text-left px-6 py-4 font-black">Günlük</th>
                  <th className="text-left px-6 py-4 font-black">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr key={f.tur} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-bold text-gray-900">{f.tur}</td>
                    <td className="px-6 py-4 text-gray-600">{f.saatlik}</td>
                    <td className="px-6 py-4 text-gray-600">{f.gunluk}</td>
                    <td className="px-6 py-4 text-gray-600">{f.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-4">
            {fiyatTablosu.map((f) => (
              <div key={f.tur} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h4 className="font-black text-gray-900 mb-3">{f.tur}</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: "Saatlik", val: f.saatlik },
                    { label: "Günlük", val: f.gunluk },
                    { label: "Aylık", val: f.aylik },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-2">
                      <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                      <div className="text-xs font-bold text-gray-700">{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            * Operatör hizmeti için 500 – 5.000 TL ek ücret uygulanabilir. Kesin fiyat için lütfen arayın.
          </p>

          {/* CTA */}
          <div className="mt-10 bg-yellow-400 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-1">Projenize özel teklif alın</h3>
              <p className="text-gray-700">Uzmanlarımız en uygun platformu ve fiyatı sizin için belirlesin.</p>
            </div>
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl text-lg transition whitespace-nowrap"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* ── SÜREÇ ADIMLARI ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Kiralama Süreci</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">4 Adımda Kiralama</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "İhtiyaç Analizi", desc: "Çalışma yüksekliği, alan tipi ve süreyi belirleyin." },
              { num: "02", title: "Platform Seçimi", desc: "Size en uygun manlift tipini uzmanlarımızla seçin." },
              { num: "03", title: "Sözleşme", desc: "Sigorta, güvenlik ve teslimat şartlarını netleştirin." },
              { num: "04", title: "Teslim & Operasyon", desc: "Zamanında teslim, sertifikalı operatör desteği." },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="text-7xl font-black text-gray-100 leading-none mb-2">{step.num}</div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GÜVENLİK ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">İş Güvenliği</span>
              <h2 className="text-4xl font-black mt-2 mb-6">Güvenlik Önlemleri</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Manlift operasyonlarında iş güvenliği en kritik unsurdur. Tüm ekipmanlarımız
                düzenli bakımdan geçirilmiş ve sertifikalı operatörlerimiz görev başındadır.
              </p>
              <a
                href="tel:05323039089"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-xl text-lg transition"
              >
                Güvenli Kiralama İçin Arayın
              </a>
            </div>
            <div className="grid gap-3">
              {guvenlikMaddeleri.map((m, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Sık Sorulanlar</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">Merak Edilenler</h2>
          </div>
          <div className="grid gap-4">
            {sorular.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-black text-gray-900 mb-2">❓ {s.soru}</h3>
                <p className="text-gray-500 leading-relaxed">{s.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── İLGİLİ ÜRÜNLER ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Diğer Hizmetler</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2 mb-4">İlgili Ürün ve Hizmetler</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {ilgiliUrunler.map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="group bg-gray-50 hover:bg-yellow-400 border border-gray-100 hover:border-yellow-400 rounded-2xl p-5 text-center transition"
              >
                <div className="text-3xl mb-2">{u.icon}</div>
                <div className="text-sm font-bold text-gray-700 group-hover:text-black">{u.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── İLÇELER ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">İstanbul&apos;un Tüm İlçelerinde Manlift Kiralama</h2>
            <p className="text-gray-500">Size en yakın bölgeden hızlı teslimat sağlıyoruz.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {ilceler.map((ilce) => (
              <Link
                key={ilce}
                href={`/${ilceToSlug(ilce)}-kiralik-manlift`}
                className="text-center text-sm text-gray-600 hover:text-yellow-600 hover:underline py-2 px-2 rounded-lg hover:bg-yellow-50 transition"
              >
                {ilce}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SON CTA ── */}
      <section className="py-20 px-4 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-6">🏗️</div>
          <h2 className="text-4xl font-black mb-4">Projeniz İçin Hemen Teklif Alın</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            25 yıllık tecrübemiz ve geniş filo kapasitemizle en uygun manlift çözümünü
            sunmaya hazırız. 7/24 hizmetinizdeyiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-5 rounded-xl text-xl transition"
            >
              📞 0532 303 90 89
            </a>
            <Link
              href="/iletisim"
              className="border-2 border-gray-700 hover:border-white text-white font-bold px-10 py-5 rounded-xl text-xl transition"
            >
              Mesaj Gönder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
