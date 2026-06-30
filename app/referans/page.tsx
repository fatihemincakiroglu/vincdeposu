import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { referanslar } from "./data";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "25 yılı aşkın tecrübemiz boyunca inşaat, sanayi, lojistik, perakende ve enerji sektörlerinden 80'den fazla kuruma vinç ve manlift kiralama hizmeti verdik.",
  alternates: {
    canonical: "/referans",
  },
};

const logolular = referanslar.filter((r) => r.logo);
const digerleri = referanslar.filter((r) => !r.logo);

// Kart üst şeridi için sabit, marka renklerine yakın bir döngü (deterministik — her isimde aynı renk çıkar)
const renkler = ["#FACC15", "#3B82F6", "#10B981", "#F97316", "#8B5CF6", "#EF4444"];
function renkSec(isim: string) {
  let hash = 0;
  for (let i = 0; i < isim.length; i++) hash = (hash + isim.charCodeAt(i)) % renkler.length;
  return renkler[hash];
}

export default function ReferansPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">
            25 Yıllık Güven
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Referanslarımız</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            İnşaat, sanayi, lojistik, perakende, gıda ve enerji sektörlerinden{" "}
            <strong className="text-white">{referanslar.length}&apos;den fazla kurumsal müşteriye</strong>{" "}
            vinç, manlift ve forklift kiralama hizmeti verdik. Onlardan bazıları:
          </p>
        </div>
      </section>

      {/* Logolu referanslar */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {logolular.map((r) => (
              <div
                key={r.isim}
                className="flex items-center justify-center border border-gray-200 rounded-xl p-6 h-32 hover:shadow-md hover:border-yellow-300 transition bg-white"
                title={r.isim}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/referans-logo/${r.logo}.png`}
                    alt={`${r.isim} logosu`}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer iş ortakları */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Ve Daha Fazlası
            </p>
            <h2 className="text-3xl font-black text-gray-900">Diğer İş Ortaklarımız</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {digerleri.map((r) => (
              <div
                key={r.isim}
                className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-2 hover:border-yellow-300 hover:shadow-sm transition"
              >
                <div className="h-1 w-8 rounded-full" style={{ background: renkSec(r.isim) }} />
                <div className="text-gray-800 text-xs font-bold leading-snug uppercase">{r.isim}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4">Siz de referanslarımıza katılın</h2>
          <p className="text-gray-400 mb-8">Projeniz için hemen teklif alın.</p>
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
