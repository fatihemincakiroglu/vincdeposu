import type { Metadata } from "next";
import Link from "next/link";
import VincIcon from "@/components/VincIcon";
import { avrupaYakasi, anadoluYakasi } from "@/lib/districts";

export const metadata: Metadata = {
  title: { absolute: "İstanbul Kiralık Manlift | 39 İlçede Manlift Kiralama" },
  description:
    "İstanbul kiralık manlift: 39 ilçenin tamamında makaslı, eklemli, dikey, teleskopik ve örümcek platform kiralama. Aynı gün teslim, periyodik bakımlı makineler. 0532 303 90 89",
  alternates: { canonical: "https://vincdeposu.com.tr/istanbul-kiralik-manlift" },
};

const platformlar = [
  { icon: "makasli", title: "Makaslı Platform", href: "/makasli-platform" },
  { icon: "eklemli", title: "Eklemli Platform", href: "/eklemli-platform" },
  { icon: "orumcek", title: "Örümcek Platform", href: "/orumcek-platform" },
  { icon: "manlift", title: "Teleskopik Platform", href: "/kiralik-manlift" },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://vincdeposu.com.tr" },
    { "@type": "ListItem", position: 2, name: "Kiralık Manlift", item: "https://vincdeposu.com.tr/kiralik-manlift" },
    { "@type": "ListItem", position: 3, name: "İstanbul Kiralık Manlift", item: "https://vincdeposu.com.tr/istanbul-kiralik-manlift" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "İstanbul Kiralık Manlift",
  serviceType: "Manlift Kiralama",
  url: "https://vincdeposu.com.tr/istanbul-kiralik-manlift",
  provider: { "@type": "LocalBusiness", name: "Vinç Deposu", telephone: "+905323039089", url: "https://vincdeposu.com.tr" },
  areaServed: { "@type": "City", name: "İstanbul" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-950 text-white py-24 px-4 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-4">39 İlçe · Aynı Gün Teslim</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">İstanbul Kiralık Manlift</h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-8">
            Avrupa ve Anadolu yakasının tamamında makaslı, eklemli, dikey, teleskopik ve örümcek platform kiralama.
            İkitelli&apos;deki merkezimizden her ilçeye çekicili sevkiyat, kullanım brifingi ve 7/24 destek.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:05323039089" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl transition">0532 303 90 89</a>
            <a href="https://wa.me/905323039089" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition">WhatsApp&apos;tan Yazın</a>
          </div>
        </div>
      </section>

      {/* Giriş */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4">
          <p>
            İstanbul&apos;da manlift kiralamak, ilçeden ilçeye değişen koşulları yönetmek demektir: Maslak
            kulelerinin rüzgârlı cepheleri, tarihi yarımadanın hassas zeminli iç mekânları, Tuzla&apos;nın
            tersane sahaları ve Adalar&apos;ın araç kısıtlı sokakları aynı makine parkıyla ama farklı planlama
            disiplinleriyle çalışır. Bu sayfadan ilçenizin kendi manlift sayfasına ulaşabilir, bölgeye özgü
            koşulları ve öne çıkan platform türlerini görebilirsiniz.
          </p>
          <p>
            Filomuz akülü makaslılardan 43 metrelik teleskopiklere uzanır; tüm makineler periyodik bakımlı ve
            muayene raporludur. Fiyatlandırma platform türü, yakıt tipi ve süreye göre şekillenir — detaylı
            liste için{" "}
            <Link href="/kiralik-manlift" className="text-yellow-600 font-semibold hover:underline">
              kiralık manlift
            </Link>{" "}
            sayfamıza göz atabilirsiniz.
          </p>
        </div>
      </section>

      {/* Platform türleri */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Platform Türleri</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {platformlar.map((p) => (
              <Link key={p.title} href={p.href} className="group bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-yellow-300 hover:shadow-lg transition">
                <span className="w-12 h-12 mx-auto rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-gray-800 group-hover:bg-yellow-400 transition-colors mb-3">
                  <VincIcon name={p.icon} className="w-7 h-7" />
                </span>
                <span className="font-bold text-gray-900 text-sm group-hover:text-yellow-600 transition">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* İlçeler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center">İlçenize Özel Manlift Sayfaları</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-black text-gray-400 uppercase tracking-widest text-sm mb-4">Avrupa Yakası</h3>
              <div className="flex flex-wrap gap-2">
                {avrupaYakasi.map((i) => (
                  <Link key={i.slug} href={`/${i.slug}-kiralik-manlift`} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium hover:border-yellow-400 hover:text-yellow-600 transition">
                    {i.ad}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-black text-gray-400 uppercase tracking-widest text-sm mb-4">Anadolu Yakası</h3>
              <div className="flex flex-wrap gap-2">
                {anadoluYakasi.map((i) => (
                  <Link key={i.slug} href={`/${i.slug}-kiralik-manlift`} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium hover:border-yellow-400 hover:text-yellow-600 transition">
                    {i.ad}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">İstanbul&apos;un Neresinde Olursanız Olun</h2>
          <p className="text-gray-400 mb-8">Adres ve iş bilgisini iletin, aynı gün platformunuz sahada olsun.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:05323039089" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition">0532 303 90 89</a>
            <a href="https://wa.me/905323039089" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
