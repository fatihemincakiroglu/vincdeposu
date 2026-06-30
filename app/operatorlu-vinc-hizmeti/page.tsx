import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/operatorlu-vinc-hizmeti",
  },
  title: "Operatörlü Vinç Hizmeti | Sertifikalı Operatörlerle Güvenli Kiralama",
  description:
    "İstanbul ve çevre illerde profesyonel operatörlü vinç hizmeti. Mobil, teleskopik, paletli ve köprülü vinç ile inşaat, sanayi ve lojistik projeleri için 7/24 destek: 0532 303 90 89",
};

const kiralamaSecenekleri = [
  { icon: "⏱️", title: "Teleskopik Vinç Kiralama Fiyatları", desc: "Bom uzunluğu ve kapasiteye göre değişen, esnek saatlik ve günlük fiyatlandırma seçenekleri." },
  { icon: "🦾", title: "Paletli Vinç ile Ağır Yük Operasyonları", desc: "Zorlu zemin koşullarında stabil çalışan paletli modellerle ağır tonajlı kaldırma işleri." },
];

const insaatProjeleri = [
  { icon: "🏗️", title: "Hidrolik Vinç ile Yüksek Nokta Çalışmaları", desc: "Bina cephesi, çatı ve yüksek montaj işlerinde hassas konumlandırma sağlayan hidrolik sistemler." },
  { icon: "🪨", title: "Dar Alanlarda Kompakt Vinç Çözümleri", desc: "Şehir içi şantiyeler ve sınırlı alanlı projelerde manevra kabiliyeti yüksek kompakt modeller." },
];

const sanayiTesisleri = [
  { icon: "🏭", title: "Köprülü Vinç Hizmetleri ve Ücretleri", desc: "Fabrika ve tesis içi sürekli kaldırma operasyonları için köprülü vinç kiralama ve bakım desteği." },
  { icon: "📦", title: "Fabrika ve Depo İçi Vinç Hizmetleri", desc: "Üretim hattı ve depo içi malzeme taşımacılığında verimliliği artıran vinç çözümleri." },
];

const sertifikaliOperatorler = [
  { icon: "🎓", title: "Vinç Operatörü Sertifikasyon Gereksinimleri", desc: "Tüm operatörlerimiz yasal mevzuata uygun sertifika ve düzenli yenilenen eğitim belgelerine sahiptir." },
  { icon: "🌬️", title: "Rüzgarlı Hava Koşullarında Vinç Güvenliği", desc: "Hava koşulları sürekli izlenir, riskli rüzgar hızlarında operasyon güvenlik protokolüne göre durdurulur." },
];

const lojistikSektoru = [
  { icon: "📅", title: "Proje Bazlı Uzun Dönem Vinç Kiralama", desc: "Uzun süreli inşaat ve sanayi projelerine özel aylık ve proje bazlı kiralama anlaşmaları." },
  { icon: "🚛", title: "Yurt İçi Nakliyat İçin Vinç Desteği", desc: "Nakliyat süreçlerinde yükleme, boşaltma ve sahaya yerleştirme operasyonlarına vinç desteği." },
];

const acilHizmet = [
  { icon: "🌙", title: "Gece ve Hafta Sonu Vinç Hizmetleri", desc: "Üretim kaybını önlemek için gece ve hafta sonu dahil kesintisiz operatörlü vinç hizmeti." },
  { icon: "📋", title: "Vinç Hizmeti Öncesi Saha Etüdü ve Planlama", desc: "Operasyon öncesi sahanın zemin, erişim ve güvenlik koşulları açısından detaylı etüdü yapılır." },
];

const adimlar = [
  { no: "01", title: "Talep Bildirimi", desc: "Yük tipi, ağırlığı ve operasyon lokasyonunu bize iletin." },
  { no: "02", title: "Saha Etüdü", desc: "Gerekirse saha ziyareti ile zemin ve erişim koşulları değerlendirilir." },
  { no: "03", title: "Teklif ve Planlama", desc: "Projenize özel vinç tipi ve operatör planlaması yapılır." },
  { no: "04", title: "Sözleşme", desc: "Kiralama koşulları netleştirilerek sözleşme imzalanır." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı operatörümüz güvenli şekilde işinizi tamamlar." },
  { no: "06", title: "Raporlama", desc: "İş bitiminde operasyon raporu ve ekipman teslimi yapılır." },
];

const sss = [
  {
    soru: "Operatörlü vinç hizmeti ne anlama gelir?",
    cevap: "Operatörlü vinç hizmeti, vinç ekipmanının sertifikalı ve deneyimli bir operatör ile birlikte kiralanmasıdır. Bu sayede güvenli ve verimli bir operasyon süreci sağlanır.",
  },
  {
    soru: "Hangi sektörlerde operatörlü vinç hizmeti kullanılır?",
    cevap: "İnşaat, sanayi tesisleri, lojistik ve nakliyat sektörlerinde yük kaldırma, taşıma ve montaj operasyonlarında yaygın olarak kullanılır.",
  },
  {
    soru: "Saatlik ve günlük vinç kiralama arasındaki fark nedir?",
    cevap: "Saatlik kiralama kısa süreli ve tek seferlik işler için uygundur, günlük kiralama ise daha uzun süren operasyonlarda maliyet avantajı sağlar.",
  },
  {
    soru: "Gece veya hafta sonu vinç hizmeti alınabilir mi?",
    cevap: "Evet, 7/24 hizmet anlayışımız kapsamında gece ve hafta sonu dahil her zaman operatörlü vinç desteği sağlanmaktadır.",
  },
  {
    soru: "Vinç operatörlerinin sertifikası var mı?",
    cevap: "Tüm operatörlerimiz yasal mevzuata uygun sertifikalara sahiptir ve düzenli olarak eğitimlerini güncellemektedir.",
  },
];

export default function OperatorluVincHizmetiPage() {
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
              👷 Operatörlü Vinç Hizmeti 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Operatörlü Vinç<br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul ve çevre illerde profesyonel operatörlü vinç kiralama. Sertifikalı operatörler,
              modern ekipmanlar ve 7/24 acil hizmet desteği.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#kiralama-secenekleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Hizmetleri İncele ↓
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
              { deger: "39", label: "İlçede Hizmet" },
              { deger: "1500+", label: "Tamamlanan Operasyon" },
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
            { href: "#profesyonel-kiralama", label: "Profesyonel Kiralama" },
            { href: "#mobil-vinc", label: "Mobil Vinç" },
            { href: "#kiralama-secenekleri", label: "Saatlik/Günlük" },
            { href: "#insaat-projeleri", label: "İnşaat Projeleri" },
            { href: "#sanayi-tesisleri", label: "Sanayi Tesisleri" },
            { href: "#sertifikali-operatorler", label: "Sertifikalı Operatörler" },
            { href: "#agir-yuk", label: "Ağır Yük" },
            { href: "#lojistik", label: "Lojistik" },
            { href: "#acil-hizmet", label: "7/24 Acil Hizmet" },
            { href: "#bolgeler", label: "Hizmet Bölgeleri" },
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

      {/* Profesyonel Operatörlü Vinç Kiralama */}
      <section id="profesyonel-kiralama" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Hizmet</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Profesyonel Operatörlü Vinç Kiralama</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Operatörlü vinç kiralama, ekipmanın sertifikalı ve deneyimli bir operatör eşliğinde
              kiralanmasıdır. Bu hizmet sayesinde işletmeler kendi personelini eğitmek veya
              ekipman kullanım riskini üstlenmek zorunda kalmaz; operasyon baştan sona güvenli ve
              verimli şekilde tamamlanır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🎯 Doğru Ekipman Seçimi</h3>
              <p className="text-gray-500 text-sm">Projenize en uygun vinç tipi ve kapasitesi tarafımızca belirlenir.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">👷 Deneyimli Operatör</h3>
              <p className="text-gray-500 text-sm">Sertifikalı operatörler güvenli ve verimli bir çalışma süreci sağlar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📊 Şeffaf Maliyet</h3>
              <p className="text-gray-500 text-sm">Saatlik, günlük veya proje bazlı net fiyatlandırma ile sürpriz maliyet yaşanmaz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobil Vinç ile Yük Kaldırma Hizmetleri */}
      <section id="mobil-vinc" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">En Çok Tercih Edilen</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç ile Yük Kaldırma Hizmetleri</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Mobil vinçler, şehir içi ulaşım avantajı ve hızlı konumlanma özelliğiyle yük kaldırma
              operasyonlarında en yaygın kullanılan ekipmanlardır. Farklı tonaj ve bom uzunluğu
              seçenekleriyle her projeye uygun çözüm sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Saatlik ve Günlük Vinç Kiralama Seçenekleri */}
      <section id="kiralama-secenekleri" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Saatlik ve Günlük Vinç Kiralama Seçenekleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              İhtiyacınıza göre saatlik, günlük veya proje bazlı kiralama modellerinden birini seçin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kiralamaSecenekleri.map((k) => (
              <div key={k.title} className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-3xl mb-3">{k.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{k.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="tel:05323039089"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 Fiyat Teklifi Alın
            </a>
          </div>
        </div>
      </section>

      {/* İnşaat Projelerine Özel Vinç Çözümleri */}
      <section id="insaat-projeleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">İnşaat Sektörü</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İnşaat Projelerine Özel Vinç Çözümleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Yüksek nokta çalışmalarından dar alan operasyonlarına kadar her inşaat senaryosuna uygun çözüm.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insaatProjeleri.map((i) => (
              <div key={i.title} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="text-3xl mb-3">{i.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{i.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sanayi Tesisleri İçin Operatörlü Vinç */}
      <section id="sanayi-tesisleri" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sanayi Sektörü</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sanayi Tesisleri İçin Operatörlü Vinç</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Fabrika ve depo içi operasyonlarda verimliliği artıran sürekli kaldırma çözümleri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sanayiTesisleri.map((s) => (
              <div key={s.title} className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikalı Vinç Operatörleriyle Güvenli Taşıma */}
      <section id="sertifikali-operatorler" className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Güvenlik Önceliğimiz</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sertifikalı Vinç Operatörleriyle Güvenli Taşıma</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sertifikaliOperatorler.map((s) => (
              <div key={s.title} className="bg-white/70 p-8 rounded-2xl">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ağır Yük Kaldırma ve Taşıma Hizmetleri */}
      <section id="agir-yuk" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ağır Tonaj</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Ağır Yük Kaldırma ve Taşıma Hizmetleri</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Büyük tonajlı makine, ekipman ve yapı elemanlarının kaldırılması ve taşınmasında
              yüksek kapasiteli vinçler ve deneyimli operatör ekibiyle güvenli operasyon sağlanır.
              Saha koşulları önceden değerlendirilerek en uygun vinç ve kaldırma planı belirlenir.
            </p>
          </div>
        </div>
      </section>

      {/* Lojistik Sektörüne Özel Vinç Kiralama */}
      <section id="lojistik" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Lojistik Sektörü</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Lojistik Sektörüne Özel Vinç Kiralama</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Nakliyat ve depolama süreçlerinde yükleme, boşaltma ve sahaya yerleştirme operasyonlarına destek.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lojistikSektoru.map((l) => (
              <div key={l.title} className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-3xl mb-3">{l.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{l.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7/24 Acil Operatörlü Vinç Hizmeti */}
      <section id="acil-hizmet" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Her Zaman Yanınızdayız</p>
            <h2 className="text-4xl font-black mb-4">7/24 Acil Operatörlü Vinç Hizmeti</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Beklenmedik operasyon ihtiyaçlarında gün ve saat fark etmeden hızlı destek.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acilHizmet.map((a) => (
              <div key={a.title} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Operatörlü Vinç Kiralama Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel operatörlü vinç hizmeti</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adimlar.map((a) => (
              <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group bg-white">
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

      {/* İstanbul ve Çevre İllerde Vinç Hizmetleri */}
      <section id="bolgeler" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Hizmet Bölgesi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">İstanbul ve Çevre İllerde Vinç Hizmetleri</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde ve çevre illerde operatörlü vinç hizmeti sunuyoruz.
              Şehir içi trafik ve erişim koşullarına uygun mobil vinçlerimizle hızlı sevkiyat
              sağlıyor, projenizin zaman çizelgesine uygun şekilde sahaya ulaşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Operatörlü Vinç Hizmeti Hakkında Sıkça Sorulan Sorular</h2>
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
          <h2 className="text-4xl font-black mb-4">Projeniz İçin Teklif Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun operatörlü vinç çözümünü belirleyelim.
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
