import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/vinc-cesitleri",
  },
  title: "Vinç Çeşitleri | 12 Farklı Vinç Tipi ve Kullanım Alanları",
  description:
    "Sepetli vinçten kule vince, ahtapot vinçten paletli vince kadar 12 farklı vinç çeşidini kapasite, yükseklik ve kullanım alanına göre karşılaştırın. Projenize en uygun vinci birlikte belirleyelim.",
};

/* ════════════════════════════════════════════════════════
   İKON BİLEŞENLERİ — Her vinç tipi için özel çizilmiş silüet
   ════════════════════════════════════════════════════════ */

function GroundLine({ color }: { color: string }) {
  return <line x1="20" y1="250" x2="380" y2="250" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.35" />;
}

function SepetliIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      {/* Kamyon şasisi */}
      <rect x="60" y="205" width="120" height="45" rx="6" fill="#111827" opacity="0.85" />
      <rect x="68" y="180" width="40" height="30" rx="4" fill="#111827" opacity="0.85" />
      <circle cx="95" cy="252" r="16" fill="#111827" />
      <circle cx="160" cy="252" r="16" fill="#111827" />
      <circle cx="95" cy="252" r="6" fill="#fff" />
      <circle cx="160" cy="252" r="6" fill="#fff" />
      {/* Teleskopik bom (3 kademe) */}
      <rect x="118" y="120" width="14" height="95" rx="4" fill={c} transform="rotate(-18 125 215)" />
      <rect x="118" y="75" width="11" height="90" rx="4" fill={c} opacity="0.85" transform="rotate(-18 125 215)" />
      <rect x="118" y="35" width="9" height="80" rx="4" fill={c} opacity="0.7" transform="rotate(-18 125 215)" />
      {/* Sepet */}
      <rect x="255" y="45" width="58" height="34" rx="6" fill="#111827" />
      <line x1="255" y1="45" x2="313" y2="45" stroke="#facc15" strokeWidth="4" />
      <line x1="263" y1="38" x2="263" y2="45" stroke="#facc15" strokeWidth="3" />
      <line x1="305" y1="38" x2="305" y2="45" stroke="#facc15" strokeWidth="3" />
    </svg>
  );
}

function MobilIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      <rect x="55" y="195" width="130" height="50" rx="6" fill="#111827" opacity="0.85" />
      <rect x="63" y="165" width="42" height="32" rx="4" fill="#111827" opacity="0.85" />
      <circle cx="90" cy="248" r="17" fill="#111827" />
      <circle cx="160" cy="248" r="17" fill="#111827" />
      <circle cx="90" cy="248" r="6" fill="#fff" />
      <circle cx="160" cy="248" r="6" fill="#fff" />
      {/* Ayaklar (outrigger) */}
      <line x1="120" y1="220" x2="85" y2="250" stroke="#111827" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      <line x1="170" y1="220" x2="205" y2="250" stroke="#111827" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      {/* Teleskopik bom */}
      <rect x="125" y="60" width="16" height="160" rx="5" fill={c} transform="rotate(-32 133 200)" />
      {/* Kanca + yük */}
      <line x1="300" y1="55" x2="300" y2="110" stroke="#111827" strokeWidth="3" />
      <rect x="288" y="108" width="24" height="20" rx="3" fill="#facc15" />
      {/* Karşı ağırlık */}
      <rect x="55" y="178" width="22" height="20" rx="3" fill="#111827" />
    </svg>
  );
}

function KuleIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      <polygon points="170,250 230,250 215,225 185,225" fill="#111827" opacity="0.85" />
      <rect x="193" y="55" width="14" height="172" fill="#111827" opacity="0.85" />
      <rect x="193" y="40" width="160" height="13" rx="3" fill={c} />
      <rect x="80" y="40" width="113" height="11" rx="3" fill={c} opacity="0.75" />
      <rect x="80" y="51" width="28" height="22" rx="2" fill="#111827" />
      <rect x="207" y="46" width="34" height="18" rx="3" fill="#111827" />
      <line x1="330" y1="53" x2="330" y2="130" stroke="#111827" strokeWidth="3" />
      <rect x="318" y="128" width="24" height="20" rx="3" fill="#facc15" />
    </svg>
  );
}

function AhtapotIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      <rect x="168" y="175" width="64" height="48" rx="8" fill="#111827" opacity="0.85" />
      {/* Örümcek bacakları */}
      <line x1="178" y1="215" x2="110" y2="250" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="222" y1="215" x2="290" y2="250" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="178" y1="195" x2="95" y2="200" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="222" y1="195" x2="305" y2="200" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <circle cx="110" cy="250" r="8" fill="#111827" />
      <circle cx="290" cy="250" r="8" fill="#111827" />
      <circle cx="95" cy="200" r="8" fill="#111827" />
      <circle cx="305" cy="200" r="8" fill="#111827" />
      {/* Kısa bom */}
      <rect x="190" y="95" width="13" height="85" rx="4" fill="#111827" transform="rotate(-12 196 180)" />
      <line x1="240" y1="80" x2="240" y2="125" stroke="#111827" strokeWidth="3" />
      <rect x="229" y="123" width="22" height="18" rx="3" fill="#facc15" />
    </svg>
  );
}

function KamyonUstuIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      <rect x="80" y="190" width="190" height="40" rx="5" fill="#111827" opacity="0.8" />
      <rect x="75" y="160" width="45" height="35" rx="4" fill="#111827" opacity="0.85" />
      <circle cx="110" cy="234" r="16" fill="#111827" />
      <circle cx="225" cy="234" r="16" fill="#111827" />
      <circle cx="110" cy="234" r="6" fill="#fff" />
      <circle cx="225" cy="234" r="6" fill="#fff" />
      {/* Mafsallı bom (knuckle) */}
      <line x1="150" y1="190" x2="150" y2="120" stroke={c} strokeWidth="11" strokeLinecap="round" />
      <line x1="150" y1="120" x2="225" y2="85" stroke={c} strokeWidth="11" strokeLinecap="round" />
      <line x1="225" y1="85" x2="270" y2="130" stroke={c} strokeWidth="9" strokeLinecap="round" opacity="0.85" />
      <circle cx="270" cy="135" r="7" fill="#facc15" />
    </svg>
  );
}

function PaletliIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      {/* Paletli alt yapı */}
      <rect x="70" y="225" width="150" height="26" rx="13" fill="#111827" opacity="0.85" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={82 + i * 24} y1="232" x2={82 + i * 24} y2="244" stroke="#fff" strokeWidth="3" opacity="0.5" />
      ))}
      <rect x="110" y="185" width="70" height="42" rx="6" fill="#111827" opacity="0.9" />
      {/* Latis bom (kafes) */}
      <line x1="170" y1="195" x2="290" y2="60" stroke={c} strokeWidth="6" />
      <line x1="155" y1="200" x2="278" y2="72" stroke={c} strokeWidth="3" opacity="0.7" />
      <line x1="163" y1="170" x2="200" y2="140" stroke={c} strokeWidth="3" opacity="0.6" />
      <line x1="195" y1="190" x2="232" y2="155" stroke={c} strokeWidth="3" opacity="0.6" />
      <line x1="227" y1="180" x2="260" y2="148" stroke={c} strokeWidth="3" opacity="0.6" />
      <line x1="290" y1="60" x2="290" y2="105" stroke="#111827" strokeWidth="3" />
      <rect x="278" y="103" width="24" height="20" rx="3" fill="#facc15" />
    </svg>
  );
}

function RayliIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      {/* Ray */}
      <line x1="20" y1="248" x2="380" y2="248" stroke="#111827" strokeWidth="4" opacity="0.5" />
      <line x1="20" y1="258" x2="380" y2="258" stroke="#111827" strokeWidth="4" opacity="0.5" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={35 + i * 45} y1="244" x2={35 + i * 45} y2="262" stroke="#111827" strokeWidth="5" opacity="0.4" />
      ))}
      {/* Bojiler */}
      <rect x="110" y="220" width="34" height="22" rx="4" fill="#111827" />
      <rect x="256" y="220" width="34" height="22" rx="4" fill="#111827" />
      {/* Gövde */}
      <rect x="95" y="80" width="210" height="18" rx="4" fill={c} />
      <line x1="127" y1="98" x2="127" y2="220" stroke="#111827" strokeWidth="9" />
      <line x1="273" y1="98" x2="273" y2="220" stroke="#111827" strokeWidth="9" />
      <rect x="170" y="55" width="30" height="20" rx="3" fill="#111827" opacity="0.85" />
      <line x1="200" y1="98" x2="200" y2="150" stroke="#111827" strokeWidth="3" />
      <rect x="188" y="148" width="24" height="20" rx="3" fill="#facc15" />
    </svg>
  );
}

function PortalIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      {/* Konteynerler */}
      <rect x="155" y="200" width="40" height="32" rx="2" fill="#111827" opacity="0.5" />
      <rect x="198" y="200" width="40" height="32" rx="2" fill="#111827" opacity="0.35" />
      {/* Portal bacakları */}
      <line x1="80" y1="248" x2="140" y2="65" stroke={c} strokeWidth="11" strokeLinecap="round" />
      <line x1="320" y1="248" x2="260" y2="65" stroke={c} strokeWidth="11" strokeLinecap="round" />
      {/* Üst kiriş */}
      <rect x="120" y="55" width="160" height="16" rx="4" fill="#111827" />
      {/* Araba (trolley) */}
      <rect x="180" y="71" width="34" height="14" rx="3" fill="#facc15" />
      <line x1="197" y1="85" x2="197" y2="130" stroke="#111827" strokeWidth="3" />
      <rect x="185" y="128" width="24" height="20" rx="3" fill="#facc15" />
    </svg>
  );
}

function MonorayIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      {/* Tavan / destek kolonları */}
      <rect x="60" y="60" width="14" height="50" fill="#111827" opacity="0.5" />
      <rect x="326" y="60" width="14" height="50" fill="#111827" opacity="0.5" />
      {/* Monoray hattı */}
      <rect x="50" y="100" width="300" height="16" rx="4" fill={c} />
      {/* Hoist (vinç bloğu) */}
      <rect x="170" y="116" width="50" height="30" rx="5" fill="#111827" />
      <circle cx="180" cy="146" r="5" fill="#111827" />
      <circle cx="210" cy="146" r="5" fill="#111827" />
      <line x1="195" y1="146" x2="195" y2="195" stroke="#111827" strokeWidth="3" />
      <rect x="183" y="193" width="24" height="20" rx="3" fill="#facc15" />
    </svg>
  );
}

function SabitIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine color="#111827" />
      {/* Sabit temel */}
      <polygon points="160,250 240,250 225,222 175,222" fill="#111827" opacity="0.85" />
      <line x1="170" y1="240" x2="185" y2="250" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="200" y1="237" x2="200" y2="250" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="230" y1="240" x2="215" y2="250" stroke="#fff" strokeWidth="2" opacity="0.4" />
      {/* Direk */}
      <rect x="193" y="70" width="14" height="155" fill="#111827" opacity="0.85" />
      {/* Sabit jib kolu */}
      <rect x="200" y="58" width="130" height="12" rx="3" fill={c} />
      <line x1="320" y1="68" x2="320" y2="115" stroke="#111827" strokeWidth="3" />
      <rect x="308" y="113" width="24" height="20" rx="3" fill="#facc15" />
    </svg>
  );
}

function MinikIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      {/* İç mekan referansı */}
      <line x1="60" y1="40" x2="60" y2="252" stroke="#111827" strokeWidth="3" opacity="0.18" />
      <line x1="340" y1="40" x2="340" y2="252" stroke="#111827" strokeWidth="3" opacity="0.18" />
      <GroundLine color="#111827" />
      <rect x="165" y="222" width="60" height="24" rx="5" fill="#111827" opacity="0.85" />
      <circle cx="178" cy="248" r="8" fill="#111827" />
      <circle cx="212" cy="248" r="8" fill="#111827" />
      <rect x="180" y="155" width="11" height="70" rx="3" fill={c} transform="rotate(-15 185 222)" />
      <line x1="225" y1="140" x2="225" y2="172" stroke="#111827" strokeWidth="2.5" />
      <rect x="216" y="170" width="18" height="15" rx="2" fill="#facc15" />
    </svg>
  );
}

function HelikopterIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <line x1="40" y1="230" x2="120" y2="230" stroke="#111827" strokeWidth="3" opacity="0.15" />
      <line x1="280" y1="200" x2="360" y2="200" stroke="#111827" strokeWidth="3" opacity="0.15" />
      {/* Kuyruk bom */}
      <rect x="250" y="105" width="100" height="12" rx="6" fill="#111827" opacity="0.85" />
      <circle cx="350" cy="111" r="14" fill="none" stroke="#111827" strokeWidth="3" opacity="0.7" />
      {/* Gövde */}
      <ellipse cx="190" cy="110" rx="70" ry="32" fill={c} />
      {/* Ana pervane */}
      <line x1="90" y1="78" x2="290" y2="78" stroke="#111827" strokeWidth="4" />
      <circle cx="190" cy="78" r="6" fill="#111827" />
      {/* Halat + yük */}
      <line x1="190" y1="142" x2="190" y2="205" stroke="#111827" strokeWidth="2.5" />
      <rect x="170" y="203" width="40" height="28" rx="4" fill="#facc15" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   VERİ
   ════════════════════════════════════════════════════════ */

type VincTipi = {
  slug: string;
  ad: string;
  kisaAciklama: string;
  aciklama: string;
  renk: string;
  kapasite: string;
  uzanim: string;
  zemin: string;
  kullanim: string;
  ozellikler: string[];
  Icon: (props: { c: string }) => React.ReactElement;
};

const vincTipleri: VincTipi[] = [
  {
    slug: "sepetli-vinc",
    ad: "Sepetli Vinç",
    kisaAciklama: "Yüksek noktalara güvenli personel erişimi",
    aciklama:
      "Sepetli vinç, teleskopik bir bom ucuna monte edilmiş sepet sayesinde personeli yüksek noktalara güvenle taşır. Cephe bakımı, aydınlatma değişimi, budama ve montaj işlerinde şehir içi kullanıma uygun, hızlı kurulan bir çözümdür.",
    renk: "#F59E0B",
    kapasite: "200 – 500 kg (sepet yükü)",
    uzanim: "14 – 75 m çalışma yüksekliği",
    zemin: "Asfalt / beton, düz saha",
    kullanim: "Cephe bakımı, aydınlatma, budama, tabela montajı",
    ozellikler: [
      "Hızlı kurulum, dakikalar içinde çalışmaya hazır",
      "Hassas konumlandırma ile personel güvenliği",
      "Şehir içi dar sokaklarda bile manevra kolaylığı",
      "Farklı bom uzunluklarında seçenek",
    ],
    Icon: SepetliIcon,
  },
  {
    slug: "mobil-vinc",
    ad: "Mobil Vinç",
    kisaAciklama: "Tekerlekli, hızlı konuşlanan ağır kaldırma gücü",
    aciklama:
      "Mobil vinç, kendi tekerlekleri üzerinde yol alabilen, sahaya ulaştığında dengeleme ayakları (outrigger) ile sabitlenen teleskopik bomlu bir vinç türüdür. İnşaat ve sanayi projelerinde orta-ağır yüklerin hızlı şekilde kaldırılması için en yaygın tercih edilen vinç tipidir.",
    renk: "#3B82F6",
    kapasite: "20 – 500 ton",
    uzanim: "30 – 80 m bom uzunluğu",
    zemin: "Sağlam, düz ve geniş saha",
    kullanim: "İnşaat, çelik konstrüksiyon montajı, sanayi tesisleri",
    ozellikler: [
      "Kendi gücüyle sahaya ulaşır, ayrı nakliyeye gerek kalmaz",
      "Teleskopik bom ile değişken erişim mesafesi",
      "Outrigger ayaklarla yüksek stabilite",
      "Geniş kapasite aralığı sayesinde her ölçekte proje desteği",
    ],
    Icon: MobilIcon,
  },
  {
    slug: "kule-vinc",
    ad: "Kule Vinç",
    kisaAciklama: "Yüksek katlı inşaatın sabit gücü",
    aciklama:
      "Kule vinç, sahaya sabit bir temel üzerine kurulan, dikey kule ve yatay bom (jib) yapısıyla yüksek katlı inşaat projelerinde malzeme taşımanın bel kemiğini oluşturan vinç türüdür. Proje süresince sahada sabit kalır ve kat yükseldikçe gövdesi de yükseltilebilir.",
    renk: "#8B5CF6",
    kapasite: "6 – 20 ton (uç noktada azalır)",
    uzanim: "40 – 200 m+ yükseklik",
    zemin: "Sabit beton temel",
    kullanim: "Yüksek katlı bina inşaatı, uzun vadeli şantiyeler",
    ozellikler: [
      "Proje boyunca sahada kalıcı, sürekli erişim",
      "Çok yüksek katlara kesintisiz malzeme taşıma",
      "Kat ilerledikçe yükseltilebilen modüler gövde",
      "Uzun vadeli kiralamalarda maliyet avantajı",
    ],
    Icon: KuleIcon,
  },
  {
    slug: "ahtapot-vinc",
    ad: "Ahtapot Vinç",
    kisaAciklama: "Dar alanların kompakt çözümü",
    aciklama:
      "Ahtapot vinç (örümcek vinç), açılıp katlanabilen çok sayıda dengeleme ayağı sayesinde dar geçitlerden bile manevra edebilen kompakt bir vinçtir. İç mekan, dar koridor ve hassas zemin gerektiren işlerde tercih edilir.",
    renk: "#EC4899",
    kapasite: "1 – 6 ton",
    uzanim: "Dar alanlarda yüksek manevra kabiliyeti",
    zemin: "Hassas zemin, iç mekan, dar geçiş",
    kullanim: "Cam/panel montajı, iç mekan taşıma, restorasyon",
    ozellikler: [
      "Katlanır gövde ile 80 cm genişliğindeki kapılardan geçebilir",
      "Açılır ayaklarla zemine düşük basınç uygular",
      "Hassas yüzeylerde iz bırakmayan kauçuk takozlar",
      "Elektrikli modelleriyle iç mekanda sessiz çalışma",
    ],
    Icon: AhtapotIcon,
  },
  {
    slug: "kamyon-ustu-vinc",
    ad: "Kamyon Üstü Vinç",
    kisaAciklama: "Taşıma ve kaldırmayı aynı araçta birleştirir",
    aciklama:
      "Kamyon üstü vinç, bir kamyonun şasisine monte edilen mafsallı (knuckle-boom) kol sayesinde yükü hem taşır hem de indirip bindirir. Lojistik ve dağıtım operasyonlarında ayrı bir vinç çağırmaya gerek bırakmaz.",
    renk: "#10B981",
    kapasite: "1 – 30 ton",
    uzanim: "Mafsallı kol ile değişken erişim",
    zemin: "Yol seviyesi, sabit nokta",
    kullanim: "Yük taşıma + boşaltma, lojistik, malzeme dağıtımı",
    ozellikler: [
      "Taşıma ve kaldırmayı tek araçla yapar, zaman kazandırır",
      "Katlanır mafsallı kol kompakt depolanır",
      "Şehir içi teslimat noktalarında pratik kullanım",
      "Hidrolik kontrol ile hassas yük yerleştirme",
    ],
    Icon: KamyonUstuIcon,
  },
  {
    slug: "paletli-vinc",
    ad: "Paletli Vinç",
    kisaAciklama: "Zorlu arazinin ağır sanayi gücü",
    aciklama:
      "Paletli vinç, tank benzeri palet (track) sistemi üzerinde hareket eden, kafes (lattice) bom yapısıyla çok büyük yükleri kaldırabilen ağır sanayi vincidir. Yumuşak veya düzensiz zeminlerde bile stabil çalışır.",
    renk: "#F97316",
    kapasite: "50 – 1.000 ton",
    uzanim: "Uzun kafes bom ile yüksek erişim",
    zemin: "Zorlu / yumuşak arazi, liman, açık alan",
    kullanim: "Liman operasyonları, rüzgar türbini kurulumu, ağır sanayi",
    ozellikler: [
      "Geniş palet tabanı ile düşük zemin basıncı",
      "Outrigger gerektirmeden büyük yüklerde stabilite",
      "Kafes bom yapısı ile çok yüksek kapasiteye ulaşır",
      "Zorlu hava ve arazi koşullarına dayanıklı tasarım",
    ],
    Icon: PaletliIcon,
  },
  {
    slug: "rayli-vinc",
    ad: "Raylı Vinç",
    kisaAciklama: "Sabit hat üzerinde tekrarlanan hassas hareket",
    aciklama:
      "Raylı vinç, sahaya döşenen sabit raylar üzerinde ileri-geri hareket eden bir vinç sistemidir. Aynı hat üzerinde tekrarlanan yükleme/boşaltma operasyonlarında yüksek hız ve hassasiyet sağlar.",
    renk: "#14B8A6",
    kapasite: "Liman ve sanayi tipine göre değişken",
    uzanim: "Ray hattı boyunca sınırsız tekrar",
    zemin: "Sabit ray altyapısı",
    kullanim: "Liman konteyner sahası, tersane, depo içi taşıma",
    ozellikler: [
      "Ray üzerinde dümdüz hareket, sapma riski yok",
      "Yüksek tekrar sayısı gerektiren operasyonlarda verimli",
      "Otomasyon sistemleriyle entegre çalışabilir",
      "Uzun ray hatlarında geniş sahaya hizmet verir",
    ],
    Icon: RayliIcon,
  },
  {
    slug: "portal-vinc",
    ad: "Portal Vinç",
    kisaAciklama: "Geniş açıklıkları aşan köprü tipi vinç",
    aciklama:
      "Portal vinç (gantry vinç), iki ayağı arasında bir açıklığı aşacak şekilde inşa edilen köprü tipi bir vinçtir. Liman, kanal ve açık depolama sahalarında konteyner ve büyük yüklerin istiflenmesinde kullanılır.",
    renk: "#6366F1",
    kapasite: "Saha tipine göre yüksek kapasite",
    uzanim: "Geniş açıklıklı yatay kiriş",
    zemin: "Sabit portal ayakları / ray üzeri",
    kullanim: "Liman, konteyner istifleme, kanal ve açık depo sahaları",
    ozellikler: [
      "İki ayak arasındaki tüm alanı kapsayan geniş erişim",
      "Trolley sistemiyle yatayda hızlı yük transferi",
      "Konteyner istifleme operasyonlarında yüksek verim",
      "Sabit veya raylı versiyonlarıyla esnek kurulum",
    ],
    Icon: PortalIcon,
  },
  {
    slug: "monoray-vinc",
    ad: "Monoray Vinç",
    kisaAciklama: "Üretim hattının tavanından sessiz güç",
    aciklama:
      "Monoray vinç, tavana veya çelik konstrüksiyona sabitlenen tek bir ray hattı boyunca hareket eden bir kaldırma sistemidir. Fabrika üretim hatlarında ve depo içi tekrarlanan taşıma işlerinde zemin alanını işgal etmez.",
    renk: "#EF4444",
    kapasite: "Hat ve hoist kapasitesine göre değişken",
    uzanim: "Tek ray hattı boyunca hareket",
    zemin: "Tavan / çelik konstrüksiyon montajı",
    kullanim: "Fabrika üretim hattı, atölye, depo içi taşıma",
    ozellikler: [
      "Zemin alanını işgal etmez, üretim akışını kesmez",
      "Hat boyunca tekrarlanan taşımada yüksek verim",
      "Elektrikli hoist ile hassas yükseklik kontrolü",
      "Mevcut çelik konstrüksiyona entegre edilebilir",
    ],
    Icon: MonorayIcon,
  },
  {
    slug: "sabit-vinc",
    ad: "Sabit Vinç",
    kisaAciklama: "Tek noktada kalıcı, güvenilir kaldırma",
    aciklama:
      "Sabit vinç, sahaya dökülen bir beton temele kalıcı olarak monte edilen, dikey direk ve sabit jib koluna sahip bir vinç türüdür. Uzun süreli fabrika veya şantiye operasyonlarında aynı noktada tekrarlayan kaldırma ihtiyacı için idealdir.",
    renk: "#84CC16",
    kapasite: "Direk ve jib boyutuna göre değişken",
    uzanim: "Sabit jib kolu erişimi",
    zemin: "Kalıcı beton temel",
    kullanim: "Fabrika içi sabit nokta kaldırma, uzun vadeli şantiye",
    ozellikler: [
      "Kalıcı kurulum sayesinde sürekli hazır durumda",
      "Düşük işletme maliyeti ile uzun vadede ekonomik",
      "Sabit temel sayesinde yüksek stabilite",
      "Aynı noktada tekrarlayan operasyonlarda verimli",
    ],
    Icon: SabitIcon,
  },
  {
    slug: "minik-vinc",
    ad: "Minik Vinç",
    kisaAciklama: "Bina içine giren en küçük güç",
    aciklama:
      "Minik vinç, standart kapı ve asansör boşluklarından geçebilecek kadar küçük boyutlu, hafif ve kompakt bir kaldırma ekipmanıdır. Bina içi taşıma, dar koridor ve düşük tavanlı alanlarda diğer vinç tiplerinin giremediği yerlere ulaşır.",
    renk: "#0EA5E9",
    kapasite: "0,5 – 3 ton",
    uzanim: "Düşük tavan ve dar koridorlara uygun",
    zemin: "İç mekan, hassas zemin",
    kullanim: "Bina içi taşıma, dar koridor, düşük tavanlı katlar",
    ozellikler: [
      "Standart kapı genişliğinden geçebilen minimum boyut",
      "Hafif yapısı sayesinde hassas döşemelerde güvenli kullanım",
      "Elektrikli sürüşle iç mekanda sessiz çalışma",
      "Hızlı kurulum ile küçük ölçekli işlerde ekonomik çözüm",
    ],
    Icon: MinikIcon,
  },
  {
    slug: "helikopter-vinc",
    ad: "Helikopter Vinç",
    kisaAciklama: "Erişilmez noktalar için hava taşımacılığı",
    aciklama:
      "Helikopter vinç hizmeti, kara aracıyla ulaşılması mümkün olmayan yüksek kule, dağ tepesi veya enerji hattı gibi noktalara yük taşımak için kullanılan özel bir hava operasyonudur. Detaylı uçuş planı ve izin süreci gerektirir.",
    renk: "#06B6D4",
    kapasite: "Helikopter tipine göre değişken",
    uzanim: "Kara aracıyla erişilemeyen her nokta",
    zemin: "Gerekmez — hava operasyonu",
    kullanim: "Baz istasyonu, enerji hattı, dağlık arazi montajı",
    ozellikler: [
      "Kara yolu veya vinç erişimi olmayan noktalara ulaşır",
      "Zaman kritik acil müdahale operasyonlarında hızlı çözüm",
      "Uzman pilot ve sertifikalı sapanlama ekibiyle yürütülür",
      "Önceden uçuş planı ve resmi izin süreci gerektirir",
    ],
    Icon: HelikopterIcon,
  },
];

const secimKriterleri = [
  { baslik: "Yük Ağırlığı", aciklama: "Kaldırılacak maksimum yük, vinç tipinin kapasite sınıfını belirler." },
  { baslik: "Çalışma Yüksekliği", aciklama: "Erişilmesi gereken nokta ne kadar yüksekteyse bom/kule boyu o kadar önemlidir." },
  { baslik: "Zemin Durumu", aciklama: "Sağlam saha, yumuşak arazi veya iç mekan zemini farklı taban sistemleri gerektirir." },
  { baslik: "Çalışma Alanının Genişliği", aciklama: "Dar sokak veya koridorlarda kompakt, açık sahada büyük vinçler tercih edilir." },
  { baslik: "Proje Süresi", aciklama: "Kısa süreli işlerde mobil çözümler, uzun vadeli şantiyelerde sabit/kule vinçler ekonomiktir." },
];

const kullanimAlanlariTablosu = [
  { alan: "Yüksek katlı inşaat", oneri: ["kule-vinc", "mobil-vinc"] },
  { alan: "Cephe bakım & onarım", oneri: ["sepetli-vinc"] },
  { alan: "Dar alan / iç mekan", oneri: ["ahtapot-vinc", "minik-vinc"] },
  { alan: "Liman & tersane", oneri: ["portal-vinc", "rayli-vinc", "paletli-vinc"] },
  { alan: "Fabrika üretim hattı", oneri: ["monoray-vinc", "sabit-vinc"] },
  { alan: "Lojistik & dağıtım", oneri: ["kamyon-ustu-vinc"] },
  { alan: "Enerji & zorlu arazi", oneri: ["paletli-vinc"] },
  { alan: "Erişilmez nokta (dağ, kule)", oneri: ["helikopter-vinc"] },
];

const sss = [
  {
    soru: "Projem için hangi vinç çeşidi uygun?",
    cevap:
      "Doğru seçim; yük ağırlığı, erişilmesi gereken yükseklik, zemin koşulları, çalışma alanının genişliği ve proje süresine bağlıdır. Aşağıdaki karşılaştırma tablosunu inceleyebilir veya 0532 303 90 89 numaralı hattımızdan uzman ekibimize danışabilirsiniz.",
  },
  {
    soru: "Kule vinç ile mobil vinç arasındaki temel fark nedir?",
    cevap:
      "Kule vinç sahaya sabit kurulur ve proje boyunca kalıcıdır; çok yüksek katlara erişir. Mobil vinç ise kendi tekerlekleri üzerinde sahaya gelir, kısa sürede kurulur ve farklı projeler arasında taşınabilir.",
  },
  {
    soru: "Ahtapot vinç (örümcek vinç) ne işe yarar?",
    cevap:
      "Ahtapot vinç, açılır-kapanır ayakları sayesinde dar kapı ve koridorlardan geçebilen kompakt bir vinçtir. Genellikle iç mekan montajı, cam/panel taşıma ve hassas zeminli restorasyon işlerinde kullanılır.",
  },
  {
    soru: "Vinç kapasitesi nasıl belirlenir?",
    cevap:
      "Kapasite; kaldırılacak yükün ağırlığı, bomun açılma uzunluğu ve açısına göre değişir. Aynı vinç, bom kısa ve dik konumdayken daha yüksek kapasiteyle çalışabilir, bom uzadıkça kapasite düşer.",
  },
  {
    soru: "Liman ve sanayi tesislerinde hangi vinç tipi tercih edilir?",
    cevap:
      "Liman ve tersanelerde genellikle portal vinç, raylı vinç ve paletli vinç tercih edilir. Fabrika içi üretim hatlarında ise zemini boş bırakan monoray vinç ve sabit vinç daha pratiktir.",
  },
  {
    soru: "Birden fazla vinç çeşidini aynı projede kullanabilir miyim?",
    cevap:
      "Evet. Büyük projelerde farklı aşamalarda farklı vinç tipleri bir araya gelebilir; örneğin kaba inşaatta mobil vinç, cephe işlerinde sepetli vinç kullanılması yaygın bir uygulamadır.",
  },
  {
    soru: "Vinç çeşidine göre operatör gerekliliği değişir mi?",
    cevap:
      "Evet. Her vinç tipi farklı kontrol mekanizmasına sahip olduğundan operatörlerimiz kullanılacak ekipmana özel sertifika ve deneyime sahiptir. Tüm operasyonlarımızda sertifikalı operatör desteği sunuyoruz.",
  },
];

/* ════════════════════════════════════════════════════════
   SAYFA
   ════════════════════════════════════════════════════════ */

export default function VincCesitleriPage() {
  return (
    <div className="bg-white">

      {/* ───────── HERO ───────── */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-yellow-400 opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-7">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 text-sm font-bold tracking-wide">Vinç Kataloğu</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-6 max-w-3xl">
            12 Vinç Çeşidi,<br />{" "}
            <span className="text-yellow-400">Tek Doğru Seçim</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Sepetli vinçten kule vince, ahtapot vinçten paletli vince kadar her vinç tipinin
            kapasitesini, kullanım alanını ve avantajlarını aşağıda tek tek inceleyin.
            Projenize en uygun çözümü birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-2xl text-lg transition text-center shadow-lg shadow-yellow-400/20"
            >
              📞 0532 303 90 89
            </a>
            <a
              href="#karsilastirma"
              className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-4 rounded-2xl text-lg transition text-center"
            >
              Karşılaştırma Tablosu ↓
            </a>
          </div>

          {/* Hızlı geçiş çipleri */}
          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-8">
            {vincTipleri.map((v) => (
              <a
                key={v.slug}
                href={`#${v.slug}`}
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full px-3.5 py-2 transition"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: v.renk }} />
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white whitespace-nowrap">
                  {v.ad}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── DOĞRU SEÇİM KRİTERLERİ ───────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Nereden Başlamalı?</span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                Doğru Vinç<br />Seçiminin<br />5 Kriteri
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Her vinç tipi farklı bir problemi çözmek için tasarlanmıştır. Aşağıdaki beş
                kriteri birlikte değerlendirdiğinizde projenize en uygun vinç çeşidi netleşir.
              </p>
              <a
                href="tel:05323039089"
                className="inline-block bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-black px-6 py-4 rounded-xl transition"
              >
                Ücretsiz Danışın
              </a>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {secimKriterleri.map((k) => (
                <div key={k.baslik} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-md transition group">
                  <span className="text-yellow-500 font-black text-xl shrink-0">✓</span>
                  <div>
                    <h3 className="font-black text-gray-900 mb-1 group-hover:text-yellow-600 transition">{k.baslik}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{k.aciklama}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── KARŞILAŞTIRMA TABLOSU ───────── */}
      <section id="karsilastirma" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Tek Bakışta</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Vinç Çeşitleri Karşılaştırma Tablosu</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              12 vinç tipini kapasite, erişim ve zemin gereksinimine göre karşılaştırın.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm min-w-[820px]">
              <thead>
                <tr className="bg-gray-900 text-white text-left">
                  <th className="px-5 py-4 font-bold">Vinç Tipi</th>
                  <th className="px-5 py-4 font-bold">Maks. Kapasite</th>
                  <th className="px-5 py-4 font-bold">Yükseklik / Uzanım</th>
                  <th className="px-5 py-4 font-bold">Uygun Zemin</th>
                  <th className="px-5 py-4 font-bold">En Uygun Kullanım</th>
                  <th className="px-5 py-4 font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {vincTipleri.map((v, i) => (
                  <tr key={v.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="px-5 py-4 font-bold text-gray-900 whitespace-nowrap">
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: v.renk }} />
                      {v.ad}
                    </td>
                    <td className="px-5 py-4 text-gray-600">{v.kapasite}</td>
                    <td className="px-5 py-4 text-gray-600">{v.uzanim}</td>
                    <td className="px-5 py-4 text-gray-600">{v.zemin}</td>
                    <td className="px-5 py-4 text-gray-600">{v.kullanim}</td>
                    <td className="px-5 py-4 text-right whitespace-nowrap">
                      <Link href={`/${v.slug}`} className="text-yellow-600 font-bold hover:underline">
                        İncele →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── 12 VİNÇ TİPİ — DETAYLI ───────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Detaylı İnceleme</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Her Vinç Çeşidi Tek Tek</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her vinç tipinin nasıl çalıştığını, hangi işlerde öne çıktığını ve teknik
              özelliklerini aşağıda detaylıca bulabilirsiniz.
            </p>
          </div>

          <div className="space-y-20">
            {vincTipleri.map((v, i) => (
              <div
                key={v.slug}
                id={v.slug}
                className="grid lg:grid-cols-2 gap-10 items-center scroll-mt-24"
              >
                {/* Görsel — masaüstünde sırayla sağ/sol */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className="relative rounded-3xl p-8 aspect-[4/3] flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: `${v.renk}14` }}
                  >
                    <div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
                      style={{ backgroundColor: v.renk }}
                    />
                    <div className="relative w-full h-full">
                      <v.Icon c={v.renk} />
                    </div>
                  </div>
                </div>

                {/* İçerik */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span
                    className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: `${v.renk}1A`, color: v.renk }}
                  >
                    Vinç Çeşidi {String(i + 1).padStart(2, "0")} / 12
                  </span>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">{v.ad}</h3>
                  <p className="text-gray-500 font-medium mb-4">{v.kisaAciklama}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{v.aciklama}</p>

                  <ul className="space-y-2.5 mb-6">
                    {v.ozellikler.map((oz) => (
                      <li key={oz} className="flex gap-2.5 items-start text-sm text-gray-700">
                        <span className="text-green-600 font-bold shrink-0">✓</span>
                        {oz}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-[11px] text-gray-400 font-bold uppercase mb-1">Kapasite</div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{v.kapasite}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-[11px] text-gray-400 font-bold uppercase mb-1">Erişim</div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{v.uzanim}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-[11px] text-gray-400 font-bold uppercase mb-1">Zemin</div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{v.zemin}</div>
                    </div>
                  </div>

                  <Link
                    href={`/${v.slug}`}
                    className="inline-flex items-center gap-2 font-black px-6 py-3 rounded-xl transition text-black"
                    style={{ backgroundColor: v.renk }}
                  >
                    {v.ad} Hakkında Detaylı Bilgi →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── KULLANIM ALANINA GÖRE ÖNERİ TABLOSU ───────── */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Kullanım Alanına Göre</span>
            <h2 className="text-4xl font-black mt-3 mb-4">Hangi İş İçin Hangi Vinç?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sektörünüze veya proje tipinize göre önerilen vinç çeşitlerini görün.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-5 py-4 font-bold text-yellow-400">Kullanım Alanı</th>
                  <th className="px-5 py-4 font-bold text-yellow-400">Önerilen Vinç Çeşitleri</th>
                </tr>
              </thead>
              <tbody>
                {kullanimAlanlariTablosu.map((row, i) => (
                  <tr key={row.alan} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-5 py-4 font-bold border-t border-white/5">{row.alan}</td>
                    <td className="px-5 py-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {row.oneri.map((slug) => {
                          const v = vincTipleri.find((x) => x.slug === slug)!;
                          return (
                            <Link
                              key={slug}
                              href={`/${slug}`}
                              className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 transition"
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: v.renk }} />
                              <span className="text-xs font-semibold text-gray-200">{v.ad}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── BANNER ───────── */}
      <section className="py-6 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black text-gray-900 mb-1">Hangi Vinç Size Uygun, Kararsız mısınız?</div>
            <div className="text-gray-800">Uzmanlarımız projenize özel doğru vinç seçiminde yardımcı olsun.</div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl transition"
            >
              📞 Hemen Ara
            </a>
            <Link
              href="/kiralik-vinc"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-xl transition"
            >
              Kiralama Şartları
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── SSS ───────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Çeşitleri Hakkında Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {sss.map((s) => (
              <div key={s.soru} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 transition">
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

      {/* ───────── SON CTA ───────── */}
      <section className="py-24 px-4 bg-gray-950 text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at center, rgba(250,204,21,1) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-5xl font-black mb-6 leading-tight">
            Doğru Vinci Birlikte<br />
            <span className="text-yellow-400">Seçelim</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed">
            12 vinç çeşidinden hangisinin projenize uygun olduğuna karar veremediyseniz,
            uzman ekibimiz size en doğru çözümü ücretsiz olarak önersin.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-12 py-5 rounded-2xl text-xl transition shadow-2xl shadow-yellow-400/20"
            >
              📞 0532 303 90 89
            </a>
            <Link
              href="/iletisim"
              className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-12 py-5 rounded-2xl text-xl transition"
            >
              Mesaj Gönder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
