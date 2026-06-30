import Link from "next/link";
import { avrupaYakasi, anadoluYakasi, type Ilce } from "@/lib/districts";

interface IlceGridProps {
  /** Bu sayfanın kendi ilçe slug'ı (varsa) — kendi kendine link vermemek için kullanılır. */
  aktifSlug?: string;
  /** Banner başlığı; varsayılan genel mesajdır, sayfaya özel verilebilir. */
  baslik?: string;
  altBaslik?: string;
}

function IlceGrubu({
  etiket,
  ilceler,
  aktifSlug,
}: {
  etiket: string;
  ilceler: Ilce[];
  aktifSlug?: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-sm font-bold text-gray-500 bg-gray-50 px-4 py-1 rounded-full border border-gray-200">
          {etiket} <span className="text-gray-400 font-normal">({ilceler.length} ilçe)</span>
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {ilceler.map((ilce) =>
          ilce.slug === aktifSlug ? (
            <div
              key={ilce.slug}
              className="text-center py-3 px-2 rounded-xl border-2 border-yellow-400 bg-yellow-50"
              title="Şu an bu sayfadasınız"
            >
              <div className="text-xs font-bold text-yellow-700 leading-tight">{ilce.ad}</div>
            </div>
          ) : (
            <Link
              key={ilce.slug}
              href={`/${ilce.slug}-vinc-kiralama`}
              className="group text-center py-3 px-2 rounded-xl border border-gray-100 bg-white hover:bg-yellow-400 hover:border-yellow-400 transition"
            >
              <div className="text-xs font-bold text-gray-600 group-hover:text-black leading-tight">{ilce.ad}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default function IlceGrid({
  aktifSlug,
  baslik = "İstanbul'un Tamamını Kapsıyoruz",
  altBaslik = "Avrupa ve Anadolu yakasındaki tüm 39 ilçeye hızlı teslimat",
}: IlceGridProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Hizmet Bölgeleri</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">İstanbul&apos;un 39 İlçesinde Hizmet</h2>
          <p className="text-gray-500 text-lg">Bulunduğunuz ilçeye tıklayarak hizmet detaylarına ulaşın.</p>
        </div>

        {/* Dekoratif harita banner */}
        <div className="relative bg-gray-900 rounded-3xl overflow-hidden mb-10 p-10">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(250,204,21,0.8) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(59,130,246,0.5) 0%, transparent 60%)",
            }}
          />
          <div className="relative text-center">
            <div className="text-7xl mb-4">🗺️</div>
            <div className="text-white text-2xl font-black mb-2">{baslik}</div>
            <div className="text-gray-400">{altBaslik}</div>
          </div>
        </div>

        <IlceGrubu etiket="🌉 Avrupa Yakası" ilceler={avrupaYakasi} aktifSlug={aktifSlug} />
        <IlceGrubu etiket="🌉 Anadolu Yakası" ilceler={anadoluYakasi} aktifSlug={aktifSlug} />
      </div>
    </section>
  );
}
