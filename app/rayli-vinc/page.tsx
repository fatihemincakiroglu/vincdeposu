import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raylı Vinç: Özellikleri, Kullanım Alanları ve Fiyatları (2026)",
  description:
    "Raylı vinç nedir, çeşitleri nelerdir? Köprülü, portal, konsol raylı vinç modelleri, teknik özellikler, kapasite, kurulum, kiralama ve satış fiyatları. 0532 303 90 89",
};

/* ---------------- VERİ KÜMELERİ ---------------- */

const rayliVincCesitleri = [
  {
    icon: "🏗️",
    title: "Köprülü Raylı Vinç (Tek Kirişli)",
    desc: "Tek ana kiriş üzerinde hareket eden vinç arabasıyla çalışan, orta kapasiteli işler için ekonomik çözüm.",
    kapasite: "1 – 10 ton",
    href: "/koprulu-rayli-vinc",
    ozellikler: ["Ekonomik", "Düşük tavan yüksekliği", "Kolay bakım"],
  },
  {
    icon: "🏭",
    title: "Köprülü Raylı Vinç (Çift Kirişli)",
    desc: "İki ana kiriş üzerinde çalışan vinç arabası sayesinde daha yüksek kapasite ve daha geniş açıklık sunan model.",
    kapasite: "10 – 80 ton",
    href: "/cift-kirisli-rayli-vinc",
    ozellikler: ["Yüksek kapasite", "Geniş açıklık", "Üretim hattı uyumlu"],
  },
  {
    icon: "🌉",
    title: "Portal Vinç (Gantry Crane)",
    desc: "Kendi taşıyıcı ayakları üzerinde hareket eden, mevcut bir yapıya ihtiyaç duymayan açık alan vinç sistemi.",
    kapasite: "5 – 100 ton",
    href: "/portal-vinc",
    ozellikler: ["Açık alan uyumlu", "Bağımsız yapı", "Esnek konumlandırma"],
  },
  {
    icon: "🏛️",
    title: "Yarı Portal Vinç (Semi-Gantry)",
    desc: "Bir tarafı bina kolonuna, diğer tarafı kendi ayağına oturan, hibrit yapısıyla maliyet avantajı sağlayan model.",
    kapasite: "5 – 50 ton",
    href: "/yari-portal-vinc",
    ozellikler: ["Maliyet avantajı", "Hibrit montaj", "Mevcut yapı kullanımı"],
  },
  {
    icon: "📐",
    title: "Konsol (Jib) Raylı Vinç",
    desc: "Duvara veya kolona monte edilen, dönebilen kol yapısıyla sabit bir nokta etrafında çalışma alanı sunan model.",
    kapasite: "0,5 – 5 ton",
    href: "/konsol-jib-vinc",
    ozellikler: ["Sabit nokta çalışma", "Dönebilen kol", "Az yer kaplar"],
  },
  {
    icon: "➖",
    title: "Monoray (Monorail) Vinç",
    desc: "Tek bir ray hattı boyunca hareket eden, doğrusal taşıma rotalarında verimli ve hızlı bir çözüm.",
    kapasite: "0,5 – 10 ton",
    href: "/monoray-vinc",
    ozellikler: ["Doğrusal hat", "Hızlı taşıma", "Sade yapı"],
  },
];

const fiyatTablosuKiralama = [
  { tur: "5 Ton Tek Kirişli Köprülü Vinç", saatlik: "450 TL", gunluk: "3.200 TL", aylik: "48.000 TL" },
  { tur: "10 Ton Çift Kirişli Köprülü Vinç", saatlik: "750 TL", gunluk: "5.500 TL", aylik: "78.000 TL" },
  { tur: "20 Ton Çift Kirişli Köprülü Vinç", saatlik: "1.100 TL", gunluk: "8.500 TL", aylik: "120.000 TL" },
  { tur: "Konsol (Jib) Vinç – 2 Ton", saatlik: "350 TL", gunluk: "2.400 TL", aylik: "32.000 TL" },
  { tur: "Portal Vinç – 15 Ton", saatlik: "900 TL", gunluk: "7.000 TL", aylik: "Teklif" },
  { tur: "Operatör Hizmeti", saatlik: "350 TL", gunluk: "1.600 TL", aylik: "Teklif" },
];

const kullanimAlanlari = [
  { icon: "🏭", title: "Fabrika ve Üretim", desc: "Üretim hattında parça ve malzeme taşıma operasyonları" },
  { icon: "🚢", title: "Liman ve Terminal", desc: "Konteyner ve yük aktarma işlemlerinde sürekli kullanım" },
  { icon: "🔩", title: "Çelik Sektörü", desc: "Sıcak ve ağır metal yüklerin güvenli şekilde taşınması" },
  { icon: "📦", title: "Depo ve Lojistik", desc: "Palet ve büyük hacimli ürünlerin istif edilmesi" },
  { icon: "🚗", title: "Otomotiv", desc: "Montaj hattında kalıp, motor ve karoseri taşıma" },
  { icon: "⚡", title: "Enerji ve Santraller", desc: "Türbin, transformatör ve ağır ekipman bakım taşımaları" },
];

const kapasiteTablosu = [
  { aralik: "1 – 3 Ton", aciklik: "6 – 12 m", kullanim: "Atölye, küçük imalat" },
  { aralik: "3 – 10 Ton", aciklik: "10 – 20 m", kullanim: "Orta ölçekli üretim, depo" },
  { aralik: "10 – 25 Ton", aciklik: "15 – 28 m", kullanim: "Ağır sanayi, çelik imalat" },
  { aralik: "25 – 50 Ton", aciklik: "20 – 32 m", kullanim: "Çelik servis merkezleri, liman" },
  { aralik: "50 Ton +", aciklik: "Proje bazlı", kullanim: "Enerji santralleri, gemi inşa" },
];

const kurulumAdimlari = [
  { no: "01", title: "Saha Etüdü", desc: "Bina yapısı, açıklık ve kullanım amacı yerinde incelenir." },
  { no: "02", title: "Statik Hesap ve Proje", desc: "Yük, açıklık ve kullanım sınıfına göre mühendislik projesi hazırlanır." },
  { no: "03", title: "Ray Sistemi Montajı", desc: "Kiriş ve ray hattı, hesaplanan tolerans değerlerine göre kurulur." },
  { no: "04", title: "Vinç Montajı", desc: "Vinç arabası, kaldırma mekanizması ve elektrik sistemi monte edilir." },
  { no: "05", title: "Test ve Yük Denemesi", desc: "Statik ve dinamik yük testleri ile sistem performansı doğrulanır." },
  { no: "06", title: "Devreye Alma ve Eğitim", desc: "Operatör eğitimi verilir, sistem belgeleriyle teslim edilir." },
];

const bakimKontrolListesi = [
  "Ray ve tekerlek aşınması düzenli olarak ölçülmektedir",
  "Halat, zincir ve kanca her periyodik bakımda kontrol edilir",
  "Fren sistemi ve limit switch testleri eksiksiz yapılmaktadır",
  "Elektrik panosu ve kablo bağlantıları periyodik olarak incelenir",
  "Redüktör ve motor yağlama programına uygun şekilde sürdürülür",
  "Tüm bakım kayıtları belgelenerek arşivlenmektedir",
];

const guvenlikBelgeleri = [
  "CE işareti ve uygunluk beyanı mevcuttur",
  "Periyodik kontrol raporları (TS EN ISO 9927) güncel tutulur",
  "FEM / DIN kullanım sınıfına uygunluk belgelenir",
  "Operatörler sertifikalı eğitimden geçmektedir",
  "Ekipmanlar üçüncü şahıs sigortası ile güvence altındadır",
  "Risk değerlendirmesi ve acil durum planı hazırdır",
];

const sss = [
  {
    soru: "Raylı vinç nedir?",
    cevap: "Raylı vinç, bir bina yapısına veya kendi taşıyıcı ayaklarına monte edilen ray hattı üzerinde hareket eden, ağır yüklerin yatay ve dikey olarak taşınmasını sağlayan endüstriyel kaldırma ekipmanıdır.",
  },
  {
    soru: "Raylı vinç ile köprülü vinç aynı şey midir?",
    cevap: "Köprülü vinç, raylı vinç ailesinin en yaygın türüdür. Raylı vinç kavramı; köprülü, portal, yarı portal, konsol ve monoray gibi tüm ray üzerinde hareket eden vinç sistemlerini kapsayan genel bir başlıktır.",
  },
  {
    soru: "Raylı vinç kapasitesi nasıl belirlenir?",
    cevap: "Kapasite; taşınacak maksimum yük ağırlığı, açıklık mesafesi, kaldırma yüksekliği ve günlük kullanım sıklığına göre yapılan mühendislik hesabıyla belirlenir.",
  },
  {
    soru: "Raylı vinç kiralama fiyatlarını ne etkiler?",
    cevap: "Vinç tipi ve kapasitesi, açıklık mesafesi, kiralama süresi, montaj ihtiyacı ve operatör hizmeti gerekliliği fiyatı belirleyen ana faktörlerdir.",
  },
  {
    soru: "İkinci el raylı vinç almak güvenli mi?",
    cevap: "Yapısal kontrolden geçmiş, bakım geçmişi belgeli ve kullanım sınıfına uygun ikinci el vinçler güvenli şekilde kullanılabilir. Satın almadan önce bağımsız bir ekspertiz raporu alınması önerilir.",
  },
  {
    soru: "Raylı vinç periyodik kontrolü kaç ayda bir yapılmalı?",
    cevap: "Mevzuata göre raylı vinçlerin periyodik kontrolü en az yılda bir kez yapılmalıdır; ağır ve sürekli kullanım koşullarında bu süre işletme tarafından kısaltılabilir.",
  },
  {
    soru: "Raylı vinç kurulumu ne kadar sürer?",
    cevap: "Standart bir köprülü vinç kurulumu saha hazırlığı tamamlandıktan sonra ortalama 3 – 10 iş günü içinde tamamlanır; süre kapasiteye ve açıklığa göre değişebilir.",
  },
];

/* ---------------- SCHEMA (JSON-LD) ---------------- */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Raylı Vinç: Özellikleri, Kullanım Alanları ve Fiyatları (2026)",
  description:
    "Raylı vinç nedir, çeşitleri, teknik özellikleri, kapasite, kurulum, kiralama ve satın alma rehberi.",
  datePublished: "2026-01-05",
  dateModified: "2026-06-29",
  author: { "@type": "Organization", name: "Raylı Vinç Kiralama ve Satış Hizmetleri" },
  publisher: { "@type": "Organization", name: "Raylı Vinç Kiralama ve Satış Hizmetleri" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sss.map((s) => ({
    "@type": "Question",
    name: s.soru,
    acceptedAnswer: { "@type": "Answer", text: s.cevap },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Raylı Vinç Kiralama ve Satışı",
  provider: { "@type": "Organization", name: "Raylı Vinç Kiralama ve Satış Hizmetleri", telephone: "+905323039089" },
  areaServed: "İstanbul",
  description:
    "Köprülü, portal, yarı portal, konsol ve monoray raylı vinç kiralama, satış, kurulum ve bakım hizmetleri.",
};

export default function RayliVincPage() {
  return (
    <div className="bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏗️ Raylı Vinç Sistemleri Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Raylı Vinç: Özellikleri,<br />
              Kullanım Alanları ve <span className="text-yellow-400">Fiyatları</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Raylı vinç nedir, hangi sektörlerde kullanılır, kapasite ve teknik özellikleri nasıl
              belirlenir? Köprülü, portal ve konsol raylı vinç sistemleri için seçim, kurulum,
              kiralama ve satın alma kılavuzu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#rayli-vinc-cesitleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Raylı Vinç Çeşitlerini İncele ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { deger: "20+", label: "Yıllık Deneyim" },
              { deger: "100+", label: "Tonaj Çeşidi" },
              { deger: "39", label: "İlçede Hizmet" },
              { deger: "750+", label: "Kurulan Sistem" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-yellow-400">{s.deger}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raylı Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Nedir?</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Raylı vinç, sabit bir ray hattı üzerinde hareket eden vinç arabası ve kaldırma
              mekanizması sayesinde ağır yüklerin belirli bir alan içinde güvenli, hızlı ve
              tekrarlanabilir şekilde taşınmasını sağlayan endüstriyel kaldırma sistemidir. Bina
              kolonlarına monte edilebildiği gibi kendi taşıyıcı ayakları üzerinde de
              çalışabilir. Sabit bir hat üzerinde hareket etmesi, raylı vinçleri mobil vinçlere
              kıyasla daha hassas konumlandırma ve daha yüksek tekrar sayısı gerektiren üretim
              ortamlarında öne çıkarır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🛤️ Sabit Hat Sistemi</h3>
              <p className="text-gray-500 text-sm">Ray üzerinde hareket ederek tekrarlanabilir ve hassas taşıma sağlar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚙️ Yüksek Kapasite</h3>
              <p className="text-gray-500 text-sm">Yüzlerce kilogramdan yüzlerce tona kadar yük taşıma seçeneği sunar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏭 Sürekli Kullanım</h3>
              <p className="text-gray-500 text-sm">Üretim hattında kesintisiz ve yoğun çalışma koşullarına uygundur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Raylı Vinç Çeşitleri ve Modelleri */}
      <section id="rayli-vinc-cesitleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Çeşitleri ve Modelleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her proje ve açıklık ihtiyacına uygun raylı vinç modeli. İhtiyacınıza göre doğru tipi belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rayliVincCesitleri.map((v) => (
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

          {/* H3: Köprülü, Portal/Yarı Portal, Konsol, Tek/Çift Kiriş detayları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ Köprülü Raylı Vinç (Overhead Crane) Özellikleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Köprülü raylı vinçler, bina kolonlarına monte edilen ray hattı üzerinde hareket
                eden ana kiriş ve bu kiriş üzerinde yatay hareket eden vinç arabasından oluşur.
                Üretim tesislerinde en yaygın kullanılan model olup, salon genişliğinin tamamına
                yakın bir çalışma alanı sunar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌉 Portal ve Yarı Portal Raylı Vinç Nedir?</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Portal vinçler kendi taşıyıcı ayakları üzerinde durarak mevcut bir bina yapısına
                ihtiyaç duymaz; açık sahalarda tercih edilir. Yarı portal vinçlerde ise bir taraf
                bina kolonuna, diğer taraf kendi ayağına oturur; bu hibrit yapı maliyet
                avantajı sağlar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📐 Konsol (Jib) Raylı Vinç Kullanım Avantajları</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Konsol vinçler, duvara veya tekil bir kolona monte edilerek dönebilen kol
                yapısıyla sabit bir nokta etrafında çalışma alanı oluşturur. Az yer kaplaması ve
                hızlı kurulumu sayesinde atölye ve bakım istasyonlarında sıkça tercih edilir.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚖️ Tek Kiriş ve Çift Kiriş Raylı Vinç Karşılaştırması</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tek kirişli vinçler daha düşük tavan yüksekliği gerektirir ve ekonomik bir
                çözümdür; genellikle 10 tona kadar kapasitelerde kullanılır. Çift kirişli
                vinçler ise daha geniş açıklık ve daha yüksek kapasiteye imkân tanıyarak ağır
                sanayi uygulamalarında tercih edilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raylı Vinç ile Diğer Vinç Türleri Arasındaki Fark */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Karşılaştırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç ile Diğer Vinç Türleri Arasındaki Fark</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Raylı vinçler sabit bir hat üzerinde çalışırken, mobil ve sepetli vinçler saha
              içinde özgürce konumlanabilir. Doğru sistemi seçmek, kullanım sıklığı ve çalışma
              alanının yapısına bağlıdır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🛤️ Raylı Vinç</h3>
              <p className="text-gray-500 text-sm">Sabit ray hattında çalışır, tekrarlanan üretim taşımaları için en verimli çözümdür.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🚚 Mobil Vinç</h3>
              <p className="text-gray-500 text-sm">Tekerlekli veya paletli şasi ile saha içinde özgürce hareket edebilir.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🧺 Sepetli Vinç</h3>
              <p className="text-gray-500 text-sm">Yük taşımak yerine personeli yükseğe çıkararak erişim ihtiyacını karşılar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Raylı Vincin Kullanım Alanları */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vincin Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Raylı vinçler hangi sektörlerde ve projelerde kullanılır?</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {kullanimAlanlari.map((k) => (
              <div key={k.title} className="flex gap-4 p-6 bg-white rounded-2xl hover:bg-yellow-50 transition group">
                <div className="text-4xl shrink-0">{k.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-700">{k.title}</h3>
                  <p className="text-gray-500 text-sm">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* H3: Fabrika, Liman, Çelik, Depo detayları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏭 Fabrika ve Üretim Tesislerinde Raylı Vinç Kullanımı</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Üretim hatlarında hammadde, yarı mamul ve bitmiş ürünlerin istasyonlar arasında
                taşınması raylı vinçlerle gerçekleştirilir. Sabit hat sayesinde taşıma rotaları
                standartlaşır ve üretim verimliliği artar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚢 Liman ve Konteyner Terminallerinde Raylı Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Liman sahalarında konteyner ve dökme yük aktarma işlemleri, yüksek kapasiteli
                portal tipi raylı vinçlerle yürütülür. Sürekli ve yoğun çalışma koşullarına
                uygun, ağır hizmet sınıfı sistemler tercih edilir.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔩 Çelik Sektöründe Raylı Vinç Uygulamaları</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sıcak haddehane, döküm ve çelik servis merkezlerinde yüksek sıcaklığa dayanıklı
                özel donanımlı çift kirişli raylı vinçler kullanılır. Ağır ve hassas yüklerin
                kontrollü taşınması iş güvenliği açısından kritik önem taşır.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📦 Depo ve Lojistik Merkezlerinde Raylı Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Geniş depo alanlarında palet, rulo ve büyük hacimli ürünlerin istiflenmesinde
                raylı vinçler forklift kullanımına kıyasla daha az alan kaplayarak depolama
                kapasitesini artırır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raylı Vinç Teknik Özellikleri */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Mühendislik</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Teknik Özellikleri</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Raylı vinç performansını belirleyen temel parametreler açıklık mesafesi, kaldırma
              yüksekliği, hız ve kullanım sınıfıdır. Doğru teknik özelliklerin seçimi, sistemin
              ömrünü ve güvenliğini doğrudan etkiler.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📏 Açıklık (Span)</h3>
              <p className="text-gray-500 text-sm">Ray hatları arasındaki mesafedir; bina genişliğine ve kullanım amacına göre belirlenir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⬆️ Kaldırma Yüksekliği</h3>
              <p className="text-gray-500 text-sm">Kancanın en üst ve en alt nokta arasında hareket edebildiği toplam mesafedir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🚀 Hareket Hızları</h3>
              <p className="text-gray-500 text-sm">Köprü, vinç arabası ve kaldırma mekanizmasının ayrı ayrı hız değerleri vardır.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏷️ Kullanım Sınıfı (FEM/DIN)</h3>
              <p className="text-gray-500 text-sm">Günlük çalışma süresi ve yük spektrumuna göre belirlenen sınıflandırmadır.</p>
            </div>
          </div>

          {/* H3: Ray sistemi + Elektrik motor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛤️ Raylı Vinç Ray Sistemi Seçimi ve Hesaplama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ray profili seçimi; tekerlek yükü, açıklık ve kullanım sınıfına göre yapılan
                statik hesaplarla belirlenir. Yanlış ray seçimi erken aşınmaya, tekerlek
                hasarına ve sistem duruşlarına yol açabilir; bu nedenle hesaplamalar mutlaka
                yetkili mühendislik ekibi tarafından yapılmalıdır.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Elektrik Motorlu ve Frekans Kontrollü Sistemler</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Frekans kontrollü (inverter) sürücüler, vinç hareketlerinde yumuşak başlama ve
                durma sağlayarak hem yük sallanmasını azaltır hem de mekanik parçalar üzerindeki
                yükü düşürür. Hassas konumlandırma gerektiren uygulamalarda tercih edilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raylı Vinç Kapasite ve Taşıma Kapasitesi */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Kapasite Rehberi</p>
            <h2 className="text-4xl font-black mb-4">Raylı Vinç Kapasite ve Taşıma Kapasitesi</h2>
            <p className="text-gray-400 text-lg">Kapasite aralıkları, açıklık değerleri ve tipik kullanım örnekleri.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Kapasite Aralığı</th>
                  <th className="text-center px-6 py-4 font-semibold">Tipik Açıklık</th>
                  <th className="text-left px-6 py-4 font-semibold">Kullanım Alanı</th>
                </tr>
              </thead>
              <tbody>
                {kapasiteTablosu.map((k, i) => (
                  <tr key={k.aralik} className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}>
                    <td className="px-6 py-4 font-medium text-white">{k.aralik}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{k.aciklik}</td>
                    <td className="px-6 py-4 text-gray-300">{k.kullanim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Değerler genel referans amaçlıdır; nihai kapasite mühendislik hesabıyla netleştirilir.
          </p>
        </div>
      </section>

      {/* Raylı Vinç Kurulum ve Montaj Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Kurulum ve Montaj Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel raylı vinç kurulumu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kurulumAdimlari.map((a) => (
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

      {/* Raylı Vinç Kiralama Fiyatları */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Raylı Vinç Kiralama Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar vinç tipi, kapasite ve proje süresine göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Raylı Vinç Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Saatlik</th>
                  <th className="text-center px-6 py-4 font-semibold">Günlük</th>
                  <th className="text-center px-6 py-4 font-semibold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosuKiralama.map((f, i) => (
                  <tr key={f.tur} className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}>
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

          {/* H3: Günlük / Aylık Karşılaştırma + Fiyatı Etkileyen Faktörler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">📅 Günlük ve Aylık Kiralama Fiyat Karşılaştırması</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kısa süreli projelerde günlük kiralama esneklik sağlarken, 1 aydan uzun
                projelerde aylık paketler birim maliyeti önemli ölçüde düşürür. Genel olarak
                15 günü aşan kullanımlarda aylık kiralama daha avantajlı hale gelir.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">📋 Fiyatı Etkileyen Faktörler</h3>
              <div className="space-y-2 mt-3">
                {[
                  "Vinç tipi ve kaldırma kapasitesi",
                  "Açıklık mesafesi ve kaldırma yüksekliği",
                  "Kurulum / söküm ihtiyacı",
                  "Operatör hizmeti gerekliliği",
                ].map((f) => (
                  <div key={f} className="flex gap-3 items-start">
                    <span className="text-yellow-400 font-bold shrink-0">●</span>
                    <p className="text-gray-300 text-sm">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raylı Vinç Satın Alma Rehberi */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Satın Alma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Satın Alma Rehberi</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Sık kullanılan ve uzun vadeli ihtiyaçlarda satın alma, kiralamaya göre daha
              ekonomik olabilir. Doğru kararı vermek için aşağıdaki kriterleri değerlendirin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "🧮", title: "Kapasite ve Açıklık Hesabı", desc: "Gerçek yük ve açıklık ihtiyacına göre doğru boyutlandırma yapılmalıdır." },
              { icon: "🏷️", title: "Kullanım Sınıfı (FEM/DIN)", desc: "Günlük çalışma yoğunluğuna uygun sınıf seçimi ekipman ömrünü belirler." },
              { icon: "🔧", title: "Marka ve Yedek Parça", desc: "Yedek parça temin süresi ve servis ağı uzun vadede maliyeti etkiler." },
              { icon: "📄", title: "Garanti ve Servis Anlaşması", desc: "Periyodik bakım ve garanti kapsamı satın alma kararında önemli rol oynar." },
            ].map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* H3: Marka karşılaştırması */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏆 Demag, Konecranes, Stahl: Popüler Marka Karşılaştırması</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="text-left px-5 py-3 font-semibold">Marka</th>
                    <th className="text-left px-5 py-3 font-semibold">Öne Çıkan Yönü</th>
                    <th className="text-left px-5 py-3 font-semibold">Uygun Olduğu Kullanım</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-5 py-3 font-medium text-gray-900">Demag</td>
                    <td className="px-5 py-3 text-gray-600">Kompakt yapı ve geniş ürün gamı</td>
                    <td className="px-5 py-3 text-gray-600">Orta-yüksek kapasiteli sanayi tesisleri</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-900">Konecranes</td>
                    <td className="px-5 py-3 text-gray-600">Akıllı vinç teknolojileri ve geniş servis ağı</td>
                    <td className="px-5 py-3 text-gray-600">Liman, çelik ve ağır sanayi uygulamaları</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-5 py-3 font-medium text-gray-900">Stahl CraneSystems</td>
                    <td className="px-5 py-3 text-gray-600">Modüler bileşenler ve esnek konfigürasyon</td>
                    <td className="px-5 py-3 text-gray-600">Özel projeler ve patlama korumalı ortamlar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              * Karşılaştırma genel sektör bilgisine dayanmaktadır; güncel model ve fiyat bilgisi için üretici ile görüşülmesi önerilir.
            </p>
          </div>
        </div>
      </section>

      {/* Raylı Vinç Bakımı ve Periyodik Kontroller */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Bakım</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Bakımı ve Periyodik Kontroller</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Düzenli bakım, hem iş güvenliğini sağlar hem de beklenmeyen duruşları önleyerek
                ekipman ömrünü uzatır. Periyodik kontroller, yetkili teknik personel tarafından
                belirli aralıklarla gerçekleştirilmelidir.
              </p>
            </div>
            <div className="space-y-3">
              {bakimKontrolListesi.map((kural) => (
                <div key={kural} className="flex gap-3 items-start bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                  <p className="text-gray-700 text-sm">{kural}</p>
                </div>
              ))}
            </div>
          </div>

          {/* H3: Bakım planı nasıl oluşturulur */}
          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🗂️ Raylı Vinç Bakım Planı Nasıl Oluşturulur?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { baslik: "Günlük Kontrol", aciklama: "Operatör tarafından görsel kontrol ve fonksiyon testi" },
                { baslik: "Aylık Bakım", aciklama: "Yağlama, fren ve elektrik bağlantı kontrolleri" },
                { baslik: "Yıllık Genel Bakım", aciklama: "Detaylı yapısal ve mekanik ekspertiz raporu" },
                { baslik: "Kayıt Tutma", aciklama: "Tüm bakım ve arıza geçmişinin belgelenmesi" },
              ].map((b) => (
                <div key={b.baslik} className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{b.baslik}</h4>
                  <p className="text-gray-500 text-xs">{b.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Raylı Vinç Güvenlik Standartları ve Belgeler */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Güvenlik Standartları ve Belgeler</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Ağır yük taşıyan tüm raylı vinç sistemlerinde güvenlik en öncelikli konudur.
                Sistemlerimiz ilgili Avrupa ve ulusal standartlara uygun şekilde üretilir,
                kurulur ve periyodik olarak denetlenir.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikBelgeleri.map((kural) => (
                <div key={kural} className="flex gap-3 items-start bg-white/60 rounded-xl p-4">
                  <span className="text-green-700 font-bold text-lg shrink-0">✓</span>
                  <p className="text-gray-800 text-sm">{kural}</p>
                </div>
              ))}
            </div>
          </div>

          {/* H3: CE belgesi ve FEM/DIN standartları */}
          <div className="mt-12 bg-white/70 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">📜 CE Belgesi ve FEM / DIN Standartları</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              CE işareti, vinç sisteminin Avrupa Birliği makine güvenliği gerekliliklerini
              karşıladığını gösterir. FEM (Fédération Européenne de la Manutention) ve DIN
              standartları ise vinçlerin kullanım sınıfını, yük spektrumunu ve yapısal
              tasarım kriterlerini tanımlayarak doğru ve güvenli boyutlandırmanın temelini
              oluşturur. Bu belgeler, hem yeni hem de ikinci el sistemlerde aranması gereken
              temel güvence unsurlarıdır.
            </p>
          </div>
        </div>
      </section>

      {/* İkinci El Raylı Vinç Alırken Dikkat Edilmesi Gerekenler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">İkinci El Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İkinci El Raylı Vinç Alırken Dikkat Edilmesi Gerekenler</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              İkinci el raylı vinç almak, doğru kontroller yapıldığında bütçe açısından avantaj
              sağlayabilir. Karar vermeden önce aşağıdaki noktaları mutlaka değerlendirin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🔍", title: "Yapısal Kontrol", desc: "Ana kiriş, kaynak noktaları ve taşıyıcı elemanlarda deformasyon olup olmadığı incelenmelidir." },
              { icon: "⛓️", title: "Halat ve Kanca Durumu", desc: "Aşınma, kopma ve deformasyon belirtileri taşıma güvenliğini doğrudan etkiler." },
              { icon: "⚙️", title: "Motor ve Redüktör Durumu", desc: "Anormal ses, ısınma ve yağ kaçağı belirtileri detaylı kontrol edilmelidir." },
              { icon: "📑", title: "Bakım Geçmişi ve Belgeler", desc: "Periyodik kontrol raporları ve bakım kayıtları satıcıdan talep edilmelidir." },
              { icon: "🏷️", title: "Kullanım Sınıfı Uygunluğu", desc: "Vinçin önceki kullanım yoğunluğu, yeni kullanım amacınızla örtüşmelidir." },
              { icon: "💰", title: "Fiyat-Performans Analizi", desc: "Tadilat ve nakliye maliyetleri toplam fiyata eklenerek karşılaştırma yapılmalıdır." },
            ].map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
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

      {/* SSS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Raylı Vinç Hakkında Sıkça Sorulan Sorular</h2>
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
            7/24 hizmetinizdeyiz. Hemen arayın, projenize en uygun raylı vinç sistemini birlikte belirleyelim.
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
