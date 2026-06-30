import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/hizmetler",
  },
  title: "Hizmetler | Vinç Deposu — Satış, Bakım, Operatör, Eğitim ve Daha Fazlası",
  description:
    "Vinç Deposu'nun 7 ana hizmet kategorisi: Satılık vinç, bakım & onarım, operatörlü hizmet, sertifikasyon, yedek parça, acil müdahale ve taşıma lojistik. 7/24: 0532 303 90 89",
  keywords: ["vinç hizmetleri", "vinç bakım onarım", "operatörlü vinç", "vinç sertifikasyon", "acil vinç", "vinç yedek parça"],
};

/* ─────────────────────────────────────────────
   VERİ
───────────────────────────────────────────── */

const hizmetler = [
  {
    id: "satilik-vinc",
    href: "/satilik-vinc",
    numara: "01",
    icon: "🏷️",
    renk: "#F59E0B",
    renkLight: "#FEF3C7",
    badge: "Satış",
    title: "Satılık Vinç",
    altyazi: "Sıfır & ikinci el vinç alım-satım hizmetleri",
    desc: "Geniş stoğumuzdan sıfır veya yenilenmiş ikinci el vinç satın alabilirsiniz. Her bütçeye uygun seçenekler, teknik ekspertiz raporu, sigorta ve belgelendirme desteğiyle güvenli bir alım süreci yaşarsınız.",
    altKategoriler: [
      { label: "Sıfır Vinç Satışı", icon: "✨" },
      { label: "İkinci El Vinç", icon: "♻️" },
      { label: "Leasing & Finansman", icon: "💳" },
      { label: "Teknik Ekspertiz", icon: "🔍" },
      { label: "Belgelendirme Desteği", icon: "📜" },
    ],
    ozellikler: [
      "Mobil, kule ve sepetli vinç stoğu",
      "Teknik muayene ve ekspertiz raporu dahil",
      "Finansman ve leasing seçeneği (12–48 ay)",
      "Alım sonrası 6 ay teknik destek",
      "Tüm marka & model: Liebherr, Tadano, Manitowoc vb.",
      "Uluslararası ikinci el ithalat hizmeti",
    ],
    sss: [
      { s: "İkinci el vinç nasıl değerlenir?", c: "Uzman ekibimiz teknik muayene, motor ve hidrolik test, belge kontrolü ve piyasa analizi ile adil fiyat belirler. Ekspertiz raporu alıcıya teslim edilir." },
      { s: "Finansman imkânı var mı?", c: "Anlaşmalı finans kuruluşları ile 12–48 ay taksit seçeneği sunuyoruz. Peşinat oranı ve vade uzmanımızla belirlenir." },
      { s: "Satış sonrası destek sağlanıyor mu?", c: "Alım sonrası 6 ay boyunca teknik destek ve ilk bakım paketi ücretsiz sunulmaktadır." },
      { s: "Yurt dışından ithalat yapabiliyor musunuz?", c: "Avrupa ve Asya'dan ikinci el vinç ithalatı için gümrük, sigorta ve nakliye süreçlerini yönetiyoruz." },
    ],
    istatistikler: [
      { v: "500+", l: "Satılan Vinç" },
      { v: "12–48", l: "Ay Taksit" },
      { v: "6 Ay", l: "Satış Sonrası Destek" },
    ],
  },
  {
    id: "vinc-bakim-ve-onarim",
    href: "/vinc-bakim-ve-onarim",
    numara: "02",
    icon: "🔧",
    renk: "#3B82F6",
    renkLight: "#DBEAFE",
    badge: "Bakım",
    title: "Vinç Bakım ve Onarım",
    altyazi: "Periyodik bakım, saha servisi & acil onarım",
    desc: "Sertifikalı teknisyenlerimiz sahada ya da atölyemizde kapsamlı bakım, yağlama, elektrik-mekanik kontrol ve onarım gerçekleştirir. Yıllık bakım kontratlarıyla arıza riskini minimize edin.",
    altKategoriler: [
      { label: "Periyodik Bakım Kontratı", icon: "📅" },
      { label: "Saha Servisi", icon: "🚐" },
      { label: "Atölye Onarımı", icon: "🏭" },
      { label: "Elektrik & Mekanik Tamir", icon: "⚡" },
      { label: "Acil Arıza Hattı", icon: "🚨" },
    ],
    ozellikler: [
      "3, 6 ve 12 aylık periyodik bakım kontratları",
      "İstanbul geneli saha servisi ekibi",
      "Elektrik, hidrolik ve mekanik onarım",
      "Tüm marka ve model vinçlere hizmet",
      "Bakım geçmişi dijital kayıt sistemi",
      "Devre dışı ekipman kurtarma hizmeti",
    ],
    sss: [
      { s: "Bakım ne sıklıkla yapılmalı?", c: "Kullanım yoğunluğuna göre 3–6 aylık periyodik bakım önerilir. Yoğun kullanımda aylık kontrol yapılması iş güvenliği açısından zorunludur." },
      { s: "Saha servisi var mı?", c: "İstanbul genelinde 3 ayrı servis ekibimiz sahadadır. Ortalama 90 dk içinde lokasyonunuza ulaşırız." },
      { s: "Hangi markalara servis veriyorsunuz?", c: "Liebherr, Tadano, Manitowoc, Potain, Terex, Grove, Fassi ve yerli marka dahil tüm üreticilere servis verilir." },
      { s: "Acil arıza hattı 7/24 aktif mi?", c: "Evet, 0532 303 90 89 numarasına gece ve hafta sonu dahil her an ulaşabilirsiniz." },
    ],
    istatistikler: [
      { v: "90 dk", l: "Ortalama Yanıt" },
      { v: "3 Ekip", l: "Saha Servisi" },
      { v: "7/24", l: "Arıza Hattı" },
    ],
  },
  {
    id: "operatorlu-vinc-hizmeti",
    href: "/operatorlu-vinc-hizmeti",
    numara: "03",
    icon: "👷",
    renk: "#10B981",
    renkLight: "#D1FAE5",
    badge: "Operatör",
    title: "Operatörlü Vinç Hizmeti",
    altyazi: "Sertifikalı operatör ile eksiksiz vinç operasyonu",
    desc: "Belgeli operatörlerimiz vinci teslim alır, kurar, kullanır ve işi tamamlar. Siz sadece sonucu onaylarsınız. Milli Eğitim onaylı belge, iş güvenliği eğitimi ve sigorta kapsamındaki ekibimizle risksiz operasyon.",
    altKategoriler: [
      { label: "Günlük Operatör Kiralama", icon: "📆" },
      { label: "Aylık Kontrat", icon: "📋" },
      { label: "Gece Vardiyası", icon: "🌙" },
      { label: "Çok Vardiyalı Çalışma", icon: "🔄" },
      { label: "İş Güvenliği Danışmanlığı", icon: "🦺" },
    ],
    ozellikler: [
      "Milli Eğitim Bakanlığı onaylı operatör belgesi",
      "İş güvenliği ve ilk yardım eğitimli",
      "Sigortalı operatör hizmeti (ferdi kaza dahil)",
      "Günlük, haftalık ve aylık kontrat seçenekleri",
      "Çok vardiyalı (gündüz/gece) çalışma desteği",
      "Şantiye için uzun dönem operatör sözleşmesi",
    ],
    sss: [
      { s: "Operatör belgesi zorunlu mu?", c: "Evet, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu gereği tüm vinç operatörlerinin geçerli belgesi olması zorunludur. Belgesiz operasyon ciddi cezai yaptırım gerektirir." },
      { s: "Gece vardiyası mümkün mü?", c: "24 saat kesintisiz hizmet kapsamında gece vardiyası talep edilebilir. Ek vardiya ücreti sözleşmede belirlenir." },
      { s: "Operatör hangi vinclerle çalışabilir?", c: "Her operatörümüz belirli vinç sınıflarına sahiptir. Talep ettiğiniz vinç tipine uygun belgeli operatör yönlendirilir." },
      { s: "Uzun dönem sözleşme avantajlı mı?", c: "Aylık ve üzeri kontrat anlaşmalarında günlük hizmet fiyatına kıyasla %15–25 indirim uygulanmaktadır." },
    ],
    istatistikler: [
      { v: "50+", l: "Belgeli Operatör" },
      { v: "7/24", l: "Hizmet" },
      { v: "%15–25", l: "Uzun Dönem İndirim" },
    ],
  },
  {
    id: "vinc-sertifikasyon-ve-egitim",
    href: "/vinc-sertifikasyon-ve-egitim",
    numara: "04",
    icon: "🎓",
    renk: "#8B5CF6",
    renkLight: "#EDE9FE",
    badge: "Eğitim",
    title: "Sertifikasyon ve Eğitim",
    altyazi: "Operatör yetiştirme, belgelendirme & iş güvenliği kursları",
    desc: "Akredite eğitim programlarımızla çalışanlarınıza vinç operatör belgesi kazandırın. Teorik dersler, saha uygulamaları, sınav hazırlık ve sertifika teslimine kadar her süreç dahildir.",
    altKategoriler: [
      { label: "Operatör Temel Eğitimi", icon: "📚" },
      { label: "Tazeleme & Yenileme Kursu", icon: "🔁" },
      { label: "İş Güvenliği Eğitimi", icon: "🦺" },
      { label: "Grup Eğitim Programı", icon: "👥" },
      { label: "Uzaktan Teori Eğitimi", icon: "💻" },
    ],
    ozellikler: [
      "MEB onaylı sertifika programı",
      "Teori (5 gün) + saha uygulaması (3 gün)",
      "5+ kişilik grup eğitiminde %20 indirim",
      "Her 2 yılda bir yenileme kursu desteği",
      "İSG ve ilk yardım eğitimi dahil",
      "Sınav başarısında 2 iş günü içinde sertifika teslimi",
    ],
    sss: [
      { s: "Eğitim süresi ne kadar?", c: "Standart program 5 iş günü teori + 3 gün saha uygulamasından oluşur. Yoğun program 6 günde tamamlanabilir." },
      { s: "Sertifika ne zaman verilir?", c: "Sınav başarısının ardından 2 iş günü içinde onaylı sertifika teslim edilir. Acele sertifika için ek ücret uygulanabilir." },
      { s: "Grup eğitiminde indirim var mı?", c: "5 ve üzeri kişilik grup kayıtlarında kişi başı ücrete %20 indirim, 10 ve üzeri kişide %30 indirim uygulanır." },
      { s: "Uzaktan eğitim seçeneği mevcut mu?", c: "Teorik dersler video konferans üzerinden alınabilir; saha uygulaması tesisimizde zorunludur." },
    ],
    istatistikler: [
      { v: "8 Gün", l: "Program Süresi" },
      { v: "%30", l: "Grup İndirimi" },
      { v: "2 Gün", l: "Sertifika Teslimat" },
    ],
  },
  {
    id: "vinc-yedek-parca-ve-aksesuar",
    href: "/vinc-yedek-parca-ve-aksesuar",
    numara: "05",
    icon: "⚙️",
    renk: "#F97316",
    renkLight: "#FFEDD5",
    badge: "Parça",
    title: "Yedek Parça & Aksesuar",
    altyazi: "Orijinal & muadil parça tedariki, aynı gün kargo",
    desc: "Tüm marka ve model vinçler için orijinal veya onaylı muadil yedek parça stoğumuzdan anında temin. Hızlı kargo veya saha teslimat ile vinci en kısa sürede yeniden çalışır hale getiriyoruz.",
    altKategoriler: [
      { label: "Orijinal Yedek Parça", icon: "✅" },
      { label: "OEM Muadil Parça", icon: "🔩" },
      { label: "Vinç Aksesuarları", icon: "🧰" },
      { label: "Aynı Gün Kargo", icon: "🚚" },
      { label: "Özel Sipariş İthalat", icon: "✈️" },
    ],
    ozellikler: [
      "500+ farklı parça stoğu hazır",
      "Yurtiçi & ithal kaynaklı parça",
      "Orijinal ve OEM onaylı muadil seçenekler",
      "Sipariş anında aynı gün kargo imkânı",
      "Teknik katalog ve parça numarası desteği",
      "Stokta olmayan parça özel ithalatı (5–10 iş günü)",
    ],
    sss: [
      { s: "Stokta olmayan parça ne zaman gelir?", c: "Özel sipariş parçalar Avrupa ve Asya kaynaklarından ortalama 5–10 iş günü içinde temin edilir." },
      { s: "Garanti süresi var mı?", c: "Orijinal parçalarda 1 yıl, OEM parçalarda 6 ay garanti uygulanır. Montaj hatası kapsamdışıdır." },
      { s: "Parça numarasını bilmesek de bulabilir misiniz?", c: "Teknik ekibimiz vinç markası, modeli ve yılı ile doğru parçayı tespit eder. Fotoğraf ile destek de alabilirsiniz." },
      { s: "Toplu sipariş indirimi var mı?", c: "Belirli miktarın üzerindeki siparişlerde ve yıllık anlaşmalı müşterilere özel fiyatlandırma uygulanır." },
    ],
    istatistikler: [
      { v: "500+", l: "Parça Stoğu" },
      { v: "Aynı Gün", l: "Kargo" },
      { v: "1 Yıl", l: "Orijinal Garanti" },
    ],
  },
  {
    id: "vinc-acil-durum-hizmetleri",
    href: "/vinc-acil-durum-hizmetleri",
    numara: "06",
    icon: "🚨",
    renk: "#EF4444",
    renkLight: "#FEE2E2",
    badge: "Acil",
    title: "Acil Durum Hizmetleri",
    altyazi: "7/24 hızlı müdahale — 90 dakikada sahada",
    desc: "İstanbul genelinde 7 gün 24 saat arıza, kaza ve acil tahliye hizmetleri. Ortalama 90 dakika içinde sahaya ulaşan deneyimli ekibimiz, iş sürecinizin duraksamaması için her koşulda yanınızda.",
    altKategoriler: [
      { label: "Acil Vinç Kiralama", icon: "🏗️" },
      { label: "Arıza Tespiti & Müdahale", icon: "🔍" },
      { label: "Kurtarma & Tahliye", icon: "⛑️" },
      { label: "Hafta Sonu Hizmeti", icon: "📅" },
      { label: "Resmi Tatil Hizmeti", icon: "🗓️" },
    ],
    ozellikler: [
      "90 dakika ortalama saha ulaşma süresi",
      "Hafta sonu, gece ve resmi tatil hizmeti",
      "Acil vinç kiralama stok güvencesi",
      "Arıza tespit, müdahale ve kurtarma ekibi",
      "Sigorta şirketlerine hasar raporu desteği",
      "Proje bazlı bekletme hizmeti (standby vinç)",
    ],
    sss: [
      { s: "Acil hatta kaç dakikada ulaşılır?", c: "0532 303 90 89 numarasına gün ve saat fark etmeksizin hemen ulaşabilirsiniz. Telefonda ilk yönlendirme 5 dakika içinde yapılır." },
      { s: "Gece müdahalesi ücretli mi?", c: "Gece 22:00 – 07:00 arası ve resmi tatil hizmetleri için ek ücretlendirme uygulanabilir; önceden bilgi alınması önerilir." },
      { s: "Standby vinç hizmeti nedir?", c: "Büyük projelerde iş güvencesi için sahada hazır bekleyen vinç ve operatör temin edilir. Günlük bekleme ücreti uygulanır." },
      { s: "Sigorta hasar sürecinde yardım var mı?", c: "Kazalar için sigorta şirketlerinize iletilmek üzere detaylı hasar raporu ve fotoğraflı tutanak hazırlanır." },
    ],
    istatistikler: [
      { v: "90 dk", l: "Saha Yanıt Süresi" },
      { v: "7/24", l: "365 Gün" },
      { v: "0 dk", l: "Telefon Bekleme" },
    ],
  },
  {
    id: "vinc-tasima-ve-lojistik",
    href: "/vinc-tasima-ve-lojistik",
    numara: "07",
    icon: "🚛",
    renk: "#14B8A6",
    renkLight: "#CCFBF1",
    badge: "Lojistik",
    title: "Taşıma ve Lojistik",
    altyazi: "Vinç nakliyesi, şantiye kurulumu & lojistik yönetimi",
    desc: "Ağır ekipman taşımacılığı, şantiye kurulumu ve sökümü için özel araçlı lojistik hizmeti. Yol izinleri, eskort, sigorta ve bürokratik süreçlerin tamamı ekibimiz tarafından yönetilir.",
    altKategoriler: [
      { label: "Özel Nakil Araçları", icon: "🚛" },
      { label: "Yol İzni & Eskort", icon: "🚔" },
      { label: "Şantiye Kurulum & Söküm", icon: "🏗️" },
      { label: "Uluslararası Nakliye", icon: "🌍" },
      { label: "Sigortalı Taşıma", icon: "🛡️" },
    ],
    ozellikler: [
      "Özel low-bed ve platform nakil araçları",
      "Yol izni ve eskort düzenleme hizmeti",
      "Şantiye kurulum ve söküm dahil tam hizmet",
      "Uluslararası nakliye (Avrupa ve Orta Doğu)",
      "Kapsamlı nakliye sigortası",
      "Vinç montaj ve devreye alma desteği",
    ],
    sss: [
      { s: "Büyük vinçler için özel izin gerekli mi?", c: "Evet, ağır taşıt nakliyesi için Karayolları Genel Müdürlüğü'nden özel izin alınması zorunludur. Bu süreci biz yönetiyoruz." },
      { s: "Şehir dışı nakliye yapıyor musunuz?", c: "İstanbul dışı, Trakya–Marmara bölgesi ve Avrupa'ya uluslararası nakliye hizmetimiz mevcuttur." },
      { s: "Şantiye kurulumu ne kadar sürer?", c: "Vinç türüne ve şantiye koşullarına göre değişmekle birlikte ortalama 1–3 iş günü içinde kurulum tamamlanır." },
      { s: "Nakliye sırasında hasar olursa?", c: "Tüm taşımalar kapsamlı nakliye sigortası ile güvence altındadır. Hasar durumunda sigorta süreci tarafımızca yönetilir." },
    ],
    istatistikler: [
      { v: "1–3 Gün", l: "Şantiye Kurulum" },
      { v: "Uluslararası", l: "Nakliye" },
      { v: "Tam", l: "Sigorta Güvencesi" },
    ],
  },
];

const karsilastirmaTablosu = [
  { hizmet: "Satılık Vinç", sure: "Kalıcı alım", fiyat: "Teklif ile", sigorta: true, operatör: false, kargo: true, acil: false },
  { hizmet: "Bakım & Onarım", sure: "Periyodik / Anlık", fiyat: "Saatlik / Kontrat", sigorta: true, operatör: true, kargo: false, acil: true },
  { hizmet: "Operatörlü Hizmet", sure: "Günlük / Aylık", fiyat: "Günlük paket", sigorta: true, operatör: true, kargo: false, acil: false },
  { hizmet: "Sertifikasyon", sure: "8 gün", fiyat: "Kişi başı", sigorta: false, operatör: false, kargo: false, acil: false },
  { hizmet: "Yedek Parça", sure: "Stoktan anında", fiyat: "Parça bazı", sigorta: true, operatör: false, kargo: true, acil: true },
  { hizmet: "Acil Durum", sure: "7/24", fiyat: "Çağrı bazı", sigorta: true, operatör: true, kargo: true, acil: true },
  { hizmet: "Taşıma & Lojistik", sure: "Proje bazı", fiyat: "Mesafe / Ağırlık", sigorta: true, operatör: true, kargo: true, acil: false },
];

const surec = [
  { no: "01", icon: "📞", title: "Bizi Arayın", desc: "İhtiyacınızı kısaca anlatın, 7/24 ulaşabilirsiniz." },
  { no: "02", icon: "🔍", title: "Keşif & Analiz", desc: "Gerekirse saha ziyareti yapılır, ihtiyaç analizi tamamlanır." },
  { no: "03", icon: "📋", title: "Teklif Hazırlanır", desc: "Detaylı, şeffaf maliyet teklifi e-posta ile iletilir." },
  { no: "04", icon: "✍️", title: "Sözleşme İmzalanır", desc: "Açık koşullar, net ödeme planı, karşılıklı taahhüt." },
  { no: "05", icon: "🚀", title: "Hizmet Başlar", desc: "Ekip ve ekipman zamanında sahada, iş güvende." },
  { no: "06", icon: "✅", title: "Teslim & Onay", desc: "Hizmet tamamlandıktan sonra müşteri onayı alınır." },
];

const genelSss = [
  { s: "Birden fazla hizmet aynı anda alınabilir mi?", c: "Evet, kombine paketlerimizle bakım + operatör veya taşıma + kurulum gibi hizmetleri tek sözleşmeyle sunuyoruz. Paket alımlarda fiyat avantajı da sağlanmaktadır." },
  { s: "Fatura ve muhasebe desteği var mı?", c: "Kurumsal müşterilerimize e-fatura entegrasyonu ve aylık dökümlü faturalama hizmeti sunulmaktadır. SGK ve vergi belgesi desteği de mevcuttur." },
  { s: "Hangi marka vinçlere hizmet veriyorsunuz?", c: "Liebherr, Tadano, Manitowoc, Potain, Terex, Grove, Fassi, Hiab ve yerli marka dahil tüm üreticilere hizmet verilir. Parça tedariki ve teknik servis için marka fark etmez." },
  { s: "İstanbul dışında hizmet alabilir miyim?", c: "Trakya ve Marmara bölgesi ile İzmir, Bursa, Ankara gibi büyük şehirler için koordineli hizmet sağlanabilmektedir. Uluslararası nakliye için de destek sunulur." },
  { s: "Hizmet sözleşmesi iptal edilebilir mi?", c: "7 günlük önceden bildirim ile sözleşme koşullarına uygun şekilde iptal ya da revize mümkündür. Bazı hizmetlerde iptal ücreti uygulanabilir." },
  { s: "KDV ve vergi fiyata dahil mi?", c: "Tüm fiyat teklifleri KDV hariçtir. Geçerli KDV oranı faturaya ayrıca yansıtılır. Kurumsal müşteriler stopaj kesintisi uygulayabilir." },
  { s: "Acil durumda nasıl ulaşabilirim?", c: "0532 303 90 89 numarasını gece, hafta sonu ve tatil dahil her an arayabilirsiniz. WhatsApp ile de iletişim kurulabilir." },
  { s: "İş güvenliği mevzuatına uyum sağlıyor musunuz?", c: "6331 sayılı İSG Kanunu kapsamındaki tüm yükümlülükler karşılanmaktadır. Belge, denetim ve raporlama süreçleri ekibimiz tarafından yönetilir." },
];

const avantajlar = [
  { icon: "🏆", title: "25 Yıllık Deneyim", desc: "Sektörde çeyrek asır, 1000+ tamamlanan proje." },
  { icon: "🛡️", title: "Tam Sigortalı Hizmet", desc: "Tüm ekipman ve operasyonlar kapsamlı sigorta güvencesinde." },
  { icon: "⚡", title: "90 dk Yanıt", desc: "İstanbul genelinde acil çağrılarda ortalama 90 dakikada saha." },
  { icon: "👷", title: "Belgeli Uzman Ekip", desc: "Tüm personel MEB onaylı sertifika ve ISG eğitimi almış." },
  { icon: "🔧", title: "Bakımlı Filo", desc: "Düzenli teknik kontrol, sürpriz arıza yok." },
  { icon: "📞", title: "7/24 Destek Hattı", desc: "Gece ya da gündüz, tatil dahil her an bir uzman hatta." },
  { icon: "📋", title: "Şeffaf Sözleşme", desc: "Gizli ücret yok, tüm kalemler önceden netleştirilir." },
  { icon: "🌍", title: "Geniş Hizmet Alanı", desc: "İstanbul 39 ilçe + Trakya, Marmara ve uluslararası." },
];

export default function HizmetlerPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-yellow-400 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-10">
            <a href="/" className="hover:text-yellow-400 transition">Ana Sayfa</a>
            <span>›</span>
            <span className="text-gray-300">Hizmetler</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 text-sm font-bold tracking-wide">7 Hizmet Kategorisi · 7/24 Aktif</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-8">
                Vinç&apos;te<br />
                <span className="text-yellow-400">Her Şey</span><br />
                Bir Adreste
              </h1>

              <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                Satıştan bakıma, operatörden eğitime, yedek parçadan acil müdahaleye —
                tüm vinç ihtiyaçlarınız tek çatı altında.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:05323039089"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-5 rounded-2xl text-lg transition text-center shadow-lg shadow-yellow-400/20"
                >
                  📞 0532 303 90 89
                </a>
                <a
                  href="#hizmetler"
                  className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-5 rounded-2xl text-lg transition text-center"
                >
                  Hizmetleri Keşfet ↓
                </a>
              </div>
            </div>

            {/* Hizmet İkonları Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {hizmetler.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-yellow-400/40 transition flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: h.renk + "20" }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-0.5"
                      style={{ color: h.renk }}
                    >
                      {h.badge}
                    </div>
                    <div className="text-white font-bold text-sm group-hover:text-yellow-400 transition leading-tight">
                      {h.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* İstatistik barı */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "7", l: "Hizmet Kategorisi" },
              { v: "25+", l: "Yıllık Deneyim" },
              { v: "39", l: "İlçede Aktif" },
              { v: "7/24", l: "Destek Hattı" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-yellow-400">{s.v}</div>
                <div className="text-gray-500 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HIZMET KARTLARI (UZUN)
      ══════════════════════════════════════ */}
      <section id="hizmetler" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Hizmet Kataloğu</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Tüm Hizmetlerimiz</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              İnşaat ve sanayinin her aşamasında yanınızdayız. Her hizmet için detaylı bilgi ve fiyat alabilirsiniz.
            </p>
          </div>

          <div className="space-y-10">
            {hizmetler.map((h, idx) => (
              <div
                key={h.id}
                id={h.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
              >
                {/* ── Kart Başlık Şeridi ── */}
                <div
                  className="px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-6"
                  style={{ background: `linear-gradient(135deg, ${h.renk}18 0%, ${h.renk}05 100%)`, borderBottom: `2px solid ${h.renk}30` }}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm"
                      style={{ background: h.renk + "25", border: `2px solid ${h.renk}50` }}
                    >
                      {h.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                          style={{ background: h.renk }}
                        >
                          {h.badge}
                        </span>
                        <span className="text-gray-400 text-xs font-mono">{h.numara} / 07</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900">{h.title}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{h.altyazi}</p>
                    </div>
                  </div>
                  <Link
                    href={h.href}
                    className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition text-sm whitespace-nowrap flex-shrink-0 text-white hover:opacity-90 shadow-md"
                    style={{ background: h.renk }}
                  >
                    Detaylı Bilgi →
                  </Link>
                </div>

                <div className="p-8">
                  {/* ── Açıklama + Mini İstatistikler ── */}
                  <div className="grid lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-3">
                      <p className="text-gray-600 leading-relaxed text-base mb-6">{h.desc}</p>

                      {/* Alt Kategoriler */}
                      <div className="mb-6">
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Alt Kategoriler</div>
                        <div className="flex flex-wrap gap-2">
                          {h.altKategoriler.map((ak) => (
                            <span
                              key={ak.label}
                              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border"
                              style={{ background: h.renkLight, borderColor: h.renk + "40", color: h.renk }}
                            >
                              <span>{ak.icon}</span>
                              {ak.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Özellikler Listesi */}
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Neler Dahil?</div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {h.ozellikler.map((o) => (
                          <div key={o} className="flex items-start gap-3">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white"
                              style={{ background: h.renk }}
                            >
                              ✓
                            </div>
                            <span className="text-gray-700 text-sm">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mini İstatistikler */}
                    <div className="lg:col-span-1">
                      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: h.renk + "30" }}>
                        <div
                          className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-white"
                          style={{ background: h.renk }}
                        >
                          Rakamlarla
                        </div>
                        {h.istatistikler.map((ist, i) => (
                          <div
                            key={ist.l}
                            className={`px-5 py-4 ${i < h.istatistikler.length - 1 ? "border-b border-gray-100" : ""}`}
                          >
                            <div className="text-2xl font-black" style={{ color: h.renk }}>{ist.v}</div>
                            <div className="text-gray-500 text-xs mt-0.5">{ist.l}</div>
                          </div>
                        ))}
                        <div className="px-5 py-4 bg-gray-50">
                          <a
                            href="tel:05323039089"
                            className="block text-center text-sm font-bold py-2 rounded-xl text-white transition hover:opacity-90"
                            style={{ background: h.renk }}
                          >
                            📞 Teklif Al
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── SSS ── */}
                  <div className="border-t border-gray-100 pt-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                      {h.title} — Sık Sorulan Sorular
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {h.sss.map((item, i) => (
                        <div
                          key={item.s}
                          className="rounded-2xl p-5 border border-gray-100 bg-gray-50 hover:border-gray-200 transition"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5 text-white"
                              style={{ background: h.renk }}
                            >
                              S{i + 1}
                            </div>
                            <div>
                              <div className="font-black text-gray-900 text-sm mb-1.5">{item.s}</div>
                              <div className="text-gray-500 text-sm leading-relaxed">{item.c}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SÜREÇ
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Nasıl Çalışır?</span>
            <h2 className="text-4xl font-black mt-3 mb-4">6 Adımda Hizmet</h2>
            <p className="text-gray-400 text-lg">Aramaktan teslimata, her adımda sizi yönlendiriyoruz.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {surec.map((s, i) => (
              <div key={s.no} className="relative text-center">
                {i < surec.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-yellow-400/30 to-yellow-400/10" />
                )}
                <div className="w-16 h-16 bg-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 relative z-10">
                  {s.icon}
                </div>
                <div className="text-yellow-400 text-xs font-black tracking-widest mb-2">{s.no}</div>
                <h4 className="text-white font-black text-sm mb-2">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="tel:05323039089"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-5 rounded-2xl text-lg transition shadow-lg shadow-yellow-400/20"
            >
              📞 Hemen Başlayın — 0532 303 90 89
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KARŞILAŞTIRMA TABLOSU
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Karşılaştırma</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Hizmet Özet Tablosu</h2>
            <p className="text-gray-500 text-lg">Hangi hizmetin size uygun olduğunu bir bakışta görün.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-5 font-black text-base">Hizmet</th>
                  <th className="text-left px-6 py-5 font-bold">Kapsam / Süre</th>
                  <th className="text-left px-6 py-5 font-bold">Fiyatlandırma</th>
                  <th className="text-center px-5 py-5 font-bold">Sigortalı</th>
                  <th className="text-center px-5 py-5 font-bold">Operatör</th>
                  <th className="text-center px-5 py-5 font-bold">Kargo / Teslimat</th>
                  <th className="text-center px-5 py-5 font-bold">Acil Hizmet</th>
                </tr>
              </thead>
              <tbody>
                {karsilastirmaTablosu.map((r, i) => (
                  <tr
                    key={r.hizmet}
                    className={`border-b border-gray-100 hover:bg-yellow-50 transition ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 font-black text-gray-900">{r.hizmet}</td>
                    <td className="px-6 py-4 text-gray-600">{r.sure}</td>
                    <td className="px-6 py-4 text-gray-600">{r.fiyat}</td>
                    <td className="px-5 py-4 text-center text-lg">{r.sigorta ? "✅" : <span className="text-gray-300">—</span>}</td>
                    <td className="px-5 py-4 text-center text-lg">{r.operatör ? "✅" : <span className="text-gray-300">—</span>}</td>
                    <td className="px-5 py-4 text-center text-lg">{r.kargo ? "✅" : <span className="text-gray-300">—</span>}</td>
                    <td className="px-5 py-4 text-center text-lg">{r.acil ? "✅" : <span className="text-gray-300">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-center justify-center gap-6 text-sm text-gray-400">
            <span>✅ Dahil &amp; Aktif</span>
            <span className="text-gray-200">|</span>
            <span>— Bu hizmette geçerli değil</span>
            <span className="text-gray-200">|</span>
            <span>Tüm fiyatlar KDV hariçtir</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AVANTAJLAR
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div>
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Neden Biz?</span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                25 Yıl<br />Aynı<br />Güven
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Binlerce tamamlanan proje, tam sigorta güvencesi ve 7/24 erişilebilirlik ile
                İstanbul&apos;un tercih ettiği vinç şirketiyiz.
              </p>
              <a
                href="tel:05323039089"
                className="inline-block bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-black px-6 py-4 rounded-xl transition"
              >
                Hemen Arayın
              </a>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {avantajlar.map((a) => (
                <div
                  key={a.title}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-yellow-300 hover:shadow-md transition group"
                >
                  <div className="text-3xl flex-shrink-0">{a.icon}</div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-1 group-hover:text-yellow-600 transition">{a.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GENEL SSS
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">SSS</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-500 text-lg">Hizmetlerimiz hakkında en çok merak edilenler.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {genelSss.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-300 transition">
                <div className="flex items-start gap-4 p-6">
                  <div className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-black text-sm flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 mb-2">{item.s}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.c}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-yellow-400 rounded-3xl text-center">
            <div className="text-2xl font-black text-gray-900 mb-2">Sorunuz cevapsız mı kaldı?</div>
            <p className="text-gray-800 mb-6">Uzmanlarımız her soruya hızlıca yanıt verir.</p>
            <a
              href="tel:05323039089"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl transition"
            >
              📞 0532 303 90 89 — Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HİZMET LİNKLERİ GRİD (HIZLI ERİŞİM)
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Hızlı Erişim</span>
            <h2 className="text-3xl font-black text-white mt-3">Tüm Hizmet Sayfaları</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hizmetler.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/50 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: h.renk + "25" }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: h.renk }}>
                      {h.badge}
                    </div>
                    <div className="text-white font-bold text-sm group-hover:text-yellow-400 transition">{h.title}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{h.altyazi}</p>
                <div className="text-xs font-bold" style={{ color: h.renk }}>Sayfaya Git →</div>
              </Link>
            ))}

            {/* İletişim */}
            <Link
              href="/iletisim"
              className="group bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 hover:bg-yellow-400/20 hover:border-yellow-400 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-yellow-400/20 flex-shrink-0">
                  📩
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-0.5">Teklif</div>
                  <div className="text-yellow-400 font-bold text-sm">İletişime Geç</div>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">Projeniz için özel teklif alın.</p>
              <div className="text-xs font-bold text-yellow-400">Formu Doldur →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SON CTA BANNER
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <div className="text-4xl font-black text-gray-900 mb-3">
              Projeniz için doğru hizmeti seçelim.
            </div>
            <div className="text-gray-800 text-lg">
              7/24 danışma hattımızı arayın, uzmanımız sizi yönlendirsin.
            </div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-black px-10 py-5 rounded-2xl transition text-lg"
            >
              📞 Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-10 py-5 rounded-2xl transition text-lg"
            >
              Teklif Al →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
