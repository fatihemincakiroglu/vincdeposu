import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vinç Kiralama Fiyatları 2026: Saatlik, Günlük ve Aylık Güncel Fiyat Listesi",
  description:
    "2026 vinç kiralama fiyatları: saatlik, günlük, haftalık ve aylık güncel tarifeler, vinç tiplerine ve şehirlere göre fiyat tabloları, ekstra maliyetler ve tasarruf önerileri.",
  alternates: {
    canonical: "/blog/vinc-kiralama-fiyatlari",
  },
  keywords: [
    "vinç kiralama fiyatları",
    "vinç kiralama fiyatları 2026",
    "saatlik vinç kiralama fiyatları",
    "aylık vinç kiralama fiyatları",
    "sepetli vinç kiralama fiyatları",
    "mobil vinç kiralama fiyatları",
  ],
  openGraph: {
    type: "article",
    title: "Vinç Kiralama Fiyatları 2026: Saatlik, Günlük ve Aylık Güncel Fiyat Listesi",
    description:
      "Saatlik, günlük ve aylık vinç kiralama fiyatları; vinç tiplerine ve şehirlere göre 2026 güncel karşılaştırmalı fiyat tabloları.",
  },
};

/* ─── TABLO VERİLERİ ─── */

const genelFiyatTablosu = [
  { tip: "Sepetli Vinç (18 m)", saatlik: "1.500 TL", gunluk: "6.000 – 8.000 TL", aylik: "Teklif" },
  { tip: "Sepetli Vinç (53 m)", saatlik: "3.000 TL", gunluk: "10.000 – 12.000 TL", aylik: "Teklif" },
  { tip: "Mobil Vinç (25 ton)", saatlik: "1.000 – 1.500 TL", gunluk: "8.000 – 12.000 TL", aylik: "180.000 TL'den" },
  { tip: "Mobil Vinç (50 ton)", saatlik: "1.500 – 2.000 TL", gunluk: "15.000 – 20.000 TL", aylik: "250.000 – 350.000 TL" },
  { tip: "Mobil Vinç (100 ton)", saatlik: "2.000 – 2.500 TL", gunluk: "25.000 – 30.000 TL", aylik: "500.000 TL'ye kadar" },
  { tip: "Kule Vinç", saatlik: "—", gunluk: "3.000 – 6.000 TL", aylik: "Teklif" },
  { tip: "Örümcek (Mini) Vinç", saatlik: "800 – 1.500 TL", gunluk: "4.000 – 9.000 TL", aylik: "Teklif" },
  { tip: "Paletli Vinç", saatlik: "—", gunluk: "35.000 TL'den", aylik: "Projeye özel" },
  { tip: "Operatör Hizmeti", saatlik: "500 TL'den", gunluk: "500 – 5.000 TL", aylik: "Teklif" },
];

const sepetliTablosu = [
  { model: "18 metre sepetli vinç", saatlik: "1.500 TL", gunluk: "6.000 – 8.000 TL", kullanim: "2-5 katlı bina cephe işleri" },
  { model: "27 metre sepetli vinç", saatlik: "1.800 – 2.200 TL", gunluk: "8.000 – 10.000 TL", kullanim: "8-9 katlı bina, reklam panosu" },
  { model: "36 metre sepetli vinç", saatlik: "2.200 – 2.600 TL", gunluk: "9.000 – 11.000 TL", kullanim: "12 katlı bina, cephe kaplama" },
  { model: "53 metre sepetli vinç", saatlik: "2.600 – 3.000 TL", gunluk: "10.000 – 12.000 TL", kullanim: "Gökdelen, kule ve baz istasyonu" },
];

const sehirTablosu = [
  { sehir: "İstanbul", saatlik: "1.500 – 2.500 TL", gunluk: "8.000 – 12.000 TL", aylik: "250.000 – 500.000 TL" },
  { sehir: "Ankara", saatlik: "1.300 – 2.200 TL", gunluk: "7.000 – 11.000 TL", aylik: "220.000 – 450.000 TL" },
  { sehir: "İzmir", saatlik: "1.300 – 2.100 TL", gunluk: "7.000 – 10.000 TL", aylik: "220.000 – 430.000 TL" },
  { sehir: "Bursa", saatlik: "1.200 – 2.000 TL", gunluk: "6.500 – 9.500 TL", aylik: "200.000 – 400.000 TL" },
  { sehir: "Kocaeli", saatlik: "1.200 – 2.000 TL", gunluk: "6.500 – 10.000 TL", aylik: "200.000 – 420.000 TL" },
  { sehir: "Diğer Şehirler", saatlik: "1.000 – 1.800 TL", gunluk: "5.000 – 9.000 TL", aylik: "180.000 TL'den" },
];

const kiralamaModelleri = [
  {
    model: "Saatlik Kiralama",
    aralik: "700 – 3.000 TL / saat",
    uygun: "1-4 saatlik işler: klima montajı, tek parça yük indirme, eşya taşıma",
    dikkat: "Çoğu firmada minimum 2-4 saatlik ücretlendirme uygulanır",
  },
  {
    model: "Günlük Kiralama",
    aralik: "3.000 – 40.000+ TL / gün",
    uygun: "Tam günlük işler: makine montajı, çelik konstrüksiyon, cephe çalışması",
    dikkat: "Standart mesai 8 saattir, aşan sürede fazla mesai farkı eklenir",
  },
  {
    model: "Haftalık Kiralama",
    aralik: "Günlüğe göre %15-20 indirimli",
    uygun: "3 gün – 2 hafta süren şantiye ve montaj işleri",
    dikkat: "Bekleme günlerinin ücretlendirmesi sözleşmede netleşmeli",
  },
  {
    model: "Aylık Kiralama",
    aralik: "180.000 – 500.000 TL / ay (mobil vinç)",
    uygun: "Uzun soluklu inşaat, enerji ve altyapı projeleri",
    dikkat: "Bakım, arıza ve yedek vinç garantisi sözleşmeye eklenmeli",
  },
];

const ekstraMaliyetler = [
  { kalem: "Nakliye (şehir içi)", tutar: "2.000 – 8.000 TL", aciklama: "Vincin sahaya götürülüp getirilmesi" },
  { kalem: "Nakliye (şehirler arası)", tutar: "10.000 TL ve üzeri", aciklama: "Mesafe ve vinç boyutuna göre" },
  { kalem: "Operatör ücreti", tutar: "500 – 5.000 TL / gün", aciklama: "Bazı firmalarda fiyata dahildir" },
  { kalem: "Fazla mesai", tutar: "Saat ücretinin %50 fazlası", aciklama: "8 saati aşan çalışmalarda" },
  { kalem: "Kurulum / söküm", tutar: "Kule vinçte 50.000 TL+", aciklama: "Kule ve paletli vinçlerde ayrı kalem" },
  { kalem: "Yük sigortası (all-risk)", tutar: "Yük değerine göre", aciklama: "Değerli ekipman kaldırmalarında önerilir" },
];

const faktorler = [
  { faktor: "Vinç tipi ve tonajı", etki: "Fiyatın ana belirleyicisi; tonaj arttıkça bedel katlanır" },
  { faktor: "Kiralama süresi", etki: "Süre uzadıkça günlük birim maliyet %15-40 düşer" },
  { faktor: "Şehir ve bölge", etki: "Büyükşehir ile Anadolu arasında %20-30 fark oluşabilir" },
  { faktor: "Operatör hizmeti", etki: "Günlük 500 – 5.000 TL ek maliyet getirir" },
  { faktor: "Sezon ve talep", etki: "Yaz aylarında fiyatlar %10-25 yükselir" },
  { faktor: "Yakıt maliyetleri", etki: "Akaryakıt zamları tarifeye doğrudan yansır" },
  { faktor: "Firma kurumsallığı", etki: "Tecrübeli firma bir miktar pahalı ama toplamda ekonomiktir" },
];

const dikkatListesi = [
  "Yazılı teklif isteyin; fiyata nelerin dahil olduğunu kalem kalem sorun",
  "Vincin periyodik kontrol raporu ve sigorta poliçesinin güncel olduğunu doğrulayın",
  "Operatörün MEB onaylı sertifikasını kontrol edin",
  "Sözleşmede iptal, gecikme, hava koşulu ve fazla mesai maddelerini arayın",
  "Zemin taşıma kapasitesini önceden değerlendirin, gerekirse plaka/takoz isteyin",
  "Yetki belgesi olan kurumsal firmalarla çalışın; kaçak firma sayısı azımsanmayacak kadar fazladır",
  "Minimum ücretlendirme kuralını (saatlik işte 2-4 saat, günlük işte 1 gün) baştan öğrenin",
];

const ipuclari = [
  "En az 3 firmadan yazılı teklif alıp kalem bazında karşılaştırın",
  "İşinizi hafta içi ve düşük sezona (kış aylarına) planlayın",
  "Birkaç saatlik ama tam gün fiyatı verilen işlerde başka işlerinizi de aynı güne toplayın",
  "3 günü aşan işlerde haftalık, 2 haftayı aşan işlerde aylık tarife isteyin",
  "Projenize yetecek minimum kapasiteyi seçin; fazla tonaj fazla maliyettir",
  "Erken rezervasyonla hem uygun fiyat hem ekipman garantisi sağlayın",
  "Uzun projelerde fiyatı bugünden sabitleyen sözleşme yapın; 2026'da kademeli artış bekleniyor",
];

const sss = [
  {
    soru: "2026 yılında vinç kiralama fiyatları ne kadar?",
    cevap:
      "2026'da saatlik vinç kiralama fiyatları 700 TL ile 3.000 TL, günlük fiyatlar 3.000 TL ile 40.000 TL üzeri, aylık mobil vinç kiralamaları ise 180.000 TL ile 500.000 TL arasında değişmektedir. Fiyat; vinç tipi, tonaj, şehir ve kiralama süresine göre belirlenir.",
  },
  {
    soru: "Saatlik vinç kiralama fiyatı ne kadar?",
    cevap:
      "Saatlik ücretler mobil vinçlerde 500 – 2.000 TL, sepetli vinçlerde 1.500 – 3.000 TL aralığındadır. Çoğu firma minimum 2-4 saatlik ücretlendirme uygular; vinç sahaya geldiği anda nakliye maliyeti oluştuğu için 1 saatlik iş de minimum tarife üzerinden faturalanır.",
  },
  {
    soru: "Sepetli vinç kiralama fiyatları ne kadar?",
    cevap:
      "18 metrelik sepetli vinç saatlik 1.500 TL, günlük 6.000 – 8.000 TL; 53 metrelik sepetli vinç ise saatlik 3.000 TL, günlük 10.000 – 12.000 TL aralığındadır. Erişim yüksekliği arttıkça fiyat yükselir.",
  },
  {
    soru: "Aylık vinç kiralama neden daha ekonomik?",
    cevap:
      "Nakliye, kurulum ve organizasyon maliyetleri tek seferde oluşup uzun süreye yayıldığı için aylık kiralamada günlük birim maliyet %30-40 oranında düşer. 50 tonluk mobil vinç günlük 15.000 – 20.000 TL iken, aylık kirada bu 250.000 – 350.000 TL'ye (günlük ortalama 8.500 – 11.500 TL) iner.",
  },
  {
    soru: "Vinç kiralama fiyatına operatör dahil mi?",
    cevap:
      "Firmaya göre değişir. Operatör ücreti ayrı tutulduğunda günlük 500 – 5.000 TL ek maliyet oluşur. Teklif alırken 'operatör, yakıt ve nakliye dahil mi?' sorusunu yazılı olarak yanıtlatın.",
  },
  {
    soru: "En ucuz vinç kiralama nasıl yapılır?",
    cevap:
      "Birden fazla firmadan yazılı teklif almak, işi hafta içine ve düşük sezona planlamak, doğru (minimum yeterli) kapasiteyi seçmek ve uzun işlerde haftalık/aylık tarife istemek toplam maliyeti ciddi oranda düşürür. Ancak yalnızca fiyata odaklanmak yerine firmanın yetki belgesi, sigortası ve ekipman bakımı mutlaka kontrol edilmelidir.",
  },
  {
    soru: "Vinç kiralarken kapora veya ön ödeme yapılır mı?",
    cevap:
      "Sektörde yaygın uygulama, rezervasyon için %20-30 oranında kapora alınmasıdır. Bakiye genellikle iş günü veya iş bitiminde tahsil edilir. Kurumsal firmalarda faturalı ve sözleşmeli çalışma esastır; kaporayı elden ve belgesiz veren müşteriler hak kaybı riskini kabul etmiş olur.",
  },
  {
    soru: "Vinç fiyatlarına KDV dahil mi?",
    cevap:
      "Piyasada verilen fiyatlar genellikle KDV hariçtir ve %20 KDV faturada ayrıca gösterilir. Teklif karşılaştırırken tüm fiyatların aynı bazda (KDV dahil veya hariç) olduğundan emin olun.",
  },
];

/* ─── SCHEMA ─── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vinç Kiralama Fiyatları 2026: Saatlik, Günlük ve Aylık Güncel Fiyat Listesi",
  description:
    "2026 vinç kiralama fiyatları: saatlik, günlük, haftalık ve aylık tarifeler, vinç tiplerine ve şehirlere göre karşılaştırmalı fiyat tabloları.",
  author: { "@type": "Organization", name: "Vinç Deposu" },
  publisher: { "@type": "Organization", name: "Vinç Deposu" },
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  mainEntityOfPage: "https://vincdeposu.com.tr/blog/vinc-kiralama-fiyatlari",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sss.map((s) => ({
    "@type": "Question",
    name: s.soru,
    acceptedAnswer: { "@type": "Answer", text: s.cevap },
  })),
};

/* ─── YARDIMCI BİLEŞENLER ─── */

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-black text-gray-900 mt-14 mb-5 leading-tight">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold text-gray-900 mt-9 mb-3">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 leading-relaxed mb-4">{children}</p>;
}

function Gorsel({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-100">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
      </div>
      <figcaption className="text-gray-400 text-sm text-center mt-3">{caption}</figcaption>
    </figure>
  );
}

export default function VincKiralamaFiyatlariPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5"
            style={{ background: "#3b82f630", color: "#3b82f6" }}
          >
            Vinç Kiralama
          </Link>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-5">
            Vinç Kiralama Fiyatları 2026: Saatlik, Günlük ve Aylık Güncel Fiyat Listesi
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
            <span>Vinç Deposu Uzman Ekibi</span>
            <span>·</span>
            <span>16 Temmuz 2026</span>
            <span>·</span>
            <span>15 dk okuma</span>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <article className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <P>
            <strong className="text-gray-900">Vinç kiralama fiyatları</strong>, projenizin bütçesini doğrudan
            etkileyen en önemli kalemlerden biridir. Saatlik 700 TL&apos;den başlayıp aylık 500.000 TL&apos;ye uzanan
            geniş bir yelpazede seyreden bu fiyatların nasıl oluştuğunu bilmek, hem doğru bütçe planlaması yapmanızı
            hem de gereksiz maliyetlerden kaçınmanızı sağlar.
          </P>
          <P>
            Bu rehberde 2026 yılına ait güncel vinç kiralama fiyatlarını; saatlik, günlük, haftalık ve aylık tarifeler,
            vinç tiplerine ve şehirlere göre karşılaştırmalı tablolar ve pratik tasarruf önerileriyle birlikte
            inceliyoruz. Projenize özel net fiyat için:{" "}
            <a href="tel:05323039089" className="text-yellow-600 font-bold hover:underline">0532 303 90 89</a>
          </P>

          <Gorsel
            src="/images/vinc-kiralama-santiye-cephe.jpg"
            alt="Şantiyede cephe çalışması yapan kiralık vinç"
            caption="Vinç kiralama fiyatları; tip, tonaj, süre ve lokasyona göre şekillenir."
          />

          <H2>Vinç Kiralama Fiyatları Nasıl Belirlenir?</H2>
          <P>
            Vinç kiralama bedeli; ekipmanın satın alma maliyeti ve amortismanı, periyodik bakım giderleri, sigorta
            primleri, yakıt tüketimi, operatör maaşı ve firmanın operasyon maliyetlerinin toplamından oluşur. Firmalar
            bu maliyetleri saatlik, günlük veya aylık bazda tarifeye dönüştürür.
          </P>
          <P>
            Teklif aşamasında size sorulacak üç temel soru fiyatın iskeletini kurar: <strong className="text-gray-900">Ne
            kaldırılacak</strong> (yükün ağırlığı ve boyutu), <strong className="text-gray-900">nereye kaldırılacak</strong> (yükseklik
            ve yatay mesafe) ve <strong className="text-gray-900">nerede çalışılacak</strong> (şehir, bölge, zemin ve erişim
            koşulları). Bu bilgiler netleştikçe fiyat da netleşir; belirsiz taleplerde firmalar riski fiyata yansıtır.
          </P>
          <P>
            2026 itibarıyla Türkiye genelinde saatlik vinç kiralama ücretleri 700 TL ile 3.000 TL, günlük ücretler
            3.000 TL ile 40.000 TL üzeri, aylık mobil vinç kiralamaları ise 180.000 TL ile 500.000 TL arasında
            değişmektedir.
          </P>

          <H2>Vinç Kiralama Fiyatlarını Etkileyen Faktörler</H2>
          <P>
            Aynı vincin farklı projelerde farklı fiyatlanmasının nedeni, bedeli şekillendiren çok sayıda değişkendir:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Faktör</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Fiyata Etkisi</th>
                </tr>
              </thead>
              <tbody>
                {faktorler.map((f, i) => (
                  <tr key={f.faktor} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.faktor}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.etki}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            Bu faktörlerin her birinin detaylı analizini{" "}
            <Link href="/blog/gunluk-vinc-kiralama-fiyatlari" className="text-yellow-600 font-semibold hover:underline">
              Günlük Vinç Kiralama Fiyatları 2026
            </Link>{" "}
            rehberimizde bulabilirsiniz.
          </P>

          <H2>2026 Vinç Kiralama Fiyatları Tablosu</H2>
          <P>
            Aşağıdaki tablo, 2026 yılı Türkiye ortalamasına göre tüm vinç tiplerinin saatlik, günlük ve aylık kiralama
            fiyat aralıklarını göstermektedir. Fiyatlar KDV hariçtir:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Vinç Tipi</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Saatlik</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {genelFiyatTablosu.map((f, i) => (
                  <tr key={f.tip} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.tip}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.saatlik}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Sepetli Vinç Kiralama Fiyatları</H3>
          <P>
            Sepetli vinçler; cephe boyama, mantolama, cam ve tabela montajı, ağaç budama ve her türlü yüksekte çalışma
            işinin en çok tercih edilen ekipmanıdır. Fiyatı belirleyen ana unsur metre cinsinden erişim yüksekliğidir:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Model</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Saatlik</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Tipik Kullanım</th>
                </tr>
              </thead>
              <tbody>
                {sepetliTablosu.map((f, i) => (
                  <tr key={f.model} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.model}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.saatlik}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.kullanim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Mobil Vinç Kiralama Fiyatları</H3>
          <P>
            Mobil vinçlerde fiyat tonajla katlanarak artar: 25 tonluk vinç günlük 8.000 – 12.000 TL iken 100 tonluk
            model 25.000 – 30.000 TL bandındadır. Saatlik kiralamada 500 – 2.000 TL, aylık kiralamada ise kapasiteye
            göre 180.000 – 500.000 TL aralığı geçerlidir. Şehir içi tek günlük işlerin (klima, jeneratör, çelik
            konstrüksiyon montajı) standart ekipmanı 25-50 ton bandındaki mobil vinçlerdir.
          </P>

          <H3>Kule Vinç Kiralama Fiyatları</H3>
          <P>
            Kule vinçlerin günlük bedeli 3.000 – 6.000 TL ile düşük görünse de temel betonu, montaj ve demontaj için
            50.000 TL&apos;yi aşan tek seferlik kurulum maliyeti vardır. Bu yüzden kule vinç yalnızca aylarca sürecek
            inşaat projelerinde ekonomiktir; kısa süreli yüksek erişim ihtiyacında mobil veya sepetli vinç her zaman
            daha mantıklı seçimdir.
          </P>

          <H3>Örümcek ve Paletli Vinç Kiralama Fiyatları</H3>
          <P>
            Dar alan ve hassas zemin işlerinin uzmanı örümcek (mini) vinçler günlük 4.000 – 9.000 TL aralığında
            kiralanır. Yelpazenin diğer ucundaki 100-500 ton kapasiteli paletli vinçler ise günlük 35.000 TL&apos;den
            başlar; nakliye ve saha montajı ayrıca fiyatlandırılır ve genellikle projeye özel teklif verilir.
          </P>

          <Gorsel
            src="/images/sepetli-vinc-cephe-calismasi.jpg"
            alt="Sepetli vinç ile yüksek bina cephesinde çalışma"
            caption="Sepetli vinçlerde fiyatın ana belirleyicisi erişim yüksekliğidir."
          />

          <H2>Saatlik, Günlük, Haftalık ve Aylık Vinç Kiralama Karşılaştırması</H2>
          <P>
            Doğru kiralama modelini seçmek, aynı iş için ödeyeceğiniz toplam bedeli %40&apos;a varan oranda
            değiştirebilir:
          </P>
          <div className="space-y-4 mb-6">
            {kiralamaModelleri.map((m) => (
              <div key={m.model} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{m.model}</h3>
                  <span className="text-yellow-700 font-bold text-sm bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full">
                    {m.aralik}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">
                  <strong className="text-gray-900">Kimler için uygun:</strong> {m.uygun}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{m.dikkat}</p>
              </div>
            ))}
          </div>
          <P>
            Genel kural: iş 1-2 gün sürecekse günlük, 3 gün ile 2 hafta arasındaysa haftalık, 2 haftayı aşacaksa aylık
            kiralama en ekonomik modeldir. Süresi belirsiz işlerde &quot;günlük başla, uzarsa haftalık tarifeye
            geç&quot; şeklinde esnek sözleşme yapan firmaları tercih edin.
          </P>

          <H2>Şehirlere Göre Vinç Kiralama Fiyatları</H2>
          <P>
            Vinç filolarının dağılımı, yerel talep ve nakliye mesafeleri nedeniyle fiyatlar şehirden şehre değişir.
            Aşağıdaki tablo sepetli vinç bazında karşılaştırma sunmaktadır (aylık sütunu 50 ton mobil vinç içindir):
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Şehir</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Saatlik (Sepetli)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük (Sepetli)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Aylık (Mobil 50 t)</th>
                </tr>
              </thead>
              <tbody>
                {sehirTablosu.map((f, i) => (
                  <tr key={f.sehir} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.sehir}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.saatlik}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            İstanbul, en geniş vinç parkına ve en yüksek talebe sahip şehirdir; sepetli vinçte saatlik 1.500 – 2.500
            TL, günlük 8.000 – 12.000 TL bandı günceldir. İstanbul içinde bile bölgesel fark vardır: Halkalı, Kayaşehir
            ve İkitelli gibi filo yoğunluğu yüksek bölgelerde rekabet fiyatları aşağı çekerken, erişimi zor veya uzak
            noktalarda nakliye farkı devreye girer. Vinç Deposu olarak İstanbul&apos;un{" "}
            <Link href="/istanbul-vinc-kiralama" className="text-yellow-600 font-semibold hover:underline">
              39 ilçesinin tamamında
            </Link>{" "}
            aynı gün hizmet veriyoruz.
          </P>

          <H2>Vinç Kiralama Fiyatlarına Eklenen Ekstra Maliyetler</H2>
          <P>
            Teklifleri karşılaştırırken baz fiyat yanıltıcı olabilir; toplam maliyeti aşağıdaki kalemler belirler:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Maliyet Kalemi</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Tutar (2026)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                {ekstraMaliyetler.map((f, i) => (
                  <tr key={f.kalem} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.kalem}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.tutar}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.aciklama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            Kurumsal firmalarda ekipman ve üçüncü şahıs sigortası genellikle fiyata dahildir; ancak kaldırılan yükün
            kendisinin sigortası (yük all-risk) çoğu zaman ayrı poliçe gerektirir. Değerli makine ve ekipman
            kaldırmalarında bu poliçeyi mutlaka talep edin.
          </P>

          <H2>Vinç Kiralarken Dikkat Edilmesi Gerekenler</H2>
          <P>
            Uygun fiyat kadar güvenli ve sorunsuz bir operasyon da önemlidir. Kiralama öncesi şu kontrol listesini
            uygulayın:
          </P>
          <ul className="space-y-3 mb-6">
            {dikkatListesi.map((madde) => (
              <li key={madde} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-gray-700 text-sm leading-relaxed">{madde}</span>
              </li>
            ))}
          </ul>

          <Gorsel
            src="/images/vinc-cephe-montaj-calismasi.jpg"
            alt="Bina cephesinde vinç ile montaj çalışması"
            caption="Bakımlı ekipman ve sertifikalı operatör, gizli maliyetleri ortadan kaldırır."
          />

          <H2>Uygun Vinç Kiralama Fiyatları İçin Tasarruf Önerileri</H2>
          <P>Kaliteden ödün vermeden toplam maliyeti düşürmenin kanıtlanmış yolları:</P>
          <ul className="space-y-3 mb-6">
            {ipuclari.map((madde) => (
              <li key={madde} className="flex gap-3 items-start bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                <span className="text-gray-700 text-sm leading-relaxed">{madde}</span>
              </li>
            ))}
          </ul>

          <H2>2026 Yılında Vinç Kiralama Fiyatlarında Beklenen Gelişmeler</H2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4 space-y-2">
            <li>
              <strong className="text-gray-900">Kentsel dönüşüm:</strong> Deprem güçlendirme ve dönüşüm projeleri mobil ve
              sepetli vinç talebini yüksek tutmaya devam ediyor.
            </li>
            <li>
              <strong className="text-gray-900">Kur ve yedek parça:</strong> Vinçlerin ithal olması nedeniyle döviz
              hareketleri tarifeye gecikmeli olarak yansıyor; yıl boyunca kademeli artış bekleniyor.
            </li>
            <li>
              <strong className="text-gray-900">Enerji yatırımları:</strong> Rüzgar ve güneş projeleri yüksek tonajlı
              segmentte fiyatları yukarı baskılıyor.
            </li>
            <li>
              <strong className="text-gray-900">Dijital teklif sistemleri:</strong> Online karşılaştırma imkanı fiyat
              şeffaflığını artırıyor, rekabet müşteri lehine işliyor.
            </li>
          </ul>
          <P>
            Bu tablo, özellikle uzun vadeli projelerde fiyatı bugünden sabitleyen sözleşmeler yapmanın 2026&apos;da
            belirgin avantaj sağlayacağını gösteriyor.
          </P>

          <H2>Özet: Vinç Kiralama Fiyatları Hakkında Bilmeniz Gerekenler</H2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4 space-y-2">
            <li>Saatlik fiyatlar 700 – 3.000 TL, günlük fiyatlar 3.000 – 40.000+ TL, aylık mobil vinç 180.000 – 500.000 TL bandındadır.</li>
            <li>Fiyatın üç ana belirleyicisi: vinç tipi/tonajı, kiralama süresi ve lokasyondur.</li>
            <li>Baz fiyata ek olarak nakliye, operatör, sigorta ve fazla mesai kalemlerini hesaba katın.</li>
            <li>Süre uzadıkça birim maliyet düşer: haftalıkta %15-20, aylıkta %30-40 tasarruf sağlanır.</li>
            <li>Verilen fiyatlar genellikle KDV hariçtir; karşılaştırmayı aynı bazda yapın.</li>
            <li>En düşük fiyat değil; toplam maliyet, yetki belgesi ve firma güvenilirliği esas alınmalıdır.</li>
          </ul>
          <P>
            Vinç Deposu olarak 25 yıllık tecrübemiz, geniş filomuz ve sertifikalı operatör kadromuzla saatlikten aylığa
            tüm kiralama modellerinde şeffaf fiyat garantisi sunuyoruz. Güncel fiyat listemiz için{" "}
            <Link href="/kiralik-vinc" className="text-yellow-600 font-semibold hover:underline">
              kiralık vinç sayfamızı
            </Link>{" "}
            inceleyebilir veya doğrudan bize ulaşabilirsiniz.
          </P>

          <H2>Vinç Kiralama Fiyatları Hakkında Sıkça Sorulan Sorular (SSS)</H2>
          <div className="space-y-4 mb-10">
            {sss.map((s) => (
              <div key={s.soru} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{s.soru}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.cevap}</p>
              </div>
            ))}
          </div>

          {/* Etiketler */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Vinç Kiralama Fiyatları", "Fiyat Listesi", "2026", "Sepetli Vinç", "Mobil Vinç"].map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-black mb-3">Projeniz İçin Net Fiyat Alın</h2>
            <p className="text-gray-400 mb-6">
              Yükünüzü, lokasyonunuzu ve tarihinizi söyleyin; size en uygun vinci ve kesin fiyatı dakikalar içinde
              bildirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05323039089"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition"
              >
                0532 303 90 89
              </a>
              <Link
                href="/kiralik-vinc"
                className="border border-gray-600 hover:border-white text-white font-bold px-6 py-3 rounded-xl transition"
              >
                Kiralık Vinç Sayfası               </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Diğer Yazılar */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Diğer Yazılar</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <Link
              href="/blog/gunluk-vinc-kiralama-fiyatlari"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-3"></div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                Günlük Vinç Kiralama Fiyatları 2026: Detaylı Rehber ve Fiyat Tablosu
              </h3>
              <p className="text-gray-500 text-xs">14 dk okuma</p>
            </Link>
            <Link
              href="/blog/vinc-kiralama-fiyatlarini-etkileyen-faktorler"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-3"></div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                Vinç Kiralama Fiyatlarını Etkileyen 7 Faktör
              </h3>
              <p className="text-gray-500 text-xs">5 dk okuma</p>
            </Link>
            <Link
              href="/blog/istanbul-vinc-kiralama-rehberi-2024"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-3"></div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                İstanbul&apos;da Vinç Kiralama: Fiyatlar, Türler ve Seçim Kriterleri
              </h3>
              <p className="text-gray-500 text-xs">9 dk okuma</p>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="text-yellow-600 font-semibold hover:underline">
              Tüm yazılara dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
