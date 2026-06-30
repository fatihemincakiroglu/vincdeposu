import Link from "next/link";

const ilceler = [
  { label: "İstanbul", href: "/istanbul-vinc-kiralama" },
  { label: "Avcılar", href: "/avcilar-vinc-kiralama" },
  { label: "Bağcılar", href: "/bagcilar-vinc-kiralama" },
  { label: "Bahçelievler", href: "/bahcelievler-vinc-kiralama" },
  { label: "Bakırköy", href: "/bakirkoy-vinc-kiralama" },
  { label: "Başakşehir", href: "/basaksehir-vinc-kiralama" },
  { label: "Bayrampaşa", href: "/bayrampasa-vinc-kiralama" },
  { label: "Beşiktaş", href: "/besiktas-vinc-kiralama" },
  { label: "Beykoz", href: "/beykoz-vinc-kiralama" },
  { label: "Beylikdüzü", href: "/beylikduzu-vinc-kiralama" },
  { label: "Beyoğlu", href: "/beyoglu-vinc-kiralama" },
  { label: "Büyükçekmece", href: "/buyukcekmece-vinc-kiralama" },
  { label: "Çatalca", href: "/catalca-vinc-kiralama" },
  { label: "Çekmeköy", href: "/cekmekoy-vinc-kiralama" },
  { label: "Esenler", href: "/esenler-vinc-kiralama" },
  { label: "Esenyurt", href: "/esenyurt-vinc-kiralama" },
  { label: "Eyüp", href: "/eyup-vinc-kiralama" },
  { label: "Fatih", href: "/fatih-vinc-kiralama" },
  { label: "Kadıköy", href: "/kadikoy-vinc-kiralama" },
  { label: "Kartal", href: "/kartal-vinc-kiralama" },
  { label: "Maltepe", href: "/maltepe-vinc-kiralama" },
  { label: "Pendik", href: "/pendik-vinc-kiralama" },
  { label: "Sarıyer", href: "/sariyer-vinc-kiralama" },
  { label: "Şişli", href: "/sisli-vinc-kiralama" },
  { label: "Ümraniye", href: "/umraniye-vinc-kiralama" },
  { label: "Üsküdar", href: "/uskudar-vinc-kiralama" },
  { label: "Zeytinburnu", href: "/zeytinburnu-vinc-kiralama" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Hakkında */}
        <div>
          <h3 className="text-white text-xl font-black mb-4">
            VİNÇ<span className="text-yellow-400">DEPOSU</span>
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            İstanbul'un tüm ilçelerinde profesyonel vinç kiralama ve satış hizmetleri sunuyoruz. 7/24 hizmet anlayışıyla yanınızdayız.
          </p>
          <a
            href="tel:05323039089"
            className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-yellow-500 transition"
          >
            📞 0532 303 90 89
          </a>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Hızlı Linkler</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Kiralık Vinç", href: "/kiralik-vinc" },
              { label: "Satılık Vinç", href: "/satilik-vinc" },
              { label: "Kiralık Manlift", href: "/kiralik-manlift" },
              { label: "Vinç Çeşitleri", href: "/vinc-cesitleri" },
              { label: "Hizmetler", href: "/hizmetler" },
              { label: "Referanslar", href: "/referans" },
              { label: "Blog", href: "/blog" },
              { label: "İletişim", href: "/iletisim" },
              { label: "SSS", href: "/sik-sorulan-sorular" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-yellow-400 transition">
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Vinç Kiralama İlçeler */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Vinç Kiralama Bölgeleri</h4>
          <ul className="grid grid-cols-2 gap-1 text-sm">
            {ilceler.map((ilce) => (
              <li key={ilce.href}>
                <Link href={ilce.href} className="hover:text-yellow-400 transition">
                  {ilce.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">İletişim</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span>📞</span>
              <a href="tel:05323039089" className="hover:text-yellow-400 transition">0532 303 90 89</a>
            </li>
            <li className="flex gap-2">
              <span>🌐</span>
              <span>vincdeposu.com.tr</span>
            </li>
            <li className="flex gap-2">
              <span>📍</span>
              <span>İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112, 34490 Başakşehir/İstanbul</span>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider">Kurumsal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gizlilik-politikasi" className="hover:text-yellow-400 transition">Gizlilik Politikası</Link></li>
              <li><Link href="/kalite-politikamiz" className="hover:text-yellow-400 transition">Kalite Politikamız</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-gray-800 py-4 px-4 text-center text-sm text-gray-500">
        <a
          href="https://fatihemincakiroglu.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:text-yellow-400 transition"
        >
          Fatih Emin Çakıroğlu
        </a>{" "}
        © {new Date().getFullYear()} Vinç Deposu. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
