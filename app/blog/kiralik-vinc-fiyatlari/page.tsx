import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kiralık Vinç Fiyatları 2026: Kapsamlı Rehber ve Fiyat Tablosu",
  description:
    "2026 kiralık vinç fiyatları: mobil, paletli, kule ve örümcek vinç güncel fiyat tabloları, şehir ve sektör karşılaştırmaları, ekstra maliyetler ve tasarruf ipuçları.",
  alternates: {
    canonical: "/blog/kiralik-vinc-fiyatlari",
  },
  keywords: [
    "kiralık vinç fiyatları",
    "kiralık vinç fiyatları 2026",
    "kiralık vinç",
    "mobil vinç kiralık fiyat",
    "istanbul kiralık vinç fiyatları",
  ],
  openGraph: {
    type: "article",
    title: "Kiralık Vinç Fiyatları 2026: Kapsamlı Rehber ve Fiyat Tablosu",
    description:
      "Vinç tiplerine, şehirlere ve sektörlere göre 2026 güncel kiralık vinç fiyatları, fiyatı etkileyen faktörler ve uygun fiyat için ipuçları.",
  },
};

/* ─── TABLO VERİLERİ ─── */

const genelFiyatTablosu = [
  { tip: "Örümcek (Mini) Vinç", kapasite: "3 – 10 ton", saatlik: "800 – 1.500 TL", gunluk: "4.000 – 9.000 TL" },
  { tip: "Sepetli Vinç (18 m)", kapasite: "Personel erişimi", saatlik: "1.500 TL", gunluk: "6.000 – 8.000 TL" },
  { tip: "Sepetli Vinç (53 m)", kapasite: "Personel erişimi", saatlik: "3.000 TL", gunluk: "10.000 – 12.000 TL" },
  { tip: "Mobil Vinç (25 ton)", kapasite: "25 ton", saatlik: "1.000 – 1.500 TL", gunluk: "8.000 – 12.000 TL" },
  { tip: "Mobil Vinç (50 ton)", kapasite: "50 ton", saatlik: "1.500 – 2.000 TL", gunluk: "15.000 – 20.000 TL" },
  { tip: "Mobil Vinç (100 ton)", kapasite: "100 ton", saatlik: "2.000 – 2.500 TL", gunluk: "25.000 – 30.000 TL" },
  { tip: "Mobil Vinç (200+ ton)", kapasite: "200 ton ve üzeri", saatlik: "Teklif", gunluk: "40.000 TL ve üzeri" },
  { tip: "Paletli Vinç", kapasite: "100 – 500 ton", saatlik: "—", gunluk: "35.000 TL'den (teklif)" },
  { tip: "Kule Vinç", kapasite: "6 – 16 ton", saatlik: "—", gunluk: "3.000 – 6.000 TL" },
];

const mobilVincTablosu = [
  { kapasite: "25 ton", gunluk: "8.000 – 12.000 TL", aylik: "180.000 TL'den", kullanim: "Klima, jeneratör, hafif montaj" },
  { kapasite: "50 ton", gunluk: "15.000 – 20.000 TL", aylik: "250.000 – 350.000 TL", kullanim: "Çelik konstrüksiyon, makine yerleştirme" },
  { kapasite: "80 ton", gunluk: "20.000 – 25.000 TL", aylik: "350.000 – 420.000 TL", kullanim: "Köprü kirişi, ağır montaj" },
  { kapasite: "100 ton", gunluk: "25.000 – 30.000 TL", aylik: "500.000 TL'ye kadar", kullanim: "Endüstriyel tesis, trafo" },
  { kapasite: "200 ton ve üzeri", gunluk: "40.000 TL+", aylik: "Projeye özel", kullanim: "Rüzgar türbini, liman, enerji" },
];

const sehirTablosu = [
  { sehir: "İstanbul", saatlik: "1.500 – 2.500 TL", gunluk: "8.000 – 12.000 TL", not: "En geniş filo, en yüksek talep" },
  { sehir: "Ankara", saatlik: "1.300 – 2.200 TL", gunluk: "7.000 – 11.000 TL", not: "Kamu projeleri belirleyici" },
  { sehir: "İzmir", saatlik: "1.300 – 2.100 TL", gunluk: "7.000 – 10.000 TL", not: "Liman ve sanayi talebi yoğun" },
  { sehir: "Bursa", saatlik: "1.200 – 2.000 TL", gunluk: "6.500 – 9.500 TL", not: "OSB ve fabrika işleri öne çıkar" },
  { sehir: "Kocaeli", saatlik: "1.200 – 2.000 TL", gunluk: "6.500 – 10.000 TL", not: "Rafineri ve endüstri bölgesi" },
  { sehir: "Diğer Şehirler", saatlik: "1.000 – 1.800 TL", gunluk: "5.000 – 9.000 TL", not: "Nakliye bedeli fiyata eklenir" },
];

const sureKarsilastirma = [
  { sure: "Günlük", fiyat: "15.000 – 20.000 TL / gün", birim: "15.000 – 20.000 TL", avantaj: "1-2 günlük işlerde esneklik" },
  { sure: "Haftalık", fiyat: "80.000 – 110.000 TL / hafta", birim: "≈ 11.500 – 15.500 TL / gün", avantaj: "%15-20 birim tasarruf" },
  { sure: "Aylık", fiyat: "250.000 – 350.000 TL / ay", birim: "≈ 8.500 – 11.500 TL / gün", avantaj: "%30-40 birim tasarruf" },
];

const ekstraMaliyetler = [
  { kalem: "Nakliye (şehir içi)", tutar: "2.000 – 8.000 TL", aciklama: "Vincin sahaya götürülüp getirilmesi" },
  { kalem: "Nakliye (şehirler arası)", tutar: "10.000 TL ve üzeri", aciklama: "Mesafeye ve vinç boyutuna göre" },
  { kalem: "Kurulum / Söküm", tutar: "Kule vinçte 50.000 TL+", aciklama: "Kule ve paletli vinçlerde ayrı kalem" },
  { kalem: "Operatör Ücreti", tutar: "500 – 5.000 TL / gün", aciklama: "Vinç tipine ve mesaiye göre değişir" },
  { kalem: "Yük Sigortası (all-risk)", tutar: "Yük değerine göre", aciklama: "Değerli ekipman kaldırmalarında önerilir" },
  { kalem: "Fazla Mesai", tutar: "Saat ücretinin %50 fazlası", aciklama: "Günlük 8 saati aşan çalışmalarda" },
];

const dikkatListesi = [
  "İhtiyacınıza uygun minimum yeterli kapasiteyi belirleyin; fazla tonaj fazla maliyettir",
  "Yazılı teklif isteyin; operatör, yakıt ve nakliyenin dahil olup olmadığını netleştirin",
  "Vincin periyodik kontrol raporlarının ve sigorta poliçesinin güncel olduğunu doğrulayın",
  "Operatörün MEB onaylı sertifikasını ve saha deneyimini sorgulayın",
  "Çalışma sahasının zemin taşıma kapasitesini ve erişim yollarını önceden kontrol edin",
  "Sözleşmede iptal, gecikme, hava koşulu ve fazla mesai maddelerinin bulunduğundan emin olun",
  "Yetki belgesi olan kurumsal firmaları tercih edin; piyasada kaçak çalışan firma sayısı azımsanmayacak kadar fazladır",
];

const hatalar = [
  { hata: "Sadece en düşük fiyata odaklanmak", sonuc: "Bakımsız ekipman, arıza, iş kazası riski ve proje gecikmesi" },
  { hata: "Yük ağırlığını ve mesafeyi eksik bildirmek", sonuc: "Yetersiz kapasiteli vinç gelir, iş yarım kalır, ikinci kiralama bedeli doğar" },
  { hata: "Ekstra kalemleri fiyata dahil sanmak", sonuc: "Fatura beklenenden %30-50 yüksek gelir" },
  { hata: "Sözleşmesiz, sözlü anlaşmayla çalışmak", sonuc: "Anlaşmazlık halinde hak kaybı yaşanır" },
  { hata: "Zemin etüdü yapmadan vinç çağırmak", sonuc: "Vinç kurulamaz, kiralama bedeli boşa ödenir" },
  { hata: "Kiralama modelini yanlış seçmek", sonuc: "Uzun işte günlük tarifeyle %30-40 fazla ödeme yapılır" },
];

const ipuclari = [
  "En az 3 firmadan yazılı teklif alın ve kalem bazında karşılaştırın",
  "İşinizi hafta içi günlere ve düşük sezona (kış aylarına) planlayın",
  "3 günü aşan işlerde haftalık, 2 haftayı aşan işlerde aylık tarife isteyin",
  "Aynı bölgedeki farklı işlerinizi birleştirip tek seferde tamamlayın",
  "Vinç ihtiyacınızı önceden planlayıp erken rezervasyon yaptırın",
  "İşinize yakın filoya sahip firmayı seçerek nakliye maliyetini düşürün",
  "Uzun projelerde fiyatı bugünden sabitleyen sözleşme yapın",
];

const sss = [
  {
    soru: "2026 yılında kiralık vinç fiyatları ne kadar?",
    cevap:
      "2026'da kiralık vinç fiyatları saatlik 700 – 3.000 TL, günlük 3.000 – 40.000 TL üzeri, aylık ise (mobil vinçlerde) 180.000 – 500.000 TL aralığındadır. Fiyat; vinç tipi, tonaj, şehir, kiralama süresi ve ek hizmetlere göre belirlenir.",
  },
  {
    soru: "Kiralık vinç fiyatına neler dahildir?",
    cevap:
      "Firmaya göre değişir. Bazı firmalar operatör, yakıt ve şehir içi nakliyeyi pakete dahil ederken bazıları her kalemi ayrı fiyatlandırır. Teklif alırken 'fiyata neler dahil?' sorusunu yazılı olarak yanıtlatmak sonradan sürpriz maliyetleri önler.",
  },
  {
    soru: "En uygun kiralık vinç hangi tiptir?",
    cevap:
      "Tek günlük hafif işlerde küçük tonajlı örümcek vinç veya 18 metrelik sepetli vinç en ekonomik seçenektir. Aylarca sürecek inşaat projelerinde ise kurulum maliyetine rağmen kule vinç birim bazda en ucuz çözümdür.",
  },
  {
    soru: "Kiralık vinç için minimum ücretlendirme var mı?",
    cevap:
      "Evet. Saatlik kiralamalarda genellikle minimum 2-4 saat, günlük kiralamalarda minimum 1 tam gün ücretlendirilir. Vinç sahaya geldiği anda nakliye ve operatör maliyeti oluştuğu için iş kısa sürse de minimum tarife uygulanır.",
  },
  {
    soru: "Operatörsüz kiralık vinç alınabilir mi?",
    cevap:
      "Kendi sertifikalı operatörünüz varsa mümkündür; ancak hasar sorumluluğunun sözleşmede net tanımlanması gerekir. Pratikte kiralamaların büyük çoğunluğu operatörlü pakettir ve güvenlik açısından önerilen yöntem de budur.",
  },
  {
    soru: "Kiralık vinç fiyatlarına KDV dahil mi?",
    cevap:
      "Piyasada verilen fiyatlar genellikle KDV hariçtir; %20 KDV faturada ayrıca gösterilir. Teklifleri karşılaştırırken hepsinin aynı bazda olduğundan emin olun.",
  },
  {
    soru: "Şehir dışına kiralık vinç gönderiliyor mu?",
    cevap:
      "Evet, ancak günlük bedele gidiş-dönüş nakliye ücreti eklenir ve bazı firmalar yol süresini kiralama gününe dahil eder. Kısa işlerde yerel firmadan teklif almak çoğu zaman daha ekonomiktir; büyük tonajlı özel işlerde ise şehirler arası kiralama kaçınılmazdır.",
  },
  {
    soru: "Kiralık vinç rezervasyonu kaç gün önce yapılmalı?",
    cevap:
      "Standart tonajlarda 1-3 gün önceden rezervasyon yeterlidir. 200 ton üzeri vinçler ve yoğun sezon (ilkbahar-yaz) için 1-2 hafta önceden planlama önerilir. Erken rezervasyon hem ekipman garantisi hem de fiyat avantajı sağlar.",
  },
];

/* ─── SCHEMA ─── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kiralık Vinç Fiyatları 2026: Kapsamlı Rehber ve Fiyat Tablosu",
  description:
    "2026 güncel kiralık vinç fiyatları: vinç tiplerine, şehirlere ve sektörlere göre fiyat tabloları, fiyatı etkileyen faktörler, ekstra maliyetler ve tasarruf ipuçları.",
  author: { "@type": "Organization", name: "Vinç Deposu" },
  publisher: { "@type": "Organization", name: "Vinç Deposu" },
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  mainEntityOfPage: "https://vincdeposu.com.tr/blog/kiralik-vinc-fiyatlari",
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

export default function KiralikVincFiyatlariPage() {
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
            Kiralık Vinç Fiyatları 2026: Kapsamlı Rehber ve Fiyat Tablosu
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
            <strong className="text-gray-900">Kiralık vinç fiyatları</strong>, ağır yük kaldırma ihtiyacı olan her
            projenin bütçe planlamasında ilk sorulan sorudur. Vinç satın almak milyonlarca liralık yatırım
            gerektirdiğinden, işletmelerin ezici çoğunluğu kiralama yolunu tercih eder; ancak fiyatlar vinç tipine,
            tonaja, şehre ve kiralama süresine göre 10 kata varan farklılık gösterebilir.
          </P>
          <P>
            Bu kapsamlı rehberde 2026 yılına ait güncel kiralık vinç fiyatlarını; karşılaştırmalı tablolar, sektör ve
            şehir analizleri, sık yapılan hatalar ve tasarruf ipuçlarıyla birlikte ele alıyoruz. Projenize özel net
            fiyat için 7/24 hattımız:{" "}
            <a href="tel:05323039089" className="text-yellow-600 font-bold hover:underline">0532 303 90 89</a>
          </P>

          <Gorsel
            src="/images/vinc-kiralama-anit-saha-calismasi.jpg"
            alt="Saha çalışmasında kiralık vinç operasyonu"
            caption="Kiralık vinç, satın almaya kıyasla bakım, sigorta ve amortisman yükünü ortadan kaldırır."
          />

          {/* H2-1 */}
          <H2>Kiralık Vinç Fiyatları Nedir, Nasıl Belirlenir?</H2>
          <P>
            Kiralık vinç fiyatı; bir vincin belirli bir süre boyunca (saatlik, günlük, haftalık veya aylık) kullanım
            hakkı karşılığında ödenen bedeldir. Firmalar bu bedeli hesaplarken vincin satın alma maliyetini ve
            amortismanını, periyodik bakım giderlerini, sigorta primlerini, yakıt tüketimini ve operatör maaşını baz
            alır; üzerine operasyon ve kâr marjı ekler.
          </P>
          <P>
            2026 itibarıyla Türkiye genelinde kiralık vinç fiyatları <strong className="text-gray-900">saatlik 700 – 3.000 TL,
            günlük 3.000 – 40.000 TL üzeri, aylık ise 180.000 – 500.000 TL</strong> aralığında seyretmektedir. Bu geniş
            aralığın nedeni, 3 tonluk mini vinçten 500 tonluk paletli vince uzanan devasa ekipman yelpazesidir.
          </P>
          <P>
            Teklif aşamasında firmaların sorduğu üç soru fiyatın iskeletini kurar: ne kaldırılacak (yükün ağırlığı ve
            boyutu), nereye kaldırılacak (yükseklik ve yatay mesafe) ve nerede çalışılacak (şehir, zemin ve erişim
            koşulları). Bu bilgileri ne kadar net verirseniz, alacağınız fiyat o kadar isabetli ve pazarlığa açık olur.
          </P>

          {/* H2-2 */}
          <H2>Kiralık Vinç Fiyatları Etkileyen Faktörler</H2>
          <P>
            Aynı vinç farklı projelerde farklı fiyatlanır; çünkü bedeli tek bir değişken değil, birbiriyle etkileşen
            çok sayıda faktör belirler:
          </P>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Vincin tonajı ve kaldırma kapasitesi</li>
            <li>Kiralama süresi ve modeli</li>
            <li>Çalışma yapılacak şehir ve bölge</li>
            <li>Operatör hizmetinin dahil olup olmaması</li>
            <li>Sezonsal talep dalgalanmaları</li>
            <li>Yakıt ve enerji maliyetleri</li>
            <li>Kiralama firmasının tecrübesi ve kurumsallığı</li>
          </ul>

          <H3>Kiralık Vinç Fiyatları Tonaj ve Kapasite Etkisi</H3>
          <P>
            Tonaj, kiralık vinç fiyatının bir numaralı belirleyicisidir. 25 tonluk mobil vinç günlük 8.000 – 12.000 TL
            iken, 100 tonluk model 25.000 – 30.000 TL bandındadır; yani kapasite 4 katına çıktığında bedel de yaklaşık
            3 katına çıkar. Kapasite hesabında kritik nokta ton-metre değeridir: bom uzadıkça vincin kaldırabileceği
            yük azalır. Bu yüzden &quot;50 ton yeterli mi?&quot; sorusunun yanıtı, yükün ağırlığı kadar kaldırılacağı
            mesafeye de bağlıdır.
          </P>

          <H3>Kiralık Vinç Fiyatları Kiralama Süresinin Rolü</H3>
          <P>
            Kiralama süresi uzadıkça günlük birim maliyet belirgin biçimde düşer. Tek günlük işlerde nakliye, kurulum
            ve organizasyon maliyetleri tek güne yansıdığı için birim fiyat en yüksektir. Aynı vinç haftalık
            kiralandığında birim maliyet %15-20, aylık kiralandığında %30-40 azalır. Bu nedenle işinizin süresini
            gerçekçi tahmin etmek, doğru kiralama modelini seçmenin ve bütçenizi korumanın anahtarıdır.
          </P>

          <H3>Kiralık Vinç Fiyatları Bölge ve Şehir Farkları</H3>
          <P>
            Vinç filolarının yoğun olduğu büyükşehirlerde rekabet fiyatları dengeler; ancak talep de yüksek olduğundan
            yoğun dönemlerde tarifeler hızla yükselir. Filonun az olduğu Anadolu şehirlerinde baz fiyat düşük görünse
            de, ekipmanın başka şehirden getirilmesi gerektiğinde nakliye bedeli toplam maliyeti büyükşehir seviyesinin
            üzerine çıkarabilir. Şehir içinde bile fark vardır: dar sokaklı, eğimli veya erişimi zor bölgelerde ek
            maliyet oluşabilir.
          </P>

          <H3>Kiralık Vinç Fiyatları Operatörlü mü Operatörsüz mü?</H3>
          <P>
            Yasal düzenlemeler gereği vinçler yalnızca sertifikalı operatörler tarafından kullanılabilir. Operatörlü
            kiralamada bedele günlük <strong className="text-gray-900">500 – 5.000 TL</strong> operatör ücreti eklenir. Kendi
            sertifikalı operatörünüz varsa operatörsüz kiralama mümkündür; ancak hasar sorumluluğu sözleşmede net
            tanımlanmalıdır. Pratikte kiralamaların büyük çoğunluğu operatörlü pakettir — vinci en iyi tanıyan kişi
            onu her gün kullanan operatördür ve bu hem güvenlik hem hız kazandırır.
          </P>

          <H3>Kiralık Vinç Fiyatları Sezonsal Talebin Etkisi</H3>
          <P>
            İnşaat sezonu olan Nisan-Ekim döneminde vinç talebi zirveye çıkar ve fiyatlar %10-25 yükselebilir;
            ekipman bulmak bile zorlaşabilir. Kış aylarında ise talep gevşer, fiyatlar geriler ve pazarlık payı artar.
            Tarih esnekliği olan işlerinizi düşük sezona kaydırmak, aynı hizmeti belirgin biçimde daha ucuza almanızı
            sağlar. Hafta sonu ve resmi tatillerde ek mesai farkı uygulandığını da unutmayın.
          </P>

          <H3>Kiralık Vinç Fiyatları Yakıt ve Enerji Maliyetlerinin Payı</H3>
          <P>
            Mobil ve paletli vinçler dizel yakıtla çalışır; büyük tonajlı bir vinç yoğun bir iş gününde ciddi miktarda
            yakıt tüketir. Akaryakıt zamları bu nedenle kiralama tarifelerine doğrudan yansır. Bazı firmalar yakıtı
            fiyata dahil ederken bazıları &quot;yakıt müşteriye ait&quot; modeliyle çalışır — teklifleri karşılaştırırken
            bu ayrımı mutlaka netleştirin. Elektrikli kule vinçlerde şantiye elektrik gideri genellikle kiracıya aittir.
          </P>

          <H3>Kiralık Vinç Fiyatları Firma Tecrübesi ve Marka Etkisi</H3>
          <P>
            Sektörde 20-25 yıllık geçmişe sahip kurumsal firmalar, amatör firmalara göre bir miktar yüksek fiyat
            verebilir; ancak bu fark çoğu zaman kendini fazlasıyla amorti eder. Bakımlı ekipman, deneyimli operatör,
            tam sigorta ve zamanında teslimat; arıza, kaza ve gecikme kaynaklı gizli maliyetleri sıfırlar. Sahada
            arızalanan ucuz bir vinç, size en pahalı vinçten daha fazlaya mal olur — üstelik piyasada yetki belgesiz
            çalışan firma sayısı, yetkilendirilmiş firmalardan fazladır.
          </P>

          <Gorsel
            src="/images/sepetli-vinc-platform-gokyuzu.jpg"
            alt="Gökyüzüne uzanan kiralık sepetli vinç platformu"
            caption="Erişim yüksekliği arttıkça sepetli vinç kiralama bedeli de yükselir."
          />

          {/* H2-3 */}
          <H2>Vinç Tiplerine Göre Kiralık Vinç Fiyatları Tablosu</H2>
          <P>
            Aşağıdaki tablo, 2026 Türkiye ortalamasına göre vinç tiplerinin saatlik ve günlük kiralama fiyat
            aralıklarını göstermektedir. Fiyatlar KDV hariçtir ve lokasyona göre değişebilir:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Vinç Tipi</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Kapasite / Erişim</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Saatlik</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük (2026)</th>
                </tr>
              </thead>
              <tbody>
                {genelFiyatTablosu.map((f, i) => (
                  <tr key={f.tip} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.tip}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.kapasite}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.saatlik}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Mobil Vinç Kiralık Vinç Fiyatları</H3>
          <P>
            Mobil vinçler, kiralık vinç pazarının en büyük segmentidir. Lastik tekerlekli şasileri sayesinde sahaya
            kendi kendine ulaşır, dakikalar içinde kurulur ve iş bitiminde ayrılır. Tonaj bazlı güncel fiyatlar:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Tonaj</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Aylık</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Tipik Kullanım</th>
                </tr>
              </thead>
              <tbody>
                {mobilVincTablosu.map((f, i) => (
                  <tr key={f.kapasite} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.kapasite}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.aylik}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.kullanim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Paletli Vinç Kiralık Vinç Fiyatları</H3>
          <P>
            100 – 500 ton kapasite bandındaki paletli vinçler; enerji santralleri, rafineriler, köprü ve liman
            projeleri gibi ağır sanayi işlerinin ekipmanıdır. Palet sistemi sayesinde yumuşak ve engebeli zeminlerde
            çalışabilirler ancak sahaya özel römorklarla parça parça taşınıp yerinde monte edilirler. Günlük kiralama
            bedeli <strong className="text-gray-900">35.000 TL&apos;den başlar</strong>; nakliye ve montaj ayrıca fiyatlandırılır.
            Doğaları gereği kısa işlerden çok haftalık-aylık projelerde kullanılırlar ve genellikle projeye özel teklif
            verilir.
          </P>

          <H3>Kule Vinç Kiralık Vinç Fiyatları</H3>
          <P>
            Kule vinçlerin günlük bedeli <strong className="text-gray-900">3.000 – 6.000 TL</strong> ile tablodaki en düşük
            rakamdır; ancak temel betonu, montaj ve demontaj için 50.000 TL&apos;yi aşan tek seferlik kurulum maliyeti
            hesaba katılmalıdır. Bu yapı, kule vinci yalnızca aylarca sürecek inşaat projelerinde ekonomik kılar.
            Kısa süreli yüksek erişim ihtiyacında mobil veya sepetli vinç her zaman daha mantıklı tercihtir.
          </P>

          <H3>Örümcek (Mini) Vinç Kiralık Vinç Fiyatları</H3>
          <P>
            Örümcek vinçler; standart kapılardan geçebilen, asansöre sığabilen ve mermer, seramik gibi hassas
            zeminlerde çalışabilen kompakt ekipmanlardır. 3-10 ton kapasiteleriyle cam montajı, AVM içi işler, çatı
            arası taşıma ve iç mekan montajlarının vazgeçilmezidir. Günlük kiralama bedelleri{" "}
            <strong className="text-gray-900">4.000 – 9.000 TL</strong> aralığındadır; kolay nakliyeleri toplam maliyette ek avantaj
            sağlar.
          </P>

          {/* H2-4 */}
          <H2>Şehirlere Göre Kiralık Vinç Fiyatları Karşılaştırması</H2>
          <P>
            Sepetli vinç baz alınarak hazırlanan büyükşehir karşılaştırması aşağıdadır:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Şehir</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Saatlik (Sepetli)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük (Sepetli)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Not</th>
                </tr>
              </thead>
              <tbody>
                {sehirTablosu.map((f, i) => (
                  <tr key={f.sehir} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.sehir}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.saatlik}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.not}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>İstanbul Kiralık Vinç Fiyatları</H3>
          <P>
            Türkiye&apos;nin en büyük vinç pazarı olan İstanbul&apos;da kentsel dönüşüm, gökdelen projeleri ve yoğun
            cephe işleri talebi sürekli canlı tutar. Sepetli vinçte saatlik 1.500 – 2.500 TL, günlük 8.000 – 12.000
            TL; 50 tonluk mobil vinçte günlük 15.000 – 20.000 TL bandı günceldir. Köprü geçiş kısıtlamaları nedeniyle
            vincin hangi yakada konuşlandığı önemlidir; işinize yakın filoya sahip firma seçmek nakliye maliyetini
            düşürür. Vinç Deposu olarak İstanbul&apos;un{" "}
            <Link href="/istanbul-vinc-kiralama" className="text-yellow-600 font-semibold hover:underline">
              39 ilçesinin tamamında
            </Link>{" "}
            aynı gün hizmet veriyoruz.
          </P>

          <H3>Ankara Kiralık Vinç Fiyatları</H3>
          <P>
            Başkentte kamu binaları, toplu konut ve altyapı yatırımları talebi belirler. Fiyatlar İstanbul&apos;a göre
            ortalama %10-15 düşüktür: sepetli vinç günlük 7.000 – 11.000 TL, 50 tonluk mobil vinç 13.000 – 18.000 TL
            civarındadır. Şehrin yayvan yapısı nedeniyle ilçeler arası mesafeler nakliye bedeline yansıyabilir.
          </P>

          <H3>İzmir Kiralık Vinç Fiyatları</H3>
          <P>
            İzmir&apos;de liman operasyonları, sanayi bölgeleri ve turizm yapıları talebin ana kaynağıdır. Sepetli
            vinç günlük 7.000 – 10.000 TL, 50 tonluk mobil vinç 13.000 – 17.000 TL bandındadır. Aliağa ve Kemalpaşa
            sanayi bölgelerindeki yoğunluk, bu bölgelerde dönemsel fiyat artışına yol açabilir.
          </P>

          <H3>Bursa Kiralık Vinç Fiyatları</H3>
          <P>
            Otomotiv ve tekstil sanayisinin merkezi Bursa&apos;da fabrika içi makine montajı ve OSB projeleri öne
            çıkar. Sepetli vinç günlük 6.500 – 9.500 TL, 50 tonluk mobil vinç 12.000 – 16.000 TL aralığındadır.
            İstanbul&apos;a yakınlık sayesinde büyük tonajlı ihtiyaçlarda İstanbul filolarından takviye mümkündür.
          </P>

          <H3>Kocaeli Kiralık Vinç Fiyatları</H3>
          <P>
            Gebze-Dilovası-İzmit hattındaki sanayi tesisleri, rafineriler ve limanlar Kocaeli&apos;yi güçlü bir vinç
            pazarı yapar. Sepetli vinç günlük 6.500 – 10.000 TL, 50 tonluk mobil vinç 12.000 – 17.000 TL
            seviyesindedir. Endüstriyel sahalarda ex-proof gibi özel gereksinimler fiyata ek yansıyabilir.
          </P>

          <H3>Diğer Şehirler Kiralık Vinç Fiyatları</H3>
          <P>
            Anadolu şehirlerinde baz fiyatlar büyükşehirlere göre %20-30 düşük olabilir (sepetli vinç günlük 5.000 –
            9.000 TL). Ancak yerel vinç parkı sınırlıysa ekipman başka şehirden getirilir ve gidiş-dönüş nakliye
            bedeli toplam maliyeti yükseltir. Bu şehirlerde erken rezervasyon hem fiyat hem ekipman garantisi açısından
            kritiktir.
          </P>

          <Gorsel
            src="/images/vinc-minare-restorasyon-istanbul.jpg"
            alt="İstanbul'da cami minaresinde kiralık vinç ile restorasyon"
            caption="Restorasyon gibi özel işler, deneyimli operatör ve doğru ekipman seçimi gerektirir."
          />

          {/* H2-5 */}
          <H2>Sektörlere Göre Kiralık Vinç Fiyatları</H2>
          <P>
            Vincin kullanılacağı sektör; gereken tonajı, çalışma koşullarını ve dolayısıyla fiyatı doğrudan etkiler.
          </P>

          <H3>İnşaat Sektöründe Kiralık Vinç Fiyatları</H3>
          <P>
            İnşaat, kiralık vinç pazarının lokomotifi konumundadır. Kalıp-demir taşıma, prefabrik montaj ve çatı
            işlerinde 25-80 ton bandındaki mobil vinçler kullanılır; günlük bedeller 8.000 – 25.000 TL aralığındadır.
            Cephe ve mantolama işlerinde sepetli vinçler (günlük 6.000 – 12.000 TL) tercih edilir. Şantiyede aylarca
            sürecek dikey taşıma ihtiyacında kule vinç, kısa ve noktasal işlerde mobil vinç ekonomiktir.
          </P>

          <H3>Enerji ve Liman İşlerinde Kiralık Vinç Fiyatları</H3>
          <P>
            Rüzgar türbini montajı, trafo yerleştirme, GES kurulumları ve liman operasyonları yüksek tonajlı ekipman
            gerektirir. Bu segmentte 100-500 ton bandındaki mobil ve paletli vinçler kullanılır; günlük bedeller{" "}
            <strong className="text-gray-900">25.000 TL&apos;den başlayıp 100.000 TL&apos;yi aşabilir</strong>. Enerji
            projelerinde vinç genellikle proje boyunca sahada kaldığından haftalık-aylık anlaşmalar yaygındır; tek
            günlük özel operasyonlar projeye özel fiyatlandırılır.
          </P>

          <H3>Sanayi ve Fabrika İşlerinde Kiralık Vinç Fiyatları</H3>
          <P>
            Pres, enjeksiyon makinesi, jeneratör ve üretim hattı ekipmanlarının yerleştirilmesi tipik fabrika içi vinç
            işleridir. Kapalı alan ve dar geçişler nedeniyle örümcek vinçler (günlük 4.000 – 9.000 TL) ve kompakt
            mobil vinçler öne çıkar. Milimetrik hassasiyet gerektiren makine indirme işlerinde operatör deneyimi
            kritiktir; bu tür işlerde operatör ücreti standart tarifenin üzerinde olabilir.
          </P>

          {/* H2-6 */}
          <H2>Kiralık Vinç Fiyatlarına Eklenen Ekstra Maliyetler</H2>
          <P>
            Teklif karşılaştırırken yalnızca baz fiyata bakmak en sık yapılan hatadır. Toplam maliyeti oluşturan
            kalemler:
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

          <H3>Nakliye ve Kurulum Bedelinin Kiralık Vinç Fiyatları Üzerindeki Etkisi</H3>
          <P>
            Mobil vinçlerde nakliye, ekipmanın kendi tekerlekleri üzerinde sahaya gelmesiyle görece düşük maliyetlidir
            (şehir içi 2.000 – 8.000 TL). Paletli ve kule vinçlerde ise ekipman özel römorklarla taşınır ve sahada
            monte edilir; kısa işlerde bu maliyet baz kiralama bedelini bile aşabilir. Kural basittir:{" "}
            <strong className="text-gray-900">iş ne kadar kısa, kurulum ne kadar karmaşıksa, nakliye-kurulumun toplam maliyetteki
            payı o kadar büyüktür.</strong>
          </P>

          <H3>Sigorta ve Operatör Ücretinin Kiralık Vinç Fiyatları Üzerindeki Etkisi</H3>
          <P>
            Kurumsal firmalarda ekipman ve üçüncü şahıs mali mesuliyet sigortası genellikle fiyata dahildir; ancak
            kaldırılan yükün kendi sigortası (yük all-risk) çoğu zaman ayrı poliçe gerektirir. Değerli makine ve
            ekipman kaldırmalarında bu poliçeyi mutlaka isteyin. Operatör ücreti günlük 500 – 5.000 TL bandındadır;
            gece, hafta sonu ve 8 saati aşan mesailerde ek fark yansıtılır. &quot;Operatör ve sigorta dahil mi?&quot;
            sorusunu yazılı yanıtlatmak, faturada sürprizle karşılaşmanızı önler.
          </P>

          {/* H2-7 */}
          <H2>Kiralık Vinç Fiyatları ile Günlük, Haftalık ve Aylık Kiralama Karşılaştırması</H2>
          <P>
            50 tonluk mobil vinç örneği üzerinden üç kiralama modelinin maliyet farkı şöyledir:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Kiralama Tipi</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Fiyat (50 t Mobil)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük Birim Maliyet</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Avantaj</th>
                </tr>
              </thead>
              <tbody>
                {sureKarsilastirma.map((f, i) => (
                  <tr key={f.sure} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.sure}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.fiyat}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.birim}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.avantaj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            Genel kural: 1-2 günlük işlerde günlük, 3 gün ile 2 hafta arası işlerde haftalık, 2 haftayı aşan işlerde
            aylık kiralama en ekonomik modeldir. Süresi belirsiz işlerde &quot;günlük başla, uzarsa haftalık tarifeye
            geç&quot; şeklinde esnek sözleşme yapan firmaları tercih edin. Günlük kiralamanın tüm detayları için{" "}
            <Link href="/blog/gunluk-vinc-kiralama-fiyatlari" className="text-yellow-600 font-semibold hover:underline">
              Günlük Vinç Kiralama Fiyatları 2026
            </Link>{" "}
            rehberimize göz atabilirsiniz.
          </P>

          {/* H2-8 */}
          <H2>Kiralık Vinç Seçerken Dikkat Edilmesi Gerekenler</H2>
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

          {/* H2-9 */}
          <H2>Kiralık Vinç Fiyatları Sürecinde Sık Yapılan Hatalar</H2>
          <P>Sahada en sık karşılaştığımız ve müşterilere zaman ile para kaybettiren hatalar şunlardır:</P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Hata</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Olası Sonucu</th>
                </tr>
              </thead>
              <tbody>
                {hatalar.map((f, i) => (
                  <tr key={f.hata} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.hata}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.sonuc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* H2-10 */}
          <H2>Uygun Kiralık Vinç Fiyatları İçin İpuçları</H2>
          <P>Kaliteden ödün vermeden toplam maliyeti düşürmenin kanıtlanmış yolları:</P>
          <ul className="space-y-3 mb-6">
            {ipuclari.map((madde) => (
              <li key={madde} className="flex gap-3 items-start bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                <span className="text-gray-700 text-sm leading-relaxed">{madde}</span>
              </li>
            ))}
          </ul>

          <Gorsel
            src="/images/orumcek-platform-spxs32.jpg"
            alt="Dar alanda çalışan kiralık örümcek platform"
            caption="Doğru ekipman seçimi, gereksiz tonaj maliyetinden kurtarır."
          />

          {/* H2-11 */}
          <H2>2026 Yılında Kiralık Vinç Fiyatları Beklenen Trendler</H2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4 space-y-2">
            <li>
              <strong className="text-gray-900">Kentsel dönüşüm talebi:</strong> Deprem güçlendirme ve dönüşüm projeleri,
              özellikle İstanbul ve çevre illerde mobil ve sepetli vinç talebini yüksek tutmaya devam ediyor.
            </li>
            <li>
              <strong className="text-gray-900">Döviz ve yedek parça maliyeti:</strong> Vinçlerin ve parçaların ithal olması
              nedeniyle kur hareketleri tarifelere gecikmeli yansıyor; yıl boyunca kademeli artış bekleniyor.
            </li>
            <li>
              <strong className="text-gray-900">Enerji yatırımları:</strong> Rüzgar ve güneş projeleri, yüksek tonajlı vinç
              segmentinde fiyatları yukarı yönlü baskılıyor.
            </li>
            <li>
              <strong className="text-gray-900">Elektrikli ve hibrit ekipman:</strong> Şehir içi düşük emisyon bölgeleri
              yaygınlaştıkça elektrikli mini vinç ve platformlara talep artıyor; bu segmentte fiyat primi mevcut.
            </li>
            <li>
              <strong className="text-gray-900">Dijital teklif sistemleri:</strong> Online karşılaştırma imkanı fiyat
              şeffaflığını artırıyor, firmalar arası rekabet müşteri lehine işliyor.
            </li>
          </ul>
          <P>
            Genel beklenti; 2026 boyunca kiralık vinç fiyatlarının enflasyon ve yakıt maliyetlerine paralel kademeli
            artış göstermesi yönündedir. Uzun vadeli projelerde fiyatı bugünden sabitleyen sözleşmeler yapmak bu
            nedenle belirgin avantaj sağlar.
          </P>

          {/* H2-12 */}
          <H2>Kiralık Vinç Fiyatları Hakkında Bilmeniz Gerekenler</H2>
          <P>Bu rehberde ele aldığımız tüm başlıkları özetleyecek olursak:</P>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4 space-y-2">
            <li>2026&apos;da kiralık vinç fiyatları saatlik 700 – 3.000 TL, günlük 3.000 – 40.000+ TL, aylık 180.000 – 500.000 TL bandındadır.</li>
            <li>Fiyatın üç ana belirleyicisi: tonaj, lokasyon ve kiralama süresidir.</li>
            <li>Baz fiyata ek olarak nakliye, operatör, sigorta ve olası fazla mesai kalemlerini hesaba katın.</li>
            <li>Süre uzadıkça birim maliyet düşer: haftalıkta %15-20, aylıkta %30-40 tasarruf sağlanır.</li>
            <li>Saatlik işlerde minimum 2-4 saat, günlük işlerde minimum 1 gün ücretlendirme uygulanır.</li>
            <li>Verilen fiyatlar genellikle KDV hariçtir; karşılaştırmayı aynı bazda yapın.</li>
            <li>En düşük fiyat değil; toplam maliyet, yetki belgesi ve firma güvenilirliği esas alınmalıdır.</li>
          </ul>
          <P>
            Vinç Deposu olarak 25 yıllık tecrübemiz, İstanbul&apos;un 39 ilçesini kapsayan filomuz ve sertifikalı
            operatör kadromuzla kiralık vinç ihtiyaçlarınızda yanınızdayız. Güncel fiyat listemiz için{" "}
            <Link href="/kiralik-vinc" className="text-yellow-600 font-semibold hover:underline">
              kiralık vinç sayfamızı
            </Link>{" "}
            inceleyebilir, projenize özel net teklif için bize ulaşabilirsiniz.
          </P>

          {/* H2-13: SSS */}
          <H2>Kiralık Vinç Fiyatları Hakkında Sıkça Sorulan Sorular (SSS)</H2>
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
            {["Kiralık Vinç Fiyatları", "Fiyat Rehberi", "2026", "Mobil Vinç", "Kiralık Vinç"].map((tag) => (
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
              href="/blog/vinc-kiralama-fiyatlari"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-3"></div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                Vinç Kiralama Fiyatları 2026: Saatlik, Günlük ve Aylık Güncel Fiyat Listesi
              </h3>
              <p className="text-gray-500 text-xs">15 dk okuma</p>
            </Link>
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
