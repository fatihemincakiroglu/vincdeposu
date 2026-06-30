"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Kiralık Vinç", href: "/kiralik-vinc" },
  { label: "Kiralık Manlift", href: "/kiralik-manlift" },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      { label: "Satılık Vinç", href: "/satilik-vinc" },
      { label: "Vinç Bakım ve Onarım", href: "/vinc-bakim-ve-onarim" },
      { label: "Operatörlü Vinç Hizmeti", href: "/operatorlu-vinc-hizmeti" },
      { label: "Vinç Sertifikasyon ve Eğitim", href: "/vinc-sertifikasyon-ve-egitim" },
      { label: "Vinç Yedek Parça ve Aksesuar", href: "/vinc-yedek-parca-ve-aksesuar" },
      { label: "Vinç Acil Durum Hizmetleri", href: "/vinc-acil-durum-hizmetleri" },
      { label: "Vinç Taşıma ve Lojistik", href: "/vinc-tasima-ve-lojistik" },
    ],
  },
  {
    label: "Ürünler",
    href: "/urunler",
    children: [
      { label: "Makaslı Platform", href: "/makasli-platform" },
      { label: "Eklemli Platform", href: "/eklemli-platform" },
      { label: "Örümcek Platform", href: "/orumcek-platform" },
      { label: "Forklift", href: "/forklift-kiralama" },
      { label: "Telehandler", href: "/telehandler-kiralama" },
    ],
  },
  {
    label: "Vinç Çeşitleri",
    href: "/vinc-cesitleri",
    children: [
      { label: "Sepetli Vinç", href: "/sepetli-vinc" },
      { label: "Mobil Vinç", href: "/mobil-vinc" },
      { label: "Kule Vinç", href: "/kule-vinc" },
      { label: "Ahtapot Vinç", href: "/ahtapot-vinc" },
      { label: "Kamyon Üstü Vinç", href: "/kamyon-ustu-vinc" },
      { label: "Paletli Vinç", href: "/paletli-vinc" },
      { label: "Raylı Vinç", href: "/rayli-vinc" },
      { label: "Portal Vinç", href: "/portal-vinc" },
      { label: "Monoray Vinç", href: "/monoray-vinc" },
      { label: "Sabit Vinç", href: "/sabit-vinc" },
      { label: "Minik Vinç", href: "/minik-vinc" },
      { label: "Helikopter Vinç", href: "/helikopter-vinc" },
    ],
  },
  {
    label: "Vinç Kiralama",
    href: "/vinc-kiralama",
    children: [
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
      { label: "Eyüpsultan", href: "/eyupsultan-vinc-kiralama" },
      { label: "Fatih", href: "/fatih-vinc-kiralama" },
      { label: "Gaziosmanpaşa", href: "/gaziosmanpasa-vinc-kiralama" },
      { label: "Güngören", href: "/gungoren-vinc-kiralama" },
      { label: "Kadıköy", href: "/kadikoy-vinc-kiralama" },
      { label: "Kağıthane", href: "/kagithane-vinc-kiralama" },
      { label: "Kartal", href: "/kartal-vinc-kiralama" },
      { label: "Küçükçekmece", href: "/kucukcekmece-vinc-kiralama" },
      { label: "Maltepe", href: "/maltepe-vinc-kiralama" },
      { label: "Pendik", href: "/pendik-vinc-kiralama" },
      { label: "Sancaktepe", href: "/sancaktepe-vinc-kiralama" },
      { label: "Sarıyer", href: "/sariyer-vinc-kiralama" },
      { label: "Silivri", href: "/silivri-vinc-kiralama" },
      { label: "Şişli", href: "/sisli-vinc-kiralama" },
      { label: "Sultanbeyli", href: "/sultanbeyli-vinc-kiralama" },
      { label: "Sultangazi", href: "/sultangazi-vinc-kiralama" },
      { label: "Tuzla", href: "/tuzla-vinc-kiralama" },
      { label: "Ümraniye", href: "/umraniye-vinc-kiralama" },
      { label: "Üsküdar", href: "/uskudar-vinc-kiralama" },
      { label: "Zeytinburnu", href: "/zeytinburnu-vinc-kiralama" },
      { label: "Arnavutköy", href: "/arnavutkoy-vinc-kiralama" },
      { label: "Adalar", href: "/adalar-vinc-kiralama" },
      { label: "Şile", href: "/sile-vinc-kiralama" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Üst bar */}
      <div className="bg-yellow-400 text-black text-sm py-1 px-4 text-center font-medium">
        7/24 Hizmet: <a href="tel:05323039089" className="font-bold hover:underline">0532 303 90 89</a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-gray-900">VİNÇ<span className="text-yellow-400">DEPOSU</span></span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-yellow-500 transition rounded"
              >
                {link.label}
                {link.children && <span className="text-xs">▾</span>}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Telefon butonu - masaüstü */}
        <a
          href="tel:05323039089"
          className="hidden xl:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg transition text-sm"
        >
          📞 Hemen Ara
        </a>

        {/* Mobil hamburger */}
        <button
          className="xl:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.href}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50">
                <Link
                  href={link.href}
                  className="font-medium text-gray-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                    className="text-gray-400 px-2"
                  >
                    {openDropdown === link.href ? "▲" : "▼"}
                  </button>
                )}
              </div>
              {link.children && openDropdown === link.href && (
                <div className="bg-gray-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2 text-sm text-gray-600 hover:text-yellow-600 border-b border-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <a
              href="tel:05323039089"
              className="block text-center bg-yellow-400 text-black font-bold py-3 rounded-lg"
            >
              📞 0532 303 90 89
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
