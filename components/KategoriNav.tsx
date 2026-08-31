import Link from "next/link";
import VincIcon from "./VincIcon";

/*
 * Ekipman kategorileri navigasyonu.
 * Kartlar eşit genişlikte ve ortalanmış sarmalama (flex-wrap) kullanır;
 * böylece 9 gibi tek sayıda öğe de her ekran boyutunda dengeli dizilir.
 */

const kategoriler = [
  { label: "Akülü Makaslı Platformlar", icon: "makasli", href: "/makasli-platform" },
  { label: "Dizel Makaslı Platformlar", icon: "makasli", href: "/makasli-platform" },
  { label: "Dikey Platformlar", icon: "dikey", href: "/kiralik-manlift" },
  { label: "Eklemli Platformlar", icon: "eklemli", href: "/eklemli-platform" },
  { label: "Örümcek Platformlar", icon: "orumcek", href: "/orumcek-platform" },
  { label: "Örümcek Vinçler", icon: "minik", href: "/minik-vinc" },
  { label: "Araç Üstü Platformlar", icon: "sepetli", href: "/sepetli-vinc" },
  { label: "Kiralık Forkliftler", icon: "forklift", href: "/forklift-kiralama" },
  { label: "Mobil Vinçler", icon: "mobil", href: "/mobil-vinc" },
];

/* "Dikey platform" ikonu VincIcon setinde yok; bileşen kendi içinde taşır. */
function DikeyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="12" y="2" width="8" height="4" rx="1" />
      <path d="M16 6v17" />
      <path d="M13 10h6M13 15h6M13 20h6" />
      <rect x="7" y="23" width="18" height="5" rx="1" />
      <circle cx="11" cy="30" r="1.3" />
      <circle cx="21" cy="30" r="1.3" />
    </svg>
  );
}

export default function KategoriNav() {
  return (
    <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-600 font-semibold text-xs uppercase tracking-widest mb-2">
            Ekipman Kategorileri
          </p>
          <h2 className="text-3xl font-black text-gray-900">
            İhtiyacınıza Uygun Ekipmanı Seçin
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {kategoriler.map((k) => (
            <Link
              key={k.label}
              href={k.href}
              className="group w-[150px] sm:w-[170px] bg-white border border-gray-200 rounded-2xl px-4 py-6 flex flex-col items-center text-center gap-4 hover:border-yellow-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-gray-800 group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors">
                {k.icon === "dikey" ? (
                  <DikeyIcon className="w-8 h-8" />
                ) : (
                  <VincIcon name={k.icon} className="w-8 h-8" />
                )}
              </span>
              <span className="text-sm font-bold text-gray-800 leading-snug group-hover:text-gray-900">
                {k.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
