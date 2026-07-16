import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Günlük Vinç Kiralama Fiyatları 2026: Detaylı Rehber ve Fiyat Tablosu",
  description:
    "2026 günlük vinç kiralama fiyatları: mobil, paletli, kule ve örümcek vinç güncel fiyat tabloları, şehir karşılaştırmaları, ekstra maliyetler ve tasarruf ipuçları.",
  alternates: {
    canonical: "/blog/gunluk-vinc-kiralama-fiyatlari",
  },
  keywords: [
    "günlük vinç kiralama fiyatları",
    "günlük vinç kiralama",
    "vinç kiralama fiyatları 2026",
    "mobil vinç günlük fiyat",
    "istanbul günlük vinç kiralama",
  ],
  openGraph: {
    type: "article",
    title: "Günlük Vinç Kiralama Fiyatları 2026: Detaylı Rehber ve Fiyat Tablosu",
    description:
      "Vinç tiplerine ve şehirlere göre 2026 güncel günlük vinç kiralama fiyatları, fiyatı etkileyen faktörler ve uygun fiyat için ipuçları.",
  },
};

/* ─── TABLO VERİLERİ ─── */

const genelFiyatTablosu = [
  { tip: "Örümcek (Mini) Vinç", kapasite: "3 – 10 ton", gunluk: "4.000 – 9.000 TL" },
  { tip: "Sepetli Vinç (18 m)", kapasite: "Personel erişimi", gunluk: "6.000 – 8.000 TL" },
  { tip: "Sepetli Vinç (53 m)", kapasite: "Personel erişimi", gunluk: "10.000 – 12.000 TL" },
  { tip: "Mobil Vinç (25 ton)", kapasite: "25 ton", gunluk: "8.000 – 12.000 TL" },
  { tip: "Mobil Vinç (50 ton)", kapasite: "50 ton", gunluk: "15.000 – 20.000 TL" },
  { tip: "Mobil Vinç (100 ton)", kapasite: "100 ton", gunluk: "25.000 – 30.000 TL" },
  { tip: "Mobil Vinç (200+ ton)", kapasite: "200 ton ve üzeri", gunluk: "40.000 TL ve üzeri" },
  { tip: "Paletli Vinç", kapasite: "100 – 500 ton", gunluk: "35.000 TL ve üzeri (teklif)" },
  { tip: "Kule Vinç", kapasite: "6 – 16 ton", gunluk: "3.000 – 6.000 TL" },
];

const mobilVincTablosu = [
  { kapasite: "25 ton", gunluk: "8.000 – 12.000 TL", kullanim: "Klima, jeneratör, küçük prefabrik montajı" },
  { kapasite: "50 ton", gunluk: "15.000 – 20.000 TL", kullanim: "Çelik konstrüksiyon, makine yerleştirme" },
  { kapasite: "80 ton", gunluk: "20.000 – 25.000 TL", kullanim: "Köprü kirişi, ağır makine montajı" },
  { kapasite: "100 ton", gunluk: "25.000 – 30.000 TL", kullanim: "Endüstriyel tesis, trafo montajı" },
  { kapasite: "200 ton ve üzeri", gunluk: "40.000 TL+", kullanim: "Rüzgar türbini, liman ve enerji projeleri" },
];

const sehirTablosu = [
  { sehir: "İstanbul", mobil50: "15.000 – 20.000 TL", sepetli: "8.000 – 12.000 TL", not: "Talep en yüksek, filo en geniş" },
  { sehir: "Ankara", mobil50: "13.000 – 18.000 TL", sepetli: "7.000 – 11.000 TL", not: "Kamu projeleri belirleyici" },
  { sehir: "İzmir", mobil50: "13.000 – 17.000 TL", sepetli: "7.000 – 10.000 TL", not: "Liman işleri fiyatı etkiler" },
  { sehir: "Bursa", mobil50: "12.000 – 16.000 TL", sepetli: "6.500 – 9.500 TL", not: "Sanayi yoğunluğu yüksek" },
  { sehir: "Kocaeli", mobil50: "12.000 – 17.000 TL", sepetli: "6.500 – 10.000 TL", not: "Fabrika ve rafineri talebi" },
  { sehir: "Diğer Şehirler", mobil50: "10.000 – 15.000 TL", sepetli: "5.000 – 9.000 TL", not: "Nakliye bedeli fiyata eklenir" },
];

const sureKarsilastirma = [
  { sure: "Günlük", ornek: "50 ton mobil vinç", fiyat: "15.000 – 20.000 TL / gün", avantaj: "Kısa işler için esneklik" },
  { sure: "Haftalık", ornek: "50 ton mobil vinç", fiyat: "80.000 – 110.000 TL / hafta", avantaj: "Günlüğe göre %15-20 tasarruf" },
  { sure: "Aylık", ornek: "50 ton mobil vinç", fiyat: "250.000 – 350.000 TL / ay", avantaj: "Günlüğe göre %30-40 tasarruf" },
];

const ekstraMaliyetler = [
  { kalem: "Nakliye (şehir içi)", tutar: "2.000 – 8.000 TL", aciklama: "Vincin çalışma sahasına götürülüp getirilmesi" },
  { kalem: "Nakliye (şehirler arası)", tutar: "10.000 TL ve üzeri", aciklama: "Mesafeye ve vinç boyutuna göre değişir" },
  { kalem: "Kurulum / Söküm", tutar: "Kule vinçte 50.000 TL+", aciklama: "Kule ve paletli vinçlerde ayrı kalemdir" },
  { kalem: "Operatör Ücreti", tutar: "500 – 5.000 TL / gün", aciklama: "Vinç tipine ve mesai süresine bağlı" },
  { kalem: "Sigorta", tutar: "Fiyata dahil / poliçeye göre", aciklama: "Tüm risk (all-risk) poliçesi tercih edilmeli" },
  { kalem: "Fazla Mesai", tutar: "Saatlik ücretin %50 fazlası", aciklama: "Günlük 8 saat üzeri çalışmalarda" },
];

const dikkatListesi = [
  "Kiralama süresi ve teslim tarihlerini yazılı olarak netleştirin",
  "Fiyata nelerin dahil olduğunu (operatör, yakıt, nakliye) teklif aşamasında sorun",
  "Vincin periyodik kontrol raporlarının ve sigorta poliçesinin güncel olduğunu doğrulayın",
  "Operatörün MEB onaylı sertifikasını ve deneyim süresini kontrol edin",
  "Çalışma sahasının zemin taşıma kapasitesini önceden değerlendirin",
  "Sözleşmede iptal, gecikme ve hava koşulu maddelerinin bulunduğundan emin olun",
  "Yetki belgesi olan kurumsal firmalarla çalışmayı tercih edin",
];

const hatalar = [
  { hata: "Sadece en düşük fiyata odaklanmak", sonuc: "Bakımsız ekipman, iş kazası riski ve proje gecikmesi" },
  { hata: "Yük ağırlığını yanlış hesaplamak", sonuc: "Yetersiz kapasiteli vinç gelir, iş yarım kalır, ikinci kiralama maliyeti doğar" },
  { hata: "Nakliye ve operatörü fiyata dahil sanmak", sonuc: "Fatura beklenenden %30-50 yüksek gelir" },
  { hata: "Sözleşmesiz, sözlü anlaşma yapmak", sonuc: "Anlaşmazlık durumunda hak kaybı yaşanır" },
  { hata: "Zemin etüdü yapmadan vinç çağırmak", sonuc: "Vinç kurulamaz, günlük kiralama bedeli boşa ödenir" },
  { hata: "Hava durumunu kontrol etmemek", sonuc: "Rüzgarlı günlerde çalışma durur, süre uzar" },
];

const ipuclari = [
  "Birden fazla firmadan yazılı teklif alın ve kalemleri karşılaştırın",
  "İşinizi hafta içi günlere planlayın; hafta sonu ve resmi tatillerde fiyatlar yükselir",
  "Birkaç günlük işlerde haftalık paket fiyat isteyin, birim maliyet düşer",
  "Vinç ihtiyacınızı önceden planlayıp erken rezervasyon yaptırın",
  "Aynı bölgedeki başka işlerinizi birleştirerek tek seferde tamamlayın",
  "Projenize uygun minimum kapasiteyi seçin; gereksiz büyük vinç gereksiz maliyettir",
  "Kış aylarında (Aralık-Şubat) talep düştüğü için pazarlık payı artar",
];

const sss = [
  {
    soru: "2026 yılında günlük vinç kiralama fiyatları ne kadar?",
    cevap:
      "2026 yılında günlük vinç kiralama fiyatları vinç tipine göre 3.000 TL ile 40.000 TL üzeri arasında değişmektedir. Sepetli vinçlerde 6.000-12.000 TL, 50 tonluk mobil vinçlerde 15.000-20.000 TL, kule vinçlerde ise 3.000-6.000 TL aralığı günceldir.",
  },
  {
    soru: "Günlük vinç kiralama fiyatına operatör dahil mi?",
    cevap:
      "Çoğu firmada operatör ücreti ayrı bir kalemdir ve günlük 500 TL ile 5.000 TL arasında değişir. Bazı firmalar operatörlü paket fiyat sunar; teklif alırken mutlaka netleştirilmelidir.",
  },
  {
    soru: "En ucuz günlük vinç kiralama hangi vinç tipinde?",
    cevap:
      "Kule vinç günlük bedeli en düşük olan tiptir (3.000 TL'den başlar) ancak kurulum maliyeti yüksektir. Tek günlük işler için en ekonomik seçenek genellikle küçük tonajlı örümcek vinç veya 18 metrelik sepetli vinçtir.",
  },
  {
    soru: "Günlük kiralamada çalışma süresi kaç saattir?",
    cevap:
      "Sektör standardı günlük 8 saatlik mesaidir. 8 saati aşan çalışmalarda saatlik ücretin yaklaşık %50 fazlası kadar fazla mesai bedeli uygulanır.",
  },
  {
    soru: "Vinç işi yarım gün sürerse tam gün ücreti mi ödenir?",
    cevap:
      "Evet, sektörde yaygın uygulama minimum 1 günlük ücretlendirmedir. Vinç sahaya geldiği anda nakliye ve operatör maliyeti oluştuğu için iş 2 saat sürse bile günlük bedel tahsil edilir.",
  },
  {
    soru: "Şehirler arası vinç kiralamada fiyat nasıl hesaplanır?",
    cevap:
      "Günlük kiralama bedeline ek olarak gidiş-dönüş nakliye ücreti eklenir. Uzun mesafelerde bazı firmalar yol süresini de kiralama gününe dahil eder. Bu nedenle şehir dışı işlerde yerel firmalardan teklif almak çoğu zaman daha ekonomiktir.",
  },
  {
    soru: "Kötü hava nedeniyle çalışılamayan gün için ücret ödenir mi?",
    cevap:
      "Bu tamamen sözleşme şartlarına bağlıdır. Profesyonel firmalar hava koşulu maddesini sözleşmeye ekler; vinç sahada bekliyorsa genellikle indirimli bekleme bedeli uygulanır. Sözleşme öncesi bu maddeyi mutlaka kontrol edin.",
  },
  {
    soru: "Günlük vinç kiralamak için kaç gün önceden rezervasyon gerekir?",
    cevap:
      "Standart tonajlarda 1-3 gün önceden rezervasyon yeterlidir. Yüksek tonajlı (200 ton üzeri) vinçler ve yoğun sezon (ilkbahar-yaz) için 1-2 hafta önceden planlama yapılması önerilir.",
  },
];

/* ─── SCHEMA ─── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Günlük Vinç Kiralama Fiyatları 2026: Detaylı Rehber ve Fiyat Tablosu",
  description:
    "2026 güncel günlük vinç kiralama fiyatları: vinç tiplerine ve şehirlere göre fiyat tabloları, fiyatı etkileyen faktörler, ekstra maliyetler ve tasarruf ipuçları.",
  author: { "@type": "Organization", name: "Vinç Deposu" },
  publisher: { "@type": "Organization", name: "Vinç Deposu" },
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  mainEntityOfPage: "https://vincdeposu.com.tr/blog/gunluk-vinc-kiralama-fiyatlari",
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

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-3xl font-black text-gray-900 mt-14 mb-5 leading-tight">
      {children}
    </h2>
  );
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

export default function GunlukVincKiralamaFiyatlariPage() {
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
            💰 Vinç Kiralama
          </Link>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-5">
            Günlük Vinç Kiralama Fiyatları 2026: Detaylı Rehber ve Fiyat Tablosu
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
            <span>Vinç Deposu Uzman Ekibi</span>
            <span>·</span>
            <span>16 Temmuz 2026</span>
            <span>·</span>
            <span>14 dk okuma</span>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <article className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <P>
            Günlük vinç kiralama, inşaattan sanayiye, cephe işlerinden ağır makine montajına kadar birçok projenin
            olmazsa olmazıdır. Ancak fiyatlar; vinç tipine, tonaja, şehre, sezona ve ek hizmetlere göre ciddi
            farklılıklar gösterir. Bu rehberde 2026 yılına ait <strong className="text-gray-900">günlük vinç kiralama
            fiyatları</strong>nı tüm detaylarıyla, karşılaştırmalı tablolar ve pratik ipuçlarıyla ele alıyoruz.
          </P>
          <P>
            Yazının sonunda sık sorulan soruların yanıtlarını da bulacaksınız. Projenize özel net fiyat için
            7/24 hattımızdan bize ulaşabilirsiniz: <a href="tel:05323039089" className="text-yellow-600 font-bold hover:underline">0532 303 90 89</a>
          </P>

          <Gorsel
            src="/images/express-vinc-kamyon-sahada.jpg"
            alt="Şantiye sahasında günlük kiralık vinç kamyonu"
            caption="Günlük vinç kiralama, kısa süreli projelerde en ekonomik çözümdür."
          />

          {/* H2-1 */}
          <H2>Günlük Vinç Kiralama Fiyatları Nedir, Nasıl Belirlenir?</H2>
          <P>
            Günlük vinç kiralama fiyatı, bir vincin operatörüyle veya operatörsüz olarak <strong className="text-gray-900">standart
            8 saatlik bir mesai günü</strong> boyunca kullanılması karşılığında ödenen bedeldir. Fiyatlandırma; vincin
            satın alma maliyeti, amortismanı, bakım giderleri, sigorta primi, yakıt tüketimi ve operatör maaşı gibi
            kalemlerin günlük bazda hesaplanmasıyla oluşur.
          </P>
          <P>
            2026 yılı itibarıyla Türkiye genelinde günlük vinç kiralama fiyatları <strong className="text-gray-900">3.000 TL ile
            40.000 TL ve üzeri</strong> arasında geniş bir aralıkta seyretmektedir. Küçük tonajlı bir kule vinç günlük
            3.000 TL&apos;den kiralanabilirken, 200 ton üzeri bir mobil vinç için bu rakam 40.000 TL&apos;yi
            aşabilmektedir.
          </P>
          <P>
            Firmalar fiyat belirlerken genellikle şu üç temel soruyu sorar: Ne kaldırılacak (yük ağırlığı), nereye
            kaldırılacak (yükseklik ve mesafe) ve nerede kaldırılacak (lokasyon ve zemin koşulları)? Bu üç sorunun
            yanıtı, size sunulacak günlük fiyatın iskeletini oluşturur.
          </P>

          {/* H2-2 */}
          <H2>Günlük Vinç Kiralama Fiyatları Etkileyen Faktörler</H2>
          <P>
            Aynı vinç, farklı projelerde farklı fiyatlara kiralanabilir. Bunun nedeni fiyatı şekillendiren çok sayıda
            değişkenin bulunmasıdır. En belirleyici faktörler şunlardır:
          </P>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Vincin tonajı ve kaldırma kapasitesi</li>
            <li>Kiralama süresi (günlük, haftalık, aylık)</li>
            <li>Çalışma yapılacak şehir ve bölge</li>
            <li>Operatör hizmetinin dahil olup olmaması</li>
            <li>Sezonsal talep yoğunluğu</li>
            <li>Yakıt ve enerji maliyetleri</li>
            <li>Kiralama firmasının tecrübesi ve kurumsallığı</li>
          </ul>

          <H3>Günlük Vinç Kiralama Fiyatları Tonaj ve Kapasite Etkisi</H3>
          <P>
            Tonaj, fiyatın en belirleyici unsurudur. 25 tonluk bir mobil vinç ile 100 tonluk bir mobil vinç arasında
            günlük bedel açısından 2-3 kata varan fark bulunur. Bunun nedeni yüksek tonajlı vinçlerin hem satın alma
            hem de işletme maliyetlerinin katlanarak artmasıdır. Ayrıca kapasite sadece &quot;kaç ton&quot; sorusuyla
            değil, ton-metre değeriyle ölçülür: bom uzadıkça vincin kaldırabileceği yük azalır, dolayısıyla uzak
            mesafeye ağır yük kaldıracak işler daha büyük ve daha pahalı vinç gerektirir.
          </P>

          <H3>Günlük Vinç Kiralama Fiyatları Kiralama Süresinin Rolü</H3>
          <P>
            Kiralama süresi uzadıkça günlük birim maliyet düşer. Tek günlük işlerde nakliye, kurulum ve operatör
            maliyetleri tek bir güne yansıtıldığı için günlük bedel en yüksek seviyededir. Aynı vinç haftalık
            kiralandığında günlük ortalama maliyet yaklaşık %15-20, aylık kiralandığında ise %30-40 oranında azalır.
            Bu nedenle 3-4 günü aşacağını öngördüğünüz işlerde haftalık paket fiyat istemek her zaman daha avantajlıdır.
          </P>

          <H3>Günlük Vinç Kiralama Fiyatları Bölge ve Şehir Farkları</H3>
          <P>
            Vinç filolarının yoğunlaştığı büyükşehirlerde rekabet fazla olduğu için fiyatlar görece dengelidir; ancak
            talep de yüksek olduğundan yoğun dönemlerde fiyatlar hızla yükselebilir. Vinç parkının az olduğu Anadolu
            şehirlerinde ise günlük bedel düşük görünse de şehirler arası nakliye ücreti toplam maliyeti artırır.
            Şehir içinde bile bölge farkı vardır: merkeze uzak, erişimi zor veya dar sokaklı bölgelerde ek maliyet
            oluşabilir.
          </P>

          <H3>Günlük Vinç Kiralama Fiyatları Operatörlü mü Operatörsüz mü?</H3>
          <P>
            Yasal düzenlemeler gereği vinçler yalnızca sertifikalı operatörler tarafından kullanılabilir. Operatörlü
            kiralamada günlük bedele <strong className="text-gray-900">500 TL ile 5.000 TL</strong> arasında operatör ücreti eklenir.
            Kendi sertifikalı operatörünüz varsa operatörsüz kiralama mümkündür ancak bu durumda hasar sorumluluğu
            sözleşmede net biçimde tanımlanmalıdır. Pratikte işlerin büyük çoğunluğu operatörlü paket olarak kiralanır;
            bu hem güvenlik hem de verimlilik açısından önerilen yöntemdir.
          </P>

          <H3>Günlük Vinç Kiralama Fiyatları Sezonsal Talebin Etkisi</H3>
          <P>
            İnşaat sezonu olan ilkbahar ve yaz aylarında (Nisan-Ekim) vinç talebi zirve yapar ve fiyatlar %10-25
            oranında yükselebilir. Kış aylarında ise talep düştüğü için hem fiyatlar geriler hem de pazarlık payı
            artar. Acil olmayan işlerinizi düşük sezona planlamak, aynı hizmeti belirgin biçimde daha ucuza almanızı
            sağlar. Hafta sonu ve resmi tatil günlerinde de fiyatlara ek mesai farkı yansıtılır.
          </P>

          <H3>Günlük Vinç Kiralama Fiyatları Yakıt ve Enerji Maliyetlerinin Payı</H3>
          <P>
            Mobil ve paletli vinçler dizel yakıtla çalışır ve büyük tonajlı bir vinç günde ciddi miktarda yakıt
            tüketebilir. Akaryakıt fiyatlarındaki artışlar kiralama bedellerine doğrudan yansır. Bazı firmalar yakıtı
            fiyata dahil ederken bazıları &quot;yakıt müşteriye ait&quot; modeliyle çalışır — teklif karşılaştırırken
            bu ayrımı mutlaka netleştirin. Elektrikle çalışan kule vinçlerde ise şantiye elektrik gideri genellikle
            kiracıya aittir.
          </P>

          <H3>Günlük Vinç Kiralama Fiyatları Firma Tecrübesi ve Marka Etkisi</H3>
          <P>
            Sektörde 20-25 yıllık tecrübeye sahip kurumsal firmalar, yeni ve amatör firmalara göre bir miktar daha
            yüksek fiyat verebilir; ancak bu fark çoğu zaman kendini fazlasıyla amorti eder. Bakımlı ekipman, deneyimli
            operatör, tam sigorta ve zamanında teslimat; iş kazası, gecikme ve arıza kaynaklı gizli maliyetleri ortadan
            kaldırır. Unutmayın: sahada arızalanan ucuz bir vinç, size en pahalı vinçten daha fazlaya mal olur.
          </P>

          <Gorsel
            src="/images/mobil-vinc-yuksek-bina-istanbul.jpg"
            alt="İstanbul'da yüksek binada çalışan günlük kiralık mobil vinç"
            caption="Tonaj ve erişim yüksekliği, günlük kiralama bedelini belirleyen iki temel unsurdur."
          />

          {/* H2-3 */}
          <H2>Vinç Tiplerine Göre Günlük Vinç Kiralama Fiyatları Tablosu</H2>
          <P>
            Aşağıdaki tablo, 2026 yılı Türkiye ortalamasına göre vinç tiplerinin günlük kiralama fiyat aralıklarını
            göstermektedir. Fiyatlar KDV hariçtir ve lokasyona göre değişiklik gösterebilir.
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Vinç Tipi</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Kapasite / Erişim</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük Fiyat (2026)</th>
                </tr>
              </thead>
              <tbody>
                {genelFiyatTablosu.map((f, i) => (
                  <tr key={f.tip} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.tip}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.kapasite}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Mobil Vinç Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Mobil vinçler, günlük kiralamada en çok tercih edilen vinç tipidir. Lastik tekerlekli şasileri sayesinde
            sahaya kendi kendine ulaşır, kısa sürede kurulur ve iş bitiminde ayrılır. Bu esneklik onları tek günlük
            işlerin ideal ekipmanı yapar.
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Tonaj</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Günlük Fiyat</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Tipik Kullanım</th>
                </tr>
              </thead>
              <tbody>
                {mobilVincTablosu.map((f, i) => (
                  <tr key={f.kapasite} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.kapasite}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.gunluk}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.kullanim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Paletli Vinç Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Paletli vinçler 100 tondan 500 tona kadar uzanan kapasiteleriyle ağır sanayi, enerji ve altyapı
            projelerinin ekipmanıdır. Palet sistemi sayesinde yumuşak ve engebeli zeminlerde çalışabilirler ancak
            sahaya özel nakliye araçlarıyla parça parça taşınıp yerinde monte edilirler. Bu nedenle günlük kiralama
            bedeli <strong className="text-gray-900">35.000 TL&apos;den başlar</strong> ve nakliye-montaj maliyeti ayrıca
            hesaplanır. Paletli vinçler doğası gereği tek günlük işlerden çok, haftalık ve aylık projelerde tercih
            edilir; kısa işler için genellikle projeye özel teklif alınır.
          </P>

          <H3>Kule Vinç Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Kule vinçlerin günlük bedeli <strong className="text-gray-900">3.000 – 6.000 TL</strong> ile diğer tiplere göre düşük
            görünür; ancak burada kritik nokta kurulum ve söküm maliyetidir. Bir kule vincin temel betonu, montajı ve
            demontajı 50.000 TL&apos;yi aşan tek seferlik maliyet oluşturur. Bu nedenle kule vinç, günlük değil en az
            birkaç aylık inşaat projeleri için mantıklı bir seçimdir. Kısa süreli yüksek erişim ihtiyacında mobil vinç
            her zaman daha ekonomiktir.
          </P>

          <H3>Örümcek (Mini) Vinç Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Örümcek vinçler; dar kapılardan geçebilen, asansöre sığabilen ve hassas zeminlerde (mermer, seramik, tarihi
            yapı) çalışabilen kompakt ekipmanlardır. 3-10 ton arası kapasiteleriyle cam montajı, AVM içi işler, çatı
            arası taşıma ve iç mekan montajlarında rakipsizdirler. Günlük kiralama bedelleri{" "}
            <strong className="text-gray-900">4.000 – 9.000 TL</strong> aralığındadır ve kolay nakliyeleri sayesinde toplam maliyet
            avantajı sağlarlar.
          </P>

          {/* H2-4 */}
          <H2>Şehirlere Göre Günlük Vinç Kiralama Fiyatları Karşılaştırması</H2>
          <P>
            Vinç kiralama fiyatları şehirden şehre belirgin farklılık gösterir. Aşağıdaki tabloda 50 tonluk mobil vinç
            ve sepetli vinç baz alınarak büyükşehir karşılaştırması sunulmuştur:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Şehir</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Mobil Vinç (50 t) / Gün</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Sepetli Vinç / Gün</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Not</th>
                </tr>
              </thead>
              <tbody>
                {sehirTablosu.map((f, i) => (
                  <tr key={f.sehir} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.sehir}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.mobil50}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.sepetli}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.not}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>İstanbul Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            İstanbul, Türkiye&apos;nin en büyük vinç pazarıdır. Kentsel dönüşüm, gökdelen projeleri ve yoğun cephe
            işleri talebi sürekli canlı tutar. Sepetli vinçlerde günlük fiyatlar 8.000 – 12.000 TL, 50 tonluk mobil
            vinçlerde 15.000 – 20.000 TL aralığındadır. Avrupa ve Anadolu yakası arasında köprü geçiş kısıtlamaları
            nedeniyle vinç lokasyonu önem taşır; işinize yakın filoya sahip firmayı seçmek nakliye maliyetini düşürür.
            Vinç Deposu olarak İstanbul&apos;un 39 ilçesinin tamamında aynı gün hizmet veriyoruz.
          </P>

          <H3>Ankara Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Başkentte kamu binaları, toplu konut projeleri ve altyapı yatırımları vinç talebinin ana kaynağıdır.
            Fiyatlar İstanbul&apos;a göre ortalama %10-15 daha düşüktür: 50 tonluk mobil vinç günlük 13.000 – 18.000
            TL, sepetli vinç 7.000 – 11.000 TL civarındadır. Şehrin yayvan yapısı nedeniyle ilçeler arası mesafeler
            nakliye bedeline yansıyabilir.
          </P>

          <H3>İzmir Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            İzmir&apos;de liman operasyonları, sanayi bölgeleri ve turizm yapıları vinç talebini şekillendirir. Günlük
            fiyatlar Ankara ile benzer seviyededir: mobil vinç (50 ton) 13.000 – 17.000 TL, sepetli vinç 7.000 – 10.000
            TL. Aliağa ve Kemalpaşa sanayi bölgelerindeki yoğun talep, bu bölgelerde dönemsel fiyat artışına neden
            olabilir.
          </P>

          <H3>Bursa Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Otomotiv ve tekstil sanayisinin merkezi Bursa&apos;da fabrika içi makine montajı ve OSB projeleri öne
            çıkar. 50 tonluk mobil vinç günlük 12.000 – 16.000 TL, sepetli vinç 6.500 – 9.500 TL aralığında
            kiralanmaktadır. İstanbul&apos;a yakınlığı sayesinde büyük tonajlı vinçler gerektiğinde İstanbul
            filolarından takviye edilebilir.
          </P>

          <H3>Kocaeli Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Gebze-Dilovası-İzmit hattındaki yoğun sanayi tesisleri, rafineriler ve liman yapıları Kocaeli&apos;yi
            önemli bir vinç pazarı yapar. Günlük fiyatlar 50 tonluk mobil vinçte 12.000 – 17.000 TL, sepetli vinçte
            6.500 – 10.000 TL seviyesindedir. Endüstriyel işlerde patlamadan korunma (ex-proof) gibi özel gereksinimler
            fiyata ek yansıyabilir.
          </P>

          <H3>Diğer Şehirler Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Anadolu şehirlerinde baz günlük fiyatlar büyükşehirlere göre %20-30 daha düşük olabilir (50 ton mobil vinç:
            10.000 – 15.000 TL). Ancak yerel vinç parkı sınırlıysa, ekipmanın başka şehirden getirilmesi gerekir ve
            gidiş-dönüş nakliye bedeli toplam maliyeti büyükşehir seviyesinin üzerine çıkarabilir. Bu şehirlerde erken
            rezervasyon, hem uygun fiyat hem de ekipman garantisi açısından kritik önem taşır.
          </P>

          <Gorsel
            src="/images/vinc-kiralama-santiye-calismasi.jpg"
            alt="Şantiyede günlük kiralık vinç ile yük kaldırma çalışması"
            caption="Şehir ve bölge farkı, aynı vinç için %30'a varan fiyat farkı yaratabilir."
          />

          {/* H2-5 */}
          <H2>Sektörlere Göre Günlük Vinç Kiralama Fiyatları</H2>
          <P>
            Vincin kullanılacağı sektör; gereken tonajı, çalışma koşullarını ve dolayısıyla fiyatı doğrudan etkiler.
          </P>

          <H3>İnşaat Sektöründe Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            İnşaat, günlük vinç kiralamanın en büyük müşterisidir. Kalıp ve demir taşıma, prefabrik eleman montajı ve
            çatı işlerinde genellikle 25-80 ton aralığındaki mobil vinçler kullanılır; günlük bedeller 8.000 – 25.000
            TL aralığındadır. Cephe ve mantolama işlerinde ise sepetli vinçler tercih edilir (6.000 – 12.000 TL/gün).
            Şantiye içi sürekli ihtiyaçta kule vinç, kısa süreli işlerde mobil vinç ekonomiktir.
          </P>

          <H3>Enerji ve Liman İşlerinde Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Rüzgar türbini kanat montajı, trafo yerleştirme, GES saha kurulumları ve liman konteyner operasyonları
            yüksek tonajlı ekipman gerektirir. Bu işlerde 100-500 ton aralığındaki mobil ve paletli vinçler kullanılır;
            günlük bedeller <strong className="text-gray-900">25.000 TL&apos;den başlayıp 100.000 TL&apos;yi aşabilir</strong>.
            Enerji projelerinde vinç genellikle proje süresince sahada kaldığı için haftalık/aylık anlaşmalar
            yaygındır; tek günlük operasyonlar (ör. tek türbin kanadı değişimi) projeye özel fiyatlandırılır.
          </P>

          <H3>Sanayi ve Fabrika İşlerinde Günlük Vinç Kiralama Fiyatları</H3>
          <P>
            Fabrikalarda pres, enjeksiyon makinesi, jeneratör ve üretim hattı ekipmanlarının yerleştirilmesi tipik
            günlük vinç işleridir. Kapalı alan ve dar kapı geçişleri nedeniyle örümcek vinçler (4.000 – 9.000 TL/gün)
            ve kompakt mobil vinçler öne çıkar. Hassas makine indirme işlerinde milimetrik operasyon gerektiği için
            deneyimli operatör şarttır; bu tür işlerde operatör ücreti standart tarifenin üzerinde olabilir.
          </P>

          {/* H2-6 */}
          <H2>Günlük Vinç Kiralama Fiyatları Eklenen Ekstra Maliyetler</H2>
          <P>
            Teklif karşılaştırırken en sık yapılan hata, yalnızca günlük baz fiyata bakmaktır. Toplam maliyeti oluşturan
            ekstra kalemler şunlardır:
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

          <H3>Nakliye ve Kurulum Bedelinin Günlük Vinç Kiralama Fiyatları Üzerindeki Etkisi</H3>
          <P>
            Mobil vinçlerde nakliye, vincin kendi tekerlekleri üzerinde sahaya gelmesiyle görece düşük maliyetlidir
            (şehir içi 2.000 – 8.000 TL). Paletli ve kule vinçlerde ise ekipman özel römorklarla parça parça taşınır ve
            sahada monte edilir; bu, tek günlük işlerde toplam maliyetin baz kiralama bedelini bile aşmasına neden
            olabilir. Kural basittir: <strong className="text-gray-900">iş ne kadar kısa, kurulum ne kadar karmaşıksa, nakliye-kurulumun
            toplam maliyetteki payı o kadar büyüktür.</strong>
          </P>

          <H3>Sigorta ve Operatör Ücretinin Günlük Vinç Kiralama Fiyatları Üzerindeki Etkisi</H3>
          <P>
            Kurumsal firmalarda ekipman ve üçüncü şahıs mali mesuliyet sigortası genellikle fiyata dahildir; ancak
            kaldırılan yükün sigortası (yük all-risk) çoğu zaman ayrı bir poliçe gerektirir. Değerli makine ve
            ekipman kaldırmalarında bu poliçeyi mutlaka talep edin. Operatör ücreti ise günlük 500 – 5.000 TL
            aralığında değişir; gece çalışması, hafta sonu ve 8 saati aşan mesailerde bu tutara ek mesai farkı
            yansıtılır. Teklifte &quot;operatör ve sigorta dahil mi?&quot; sorusunu yazılı olarak yanıtlatmak, sonradan
            sürprizle karşılaşmanızı önler.
          </P>

          {/* H2-7 */}
          <H2>Günlük Vinç Kiralama Fiyatları ile Haftalık ve Aylık Kiralama Karşılaştırması</H2>
          <P>
            İşinizin süresi netleşmeden kiralama tipine karar vermeyin. Aşağıdaki karşılaştırma, 50 tonluk mobil vinç
            örneği üzerinden üç kiralama modelinin maliyet farkını göstermektedir:
          </P>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Kiralama Tipi</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Örnek Ekipman</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Fiyat Aralığı</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Avantaj</th>
                </tr>
              </thead>
              <tbody>
                {sureKarsilastirma.map((f, i) => (
                  <tr key={f.sure} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{f.sure}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.ornek}</td>
                    <td className="px-5 py-3.5 text-yellow-700 font-semibold">{f.fiyat}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.avantaj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            Genel kural: iş 1-2 gün sürecekse günlük, 3 gün ile 2 hafta arasındaysa haftalık, 2 haftayı aşacaksa aylık
            kiralama en ekonomik modeldir. Süresi belirsiz işlerde &quot;günlük başla, uzarsa haftalık tarifeye geç&quot;
            şeklinde esnek sözleşme yapan firmaları tercih edin.
          </P>

          {/* H2-8 */}
          <H2>Günlük Vinç Kiralarken Dikkat Edilmesi Gerekenler</H2>
          <P>
            Uygun fiyat kadar güvenli ve sorunsuz bir operasyon da önemlidir. Kiralama öncesi şu kontrol listesini
            uygulayın:
          </P>
          <ul className="space-y-3 mb-6">
            {dikkatListesi.map((madde) => (
              <li key={madde} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm leading-relaxed">{madde}</span>
              </li>
            ))}
          </ul>

          {/* H2-9 */}
          <H2>Günlük Vinç Kiralama Fiyatları Sürecinde Sık Yapılan Hatalar</H2>
          <P>
            Sahada en sık karşılaştığımız ve müşterilere zaman ile para kaybettiren hatalar şunlardır:
          </P>
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
                    <td className="px-5 py-3.5 font-medium text-gray-900">❌ {f.hata}</td>
                    <td className="px-5 py-3.5 text-gray-600">{f.sonuc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* H2-10 */}
          <H2>Uygun Günlük Vinç Kiralama Fiyatları İçin İpuçları</H2>
          <P>
            Kaliteden ödün vermeden maliyeti düşürmenin kanıtlanmış yolları vardır:
          </P>
          <ul className="space-y-3 mb-6">
            {ipuclari.map((madde) => (
              <li key={madde} className="flex gap-3 items-start bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                <span className="text-yellow-600 font-bold shrink-0">💡</span>
                <span className="text-gray-700 text-sm leading-relaxed">{madde}</span>
              </li>
            ))}
          </ul>

          <Gorsel
            src="/images/vinc-kiralama-gece-calismasi.jpg"
            alt="Gece vardiyasında çalışan kiralık vinç"
            caption="Gece ve hafta sonu çalışmalarında fiyatlara ek mesai farkı yansıtılır."
          />

          {/* H2-11 */}
          <H2>2026 Yılında Günlük Vinç Kiralama Fiyatları Beklenen Trendler</H2>
          <P>
            2026 yılında vinç kiralama pazarını şekillendiren başlıca eğilimler şunlardır:
          </P>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4 space-y-2">
            <li>
              <strong className="text-gray-900">Kentsel dönüşüm talebi:</strong> Deprem güçlendirme ve dönüşüm projeleri,
              özellikle İstanbul ve çevresinde mobil vinç talebini yüksek tutmaya devam ediyor.
            </li>
            <li>
              <strong className="text-gray-900">Döviz ve yedek parça maliyeti:</strong> Vinçlerin ve yedek parçaların ithal
              olması nedeniyle kur hareketleri kiralama fiyatlarına gecikmeli olarak yansıyor.
            </li>
            <li>
              <strong className="text-gray-900">Enerji projeleri:</strong> Rüzgar ve güneş yatırımları, yüksek tonajlı vinç
              segmentinde fiyatları yukarı yönlü baskılıyor.
            </li>
            <li>
              <strong className="text-gray-900">Elektrikli ve hibrit vinçler:</strong> Şehir içi düşük emisyon bölgeleri
              yaygınlaştıkça elektrikli mini vinçlere talep artıyor; bu segmentte fiyat primi mevcut.
            </li>
            <li>
              <strong className="text-gray-900">Dijitalleşme:</strong> Online teklif ve rezervasyon sistemleri fiyat
              şeffaflığını artırıyor, firmalar arası rekabet müşteri lehine işliyor.
            </li>
          </ul>
          <P>
            Genel beklenti; 2026 boyunca günlük vinç kiralama fiyatlarının enflasyon ve yakıt maliyetlerine paralel
            biçimde kademeli artış göstermesi yönündedir. Bu nedenle uzun vadeli projelerde fiyatı bugünden
            sabitleyen sözleşmeler yapmak avantaj sağlar.
          </P>

          {/* H2-12 */}
          <H2>Günlük Vinç Kiralama Fiyatları Hakkında Bilmeniz Gerekenler</H2>
          <P>
            Bu rehberde ele aldığımız tüm başlıkları özetleyecek olursak:
          </P>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4 space-y-2">
            <li>2026&apos;da günlük vinç kiralama fiyatları 3.000 TL ile 40.000 TL+ arasında değişmektedir.</li>
            <li>Fiyatı belirleyen en önemli üç faktör: tonaj, lokasyon ve kiralama süresidir.</li>
            <li>Baz fiyata ek olarak nakliye, operatör, sigorta ve olası fazla mesai kalemlerini hesaba katın.</li>
            <li>3 günü aşan işlerde haftalık, 2 haftayı aşan işlerde aylık kiralama daha ekonomiktir.</li>
            <li>Sektör standardı günlük 8 saat mesaidir; minimum ücretlendirme 1 tam gündür.</li>
            <li>En düşük fiyat değil, toplam maliyet ve firma güvenilirliği esas alınmalıdır.</li>
            <li>Yetki belgeli, sigortalı ve tecrübeli firmalarla çalışmak gizli maliyetleri ortadan kaldırır.</li>
          </ul>
          <P>
            Vinç Deposu olarak 25 yıllık tecrübemiz, İstanbul&apos;un 39 ilçesini kapsayan filomuz ve sertifikalı
            operatör kadromuzla günlük vinç kiralama ihtiyaçlarınızda yanınızdayız. Projenize özel net fiyat teklifi
            için bize ulaşın.
          </P>

          {/* H2-13: SSS */}
          <H2>Günlük Vinç Kiralama Fiyatları Hakkında Sıkça Sorulan Sorular (SSS)</H2>
          <div className="space-y-4 mb-10">
            {sss.map((s) => (
              <div key={s.soru} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">❓ {s.soru}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.cevap}</p>
              </div>
            ))}
          </div>

          {/* Etiketler */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Günlük Vinç Kiralama", "Fiyat Rehberi", "2026", "Mobil Vinç", "Vinç Fiyatları"].map((tag) => (
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
                📞 0532 303 90 89
              </a>
              <Link
                href="/kiralik-vinc"
                className="border border-gray-600 hover:border-white text-white font-bold px-6 py-3 rounded-xl transition"
              >
                Kiralık Vinç Sayfası →
              </Link>
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
              href="/blog/vinc-kiralama-fiyatlarini-etkileyen-faktorler"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                Vinç Kiralama Fiyatlarını Etkileyen 7 Faktör
              </h3>
              <p className="text-gray-500 text-xs">5 dk okuma</p>
            </Link>
            <Link
              href="/blog/mobil-vinc-nasil-kiralanir"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-3">🚛</div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                Mobil Vinç Kiralarken Sormanız Gereken 8 Kritik Soru
              </h3>
              <p className="text-gray-500 text-xs">5 dk okuma</p>
            </Link>
            <Link
              href="/blog/istanbul-vinc-kiralama-rehberi-2024"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-3">🏗️</div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                İstanbul&apos;da Vinç Kiralama: Fiyatlar, Türler ve Seçim Kriterleri
              </h3>
              <p className="text-gray-500 text-xs">9 dk okuma</p>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="text-yellow-600 font-semibold hover:underline">
              ← Tüm yazılara dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
