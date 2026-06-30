import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/satilik-vinc",
  },
  title: "Satılık Vinç | Yeni ve İkinci El Vinç Modelleri",
  description:
    "Mobil vinç, kule vinç, köprülü vinç ve portal vinç dahil tüm vinç türlerinde sıfır ve ikinci el satılık modeller. Liebherr, Tadano, Grove, Terex markaları. 7/24 hizmet: 0532 303 90 89",
};

const vincTurleri = [
  {
    icon: "🏗️",
    title: "Mobil Vinç Satışları",
    desc: "Her zemine uygun, farklı tonaj seçenekleriyle en geniş satış hacmine sahip vinç kategorisi.",
    fiyat: "Teklif alınız",
    href: "/satilik-vinc/mobil-vinc",
    ozellikler: ["Geniş tonaj aralığı", "Hızlı sevkiyat", "Marka çeşitliliği"],
  },
  {
    icon: "🏢",
    title: "Kule Vinç Satışları",
    desc: "İnşaat projeleri için sabit ve tırmanmalı modelleriyle uzun vadeli yatırım çözümü.",
    fiyat: "Teklif alınız",
    href: "/satilik-vinc/kule-vinc",
    ozellikler: ["Sabit & tırmanmalı", "Yüksek kanca yükü", "B2B proje uyumu"],
  },
  {
    icon: "🏭",
    title: "Köprülü Vinç Satışları",
    desc: "Fabrika ve depo içi taşımacılıkta yüksek kapasiteli, raylı sistemle çalışan endüstriyel çözüm.",
    fiyat: "Teklif alınız",
    href: "/satilik-vinc/koprulu-vinc",
    ozellikler: ["Endüstriyel kapasite", "Raylı sistem", "Sürekli operasyon"],
  },
  {
    icon: "🌉",
    title: "Portal (Gantry) Vinç Satışları",
    desc: "Açık alan kaldırma işlerinde tersane, liman ve lojistik sektörüne yönelik güçlü model.",
    fiyat: "Teklif alınız",
    href: "/satilik-vinc/portal-vinc",
    ozellikler: ["Açık alan kullanımı", "Yüksek taşıma kapasitesi", "Liman & tersane uyumu"],
  },
];

const markalar = [
  { icon: "🇩🇪", title: "Liebherr Satılık Vinç", desc: "Almanya menşeli, yüksek dayanıklılık ve geniş model yelpazesiyle bilinen marka.", href: "/satilik-vinc/liebherr" },
  { icon: "🇯🇵", title: "Tadano Satılık Vinç", desc: "Japon mühendisliğiyle üretilen, hassas kontrol sistemlerine sahip mobil vinç modelleri.", href: "/satilik-vinc/tadano" },
  { icon: "🇺🇸", title: "Grove Satılık Vinç", desc: "Kompakt yapısı ve manevra kabiliyetiyle şehir içi projelerde tercih edilen marka.", href: "/satilik-vinc/grove" },
  { icon: "🇺🇸", title: "Terex Satılık Vinç", desc: "Ağır tonajlı projelerde dayanıklılığı ve geniş yedek parça desteğiyle öne çıkan marka.", href: "/satilik-vinc/terex" },
];

const kapasiteler = [
  { icon: "⚖️", title: "25 Ton Satılık Vinç", desc: "Şehir içi ve orta ölçekli inşaat projeleri için ekonomik ve pratik seçenek.", href: "/satilik-vinc/25-ton" },
  { icon: "⚖️", title: "50 Ton Satılık Vinç", desc: "Endüstriyel tesis ve büyük inşaat sahalarında dengeli kapasite-maliyet oranı sunar.", href: "/satilik-vinc/50-ton" },
  { icon: "⚖️", title: "100 Ton ve Üzeri Satılık Vinç", desc: "Enerji, petrokimya ve ağır sanayi projelerinde maksimum kaldırma gücü sağlar.", href: "/satilik-vinc/100-ton-uzeri" },
];

const fiyatTablosu = [
  { tur: "Mobil Vinç (25-50 Ton)", fiyat: "Teklif alınız" },
  { tur: "Kule Vinç", fiyat: "Teklif alınız" },
  { tur: "Köprülü Vinç", fiyat: "Teklif alınız" },
  { tur: "Portal (Gantry) Vinç", fiyat: "Teklif alınız" },
  { tur: "100 Ton ve Üzeri Mobil Vinç", fiyat: "Teklif alınız" },
  { tur: "İkinci El Vinç Modelleri", fiyat: "Teklif alınız" },
];

const avantajlar = [
  { icon: "💰", title: "Maliyet Avantajları", desc: "Sıfır araç fiyatına göre çok daha ekonomik bütçeyle ihtiyacınıza uygun vinç sahibi olursunuz." },
  { icon: "🚚", title: "Hızlı Teslimat Seçenekleri", desc: "Stoktaki ikinci el modeller, üretim ve sipariş süresi olmadan kısa sürede sahanıza teslim edilir." },
  { icon: "🔧", title: "Servis ve Yedek Parça Desteği", desc: "Satış sonrası servis ağımız ve yedek parça desteğimizle aracınızın çalışır durumda kalmasını sağlarız." },
];

const dikkatEdilmesiGerekenler = [
  { icon: "⏱️", title: "Çalışma Saati ve Bakım Geçmişi", desc: "Aracın toplam çalışma saati ve periyodik bakım kayıtları, kalan ömrü hakkında en doğru bilgiyi verir." },
  { icon: "🔍", title: "Ekspertiz ve Teknik Muayene", desc: "Bağımsız ekspertiz raporu, hidrolik sistem, şasi ve kaldırma mekanizmasının gerçek durumunu ortaya koyar." },
  { icon: "📄", title: "Belge ve Ruhsat Kontrolü", desc: "Araç ruhsatı, muayene belgesi ve varsa ithalat evraklarının eksiksiz olması yasal sorunları önler." },
];

const ikinciElModeller = [
  { icon: "🏗️", title: "İkinci El Mobil Vinç", desc: "Farklı tonaj seçenekleriyle en çok aranan ikinci el kategorisi.", href: "/satilik-vinc/ikinci-el/mobil-vinc" },
  { icon: "🏢", title: "İkinci El Kule Vinç", desc: "Uzun vadeli inşaat projeleri için ekonomik yatırım seçeneği.", href: "/satilik-vinc/ikinci-el/kule-vinc" },
  { icon: "🦾", title: "İkinci El Paletli Vinç", desc: "Zorlu arazi koşullarına uygun, muayeneli ikinci el modeller.", href: "/satilik-vinc/ikinci-el/paletli-vinc" },
  { icon: "🚛", title: "İkinci El Kamyon Üstü Vinç", desc: "Nakliye ve kaldırma işini bir arada yapan ekonomik çözüm.", href: "/satilik-vinc/ikinci-el/kamyon-ustu-vinc" },
];

const sss = [
  {
    soru: "Satılık vinç fiyatları nelere bağlıdır?",
    cevap: "Vinç tipi, kapasitesi, marka ve modeli, üretim yılı, sıfır veya ikinci el olması ile çalışma saati gibi faktörler fiyatı belirleyen temel unsurlardır.",
  },
  {
    soru: "Hangi vinç tipi hangi projeye uygundur?",
    cevap: "Şehir içi ve kısa süreli işlerde mobil vinç, uzun vadeli inşaat projelerinde kule vinç, fabrika ve depo içi taşımada köprülü vinç, açık alan ve liman işlerinde portal vinç tercih edilir.",
  },
  {
    soru: "İkinci el vinç satın alırken nelere dikkat edilmeli?",
    cevap: "Çalışma saati ve bakım geçmişi, ekspertiz raporu, belge ve ruhsat durumu satın alma öncesi kontrol edilmesi gereken en önemli noktalardır.",
  },
  {
    soru: "İkinci el vinçlerde garanti veriliyor mu?",
    cevap: "Sunduğumuz ikinci el modellerin büyük kısmı sınırlı süreli garanti ve servis desteğiyle teslim edilmektedir. Garanti kapsamı modele göre değişiklik gösterebilir.",
  },
  {
    soru: "Vinç satın alma sürecinde teklif nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak ihtiyacınıza uygun model için teklif alabilirsiniz.",
  },
];

export default function SatilikVincPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏗️ Satılık Vinç Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Satılık Vinç<br />
              <span className="text-yellow-400">Yeni ve İkinci El Vinç Modelleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Mobil, kule, köprülü ve portal vinç dahil tüm vinç türlerinde sıfır ve ikinci el satılık
              modeller. Liebherr, Tadano, Grove ve Terex markalarında geniş ürün portföyü.
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
              { deger: "81", label: "İlde Hizmet" },
              { deger: "1000+", label: "Tamamlanan Satış" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-yellow-400">{s.deger}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sayfa İçi Hızlı Geçiş */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-3 overflow-x-auto text-sm">
          {[
            { href: "#fiyatlar", label: "Fiyatlar" },
            { href: "#vinc-turleri", label: "Vinç Türleri" },
            { href: "#markalar", label: "Markalar" },
            { href: "#kapasite", label: "Kapasite" },
            { href: "#ikinci-el", label: "İkinci El" },
            { href: "#sss", label: "SSS" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-yellow-100 text-gray-700 font-medium transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section id="fiyatlar" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Satılık Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar vinç tipi, kapasite ve modele göre değişiklik gösterir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Vinç Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Fiyat</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr
                    key={f.tur}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}
                  >
                    <td className="px-6 py-4 font-medium text-white">{f.tur}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.fiyat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar marka, model, üretim yılı ve sıfır/ikinci el durumuna göre teklif olarak sunulmaktadır.
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

      {/* Vinç Türlerine Göre Filtrele */}
      <section id="vinc-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kategoriler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Türlerine Göre Filtrele</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Projenize uygun vinç tipini seçin, detaylı modelleri inceleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vincTurleri.map((v) => (
              <div
                key={v.href}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center">
                  <div className="text-6xl mb-3">{v.icon}</div>
                  <h3 className="text-white text-lg font-bold">{v.title}</h3>
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

      {/* Markaya Göre Satılık Vinçler */}
      <section id="markalar" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Markalar</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Markaya Göre Satılık Vinçler</h2>
            <p className="text-gray-500 text-lg">Dünyaca tanınan markalarda sıfır ve ikinci el seçenekler.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {markalar.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="flex flex-col gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 hover:border-yellow-300 border border-transparent transition group"
              >
                <div className="text-4xl">{m.icon}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-700">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kapasiteye Göre Satılık Vinç */}
      <section id="kapasite" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kapasite Seçimi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kapasiteye Göre Satılık Vinç</h2>
            <p className="text-gray-500 text-lg">Projenizin yük gereksinimine göre doğru tonajı belirleyin.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kapasiteler.map((k) => (
              <Link
                key={k.href}
                href={k.href}
                className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group"
              >
                <div className="text-3xl mb-3">{k.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-700">{k.title}</h3>
                <p className="text-gray-500 text-sm">{k.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ İKİNCİ EL BÖLÜMÜ ============ */}

      {/* İkinci El Giriş */}
      <section id="ikinci-el" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Ekonomik Seçenek</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">İkinci El Satılık Vinç — Garantili ve Muayeneli İş Makineleri</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Garantili ve muayeneli ikinci el vinç modellerimizle bütçenize uygun, hızlı teslimat
            seçenekleri sunuyoruz. Tüm araçlarımız ekspertiz raporu ve servis desteğiyle teslim edilir.
          </p>
        </div>
      </section>

      {/* Neden İkinci El Vinç Satın Almalısınız */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Avantajlar</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Neden İkinci El Vinç Satın Almalısınız?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {avantajlar.map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İkinci El Vinç Modelleri */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Modeller</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kategoriye Göre İkinci El Vinç Modelleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              İhtiyacınıza uygun ikinci el vinç kategorisini seçin, detaylı ilanları inceleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ikinciElModeller.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group p-6 flex flex-col gap-3"
              >
                <div className="text-4xl">{m.icon}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-700">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
                <span className="text-yellow-600 font-semibold text-sm mt-auto">İncele →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* İkinci El Vinç Alırken Nelere Dikkat Edilmeli */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Satın Alma Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İkinci El Vinç Alırken Nelere Dikkat Edilmeli?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dikkatEdilmesiGerekenler.map((d) => (
              <div key={d.title} className="p-6 border border-gray-100 rounded-2xl">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-gray-500 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güvence */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Güvenceniz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Ekspertiz Raporlu, Güvenli İkinci El Alışveriş</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Sunduğumuz tüm ikinci el vinçler bağımsız teknik ekibimiz tarafından detaylı
                ekspertizden geçirilir. Belge ve ruhsat kontrolü eksiksiz yapılır, satın alma
                sürecinde sürpriz maliyetlerle karşılaşmazsınız.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Bağımsız ekspertiz raporu ile teslim",
                "Belge ve ruhsat eksiksiz kontrol edilir",
                "Servis ve yedek parça desteği sağlanır",
                "Şeffaf fiyatlandırma, sürpriz maliyet yok",
              ].map((kural) => (
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
      <section id="sss" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Satılık ve İkinci El Vinç Hakkında Sıkça Sorulan Sorular</h2>
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

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Aradığınız Vinci Bulalım</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, projenize en uygun vinç modelini birlikte belirleyelim.
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
