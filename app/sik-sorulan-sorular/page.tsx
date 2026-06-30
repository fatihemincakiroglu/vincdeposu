import type { Metadata } from "next";
import Link from "next/link";
import { sssKategorileri, tumSorular } from "./data";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Vinç ve Manlift Kiralama Rehberi",
  description:
    "Kiralık vinç, manlift, forklift ve telehandler hakkında 100+ soru ve cevap: fiyatlandırma, operatör, güvenlik, sözleşme ve teknik detaylar.",
  alternates: {
    canonical: "/sik-sorulan-sorular",
  },
  keywords: ["vinç kiralama sss", "manlift sık sorulan sorular", "kiralık vinç fiyat soruları"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: tumSorular.map((s) => ({
    "@type": "Question",
    name: s.soru,
    acceptedAnswer: { "@type": "Answer", text: s.cevap },
  })),
};

export default function SikSorulanSorularPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Bilgi Merkezi
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Sık Sorulan Sorular</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Vinç, manlift, forklift ve telehandler kiralama hakkında {tumSorular.length}+
            soruyu kategorilere ayırdık. Aradığınızı bulamazsanız bize doğrudan ulaşabilirsiniz.
          </p>
          <a
            href="tel:05323039089"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl mt-8 transition"
          >
            📞 0532 303 90 89
          </a>
        </div>
      </section>

      {/* Kategori hızlı linkler */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto whitespace-nowrap">
          {sssKategorileri.map((k) => (
            <a
              key={k.kategori}
              href={`#${slugify(k.kategori)}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-full hover:border-yellow-400 hover:text-yellow-700 transition"
            >
              <span>{k.icon}</span> {k.kategori}
            </a>
          ))}
        </div>
      </section>

      {/* Kategoriler ve sorular */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          {sssKategorileri.map((k) => (
            <div key={k.kategori} id={slugify(k.kategori)} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{k.icon}</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">{k.kategori}</h2>
                <span className="text-sm text-gray-400 font-medium">({k.sorular.length} soru)</span>
              </div>
              <div className="space-y-3">
                {k.sorular.map((s) => (
                  <details
                    key={s.soru}
                    className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 transition open:border-yellow-300 open:shadow-sm"
                  >
                    <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>❓ {s.soru}</span>
                      <span className="text-yellow-500 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3 pt-3 border-t border-gray-100">
                      {s.cevap}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4">Sorunuzun cevabını bulamadınız mı?</h2>
          <p className="text-gray-400 mb-8">Uzman ekibimiz size doğrudan yardımcı olsun.</p>
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

function slugify(text: string) {
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
