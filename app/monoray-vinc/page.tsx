import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Monoray Vinç Sistemleri – Güvenli, Verimli ve Uzun Ömürlü Çözümler",
  description:
    "Monoray vinç nedir, modelleri, teknik özellikleri, sektörel kullanım alanları, CE standartları ve montaj gereksinimleri. Detaylı rehber ve fiyat bilgisi: 0532 303 90 89",
};

// ── JSON-LD Schema ──────────────────────────────────────────────────────────
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://example.com/monoray-vinc#article",
      headline: "Monoray Vinç Sistemleri – Güvenli, Verimli ve Uzun Ömürlü Çözümler",
      description:
        "Monoray vinç sistemleri hakkında kapsamlı rehber: modeller, teknik özellikler, sektörel kullanım, CE standartları ve montaj gereksinimleri.",
      image: "https://example.com/images/monoray-vinc-hero.jpg",
      datePublished: "2026-01-01",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "VinçPro" },
      publisher: {
        "@type": "Organization",
        name: "VinçPro",
        logo: { "@type": "ImageObject", url: "https://example.com/logo.png" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Monoray vinç nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Monoray vinç, tek bir ray (monoray) üzerinde hareket eden elektrikli zincir veya halatlı vinç sistemidir. Fabrika içi malzeme taşıma, montaj hattı beslemesi ve depo operasyonlarında yaygın olarak kullanılır.",
          },
        },
        {
          "@type": "Question",
          name: "Monoray vinç ile köprülü vinç arasındaki fark nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Monoray vinç tek ray üzerinde doğrusal hareket sağlarken, köprülü vinç iki ray üzerindeki köprü kirişi sayesinde iki boyutlu alan taraması yapabilir. Monoray sistemler daha düşük maliyet ve kolay kurulum avantajı sunar.",
          },
        },
        {
          "@type": "Question",
          name: "Monoray vinç kaç kg kaldırır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standart monoray vinçler 250 kg'dan 10 ton'a kadar kapasite sunar. Özel uygulamalar için 20 ton ve üzeri çözümler de üretilebilmektedir.",
          },
        },
        {
          "@type": "Question",
          name: "Monoray vinç kurulumu ne kadar sürer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basit doğrusal monoray sistemleri 1–3 günde kurulabilir. Kavisli veya çok istasyonlu karmaşık hatlar için süre 1–2 haftaya uzayabilir.",
          },
        },
        {
          "@type": "Question",
          name: "CE belgesi zorunlu mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. AB ve Türkiye mevzuatı kapsamında tüm kaldırma ekipmanlarının CE belgesi taşıması zorunludur. Monoray vinç sistemleri FEM 1.001 ve ISO 4301 standartlarına göre sınıflandırılır.",
          },
        },
        {
          "@type": "Question",
          name: "Monoray vinç bakımı nasıl yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Günlük görsel kontrol, aylık ray ve tahrik sistemi yağlaması, 6 ayda bir fren ve limit switch testi ve yıllık kapsamlı yük testi uygulanmalıdır.",
          },
        },
        {
          "@type": "Question",
          name: "Hangi sektörlerde monoray vinç kullanılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Otomotiv, metal işleme, kimya, gıda, tekstil, depolama ve lojistik sektörlerinde üretim hattı besleme, malzeme taşıma ve montaj operasyonlarında yaygın olarak kullanılır.",
          },
        },
        {
          "@type": "Question",
          name: "Tavan yükü hesaplaması nasıl yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tavan yükü; vincin nominal kapasitesi, hoist ağırlığı, ray ve askı yapısı ağırlıkları ile dinamik katsayı (genellikle 1,25–1,5) çarpılarak hesaplanır. Bu hesabı mutlaka yetkili bir mühendise yaptırın.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      name: "Monoray Vinç Sistemi",
      description:
        "Endüstriyel monoray vinç sistemleri: 250 kg – 10 ton kapasite, CE belgeli, FEM/ISO uyumlu.",
      brand: { "@type": "Brand", name: "VinçPro" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "TRY",
        lowPrice: "45000",
        highPrice: "850000",
        offerCount: "5",
      },
    },
  ],
};

// ── Veri ────────────────────────────────────────────────────────────────────

const modeller = [
  {
    icon: "⚙️",
    title: "Hafif Seri – 250 kg / 500 kg",
    kapasite: "250 – 500 kg",
    aciklik: "2 – 8 m",
    hiz: "0–16 m/dk (kaldırma)",
    kullanim: "Montaj hattı, küçük depo, takım atölyeleri",
    ozellikler: ["Kompakt motor", "Düşük tavan ihtiyacı", "Hızlı montaj"],
    etiket: null,
  },
  {
    icon: "🔩",
    title: "Orta Seri – 1 ton / 2 ton",
    kapasite: "1.000 – 2.000 kg",
    aciklik: "4 – 16 m",
    hiz: "0–12 m/dk (kaldırma)",
    kullanim: "Metal imalat, otomotiv yan sanayi, tekstil",
    ozellikler: ["Çift hız seçeneği", "Uzaktan kumanda", "FEM 3m sınıfı"],
    etiket: "En Çok Tercih",
  },
  {
    icon: "🏭",
    title: "Ağır Seri – 3 ton / 5 ton",
    kapasite: "3.000 – 5.000 kg",
    aciklik: "6 – 20 m",
    hiz: "0–8 m/dk (kaldırma)",
    kullanim: "Makine imalat, kimya, boru imalat tesisleri",
    ozellikler: ["Frekans invertörü", "Aşırı yük koruma", "FEM 4m sınıfı"],
    etiket: null,
  },
  {
    icon: "🔧",
    title: "Ağır Sanayi – 8 ton / 10 ton",
    kapasite: "8.000 – 10.000 kg",
    aciklik: "8 – 25 m",
    hiz: "0–5 m/dk (kaldırma)",
    kullanim: "Ağır makine, pres ve kalıp sanayi, tersane",
    ozellikler: ["Çift halat sistemi", "Sismik sensör", "FEM 5m sınıfı"],
    etiket: "Ağır Sanayi",
  },
];

const sektorler = [
  {
    icon: "🚗",
    title: "Otomotiv Sektörü",
    desc: "Motor, şanzıman ve gövde parçalarının montaj hatları arasında hızlı ve hassas taşınması. Kavisli ray sistemleriyle farklı iş istasyonları arasında kesintisiz akış.",
    detaylar: ["Motor bloğu taşıma", "Karoseri montaj besleme", "Kalıp değişim operasyonları"],
  },
  {
    icon: "⚙️",
    title: "Metal İşleme",
    desc: "CNC tezgâhı, pres ve bükme makineleri arasında ağır malzeme hareketi. Isıl işlem fırını besleme hatlarında yüksek sıcaklık toleranslı özel modeller.",
    detaylar: ["Sac ve profil taşıma", "Pres kalıp değişimi", "Işıl işlem hattı besleme"],
  },
  {
    icon: "🧪",
    title: "Kimya & Petrokimya",
    desc: "Parlayıcı ve patlayıcı ortamlarda ATEX onaylı patlamaya karşı korumalı monoray sistemleri. Kimyasal dirençli özel kaplama seçenekleri.",
    detaylar: ["ATEX onaylı modeller", "Asit dayanımlı kaplama", "Kapalı ortam güvenliği"],
  },
  {
    icon: "📦",
    title: "Depo & Lojistik",
    desc: "Yüksek raflı depolarda palet ve koli taşıma, sevkiyat bantlarına besleme. Çok noktalı kavisli ray sistemleriyle depo içi otomasyon.",
    detaylar: ["Raf arası taşıma", "Sevkiyat hattı besleme", "Otomasyon entegrasyonu"],
  },
  {
    icon: "🔬",
    title: "Üretim & Montaj Hatları",
    desc: "Seri üretim tesislerinde iş istasyonları arası sürekli malzeme akışı. PLC entegrasyonu ile tam otomasyon ve barkod bazlı yönlendirme.",
    detaylar: ["PLC kontrolü", "Barkod yönlendirme", "İstasyon bazlı duraklama"],
  },
  {
    icon: "🏗️",
    title: "İnşaat Prefabrik",
    desc: "Prefabrik beton eleman ve çelik konstrüksiyon üretim tesislerinde kalıp ve eleman taşıma. Açık alan uygulamaları için IP65 korumalı modeller.",
    detaylar: ["Kalıp taşıma", "Çelik profil besleme", "IP65 dış mekan modeli"],
  },
];

const kapasiteTablosu = [
  { kapasite: "250 kg", aciklik: "2 – 8 m", kaldimaYuksekligi: "3 – 6 m", motor: "0,5 kW", tavsiyeRay: "HEA 100" },
  { kapasite: "500 kg", aciklik: "4 – 12 m", kaldimaYuksekligi: "3 – 8 m", motor: "0,8 kW", tavsiyeRay: "HEA 120" },
  { kapasite: "1.000 kg", aciklik: "4 – 16 m", kaldimaYuksekligi: "3 – 10 m", motor: "1,5 kW", tavsiyeRay: "HEA 140" },
  { kapasite: "2.000 kg", aciklik: "6 – 20 m", kaldimaYuksekligi: "3 – 12 m", motor: "3,0 kW", tavsiyeRay: "IPE 200" },
  { kapasite: "3.200 kg", aciklik: "6 – 22 m", kaldimaYuksekligi: "4 – 14 m", motor: "4,5 kW", tavsiyeRay: "IPE 240" },
  { kapasite: "5.000 kg", aciklik: "8 – 25 m", kaldimaYuksekligi: "4 – 16 m", motor: "7,5 kW", tavsiyeRay: "IPE 300" },
  { kapasite: "8.000 kg", aciklik: "10 – 25 m", kaldimaYuksekligi: "4 – 18 m", motor: "11 kW", tavsiyeRay: "IPE 360" },
  { kapasite: "10.000 kg", aciklik: "10 – 25 m", kaldimaYuksekligi: "4 – 20 m", motor: "15 kW", tavsiyeRay: "IPE 400" },
];

const guvenlikOzellikleri = [
  { icon: "🛡️", baslik: "CE Belgesi (2006/42/EC)", aciklama: "Tüm sistemlerimiz Avrupa Makine Direktifi kapsamında CE sertifikasına sahiptir." },
  { icon: "📐", baslik: "FEM 1.001 Sınıflandırması", aciklama: "Vinç gruplandırması FEM standartlarına göre yapılarak kullanım yoğunluğuna uygun mekanik ömür belirlenir." },
  { icon: "🔁", baslik: "ISO 4301 Çalışma Sınıfı", aciklama: "M1'den M8'e kadar çalışma sınıfları; günlük kullanım sayısı ve yük spektrumuna göre belirlenir." },
  { icon: "⚡", baslik: "Aşırı Yük Koruması", aciklama: "Elektronik yük hücresi ile nominal kapasitenin %110'unda otomatik durdurma sistemi devreye girer." },
  { icon: "🔌", baslik: "Elektriksel Güvenlik IP54/IP65", aciklama: "Standart modeller IP54, ıslak veya toz yoğun ortamlar için IP65 koruma seviyesinde üretilir." },
  { icon: "🚦", baslik: "Limit Switch Sistemi", aciklama: "Üst ve alt sınır anahtarları vincin ray dışına çıkmasını ve aşırı kaldırmayı önler." },
  { icon: "🌡️", baslik: "Termal Motor Koruması", aciklama: "Yoğun çalışma döngülerinde motor sargılarını aşırı ısınmadan koruma sistemi." },
  { icon: "📡", baslik: "Uzaktan Kumanda & ESTOP", aciklama: "Radyo frekansı kumanda ile güvenli mesafeden operasyon; acil durdurma butonu dahil." },
];

const montajAsamalari = [
  { no: "01", baslik: "Saha Ölçümü & Proje", icerik: "Tavan yüksekliği, kat planı, engel analizi ve yük dağılımı hesabı yapılır. Statik rapor hazırlanır." },
  { no: "02", baslik: "Tavan Yükü Onayı", icerik: "Yapı mühendisi tarafından askı noktaları onaylanır. Gerekirse takviye kolonları veya çelik köprü eklenir." },
  { no: "03", baslik: "Ray Montajı", icerik: "IPE/HEA profil ray, hesaplanan askı aralıklarıyla tavana monte edilir. Kaynak veya cıvata ile sabitlenir." },
  { no: "04", baslik: "Vinç Kurulumu", icerik: "Elektrik zincirli hoist raya yerleştirilir, tahrik motoru ve kumanda panosu bağlanır." },
  { no: "05", baslik: "Kablo & Elektrik Tesisatı", icerik: "Kablo taşıyıcı sistemi ve busbar (buat rayı) kurulumu; topraklama ve kaçak akım koruma devreleri." },
  { no: "06", baslik: "Yük Testi & Devreye Alma", icerik: "Nominal kapasitenin %125'i ile yük testi yapılır. Test raporu ve CE uygunluk beyanı teslim edilir." },
];

const sss = [
  {
    soru: "Monoray vinç nedir?",
    cevap:
      "Monoray vinç, tek bir I veya HEA profil ray üzerinde hareket eden elektrikli zincirli veya halatlı hoist sistemidir. Fabrika içi doğrusal ve kavisli hat boyunca malzeme taşıma operasyonlarında düşük maliyet ve kolay kurulum avantajıyla öne çıkar.",
  },
  {
    soru: "Monoray vinç ile köprülü (overhead) vinç arasındaki fark nedir?",
    cevap:
      "Monoray vinç tek ray üzerinde yalnızca boyuna (X ekseni) hareket edebilirken, köprülü vinç iki ray üzerindeki kiriş sayesinde hem boyuna hem enine (X–Y) hareket sağlar. Monoray sistemler daha az yer kaplar, kurulumu daha hızlıdır ve maliyeti yaklaşık %30–50 daha düşüktür; ancak tarama alanı sınırlıdır.",
  },
  {
    soru: "Kavisli ray sistemleri mümkün mü?",
    cevap:
      "Evet. Monoray sistemlerin en önemli avantajlarından biri kavisli ve dallanmalı hat desteğidir. Özel bükme makinesiyle işlenen ray profilleri sayesinde vinç fabrika içindeki farklı çalışma istasyonları arasında kesintisiz dolaşabilir.",
  },
  {
    soru: "Monoray vinç kaç ton kaldırır?",
    cevap:
      "Standart ürün yelpazesi 250 kg'dan 10 tona kadar uzanır. Özel uygulamalar ve çift hoist konfigürasyonuyla 20 ton ve üzerine çıkılabilir.",
  },
  {
    soru: "CE belgesi ve FEM standardı zorunlu mu?",
    cevap:
      "Türkiye'de 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ile İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında CE belgesi zorunludur. FEM 1.001 ve ISO 4301 sınıflandırması ise ekipmanın kullanım yoğunluğuna uygun tasarlanmasını güvence altına alır.",
  },
  {
    soru: "Tavan yükü hesaplaması nasıl yapılır?",
    cevap:
      "Hesaplama; nominal yük + hoist ağırlığı + ray ve askı yapısı ağırlıkları toplamının dinamik katsayıyla (1,25–1,5) çarpılmasıyla elde edilir. Bu hesabı yetkili makine veya inşaat mühendisine yaptırmanız yasal ve teknik açıdan zorunludur.",
  },
  {
    soru: "Monoray vinç bakımı ne sıklıkla yapılmalı?",
    cevap:
      "Günlük görsel kontrol, aylık ray ve tur tahrik yağlaması, 6 ayda bir fren ve limit switch testi ile yıllık kapsamlı yük testi ve belge yenileme tavsiye edilir. Yoğun kullanım (M5 ve üzeri sınıf) için periyotlar kısaltılmalıdır.",
  },
  {
    soru: "ATEX bölgede monoray vinç kullanılabilir mi?",
    cevap:
      "Evet. Parlayıcı veya patlayıcı atmosfer içeren kimya ve petrokimya tesisleri için kıvılcım önleyici (Ex) motor, kaplama ve kontrol paneli ile donatılmış ATEX onaylı özel modeller mevcuttur.",
  },
];

// ── Bileşen ─────────────────────────────────────────────────────────────────

export default function MonorayVincPage() {
  return (
    <div className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏭 Monoray Vinç Sistemleri Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Monoray Vinç Sistemleri –<br />
              <span className="text-yellow-400">Güvenli, Verimli ve Uzun Ömürlü Çözümler</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              250 kg'dan 10 tona kadar geniş kapasite yelpazesi, kavisli ray desteği ve CE belgeli
              tasarımıyla endüstriyel taşıma operasyonlarının en ekonomik çözümü.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Teklif Al: 0532 303 90 89
              </a>
              <a
                href="#modeller"
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
              { rakam: "250 kg – 10 t", birim: "Kapasite Aralığı" },
              { rakam: "25 m", birim: "Maks. Ray Açıklığı" },
              { rakam: "CE + FEM", birim: "Sertifikasyon" },
              { rakam: "1–3 Gün", birim: "Kurulum Süresi" },
            ].map((s) => (
              <div key={s.birim}>
                <div className="text-3xl font-black text-yellow-400">{s.rakam}</div>
                <div className="text-gray-400 text-sm mt-1">{s.birim}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MONORAY VİNÇ NEDİR? ── */}
      <section className="py-20 px-4 bg-white" id="monoray-vinc-nedir">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Kavram</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Monoray Vinç Nedir?</h2>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Çalışma Prensibi ve Teknik Yapı</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Monoray vinç; tek bir I profil veya HEA çelik ray üzerine asılı elektrikli zincirli
                hoist (palanga) ve onun üzerinde sürünen tahrikli araba düzeneğinden oluşur. Ray,
                tavan konstrüksiyonuna sabit askılar veya mesnet ayakları aracılığıyla bağlanır.
                Operatör, bağlı sarkıt kumanda veya radyo frekansı uzaktan kumandayla yükü
                kaldırır, indirir ve ray boyunca ileri-geri hareket ettirir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sistem; hoist motoru, yürüme (traversman) motoru, zincir veya halat tamburu,
                yük kancası ve limit switch setinden oluşur. Gelişmiş modellerde frekans invertörü
                ile hassas hız kontrolü, PLC entegrasyonu ile otomasyon ve barkod tabanlı
                istasyon yönlendirme mümkündür.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Diğer Vinç Türlerinden Farkları</h3>
              <p className="text-gray-600 leading-relaxed">
                Köprülü vinçler iki ray üzerindeki kiriş aracılığıyla hem X hem Y ekseninde
                hareket ederken, monoray yalnızca ray boyunca doğrusal hareket sağlar. Bu kısıtına
                karşın monoray sistemler; kavisli ve dallanmalı hat kurulumuna izin vermesiyle
                farklı iş istasyonları arasında köprülü vince göre çok daha esnek bir rota
                sunabilmektedir. Kurulum maliyeti köprülü vince kıyasla %30–50 daha düşüktür.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden h-64 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Monoray vinç fabrika içi kurulumu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  📸 Fabrika içi monoray hat uygulaması
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🔄", baslik: "Kavisli Hat", aciklama: "Köprülü vince kıyasla esnek rota" },
                  { icon: "💰", baslik: "Düşük Maliyet", aciklama: "%30–50 daha ekonomik kurulum" },
                  { icon: "⚡", baslik: "Hızlı Montaj", aciklama: "1–3 günde devreye alma" },
                  { icon: "🏭", baslik: "Geniş Sektör", aciklama: "Otomotiv'den kimyaya kadar" },
                ].map((k) => (
                  <div key={k.baslik} className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-2xl mb-1">{k.icon}</div>
                    <div className="font-bold text-gray-900 text-sm">{k.baslik}</div>
                    <div className="text-gray-500 text-xs">{k.aciklama}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODELLER ── */}
      <section className="py-20 px-4 bg-gray-50" id="modeller">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ürün Serisi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Monoray Vinç Modelleri ve Kapasite Seçenekleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kullanım yoğunluğuna ve taşıma kapasitesine göre dört ana seriden oluşan ürün yelpazemiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {modeller.map((m) => (
              <div
                key={m.title}
                className="relative bg-white rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition p-6"
              >
                {m.etiket && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {m.etiket}
                  </span>
                )}
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{m.title}</h3>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-400 text-xs mb-1">Kapasite</div>
                    <div className="font-bold text-gray-800">{m.kapasite}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-400 text-xs mb-1">Ray Açıklığı</div>
                    <div className="font-bold text-gray-800">{m.aciklik}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-400 text-xs mb-1">Kaldırma Hızı</div>
                    <div className="font-bold text-gray-800">{m.hiz}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-400 text-xs mb-1">Kullanım Alanı</div>
                    <div className="font-bold text-gray-800 text-xs leading-tight">{m.kullanim}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {m.ozellikler.map((o) => (
                    <span key={o} className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs px-2 py-1 rounded-full">{o}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Kapasite Segmenti Açıklamaları */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">250 kg – 2 Ton Kapasiteli Modeller</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hafif ve orta seri monoray vinçler; montaj atölyeleri, küçük ölçekli üretim hatları
                ve takım ile fikstür taşıma operasyonları için ekonomik çözümler sunar. Kompakt
                boyutları sayesinde düşük tavan yüksekliğine sahip (min. 3 m) tesislere uygundur.
                Tek fazlı elektrik seçeneğiyle küçük işletmeler için kurulum kolaylığı sağlar.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {["Montaj ve takım atölyeleri", "Küçük depo ve sevkiyat alanları", "Tekstil ve gıda üretim tesisleri", "Küçük makine imalathaneleri"].map((m) => (
                  <li key={m} className="flex gap-2"><span className="text-yellow-600">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-black mb-4">2 Ton – 10 Ton: Ağır Sanayi Modelleri</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ağır sanayi serisi; metal imalat, otomotiv, kimya ve tersane gibi yoğun ve sürekli
                çalışma koşulları gerektiren sektörler için FEM 4m–5m çalışma sınıfında tasarlanmıştır.
                Çift halat sistemi ve elektronik yük hücresiyle yüksek güvenlik standarttı sunar.
                Frekans invertörü ile hassas konumlama ve yumuşak kalkış-duruş sağlanır.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                {["Pres ve kalıp sanayi", "Ağır makine montaj hatları", "Tersane ve çelik konstrüksiyon", "Kimya ve petrokimya tesisleri"].map((m) => (
                  <li key={m} className="flex gap-2"><span className="text-yellow-400">✓</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEKTÖRLER ── */}
      <section className="py-20 px-4 bg-white" id="kullanim-alanlari">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörel Çözümler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Hangi Sektörlerde Kullanılır?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Monoray vinç sistemleri farklı sektörlerin spesifik ihtiyaçlarına göre özelleştirilebilir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sektorler.map((s) => (
              <div key={s.title} className="p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 hover:border-yellow-200 border border-transparent transition">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1">
                  {s.detaylar.map((d) => (
                    <li key={d} className="text-xs text-gray-500 flex gap-2">
                      <span className="text-yellow-600">▶</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Detaylı Sektör Açıklamaları */}
          <div className="space-y-14">
            {/* Üretim & Montaj */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                  alt="Üretim ve montaj hattında monoray vinç"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  📸 Üretim hattı – otomatik monoray sistemi
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Üretim ve Montaj Hatlarında Monoray Vinç</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Seri üretim tesislerinde iş istasyonları arasında sürekli ve ritmik malzeme akışı
                  operasyonel verimliliğin temelidir. Kavisli monoray hat sistemi, üretim bandının
                  geometrisine tam uyum sağlayarak forklift kullanımını ortadan kaldırır; bu sayede
                  zemin alanı kazanılır ve iş kazası riski minimize edilir.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  PLC entegrasyonuyla tam otomasyona geçilen hatlar, barkod veya RFID tabanlı
                  yönlendirme ile hangi yükün hangi istasyona gideceğini otomatik olarak belirleyebilir.
                  Bu otomasyon düzeyi insan hatasını sıfıra yaklaştırır ve üretim hızını artırır.
                </p>
              </div>
            </div>

            {/* Depo & Lojistik */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Depo ve Lojistik Tesislerde Monoray Vinç</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Yüksek raflı depolarda forklift manevrasının kısıtlı olduğu dar koridorlarda
                  monoray sistemler tam anlamıyla manevra özgürlüğü sağlar. Tavan boyunca uzanan
                  hatlar sayesinde palet ve büyük ambalajlar farklı raf seviyeleri arasında
                  güvenle taşınır.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {["Forklift manevra alanı kazanımı", "Raf arası dikey ve yatay taşıma", "Sevkiyat bandına otomatik besleme", "24 saat otomasyon desteği"].map((m) => (
                    <li key={m} className="flex gap-2"><span className="text-yellow-600">✓</span>{m}</li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Depo ve lojistik tesisinde monoray vinç"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Otomotiv / Metal / Kimya */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
                  alt="Otomotiv fabrikasında monoray vinç uygulaması"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Otomotiv, Metal ve Kimya Sektöründe Monoray Vinç</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Otomotiv fabrikalarında gövde panelleri, motor blokları ve şanzıman tertibatları
                  monoray hatlar üzerinde hassas konumlandırma gerektiren montaj noktalarına
                  saniyeler içinde ulaştırılır. Metal işleme tesislerinde ağır sac ve profil
                  taşıma ile ısıl işlem fırını besleme hatları için özel yüksek sıcaklık
                  dayanımlı modeller kullanılır.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kimya sektöründe ise ATEX onaylı, paslanmaz çelik kanca ve kimyasal dirençli
                  kaplama seçenekleriyle korozif ve patlayıcı atmosferlerde güvenli operasyon
                  mümkündür.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEKNİK ÖZELLİKLER ── */}
      <section className="py-20 px-4 bg-gray-900 text-white" id="teknik-ozellikler">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Teknik Veriler</p>
            <h2 className="text-4xl font-black mb-4">Monoray Vinç Teknik Özellikleri ve Standartları</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tüm modellerimiz FEM 1.001 ve ISO 4301 standartlarına göre sınıflandırılmış olup
              CE belgelidir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { baslik: "Tahrik Sistemi", deger: "Elektrikli zincirli hoist (1 veya 2 zincir ağzı)" },
              { baslik: "Voltaj", deger: "220 V / 380 V / 415 V, 50–60 Hz" },
              { baslik: "Çalışma Sınıfı", deger: "FEM 1m – 5m / ISO M1–M8" },
              { baslik: "Kaldırma Hızı", deger: "2 – 16 m/dk (inverter ile hassas)" },
              { baslik: "Seyir Hızı", deger: "5 – 20 m/dk (model bağımlı)" },
              { baslik: "Zincir Tipi", deger: "G80 yüksek mukavemetli çelik zincir" },
              { baslik: "Koruma Sınıfı", deger: "IP54 standart / IP65 opsiyonel" },
              { baslik: "Çalışma Sıcaklığı", deger: "-20°C ile +50°C arası" },
            ].map((t) => (
              <div key={t.baslik} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-gray-400 text-xs mb-2">{t.baslik}</div>
                <div className="text-yellow-400 font-bold text-sm">{t.deger}</div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-yellow-400 mb-5">FEM / ISO Çalışma Sınıfı Nedir?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  FEM 1.001 standardı vinçleri günlük çalışma süresi ve yük spektrumuna göre
                  1m'den 5m'ye kadar sınıflandırır. Yanlış seçilen çalışma sınıfı; erken
                  mekanik arıza ve iş güvenliği risklerine yol açar.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    "FEM 1m / ISO M1–M2: Hafif kullanım, ayda birkaç kez",
                    "FEM 2m / ISO M3: Orta kullanım, günde 1–2 vardiya",
                    "FEM 3m / ISO M4–M5: Yoğun kullanım, sürekli üretim",
                    "FEM 4m–5m / ISO M6–M8: Ağır sanayi, 24 saat operasyon",
                  ].map((m) => (
                    <li key={m} className="flex gap-2"><span className="text-yellow-400">▶</span>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  ISO 4301 standardı ise yük spektrum faktörü (km) ve toplam kaldırma sayısı
                  bazında vinç ömrünü belirler. Doğru sınıf seçimi hem maliyet optimizasyonu
                  hem de güvenli operasyon için kritiktir. Bizimle iletişime geçerek projeniz
                  için doğru FEM/ISO sınıfını birlikte belirleyebiliriz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KAPASİTE TABLOSU ── */}
      <section className="py-20 px-4 bg-white" id="kapasite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Boyutlandırma Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Taşıma Kapasitesi ve Açıklık Ölçüleri</h2>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Maksimum Yük Kapasitesi Tablosu</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-yellow-400">
                    <th className="text-left px-5 py-4 font-black text-black">Kapasite</th>
                    <th className="text-center px-5 py-4 font-black text-black">Ray Açıklığı</th>
                    <th className="text-center px-5 py-4 font-black text-black">Kaldırma Yüks.</th>
                    <th className="text-center px-5 py-4 font-black text-black">Motor Gücü</th>
                    <th className="text-center px-5 py-4 font-black text-black">Tavsiye Ray</th>
                  </tr>
                </thead>
                <tbody>
                  {kapasiteTablosu.map((r, i) => (
                    <tr key={r.kapasite} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition`}>
                      <td className="px-5 py-4 font-bold text-gray-800">{r.kapasite}</td>
                      <td className="px-5 py-4 text-center text-gray-600">{r.aciklik}</td>
                      <td className="px-5 py-4 text-center text-gray-600">{r.kaldimaYuksekligi}</td>
                      <td className="px-5 py-4 text-center text-gray-600">{r.motor}</td>
                      <td className="px-5 py-4 text-center text-gray-600 font-mono">{r.tavsiyeRay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-xs mt-3">
              * Tablodaki değerler standart konfigürasyonlar için olup özel projelerde değişiklik gösterebilir.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Ray Açıklığı ve Kaldırma Yüksekliği Seçenekleri</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { baslik: "Kısa Açıklık (2–8 m)", icerik: "Hafif kapasite modellere uygun. Atölye ve küçük üretim alanları için idealdir. Tavan yükü düşük tutulur.", renk: "yellow" },
                { baslik: "Orta Açıklık (8–16 m)", icerik: "En yaygın endüstriyel uygulama aralığı. Fabrika navi ve üretim halleri için standart seçim.", renk: "gray" },
                { baslik: "Uzun Açıklık (16–25 m)", icerik: "Büyük fabrika ve depo uygulamaları. Ağır raf ve ray profillerine ihtiyaç duyulur, statik hesap zorunludur.", renk: "dark" },
              ].map((k) => (
                <div key={k.baslik} className={`rounded-2xl p-6 ${k.renk === "yellow" ? "bg-yellow-50 border border-yellow-200" : k.renk === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 border border-gray-200"}`}>
                  <h4 className={`font-bold text-lg mb-3 ${k.renk === "dark" ? "text-yellow-400" : "text-gray-900"}`}>{k.baslik}</h4>
                  <p className={`text-sm leading-relaxed ${k.renk === "dark" ? "text-gray-300" : "text-gray-600"}`}>{k.icerik}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GÜVENLİK ── */}
      <section className="py-20 px-4 bg-yellow-400" id="guvenlik">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Güvenlik & Sertifikasyon</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Güvenlik ve Sertifikasyon</h2>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              Tüm monoray vinç sistemlerimiz Türkiye ve AB mevzuatı kapsamındaki zorunlu
              standart ve belgeler çerçevesinde üretilmektedir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {guvenlikOzellikleri.map((g) => (
              <div key={g.baslik} className="bg-white/70 rounded-2xl p-5">
                <div className="text-3xl mb-3">{g.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{g.baslik}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{g.aciklama}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 rounded-3xl p-7">
              <h3 className="text-xl font-black text-gray-900 mb-4">CE Belgesi ve FEM/ISO Standartları</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                CE belgesi, ürünün AB Makine Direktifi (2006/42/EC) kapsamındaki tasarım, imalat
                ve test süreçlerini başarıyla tamamladığını gösteren zorunlu uygunluk beyanıdır.
                Türkiye'de 6331 sayılı İSG Kanunu ve İş Ekipmanları Yönetmeliği çerçevesinde
                bu belge olmaksızın vinç sistemi işletmek yasaktır.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {["CE Uygunluk Beyanı", "FEM 1.001 Çalışma Sınıfı Raporu", "Yük Testi Protokolü (%125 nominal yük)", "Periyodik Muayene Sertifikası (yıllık)"].map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-green-700">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/70 rounded-3xl p-7">
              <h3 className="text-xl font-black text-gray-900 mb-4">Elektriksel Güvenlik ve Aşırı Yük Koruması</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Monoray vinç sistemlerinde elektriksel güvenlik çok katmanlı koruma anlayışıyla
                sağlanır. Elektronik yük hücresi, nominal kapasitenin %110'unda devreye giren
                otomatik durdurma komutu verir. Üst sınır switch'i kancayı tamburdan uzaklaşmaktan
                alıkoyar; acil durdurma (ESTOP) sistemi ise herhangi bir anormallikte tüm hareketi
                anında dondurur.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {["Elektronik aşırı yük sınırlayıcı (SLI)", "Üst ve alt limit switch çifti", "Acil durdurma (ESTOP) devresi", "Kaçak akım koruma rölesi (RCD)", "Termal motor koruması"].map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-green-700">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MONTAJ ── */}
      <section className="py-20 px-4 bg-gray-50" id="montaj">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kurulum</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Montaj ve Kurulum Gereksinimleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Güvenli ve uzun ömürlü bir monoray sistemi için doğru montaj süreci kritik öneme sahiptir.
            </p>
          </div>

          {/* Tavan Yükü Hesabı */}
          <div className="bg-gray-900 text-white rounded-3xl p-8 mb-10">
            <h3 className="text-2xl font-black text-yellow-400 mb-5">Tavan Yükü Hesaplaması</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-5">
                  Tavan yükü hesabı, monoray sisteminin en kritik adımıdır. Yanlış hesaplama;
                  tavan konstrüksiyonunun göçmesine ve iş kazasına yol açabilir. Bu nedenle
                  hesaplama mutlaka yetkili bir makine veya inşaat mühendisi tarafından yapılmalıdır.
                </p>
                <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-4 text-sm text-yellow-200 font-mono">
                  F_tavan = (Q_yük + G_hoist + G_ray) × φ<br />
                  <span className="text-gray-400 text-xs">φ = dinamik katsayı (1,25 – 1,50)</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { etiket: "Q_yük", aciklama: "Nominal yük kapasitesi (kg)" },
                  { etiket: "G_hoist", aciklama: "Hoist ve araba ağırlığı (kg)" },
                  { etiket: "G_ray", aciklama: "Ray ve askı yapısı ağırlığı (kg/m)" },
                  { etiket: "φ", aciklama: "Dinamik katsayı – kalkış çarpması" },
                ].map((p) => (
                  <div key={p.etiket} className="flex gap-3 bg-white/5 rounded-xl p-3">
                    <span className="text-yellow-400 font-mono font-bold shrink-0 text-sm">{p.etiket}</span>
                    <span className="text-gray-400 text-sm">{p.aciklama}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Montaj Adımları */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-8">Profesyonel Montaj Süreci ve Süreleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {montajAsamalari.map((a) => (
                <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group bg-white">
                  <div className="text-5xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition mb-4 leading-none">
                    {a.no}
                  </div>
                  <h4 className="text-gray-900 font-bold text-base mb-2">{a.baslik}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.icerik}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {[
                { tip: "Basit Doğrusal Hat", sure: "1 – 3 gün", aciklama: "Tek yönlü, düz ray, standart tavan askısı" },
                { tip: "Kavisli / Dallanmalı Hat", sure: "4 – 10 gün", aciklama: "Özel bükme profil, çoklu istasyon, yönlendirici" },
                { tip: "Çok Sistemli & PLC Entegre", sure: "1 – 3 hafta", aciklama: "Otomasyon, sensör ağı ve devreye alma testleri" },
              ].map((s) => (
                <div key={s.tip} className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
                  <div className="font-bold text-gray-900 mb-1">{s.tip}</div>
                  <div className="text-yellow-700 font-black text-lg mb-2">{s.sure}</div>
                  <div className="text-gray-500 text-xs">{s.aciklama}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="py-20 px-4 bg-white" id="sss">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Monoray Vinç Hakkında Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {sss.map((s, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 transition">
                <h3 className="font-bold text-gray-900 mb-2">❓ {s.soru}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Monoray Vinç Sisteminizi Tasarlayalım</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Kapasite, ray uzunluğu ve sektörünüzü paylaşın; size özel teknik çözüm ve fiyat teklifi hazırlayalım.
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
