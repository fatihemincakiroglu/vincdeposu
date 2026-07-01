import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/kiralik-vinc",
  },
  title: { absolute: "Kiralık Vinç Fiyatları 2025 | Günlük ve Aylık Vinç Kiralama" },
  description:
    "İstanbul'un 39 ilçesinde kiralık vinç hizmeti: mobil vinç, sepetli vinç, kule vinç ve paletli vinç. Sertifikalı operatör, 7/24 destek. Hemen arayın: 0532 303 90 89",
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
            <h2 className="text-4xl font-black mb-4">Kiralık Vinç Fiyatları 2025</h2>
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
