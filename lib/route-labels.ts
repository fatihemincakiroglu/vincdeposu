// Site genelinde breadcrumb (ve gerektiğinde başka yerlerde) kullanılan
// URL segmenti -> Türkçe görünen ad eşlemesi.
// Yeni bir sayfa eklediğinizde buraya bir satır eklemeniz yeterlidir;
// eklemezseniz sistem segmenti otomatik olarak okunabilir hale çevirir (bkz. prettify).

export const routeLabels: Record<string, string> = {
  // Ana ürün / hizmet sayfaları
  "kiralik-vinc": "Kiralık Vinç",
  "kiralik-manlift": "Kiralık Manlift",
  "vinc-kiralama": "Vinç Kiralama",
  "satilik-vinc": "Satılık Vinç",
  "hizmetler": "Hizmetler",
  "urunler": "Ürünler",
  "vinc-cesitleri": "Vinç Çeşitleri",
  "blog": "Blog",
  "iletisim": "İletişim",
  "referans": "Referanslar",
  "sik-sorulan-sorular": "Sık Sorulan Sorular",
  "gizlilik-politikasi": "Gizlilik Politikası",
  "kalite-politikamiz": "Kalite Politikamız",

  // Vinç çeşitleri
  "sepetli-vinc": "Sepetli Vinç",
  "mobil-vinc": "Mobil Vinç",
  "kule-vinc": "Kule Vinç",
  "ahtapot-vinc": "Ahtapot Vinç",
  "kamyon-ustu-vinc": "Kamyon Üstü Vinç",
  "paletli-vinc": "Paletli Vinç",
  "rayli-vinc": "Raylı Vinç",
  "portal-vinc": "Portal Vinç",
  "monoray-vinc": "Monoray Vinç",
  "sabit-vinc": "Sabit Vinç",
  "minik-vinc": "Minik Vinç",
  "helikopter-vinc": "Helikopter Vinç",

  // Platform / manlift / diğer ekipmanlar
  "makasli-platform": "Makaslı Platform",
  "eklemli-platform": "Eklemli Platform",
  "orumcek-platform": "Örümcek Platform",
  "forklift-kiralama": "Forklift Kiralama",
  "telehandler-kiralama": "Telehandler Kiralama",

  // Hizmetler alt sayfaları
  "operatorlu-vinc-hizmeti": "Operatörlü Vinç Hizmeti",
  "vinc-bakim-ve-onarim": "Vinç Bakım ve Onarım",
  "vinc-sertifikasyon-ve-egitim": "Vinç Sertifikasyon ve Eğitim",
  "vinc-yedek-parca-ve-aksesuar": "Vinç Yedek Parça ve Aksesuar",
  "vinc-acil-durum-hizmetleri": "Vinç Acil Durum Hizmetleri",
  "vinc-tasima-ve-lojistik": "Vinç Taşıma ve Lojistik",

  // Kurumsal
  "kurumsal": "Kurumsal",
  "hakkimizda": "Hakkımızda",
  "misyon-vizyon": "Misyon ve Vizyon",
  "yonetim-kurulu": "Yönetim Kurulu",
  "sosyal-sorumluluk": "Sosyal Sorumluluk",
  "basin-ve-medya": "Basın ve Medya",
  "kariyer": "Kariyer",

  // İlçeler
  "istanbul-vinc-kiralama": "İstanbul Vinç Kiralama",
  "adalar-vinc-kiralama": "Adalar Vinç Kiralama",
  "arnavutkoy-vinc-kiralama": "Arnavutköy Vinç Kiralama",
  "avcilar-vinc-kiralama": "Avcılar Vinç Kiralama",
  "bagcilar-vinc-kiralama": "Bağcılar Vinç Kiralama",
  "bahcelievler-vinc-kiralama": "Bahçelievler Vinç Kiralama",
  "bakirkoy-vinc-kiralama": "Bakırköy Vinç Kiralama",
  "basaksehir-vinc-kiralama": "Başakşehir Vinç Kiralama",
  "bayrampasa-vinc-kiralama": "Bayrampaşa Vinç Kiralama",
  "besiktas-vinc-kiralama": "Beşiktaş Vinç Kiralama",
  "beykoz-vinc-kiralama": "Beykoz Vinç Kiralama",
  "beylikduzu-vinc-kiralama": "Beylikdüzü Vinç Kiralama",
  "beyoglu-vinc-kiralama": "Beyoğlu Vinç Kiralama",
  "buyukcekmece-vinc-kiralama": "Büyükçekmece Vinç Kiralama",
  "catalca-vinc-kiralama": "Çatalca Vinç Kiralama",
  "cekmekoy-vinc-kiralama": "Çekmeköy Vinç Kiralama",
  "esenler-vinc-kiralama": "Esenler Vinç Kiralama",
  "esenyurt-vinc-kiralama": "Esenyurt Vinç Kiralama",
  "eyup-vinc-kiralama": "Eyüp Vinç Kiralama",
  "eyupsultan-vinc-kiralama": "Eyüpsultan Vinç Kiralama",
  "fatih-vinc-kiralama": "Fatih Vinç Kiralama",
  "gaziosmanpasa-vinc-kiralama": "Gaziosmanpaşa Vinç Kiralama",
  "gungoren-vinc-kiralama": "Güngören Vinç Kiralama",
  "kadikoy-vinc-kiralama": "Kadıköy Vinç Kiralama",
  "kagithane-vinc-kiralama": "Kağıthane Vinç Kiralama",
  "kartal-vinc-kiralama": "Kartal Vinç Kiralama",
  "kucukcekmece-vinc-kiralama": "Küçükçekmece Vinç Kiralama",
  "maltepe-vinc-kiralama": "Maltepe Vinç Kiralama",
  "pendik-vinc-kiralama": "Pendik Vinç Kiralama",
  "sancaktepe-vinc-kiralama": "Sancaktepe Vinç Kiralama",
  "sariyer-vinc-kiralama": "Sarıyer Vinç Kiralama",
  "sile-vinc-kiralama": "Şile Vinç Kiralama",
  "silivri-vinc-kiralama": "Silivri Vinç Kiralama",
  "sisli-vinc-kiralama": "Şişli Vinç Kiralama",
  "sultanbeyli-vinc-kiralama": "Sultanbeyli Vinç Kiralama",
  "sultangazi-vinc-kiralama": "Sultangazi Vinç Kiralama",
  "tuzla-vinc-kiralama": "Tuzla Vinç Kiralama",
  "umraniye-vinc-kiralama": "Ümraniye Vinç Kiralama",
  "uskudar-vinc-kiralama": "Üsküdar Vinç Kiralama",
  "zeytinburnu-vinc-kiralama": "Zeytinburnu Vinç Kiralama",
};

/** Sözlükte karşılığı olmayan bir segmenti okunabilir bir başlığa çevirir. */
function prettify(segment: string): string {
  const decoded = decodeURIComponent(segment);
  return decoded
    .split("-")
    .map((w) => w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1))
    .join(" ");
}

export function labelForSegment(segment: string): string {
  return routeLabels[segment] ?? prettify(segment);
}
