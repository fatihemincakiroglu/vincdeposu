import type { Metadata } from "next";
import Link from "next/link";
import VincIcon from "@/components/VincIcon";
import { tumIlceler } from "@/lib/districts";

export const metadata: Metadata = {
  title: { absolute: "Zeytinburnu Kiralık Manlift | Zeytinburnu Manlift Kiralama Fiyatları" },
  description:
    "Zeytinburnu kiralık manlift hizmeti: Kazlıçeşme, Merkezefendi ve deri sanayi bölgesi çevresinde makaslı, eklemli, dikey ve teleskopik platform kiralama. Aynı gün teslim, operatör destekli. 0532 303 90 89",
  alternates: { canonical: "https://vincdeposu.com.tr/zeytinburnu-kiralik-manlift" },
};

const platformlar = [
  { icon: "makasli", title: "Makaslı Platform", desc: "Geniş sepetli, ekip çalışmasına uygun dikey erişim; akülü modeller kapalı alan işlerinin standardı.", href: "/makasli-platform" },
  { icon: "eklemli", title: "Eklemli Platform", desc: "Mafsallı bomuyla engel aşarak çalışır; cephe ve bakım işlerinin en esnek çözümü.", href: "/eklemli-platform" },
  { icon: "orumcek", title: "Örümcek Platform", desc: "Dar kapıdan girip yüksekte çalışır; iç mekân ve hassas zemin işlerinin uzmanı.", href: "/orumcek-platform" },
  { icon: "manlift", title: "Teleskopik Platform", desc: "Maksimum yükseklik ve yatay erişim; yüksek cephe ve endüstriyel dış sahalar için.", href: "/kiralik-manlift" },
]as const;

const fiyatlar = [
  { tur: "Akülü Makaslı", gunluk: "4.000 TL", haftalik: "22.000 TL", aylik: "90.000 TL" },
  { tur: "Dizel Makaslı", gunluk: "8.000 TL", haftalik: "45.000 TL", aylik: "140.000 TL" },
  { tur: "Akülü Eklemli", gunluk: "7.000 TL", haftalik: "38.000 TL", aylik: "150.000 TL" },
  { tur: "Dizel Eklemli", gunluk: "12.000 TL", haftalik: "65.000 TL", aylik: "220.000 TL" },
  { tur: "Teleskopik", gunluk: "15.000 TL", haftalik: "85.000 TL", aylik: "280.000 TL" },
]as const;

const sorular = [
  {
    soru: "Zeytinburnu'nda manlift kiralama fiyatları ne kadar?",
    cevap: "Fiyat; platform türü, yakıt tipi ve süreye göre değişir. Zeytinburnu'nda akülü makaslı platformlar günlük 4.000 TL'den, eklemli platformlar 7.000 TL'den başlar; nakliye mesafeye göre teklife eklenir.",
  },
  {
    soru: "Zeytinburnu'na aynı gün manlift teslimatı yapılıyor mu?",
    cevap: "Evet. İkitelli'deki merkezimizden çekiciyle yapılan sevkiyatlarla Zeytinburnu bölgesine çoğu işte aynı gün teslimat mümkündür; sabah gelen taleplerde öğleden sonra makine sahada olabilir.",
  },
  {
    soru: "Zeytinburnu'nda hangi platform türü daha çok tercih ediliyor?",
    cevap: "Zeytinburnu'nun iş dokusunda Kazlıçeşme kulelerinin cam işleri ve sanayi tesislerinin tavan-tesisat bakımları öne çıktığı için bölgede en çok makaslı platform talep edilir. Yine de doğru tür işin geometrisine göre belirlenir; fotoğraf paylaşmanız hâlinde ücretsiz yönlendirme yapıyoruz.",
  },
  {
    soru: "Operatörsüz manlift kiralayabilir miyim?",
    cevap: "Makaslı ve eklemli platformlarda, kullanıcı personelinize teslimat sırasında uygulamalı kullanım brifingi vererek operatörsüz kiralama yapılabilir. Örümcek ve teleskopik sınıfta operatörlü hizmet öneriyoruz.",
  },
]as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sorular.map((s) => ({
    "@type": "Question",
    name: s.soru,
    acceptedAnswer: { "@type": "Answer", text: s.cevap },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Zeytinburnu Kiralık Manlift",
  serviceType: "Manlift Kiralama",
  url: "https://vincdeposu.com.tr/zeytinburnu-kiralik-manlift",
  provider: { "@type": "LocalBusiness", name: "Vinç Deposu", telephone: "+905323039089", url: "https://vincdeposu.com.tr" },
  areaServed: { "@type": "City", name: "Zeytinburnu, İstanbul" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://vincdeposu.com.tr" },
    { "@type": "ListItem", position: 2, name: "Kiralık Manlift", item: "https://vincdeposu.com.tr/kiralik-manlift" },
    { "@type": "ListItem", position: 3, name: "Zeytinburnu Kiralık Manlift", item: "https://vincdeposu.com.tr/zeytinburnu-kiralik-manlift" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-950 text-white py-24 px-4 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-4">Avrupa Yakası · Aynı Gün Teslim</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Zeytinburnu Kiralık Manlift</h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-8">
            Kazlıçeşme, Merkezefendi ve deri sanayi bölgesi çevresinde makaslı, eklemli, dikey, teleskopik ve örümcek platform kiralama. Periyodik
            bakımlı makineler, kullanım brifingi ve 7/24 destek ile Zeytinburnu&apos;nda yüksekte çalışmanın güvenli adresi.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:05323039089" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl transition">0532 303 90 89</a>
            <a href="https://wa.me/905323039089" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition">WhatsApp&apos;tan Yazın</a>
          </div>
        </div>
      </section>

      {/* Platform türleri */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Ekipmanlar</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Zeytinburnu&apos;nda Kiralayabileceğiniz Platform Türleri</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformlar.map((p) => (
              <Link key={p.title} href={p.href} className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-lg transition">
                <span className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-gray-800 group-hover:bg-yellow-400 transition-colors mb-4">
                  <VincIcon name={p.icon} className="w-7 h-7" />
                </span>
                <h3 className="font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyatlar */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Güncel Fiyatlar</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3">Zeytinburnu Manlift Kiralama Fiyatları 2026</h2>
            <p className="text-gray-400">Başlangıç fiyatlarıdır; yükseklik arttıkça fiyat yükselir, süre uzadıkça birim maliyet düşer.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-gray-300">
                  <th className="text-left px-5 py-3 font-semibold">Platform Türü</th>
                  <th className="text-center px-5 py-3 font-semibold">Günlük</th>
                  <th className="text-center px-5 py-3 font-semibold">Haftalık</th>
                  <th className="text-center px-5 py-3 font-semibold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatlar.map((f) => (
                  <tr key={f.tur} className="border-t border-gray-800 hover:bg-gray-900 transition">
                    <td className="px-5 py-3.5 font-medium whitespace-nowrap">{f.tur}</td>
                    <td className="px-5 py-3.5 text-center text-yellow-400 whitespace-nowrap">{f.gunluk}&apos;den</td>
                    <td className="px-5 py-3.5 text-center text-yellow-400 whitespace-nowrap">{f.haftalik}&apos;den</td>
                    <td className="px-5 py-3.5 text-center text-yellow-400 whitespace-nowrap">{f.aylik}&apos;den</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">Fiyatlara KDV ve nakliye (çekici) dahil değildir. Detaylı liste için <Link href="/kiralik-manlift" className="text-yellow-400 hover:underline">kiralık manlift</Link> sayfamıza bakın.</p>
        </div>
      </section>

      {/* İlçe anlatımı */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Zeytinburnu&apos;nda Manlift Kiralama Hakkında</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>Zeytinburnu&apos;nun manlift taleplerinin büyük bölümü Kazlıçeşme, Merkezefendi ve deri sanayi bölgesi çevresinden gelir; bölgede Kazlıçeşme kulelerinin cam işleri ve sanayi tesislerinin tavan-tesisat bakımları başı çeker. Bu tabloya en sık cevap veren sınıf makaslı platform olsa da filomuzdaki tüm türler Zeytinburnu&apos;na aynı gün yönlendirilebilir.</p>
            <p>Fabrika ve atölye yoğunluğu, manlift talebinin büyük kısmını iç mekâna taşır: tavan vinci bakımı, aydınlatma armatürü değişimi, havalandırma kanalı montajı ve yüksek raf kurulumları akülü makaslı platformların günlük işleridir. Epoksi zeminlerde iz bırakmayan beyaz lastikli modeller yönlendirilir.</p>
            <p>Sevkiyatlar İkitelli&apos;deki merkezimizden Avrupa Yakası güzergâhlarıyla planlanır; makineler çekiciyle taşınır ve teslimatta çalışır durumda oldukları birlikte test edilir. Kullanıcı personelinize uygulamalı kullanım brifingi verilir, uzun süreli kiralamalarda periyodik bakım tarafımızdan sürdürülür ve arıza hâlinde aynı gün ikame makine gönderilir.</p>
            <p>Doğru teklif için işin adresini, çalışılacak yüksekliği ve mümkünse alanın bir fotoğrafını iletmeniz yeterli: aynı gün içinde tür önerisi ve kalem kalem fiyat dökümüyle dönüş yapıyoruz. Zeytinburnu&apos;nda referans işlerimiz mevcuttur; bölgenizdeki örnekleri sormanız yeterli.</p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">SSS</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Zeytinburnu Manlift Kiralama Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {sorular.map((s) => (
              <div key={s.soru} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{s.soru}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer ilçeler */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Diğer İlçelerde Kiralık Manlift</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/istanbul-kiralik-manlift" className="px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold hover:bg-yellow-500 transition">İstanbul Geneli</Link>
            {tumIlceler.filter((i) => i.slug !== "zeytinburnu").map((i) => (
              <Link key={i.slug} href={`/${i.slug}-kiralik-manlift`} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium hover:border-yellow-400 hover:text-yellow-600 transition">
                {i.ad}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Zeytinburnu&apos;nda Manlift mi Lazım?</h2>
          <p className="text-gray-400 mb-8">Adres ve iş bilgisini iletin, aynı gün makineniz sahada olsun.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:05323039089" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition">0532 303 90 89</a>
            <a href="https://wa.me/905323039089" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
