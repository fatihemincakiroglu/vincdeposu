import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/kiralik-vinc",
  },
  title: { absolute: "Kiralık Vinç Fiyatları ve Günlük Kiralık Vinç" },
  description:
    "Kiralık vinç fiyatları ve günlük kiralık vinç seçenekleri için en uygun çözümleri sunuyoruz. İhtiyacınıza uygun vinç kiralama hizmetleri için iletişime geçin!",
  keywords: ["kiralık vinç", "vinç kiralama", "kiralık vinç fiyatları", "günlük vinç kiralama", "istanbul kiralık vinç"],
};

const vincTurleri = [
  {
    icon: "🚛",
    title: "Mobil Vinç",
    desc: "Tekerlekli şasi üzerinde hareket edebilen, şehir içi projelerde esneklik sağlayan vinç türü.",
    fiyat: "15.000 – 30.000 TL / gün",
    href: "/mobil-vinc",
    ozellikler: ["Hızlı kurulum", "Şehir içi uygun", "Farklı kapasiteler"],
  },
  {
    icon: "🏗️",
    title: "Sepetli Vinç",
    desc: "Yüksek noktalara personel erişimi sağlayan, cephe ve bakım işlerinde tercih edilen vinç.",
    fiyat: "5.000 – 50.000 TL / gün",
    href: "/sepetli-vinc",
    ozellikler: ["Personel taşıma", "Cephe çalışması", "Yüksek erişim"],
  },
  {
    icon: "⛏️",
    title: "Paletli Vinç",
    desc: "Zorlu arazi koşullarında çalışabilen, büyük kapasiteli ağır sanayi vinci.",
    fiyat: "Teklif alınız",
    href: "/paletli-vinc",
    ozellikler: ["Zorlu arazi", "Büyük kapasite", "Stabil yapı"],
  },
  {
    icon: "🏢",
    title: "Kule Vinç",
    desc: "Uzun süreli inşaat projelerinde kullanılan, yüksek kaldırma kapasiteli sabit vinç.",
    fiyat: "3.000 TL / gün'den",
    href: "/kule-vinc",
    ozellikler: ["Uzun vadeli", "Yüksek kapasite", "İnşaat projeleri"],
  },
  {
    icon: "🐙",
    title: "Ahtapot Vinç",
    desc: "Dar alanlarda çalışabilen, çok yönlü hareket kabiliyetine sahip kompakt vinç.",
    fiyat: "Teklif alınız",
    href: "/ahtapot-vinc",
    ozellikler: ["Dar alan", "Kompakt yapı", "Çok yönlü"],
  },
  {
    icon: "🚁",
    title: "Helikopter Vinç",
    desc: "Erişilmesi güç noktalara yük taşıma ve montaj işlemleri için özel hava vinci.",
    fiyat: "Teklif alınız",
    href: "/helikopter-vinc",
    ozellikler: ["Erişilmez alanlar", "Özel operasyonlar", "Hava taşıma"],
  },
];

const fiyatTablosu = [
  { tur: "18m Sepetli Vinç", saatlik: "1.500 TL", gunluk: "8.000 TL", aylik: "Teklif" },
  { tur: "53m Sepetli Vinç", saatlik: "3.000 TL", gunluk: "12.000 TL", aylik: "Teklif" },
  { tur: "Mobil Vinç (50 ton)", saatlik: "1.500 TL", gunluk: "15.000 TL", aylik: "250.000 TL" },
  { tur: "Mobil Vinç (100 ton)", saatlik: "2.000 TL", gunluk: "30.000 TL", aylik: "500.000 TL" },
  { tur: "Kule Vinç", saatlik: "—", gunluk: "3.000 TL", aylik: "Teklif" },
  { tur: "Operatör Hizmeti", saatlik: "500 TL", gunluk: "2.000 TL", aylik: "Teklif" },
];

const mobilVincFiyatlari = [
  { sinif: "25 – 40 Ton", bom: "25 – 35 m", saatlik: "1.200 – 2.000 TL", gunluk: "10.000 – 15.000 TL", haftalik: "55.000 – 80.000 TL", aylik: "200.000 – 280.000 TL" },
  { sinif: "50 – 60 Ton", bom: "35 – 45 m", saatlik: "1.500 – 2.500 TL", gunluk: "15.000 – 20.000 TL", haftalik: "80.000 – 110.000 TL", aylik: "250.000 – 350.000 TL" },
  { sinif: "70 – 90 Ton", bom: "40 – 50 m", saatlik: "2.000 – 3.500 TL", gunluk: "20.000 – 30.000 TL", haftalik: "110.000 – 160.000 TL", aylik: "350.000 – 500.000 TL" },
  { sinif: "100 – 150 Ton", bom: "45 – 65 m", saatlik: "2.500 – 5.000 TL", gunluk: "30.000 – 50.000 TL", haftalik: "160.000 – 260.000 TL", aylik: "500.000 – 850.000 TL" },
  { sinif: "150 Ton Üzeri", bom: "60 m+", saatlik: "Özel teklif", gunluk: "Özel teklif", haftalik: "Proje bazlı", aylik: "Proje bazlı" },
];

const sepetliVincFiyatlari = [
  { yukseklik: "16 – 22 Metre", kullanim: "Tabela, alçak katlı bakım", saatlik: "1.200 – 1.800 TL", gunluk: "7.000 – 9.000 TL", haftalik: "38.000 – 48.000 TL", aylik: "130.000 – 170.000 TL" },
  { yukseklik: "24 – 32 Metre", kullanim: "Dış cephe, orta kat erişimi", saatlik: "1.500 – 2.200 TL", gunluk: "8.500 – 11.000 TL", haftalik: "45.000 – 60.000 TL", aylik: "150.000 – 200.000 TL" },
  { yukseklik: "36 – 45 Metre", kullanim: "AVM, plaza, reklam montajı", saatlik: "2.000 – 2.800 TL", gunluk: "10.000 – 13.000 TL", haftalik: "55.000 – 70.000 TL", aylik: "180.000 – 240.000 TL" },
  { yukseklik: "48 – 60 Metre", kullanim: "Yüksek yapı, endüstriyel bakım", saatlik: "2.500 – 3.500 TL", gunluk: "12.000 – 16.000 TL", haftalik: "65.000 – 90.000 TL", aylik: "220.000 – 300.000 TL" },
  { yukseklik: "60 Metre Üzeri", kullanim: "Özel projeler", saatlik: "Özel teklif", gunluk: "Özel teklif", haftalik: "Proje bazlı", aylik: "Proje bazlı" },
];

const hiyapFiyatlari = [
  { sinif: "10 – 25 Ton/Metre", bom: "12 – 20 m", saatlik: "1.200 – 2.000 TL", gunluk: "7.000 – 10.000 TL", aylik: "130.000 – 190.000 TL" },
  { sinif: "25 – 40 Ton/Metre", bom: "15 – 25 m", saatlik: "2.000 – 3.200 TL", gunluk: "10.000 – 15.000 TL", aylik: "190.000 – 280.000 TL" },
  { sinif: "40 Ton/Metre Üzeri", bom: "20 m+", saatlik: "Özel teklif", gunluk: "Özel teklif", aylik: "Proje bazlı" },
];

const fiyatFaktorleri = [
  { icon: "🏗️", label: "Vinç tipi ve kapasitesi" },
  { icon: "📏", label: "Bom uzunluğu ve çalışma yüksekliği" },
  { icon: "↔️", label: "Yatay erişim mesafesi" },
  { icon: "🚧", label: "Saha ve zemin koşulları" },
  { icon: "🅿️", label: "Araç konumlandırma alanı" },
  { icon: "👷", label: "Operatör dahil olup olmaması" },
  { icon: "🚛", label: "Nakliye ve sevkiyat mesafesi" },
  { icon: "📅", label: "Kiralama süresi" },
  { icon: "🌙", label: "Gece veya hafta sonu çalışması" },
  { icon: "⏳", label: "Bekleme süresi" },
  { icon: "🧰", label: "Sapan, sepet ve ek ekipman ihtiyacı" },
  { icon: "🦺", label: "İş güvenliği ve yönlendirme personeli" },
];

const surelendirme = [
  {
    icon: "⏱️",
    title: "Saatlik Kiralama",
    desc: "Tek noktada yapılacak kısa süreli kaldırma işleri için uygundur. Çoğu çalışmada minimum süre uygulaması bulunur; bir saatlik iş için dahi belirli bir alt süre üzerinden ücretlendirme yapılabilir.",
  },
  {
    icon: "📆",
    title: "Günlük Kiralama",
    desc: "Gün içinde birden fazla kaldırma, uzun süren montaj veya farklı noktalarda çalışma gerekiyorsa günlük plan daha ekonomiktir. Günlük mesai süresi teklif aşamasında netleştirilir.",
  },
  {
    icon: "🗓️",
    title: "Haftalık Kiralama",
    desc: "Devam eden şantiye, montaj veya bakım süreçlerinde haftalık kullanım, günlük kiralamaya göre birim maliyeti düşürür ve ekipmanın sahada hazır kalmasını sağlar.",
  },
  {
    icon: "📋",
    title: "Aylık Kiralama",
    desc: "Şantiye, fabrika ve sürekli yük kaldırma ihtiyacı olan tesislerde aylık anlaşma en planlı bütçeyi sunar. Uzun vadede birim maliyet belirgin şekilde azalır.",
  },
];

const teklifBilgileri = [
  "İşin yapılacağı açık adres",
  "Yükün yaklaşık ağırlığı, ölçüsü ve niteliği",
  "Kaldırma yüksekliği ve yatay erişim mesafesi",
  "Çalışma alanının fotoğrafı veya videosu",
  "Tercih edilen vinç tipi (varsa)",
  "Kiralama süresi, tarih ve saat",
  "Operatör veya ek personel ihtiyacı",
  "Saha girişi, zemin durumu ve manevra alanı",
  "Çevrede elektrik hattı, ağaç veya trafik engeli olup olmadığı",
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "İnşaat", desc: "Yüksek katlı yapı inşaatında kolon, kalıp ve prefabrik eleman montajı; temel kazısı sırasında malzeme taşıma işleri." },
  { icon: "🏭", title: "Sanayi", desc: "Fabrika içi ağır makine montajı, üretim hattı kurulumu ve büyük ekipmanların güvenli şekilde yerleştirilmesi." },
  { icon: "⚓", title: "Liman", desc: "Konteyner indirme-bindirme, gemi bakım operasyonları ve liman sahasındaki yük taşıma işlemleri." },
  { icon: "💨", title: "Enerji", desc: "Rüzgar türbini kanat ve göbek montajı, trafo merkezi kurulumu ve solar panel sahası çalışmaları." },
  { icon: "🛣️", title: "Altyapı", desc: "Köprü ayağı montajı, menfez ve tünel çalışmaları ile karayolu üst yapı projelerindeki ağır eleman taşımaları." },
  { icon: "🏠", title: "Cephe", desc: "Bina dış cephe boya, mantolama, cam değişimi ve cephe aydınlatma sistemlerinin kurulum-bakım işleri." },
];

const vincSecimRehberi = [
  { baslik: "Yük Ağırlığını Belirleyin", aciklama: "Taşınacak veya kaldırılacak malzemenin tam ağırlığını net olarak hesaplayın. Vinç kapasitesi her zaman güvenlik payıyla birlikte değerlendirilir; yükün maksimum kapasitenin üzerine çıkması kesinlikle önerilmez." },
  { baslik: "Çalışma Yüksekliğini Ölçün", aciklama: "Sepetli vinç ve mobil vinçlerde erişilmesi gereken maksimum yükseklik, bom uzunluğu hesabının temelidir. Bina yüksekliği, çekme mesafesi ve önündeki engeller birlikte değerlendirilmelidir." },
  { baslik: "Çalışma Alanını Kontrol Edin", aciklama: "Dar sokak veya kısıtlı şantiye alanında ahtapot vinç ya da kompakt sepetli vinç modelleri daha uygundur. Açık ve geniş alanlarda mobil veya paletli vinç tercih edilebilir." },
  { baslik: "Zemin Taşıma Kapasitesini Değerlendirin", aciklama: "Vinç ve yükün toplam ağırlığını taşıyacak zemin sağlam olmalıdır. Yumuşak zeminlerde paletli vinç ya da ek plaka/takoz desteği gerekebilir." },
  { baslik: "Kiralama Süresini Planlayın", aciklama: "Tek seferlik kısa işler için günlük kiralama, uzun süreli şantiye projeleri için aylık kiralama daha ekonomiktir. Süre uzadıkça birim fiyat genellikle düşer." },
  { baslik: "Operatör İhtiyacını Netleştirin", aciklama: "Yasal düzenlemeler gereği vinç kullanımı sertifikalı operatör gerektirir. Kiralama bedeline operatör dahil olup olmadığını teklif aşamasında kontrol edin." },
];

const galeri = [
  { src: "/images/mobil-vinc-yuksek-bina-istanbul.jpg", alt: "İstanbul'da yüksek katlı bina cephesinde çalışan mobil vinç" },
  { src: "/images/sepetli-vinc-cephe-calismasi.jpg", alt: "Sepetli vinç ile yüksek bina cephe çalışması" },
  { src: "/images/vinc-minare-restorasyon-istanbul.jpg", alt: "Cami minaresinde vinç ile restorasyon çalışması" },
  { src: "/images/express-vinc-kamyon-sahada.jpg", alt: "Kiralık vinç kamyonu şantiye sahasında" },
  { src: "/images/sepetli-vinc-sepet-detay.jpg", alt: "Sepetli vinç personel sepeti detay görünümü" },
  { src: "/images/vinc-kiralama-santiye-calismasi.jpg", alt: "İstanbul'da şantiyede vinç kiralama çalışması" },
  { src: "/images/vinc-cephe-montaj-calismasi.jpg", alt: "Bina cephesinde vinç ile montaj çalışması" },
  { src: "/images/vinc-cami-ic-mekan-calismasi.jpg", alt: "Cami iç mekanında kiralık vinç ile yapılan çalışma" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Belirleme", desc: "Yükün ağırlığı, çalışma alanı ve süreyi belirleyin." },
  { no: "02", title: "Teklif Alın", desc: "Bizi arayın, projenize özel fiyat teklifi alın." },
  { no: "03", title: "Sözleşme", desc: "Güvenli kiralama sözleşmesi imzalayın." },
  { no: "04", title: "Teslimat", desc: "Vinç çalışma alanınıza teslim edilir, kurulur." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı operatörümüz güvenli şekilde çalışır." },
  { no: "06", title: "Tamamlama", desc: "İş bitiminde vinç teslim alınır, alan temizlenir." },
];

const guvenlikkurallari = [
  "Operatörlerin vinç kullanma ehliyeti ve sertifikaları mevcut",
  "Düzenli bakım ve kontroller zamanında yapılmaktadır",
  "Hava koşulları sürekli takip edilmekte, kötü havada çalışma durdurulmaktadır",
  "Yük kapasitesi hiçbir şekilde aşılmamaktadır",
  "Çalışma alanında gerekli uyarı işaretleri bulundurulmaktadır",
  "Tüm ekipmanlar sigortalı ve sertifikalıdır",
];

const sss = [
  {
    soru: "Kiralık vinç nedir?",
    cevap: "Kiralık vinç, belirli bir süre için kiralanabilen, ağır yükleri kaldırma ve taşıma işlemlerinde kullanılan profesyonel ekipmanlardır.",
  },
  {
    soru: "Kiralık vinç fiyatları nelere bağlıdır?",
    cevap: "Vinç tipi ve kapasitesi, kiralama süresi, çalışma lokasyonu, operatör hizmeti gerekliliği ve nakliye maliyetleri fiyatı belirler.",
  },
  {
    soru: "Operatörlü kiralama ne anlama gelir?",
    cevap: "Sertifikalı ve deneyimli bir vinç operatörünün vinci sizin için kullandığı hizmettir. Hem güvenli hem de verimli çalışma sağlar.",
  },
  {
    soru: "Uzun vadeli kiralama ekonomik midir?",
    cevap: "Evet. Aylık kiralama seçenekleri günlük kiralamalara kıyasla önemli maliyet avantajı sağlar. Uzun projeler için önerilir.",
  },
  {
    soru: "Vinç kiralama hizmeti nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz.",
  },
  {
    soru: "Vinç kapasitesi nasıl hesaplanır?",
    cevap: "Vinç kapasitesi, kaldırılacak yükün ağırlığı ile bumun erişeceği mesafenin çarpımına göre ton-metre olarak hesaplanır. Bum uzadıkça vincin taşıyabileceği yük miktarı azalır.",
  },
  {
    soru: "Dar sokaklarda hangi vinç türü kullanılır?",
    cevap: "Dar sokak ve kısıtlı alanlarda ahtapot vinç veya kompakt sepetli vinç modelleri, manevra kabiliyeti sayesinde en uygun çözümü sunar.",
  },
  {
    soru: "Vinç kiralamada minimum çalışma süresi var mı?",
    cevap: "Evet, çoğu saatlik çalışmada minimum süre uygulaması bulunur. Kısa bir iş için dahi vincin sevkiyatı ve kurulumu gerektiğinden, belirli bir alt süre üzerinden ücretlendirme yapılabilir. Bu detay teklif aşamasında netleştirilir.",
  },
  {
    soru: "Nakliye ve sevkiyat ücreti fiyata dahil mi?",
    cevap: "Sevkiyat maliyeti; işin yapılacağı konuma, araç tipine ve mesafeye göre değişir. Bazı çalışmalarda fiyata dahil edilirken bazılarında ayrıca hesaplanır. Teklif alırken nakliye, kurulum ve bekleme süresinin kapsamını mutlaka sorun.",
  },
  {
    soru: "Gece veya hafta sonu çalışması fiyatı etkiler mi?",
    cevap: "Etkileyebilir. Gece mesaisi, resmi tatil ve hafta sonu çalışmalarında ek personel planlaması gerektiğinden fiyatlandırma standart mesaiye göre farklılık gösterebilir.",
  },
  {
    soru: "Ağır tonaj ve teleskopik vinçlerde neden proje bazlı teklif verilir?",
    cevap: "Bu sınıf vinçlerde maliyeti yükün ağırlığı kadar çalışma açısı, bom mesafesi, zemin taşıma kapasitesi ve çevredeki engeller belirler. Bu değişkenler netleşmeden standart bir fiyat vermek yanıltıcı olacağından keşif sonrası proje bazlı teklif hazırlanır.",
  },
  {
    soru: "Fiyat teklifi için hangi bilgileri paylaşmalıyım?",
    cevap: "Açık adres, yükün yaklaşık ağırlığı ve ölçüsü, kaldırma yüksekliği, yatay erişim mesafesi, kiralama süresi ve mümkünse çalışma alanının fotoğrafı en doğru teklifi almanızı sağlar. Eksik bilgiyle alınan teklif, saha keşfinde değişebilir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sss.map((s) => ({
    "@type": "Question",
    name: s.soru,
    acceptedAnswer: { "@type": "Answer", text: s.cevap },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Kiralık Vinç Hizmeti",
  provider: { "@type": "LocalBusiness", name: "Vinç Deposu", telephone: "+905323039089" },
  areaServed: { "@type": "City", name: "İstanbul" },
  description:
    "Mobil vinç, sepetli vinç, kule vinç, paletli vinç ve daha fazlası için günlük ve aylık kiralık vinç hizmeti.",
};

export default function KiralikVincPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏗️ Vinç Kiralama Rehberi 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Kiralık Vinç<br />{" "}
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde profesyonel kiralık vinç hizmeti. Sertifikalı operatörler,
              modern ekipmanlar ve 7/24 teknik destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#vinc-turleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Vinç Türlerini İncele ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { deger: "25+", label: "Yıllık Deneyim" },
              { deger: "7/24", label: "Kesintisiz Hizmet" },
              { deger: "39", label: "İlçede Hizmet" },
              { deger: "1000+", label: "Tamamlanan Proje" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-yellow-400">{s.deger}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giriş Metni */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed space-y-4">
          <p>
            <strong className="text-gray-900">Kiralık vinç</strong> arayışınızda doğru adrestesiniz. Vinç Deposu olarak
            İstanbul&apos;un 39 ilçesinde mobil vinç, sepetli vinç, kule vinç, paletli vinç ve ahtapot vinç
            kiralama hizmeti sunuyoruz. İnşaat, sanayi, cephe bakımı ve cami/minare restorasyonu gibi
            farklı sektörlerden binlerce projede, sertifikalı operatörlerimiz ve tam sigortalı ekipmanlarımızla
            yer aldık.
          </p>
          <p>
            Kiralık vinç fiyatları; vinç tipi, kapasite, kiralama süresi ve çalışma lokasyonuna göre değişir.
            Aşağıda vinç türlerini, güncel fiyat aralıklarını, doğru vinç seçimi için pratik bir rehberi ve
            sahadan gerçek çalışma görsellerini bulabilirsiniz.
          </p>
        </div>
      </section>

      {/* Vinç Türleri */}
      <section id="vinc-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kiralık Vinç Türleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her projeye uygun vinç seçeneği. İhtiyacınıza göre doğru vinci belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vincTurleri.map((v) => (
              <div
                key={v.href}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center">
                  <div className="text-6xl mb-3">{v.icon}</div>
                  <h3 className="text-white text-xl font-bold">{v.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{v.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.ozellikler.map((o) => (
                      <span key={o} className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full border border-yellow-200">
                        ✓ {o}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Fiyat</div>
                      <div className="text-gray-800 font-bold text-sm">{v.fiyat}</div>
                    </div>
                    <Link
                      href={v.href}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg text-sm transition"
                    >
                      İncele →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vinç Seçim Rehberi */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Pratik Rehber</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Doğru Vinç Nasıl Seçilir?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kiralık vinç seçerken dikkat etmeniz gereken 6 temel kriter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vincSecimRehberi.map((v, i) => (
              <div key={v.baslik} className="flex gap-4 bg-white p-6 rounded-2xl border border-gray-100">
                <div className="text-2xl font-black text-yellow-400 shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{v.baslik}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.aciklama}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xl font-black text-gray-900 mb-3">Vinç Kapasitesi ve Bom Uzunluğu Nasıl Hesaplanır?</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Vinç kapasitesi, kaldırma anındaki yük ağırlığı ile bumun (bom) ulaştığı mesafenin çarpımına göre
              değişen ton-metre değeriyle ifade edilir. Örneğin 50 tonluk bir mobil vinç, bumu kısa tutulduğunda
              tam kapasiteyle çalışabilirken, bum uzadıkça kaldırabileceği yük miktarı azalır. Bu nedenle sadece
              &quot;kaç ton&quot; sorusu yeterli değildir; çalışma mesafesi ve yüksekliği de kapasite hesabına dahil edilmelidir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sepetli vinçlerde belirleyici unsur ise metre cinsinden erişim yüksekliğidir. 18 metrelik bir sepetli
              vinç düşük katlı cephe işleri için yeterliyken, 53 metreye kadar çıkan modeller yüksek gökdelen
              projelerinde tercih edilir. Vinç Deposu uzmanları, projenizin teknik bilgilerini değerlendirerek
              size en uygun kapasite ve bom uzunluğuna sahip vinci ücretsiz olarak önerir.
            </p>
          </div>
        </div>
      </section>

      {/* Sahadan Kareler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Referanslarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sahadan Kareler</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              İstanbul&apos;da gerçekleştirdiğimiz kiralık vinç projelerinden kareler.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galeri.map((g) => (
              <div key={g.src} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gray-100">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Kiralık vinçler hangi projelerde kullanılır?</p>
          </div>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4 mb-12">
            <p>
              Kiralık vinçler özellikle inşaat sektöründe yaygın olarak kullanılmakla birlikte, farklı alanlarda da
              tercih edilmektedir. Bununla birlikte, endüstriyel tesislerde makine montajı ve taşınması işlemlerinde
              sıklıkla kullanılır. Ayrıca, liman operasyonları, rüzgar türbini kurulumları ve altyapı projelerinde de
              kiralık vinçlerden yararlanılır.
            </p>
            <p>
              Sepetli vinç kiralama hizmetleri, özellikle bina dış cephe çalışmaları ve yüksek noktalarda bakım-onarım
              işlemleri için tercih edilir. Bunun yanı sıra, mobil vinç kiralama seçeneği, şehir içi projelerde
              esneklik sağlar ve kısa süreli işler için ideal bir çözüm sunar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {kullanımAlanlari.map((k) => (
              <div key={k.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition group">
                <div className="text-4xl shrink-0">{k.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-700">{k.title}</h3>
                  <p className="text-gray-500 text-sm">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Kiralık Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar vinç türü ve projeye göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Vinç Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Saatlik</th>
                  <th className="text-center px-6 py-4 font-semibold">Günlük</th>
                  <th className="text-center px-6 py-4 font-semibold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr
                    key={f.tur}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}
                  >
                    <td className="px-6 py-4 font-medium text-white">{f.tur}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.saatlik}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.gunluk}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar KDV hariç olup lokasyon ve proje detaylarına göre değişebilir.
          </p>

          {/* Tonaja göre mobil vinç */}
          <div className="mt-14">
            <h3 className="text-2xl font-black mb-3">Tonaja Göre Mobil Vinç Kiralama Fiyatları</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Mobil vinç fiyatları öncelikle tonaj kapasitesi ve bom uzunluğuyla ilişkilidir; ancak tonaj tek başına
              yeterli bir ölçüt değildir. Yükün kaldırılacağı mesafe, çalışma açısı, zemin uygunluğu ve sahadaki
              manevra imkânı da toplam maliyeti etkiler. Ekipman detayları için{" "}
              <Link href="/mobil-vinc" className="text-yellow-400 hover:underline">mobil vinç</Link> sayfamızı
              inceleyebilirsiniz.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800 text-gray-300">
                    <th className="text-left px-4 py-3 font-semibold">Sınıf</th>
                    <th className="text-center px-4 py-3 font-semibold">Bom</th>
                    <th className="text-center px-4 py-3 font-semibold">Saatlik</th>
                    <th className="text-center px-4 py-3 font-semibold">Günlük</th>
                    <th className="text-center px-4 py-3 font-semibold">Haftalık</th>
                    <th className="text-center px-4 py-3 font-semibold">Aylık</th>
                  </tr>
                </thead>
                <tbody>
                  {mobilVincFiyatlari.map((f) => (
                    <tr key={f.sinif} className="border-t border-gray-700 hover:bg-gray-800 transition">
                      <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{f.sinif}</td>
                      <td className="px-4 py-3 text-center text-gray-300 whitespace-nowrap">{f.bom}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.saatlik}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.gunluk}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.haftalik}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.aylik}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              Gereğinden düşük kapasite güvenlik riski oluşturur, gereğinden yüksek tonaj ise maliyeti artırır. Yük
              ağırlığını ve kaldırma mesafesini doğru paylaşmak en uygun sınıfın seçilmesini sağlar.
            </p>
          </div>

          {/* Yüksekliğe göre sepetli vinç */}
          <div className="mt-14">
            <h3 className="text-2xl font-black mb-3">Yüksekliğe Göre Sepetli Vinç Kiralama Fiyatları</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sepetli vinçte fiyat; çalışma yüksekliği, yatay erişim, sepet kapasitesi ve işin yapılacağı alana göre
              belirlenir. Metre arttıkça yalnızca yükseklik değil, güvenli konumlandırma ihtiyacı da önem kazanır.
              Detaylar için <Link href="/sepetli-vinc" className="text-yellow-400 hover:underline">sepetli vinç</Link>{" "}
              sayfamıza göz atabilirsiniz.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800 text-gray-300">
                    <th className="text-left px-4 py-3 font-semibold">Yükseklik</th>
                    <th className="text-left px-4 py-3 font-semibold">Tipik Kullanım</th>
                    <th className="text-center px-4 py-3 font-semibold">Saatlik</th>
                    <th className="text-center px-4 py-3 font-semibold">Günlük</th>
                    <th className="text-center px-4 py-3 font-semibold">Haftalık</th>
                    <th className="text-center px-4 py-3 font-semibold">Aylık</th>
                  </tr>
                </thead>
                <tbody>
                  {sepetliVincFiyatlari.map((f) => (
                    <tr key={f.yukseklik} className="border-t border-gray-700 hover:bg-gray-800 transition">
                      <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{f.yukseklik}</td>
                      <td className="px-4 py-3 text-gray-300">{f.kullanim}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.saatlik}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.gunluk}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.haftalik}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.aylik}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Kamyon üstü / hiyap */}
          <div className="mt-14">
            <h3 className="text-2xl font-black mb-3">Kamyon Üstü (Hiyap) Vinç Fiyatları</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Taşıma ve kaldırmanın aynı araçla yapılabildiği{" "}
              <Link href="/kamyon-ustu-vinc" className="text-yellow-400 hover:underline">kamyon üstü vinçler</Link>,
              şehir içi makine taşıma, konteyner yerleştirme ve kısa süreli yükleme-boşaltma işlerinde pratik bir
              çözümdür.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800 text-gray-300">
                    <th className="text-left px-4 py-3 font-semibold">Sınıf</th>
                    <th className="text-center px-4 py-3 font-semibold">Bom</th>
                    <th className="text-center px-4 py-3 font-semibold">Saatlik</th>
                    <th className="text-center px-4 py-3 font-semibold">Günlük</th>
                    <th className="text-center px-4 py-3 font-semibold">Aylık</th>
                  </tr>
                </thead>
                <tbody>
                  {hiyapFiyatlari.map((f) => (
                    <tr key={f.sinif} className="border-t border-gray-700 hover:bg-gray-800 transition">
                      <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{f.sinif}</td>
                      <td className="px-4 py-3 text-center text-gray-300 whitespace-nowrap">{f.bom}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.saatlik}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.gunluk}</td>
                      <td className="px-4 py-3 text-center text-yellow-400 whitespace-nowrap">{f.aylik}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              Ağır tonaj, uzun bom, dar saha, özel kurulum, gece çalışması ve uzun bekleme gerektiren işlerde
              fiyatlandırma proje bazlı yapılır.
            </p>
          </div>

          <div className="mt-10 text-gray-300 leading-relaxed space-y-4">
            <p>
              2026 yılında vinç kiralama fiyatları, hizmet süresi ve vinç türüne göre önemli farklılıklar
              göstermektedir. Saatlik vinç kiralama ücretleri 700 TL ile 2000 TL arasında değişmektedir. Fiyatları
              etkileyen temel faktörler arasında vinç tipi, hizmet süresi ve ekstra hizmetler bulunmaktadır.
            </p>
            <p>
              Günlük vinç kiralama fiyatları, vinç türüne ve kapasitesine bağlı olarak geniş bir aralıkta seyreder.
              Sepetli vinçler için günlük fiyatlar 5.000 TL ile 50.000 TL arasında değişmektedir. Bununla birlikte,
              mobil vinçlerin günlük kiralama bedelleri 15.000 TL ile 30.000 TL arasındadır. Ayrıca, operatör hizmeti
              için ek olarak 500 TL ile 5.000 TL arasında bir ücret talep edilmektedir.
            </p>
            <p>
              Uzun vadeli projelerde aylık kiralama seçeneği daha ekonomik bir çözüm sunmaktadır. Mobil vinçler için
              aylık kiralama bedelleri 250.000 TL ile 500.000 TL arasında değişmektedir. Özellikle sepetli vinçlerde
              aylık kiralama, günlük kiralamalara kıyasla önemli maliyet avantajları sağlar.
            </p>
            <p>
              Bölgesel olarak İstanbul&apos;da sepetli vinç kiralaması için saatlik ücretler 1.500 TL ile 2.500 TL
              arasında değişirken, günlük fiyatlar 8.000 TL ile 12.000 TL aralığındadır. Örneğin Halkalı, Kayaşehir ve
              İkitelli bölgelerinde 35 tonluk çift kırma vinç için günlük 750 TL, 80 tonluk çift kırma vinç için 1200
              TL ücret alınmaktadır. Diğer yandan Esenyurt, Avcılar ve Beylikdüzü bölgelerinde mobil vinç kiralama
              bedeli günlük 2500 TL civarındadır. Buna ek olarak şehir merkezine yakın ve erişimi kolay çalışma
              alanlarında fiyatlar daha uygun olabilmektedir.
            </p>
            <p>
              Vinç kiralama sürecinde fiyat odaklı olmak yerine, firmanın kurumsallığı ve hizmet kalitesi öncelikli
              olarak değerlendirilmelidir. Bununla birlikte teknik destek, bakım hizmetleri ve müşteri desteği gibi
              faktörler de göz önünde bulundurulmalıdır. Özellikle uzun süreli projelerde, kiralama süresinin uzaması
              birim maliyeti düşürmektedir.
            </p>
          </div>
          <div className="text-center mt-8">
            <a
              href="tel:05323039089"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 Özel Fiyat Teklifi Alın
            </a>
          </div>
        </div>
      </section>

      {/* Fiyat Neye Göre Belirlenir */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma Mantığı</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kiralık Vinç Fiyatları Neye Göre Belirlenir?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Vinç ücretleri hesaplanırken yalnızca kaldırılacak yükün ağırlığına bakılmaz. Aynı tonaj sınıfındaki
              iki vinç, farklı sahalarda farklı maliyetler oluşturabilir: dar bir sokakta kısa süreli bir kaldırma
              işiyle geniş bir şantiyede gün boyu sürecek çalışma aynı fiyatlandırma mantığına sahip değildir.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fiyatFaktorleri.map((f) => (
              <div key={f.label} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:border-yellow-300 transition">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-gray-700 text-sm font-medium leading-snug">{f.label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8 leading-relaxed max-w-3xl mx-auto text-center">
            Bu nedenle teklif alırken yalnızca &quot;kaç ton vinç gerekir?&quot; sorusuna cevap vermek yeterli olmaz.
            Yükün nereden alınıp nereye bırakılacağı, vincin sahaya nasıl gireceği ve çalışmanın ne kadar süreceği de
            fiyatı doğrudan etkiler. Düşük görünen bir teklif, işe uygun olmayan ekipman seçimi nedeniyle zaman
            kaybına, ek maliyete veya güvenlik riskine dönüşebilir.
          </p>
        </div>
      </section>

      {/* Süre Bazlı Ücretlendirme */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kullanım Süresi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Saatlik, Günlük, Haftalık ve Aylık Vinç Ücretleri</h2>
            <p className="text-gray-600 text-lg">
              Vinç ücretleri yalnızca aracın tipine değil, kullanım süresine göre de değişir.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {surelendirme.map((s) => (
              <div key={s.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-yellow-300 transition">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teklif İçin Gerekli Bilgiler */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Doğru Teklif</p>
            <h2 className="text-4xl font-black mb-4">Fiyat Teklifi İçin Gerekli Bilgiler</h2>
            <p className="text-gray-400 text-lg">
              Eksik bilgiyle alınan teklif, saha keşfi veya çalışma günü geldiğinde değişebilir. Aşağıdaki bilgileri
              paylaşmanız hem doğru ekipman seçimini hem de gerçekçi bir fiyat almanızı sağlar.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
            {teklifBilgileri.map((b) => (
              <li key={b} className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-0.5">✓</span>
                <span className="text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <a
              href="https://wa.me/905323039089"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition mr-3"
            >
              💬 WhatsApp&apos;tan Bilgi Gönderin
            </a>
            <a
              href="tel:05323039089"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 0532 303 90 89
            </a>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kiralama Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel vinç kiralama</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adimlar.map((a) => (
              <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group">
                <div className="text-5xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition mb-4 leading-none">
                  {a.no}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4">
            <p>
              Profesyonel bir vinç kiralama sürecini başarıyla yönetmek için sistematik bir yaklaşım gerekir.
              Öncelikle taşınacak yükün ağırlığı ve şekli net olarak belirlenmelidir. Bunun yanında çalışma alanının
              genişliği ve erişim noktaları dikkatle değerlendirilmelidir.
            </p>
            <p>
              Vinç kiralamadan önce, çevre güvenlik tedbirlerinin ve emniyet sahalarının oluşturulması önemlidir.
              Ayrıca kiralama sözleşmesinde sigorta kapsamı, güvenlik standartları ve teslimat şartları gibi kritik
              noktaların açıkça belirtilmesi gerekir.
            </p>
            <p>
              Kiralama sürecinde sözleşme şartları dikkatle incelenmelidir. Sözleşmede kiralanan vincin özellikleri,
              bakım periyotları, kiralama süresi ve ödeme koşulları açıkça belirtilmelidir. Profesyonel firmalar,
              müşterilerine detaylı sözleşme sunarak hem kendilerini hem de müşterilerini güvence altına alır.
            </p>
          </div>
        </div>
      </section>

      {/* Güvenlik */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">İş Güvenliği</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Vinç operasyonlarında güvenlik her şeyin önünde gelir.
                Tüm ekipmanlarımız düzenli bakımdan geçmekte, operatörlerimiz
                güncel sertifikalara sahiptir.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikkurallari.map((kural) => (
                <div key={kural} className="flex gap-3 items-start bg-white/60 rounded-xl p-4">
                  <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                  <p className="text-gray-800 text-sm">{kural}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-gray-800 leading-relaxed space-y-4">
            <p>
              Vinç operatörünün tecrübesi, hem iş güvenliği hem de verimlilik açısından büyük önem taşır. Bununla
              birlikte operatörler, vinç kullanımı öncesinde tüm güvenlik ekipmanlarını kontrol etmeli ve çalışma
              süresince iş güvenliği protokollerine sıkı bir şekilde uymalıdır.
            </p>
            <p>
              Kiralama sürecinde yetki belgesi olan firmalar tercih edilmelidir çünkü kaçak ve amatör çalışan
              firmaların sayısı, yetkilendirilmiş firmaların sayısından fazladır. Sonuç olarak doğru firma seçimi ve
              güvenlik önlemlerine uyum, projenin başarısı için temel faktörlerdir.
            </p>
          </div>
        </div>
      </section>

      {/* Vinç Kiralamanın Avantajları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Neden Kiralama?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Kiralamanın Avantajları</h2>
          </div>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Sektörde 25 yıllık deneyime sahip firmalar, vinç kiralama hizmetlerinde önemli avantajlar sunmaktadır.
              Maliyet tasarrufu, vinç kiralamanın en önemli faydalarından biridir çünkü satın alma, bakım ve sigorta
              gibi ek masraflardan kurtulmanızı sağlar.
            </p>
            <p>
              Vinç kiralama hizmetleri, projelere özel çözümler sunar. Özellikle eğitimli ve sertifikalı operatörler,
              ekipmanların güvenli kullanımını sağlar. Bununla birlikte kiralama firmaları, en son teknolojiye sahip
              vinçlerle donatılmıştır ve bu da projelerde üst düzey performans elde etmenizi sağlar.
            </p>
            <p>
              Ayrıca vinç kiralama, yükleme ve boşaltma işlemlerinin hızlı bir şekilde tamamlanmasını sağlar. Kaliteli
              hizmet sunan firmalar, vinçlerin düzenli bakımını yapar ve güvenlik sertifikalarının güncel olmasını
              sağlar.
            </p>
            <p>
              Vinç kiralama hizmetleri, inşaat sektöründen endüstriyel tesislere kadar geniş bir yelpazede
              kullanılmaktadır. Bunun yanı sıra enerji, madencilik ve lojistik sektörlerinde de tercih edilmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* Günlük Vinç Kiralama */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kısa Süreli Çözüm</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Günlük Vinç Kiralama</h2>
          </div>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Kısa süreli projeler için günlük vinç kiralama hizmeti, işletmelere esneklik ve maliyet avantajı sağlar.
              Özellikle şehir içi projelerde, yük kaldırma ve taşıma işlemlerinde tercih edilen bu hizmet, operatör
              desteğiyle birlikte sunulmaktadır.
            </p>
            <p>
              Günlük vinç kiralama hizmetinde, vinç türüne göre fiyatlandırma yapılır. Örneğin, 18 metrelik sepetli
              vinç için günlük çalışma ücreti 1.750 TL iken, 53 metrelik sepetli vinç için bu ücret 12.000 TL&apos;ye
              kadar çıkabilmektedir. Buna ek olarak vinç operatörü ücreti, yakıt maliyeti ve bakım masrafları gibi
              ekstra ücretler de sözleşmede belirtilmelidir.
            </p>
            <p>
              Ayrıca günlük vinç kiralama, işletmeleri yüksek maliyetli ekipman satın alma zorunluluğundan kurtarır.
              Bunun yanı sıra kiralama firmaları, ekipmanların düzenli bakımını ve onarımını üstlenir, bu da kiralayan
              firmanın ek masraflardan tasarruf etmesini sağlar.
            </p>
            <p>
              Günlük vinç kiralama fiyatları, projenin karmaşıklığı, yükün ağırlığı ve taşınacak mesafe gibi
              faktörlere bağlı olarak değişiklik gösterir. Dahası projenin yapılacağı konum da fiyatları etkileyen
              önemli bir unsurdur.
            </p>
            <p>
              Kiralama süreci genellikle hızlı ve pratiktir, bu da projelerin zamanında başlamasına ve tamamlanmasına
              yardımcı olur. Üstelik kiralık vinçler modern ve bakımlı olduğundan, işlerin daha güvenli ve verimli
              yapılmasını sağlar.
            </p>
            <p>
              Sonuç olarak günlük vinç kiralama, inşaat ve lojistik sektöründe maliyetleri düşürmek, verimliliği
              artırmak ve güvenliği sağlamak için ideal bir çözümdür. Doğru vinç kiralama firması seçimi ve sürecin
              iyi yönetilmesi, projelerin başarılı bir şekilde tamamlanmasını sağlar.
            </p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {sss.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 transition">
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

      {/* İlçe Linkleri */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">İstanbul&apos;un Tüm İlçelerinde Vinç Kiralama</h2>
            <p className="text-gray-500">Size en yakın bölgeden hizmet alın</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { label: "Adalar", href: "/adalar-vinc-kiralama" },
              { label: "Arnavutköy", href: "/arnavutkoy-vinc-kiralama" },
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
              { label: "Şile", href: "/sile-vinc-kiralama" },
              { label: "Şişli", href: "/sisli-vinc-kiralama" },
              { label: "Sultanbeyli", href: "/sultanbeyli-vinc-kiralama" },
              { label: "Sultangazi", href: "/sultangazi-vinc-kiralama" },
              { label: "Tuzla", href: "/tuzla-vinc-kiralama" },
              { label: "Ümraniye", href: "/umraniye-vinc-kiralama" },
              { label: "Üsküdar", href: "/uskudar-vinc-kiralama" },
              { label: "Zeytinburnu", href: "/zeytinburnu-vinc-kiralama" },
            ].map((ilce) => (
              <Link
                key={ilce.href}
                href={ilce.href}
                className="text-center text-sm text-gray-600 hover:text-yellow-600 hover:underline py-2 px-3 rounded-lg hover:bg-yellow-50 transition"
              >
                {ilce.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Projeniz İçin Teklif Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun vinci belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 0532 303 90 89
            </a>
            <Link
              href="/iletisim"
              className="border-2 border-gray-600 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              Mesaj Gönder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
