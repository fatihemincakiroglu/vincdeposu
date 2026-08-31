import type { CSSProperties, ReactNode } from "react";

/*
 * Vinç Deposu ikon seti — tek çizgi ağırlığı, currentColor.
 * Emoji yerine kurumsal görünüm için kullanılır.
 * Kullanım: <VincIcon name="mobil" className="w-10 h-10 text-yellow-400" />
 */

const ICONS: Record<string, ReactNode> = {
  /* ── Ekipmanlar ── */
  mobil: (
    <>
      <rect x="3" y="19" width="20" height="6" rx="1" />
      <circle cx="8" cy="27.5" r="1.8" />
      <circle cx="17" cy="27.5" r="1.8" />
      <path d="M3 25l-1.5 3M23 25l1.5 3" />
      <path d="M9 19L25 5" />
      <path d="M25 5v5m0 0a1.8 1.8 0 1 0 1.8 1.8" />
    </>
  ),
  sepetli: (
    <>
      <rect x="2" y="20" width="15" height="5" rx="1" />
      <circle cx="6" cy="27.5" r="1.8" />
      <circle cx="13" cy="27.5" r="1.8" />
      <path d="M9 20L17 11L24 7" />
      <rect x="22" y="2" width="8" height="6" rx="1" />
    </>
  ),
  kule: (
    <>
      <path d="M15 28V6" />
      <path d="M19 28V6" />
      <path d="M15 24h4M15 19h4M15 14h4M15 10h4" />
      <path d="M4 6h26" />
      <path d="M15 6l-6-3M19 6l6-3" />
      <path d="M26 6v6a1.6 1.6 0 1 0 1.6 1.6" />
      <rect x="4" y="4" width="4" height="4" />
      <path d="M12 28h10" />
    </>
  ),
  ahtapot: (
    <>
      <rect x="4" y="22" width="12" height="5" rx="1" />
      <circle cx="7" cy="29" r="1.5" />
      <circle cx="13" cy="29" r="1.5" />
      <path d="M9 22V15l7-5 8 3" />
      <path d="M24 13v5a1.6 1.6 0 1 0 1.6 1.6" />
      <circle cx="9" cy="15" r="1.2" />
      <circle cx="16" cy="10" r="1.2" />
    </>
  ),
  kamyonustu: (
    <>
      <path d="M2 25h20v-6H2z" />
      <path d="M22 25h6v-5l-3-4h-3" />
      <circle cx="7" cy="27.5" r="1.8" />
      <circle cx="24" cy="27.5" r="1.8" />
      <path d="M7 19V12l9-4" />
      <path d="M16 8v4a1.5 1.5 0 1 0 1.5 1.5" />
    </>
  ),
  paletli: (
    <>
      <rect x="4" y="22" width="17" height="6" rx="3" />
      <circle cx="8" cy="25" r="1.2" />
      <circle cx="12.5" cy="25" r="1.2" />
      <circle cx="17" cy="25" r="1.2" />
      <rect x="7" y="15" width="8" height="7" rx="1" />
      <path d="M13 16L28 3" />
      <path d="M14.5 17.5L29.5 4.5" />
      <path d="M16 15l1.8 1.8M19 12.4l1.8 1.8M22 9.8l1.8 1.8M25 7.2l1.8 1.8" />
    </>
  ),
  rayli: (
    <>
      <path d="M3 8h26" />
      <path d="M3 11h26" />
      <rect x="12" y="11" width="8" height="5" rx="1" />
      <path d="M16 16v6a2 2 0 1 0 2 2" />
      <circle cx="7" cy="9.5" r="1" />
      <circle cx="25" cy="9.5" r="1" />
    </>
  ),
  portal: (
    <>
      <path d="M4 27V9h24v18" />
      <path d="M2 27h6M24 27h6" />
      <rect x="13" y="9" width="6" height="4" rx="1" />
      <path d="M16 13v7a1.8 1.8 0 1 0 1.8 1.8" />
    </>
  ),
  monoray: (
    <>
      <path d="M3 7h26" />
      <path d="M3 10h26" />
      <path d="M14 10v3h4v-3" />
      <rect x="12" y="13" width="8" height="6" rx="1" />
      <path d="M16 19v4a1.8 1.8 0 1 0 1.8 1.8" />
    </>
  ),
  sabit: (
    <>
      <path d="M13 28V12" />
      <path d="M17 28V12" />
      <path d="M9 28h12" />
      <path d="M15 12V6l13 4" />
      <path d="M28 10v5a1.6 1.6 0 1 0 1.6 1.6" />
      <circle cx="15" cy="12" r="2" />
    </>
  ),
  minik: (
    <>
      <rect x="5" y="21" width="13" height="6" rx="3" />
      <circle cx="9" cy="24" r="1.1" />
      <circle cx="14" cy="24" r="1.1" />
      <path d="M11 21v-5l12-8" />
      <path d="M23 8v5a1.5 1.5 0 1 0 1.5 1.5" />
    </>
  ),
  helikopter: (
    <>
      <path d="M4 4h18" />
      <path d="M13 4v3" />
      <path d="M7 11a6 4 0 0 1 12 0v3H9a2 2 0 0 1-2-2z" />
      <path d="M19 12h6l3-3" />
      <path d="M6 17h12" />
      <path d="M9 14v3M15 14v3" />
      <path d="M13 17v5" />
      <rect x="10" y="22" width="6" height="5" rx="1" />
    </>
  ),
  forklift: (
    <>
      <path d="M4 23h12v-8H8l-4 5z" />
      <path d="M16 15V9h4v14" />
      <circle cx="8" cy="26" r="2.2" />
      <circle cx="17" cy="26" r="2.2" />
      <path d="M23 6v18h6" />
      <path d="M23 18h5" />
    </>
  ),
  telehandler: (
    <>
      <rect x="3" y="19" width="17" height="6" rx="1" />
      <circle cx="8" cy="27.5" r="2" />
      <circle cx="16" cy="27.5" r="2" />
      <path d="M6 19L24 6" />
      <path d="M9 21L26 8" />
      <path d="M24 6l4 1-1 4" />
    </>
  ),
  makasli: (
    <>
      <rect x="6" y="3" width="20" height="4" rx="1" />
      <path d="M9 3V1M23 3v-2" transform="translate(0,2)" />
      <path d="M8 24l16-6M8 18l16 6M8 18l16-6M8 12l16 6" />
      <rect x="6" y="24" width="20" height="4" rx="1" />
      <circle cx="10" cy="30" r="1.3" />
      <circle cx="22" cy="30" r="1.3" />
    </>
  ),
  eklemli: (
    <>
      <rect x="3" y="23" width="12" height="5" rx="1" />
      <circle cx="6" cy="30" r="1.3" />
      <circle cx="12" cy="30" r="1.3" />
      <path d="M9 23v-6l9 3 8-8" />
      <circle cx="9" cy="17" r="1.1" />
      <circle cx="18" cy="20" r="1.1" />
      <rect x="24" y="6" width="6" height="5" rx="1" />
    </>
  ),
  orumcek: (
    <>
      <rect x="11" y="17" width="10" height="6" rx="1" />
      <path d="M11 21l-6 6M21 21l6 6M12 17l-7-3M20 17l7-3" />
      <path d="M16 17V9l9-5" />
      <rect x="23" y="1" width="7" height="5" rx="1" />
    </>
  ),
  manlift: (
    <>
      <rect x="4" y="22" width="13" height="5" rx="1" />
      <circle cx="8" cy="29" r="1.5" />
      <circle cx="13" cy="29" r="1.5" />
      <path d="M10 22L24 8" />
      <rect x="22" y="3" width="8" height="6" rx="1" />
    </>
  ),
  kanca: (
    <>
      <path d="M16 3v13a5 5 0 1 0 5 5" />
      <path d="M12 3h8" />
    </>
  ),
  /* ── Hizmet & genel ── */
  operator: (
    <>
      <path d="M6 15a10 10 0 0 1 20 0" />
      <path d="M4 15h24" />
      <path d="M16 5v-2" />
      <path d="M9 19a7 7 0 0 0 14 0" />
      <path d="M6 29a10 6 0 0 1 20 0" />
    </>
  ),
  anahtar: (
    <>
      <path d="M20 4a7 7 0 0 0-6.5 9.6L4 23l5 5 9.4-9.5A7 7 0 0 0 28 12l-4.5 1.5L21 11z" />
    </>
  ),
  lojistik: (
    <>
      <path d="M3 22h16V10H3z" />
      <path d="M19 22h8v-5l-3.5-4H19" />
      <circle cx="8" cy="25" r="2" />
      <circle cx="23" cy="25" r="2" />
      <path d="M1 13h-0M1 17h4" transform="translate(-2,0)" />
    </>
  ),
  sertifika: (
    <>
      <rect x="6" y="3" width="20" height="24" rx="2" />
      <path d="M11 9h10M11 14h10M11 19h5" />
      <circle cx="21" cy="22" r="3" />
      <path d="M20 22l1 1 2-2" transform="translate(0,0.2)" />
    </>
  ),
  acil: (
    <>
      <path d="M16 4L3 27h26z" />
      <path d="M16 12v7" />
      <circle cx="16" cy="23" r="0.6" />
    </>
  ),
  satis: (
    <>
      <path d="M4 4h10l14 14-10 10L4 14z" />
      <circle cx="10" cy="10" r="2" />
    </>
  ),
  kalkan: (
    <>
      <path d="M16 3l11 4v8c0 7-4.5 11.5-11 14C9.5 26.5 5 22 5 15V7z" />
      <path d="M11 15l3.5 3.5L21 12" />
    </>
  ),
  odul: (
    <>
      <circle cx="16" cy="11" r="7" />
      <path d="M13 11l2 2 4-4" />
      <path d="M11 17l-3 11 8-4 8 4-3-11" />
    </>
  ),
  hiz: (
    <>
      <path d="M18 3L7 18h8l-2 11 12-16h-8z" />
    </>
  ),
  telefon: (
    <>
      <path d="M6 4h6l3 7-4 3a17 17 0 0 0 7 7l3-4 7 3v6a2 2 0 0 1-2 2C13.5 28 4 18.5 4 6a2 2 0 0 1 2-2z" />
    </>
  ),
  saat: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9v7l5 3" />
    </>
  ),
  takvim: (
    <>
      <rect x="4" y="6" width="24" height="22" rx="2" />
      <path d="M4 12h24M10 3v6M22 3v6" />
      <circle cx="11" cy="18" r="0.8" />
      <circle cx="16" cy="18" r="0.8" />
      <circle cx="21" cy="18" r="0.8" />
    </>
  ),
  takvimHafta: (
    <>
      <rect x="4" y="6" width="24" height="22" rx="2" />
      <path d="M4 12h24M10 3v6M22 3v6" />
      <path d="M9 18h14M9 23h9" />
    </>
  ),
  sozlesme: (
    <>
      <path d="M8 3h12l6 6v20H8z" />
      <path d="M20 3v6h6" />
      <path d="M12 15h8M12 20h8M12 25h5" />
    </>
  ),
  kamera: (
    <>
      <rect x="4" y="8" width="24" height="19" rx="4" />
      <circle cx="16" cy="17.5" r="5.5" />
      <circle cx="24" cy="12" r="0.8" />
    </>
  ),
  kutu: (
    <>
      <path d="M4 10l12-6 12 6v14l-12 6-12-6z" />
      <path d="M4 10l12 6 12-6M16 16v14" />
    </>
  ),
  ampul: (
    <>
      <path d="M10 13a6 6 0 1 1 12 0c0 3-2 4-3 6h-6c-1-2-3-3-3-6z" />
      <path d="M13 23h6M14 27h4" />
    </>
  ),
  arama: (
    <>
      <circle cx="13" cy="13" r="8" />
      <path d="M19 19l8 8" />
    </>
  ),
  gemi: (
    <>
      <path d="M4 20l2 6h20l2-6z" />
      <path d="M8 20v-6h16v6" />
      <path d="M12 14V9h8v5" />
      <path d="M2 29c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
    </>
  ),
  agac: (
    <>
      <path d="M16 3l8 10h-4l6 8h-8v8h-4v-8H6l6-8H8z" />
    </>
  ),
  kalem: (
    <>
      <path d="M6 26l1.5-6L22 5.5a2.5 2.5 0 0 1 3.5 3.5L11 23.5z" />
      <path d="M19 8l4 4" />
      <path d="M6 29h20" />
    </>
  ),
  para: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M20 11.5a4 3 0 0 0-4-2c-2.5 0-4 1.3-4 3s1.5 2.6 4 3 4 1.4 4 3.2-1.8 3-4 3a4.3 3.2 0 0 1-4.2-2" />
      <path d="M16 6.5v3M16 22.5v3" />
    </>
  ),
  yenile: (
    <>
      <path d="M27 8v7h-7" />
      <path d="M5 24v-7h7" />
      <path d="M7 12a10 10 0 0 1 18-1M25 20a10 10 0 0 1-18 1" />
    </>
  ),
  cekic: (
    <>
      <path d="M8 4h10v7H8z" transform="rotate(-20 13 7.5)" />
      <path d="M14 12l-9 13 3.5 3 10.5-12" />
    </>
  ),
  radar: (
    <>
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="6" />
      <path d="M16 16L25 7" />
      <circle cx="16" cy="16" r="1" />
    </>
  ),
  konum: (
    <>
      <path d="M16 29S6 19.5 6 12a10 10 0 0 1 20 0c0 7.5-10 17-10 17z" />
      <circle cx="16" cy="12" r="3.5" />
    </>
  ),
  soru: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M12 12a4 4 0 1 1 5.5 3.7c-1 .5-1.5 1.2-1.5 2.3v1" />
      <circle cx="16" cy="23" r="0.6" />
    </>
  ),
  terazi: (
    <>
      <path d="M16 4v22M8 26h16" />
      <path d="M6 8h20" />
      <path d="M8 8l-4 8a4 4 0 0 0 8 0zM24 8l-4 8a4 4 0 0 0 8 0z" />
    </>
  ),
  ev: (
    <>
      <path d="M4 15L16 4l12 11" />
      <path d="M7 13v14h18V13" />
      <path d="M13 27v-8h6v8" />
    </>
  ),
  bina: (
    <>
      <path d="M6 28V5h14v23" />
      <path d="M20 12h6v16" />
      <path d="M3 28h26" />
      <path d="M10 9h2M14 9h2M10 14h2M14 14h2M10 19h2M14 19h2M23 16h0.5M23 21h0.5" />
    </>
  ),
  yol: (
    <>
      <path d="M10 28L14 4h4l4 24" />
      <path d="M16 8v3M16 15v3M16 22v3" />
      <path d="M3 28h26" />
    </>
  ),
  yildiz: (
    <>
      <path d="M16 3l4 8.5 9 1.2-6.6 6.3 1.7 9-8.1-4.5L7.9 28l1.7-9L3 12.7l9-1.2z" />
    </>
  ),
  hedef: (
    <>
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="7" />
      <circle cx="16" cy="16" r="2" />
    </>
  ),
  olcu: (
    <>
      <rect x="3" y="12" width="26" height="8" rx="1" />
      <path d="M8 12v4M13 12v3M18 12v4M23 12v3" />
    </>
  ),
};

/* Emoji → ikon anahtarı eşlemesi: veri dizilerindeki eski emoji değerleri
   otomatik olarak doğru SVG ikona çözümlenir. */
const EMOJI_MAP: Record<string, string> = {
  "🏗": "mobil", "🚛": "lojistik", "⚡": "hiz", "👷": "operator", "🔧": "anahtar",
  "🏆": "odul", "🏭": "sabit", "📋": "sertifika", "📦": "kutu", "⚙": "anahtar",
  "🛡": "kalkan", "📍": "konum", "📅": "takvim", "🚢": "gemi", "💡": "ampul",
  "🚨": "acil", "🔍": "arama", "🐙": "ahtapot", "🌳": "agac", "🚚": "kamyonustu",
  "🛣": "yol", "📡": "radar", "✍": "kalem", "🗼": "kule", "🏠": "ev",
  "🔨": "cekic", "❓": "soru", "💰": "para", "🏢": "bina", "🔄": "yenile",
  "🦾": "eklemli", "⚓": "gemi", "🌉": "portal", "📏": "olcu", "🔩": "minik",
  "📐": "monoray", "⚖": "terazi", "🚁": "helikopter", "🚜": "forklift",
  "🕷": "orumcek", "⬆": "makasli", "🦺": "manlift", "⏱": "saat", "⏳": "saat",
  "📆": "takvim", "🗓": "takvimHafta", "🎯": "hedef", "🛒": "satis", "🚀": "hiz",
  "⭐": "yildiz", "🌟": "yildiz", "🧰": "anahtar", "🅿": "konum", "🌙": "saat",
  "📞": "telefon", "💬": "telefon", "📰": "sozlesme", "🚧": "acil", "↔": "olcu",
};

function resolveName(name: string): string {
  if (ICONS[name]) return name;
  const bare = name.replace(/\uFE0F/g, "");
  return EMOJI_MAP[bare] ?? "kanca";
}

export const vincIconNames = Object.keys(ICONS);

export default function VincIcon({
  name,
  className,
  style,
  strokeWidth = 1.9,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {ICONS[resolveName(name)]}
    </svg>
  );
}
