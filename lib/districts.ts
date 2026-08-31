// İstanbul'un 39 ilçesi için TEK ve DOĞRU veri kaynağı.
// Avrupa/Anadolu yaka ayrımı coğrafi/idari gerçeğe göre yapılmıştır:
// - Adalar ve Şile, Anadolu (Asya) yakasındadır (çoğu eski listede hatalı şekilde Avrupa'ya konmuştu).
// - Eyüp, 2019'da Eyüpsultan olarak yeniden adlandırıldı; ayrı bir ilçe DEĞİLDİR,
//   bu nedenle listede sadece "Eyüpsultan" yer alır (bkz. next.config.ts'teki /eyup-vinc-kiralama yönlendirmesi).
// - Ataşehir, 2008'de kurulan bir ilçedir ve 39'luk listede mutlaka yer almalıdır.

export interface Ilce {
  ad: string;
  slug: string;
}

export const avrupaYakasi: Ilce[] = [
  { ad: "Arnavutköy", slug: "arnavutkoy" },
  { ad: "Avcılar", slug: "avcilar" },
  { ad: "Bağcılar", slug: "bagcilar" },
  { ad: "Bahçelievler", slug: "bahcelievler" },
  { ad: "Bakırköy", slug: "bakirkoy" },
  { ad: "Başakşehir", slug: "basaksehir" },
  { ad: "Bayrampaşa", slug: "bayrampasa" },
  { ad: "Beşiktaş", slug: "besiktas" },
  { ad: "Beylikdüzü", slug: "beylikduzu" },
  { ad: "Beyoğlu", slug: "beyoglu" },
  { ad: "Büyükçekmece", slug: "buyukcekmece" },
  { ad: "Çatalca", slug: "catalca" },
  { ad: "Esenler", slug: "esenler" },
  { ad: "Esenyurt", slug: "esenyurt" },
  { ad: "Eyüpsultan", slug: "eyupsultan" },
  { ad: "Fatih", slug: "fatih" },
  { ad: "Gaziosmanpaşa", slug: "gaziosmanpasa" },
  { ad: "Güngören", slug: "gungoren" },
  { ad: "Kağıthane", slug: "kagithane" },
  { ad: "Küçükçekmece", slug: "kucukcekmece" },
  { ad: "Sarıyer", slug: "sariyer" },
  { ad: "Silivri", slug: "silivri" },
  { ad: "Şişli", slug: "sisli" },
  { ad: "Sultangazi", slug: "sultangazi" },
  { ad: "Zeytinburnu", slug: "zeytinburnu" },
];

export const anadoluYakasi: Ilce[] = [
  { ad: "Adalar", slug: "adalar" },
  { ad: "Ataşehir", slug: "atasehir" },
  { ad: "Beykoz", slug: "beykoz" },
  { ad: "Çekmeköy", slug: "cekmekoy" },
  { ad: "Kadıköy", slug: "kadikoy" },
  { ad: "Kartal", slug: "kartal" },
  { ad: "Maltepe", slug: "maltepe" },
  { ad: "Pendik", slug: "pendik" },
  { ad: "Sancaktepe", slug: "sancaktepe" },
  { ad: "Sultanbeyli", slug: "sultanbeyli" },
  { ad: "Şile", slug: "sile" },
  { ad: "Tuzla", slug: "tuzla" },
  { ad: "Ümraniye", slug: "umraniye" },
  { ad: "Üsküdar", slug: "uskudar" },
];

export const tumIlceler: Ilce[] = [...avrupaYakasi, ...anadoluYakasi];

// Toplam kontrol: 25 + 14 = 39
