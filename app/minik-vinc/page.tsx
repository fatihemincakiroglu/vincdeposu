import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/minik-vinc",
  },
  title: "Minik Vinç | Kompakt Elektrikli Vinç Sistemleri ve Fiyatları",
  description:
    "Minik vinç nedir, modelleri nelerdir, fiyatları ne kadar? Zincirli, halatlı ve akülü minik vinç seçenekleri, teknik özellikler ve montaj hizmetleri. 7/24 hizmet: 0532 303 90 89",
};

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://example.com/minik-vinc#article",
      headline: "Minik Vinç: Modelleri, Teknik Özellikleri ve Fiyatları",
      description:
        "Dar alanlarda ve hafif yük taşıma işlemlerinde kullanılan minik vinç sistemleri hakkında kapsamlı rehber.",
      image: "https://example.com/images/minik-vinc-hero.jpg",
      author: { "@type": "Organization", name: "Vinç Deposu" },
      publisher: {
        "@type": "Organization",
        name: "Vinç Deposu",
        logo: { "@type": "ImageObject", url: "https://example.com/logo.png" },
      },
      datePublished: "2026-01-01",
      dateModified: "2026-06-01",
    },
    {
      "@type": "FAQPage",
      "@id": "https://example.com/minik-vinc#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Minik vinç nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minik vinç, dar alanlarda ve hafif yük taşıma işlemlerinde kullanılan kompakt yapılı elektrikli vinç sistemidir. Genellikle 125 kg ile 1000 kg arasında kapasite sunar.",
          },
        },
        {
          "@type": "Question",
          name: "Minik vinç kaç kg taşır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minik vinçler genellikle 125 kg ile 1000 kg arasında taşıma kapasitesi sunar. Model ve motor tipine göre bu aralık değişebilir.",
          },
        },
        {
          "@type": "Question",
          name: "Minik vinç fiyatları ne kadardır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minik vinç fiyatları; kapasite, marka, motor tipi (zincirli, halatlı, akülü) ve aksesuar seçeneklerine göre değişmektedir. Güncel fiyat teklifi için bizimle iletişime geçebilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Minik vinç kurulumu ne kadar sürer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minik vinçlerin kurulumu, tavan tipi ve uygulama yerine göre genellikle yarım gün ile 1 gün arasında tamamlanır. Uzman ekibimiz montajı hızlı ve güvenli biçimde gerçekleştirir.",
          },
        },
        {
          "@type": "Question",
          name: "Minik vinç hangi alanlarda kullanılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Küçük atölyeler, servis garajları, depo rafları, imalathane köşe noktaları ve düşük tavan yüksekliğine sahip çalışma alanlarında yaygın biçimde kullanılır.",
          },
        },
        {
          "@type": "Question",
          name: "Minik vinç ile büyük vinç arasındaki fark nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minik vinçler taşıma kapasitesi, boyut, kurulum kolaylığı ve maliyet açısından büyük vinçlere göre önemli avantajlar sunar. Dar alanlara ve düşük tavan yüksekliklerine uyum sağlayabilirler.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://example.com/minik-vinc#product",
      name: "Minik Vinç Satış ve Kiralama",
      description: "Zincirli, halatlı ve akülü minik vinç modelleri. Satış, kiralama ve montaj hizmetleri.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "TRY",
        lowPrice: "15000",
        offerCount: "3",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://example.com" },
        { "@type": "ListItem", position: 2, name: "Vinç Sistemleri", item: "https://example.com/vinc" },
        { "@type": "ListItem", position: 3, name: "Minik Vinç", item: "https://example.com/minik-vinc" },
      ],
    },
  ],
};

// ─── Veri ─────────────────────────────────────────────────────────────────────

const minikVincModelleri = [
  {
    icon: "⛓️",
    title: "Zincirli Minik Vinç",
    desc: "Çelik zincir mekanizmasıyla çalışan, dayanıklı ve uzun ömürlü modeldir. Yağlı veya tozlu ortamlarda halatlı modele göre daha güvenilirdir.",
    kapasite: "125 – 1.000 kg",
    href: "/zincirli-minik-vinc",
    ozellikler: ["Yüksek dayanıklılık", "Yağlı ortam uyumu", "Uzun ömür"],
  },
  {
    icon: "🪢",
    title: "Halatlı Minik Vinç",
    desc: "Çelik halat tamburlu sistemiyle çalışan, yüksek kaldırma hızı sunan modeldir. Hassas yük konumlandırması gereken uygulamalar için tercih edilir.",
    kapasite: "250 – 1.000 kg",
    href: "/halatli-minik-vinc",
    ozellikler: ["Yüksek hız", "Hassas konumlama", "Düzgün sarım"],
  },
  {
    icon: "🔋",
    title: "Akülü Minik Vinç",
    desc: "Elektrik bağlantısı bulunmayan alanlarda şarj edilebilir aküyle çalışan, taşınabilir ve esnek modeldir. İnşaat sahaları ve geçici kullanım için idealdir.",
    kapasite: "125 – 500 kg",
    href: "/akulu-minik-vinc",
    ozellikler: ["Kablosuz çalışma", "Taşınabilir", "Kolay kurulum"],
  },
];

const kullanımAlanlari = [
  { icon: "🔧", title: "Küçük Atölye", desc: "Tezgah başı yük kaldırma ve parça taşıma işlemleri" },
  { icon: "🚗", title: "Servis Garajı", desc: "Motor ve şanzıman gibi ağır parçaların kaldırılması" },
  { icon: "📦", title: "Depo Rafları", desc: "Yüksek raflara ürün yerleştirme ve alma işlemleri" },
  { icon: "🏭", title: "İmalathaneler", desc: "Dar köşe noktalarında malzeme taşıma ve besleme" },
  { icon: "🏗️", title: "İnşaat Sahası", desc: "Küçük ölçekli malzeme ve ekipman kaldırma" },
  { icon: "🌾", title: "Tarım & Hayvancılık", desc: "Yem, gübre ve ekipman taşıma operasyonları" },
];

const teknikOzellikler = [
  { label: "Kapasite Aralığı", deger: "125 – 1.000 kg" },
  { label: "Kaldırma Yüksekliği", deger: "3 – 12 m" },
  { label: "Motor Gücü", deger: "0,37 – 2,2 kW" },
  { label: "Besleme Gerilimi", deger: "220V / 380V AC veya 12–24V DC (akülü)" },
  { label: "Kaldırma Hızı", deger: "4 – 12 m/dak" },
  { label: "Koruma Sınıfı", deger: "IP44 – IP55" },
  { label: "Çalışma Sıcaklığı", deger: "-10°C / +40°C" },
  { label: "Standart", deger: "CE, EN 13157" },
];

const fiyatTablosu = [
  { model: "125 kg Zincirli Minik Vinç", satin: "15.000 TL~", kiralama: "800 TL / gün" },
  { model: "250 kg Zincirli Minik Vinç", satin: "22.000 TL~", kiralama: "1.100 TL / gün" },
  { model: "500 kg Halatlı Minik Vinç", satin: "35.000 TL~", kiralama: "1.500 TL / gün" },
  { model: "1000 kg Halatlı Minik Vinç", satin: "55.000 TL~", kiralama: "2.200 TL / gün" },
  { model: "500 kg Akülü Minik Vinç", satin: "42.000 TL~", kiralama: "1.800 TL / gün" },
  { model: "Montaj ve Devreye Alma", satin: "Teklif", kiralama: "—" },
];

const montajAdimlari = [
  { no: "01", title: "Tavan Etüdü", desc: "Tavan tipi (beton, çelik kiriş, monoray) ve taşıma kapasitesi ölçülür." },
  { no: "02", title: "Ekipman Seçimi", desc: "Yük, tavan yüksekliği ve kullanım sıklığına göre uygun model belirlenir." },
  { no: "03", title: "Ankraj & Askı", desc: "Tavan tipiyle uyumlu askı traversi veya ankraj sistemi montajı yapılır." },
  { no: "04", title: "Vinç Montajı", desc: "Minik vinç traverse veya monoray üzerine güvenli biçimde bağlanır." },
  { no: "05", title: "Elektrik Bağlantısı", desc: "Enerji hattı ve kumanda kablosu bağlanır, acil stop sistemi devreye alınır." },
  { no: "06", title: "Yük Testi & Teslim", desc: "%110 kapasite ile yük testi yapılır, kullanım eğitimi verilir." },
];

const bakimMaddeleri = [
  { periyot: "Günlük", kontroller: ["Görsel hasar kontrolü", "Kanca kilit kontrolü", "Kumanda düğmeleri testi", "Halat/zincir kontrolü"] },
  { periyot: "Aylık", kontroller: ["Motor gürültü ve ısı kontrolü", "Fren ayar kontrolü", "Yağlama noktaları", "Elektrik bağlantıları"] },
  { periyot: "Yıllık", kontroller: ["Tam yapısal muayene", "Halat veya zincir değişimi (gerekirse)", "Yük testi (%110 SWL)", "Periyodik muayene belgesi"] },
];

const farklar = [
  { kriter: "Taşıma Kapasitesi", minik: "125 – 1.000 kg", buyuk: "1 – 900+ ton" },
  { kriter: "Boyut", minik: "Kompakt, az yer kaplar", buyuk: "Büyük yapı, geniş alan gerektirir" },
  { kriter: "Kurulum Süresi", minik: "Yarım gün – 1 gün", buyuk: "Birkaç gün – haftalar" },
  { kriter: "Maliyet", minik: "Düşük", buyuk: "Yüksek" },
  { kriter: "Tavan Yüksekliği", minik: "Düşük tavanlara uygun", buyuk: "Yüksek tavan gerektirir" },
  { kriter: "Taşınabilirlik", minik: "Taşınabilir (akülü model)", buyuk: "Sabit kurulum" },
];

const sss = [
  {
    soru: "Minik vinç nedir?",
    cevap: "Dar alanlarda ve hafif yük taşıma işlemlerinde kullanılan kompakt yapılı elektrikli vinç sistemidir. Genellikle 125 kg ile 1000 kg arasında kapasite sunar ve düşük tavan yüksekliklerine de uygundur.",
  },
  {
    soru: "Minik vinç kaç kg taşır?",
    cevap: "Minik vinçler genellikle 125 kg ile 1000 kg arasında taşıma kapasitesi sunar. Model ve motor tipine göre bu aralık değişebilir. Doğru kapasite seçimi için taşınacak maksimum yüke %20 güvenlik payı eklemeniz önerilir.",
  },
  {
    soru: "Zincirli mi halatlı mı tercih edilmeli?",
    cevap: "Yağlı, tozlu veya nemli ortamlar için zincirli modeller daha dayanıklıdır. Hassas konumlama ve yüksek kaldırma hızı gerektiren uygulamalarda ise halatlı modeller öne çıkar.",
  },
  {
    soru: "Minik vinç montajı ne kadar sürer?",
    cevap: "Tavan tipine ve uygulamaya göre genellikle yarım gün ile 1 tam gün arasında tamamlanır. Uzman ekibimiz montaj öncesi tavan etüdü yaparak en uygun askı sistemini belirler.",
  },
  {
    soru: "Minik vinç için CE belgesi gerekli midir?",
    cevap: "Evet. Türkiye'de tüm kaldırma ekipmanlarının CE belgeli olması 6331 sayılı İş Sağlığı ve Güvenliği Kanunu gereği zorunludur. Satın aldığınız minik vincin EN 13157 standardına uygunluk belgesini talep edin.",
  },
  {
    soru: "Minik vinç fiyatları ne kadardır?",
    cevap: "Fiyatlar kapasite, model (zincirli, halatlı, akülü), marka ve aksesuar seçeneklerine göre değişir. 125 kg zincirli modeller yaklaşık 15.000 TL'den başlarken 1000 kg halatlı modeller 55.000 TL ve üzerine çıkabilir.",
  },
];

// ─── Bileşen ──────────────────────────────────────────────────────────────────

export default function MinikVincPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="bg-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                ⛓️ Minik Vinç Rehberi 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Minik Vinç:<br />{" "}
                <span className="text-yellow-400">Kompakt Güç,</span><br />{" "}
                Büyük Kolaylık
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Dar alanlarda ve hafif yük taşıma işlemlerinde kullanılan kompakt yapılı elektrikli vinç sistemleri.
                Zincirli, halatlı ve akülü modeller, montaj ve servis hizmetleriyle birlikte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:05323039089"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
                >
                  📞 Teklif Al: 0532 303 90 89
                </a>
                <a
                  href="#minik-vinc-modelleri"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
                >
                  Modelleri İncele ↓
                </a>
              </div>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { rakam: "125", birim: "kg~", label: "Başlangıç Kapasitesi" },
                { rakam: "1.000", birim: "kg", label: "Maks. Kapasite" },
                { rakam: "3–12", birim: "m", label: "Kaldırma Yüksekliği" },
                { rakam: "1", birim: "gün", label: "Hızlı Kurulum" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-yellow-400">
                    {s.rakam} <span className="text-lg">{s.birim}</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Minik Vinç Nedir? ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Tanım</p>
                <h2 className="text-4xl font-black text-gray-900 mb-6">Minik Vinç Nedir?</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Minik vinç, dar alanlarda ve hafif yük taşıma işlemlerinde kullanılan kompakt yapılı elektrikli
                  vinç sistemidir. Büyük endüstriyel vinçlerin ulaşamadığı köşe noktalarına, alçak tavanlı
                  mekânlara ve küçük çalışma alanlarına kolayca kurulabilmesi en temel özelliğidir.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Genellikle 125 kg ile 1.000 kg arasında kapasite sunan minik vinçler; zincirli, halatlı ve
                  akülü olmak üzere üç temel model grubuna ayrılır. Elektrik bağlantısı gerektiren modellerin
                  yanı sıra akülü modeller şarjla çalışarak bağımsız hareket imkânı sunar.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Küçük atölyelerden servis garajlarına, depo raflarından imalathanelere kadar geniş bir
                  kullanım alanına sahip olan minik vinçler, hem satın alma hem de kiralama seçeneğiyle
                  projenize uygun şekilde temin edilebilir.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-200 to-gray-300">
                  <span className="text-7xl">⛓️</span>
                  <span className="text-gray-500 font-semibold text-sm">Minik Vinç Genel Görünüm</span>
                  <span className="text-gray-400 text-xs">Kompakt Elektrikli Vinç Sistemi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Modeller ──────────────────────────────────────────────────────── */}
        <section id="minik-vinc-modelleri" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Modeller</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Minik Vinç Modelleri</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Zincirli, halatlı ve akülü modeller farklı çalışma koşullarına göre tercih edilebilir.
                Ortam ve kullanım sıklığınıza göre en uygun modeli seçin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {minikVincModelleri.map((v) => (
                <Link
                  key={v.title}
                  href={v.href}
                  className="group p-6 border-2 border-gray-100 rounded-2xl hover:border-yellow-400 hover:shadow-lg transition flex flex-col bg-white"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{v.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.ozellikler.map((o) => (
                      <span key={o} className="text-xs bg-yellow-50 text-yellow-700 font-medium px-2 py-1 rounded-full border border-yellow-200">
                        {o}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Kapasite: <strong className="text-gray-700">{v.kapasite}</strong></span>
                    <span className="text-yellow-600 font-bold text-sm group-hover:underline">İncele →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Teknik Özellikler ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Teknik Veriler</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Teknik Özellikler ve Kapasite Bilgileri</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Genellikle 125 kg ile 1.000 kg arasında kapasite sunan minik vinçler, düşük tavan yüksekliklerine
                de uygundur.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {teknikOzellikler.map((t) => (
                <div key={t.label} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 border border-gray-100">
                  <span className="text-gray-600 font-medium text-sm">{t.label}</span>
                  <span className="text-gray-900 font-black text-sm">{t.deger}</span>
                </div>
              ))}
            </div>

            {/* Kapasite seçim kartları */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { kapasite: "125 – 250 kg", kullanim: "Hafif sınıf", aciklama: "Küçük parça, alet kutusu ve hafif malzeme taşıma. Servis garajı ve küçük atölyeler için idealdir." },
                { kapasite: "250 – 500 kg", kullanim: "Orta sınıf", aciklama: "Motor, şanzıman ve makine parçaları gibi orta ağırlıklı yükler. İmalathanelerin en yaygın tercihi." },
                { kapasite: "500 – 1.000 kg", kullanim: "Ağır sınıf", aciklama: "Kalıp, pres ve ağır ekipman taşıma. Depo ve sanayi tesisleri için uygundur." },
              ].map((k) => (
                <div key={k.kapasite} className="p-6 bg-yellow-50 border border-yellow-100 rounded-2xl">
                  <div className="inline-block bg-yellow-400 text-black font-black text-xs px-3 py-1 rounded-full mb-3">{k.kullanim}</div>
                  <h3 className="font-black text-gray-900 mb-2">{k.kapasite}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{k.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kullanım Alanları ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kullanım</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Minik Vinç Kullanım Alanları</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Küçük atölyeler, servis garajları, depo rafları ve imalathane köşe noktaları gibi dar çalışma
                alanlarında yaygın olarak kullanılır.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {kullanımAlanlari.map((a) => (
                <div key={a.title} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-yellow-300 transition">
                  <div className="text-3xl shrink-0">{a.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                    <p className="text-gray-500 text-sm">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Detay paragraf */}
            <div className="mt-10 p-8 bg-white border border-gray-100 rounded-2xl">
              <h3 className="text-xl font-black text-gray-900 mb-4">Minik Vinç Neden Dar Alanlarda Bu Kadar Etkili?</h3>
              <p className="text-gray-600 leading-relaxed">
                Büyük endüstriyel vinçler minimum 3–5 metre tavan yüksekliği ve geniş manevra alanı
                gerektirirken, minik vinçler 2,5 metrelik tavan yüksekliğine bile uyum sağlayabilir.
                Kompakt gövde yapısı sayesinde mevcut kiriş veya monoray sistemine kolayca asılarak
                çalışmaya başlar. Bu özellik özellikle eski yapı stoğundaki atölye ve garajlarda büyük
                avantaj sağlar. Ayrıca akülü modeller aydınlatma ve elektrik hattı bulunmayan alanlarda
                da kesintisiz çalışabilir.
              </p>
            </div>
          </div>
        </section>

        {/* ── Minik Vinç vs Büyük Vinç ──────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Karşılaştırma</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Minik Vinç ile Büyük Vinç Arasındaki Farklar
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Taşıma kapasitesi, boyut, kurulum kolaylığı ve maliyet açısından büyük vinçlere göre
                önemli avantajlar sunar.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left px-6 py-4 font-bold">Kriter</th>
                      <th className="text-center px-4 py-4 font-bold text-yellow-400">Minik Vinç</th>
                      <th className="text-center px-4 py-4 font-bold">Büyük / Endüstriyel Vinç</th>
                    </tr>
                  </thead>
                  <tbody>
                    {farklar.map((f, i) => (
                      <tr key={f.kriter} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="px-6 py-4 font-medium text-gray-700">{f.kriter}</td>
                        <td className="text-center px-4 py-4 text-yellow-700 font-semibold">{f.minik}</td>
                        <td className="text-center px-4 py-4 text-gray-500">{f.buyuk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fiyatlar ──────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Minik Vinç Fiyatları</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Kapasite, marka, motor tipi ve aksesuar seçeneklerine göre fiyatlar değişmektedir;
                detaylı teklif için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left px-6 py-4 font-bold">Model</th>
                      <th className="text-center px-4 py-4 font-bold">Satın Alma</th>
                      <th className="text-center px-4 py-4 font-bold">Kiralama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fiyatTablosu.map((f, i) => (
                      <tr key={f.model} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="px-6 py-4 font-medium text-gray-800">{f.model}</td>
                        <td className="text-center px-4 py-4 text-yellow-700 font-bold">{f.satin}</td>
                        <td className="text-center px-4 py-4 text-gray-600">{f.kiralama}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              * Fiyatlara KDV dahil değildir. Montaj ve nakliye ayrıca ücretlendirilir. Güncel fiyat için teklif alınız.
            </p>

            {/* Fiyatı etkileyen faktörler */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {[
                "Kaldırma kapasitesi (125 kg ile 1.000 kg arasındaki fark)",
                "Model tipi: zincirli, halatlı veya akülü",
                "Motor gücü ve kaldırma hızı",
                "Çift hız veya frekans invertörü seçeneği",
                "Tavan askı sistemi ve monoray uzunluğu",
                "Marka ve menşei (yerli / ithal)",
              ].map((f) => (
                <div key={f} className="flex gap-3 items-start bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-yellow-600 font-bold text-lg shrink-0">●</span>
                  <p className="text-gray-700 text-sm">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Montaj ve Kurulum ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kurulum</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Montaj ve Kurulum Süreci</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Tavan tipi ve taşıma kapasitesine göre belirlenen montaj planı, uzman ekibimiz tarafından
                hızlı ve güvenli biçimde uygulanır.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {montajAdimlari.map((a) => (
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

        {/* ── Bakım & Servis ────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-yellow-400">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Bakım</p>
                <h2 className="text-4xl font-black text-gray-900 mb-4">Bakım ve Servis Hizmetleri</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Minik vinçlerde düzenli bakım; motor, fren sistemi ve kanca kontrollerini kapsayarak
                  güvenli çalışmayı garanti altına alır. 6331 sayılı İSG Kanunu kapsamında yıllık
                  periyodik muayene zorunludur.
                </p>
                <div className="space-y-3">
                  {[
                    "Sertifikalı vinç teknisyenleri tarafından bakım yapılır",
                    "Türkiye genelinde servis ağı mevcuttur",
                    "Yedek parça temin garantisi verilmektedir",
                    "Periyodik muayene belgesi düzenlenir",
                    "Arıza anında 24 saat içinde teknik destek sağlanır",
                  ].map((m) => (
                    <div key={m} className="flex gap-3 items-start bg-white/60 rounded-xl p-4">
                      <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                      <p className="text-gray-800 text-sm">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {bakimMaddeleri.map((b) => (
                  <div key={b.periyot} className="bg-white/80 rounded-2xl p-5">
                    <div className="inline-block bg-yellow-400 text-black font-black text-xs px-3 py-1 rounded-full mb-3">
                      {b.periyot} Bakım
                    </div>
                    <ul className="space-y-1">
                      {b.kontroller.map((k) => (
                        <li key={k} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-yellow-600 font-bold">✓</span> {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Minik Vinç Hakkında Sıkça Sorulan Sorular
              </h2>
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

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gray-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-4">Minik Vinç İçin Teklif Alın</h2>
            <p className="text-gray-400 mb-8 text-lg">
              7/24 hizmetinizdeyiz. Hemen arayın, ihtiyacınıza en uygun minik vinç modelini birlikte belirleyelim.
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
    </>
  );
}
