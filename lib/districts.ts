// İstanbul'un 39 ilçesi için TEK ve DOĞRU veri kaynağı.
// Avrupa/Anadolu yaka ayrımı coğrafi/idari gerçeğe göre yapılmıştır:
// - Adalar ve Şile, Anadolu (Asya) yakasındadır (çoğu eski listede hatalı şekilde Avrupa'ya konmuştu).
// - Eyüp, 2019'da Eyüpsultan olarak yeniden adlandırıldı; ayrı bir ilçe DEĞİLDİR,
//   bu nedenle listede sadece "Eyüpsultan" yer alır (bkz. next.config.ts'teki /eyup-vinc-kiralama yönlendirmesi).
// - Ataşehir, 2008'de kurulan bir ilçedir ve 39'luk listede mutlaka yer almalıdır.

export interface Ilce {
  ad: string;
  slug: string;
  emoji: string;
}

export const avrupaYakasi: Ilce[] = [
  { ad: "Arnavutköy", slug: "arnavutkoy", emoji: "✈️" },
  { ad: "Avcılar", slug: "avcilar", emoji: "🏙️" },
  { ad: "Bağcılar", slug: "bagcilar", emoji: "🏗️" },
  { ad: "Bahçelievler", slug: "bahcelievler", emoji: "🌳" },
  { ad: "Bakırköy", slug: "bakirkoy", emoji: "🏖️" },
  { ad: "Başakşehir", slug: "basaksehir", emoji: "🏘️" },
  { ad: "Bayrampaşa", slug: "bayrampasa", emoji: "🏭" },
  { ad: "Beşiktaş", slug: "besiktas", emoji: "⚓" },
  { ad: "Beylikdüzü", slug: "beylikduzu", emoji: "🏢" },
  { ad: "Beyoğlu", slug: "beyoglu", emoji: "🌉" },
  { ad: "Büyükçekmece", slug: "buyukcekmece", emoji: "🌊" },
  { ad: "Çatalca", slug: "catalca", emoji: "🌿" },
  { ad: "Esenler", slug: "esenler", emoji: "🏙️" },
  { ad: "Esenyurt", slug: "esenyurt", emoji: "🏗️" },
  { ad: "Eyüpsultan", slug: "eyupsultan", emoji: "🕌" },
  { ad: "Fatih", slug: "fatih", emoji: "🏛️" },
  { ad: "Gaziosmanpaşa", slug: "gaziosmanpasa", emoji: "🏘️" },
  { ad: "Güngören", slug: "gungoren", emoji: "🏙️" },
  { ad: "Kağıthane", slug: "kagithane", emoji: "🏭" },
  { ad: "Küçükçekmece", slug: "kucukcekmece", emoji: "🌊" },
  { ad: "Sarıyer", slug: "sariyer", emoji: "🌲" },
  { ad: "Silivri", slug: "silivri", emoji: "🌾" },
  { ad: "Şişli", slug: "sisli", emoji: "🏢" },
  { ad: "Sultangazi", slug: "sultangazi", emoji: "🏘️" },
  { ad: "Zeytinburnu", slug: "zeytinburnu", emoji: "⚓" },
];

export const anadoluYakasi: Ilce[] = [
  { ad: "Adalar", slug: "adalar", emoji: "🏝️" },
  { ad: "Ataşehir", slug: "atasehir", emoji: "🏢" },
  { ad: "Beykoz", slug: "beykoz", emoji: "🌲" },
  { ad: "Çekmeköy", slug: "cekmekoy", emoji: "🌿" },
  { ad: "Kadıköy", slug: "kadikoy", emoji: "🎨" },
  { ad: "Kartal", slug: "kartal", emoji: "🏭" },
  { ad: "Maltepe", slug: "maltepe", emoji: "🏖️" },
  { ad: "Pendik", slug: "pendik", emoji: "⚓" },
  { ad: "Sancaktepe", slug: "sancaktepe", emoji: "🏗️" },
  { ad: "Sultanbeyli", slug: "sultanbeyli", emoji: "🏘️" },
  { ad: "Şile", slug: "sile", emoji: "🏖️" },
  { ad: "Tuzla", slug: "tuzla", emoji: "🚢" },
  { ad: "Ümraniye", slug: "umraniye", emoji: "🏙️" },
  { ad: "Üsküdar", slug: "uskudar", emoji: "🕌" },
];

export const tumIlceler: Ilce[] = [...avrupaYakasi, ...anadoluYakasi];

// Toplam kontrol: 25 + 14 = 39
