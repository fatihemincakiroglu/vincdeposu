// Blog yazıları için TEK veri kaynağı.
// blog/page.tsx (liste) ve blog/[slug]/page.tsx (tekil yazı) buradan okur.

export interface BlogPost {
  slug: string;
  category: string;
  categoryColor?: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const categories = [
  { label: "Tümü", slug: "tumu", count: 13 },
  { label: "Vinç Kiralama", slug: "vinc-kiralama", count: 4 },
  { label: "İş Güvenliği", slug: "is-guvenligi", count: 3 },
  { label: "Ekipman Rehberi", slug: "ekipman-rehberi", count: 3 },
  { label: "Sektör Haberleri", slug: "sektor-haberleri", count: 2 },
  { label: "Bakım & Onarım", slug: "bakim-onarim", count: 1 },
];

export const featuredPost: BlogPost = {
  ...{
  slug: "istanbul-vinc-kiralama-rehberi-2024",
  category: "Vinç Kiralama",
  title: "İstanbul'da Vinç Kiralama: Fiyatlar, Türler ve Seçim Kriterleri (2024 Rehberi)",
  excerpt:
    "İstanbul'da inşaat, taşıma veya sanayi projeleriniz için doğru vinci nasıl seçersiniz? Sepetli vinçten kule vince, fiyat aralıklarından operatör gereksinimlerine kadar bilmeniz gereken her şey bu kapsamlı rehberde.",
  author: "Vinç Deposu Uzman Ekibi",
  date: "12 Haziran 2025",
  readTime: "9 dk",
  image: "🏗️",
  tags: ["Vinç Kiralama", "İstanbul", "Fiyat Rehberi"],
},
  categoryColor: "#F59E0B",
};

export const posts: BlogPost[] = [
  {
    slug: "is-guvenligi-vinc-operasyonlarinda-temel-kurallar",
    category: "İş Güvenliği",
    categoryColor: "#ef4444",
    title: "Vinç Operasyonlarında İş Güvenliği: Operatörlerin Bilmesi Gereken 10 Kural",
    excerpt:
      "Yüksekte çalışma, ağır yük taşıma ve vinç operasyonlarında iş kazalarının önüne geçmek için uyulması zorunlu temel güvenlik kuralları.",
    author: "Ahmet Karabulut",
    date: "5 Haziran 2025",
    readTime: "7 dk",
    image: "⚠️",
    tags: ["İş Güvenliği", "Operatör", "Yönetmelik"],
  },
  {
    slug: "sepetli-vinc-mi-makasli-platform-mi",
    category: "Ekipman Rehberi",
    categoryColor: "#f59e0b",
    title: "Sepetli Vinç mi, Makaslı Platform mu? Doğru Ekipmanı Seçme Kılavuzu",
    excerpt:
      "Her projenin farklı ihtiyacı var. Yükseklik, alan, zemin ve yük kapasitesine göre hangi ekipmanın daha verimli olduğunu karşılaştırmalı tabloyla inceleyin.",
    author: "Mehmet Demir",
    date: "28 Mayıs 2025",
    readTime: "6 dk",
    image: "🔧",
    tags: ["Ekipman Seçimi", "Sepetli Vinç", "Platform"],
  },
  {
    slug: "mobil-vinc-nasil-kiralanir",
    category: "Vinç Kiralama",
    categoryColor: "#3b82f6",
    title: "Mobil Vinç Kiralarken Sormanız Gereken 8 Kritik Soru",
    excerpt:
      "Kapasite, operatör dahil fiyatlandırma, sigorta şartları ve sözleşme detayları — kiralama öncesi mutlaka netleştirmeniz gereken konular.",
    author: "Fatma Yıldız",
    date: "20 Mayıs 2025",
    readTime: "5 dk",
    image: "🚛",
    tags: ["Mobil Vinç", "Kiralama", "Sözleşme"],
  },
  {
    slug: "kule-vinc-kurulum-ve-bakim",
    category: "Bakım & Onarım",
    categoryColor: "#8b5cf6",
    title: "Kule Vinç Kurulum Süreci ve Düzenli Bakımın Önemi",
    excerpt:
      "İnşaat projelerinin vazgeçilmezi kule vinçlerin kurulum aşamaları, sertifikasyon zorunlulukları ve dönemsel bakım programları hakkında detaylı bilgi.",
    author: "Vinç Deposu Uzman Ekibi",
    date: "14 Mayıs 2025",
    readTime: "8 dk",
    image: "🏢",
    tags: ["Kule Vinç", "Kurulum", "Bakım"],
  },
  {
    slug: "insaat-sektorunde-vinc-teknolojileri-2024",
    category: "Sektör Haberleri",
    categoryColor: "#10b981",
    title: "2024-2025 İnşaat Sektöründe Vinç Teknolojileri: Trendler ve Yenilikler",
    excerpt:
      "Elektrikli vinçler, uzaktan kontrol sistemleri ve IoT entegrasyonu — modern inşaat projelerinde verimliliği artıran teknolojik gelişmelere genel bakış.",
    author: "Emre Şahin",
    date: "7 Mayıs 2025",
    readTime: "6 dk",
    image: "⚡",
    tags: ["Teknoloji", "Elektrikli Vinç", "İnovasyon"],
  },
  {
    slug: "forklift-ve-telehandler-karsilastirma",
    category: "Ekipman Rehberi",
    categoryColor: "#f59e0b",
    title: "Forklift ve Telehandler: Hangi Durumlarda Hangisi Daha Avantajlı?",
    excerpt:
      "Depo, şantiye ve tarım alanlarında forklift ile teleskopik yükleyicinin güçlü ve zayıf yanlarını yan yana karşılaştırdık. Projenize göre karar verin.",
    author: "Kemal Arslan",
    date: "30 Nisan 2025",
    readTime: "5 dk",
    image: "🚜",
    tags: ["Forklift", "Telehandler", "Karşılaştırma"],
  },
  {
    slug: "ahtapot-vinc-dar-alanlarda-cozum",
    category: "Ekipman Rehberi",
    categoryColor: "#f59e0b",
    title: "Ahtapot Vinç: Dar Alanlar ve Zemin Koşullarında Neden Öne Çıkıyor?",
    excerpt:
      "Şehir merkezleri, tarihi yapılar ve zorlu arazi koşulları için tasarlanan ahtapot vinçlerin teknik özellikleri ve kullanım senaryoları.",
    author: "Serkan Polat",
    date: "22 Nisan 2025",
    readTime: "4 dk",
    image: "🐙",
    tags: ["Ahtapot Vinç", "Dar Alan", "Kentsel"],
  },
  {
    slug: "vinc-operatoru-belgesi-nasil-alinir",
    category: "İş Güvenliği",
    categoryColor: "#ef4444",
    title: "Vinç Operatörü Belgesi Nasıl Alınır? Süreç, Şartlar ve Sınavlar",
    excerpt:
      "Türkiye'de vinç operatörü olmak için gereken eğitimler, MEB onaylı sertifika programları ve sınav süreçleri hakkında adım adım rehber.",
    author: "Zeynep Kaya",
    date: "15 Nisan 2025",
    readTime: "7 dk",
    image: "📋",
    tags: ["Sertifikasyon", "Operatör Belgesi", "Eğitim"],
  },
  {
    slug: "istanbul-buyuk-projeler-vinc-ihtiyaci",
    category: "Sektör Haberleri",
    categoryColor: "#10b981",
    title: "İstanbul'un Mega Projeleri ve Vinç Sektörüne Etkisi",
    excerpt:
      "Kanal İstanbul, 3. havalimanı genişlemesi ve kentsel dönüşüm projeleri — bu devasa altyapı hamleleri vinç talebini nasıl şekillendiriyor?",
    author: "Vinç Deposu Uzman Ekibi",
    date: "8 Nisan 2025",
    readTime: "6 dk",
    image: "🌉",
    tags: ["İstanbul", "Mega Proje", "Talep"],
  },
  {
    slug: "paletli-vinc-agir-yuk-tasima",
    category: "Vinç Kiralama",
    categoryColor: "#3b82f6",
    title: "Paletli Vinç ile Ağır Yük Taşıma: Kapasite Hesaplama ve Güvenlik",
    excerpt:
      "500 ton kapasiteye kadar ulaşabilen paletli vinçlerde yük hesaplama, zemin taşıma kapasitesi ve emniyet faktörü nasıl belirlenir?",
    author: "Mustafa Çelik",
    date: "1 Nisan 2025",
    readTime: "8 dk",
    image: "⚓",
    tags: ["Paletli Vinç", "Ağır Yük", "Kapasite"],
  },
  {
    slug: "vinc-kiralama-fiyatlarini-etkileyen-faktorler",
    category: "Vinç Kiralama",
    categoryColor: "#3b82f6",
    title: "Vinç Kiralama Fiyatlarını Etkileyen 7 Faktör",
    excerpt:
      "Neden aynı vinç farklı fiyatlara kiralanır? Kapasite, süre, operatör, mesafe, sigorta ve sezon gibi değişkenlerin fiyata yansıması.",
    author: "Fatma Yıldız",
    date: "24 Mart 2025",
    readTime: "5 dk",
    image: "💰",
    tags: ["Fiyatlandırma", "Vinç Kiralama", "Maliyet"],
  },
  {
    slug: "is-guvenligi-ekipmanlari-yuksekte-calisma",
    category: "İş Güvenliği",
    categoryColor: "#ef4444",
    title: "Yüksekte Çalışmada Kişisel Koruyucu Donanım (KKD) Rehberi",
    excerpt:
      "Emniyet kemeri, baret, güvenlik ayakkabısı ve düşme engelleyici sistemler — yüksek riskli çalışma ortamlarında zorunlu ekipmanlar.",
    author: "Ahmet Karabulut",
    date: "17 Mart 2025",
    readTime: "6 dk",
    image: "🦺",
    tags: ["KKD", "Yüksekte Çalışma", "Güvenlik"],
  },
  {
    slug: "helikopter-vinc-ozel-projeler",
    category: "Ekipman Rehberi",
    categoryColor: "#f59e0b",
    title: "Helikopter Vinç: Ulaşılmaz Noktalarda Yük Taşımanın Tek Yolu",
    excerpt:
      "Dağlık araziler, tarihi yapılar ve normal ekipmanların erişemediği noktalarda helikopter vinçlerin kullanım alanları ve operasyonel gereksinimleri.",
    author: "Serkan Polat",
    date: "10 Mart 2025",
    readTime: "5 dk",
    image: "🚁",
    tags: ["Helikopter Vinç", "Özel Operasyon", "Ulaşılmaz Alan"],
  },
];

export const allPosts: BlogPost[] = [featuredPost, ...posts];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}
