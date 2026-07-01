import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/kule-vinc",
  },
  title: "Kule Vinç Kiralama | Kiralık Kule Vinç Hizmetleri",
  description:
    "Türkiye genelinde profesyonel kule vinç kiralama hizmetleri. Sabit, tırmanıcı ve yürüyen kule vinç seçenekleri. Operatörlü kiralama, montaj-demontaj dahil. 7/24 hizmet: 0532 303 90 89",
};

const kuleVincCesitleri = [
  {
    icon: "🏗️",
    title: "Sabit Kule Vinç",
    desc: "Sabit bir temel üzerine monte edilen, inşaat alanında belirlenen noktadan hareket etmeyen kule vinç tipidir. Konut ve ticari yapı projelerinde en yaygın kullanılan modeldir.",
    kapasite: "4–16 ton",
    sure: "Aylık / Proje Bazlı",
    href: "#sabit",
    ozellikler: ["Yüksek stabilite", "Geniş çalışma yarıçapı", "Uzun vadeli kullanım", "Düşük işletme maliyeti"],
    renk: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: "🏢",
    title: "Tırmanıcı Kule Vinç",
    desc: "Bina yükseldikçe kendi içinde yukarı tırmanan, yüksek katlı yapılarda alan kısıtlaması olmadan çalışmaya imkân veren kule vinç tipidir. Gökdelen ve yüksek konut projeleri için idealdir.",
    kapasite: "6–20 ton",
    sure: "Aylık / Proje Bazlı",
    href: "#tirmanici",
    ozellikler: ["Bina içinden tırmanma", "Sınırsız kat yüksekliği", "Dar alan avantajı", "Yüksek yapı uyumu"],
    renk: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    icon: "🚂",
    title: "Yürüyen (Raylı) Kule Vinç",
    desc: "Ray sistemi üzerinde hareket edebilen, geniş alanlı şantiyelerde tek vinçle birden fazla noktaya hizmet verebilen esnek kule vinç çözümüdür.",
    kapasite: "4–12 ton",
    sure: "Aylık / Proje Bazlı",
    href: "#yuruyen",
    ozellikler: ["Ray üzerinde hareket", "Geniş alan kapsama", "Tek vinçle çoklu nokta", "Esnek konumlandırma"],
    renk: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
];

const fiyatTablosu = [
  { tur: "Sabit Kule Vinç (4 ton, 40m kol)", aylik: "85.000 TL", montaj: "Teklif", yillik: "Teklif" },
  { tur: "Sabit Kule Vinç (8 ton, 50m kol)", aylik: "120.000 TL", montaj: "Teklif", yillik: "Teklif" },
  { tur: "Sabit Kule Vinç (16 ton, 60m kol)", aylik: "175.000 TL", montaj: "Teklif", yillik: "Teklif" },
  { tur: "Tırmanıcı Kule Vinç (8 ton)", aylik: "150.000 TL", montaj: "Teklif", yillik: "Teklif" },
  { tur: "Tırmanıcı Kule Vinç (12 ton)", aylik: "195.000 TL", montaj: "Teklif", yillik: "Teklif" },
  { tur: "Yürüyen Kule Vinç (6 ton, raylı)", aylik: "135.000 TL", montaj: "Teklif", yillik: "Teklif" },
  { tur: "Operatörlü Kule Vinç (+)", aylik: "+45.000 TL", montaj: "Dahil", yillik: "Teklif" },
  { tur: "İkinci El Kule Vinç Kiralama", aylik: "65.000 TL", montaj: "Teklif", yillik: "Teklif" },
];

const fiyatEtkenleri = [
  { icon: "📏", title: "Kol (Bom) Uzunluğu", desc: "Kol uzunluğu arttıkça kapsanan alan ve kiralama bedeli yükselir. 30 metreden 70 metreye kadar farklı seçenekler sunuyoruz." },
  { icon: "🏋️", title: "Kaldırma Kapasitesi", desc: "Vinç kapasitesi ton bazında değişir. 4 tondan 20 tona kadar farklı kapasitelerde model seçeneği mevcuttur." },
  { icon: "🏢", title: "Bina Yüksekliği", desc: "Yapının kat sayısı ve hedef yükseklik, vinç tipi seçimini ve montaj maliyetini doğrudan etkiler." },
  { icon: "🔧", title: "Montaj & Demontaj", desc: "Kurulum ve söküm işlemleri saha koşullarına göre değişen ekipman ve işçilik gerektirir, fiyata dahil edilir." },
  { icon: "👷", title: "Operatör Dahil Mi?", desc: "Operatörsüz veya sertifikalı operatörümüzle birlikte kiralama seçenekleri ayrı fiyatlandırılır." },
  { icon: "📍", title: "Şantiye Konumu", desc: "Vincin nakliyesi, kurulumu ve saha erişimi konuma göre ek maliyet oluşturabilir." },
];

const avantajlar = [
  {
    icon: "💰",
    title: "Yüksek Yatırım Maliyetinden Kurtulun",
    desc: "Milyonlarca TL'lik kule vinç yatırımı yapmak yerine bütçenizi projeye ayırın. Nakit akışınızı koruyun.",
  },
  {
    icon: "🔄",
    title: "Güncel ve Bakımlı Ekipman",
    desc: "Her zaman periyodik bakımdan geçmiş, modern kule vinçlerle çalışın. Teknik arıza riskini en aza indirin.",
  },
  {
    icon: "📊",
    title: "Projeye Özel Planlama",
    desc: "Proje süresine göre vinç tipini ve kiralama süresini esnek şekilde belirleyin. İhtiyacınıza göre planlama yapın.",
  },
  {
    icon: "🛠️",
    title: "Montaj-Demontaj Dahil",
    desc: "Kurulum, söküm ve periyodik bakım masrafları bizim sorumluluğumuzda. Saha ekibinizin işini kolaylaştırın.",
  },
  {
    icon: "📋",
    title: "Mevzuata Uygunluk",
    desc: "Tüm kule vinçlerimiz iş güvenliği mevzuatına uygun, periyodik kontrolleri eksiksiz belgelendirilmiştir.",
  },
  {
    icon: "⚡",
    title: "Hızlı Kurulum Süreci",
    desc: "Talepleriniz proje takviminize uygun şekilde planlanır. Saha hazırlığına göre hızlı montaj sağlıyoruz.",
  },
];

const kullanimAlanlariInsaat = [
  { sector: "🏘️ Konut Projeleri", durum: "Çok katlı site ve apartman inşaatları" },
  { sector: "🏬 Ticari Yapılar", durum: "AVM, ofis ve plaza inşaat süreçleri" },
  { sector: "🏭 Endüstriyel Tesisler", durum: "Fabrika ve depo yapım projeleri" },
  { sector: "🏨 Otel & Turizm Yapıları", durum: "Büyük ölçekli konaklama tesisleri" },
  { sector: "🏛️ Kamu Yapıları", durum: "Hastane, okul ve resmi bina inşaatları" },
  { sector: "🏗️ Gökdelen Projeleri", durum: "Yüksek katlı yapı inşaat süreçleri" },
];

const kullanimAlanlariAltyapi = [
  { sector: "🌉 Köprü İnşaatları", durum: "Ayak ve gövde montaj operasyonları" },
  { sector: "🛤️ Demiryolu Projeleri", durum: "Viyadük ve istasyon yapım süreçleri" },
  { sector: "⚡ Enerji Tesisleri", durum: "Santral ve trafo merkezi kurulumları" },
  { sector: "🌊 Liman & Baraj Projeleri", durum: "Ağır yapı elemanı montajı" },
  { sector: "🛣️ Otoyol & Viyadük", durum: "Prefabrik eleman taşıma ve montaj" },
  { sector: "🏗️ Toplu Konut Altyapısı", durum: "Geniş alanlı yapı grubu projeleri" },
];

const dogruKuleVinc = [
  {
    soru: "Yapının kat yüksekliği nedir?",
    tavsiye: "10 kata kadar projelerde sabit kule vinç, daha yüksek yapılarda tırmanıcı kule vinç tercih edilir.",
    icon: "📏",
  },
  {
    soru: "Şantiye alanı ne kadar geniş?",
    tavsiye: "Dar şantiyelerde tırmanıcı model, geniş ve çok bloklu sahalarda yürüyen (raylı) kule vinç daha uygundur.",
    icon: "📐",
  },
  {
    soru: "Kaldırılacak yük ne kadar ağır?",
    tavsiye: "4–8 ton arası hafif-orta yükler için standart modeller, 10+ ton ağır prefabrik elemanlar için yüksek kapasiteli vinçler önerilir.",
    icon: "⚖️",
  },
  {
    soru: "Kol (bom) uzunluğu yeterli mi?",
    tavsiye: "Şantiye sınırları ve bina genişliğine göre 30–70 metre arası kol uzunluğu seçenekleri arasından doğru ölçü belirlenir.",
    icon: "📡",
  },
];

const surecAdimlar = [
  { no: "01", title: "Saha Analizi", desc: "Bina yüksekliği, şantiye alanı ve yük kapasitesi bilgilerini paylaşın." },
  { no: "02", title: "Model & Kapasite Seçimi", desc: "Mühendis ekibimiz projenize uygun kule vinç tipini belirler." },
  { no: "03", title: "Teklif ve Sözleşme", desc: "Şeffaf fiyatlandırmayla kiralama ve montaj sözleşmesi imzalanır." },
  { no: "04", title: "Montaj", desc: "Kule vinç sahaya nakledilir, sertifikalı ekibimizce monte edilir." },
  { no: "05", title: "Operasyon", desc: "Operatörümüz veya yetkili personelinizle güvenli kullanım başlar." },
  { no: "06", title: "Demontaj", desc: "Proje sonunda vinç sökülür, saha teslim tutanağı düzenlenir." },
];

const guvenlikKurallari = [
  "Tüm kule vinçler periyodik bakım ve teknik kontrolden geçmektedir",
  "Operatörlerimiz vinç operatörlüğü sertifikası ve SRC belgesine sahiptir",
  "Montaj ve demontaj işlemleri uzman teknik ekip tarafından yapılır",
  "Ekipmanlar güncel iş güvenliği ve yapı denetim mevzuatına uygundur",
  "Her kule vinç kiralamada sigorta kapsamı sağlanmaktadır",
  "Acil arıza durumunda hızlı teknik destek ve müdahale garantisi",
];

const sss = [
  {
    soru: "Kule vinç kiralamak için ne gereklidir?",
    cevap: "Kule vinç kiralamak için şirket vergi levhası, imza sirküleri, proje bilgileri ve şantiye saha planı gereklidir. Montaj öncesi zemin etüdü ve bina projesi de talep edilebilir.",
  },
  {
    soru: "Minimum kiralama süresi ne kadar?",
    cevap: "Kule vinç kiralamaları genellikle proje bazlı ve aylık olarak yapılır. Minimum kiralama süremiz 1 aydır. Uzun dönem projelerde özel indirimler uygulanmaktadır.",
  },
  {
    soru: "Montaj ve demontaj kim tarafından yapılır?",
    cevap: "Montaj ve demontaj işlemleri sertifikalı teknik ekibimiz tarafından gerçekleştirilir. Mobil vinç desteğiyle kurulum ve söküm güvenli şekilde tamamlanır, ek ücrete tabidir.",
  },
  {
    soru: "Kiralama süreci içinde arıza olursa ne olur?",
    cevap: "Arıza durumunda teknik destek ekibimiz en kısa sürede sahaya intikal eder. Gerekli görülmesi hâlinde parça değişimi veya eşdeğer ekipmanla değişim yapılır.",
  },
  {
    soru: "Tırmanıcı kule vinç nasıl çalışır?",
    cevap: "Tırmanıcı kule vinç, bina çekirdeğine veya asansör boşluğuna monte edilir ve yapı yükseldikçe hidrolik sistemle kendi içinde yukarı tırmanır. Bu sayede şantiye alanında yer kaplamaz.",
  },
  {
    soru: "Kule vinç operatörü zorunlu mu?",
    cevap: "Kule vinç kullanımı için sertifikalı operatör zorunludur. Kendi operatörünüz mevcutsa operatörsüz kiralama, değilse bizim sertifikalı operatörümüzle birlikte kiralama yapılabilir.",
  },
  {
    soru: "Kule vinç hangi hava koşullarında çalışamaz?",
    cevap: "Genellikle 60-72 km/saat üzerindeki rüzgâr hızlarında kule vinç operasyonları güvenlik amacıyla durdurulur. Tam sınır, vinç modeline ve üretici talimatlarına göre değişir.",
  },
  {
    soru: "İkinci el kule vinç kiralamak güvenli mi?",
    cevap: "Tüm ikinci el kule vinçlerimiz kiralama öncesi detaylı teknik kontrolden geçer ve periyodik bakımları eksiksiz yapılır. Sigorta kapsamı yeni vinçlerle aynı şekilde sağlanır.",
  },
];

export default function KuleVincKiralamaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl">🏗️</div>
          <div className="absolute bottom-10 right-10 text-9xl">🏢</div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                7/24 Hizmet
              </span>
              <span className="text-gray-400 text-sm">Aylık · Proje Bazlı · Uzun Dönem</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Kule Vinç Kiralama{" "}
              <span className="text-yellow-400">|</span>{" "}
              Kiralık Kule Vinç Hizmetleri
              <br />{" "}
              <span className="text-3xl lg:text-4xl text-gray-300 font-bold">
                Montaj, Operatör ve Teknik Destek Dahil
              </span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10">
              Sabit, tırmanıcı ve yürüyen kule vinç seçenekleriyle her ölçekten
              inşaat projesine uygun kiralama çözümleri. Operatörlü veya
              operatörsüz, montajdan demontaja kadar profesyonel hizmet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 0532 303 90 89
              </a>
              <a
                href="#fiyatlar"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-yellow-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                💰 Fiyat Tablosuna Git
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hızlı Stat Bar */}
      <section className="bg-yellow-400 py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { sayi: "150+", etiket: "Aktif Kule Vinç" },
            { sayi: "15+", etiket: "Yıl Deneyim" },
            { sayi: "24/7", etiket: "Teknik Destek" },
            { sayi: "500+", etiket: "Tamamlanan Proje" },
          ].map((s) => (
            <div key={s.etiket}>
              <div className="text-3xl font-black text-gray-900">{s.sayi}</div>
              <div className="text-sm font-semibold text-gray-700">{s.etiket}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kule Vinç Nedir? Mobil Vinçten Farkı */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Kule Vinç Nedir? Mobil Vinçten Farkı
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kule vinç, sabit veya yarı sabit bir kuleye monte edilmiş, yüksek
              katlı yapı inşaatlarında ağır malzemeleri kaldırıp taşımak için
              kullanılan dikey vinç sistemidir.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="font-black text-gray-900 mb-3 text-lg">Kule Vinç</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Sabit montaj, yüksek kaldırma noktası</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Uzun süreli ve çok katlı projeler için ideal</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Geniş çalışma yarıçapı ve yükseklik avantajı</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Montaj-demontaj süreci gerektirir</li>
              </ul>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-3xl mb-4">🚛</div>
              <h3 className="font-black text-gray-900 mb-3 text-lg">Mobil Vinç</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-gray-500 font-bold">✓</span> Kendi tekerlekleri ile hareket eder</li>
                <li className="flex gap-2"><span className="text-gray-500 font-bold">✓</span> Kısa süreli ve noktasal kaldırma işleri için ideal</li>
                <li className="flex gap-2"><span className="text-gray-500 font-bold">✓</span> Kurulum gerektirmez, hızlı konuşlanır</li>
                <li className="flex gap-2"><span className="text-gray-500 font-bold">✓</span> Yükseklik ve süreklilik açısından sınırlıdır</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kule Vinç Çeşitleri */}
      <section className="py-20 px-4 bg-gray-50" id="cesitler">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Geniş Filo</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Kule Vinç Çeşitleri: Sabit, Tırmanıcı ve Yürüyen Modeller
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Projenizin yüksekliğine ve şantiye yapısına en uygun kule vinç
              türünü seçin. Tüm modeller bakımlı ve sigortalıdır.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {kuleVincCesitleri.map((f) => (
              <div
                key={f.title}
                className={`border-2 rounded-2xl p-8 hover:shadow-xl transition group ${f.renk}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${f.iconBg}`}>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{f.desc}</p>
                <div className="flex items-center gap-4 mb-5 text-sm text-gray-500">
                  <span>⚖️ {f.kapasite}</span>
                  <span>📅 {f.sure}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {f.ozellikler.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold">✓</span> {o}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:05323039089"
                  className="block text-center bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-bold py-3 rounded-xl text-sm transition"
                >
                  Teklif Al →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sabit Kule Vinç Detayı */}
      <section className="py-20 px-4 bg-blue-50" id="sabit">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              🏗️ H3: Alt Başlık
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Sabit Kule Vinç Kiralama
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sabit kule vinçler, belirlenen bir temel üzerine monte edilerek
              proje süresince yerini değiştirmeyen, en yaygın kullanılan kule
              vinç tipidir. Konut, ticari ve endüstriyel yapı projelerinde
              güvenilir ve ekonomik bir kaldırma çözümü sunar.
            </p>
            <ul className="space-y-3">
              {[
                "4 ton – 16 ton arasında kapasite seçenekleri",
                "30m – 60m arası kol (bom) uzunluğu",
                "Beton temel veya çapraz şase ile montaj",
                "10 kata kadar yapılarda yüksek verim",
                "Düşük işletme ve bakım maliyeti",
                "Geniş çalışma yarıçapı ile tüm şantiyeye erişim",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-blue-500 font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="text-6xl text-center mb-6">🏗️🏘️</div>
            <h4 className="font-black text-gray-900 text-lg mb-4 text-center">
              Hangi Projelerde Kullanılır?
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "🏘️ Konut siteleri",
                "🏬 Ticari binalar",
                "🏭 Fabrika inşaatları",
                "🏨 Otel projeleri",
                "🏛️ Kamu yapıları",
                "🏗️ Orta katlı bloklar",
              ].map((item) => (
                <div key={item} className="bg-blue-50 rounded-lg px-3 py-2 text-xs text-gray-700 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tırmanıcı Kule Vinç Detayı */}
      <section className="py-20 px-4 bg-white" id="tirmanici">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-orange-50 rounded-2xl p-8 border border-orange-100">
            <div className="text-6xl text-center mb-6">🏢🏗️</div>
            <h4 className="font-black text-gray-900 text-lg mb-4 text-center">
              Tırmanıcı Kule Vincin Güçlü Olduğu Alanlar
            </h4>
            <div className="space-y-3">
              {[
                { alan: "Gökdelen projeleri", aciklama: "20 katın üzerindeki yüksek yapılar" },
                { alan: "Dar şantiye alanları", aciklama: "Yer kaplamadan dikey çalışma imkânı" },
                { alan: "Asansör boşluğu montajı", aciklama: "Bina çekirdeğinden tırmanma sistemi" },
                { alan: "Şehir içi inşaatlar", aciklama: "Sınırlı alanlarda güvenli operasyon" },
              ].map((item) => (
                <div key={item.alan} className="flex gap-3 bg-white rounded-xl p-3">
                  <span className="text-orange-500 font-bold shrink-0">◆</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{item.alan}</div>
                    <div className="text-gray-500 text-xs">{item.aciklama}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              🏢 H3: Alt Başlık
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Tırmanıcı Kule Vinç Kiralama – Yüksek Katlı Yapılar İçin
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tırmanıcı kule vinçler, bina yükseldikçe hidrolik sistemle kendi
              içinde yukarı taşınan, yer kaplamayan kule vinç tipidir. Şantiye
              alanı kısıtlı olan yüksek katlı projelerde tercih edilen en
              verimli çözümdür. 6 tondan 20 tona kadar kapasite seçenekleri.
            </p>
            <ul className="space-y-3">
              {[
                "6 – 20 ton kaldırma kapasitesi",
                "Bina çekirdeği veya asansör boşluğundan tırmanma",
                "Kat yüksekliğine bağlı olmadan sınırsız çalışma",
                "Şantiye alanında yer kaplamaz",
                "Yüksek rüzgâr koşullarına dayanıklı yapı",
                "Gökdelen ve yüksek konut projelerine özel mühendislik",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Yürüyen Kule Vinç Detayı */}
      <section className="py-20 px-4 bg-yellow-50" id="yuruyen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Yürüyen Kule Vinç Kiralama – Ray Üzerinde Hareketli Çözüm
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yürüyen kule vinçler, ray sistemi üzerinde hareket ederek geniş
              ve çok bloklu şantiyelerde tek bir vinçle birden fazla noktaya
              hizmet verebilen esnek bir kaldırma çözümüdür.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚂",
                title: "Ray Üzerinde Hareket",
                desc: "Önceden döşenen ray hattı üzerinde ileri-geri hareket ederek geniş şantiye alanını tek vinçle kapsar.",
              },
              {
                icon: "🏗️",
                title: "Çok Bloklu Projeler",
                desc: "Toplu konut ve sanayi sitesi gibi birden fazla yapı bloğu içeren projelerde maliyet avantajı sağlar.",
              },
              {
                icon: "📐",
                title: "Esnek Konumlandırma",
                desc: "Proje ilerleyişine göre vincin çalışma noktası ray hattı boyunca yeniden ayarlanabilir.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-yellow-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-black text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kule Vinç Kullanım Alanları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörel Kullanım</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Kule Vinç Kullanım Alanları
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kule vinçler inşaat ve konut projelerinden altyapı ve köprü
              yapımına kadar geniş bir yelpazede kullanılır.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                İnşaat ve Konut Projelerinde Kule Vinç
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Çok katlı konut ve ticari yapı projelerinde malzeme taşıma ve
                montaj süreçlerinin temel ekipmanıdır.
              </p>
              <div className="space-y-4 text-left">
                {kullanimAlanlariInsaat.map((item) => (
                  <div key={item.sector} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <span className="text-2xl shrink-0">{item.sector.split(" ")[0]}</span>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">{item.sector.split(" ").slice(1).join(" ")}</div>
                      <div className="text-gray-500 text-xs">{item.durum}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                Altyapı ve Köprü Projelerinde Kule Vinç
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Ağır prefabrik elemanların montajı gerektiren büyük ölçekli
                altyapı projelerinde kritik rol oynar.
              </p>
              <div className="space-y-4 text-left">
                {kullanimAlanlariAltyapi.map((item) => (
                  <div key={item.sector} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <span className="text-2xl shrink-0">{item.sector.split(" ")[0]}</span>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">{item.sector.split(" ").slice(1).join(" ")}</div>
                      <div className="text-gray-500 text-xs">{item.durum}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kule Vinç Kiralama Avantajları */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Kule Vinç Kiralama Avantajları
            </h2>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              Satın alma yerine kiralama; yüksek yatırım maliyetinden kurtarır,
              esneklik sağlar ve proje verimliliğinizi artırır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantajlar.map((a) => (
              <div key={a.title} className="bg-white/70 hover:bg-white rounded-2xl p-6 transition">
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doğru Kule Vinç Nasıl Seçilir? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Karar Rehberi</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Doğru Kule Vinç Nasıl Seçilir?
            </h2>
            <p className="text-gray-500">
              Bu 4 soruyu yanıtlayarak projenize en uygun kule vinç türüne ulaşabilirsiniz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {dogruKuleVinc.map((item, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-2xl p-6 hover:border-yellow-300 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-yellow-500 font-black text-4xl opacity-30">{String(i + 1).padStart(2, "0")}</div>
                </div>
                <h3 className="font-black text-gray-900 mb-2">{item.soru}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.tavsiye}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Hâlâ emin değil misiniz?</p>
            <a
              href="tel:05323039089"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 Uzmanımızla Konuşun
            </a>
          </div>
        </div>
      </section>

      {/* Kule Vinç Fiyatları */}
      <section className="py-20 px-4 bg-gray-900 text-white" id="fiyatlar">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Kiralık Kule Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">
              Fiyatlar kule vinç modeli, kapasitesi, kol uzunluğu ve proje süresine göre değişebilir.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Kule Vinç Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Aylık</th>
                  <th className="text-center px-6 py-4 font-semibold">Montaj</th>
                  <th className="text-center px-6 py-4 font-semibold">Yıllık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr
                    key={f.tur}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${
                      i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/70"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-white">{f.tur}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.aylik}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.montaj}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.yillik}</td>
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

      {/* Kule Vinç Fiyatlarını Etkileyen Faktörler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Bilinmesi Gerekenler</p>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Kule Vinç Fiyatlarını Etkileyen Faktörler
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Fiyat teklifinizi doğru alabilmek için bu faktörleri göz önünde bulundurmanız önerilir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiyatEtkenleri.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-md transition">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-black text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Montaj, Demontaj ve Operatör Gereksinimleri */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">H3: Alt Başlık</p>
            <h3 className="text-3xl font-black mb-4">
              Kule Vinç Montaj, Demontaj ve Operatör Gereksinimleri
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Sertifikalı teknik ekibimizle güvenli montaj ve demontaj, ehliyetli
              ve deneyimli operatörlerimizle birlikte kesintisiz bir kule vinç
              operasyonu sağlıyoruz.
            </p>
            <div className="space-y-4">
              {[
                { icon: "📜", title: "Sertifikalı Operatörler", desc: "Tüm operatörlerimiz geçerli vinç operatörlüğü belgesine sahiptir." },
                { icon: "🛡️", title: "İş Güvenliği Eğitimli", desc: "Montaj ve operasyon ekibimiz iş güvenliği sertifikası almıştır." },
                { icon: "⏰", title: "Planlı Montaj-Demontaj", desc: "Proje takvimine uygun, mobil vinç destekli kurulum ve söküm." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-xl flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h4 className="font-black text-xl mb-6 text-center">Operatörlü vs. Operatörsüz</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 text-gray-400 font-medium">Kriter</th>
                    <th className="text-center py-3 text-yellow-400 font-medium">Operatörlü</th>
                    <th className="text-center py-3 text-gray-300 font-medium">Operatörsüz</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    { kriter: "Belge Gereksinimi", operatorlu: "Yok", operatorsuz: "Vinç Operatörlüğü Belgesi" },
                    { kriter: "Güvenlik Sorumluluğu", operatorlu: "Bizde", operatorsuz: "Sizde" },
                    { kriter: "Maliyet", operatorlu: "Daha yüksek", operatorsuz: "Daha düşük" },
                    { kriter: "Verimlilik", operatorlu: "Yüksek", operatorsuz: "Deneyime bağlı" },
                  ].map((r) => (
                    <tr key={r.kriter} className="border-b border-gray-700/50">
                      <td className="py-3 text-gray-400">{r.kriter}</td>
                      <td className="py-3 text-center text-green-400">✓ {r.operatorlu}</td>
                      <td className="py-3 text-center text-gray-400">{r.operatorsuz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <a
                href="tel:05323039089"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition text-sm"
              >
                📞 Operatörlü Fiyat Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kule Vinç Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Kule Vinç Kiralama Süreci
            </h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel kule vinç kiralama</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surecAdimlar.map((a) => (
              <div
                key={a.no}
                className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group"
              >
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
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black mb-4">İş Güvenliği</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kule vinç operasyonlarında güvenlik her şeyin önündedir.
                Tüm ekipmanlarımız düzenli periyodik bakımdan geçmekte,
                operatörlerimiz güncel sertifikalamalara sahip bulunmaktadır.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikKurallari.map((kural) => (
                <div key={kural} className="flex gap-3 items-start bg-gray-800/60 border border-gray-700 rounded-xl p-4">
                  <span className="text-green-400 font-bold text-lg shrink-0">✓</span>
                  <p className="text-gray-300 text-sm">{kural}</p>
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Kule Vinç Kiralama Hakkında Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-4">
            {sss.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 transition">
                <h3 className="font-bold text-gray-900 mb-2">❓ {s.soru}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-yellow-400 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Projeniz İçin Kule Vinç Kiralama Teklifi Alın
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun kule vinç modelini belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 0532 303 90 89
            </a>
            <Link
              href="/iletisim"
              className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              Mesaj Gönder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
