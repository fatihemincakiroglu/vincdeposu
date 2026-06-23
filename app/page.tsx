import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinç Kiralama | Kiralık Vinç | Sepetli Vinç Kiralama",
  description:
    "Vinç Deposu, inşaat ve sanayi sektörlerinde profesyonel vinç kiralama ve satış hizmetleri sunar. Detaylı bilgi için: 0532 303 90 89",
};

const hizmetler = [
  { icon: "🏗️", title: "Kiralık Vinç", desc: "Her ölçekte inşaat ve sanayi projesi için kiralık vinç hizmeti.", href: "/kiralik-vinc" },
  { icon: "🦺", title: "Operatörlü Hizmet", desc: "Sertifikalı operatörlerimizle güvenli ve profesyonel vinç operasyonu.", href: "/operatorlu-vinc-hizmeti" },
  { icon: "🔧", title: "Bakım & Onarım", desc: "Vinçlerinizin uzun ömürlü kullanımı için periyodik bakım hizmeti.", href: "/vinc-bakim-ve-onarim" },
  { icon: "🚛", title: "Taşıma & Lojistik", desc: "Vinç taşıma ve lojistik süreçlerinde güvenilir çözümler.", href: "/vinc-tasima-ve-lojistik" },
  { icon: "📋", title: "Sertifikasyon", desc: "Vinç operatörleri için eğitim ve sertifikasyon programları.", href: "/vinc-sertifikasyon-ve-egitim" },
  { icon: "🚨", title: "Acil Hizmet", desc: "7/24 acil vinç hizmetleriyle her an yanınızdayız.", href: "/vinc-acil-durum-hizmetleri" },
];

const vincCesitleri = [
  { title: "Sepetli Vinç", href: "/sepetli-vinc" },
  { title: "Mobil Vinç", href: "/mobil-vinc" },
  { title: "Kule Vinç", href: "/kule-vinc" },
  { title: "Ahtapot Vinç", href: "/ahtapot-vinc" },
  { title: "Paletli Vinç", href: "/paletli-vinc" },
  { title: "Portal Vinç", href: "/portal-vinc" },
  { title: "Kamyon Üstü Vinç", href: "/kamyon-ustu-vinc" },
  { title: "Raylı Vinç", href: "/rayli-vinc" },
  { title: "Monoray Vinç", href: "/monoray-vinc" },
  { title: "Sabit Vinç", href: "/sabit-vinc" },
  { title: "Minik Vinç", href: "/minik-vinc" },
  { title: "Helikopter Vinç", href: "/helikopter-vinc" },
];

const ilceler = [
  "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir",
  "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu",
  "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt",
  "Eyüp", "Fatih", "Kadıköy", "Kağıthane", "Kartal",
  "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
  "Silivri", "Şişli", "Sultanbeyli", "Sultangazi", "Tuzla",
  "Ümraniye", "Üsküdar", "Zeytinburnu",
];

function ilceToSlug(ilce: string) {
  return ilce
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
    .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/İ/g, "i");
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-4">
            İstanbul&apos;un Güvenilir Vinç Partneri
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Profesyonel<br />
            <span className="text-yellow-400">Vinç Kiralama</span><br />
            Hizmetleri
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            İstanbul&apos;un tüm ilçelerinde 7/24 kiralık vinç, manlift ve platform hizmetleri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 0532 303 90 89
            </a>
            <Link
              href="/kiralik-vinc"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              Vinçleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-500 text-lg">İnşaat ve sanayinin her ihtiyacı için profesyonel çözümler</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hizmetler.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group border border-gray-100 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-500 transition">{h.title}</h3>
                <p className="text-gray-500 text-sm">{h.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vinç Çeşitleri */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Vinç Çeşitleri</h2>
            <p className="text-gray-500 text-lg">Projenize uygun vinç türünü seçin</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {vincCesitleri.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="bg-white border border-gray-100 rounded-xl px-4 py-5 text-center font-semibold text-gray-700 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition"
              >
                {v.title}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/vinc-cesitleri" className="text-yellow-600 font-semibold hover:underline">
              Tüm Vinç Çeşitleri →
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-16 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">Neden Vinç Deposu?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "7/24", label: "Kesintisiz Hizmet" },
              { value: "39", label: "İlçede Hizmet" },
              { value: "100+", label: "Vinç Çeşidi" },
              { value: "1000+", label: "Mutlu Müşteri" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6">
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İlçe Linkleri (SEO) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">İstanbul Vinç Kiralama Bölgeleri</h2>
            <p className="text-gray-500">İstanbul&apos;un tüm ilçelerinde vinç kiralama hizmeti veriyoruz</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ilceler.map((ilce) => (
              <Link
                key={ilce}
                href={`/${ilceToSlug(ilce)}-vinc-kiralama`}
                className="text-center text-sm text-gray-600 hover:text-yellow-600 hover:underline py-1"
              >
                {ilce}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Hemen Teklif Alın</h2>
          <p className="text-gray-400 mb-8">Projeniz için en uygun vinç çözümünü birlikte belirleyelim.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 Hemen Ara
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
    </>
  );
}
