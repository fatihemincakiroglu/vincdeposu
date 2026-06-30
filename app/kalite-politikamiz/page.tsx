import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kalite Politikamız",
  description:
    "Vinç Deposu kalite politikası: iş güvenliği, ekipman bakım standartları, sertifikalı operatörler ve sürekli iyileştirme ilkelerimiz.",
  alternates: {
    canonical: "/kalite-politikamiz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ilkeler = [
  {
    icon: "🛡️",
    baslik: "İş Güvenliği Önceliğimizdir",
    aciklama:
      "Vinç ve manlift operasyonlarında insan hayatı her şeyin önünde gelir. Tüm operasyonlarımız ISG mevzuatına ve saha güvenlik prosedürlerine uygun şekilde planlanır ve yürütülür.",
  },
  {
    icon: "🔧",
    baslik: "Ekipman Bakımı ve Kalite Standartları",
    aciklama:
      "Filomuzdaki her ekipman, üretici talimatlarına uygun periyodik bakımdan geçer. Bakım kayıtları düzenli olarak tutulur ve arıza riski sahaya çıkmadan önce giderilir.",
  },
  {
    icon: "👷",
    baslik: "Sertifikalı ve Eğitimli Personel",
    aciklama:
      "Operatörlerimiz; MEB onaylı operatörlük belgesine ve güncel ISG eğitim sertifikalarına sahiptir. Düzenli olarak yenileme eğitimlerine katılırlar.",
  },
  {
    icon: "📋",
    baslik: "Şeffaf ve Doğru Bilgilendirme",
    aciklama:
      "Müşterilerimize sunduğumuz teklif ve sözleşmelerde fiyat, kapsam ve sorumluluklar açık şekilde belirtilir; saklı/gizli ücretlendirme uygulanmaz.",
  },
  {
    icon: "📈",
    baslik: "Sürekli İyileştirme",
    aciklama:
      "Her proje sonunda elde edilen geri bildirimler değerlendirilir; süreçlerimizi, ekipman parkımızı ve hizmet kalitemizi sürekli geliştiririz.",
  },
  {
    icon: "⚖️",
    baslik: "Yasal ve Çevresel Uyumluluk",
    aciklama:
      "Tüm operasyonlarımız ilgili kanun, yönetmelik ve teknik standartlara uygun şekilde yürütülür. Çevreye olan etkiyi azaltacak şekilde sorumlu ekipman kullanımını destekleriz.",
  },
];

const taahhutler = [
  "Tüm ekipmanlarımız tam sigortalıdır.",
  "Operatör hizmeti sertifikalı ve deneyimli personel tarafından sağlanır.",
  "Kiralama öncesi saha koşulları değerlendirilerek en uygun ekipman önerilir.",
  "7/24 teknik destek hattımız aktif şekilde hizmet verir.",
  "Şeffaf fiyatlandırma ve yazılı sözleşme ile çalışırız.",
];

export default function KalitePolitikamizPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-20">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">
            25 Yıllık Sektör Tecrübesi
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Kalite Politikamız</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Vinç Deposu olarak; iş güvenliğinden ekipman bakımına, sertifikalı operatörlerden şeffaf
            fiyatlandırmaya kadar her adımda yüksek kalite standardını sürdürmeyi taahhüt ediyoruz.
          </p>
        </div>
      </section>

      {/* İlkeler */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">İlkelerimiz</p>
            <h2 className="text-4xl font-black text-gray-900">Kalite Yaklaşımımız</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ilkeler.map((i) => (
              <div key={i.baslik} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-yellow-300 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{i.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{i.baslik}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{i.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taahhütler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Müşterilerimize</p>
            <h2 className="text-4xl font-black text-gray-900">Taahhütlerimiz</h2>
          </div>
          <div className="space-y-3">
            {taahhutler.map((t) => (
              <div key={t} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-green-600 font-bold text-lg shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4">Kalite standardımızı sahada görün</h2>
          <p className="text-gray-400 mb-8">Projeniz için hemen teklif alın, ekibimizle tanışın.</p>
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
