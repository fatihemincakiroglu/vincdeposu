import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/urunler",
  },
  title: "Ürünler | Platform, Forklift ve Telehandler Kiralama",
  description:
    "Makaslı platform, eklemli platform, örümcek platform, forklift ve telehandler kiralama hizmetleri. Çalışma yüksekliği, zemin ve kullanım alanına göre doğru ekipmanı seçin.",
};

/* ════════════════════════════════════════════════════════
   İKON BİLEŞENLERİ — Her ürün için özel çizilmiş silüet
   ════════════════════════════════════════════════════════ */

function GroundLine() {
  return <line x1="20" y1="250" x2="380" y2="250" stroke="#111827" strokeWidth="3" strokeLinecap="round" opacity="0.35" />;
}

function MakasliIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine />
      {/* Şasi */}
      <rect x="150" y="225" width="100" height="22" rx="5" fill="#111827" opacity="0.85" />
      <circle cx="168" cy="250" r="11" fill="#111827" />
      <circle cx="232" cy="250" r="11" fill="#111827" />
      {/* Makaslı mekanizma (çapraz kollar) */}
      <line x1="165" y1="225" x2="235" y2="160" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="235" y1="225" x2="165" y2="160" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="170" y1="170" x2="230" y2="105" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="230" y1="170" x2="170" y2="105" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="175" y1="115" x2="225" y2="60" stroke={c} strokeWidth="7" strokeLinecap="round" />
      <line x1="225" y1="115" x2="175" y2="60" stroke={c} strokeWidth="7" strokeLinecap="round" />
      {/* Platform */}
      <rect x="155" y="45" width="90" height="14" rx="4" fill="#111827" />
      <line x1="160" y1="45" x2="160" y2="30" stroke="#111827" strokeWidth="3" />
      <line x1="240" y1="45" x2="240" y2="30" stroke="#111827" strokeWidth="3" />
      <line x1="160" y1="30" x2="240" y2="30" stroke="#facc15" strokeWidth="3" />
    </svg>
  );
}

function EklemliIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine />
      <rect x="80" y="205" width="110" height="40" rx="6" fill="#111827" opacity="0.85" />
      <circle cx="108" cy="248" r="15" fill="#111827" />
      <circle cx="165" cy="248" r="15" fill="#111827" />
      <circle cx="108" cy="248" r="5" fill="#fff" />
      <circle cx="165" cy="248" r="5" fill="#fff" />
      {/* Alt bom segmenti */}
      <line x1="160" y1="205" x2="220" y2="110" stroke={c} strokeWidth="12" strokeLinecap="round" />
      {/* Mafsal (üst eklem) */}
      <circle cx="220" cy="110" r="9" fill="#111827" />
      {/* Üst bom segmenti — engel üzeri uzanım */}
      <line x1="220" y1="110" x2="310" y2="75" stroke={c} strokeWidth="10" strokeLinecap="round" opacity="0.85" />
      {/* Sepet */}
      <rect x="300" y="65" width="48" height="28" rx="5" fill="#111827" />
      <line x1="300" y1="65" x2="348" y2="65" stroke="#facc15" strokeWidth="3" />
    </svg>
  );
}

function OrumcekIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine />
      <rect x="168" y="180" width="56" height="44" rx="8" fill="#111827" opacity="0.85" />
      {/* Örümcek ayakları */}
      <line x1="178" y1="218" x2="120" y2="250" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="214" y1="218" x2="272" y2="250" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="178" y1="200" x2="108" y2="206" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="214" y1="200" x2="284" y2="206" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <circle cx="120" cy="250" r="7" fill="#111827" />
      <circle cx="272" cy="250" r="7" fill="#111827" />
      <circle cx="108" cy="206" r="7" fill="#111827" />
      <circle cx="284" cy="206" r="7" fill="#111827" />
      {/* Eklemli bom */}
      <line x1="196" y1="180" x2="225" y2="95" stroke="#111827" strokeWidth="9" strokeLinecap="round" />
      <circle cx="225" cy="95" r="6" fill="#111827" />
      <line x1="225" y1="95" x2="285" y2="55" stroke={c} strokeWidth="8" strokeLinecap="round" opacity="0.85" />
      <rect x="278" y="46" width="36" height="22" rx="4" fill="#111827" />
    </svg>
  );
}

function ForkliftIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine />
      {/* Şasi + karşı ağırlık */}
      <rect x="160" y="180" width="120" height="50" rx="6" fill="#111827" opacity="0.85" />
      <rect x="245" y="160" width="35" height="40" rx="4" fill="#111827" />
      <rect x="175" y="150" width="50" height="35" rx="4" fill="#111827" opacity="0.7" />
      <circle cx="195" cy="234" r="20" fill="#111827" />
      <circle cx="265" cy="234" r="14" fill="#111827" />
      <circle cx="195" cy="234" r="7" fill="#fff" />
      <circle cx="265" cy="234" r="6" fill="#fff" />
      {/* Mast (dikey raylar) */}
      <rect x="120" y="55" width="9" height="170" fill={c} />
      <rect x="145" y="55" width="9" height="170" fill={c} />
      {/* Çatallar */}
      <line x1="95" y1="222" x2="160" y2="222" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <line x1="95" y1="232" x2="160" y2="232" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      {/* Palet/yük */}
      <rect x="60" y="195" width="55" height="28" rx="3" fill="#facc15" opacity="0.9" />
      <line x1="60" y1="205" x2="115" y2="205" stroke="#111827" strokeWidth="2" opacity="0.4" />
      <line x1="60" y1="215" x2="115" y2="215" stroke="#111827" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

function TelehandlerIcon({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <GroundLine />
      {/* Şasi (traktör tipi) */}
      <rect x="100" y="190" width="140" height="45" rx="8" fill="#111827" opacity="0.85" />
      <rect x="118" y="155" width="48" height="38" rx="5" fill="#111827" opacity="0.7" />
      <circle cx="135" cy="240" r="22" fill="#111827" />
      <circle cx="225" cy="240" r="22" fill="#111827" />
      <circle cx="135" cy="240" r="8" fill="#fff" />
      <circle cx="225" cy="240" r="8" fill="#fff" />
      {/* Teleskopik bom (tek kademe, açılı) */}
      <rect x="178" y="105" width="20" height="100" rx="5" fill={c} transform="rotate(-28 188 200)" />
      <rect x="178" y="65" width="15" height="85" rx="5" fill={c} opacity="0.75" transform="rotate(-28 188 200)" />
      {/* Çatallar (uçta) */}
      <line x1="305" y1="78" x2="345" y2="78" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
      <line x1="305" y1="88" x2="345" y2="88" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   VERİ
   ════════════════════════════════════════════════════════ */

type Urun = {
  slug: string;
  ad: string;
  kisaAciklama: string;
  aciklama: string;
  renk: string;
  kapasite: string;
  erisim: string;
  zemin: string;
  kullanim: string;
  ozellikler: string[];
  Icon: (props: { c: string }) => React.ReactElement;
};

const urunler: Urun[] = [
  {
    slug: "makasli-platform",
    ad: "Makaslı Platform",
    kisaAciklama: "Dikey erişimde geniş ve stabil çalışma alanı",
    aciklama:
      "Makaslı platform, çapraz kesişen kollarının (makas mekanizması) dikey olarak açılıp kapanmasıyla yükselen bir çalışma platformudur. Geniş platform alanı sayesinde aynı anda birden fazla kişi ve malzeme taşınabilir; iç ve dış mekan tavan ile cephe işlerinde en sık tercih edilen ekipmandır.",
    renk: "#3B82F6",
    kapasite: "2 – 4 kişi / 230 – 450 kg platform yükü",
    erisim: "6 – 18 m çalışma yüksekliği (dikey)",
    zemin: "Düz, sağlam zemin (iç mekan / depo dahil)",
    kullanim: "Tavan montajı, depo raf bakımı, asma tavan, MEP tesisat",
    ozellikler: [
      "Geniş platform alanı ile ekip halinde çalışma kolaylığı",
      "Sadece dikey hareket ile hassas yükseklik kontrolü",
      "Elektrikli modelleriyle iç mekanda emisyonsuz kullanım",
      "Dar koridorlardan geçebilen kompakt şasi seçenekleri",
    ],
    Icon: MakasliIcon,
  },
  {
    slug: "eklemli-platform",
    ad: "Eklemli Platform",
    kisaAciklama: "Engellerin üzerinden ve arkasından erişim",
    aciklama:
      "Eklemli platform (articulated boom lift), birden çok mafsallı kol segmenti sayesinde düz değil eğri bir erişim yolu izleyebilir. Bu özelliği sayesinde önündeki bir engelin üzerinden geçip arkasındaki veya altındaki noktalara, makaslı platformun ulaşamayacağı açılarla erişebilir.",
    renk: "#8B5CF6",
    kapasite: "1 – 3 kişi / 200 – 300 kg sepet yükü",
    erisim: "12 – 43 m çalışma yüksekliği (eğri erişim)",
    zemin: "Düz veya hafif eğimli saha, dış mekan",
    kullanim: "Ağaç budama, dış cephe işleri, çelik konstrüksiyon montajı",
    ozellikler: [
      "Mafsallı kol ile engellerin üzerinden ve etrafından erişim",
      "360° dönebilen sepet ile hassas konumlandırma",
      "Hem iç hem dış mekan modelleri mevcuttur",
      "Dar tabanına karşın yüksek erişim mesafesi sunar",
    ],
    Icon: EklemliIcon,
  },
  {
    slug: "orumcek-platform",
    ad: "Örümcek Platform",
    kisaAciklama: "En zorlu zeminlerin hafif çözümü",
    aciklama:
      "Örümcek platform (spider lift), açılıp katlanabilen ayaklarıyla hassas veya engebeli zeminlerde bile stabil çalışabilen kompakt bir kişi yükseltme platformudur. Paletli veya tekerlekli versiyonlarıyla bahçe, peyzaj ve iç mekan gibi araç erişiminin kısıtlı olduğu alanlara taşınabilir.",
    renk: "#EC4899",
    kapasite: "1 – 2 kişi / 200 – 230 kg sepet yükü",
    erisim: "15 – 30 m çalışma yüksekliği",
    zemin: "Hassas, engebeli veya yumuşak zemin",
    kullanim: "Peyzaj/bahçe işleri, cam temizliği, restorasyon, atriyum erişimi",
    ozellikler: [
      "Açılır ayaklarla düşük zemin basıncı, çim ve hassas yüzeylere uygun",
      "Standart kapı genişliğinden geçebilen katlanır gövde",
      "Paletli versiyonlarıyla merdiven ve rampaları aşabilir",
      "Yüksek erişime karşın hafif ve kompakt yapı",
    ],
    Icon: OrumcekIcon,
  },
  {
    slug: "forklift-kiralama",
    ad: "Forklift",
    kisaAciklama: "Depo ve sahanın güvenilir yük taşıyıcısı",
    aciklama:
      "Forklift, çatal şeklindeki taşıyıcılarıyla paletli yükleri kaldırıp taşıyan, depo ve fabrika operasyonlarının temel ekipmanıdır. Dizel, LPG veya elektrikli motor seçenekleriyle iç veya dış mekan kullanımına uygun modeller sunulur.",
    renk: "#F97316",
    kapasite: "1,5 – 10 ton kaldırma kapasitesi",
    erisim: "3 – 7 m kaldırma yüksekliği",
    zemin: "Düz beton / asfalt, depo içi",
    kullanim: "Depo içi istifleme, yükleme-boşaltma, fabrika malzeme akışı",
    ozellikler: [
      "Palet ve büyük hacimli yüklerde hızlı taşıma",
      "Elektrikli modellerle kapalı alanda emisyonsuz çalışma",
      "Dar koridor forkliftleriyle yüksek raf yoğunluğuna uygun",
      "Operatör konforu ve geniş görüş açısına sahip kabin seçenekleri",
    ],
    Icon: ForkliftIcon,
  },
  {
    slug: "telehandler-kiralama",
    ad: "Telehandler",
    kisaAciklama: "Teleskopik kolla hem yükseklik hem mesafe",
    aciklama:
      "Telehandler, teleskopik olarak uzayan tek bir bom kolu sayesinde hem yüksekliğe hem de ileriye doğru erişim sağlayan çok amaçlı bir iş makinesidir. Çatal, kova veya sepet ataşmanlarıyla şantiye ve tarım gibi farklı alanlarda kullanılabilir.",
    renk: "#10B981",
    kapasite: "2,5 – 5,5 ton kaldırma kapasitesi",
    erisim: "6 – 18 m teleskopik erişim",
    zemin: "Düzensiz saha, şantiye, açık arazi",
    kullanim: "Şantiye malzeme taşıma, yüksek raf erişimi, tarımsal yükleme",
    ozellikler: [
      "Teleskopik kol ile hem yükseklik hem yatay erişim avantajı",
      "Değişebilir ataşmanlarla (çatal, kova, sepet) çok amaçlı kullanım",
      "Arazi tipi lastikleriyle düzensiz zeminde rahat hareket",
      "Forklifte kıyasla daha yüksek ve daha uzak noktalara erişir",
    ],
    Icon: TelehandlerIcon,
  },
];

const secimKriterleri = [
  { baslik: "Çalışma Yüksekliği", aciklama: "Erişilmesi gereken nokta ne kadar yukarıdaysa o kadar yüksek erişimli ekipman gerekir." },
  { baslik: "Erişim Şekli", aciklama: "Düz dikey erişim mi, bir engelin üzerinden mi, yoksa yatayda mesafe mi gerekiyor?" },
  { baslik: "Zemin Durumu", aciklama: "Sağlam beton zemin ile hassas/engebeli arazi farklı taban sistemleri gerektirir." },
  { baslik: "Taşınacak Yük Tipi", aciklama: "Personel mi taşınacak, palet mi, yoksa dökme malzeme mi belirleyici faktördür." },
  { baslik: "Kullanım Mekânı", aciklama: "İç mekanda emisyonsuz elektrikli modeller, dış mekanda dizel/arazi tipi tercih edilir." },
];

const kullanimAlanlariTablosu = [
  { alan: "Tavan / asma tavan işleri", oneri: ["makasli-platform"] },
  { alan: "Cephe işleri / ağaç budama (engel üzeri)", oneri: ["eklemli-platform"] },
  { alan: "Bahçe, peyzaj, hassas zemin", oneri: ["orumcek-platform"] },
  { alan: "Depo içi yük istifleme", oneri: ["forklift-kiralama"] },
  { alan: "Şantiye malzeme taşıma + yükseklik", oneri: ["telehandler-kiralama"] },
  { alan: "İç mekan, düşük emisyon gereksinimi", oneri: ["makasli-platform", "forklift-kiralama"] },
];

const sss = [
  {
    soru: "Makaslı platform ile eklemli platform arasındaki fark nedir?",
    cevap:
      "Makaslı platform sadece dikey olarak yükselir ve geniş bir platform sunar. Eklemli platform ise mafsallı kolu sayesinde bir engelin üzerinden veya etrafından geçerek eğri bir rotayla erişim sağlayabilir.",
  },
  {
    soru: "Örümcek platform hangi zeminlerde kullanılabilir?",
    cevap:
      "Örümcek platform, açılır ayakları sayesinde çim, toprak, eğimli veya hassas döşemeli zeminlerde dahi düşük basınçla stabil çalışabilir. Bu özelliği onu bahçe ve restorasyon işleri için ideal kılar.",
  },
  {
    soru: "Forklift ve telehandler arasındaki fark nedir?",
    cevap:
      "Forklift sabit bir mast üzerinde düz yükselen çatallarla çalışır ve düz zeminlerde verimlidir. Telehandler, teleskopik kolu sayesinde hem daha yükseğe hem daha uzağa erişebilir ve düzensiz arazide daha rahat hareket eder.",
  },
  {
    soru: "Bu ekipmanlar için operatör belgesi gerekli mi?",
    cevap:
      "Evet. Platform ve iş makinelerinin tümü sertifikalı operatör ile kullanılmalıdır. Talep etmeniz halinde sertifikalı operatörümüzle birlikte kiralama hizmeti sunuyoruz.",
  },
  {
    soru: "İç mekanda hangi platform tipi kullanılmalı?",
    cevap:
      "İç mekanlarda genellikle elektrikli makaslı platformlar veya kompakt örümcek platformlar tercih edilir; bu modeller emisyon üretmez ve dar alanlarda manevra kolaylığı sağlar.",
  },
  {
    soru: "Telehandler hangi ataşmanlarla kullanılabilir?",
    cevap:
      "Telehandler; çatal, kova, personel sepeti ve palet çevirici gibi farklı ataşmanlarla donatılabilir. Bu sayede aynı makine farklı saha ihtiyaçlarına uyarlanabilir.",
  },
];

/* ════════════════════════════════════════════════════════
   SAYFA
   ════════════════════════════════════════════════════════ */

export default function UrunlerPage() {
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
            <span className="text-yellow-400 text-sm font-bold tracking-wide">Ürün Kataloğu</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-6 max-w-3xl">
            Platform & İş Makinesi<br />{" "}
            <span className="text-yellow-400">Kiralama Çözümleri</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Makaslı platformdan telehandler&apos;a, forkliftten örümcek platforma kadar her
            ürünün kapasitesini, erişim mesafesini ve en uygun kullanım alanını aşağıda
            tek tek inceleyin.
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
            {urunler.map((u) => (
              <a
                key={u.slug}
                href={`#${u.slug}`}
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full px-3.5 py-2 transition"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: u.renk }} />
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white whitespace-nowrap">
                  {u.ad}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SEÇİM KRİTERLERİ ───────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Nereden Başlamalı?</span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                Doğru Ürün<br />Seçiminin<br />5 Kriteri
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Her ürün farklı bir erişim ya da taşıma problemini çözmek için tasarlanmıştır.
                Aşağıdaki beş kriteri birlikte değerlendirdiğinizde ihtiyacınıza en uygun
                ekipman netleşir.
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
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Ürün Karşılaştırma Tablosu</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              5 ürün kategorisini kapasite, erişim ve zemin gereksinimine göre karşılaştırın.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm min-w-[820px]">
              <thead>
                <tr className="bg-gray-900 text-white text-left">
                  <th className="px-5 py-4 font-bold">Ürün</th>
                  <th className="px-5 py-4 font-bold">Maks. Kapasite</th>
                  <th className="px-5 py-4 font-bold">Erişim</th>
                  <th className="px-5 py-4 font-bold">Uygun Zemin</th>
                  <th className="px-5 py-4 font-bold">En Uygun Kullanım</th>
                  <th className="px-5 py-4 font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {urunler.map((u, i) => (
                  <tr key={u.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="px-5 py-4 font-bold text-gray-900 whitespace-nowrap">
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: u.renk }} />
                      {u.ad}
                    </td>
                    <td className="px-5 py-4 text-gray-600">{u.kapasite}</td>
                    <td className="px-5 py-4 text-gray-600">{u.erisim}</td>
                    <td className="px-5 py-4 text-gray-600">{u.zemin}</td>
                    <td className="px-5 py-4 text-gray-600">{u.kullanim}</td>
                    <td className="px-5 py-4 text-right whitespace-nowrap">
                      <Link href={`/${u.slug}`} className="text-yellow-600 font-bold hover:underline">
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

      {/* ───────── ÜRÜNLER — DETAYLI ───────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Detaylı İnceleme</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Her Ürün Tek Tek</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her ürünün nasıl çalıştığını, hangi işlerde öne çıktığını ve teknik
              özelliklerini aşağıda detaylıca bulabilirsiniz.
            </p>
          </div>

          <div className="space-y-20">
            {urunler.map((u, i) => (
              <div
                key={u.slug}
                id={u.slug}
                className="grid lg:grid-cols-2 gap-10 items-center scroll-mt-24"
              >
                {/* Görsel — masaüstünde sırayla sağ/sol */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className="relative rounded-3xl p-8 aspect-[4/3] flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: `${u.renk}14` }}
                  >
                    <div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
                      style={{ backgroundColor: u.renk }}
                    />
                    <div className="relative w-full h-full">
                      <u.Icon c={u.renk} />
                    </div>
                  </div>
                </div>

                {/* İçerik */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span
                    className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: `${u.renk}1A`, color: u.renk }}
                  >
                    Ürün {String(i + 1).padStart(2, "0")} / {urunler.length}
                  </span>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">{u.ad}</h3>
                  <p className="text-gray-500 font-medium mb-4">{u.kisaAciklama}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{u.aciklama}</p>

                  <ul className="space-y-2.5 mb-6">
                    {u.ozellikler.map((oz) => (
                      <li key={oz} className="flex gap-2.5 items-start text-sm text-gray-700">
                        <span className="text-green-600 font-bold shrink-0">✓</span>
                        {oz}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-[11px] text-gray-400 font-bold uppercase mb-1">Kapasite</div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{u.kapasite}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-[11px] text-gray-400 font-bold uppercase mb-1">Erişim</div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{u.erisim}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-[11px] text-gray-400 font-bold uppercase mb-1">Zemin</div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{u.zemin}</div>
                    </div>
                  </div>

                  <Link
                    href={`/${u.slug}`}
                    className="inline-flex items-center gap-2 font-black px-6 py-3 rounded-xl transition text-black"
                    style={{ backgroundColor: u.renk }}
                  >
                    {u.ad} Hakkında Detaylı Bilgi →
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
            <h2 className="text-4xl font-black mt-3 mb-4">Hangi İş İçin Hangi Ürün?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sektörünüze veya proje tipinize göre önerilen ürün kategorilerini görün.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-5 py-4 font-bold text-yellow-400">Kullanım Alanı</th>
                  <th className="px-5 py-4 font-bold text-yellow-400">Önerilen Ürünler</th>
                </tr>
              </thead>
              <tbody>
                {kullanimAlanlariTablosu.map((row, i) => (
                  <tr key={row.alan} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-5 py-4 font-bold border-t border-white/5">{row.alan}</td>
                    <td className="px-5 py-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {row.oneri.map((slug) => {
                          const u = urunler.find((x) => x.slug === slug)!;
                          return (
                            <Link
                              key={slug}
                              href={`/${slug}`}
                              className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 transition"
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: u.renk }} />
                              <span className="text-xs font-semibold text-gray-200">{u.ad}</span>
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
            <div className="text-3xl font-black text-gray-900 mb-1">Hangi Ürün Size Uygun, Kararsız mısınız?</div>
            <div className="text-gray-800">Uzmanlarımız projenize özel doğru ekipman seçiminde yardımcı olsun.</div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl transition"
            >
              📞 Hemen Ara
            </a>
            <Link
              href="/kiralik-manlift"
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ürünler Hakkında Sık Sorulan Sorular</h2>
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
            Doğru Ürünü Birlikte<br />
            <span className="text-yellow-400">Seçelim</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed">
            5 ürün kategorisinden hangisinin projenize uygun olduğuna karar veremediyseniz,
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
