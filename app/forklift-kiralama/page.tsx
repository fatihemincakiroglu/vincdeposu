import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/forklift-kiralama",
  },
  title: "Forklift Kiralama | Kiralık Forklift Hizmetleri – Günlük, Aylık, Uzun Dönem",
  description:
    "Türkiye genelinde profesyonel forklift kiralama hizmetleri. Elektrikli, dizel ve LPG forklift seçenekleri. Operatörlü kiralama, günlük & aylık fiyatlar. 7/24 hizmet: 0532 303 90 89",
};

const forkliftCesitleri = [
  {
    icon: "⚡",
    title: "Elektrikli Forklift",
    desc: "Kapalı alan kullanımında ideal, sıfır emisyonlu, sessiz çalışan modern forkliftler. Depo, fabrika ve market gibi iç mekânlar için en uygun seçenek.",
    kapasite: "1–10 ton",
    sure: "Günlük / Aylık",
    href: "#elektrikli",
    ozellikler: ["Sıfır emisyon", "Sessiz çalışma", "Dar geçiş", "Düşük bakım maliyeti"],
    renk: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: "🛢️",
    title: "Dizel Forklift",
    desc: "Açık alan ve ağır yük taşıma operasyonlarında üstün güç sunan dizel forkliftler. İnşaat alanları, limanlar ve dış sahalar için idealdir.",
    kapasite: "1.5–16 ton",
    sure: "Günlük / Aylık / Yıllık",
    href: "#dizel",
    ozellikler: ["Yüksek kaldırma gücü", "Açık alan", "Uzun mesafe", "Yakıt verimliliği"],
    renk: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    icon: "🔥",
    title: "LPG'li Forklift",
    desc: "Hem kapalı hem açık alanlarda kullanılabilen esnek LPG forkliftler. Hızlı yakıt ikmali ve kesintisiz çalışma avantajı sunar.",
    kapasite: "1–7 ton",
    sure: "Günlük / Aylık",
    href: "#lpg",
    ozellikler: ["İç/dış alan", "Hızlı ikmal", "Esnek kullanım", "Maliyet avantajı"],
    renk: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
];

const fiyatTablosu = [
  { tur: "Elektrikli Forklift (1.5 ton)", gunluk: "2.500 TL", aylik: "35.000 TL", yillik: "Teklif" },
  { tur: "Elektrikli Forklift (3 ton)", gunluk: "3.500 TL", aylik: "50.000 TL", yillik: "Teklif" },
  { tur: "Dizel Forklift (3 ton)", gunluk: "3.000 TL", aylik: "45.000 TL", yillik: "Teklif" },
  { tur: "Dizel Forklift (5 ton)", gunluk: "4.500 TL", aylik: "65.000 TL", yillik: "Teklif" },
  { tur: "Dizel Forklift (10 ton)", gunluk: "7.500 TL", aylik: "110.000 TL", yillik: "Teklif" },
  { tur: "LPG Forklift (3 ton)", gunluk: "3.200 TL", aylik: "48.000 TL", yillik: "Teklif" },
  { tur: "Operatörlü Forklift (+)", gunluk: "+2.000 TL", aylik: "+30.000 TL", yillik: "Teklif" },
  { tur: "İkinci El Forklift Kiralama", gunluk: "1.800 TL", aylik: "25.000 TL", yillik: "Teklif" },
];

const fiyatEtkenleri = [
  { icon: "⏱️", title: "Kiralama Süresi", desc: "Günlük, haftalık, aylık veya yıllık kiralama seçenekleri farklı fiyatlandırılır. Uzun dönem kiralamada önemli indirimler uygulanır." },
  { icon: "🏋️", title: "Yük Kapasitesi", desc: "Forklift kapasitesi arttıkça kiralama bedeli yükselir. 1.5 tondan 16 tona kadar farklı kapasitelerde seçenek sunuyoruz." },
  { icon: "⛽", title: "Yakıt Tipi", desc: "Elektrikli, dizel ve LPG seçeneklerinin kiralama maliyetleri ve yakıt giderleri birbirinden farklıdır." },
  { icon: "👷", title: "Operatör Dahil Mi?", desc: "Operatörsüz veya sertifikalı operatörümüzle birlikte kiralama seçenekleri ayrı fiyatlandırılır." },
  { icon: "📍", title: "Teslimat Konumu", desc: "Konum ve mesafeye göre teslimat/geri alma ücreti uygulanabilir. İstanbul içi ücretsiz teslimat seçenekleri mevcuttur." },
  { icon: "🔧", title: "Ekipman Yaşı", desc: "Sıfır ve az kullanılmış (ikinci el) forklift kiralama seçenekleri arasında fiyat farkı bulunmaktadır." },
];

const avantajlar = [
  {
    icon: "💰",
    title: "Sermaye Tasarrufu",
    desc: "Yüzbinlerce TL'lik yatırım yapmak yerine bütçenizi operasyonel giderlere ayırın. Nakit akışınızı koruyun.",
  },
  {
    icon: "🔄",
    title: "Güncel Ekipman",
    desc: "Her zaman bakımlı, modern ve verimli forkliftlerle çalışın. Teknoloji yenileme maliyeti olmadan en iyi ekipmanı kullanın.",
  },
  {
    icon: "📊",
    title: "Esnek Planlama",
    desc: "İş yoğunluğuna göre forklift sayısını artırın ya da azaltın. Sezonluk ihtiyaçlarınıza göre planlamayı kendiniz yapın.",
  },
  {
    icon: "🛠️",
    title: "Bakım Dahil",
    desc: "Arıza, bakım ve tamir masrafları bizim sorumluluğumuzda. Ekipman sorunlarıyla zaman kaybetmeyin.",
  },
  {
    icon: "📋",
    title: "Vergi Avantajı",
    desc: "Kiralama bedelleri gider olarak gösterilebilir. Satın alıma kıyasla vergisel açıdan avantajlı bir model.",
  },
  {
    icon: "⚡",
    title: "Hızlı Teslimat",
    desc: "Talepleriniz 24-48 saat içinde karşılanır. Acil ihtiyaçlarınız için aynı gün çözüm sunabiliyoruz.",
  },
];

const kisaDonemleriUygun = [
  { sector: "🏗️ İnşaat Sektörü", durum: "Proje bazlı kısa dönem ihtiyaçlar" },
  { sector: "📦 Lojistik & Depo", durum: "Sezonluk yoğunluk dönemleri" },
  { sector: "🛍️ Perakende", durum: "Yıl sonu ve kampanya stok taşıma" },
  { sector: "🎪 Organizasyon", durum: "Fuar, etkinlik kurulum süreçleri" },
  { sector: "🌾 Tarım", durum: "Hasat dönemi yük taşıma ihtiyacı" },
  { sector: "🏭 Üretim", durum: "Makine montaj ve yerleştirme projeleri" },
];

const uzunDonemleriUygun = [
  { sector: "🏭 Fabrikalar", durum: "Sürekli üretim hattı taşıma işlemleri" },
  { sector: "🚢 Liman & Terminaller", durum: "Yıl boyu yük elleçleme operasyonları" },
  { sector: "🛒 Market Zincirleri", durum: "Depo ve mağaza lojistiği" },
  { sector: "♻️ Geri Dönüşüm", durum: "Kesintisiz malzeme taşıma süreçleri" },
  { sector: "⚗️ Kimya & İlaç", durum: "Hassas malzeme taşıma gerektiren alanlar" },
  { sector: "📮 E-Ticaret Depoları", durum: "Fulfillment merkezi operasyonları" },
];

const dogruForklift = [
  {
    soru: "Yükünüz ne kadar ağır?",
    tavsiye: "1–2 ton için küçük elektrikli, 3–5 ton için standart dizel/LPG, 6+ ton için ağır dizel modeller.",
    icon: "⚖️",
  },
  {
    soru: "Çalışma alanı kapalı mı?",
    tavsiye: "Kapalı alanlarda elektrikli (sıfır emisyon) tercih edin. Açık alan + ağır yük için dizel en uygun seçimdir.",
    icon: "🏢",
  },
  {
    soru: "Geçit genişliği ne kadar?",
    tavsiye: "Dar koridor (1.5–2m): üç yönlü forklift. Orta (2.5–3m): standart. Geniş alan: büyük kapasiteli modeller.",
    icon: "📐",
  },
  {
    soru: "Kaldırma yüksekliği?",
    tavsiye: "4–6m yükseklik: standart forklift. 8–12m: yüksek maçalı reach truck modeli öneririz.",
    icon: "📏",
  },
];

const surecAdimlar = [
  { no: "01", title: "İhtiyaç Analizi", desc: "Yük kapasitesi, çalışma alanı ve süre bilgilerini paylaşın." },
  { no: "02", title: "Model Seçimi", desc: "Uzman ekibimiz projenize uygun forklift modelini belirler." },
  { no: "03", title: "Teklif ve Sözleşme", desc: "Şeffaf fiyatlandırmayla kiralama sözleşmesi imzalanır." },
  { no: "04", title: "Teslimat", desc: "Forklift belirtilen adrese teslim edilir, teknik teslim tutanağı düzenlenir." },
  { no: "05", title: "Operasyon", desc: "Kendi personelinizle veya operatörümüzle güvenli şekilde kullanım başlar." },
  { no: "06", title: "İade", desc: "Kiralama süreci sonunda forklift teslim alınır, hesap kapatılır." },
];

const guvenlikKurallari = [
  "Tüm forkliftler periyodik bakım ve teknik kontrolden geçmektedir",
  "Operatörlerimiz SRC belgesi ve sertifikalara sahiptir",
  "Ekipmanlar güncel trafik ve iş güvenliği mevzuatına uygundur",
  "Kapalı alanlarda sadece elektrikli ve LPG modeller kullanılır",
  "Her forklift kiralamada sigorta kapsamı sağlanmaktadır",
  "Acil arıza durumunda 4 saat içinde teknik destek/değişim garantisi",
];

const sss = [
  {
    soru: "Forklift kiralamak için ne gereklidir?",
    cevap: "Forklift kiralamak için şirket vergi levhası, imza sirküleri ve kira sözleşmesi yeterlidir. Bireysel kiralamalar için kimlik ve depozito talep edilebilir. SRC belgesi zorunlu değildir, ancak operatörlü kiralama tercih edilirse sürücümüz gelir.",
  },
  {
    soru: "Minimum kiralama süresi ne kadar?",
    cevap: "Minimum kiralama süremiz 1 gündür. Günlük, haftalık, aylık ve yıllık kiralama seçenekleri mevcuttur. Uzun dönem kiralamada özel indirimler uygulanmaktadır.",
  },
  {
    soru: "Forklift teslimatı yapılıyor mu?",
    cevap: "Evet, tüm forkliftlerin teslimat ve geri alımını biz yapıyoruz. İstanbul içinde ücretsiz teslimat sunuyoruz. Şehir dışı teslimatlar için ek nakliye ücreti uygulanmaktadır.",
  },
  {
    soru: "Kiralama süreci içinde arıza olursa ne olur?",
    cevap: "Arıza durumunda teknik destek ekibimiz en geç 4 saat içinde devreye girer. Onarım mümkün değilse eşdeğer bir forklift ile değişim yapılır. Arıza süresi kira bedelinden mahsup edilir.",
  },
  {
    soru: "Elektrikli forklift için şarj istasyonu gerekli mi?",
    cevap: "Elektrikli forkliftler standart 220V veya 380V şebeke elektriğiyle şarj olur. Özel şarj istasyonu gerekmez. Şarj süresi kapasiteye göre 6–10 saat arasındadır; gece şarj edilerek gün boyu kullanılabilir.",
  },
  {
    soru: "Kiralık forklift yerine satın almak daha mı avantajlı?",
    cevap: "Bunu iş sürecinizin sürekliliğine göre değerlendirmeniz gerekir. Yılın yalnızca bir bölümünde forklift kullanan işletmeler için kiralama açıkça daha ekonomiktir. Sürekli ve yoğun kullanım durumunda ise satın alma düşünülebilir; ancak bakım, sigorta ve değer kaybı maliyet hesabına dahil edilmelidir.",
  },
  {
    soru: "LPG forklift kapalı alanda kullanılabilir mi?",
    cevap: "LPG forkliftler uygun havalandırması olan kapalı alanlarda kullanılabilir. Ancak havalandırması yetersiz veya tamamen kapalı alanlarda elektrikli forklift tercih edilmelidir. Uzmanlarımız alanınıza göre en uygun modeli belirler.",
  },
  {
    soru: "Operatörsüz kiralık forklift kullanabilir miyim?",
    cevap: "Kendi personeliniz forklift kullanma yetkisine (SRC belgesi veya işletme iç eğitimi) sahipse operatörsüz kiralama yapabilirsiniz. Aksi hâlde operatörlü kiralama seçeneğimizden yararlanabilirsiniz.",
  },
];

export default function ForkliftKiralamaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl">🏭</div>
          <div className="absolute bottom-10 right-10 text-9xl">⚡</div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                7/24 Hizmet
              </span>
              <span className="text-gray-400 text-sm">Günlük · Haftalık · Aylık · Yıllık</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Forklift Kiralama{" "}
              <span className="text-yellow-400">|</span>{" "}
              Kiralık Forklift Hizmetleri
              <br />{" "}
              <span className="text-3xl lg:text-4xl text-gray-300 font-bold">
                Günlük, Aylık, Uzun Dönem
              </span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10">
              Elektrikli, dizel ve LPG forklift seçenekleriyle her ölçekten
              işletmeye uygun kiralama çözümleri. Operatörlü veya operatörsüz,
              kısa veya uzun dönem — ihtiyacınıza göre teklif alın.
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
            { sayi: "500+", etiket: "Aktif Forklift" },
            { sayi: "15+", etiket: "Yıl Deneyim" },
            { sayi: "24/7", etiket: "Teknik Destek" },
            { sayi: "1.000+", etiket: "Memnun Müşteri" },
          ].map((s) => (
            <div key={s.etiket}>
              <div className="text-3xl font-black text-gray-900">{s.sayi}</div>
              <div className="text-sm font-semibold text-gray-700">{s.etiket}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sahadan Kareler */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] sm:aspect-[20/9] rounded-2xl overflow-hidden border border-gray-100">
            <Image
              src="/images/forklift-kiralama-filo.jpg"
              alt="Kiralık forklift filosu - VMAX forklift modelleri"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Forklift Çeşitleri */}
      <section className="py-20 px-4 bg-white" id="cesitler">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Geniş Filo</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Forklift Kiralama Çeşitleri: Elektrikli, Dizel ve LPG Seçenekleri
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Projenizin gereksinimlerine ve çalışma ortamına en uygun forklift
              türünü seçin. Tüm modeller bakımlı ve sigortalıdır.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {forkliftCesitleri.map((f) => (
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

      {/* Elektrikli Forklift Detayı */}
      <section className="py-20 px-4 bg-blue-50" id="elektrikli">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              ⚡ H3: Alt Başlık
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Elektrikli Forklift Kiralama – Kapalı Alan Kullanımı İçin İdeal Çözüm
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Elektrikli forkliftler, kapalı depo, fabrika, soğuk hava deposu ve gıda
              üretim tesislerinde kullanım için en güvenli ve çevre dostu seçenektir.
              Egzoz gazı salmadıkları için iç mekân hava kalitesini bozmaz, sessiz
              çalışma yapıları sayesinde ofis ortamlarına yakın alanlarda rahatlıkla
              kullanılabilir.
            </p>
            <ul className="space-y-3">
              {[
                "1.5 ton – 10 ton arasında kapasite seçenekleri",
                "Şebeke elektriğiyle kolay şarj (220V / 380V)",
                "Lift yüksekliği: 3m – 12m arası modeller",
                "Soğuk hava deposu koşullarına uyumlu (−20°C)",
                "Düşük operasyonel maliyet, uzun kullanım ömrü",
                "Dar koridorlarda manevra kabiliyeti",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-blue-500 font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="text-6xl text-center mb-6">⚡🏭</div>
            <h4 className="font-black text-gray-900 text-lg mb-4 text-center">
              Hangi Sektörler Kullanır?
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "📦 E-ticaret depoları",
                "❄️ Soğuk hava depoları",
                "🍞 Gıda üretim tesisleri",
                "💊 İlaç & kimya depoları",
                "🛒 Market zinciri depoları",
                "📚 Kağıt & baskı fabrikaları",
              ].map((item) => (
                <div key={item} className="bg-blue-50 rounded-lg px-3 py-2 text-xs text-gray-700 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dizel Forklift Detayı */}
      <section className="py-20 px-4 bg-white" id="dizel">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-orange-50 rounded-2xl p-8 border border-orange-100">
            <div className="text-6xl text-center mb-6">🛢️🏗️</div>
            <h4 className="font-black text-gray-900 text-lg mb-4 text-center">
              Dizel Forkliftin Güçlü Olduğu Alanlar
            </h4>
            <div className="space-y-3">
              {[
                { alan: "İnşaat alanları", aciklama: "Düzensiz zemin ve ağır malzeme" },
                { alan: "Liman & terminaller", aciklama: "Konteyner ve büyük yük taşıma" },
                { alan: "Açık sahalar", aciklama: "Rüzgar ve hava şartlarına dayanıklı" },
                { alan: "Kereste & ağır sanayi", aciklama: "16 tona kadar kaldırma gücü" },
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
              🛢️ H3: Alt Başlık
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Dizel Forklift Kiralama – Açık Alan ve Ağır Yük Taşıma
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dizel forkliftler, yüksek kaldırma kapasitesi ve sağlam yapısıyla ağır
              endüstriyel operasyonların vazgeçilmezi. Açık havada, düzensiz arazide
              ve uzun mesafe taşımada elektrikli alternatiflere kıyasla üstün
              performans sunar. 1.5 tondan 16 tona kadar geniş kapasite yelpazesi.
            </p>
            <ul className="space-y-3">
              {[
                "1.5 – 16 ton kaldırma kapasitesi",
                "Uzun çalışma saati — yakıt ikmali saniyeler sürer",
                "Soğuk havada ve eğimli arazide güvenilir çalışma",
                "Ön ağırlıklı ve arka ağırlıklı model seçenekleri",
                "Yüksek fark yükleme (sideshift) aparatı mevcuttur",
                "Kereste kelepçesi, döner çatal gibi özel aparatlarla kullanım",
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

      {/* LPG Forklift Detayı */}
      <section className="py-20 px-4 bg-yellow-50" id="lpg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              LPG&apos;li Forklift Kiralama – Hem Kapalı Hem Açık Alanda Esnek Kullanım
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              LPG forkliftler, hem iç hem dış mekânda kullanılabilen esnek yapısıyla
              karma çalışma ortamlarına sahip işletmeler için mükemmel bir tercihtir.
              Hızlı yakıt ikmali sayesinde kesintisiz operasyon imkânı sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔄",
                title: "İç/Dış Alan Esnekliği",
                desc: "Fabrika içinden dış depoya, fabrikadan yükleme rampasına — tek bir forklift her iki ortamda da çalışır.",
              },
              {
                icon: "⛽",
                title: "Hızlı Yakıt İkmali",
                desc: "Tüp değişimi 2 dakikadan kısa sürer. Uzun şarj bekleme süreleri olmadan vardiya boyunca kesintisiz çalışma.",
              },
              {
                icon: "🌡️",
                title: "Her Hava Koşuluna Uygun",
                desc: "Elektrikli forklifte kıyasla soğuk havalarda daha iyi performans gösterir. Kış aylarında tercih edilebilir.",
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

      {/* Operatörlü Kiralama */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">H3: Alt Başlık</p>
            <h3 className="text-3xl font-black mb-4">
              Operatörlü Forklift Kiralama – Sürücü Dahil Hizmet
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              SRC belgeli ve deneyimli sürücülerimizle birlikte forklift kiralayın.
              Kendi personelinizi eğitmek ve belgelendirmek yerine, uzman operatörlerimizle
              güvenli ve verimli bir operasyon yürütün.
            </p>
            <div className="space-y-4">
              {[
                { icon: "📜", title: "SRC Belgeli Operatörler", desc: "Tüm sürücülerimiz geçerli SRC ehliyetine sahiptir." },
                { icon: "🛡️", title: "İş Güvenliği Eğitimli", desc: "Operatörlerimiz iş güvenliği sertifikası almıştır." },
                { icon: "⏰", title: "Esnek Vardiya", desc: "Gündüz, gece veya tam gün hizmet seçenekleri." },
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
                    { kriter: "Ehliyet Gereksinimi", operatorlu: "Yok", operatorsuz: "SRC Belgesi" },
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

      {/* İkinci El Kiralama */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekonomik Seçenek</p>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              İkinci El Forklift Kiralama – Ekonomik ve Uygun Fiyatlı Seçenek
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Bütçe dostu ikinci el forklift kiralama ile operasyonlarınızı sürdürün.
              Tüm ikinci el ekipmanlarımız teknik kontrolden geçmekte ve bakımlıdır.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { icon: "💰", title: "%30–40 Daha Düşük Maliyet", desc: "Sıfır modellere kıyasla önemli tasarruf imkânı sunar." },
                { icon: "🔧", title: "Bakım Garantisi", desc: "Tüm ikinci el forklifte bakım ve teknik servis desteği sağlanır." },
                { icon: "📋", title: "Teknik Kontrol Belgesi", desc: "Her ekipman kiralama öncesi teknik kontrol tutanağıyla teslim edilir." },
                { icon: "⚡", title: "Hızlı Teslimat", desc: "Stokta hazır modeller için 24 saat içinde teslimat imkânı." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-bold text-gray-800">{item.title}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h4 className="font-black text-gray-900 text-xl mb-6 text-center">İkinci El Forklift Fiyatları</h4>
              <div className="space-y-3">
                {[
                  { model: "Elektrikli 1.5 ton (2018+)", fiyat: "1.800 TL/gün" },
                  { model: "Dizel 3 ton (2017+)", fiyat: "2.200 TL/gün" },
                  { model: "LPG 2.5 ton (2018+)", fiyat: "2.000 TL/gün" },
                  { model: "Dizel 5 ton (2016+)", fiyat: "3.200 TL/gün" },
                ].map((item) => (
                  <div key={item.model} className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-700 text-sm">{item.model}</span>
                    <span className="text-yellow-600 font-bold text-sm">{item.fiyat}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs text-center mt-4">
                * Aylık kiralamada ek indirim uygulanır.
              </p>
              <a
                href="tel:05323039089"
                className="block mt-6 text-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl text-sm transition"
              >
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section className="py-20 px-4 bg-gray-900 text-white" id="fiyatlar">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Kiralık Forklift Fiyatları 2026 – Güncel Ücret Tablosu</h2>
            <p className="text-gray-400 text-lg">
              Fiyatlar forklift modeli, kapasitesi ve kiralama süresine göre değişebilir.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Forklift Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Günlük</th>
                  <th className="text-center px-6 py-4 font-semibold">Aylık</th>
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
                    <td className="px-6 py-4 text-center text-yellow-400">{f.gunluk}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.aylik}</td>
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

      {/* Fiyatı Etkileyen Faktörler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Bilinmesi Gerekenler</p>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Forklift Kiralama Fiyatlarını Etkileyen Faktörler
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

      {/* Kiralama Dönemleri */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Esnek Kiralama</p>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Kısa Dönem */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  Kısa Dönem Forklift Kiralama – Günlük ve Haftalık Kiralama
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  1 günden başlayan kiralama seçenekleriyle anlık ihtiyaçlarınızı karşılayın.
                </p>
                <div className="space-y-4 text-left">
                  {kisaDonemleriUygun.map((item) => (
                    <div key={item.sector} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100">
                      <span className="text-2xl shrink-0">{item.sector.split(" ")[0]}</span>
                      <div>
                        <div className="font-bold text-gray-800 text-sm">{item.sector.split(" ").slice(1).join(" ")}</div>
                        <div className="text-gray-500 text-xs">{item.durum}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Uzun Dönem */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  Uzun Dönem Forklift Kiralama – Aylık ve Yıllık Anlaşmalar
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Aylık veya yıllık anlaşmalarla önemli indirimler ve öncelikli teknik destek.
                </p>
                <div className="space-y-4 text-left">
                  {uzunDonemleriUygun.map((item) => (
                    <div key={item.sector} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100">
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
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Forklift Kiralama Avantajları: Neden Satın Almak Yerine Kiralamalısınız?
            </h2>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              Satın alma yerine kiralama; sermayenizi korur, esneklik sağlar ve
              operasyonel verimliliğinizi artırır.
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

      {/* Doğru Modeli Seçme */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Karar Rehberi</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Hangi Forklift Size Uygun? Doğru Modeli Seçme Rehberi
            </h2>
            <p className="text-gray-500">
              Bu 4 soruyu yanıtlayarak ihtiyacınıza en uygun forklift türüne ulaşabilirsiniz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {dogruForklift.map((item, i) => (
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

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Forklift Kiralama Süreci Nasıl İşler?
            </h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel forklift kiralama</p>
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
                Forklift operasyonlarında güvenlik her şeyin önündedir.
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
              Forklift Kiralama Hakkında Sıkça Sorulan Sorular
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
            Projeniz İçin Forklift Kiralama Teklifi Alın
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun forklift modelini belirleyelim.
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
