import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sabit-vinc",
  },
  title: "Sabit Vinç | Kolon, Duvar ve Zemin Tipi Sabit Vinç Sistemleri",
  description:
    "Sabit vinç modelleri, kapasite seçenekleri, fiyatları ve montaj süreci. 125 kg – 5 ton kapasite aralığında kolon, duvar ve zemin tipi sabit vinç çözümleri. 0532 303 90 89",
};

/* ---------------- VERİ KÜMELERİ ---------------- */

const sabitVincModelleri = [
  {
    icon: "🗼",
    title: "Kolon Tipi Sabit Vinç",
    desc: "Zemine sabitlenen dikey bir kolon etrafında dönebilen kol yapısıyla geniş bir çalışma alanı sunar.",
    kapasite: "125 kg – 2 ton",
    href: "/kolon-tipi-sabit-vinc",
    ozellikler: ["360° dönüş", "Bağımsız montaj", "Esnek konumlandırma"],
  },
  {
    icon: "🧱",
    title: "Duvar Tipi Sabit Vinç",
    desc: "Mevcut duvar veya kolona monte edilerek zeminden bağımsız, az yer kaplayan bir çözüm sağlar.",
    kapasite: "125 kg – 1 ton",
    href: "/duvar-tipi-sabit-vinc",
    ozellikler: ["Az yer kaplar", "Hızlı montaj", "Ekonomik"],
  },
  {
    icon: "⚙️",
    title: "Zemin Montajlı Sabit Vinç",
    desc: "Taban plakası ile zemine sabitlenen, yüksek stabilite gerektiren ağır işler için tercih edilen model.",
    kapasite: "500 kg – 5 ton",
    href: "/zemin-montajli-sabit-vinc",
    ozellikler: ["Yüksek stabilite", "Ağır iş yükü", "Sağlam taşıyıcı"],
  },
];

const fiyatTablosu = [
  { tur: "125 kg Duvar Tipi Sabit Vinç", fiyat: "18.000 – 28.000 TL" },
  { tur: "250 kg Kolon Tipi Sabit Vinç", fiyat: "25.000 – 38.000 TL" },
  { tur: "500 kg Kolon Tipi Sabit Vinç", fiyat: "35.000 – 52.000 TL" },
  { tur: "1 Ton Zemin Montajlı Sabit Vinç", fiyat: "55.000 – 80.000 TL" },
  { tur: "2 Ton Zemin Montajlı Sabit Vinç", fiyat: "80.000 – 120.000 TL" },
  { tur: "5 Ton Zemin Montajlı Sabit Vinç", fiyat: "Teklif Alınız" },
];

const kullanimAlanlari = [
  { icon: "🔧", title: "Atölyeler", desc: "Parça montajı ve sökme işlemlerinde tekrarlı kaldırma ihtiyacı" },
  { icon: "🏭", title: "Üretim Hatları", desc: "İstasyonlar arası malzeme ve yarı mamul taşıma" },
  { icon: "📦", title: "Depolar", desc: "Ağır parça ve ekipmanların istiflenmesi" },
  { icon: "🛠️", title: "Servis Merkezleri", desc: "Bakım ve onarım sırasında motor, parça kaldırma" },
  { icon: "🚗", title: "Otomotiv Servisleri", desc: "Motor ve şanzıman söküm-takma işlemleri" },
  { icon: "🏗️", title: "İnşaat Şantiyeleri", desc: "Sabit nokta etrafında tekrarlanan kaldırma işleri" },
];

const montajAdimlari = [
  { no: "01", title: "Saha Keşfi", desc: "Montaj noktası, zemin ve tavan yapısı yerinde incelenir." },
  { no: "02", title: "Kapasite Hesabı", desc: "Taşıma kapasitesi ve sabitleme noktası mühendislik hesabıyla belirlenir." },
  { no: "03", title: "Montaj", desc: "Seçilen model (kolon, duvar veya zemin tipi) uzman ekip tarafından kurulur." },
  { no: "04", title: "Test ve Teslim", desc: "Yük testi yapılır, kullanım eğitimi verilerek sistem teslim edilir." },
];

const bakimKontrolListesi = [
  "Halat, zincir ve kanca her periyodik bakımda kontrol edilir",
  "Dönüş ve kayma noktalarında yağlama düzenli yapılır",
  "Sabitleme cıvataları ve kaynak noktaları periyodik incelenir",
  "Fren ve kaldırma mekanizması fonksiyon testinden geçirilir",
  "Orijinal yedek parça kullanılarak servis hizmeti sağlanır",
  "Tüm bakım kayıtları belgelenerek arşivlenmektedir",
];

const sss = [
  {
    soru: "Sabit vinç nedir?",
    cevap: "Sabit vinç, belirli bir noktaya (kolon, duvar veya zemin) monte edilerek o nokta etrafında yük kaldırma ve taşıma işlemlerinde kullanılan endüstriyel kaldırma sistemidir.",
  },
  {
    soru: "Sabit vinç hangi kapasitelerde üretilir?",
    cevap: "Sabit vinçler genellikle 125 kg ile 5 ton arasında değişen kapasitelerde üretilir; ihtiyaca göre daha yüksek kapasiteli özel projeler de hazırlanabilir.",
  },
  {
    soru: "Kolon, duvar ve zemin tipi sabit vinç arasındaki fark nedir?",
    cevap: "Kolon tipi bağımsız bir direk üzerinde 360° dönebilir, duvar tipi mevcut bir duvara monte edilerek yer tasarrufu sağlar, zemin montajlı tip ise taban plakasıyla sabitlenerek daha ağır yükler için yüksek stabilite sunar.",
  },
  {
    soru: "Sabit vinç fiyatlarını ne etkiler?",
    cevap: "Kapasite, model tipi (kolon/duvar/zemin), kol uzunluğu, montaj zemininin durumu ve elektrikli veya manuel kaldırma tercihi fiyatı belirleyen ana etkenlerdir.",
  },
  {
    soru: "Sabit vinç montajı ne kadar sürer?",
    cevap: "Saha keşfi ve kapasite hesabı tamamlandıktan sonra standart bir sabit vinç montajı genellikle 1 – 3 iş günü içinde tamamlanır.",
  },
  {
    soru: "Sabit vinç için periyodik bakım gerekir mi?",
    cevap: "Evet. Güvenli kullanım için halat, kanca, sabitleme noktaları ve kaldırma mekanizmasının düzenli aralıklarla kontrol edilmesi gerekir.",
  },
];

/* ---------------- SCHEMA (JSON-LD) ---------------- */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sabit Vinç: Modelleri, Kapasiteleri ve Fiyatları",
  description:
    "Sabit vinç nedir, kolon/duvar/zemin tipi modelleri, kapasite seçenekleri, montaj süreci ve fiyatları.",
  datePublished: "2026-01-05",
  dateModified: "2026-06-29",
  author: { "@type": "Organization", name: "Sabit Vinç Satış ve Kurulum Hizmetleri" },
  publisher: { "@type": "Organization", name: "Sabit Vinç Satış ve Kurulum Hizmetleri" },
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
  serviceType: "Sabit Vinç Satış ve Montaj",
  provider: { "@type": "Organization", name: "Sabit Vinç Satış ve Kurulum Hizmetleri", telephone: "+905323039089" },
  areaServed: "İstanbul",
  description:
    "Kolon tipi, duvar tipi ve zemin montajlı sabit vinç satışı, kapasite hesabı, montaj ve bakım hizmetleri.",
};

export default function SabitVincPage() {
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
              🗼 Sabit Vinç Sistemleri
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Sabit <span className="text-yellow-400">Vinç</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Belirli bir noktaya monte edilen, yük kaldırma ve taşıma işlemlerinde kullanılan
              endüstriyel vinç sistemi. Kolon, duvar ve zemin tipi modellerle 125 kg&apos;dan
              5 tona kadar kapasite seçenekleri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#sabit-vinc-modelleri"
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
              { deger: "20+", label: "Yıllık Deneyim" },
              { deger: "125kg-5ton", label: "Kapasite Aralığı" },
              { deger: "39", label: "İlçede Hizmet" },
              { deger: "500+", label: "Kurulan Sistem" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-yellow-400">{s.deger}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sabit Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sabit Vinç Nedir?</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Sabit vinç, belirli bir noktaya monte edilen, yük kaldırma ve taşıma
              işlemlerinde kullanılan endüstriyel vinç sistemidir. Raylı veya mobil vinçlerin
              aksine sabit vinçler tek bir konumda çalışır ve genellikle bu konum etrafında
              dönebilen bir kol yapısına sahiptir. Tekrarlı kaldırma işlemlerinin belirli bir
              istasyonda yoğunlaştığı atölye, üretim ve servis ortamlarında düşük maliyetli ve
              etkili bir çözüm sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📍 Sabit Konum</h3>
              <p className="text-gray-500 text-sm">Belirli bir noktaya monte edilir, geniş bir alana ihtiyaç duymaz.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🔄 Dönebilen Kol</h3>
              <p className="text-gray-500 text-sm">Montaj noktası etrafında geniş bir çalışma açısı sağlar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">💰 Ekonomik Çözüm</h3>
              <p className="text-gray-500 text-sm">Raylı sistemlere kıyasla daha düşük yatırım ve montaj maliyeti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sabit Vinç Modelleri */}
      <section id="sabit-vinc-modelleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sabit Vinç Modelleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kolon tipi, duvar tipi ve zemin montajlı modeller farklı ihtiyaçlara göre seçilebilir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sabitVincModelleri.map((v) => (
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
        </div>
      </section>

      {/* Çalışma Kapasitesi ve Teknik Özellikler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Mühendislik</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Çalışma Kapasitesi ve Teknik Özellikler</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              125 kg&apos;dan 5 tona kadar kapasite seçenekleriyle geniş bir kullanım yelpazesi
              sunar. Kol uzunluğu, dönüş açısı ve kaldırma yüksekliği, montaj noktasının yapısal
              durumuna göre projeye özel belirlenir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl text-center">
              <div className="text-2xl font-black text-yellow-600 mb-1">125 kg – 500 kg</div>
              <p className="text-gray-500 text-sm">Hafif hizmet, atölye tipi kullanım</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl text-center">
              <div className="text-2xl font-black text-yellow-600 mb-1">500 kg – 1 ton</div>
              <p className="text-gray-500 text-sm">Orta hizmet, servis merkezi kullanımı</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl text-center">
              <div className="text-2xl font-black text-yellow-600 mb-1">1 – 2 ton</div>
              <p className="text-gray-500 text-sm">Üretim hattı ve depo kullanımı</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl text-center">
              <div className="text-2xl font-black text-yellow-600 mb-1">2 – 5 ton</div>
              <p className="text-gray-500 text-sm">Ağır hizmet, sanayi tipi kullanım</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Atölyeler, üretim hatları, depolar ve servis merkezlerinde etkin şekilde kullanılır.</p>
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
        </div>
      </section>

      {/* Sabit Vinç Fiyatları */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Sabit Vinç Fiyatları</h2>
            <p className="text-gray-400 text-lg">Model tipi, kapasite ve montaj gereksinimlerine göre fiyat teklifi alabilirsiniz.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Sabit Vinç Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Yaklaşık Fiyat (Montaj Dahil)</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr key={f.tur} className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}>
                    <td className="px-6 py-4 font-medium text-white">{f.tur}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.fiyat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar KDV hariç olup kol uzunluğu, zemin durumu ve proje detaylarına göre değişebilir.
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

      {/* Montaj ve Kurulum Süreci */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Montaj ve Kurulum Süreci</h2>
            <p className="text-gray-500 text-lg">Zemin ve tavan taşıma kapasitesi hesaplanarak uzman ekip tarafından güvenle kurulur.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {montajAdimlari.map((a) => (
              <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group bg-gray-50">
                <div className="text-5xl font-black text-yellow-400/30 group-hover:text-yellow-400/50 transition mb-4 leading-none">
                  {a.no}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bakım ve Servis Hizmetleri */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Uzun Ömürlü Kullanım</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Bakım ve Servis Hizmetleri</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Düzenli bakım programı ve orijinal yedek parça desteğiyle uzun ömürlü kullanım
                sağlanır. Teknik ekibimiz, sabit vinç sisteminizin güvenli ve verimli çalışmasını
                periyodik kontrollerle garanti altına alır.
              </p>
            </div>
            <div className="space-y-3">
              {bakimKontrolListesi.map((kural) => (
                <div key={kural} className="flex gap-3 items-start bg-white/60 rounded-xl p-4">
                  <span className="text-green-700 font-bold text-lg shrink-0">✓</span>
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-500 text-lg">Sabit vinç seçimi, kurulum süreci ve kapasite hesabına dair en çok sorulan sorular burada yanıtlanır.</p>
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
            7/24 hizmetinizdeyiz. Hemen arayın, ihtiyacınıza en uygun sabit vinç modelini birlikte belirleyelim.
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
