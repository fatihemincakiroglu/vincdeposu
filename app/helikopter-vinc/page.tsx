import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/helikopter-vinc",
  },
  title: "Helikopter Vinç | Fiyatları, Modelleri ve Kiralama",
  description:
    "Profesyonel helikopter vinç hizmetleri. Kurtarma, inşaat, yangın söndürme ve enerji hattı projeleri için havadan yük taşıma çözümleri. 7/24 hizmet: 0532 303 90 89",
};

const helikopterVincTurleri = [
  {
    icon: "🚁",
    title: "Kurtarma Helikopter Vinçleri",
    desc: "Acil durum ve afet bölgelerinde hızlı müdahale için özel halat ve makara sistemleriyle donatılmış vinç tipi.",
    fiyat: "Teklif alınız",
    href: "/kurtarma-helikopter-vinci",
    ozellikler: ["Hızlı müdahale", "Özel halat sistemi", "7/24 hazır ekip"],
  },
  {
    icon: "🏗️",
    title: "İnşaat Amaçlı Helikopter Vinçler",
    desc: "Yüksek katlı yapılar, kule vinçleri ve karadan erişimin mümkün olmadığı sahalarda ağır ekipman taşımak için kullanılan model.",
    fiyat: "Teklif alınız",
    href: "/insaat-helikopter-vinci",
    ozellikler: ["Ağır yük taşıma", "Zor arazi erişimi", "Hassas konumlandırma"],
  },
  {
    icon: "🔥",
    title: "Yangın Söndürme Vinç Sistemleri",
    desc: "Orman yangınlarına havadan müdahalede su torbası ve söndürme ekipmanlarını taşıyan, hızlı dolum ve boşaltım yapabilen sistem.",
    fiyat: "Teklif alınız",
    href: "/yangin-sondurme-helikopter-vinci",
    ozellikler: ["Su torbası taşıma", "Hızlı dolum", "Anlık boşaltım"],
  },
  {
    icon: "🎖️",
    title: "Askeri Helikopter Vinçleri",
    desc: "Tahliye, lojistik destek ve özel görevlerde kullanılan, yüksek güvenlik standartlarına sahip dayanıklı vinç sistemleri.",
    fiyat: "Teklif alınız",
    href: "/askeri-helikopter-vinci",
    ozellikler: ["Yüksek dayanıklılık", "Özel görev uyumu", "Güvenlik sertifikalı"],
  },
  {
    icon: "📦",
    title: "Endüstriyel Yük Taşıma Vinçleri",
    desc: "Enerji santralleri, maden sahaları ve büyük tesislerde ağır ekipman ve malzeme nakliyesi için tercih edilen sistem.",
    fiyat: "Teklif alınız",
    href: "/endustriyel-helikopter-vinci",
    ozellikler: ["Ağır ekipman", "Geniş kapasite", "Tesis içi nakliye"],
  },
  {
    icon: "⚡",
    title: "Enerji Hattı ve Kule Vinç Sistemleri",
    desc: "Yüksek gerilim hatları ve iletim kulelerinin kurulum ile bakımında izoleli donanımlarla güvenli havadan erişim sağlayan model.",
    fiyat: "Teklif alınız",
    href: "/enerji-hatti-helikopter-vinci",
    ozellikler: ["İzoleli donanım", "Kule montajı", "Hat bakımı"],
  },
];

const fiyatTablosu = [
  { tur: "Kurtarma Tipi Helikopter Vinç", saatlik: "Teklif", gunluk: "Teklif", aylik: "Teklif" },
  { tur: "İnşaat Amaçlı Helikopter Vinç", saatlik: "Teklif", gunluk: "Teklif", aylik: "Teklif" },
  { tur: "Yangın Söndürme Vinç Sistemi", saatlik: "Teklif", gunluk: "Teklif", aylik: "Teklif" },
  { tur: "Endüstriyel Yük Taşıma Vinci", saatlik: "Teklif", gunluk: "Teklif", aylik: "Teklif" },
  { tur: "Enerji Hattı Vinç Sistemi", saatlik: "Teklif", gunluk: "Teklif", aylik: "Teklif" },
  { tur: "Pilot ve Operatör Ekibi", saatlik: "Teklif", gunluk: "Teklif", aylik: "Teklif" },
];

const kullanımAlanlari = [
  { icon: "🌊", title: "Deniz Kurtarma", desc: "Açık deniz ve kıyı bölgelerinde acil tahliye ve kurtarma operasyonları" },
  { icon: "⛰️", title: "Dağlık Arazi Kurtarma", desc: "Karadan ulaşımın mümkün olmadığı yüksek ve engebeli bölgelerde müdahale" },
  { icon: "🔥", title: "Orman Yangını Müdahalesi", desc: "Havadan su taşıma ve söndürme operasyonlarında hızlı destek" },
  { icon: "⚡", title: "Enerji Hattı ve Kule Kurulumu", desc: "Yüksek gerilim hattı ve iletim kulesi montaj, bakım çalışmaları" },
  { icon: "🏙️", title: "İnşaat ve Gökdelen Projeleri", desc: "Yüksek katlı yapı ve kule vinç parçalarının havadan taşınması" },
  { icon: "🏭", title: "Endüstriyel Taşıma", desc: "Fabrika, santral ve maden sahalarında ağır ekipman nakliyesi" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Belirleme", desc: "Taşınacak yük, mesafe ve operasyon tipini belirleyin." },
  { no: "02", title: "Teklif Alın", desc: "Bizi arayın, projenize özel fiyat teklifi alın." },
  { no: "03", title: "Saha Değerlendirmesi", desc: "Uçuş koşulları ve operasyon planı incelenir." },
  { no: "04", title: "Sözleşme", desc: "Güvenli kiralama sözleşmesi imzalanır." },
  { no: "05", title: "Operasyon", desc: "Sertifikalı pilot ve ekip güvenli şekilde çalışır." },
  { no: "06", title: "Tamamlama", desc: "Operasyon bitiminde raporlama yapılır, ekipman teslim alınır." },
];

const guvenlikkurallari = [
  "Pilotlarımız geçerli uçuş lisansına ve helikopter vinç deneyimine sahiptir",
  "Uçuş öncesi tüm ekipmanlar detaylı kontrolden geçirilmektedir",
  "Hava koşulları sürekli takip edilmekte, riskli koşullarda uçuş durdurulmaktadır",
  "Taşıma kapasitesi hiçbir şekilde aşılmamaktadır",
  "Operasyon alanında gerekli güvenlik çemberi oluşturulmaktadır",
  "Tüm helikopterler ve ekipmanlar sigortalı ve sertifikalıdır",
];

const sss = [
  {
    soru: "Helikopter vinç nedir?",
    cevap: "Helikopter vinç, helikoptere monte edilen halat ve makara sistemleri sayesinde karadan erişimin mümkün olmadığı bölgelerde yük taşıma, kurtarma ve montaj operasyonlarını mümkün kılan havadan taşıma sistemidir.",
  },
  {
    soru: "Helikopter vinç ile konvansiyonel vinç arasındaki fark nedir?",
    cevap: "Konvansiyonel vinçler sabit bir konumdan çalışırken, helikopter vinçler havadan hareket ederek dağlık alan, açık deniz veya yoğun trafikli bölgeler gibi karadan erişimin zor olduğu noktalara ulaşabilir.",
  },
  {
    soru: "Helikopter vinç kiralama fiyatları nelere bağlıdır?",
    cevap: "Operasyon tipi, taşınacak yükün ağırlığı, uçuş süresi ve mesafesi, bölgenin coğrafi koşulları ve gerekli ekip sayısı fiyatı belirleyen temel faktörlerdir.",
  },
  {
    soru: "Operatör ve pilot desteği nasıl sağlanır?",
    cevap: "Sertifikalı ve deneyimli pilot ile yer ekibi, operasyon boyunca güvenli ve verimli bir çalışma süreci için tarafımızca sağlanmaktadır.",
  },
  {
    soru: "Helikopter vinç kiralama hizmeti nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz.",
  },
];

export default function HelikopterVincPage() {
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
              🚁 Helikopter Vinç Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Helikopter Vinç<br />{" "}
              <span className="text-yellow-400">Profesyonel Havadan Taşıma Çözümleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Kurtarma, inşaat, yangın söndürme ve enerji hattı projeleri için profesyonel
              helikopter vinç hizmeti. Sertifikalı pilotlar, modern ekipmanlar ve 7/24 teknik destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#helikopter-vinc-cesitleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Helikopter Vinç Çeşitlerini İncele ↓
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
              { deger: "500+", label: "Tamamlanan Operasyon" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-yellow-400">{s.deger}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Helikopter Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar operasyon türü, mesafe ve projeye göre değişiklik gösterir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Helikopter Vinç Türü</th>
                  <th className="text-center px-6 py-4 font-semibold">Saatlik</th>
                  <th className="text-center px-6 py-4 font-semibold">Günlük</th>
                  <th className="text-center px-6 py-4 font-semibold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr
                    key={f.tur}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}
                  >
                    <td className="px-6 py-4 font-medium text-white">{f.tur}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.saatlik}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.gunluk}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar operasyon mesafesi, yük ağırlığı ve proje detaylarına göre teklif olarak sunulmaktadır.
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

      {/* Helikopter Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Nedir?</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Helikopter vinç, helikoptere monte edilen özel halat, makara ve kanca sistemleri
              sayesinde karadan erişimin zor veya imkansız olduğu noktalara yük taşıma, kurtarma
              ve montaj operasyonlarını mümkün kılan havadan taşıma sistemidir. Dağlık arazi,
              açık deniz, orman yangınları ve yüksek gerilim hatları gibi zorlu coğrafyalarda
              hız ve esneklik sağlayan helikopter vinçler, konvansiyonel vinçlerin erişemediği
              noktalarda kritik bir çözüm sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🚁 Helikopter Vinç</h3>
              <p className="text-gray-500 text-sm">Havadan hareket ederek karadan erişimin zor olduğu bölgelere ulaşım sağlar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏗️ Konvansiyonel Vinç</h3>
              <p className="text-gray-500 text-sm">Sabit bir konumdan çalışır, erişim alanı zemin koşullarına bağlıdır.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⛰️ Arazi Tipi Vinçler</h3>
              <p className="text-gray-500 text-sm">Dağlık ve engebeli bölgelerde sınırlı hareket kabiliyetine sahiptir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Helikopter Vinç Çeşitleri ve Modelleri */}
      <section id="helikopter-vinc-cesitleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Çeşitleri ve Modelleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her operasyon tipine uygun helikopter vinç çözümü. İhtiyacınıza göre doğru modeli belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helikopterVincTurleri.map((v) => (
              <div
                key={v.href}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center">
                  <div className="text-6xl mb-3">{v.icon}</div>
                  <h3 className="text-white text-xl font-bold">{v.title}</h3>
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

          {/* Kurtarma ve Askeri Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚁 Kurtarma Helikopter Vinçleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kurtarma tipi helikopter vinçler, afet ve acil durum bölgelerinde hızlı müdahale
                için özel halat ve makara sistemleriyle donatılmıştır. Deniz, dağ ve sel gibi
                zorlu koşullarda insan hayatını kurtarmak amacıyla devreye alınır.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎖️ Askeri Helikopter Vinçleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Askeri helikopter vinçler, tahliye, lojistik destek ve özel görevlerde
                kullanılır. Yüksek güvenlik standartlarına sahip dayanıklı yapısı sayesinde
                zorlu operasyon koşullarında güvenilir performans sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Helikopter Vinç Kullanım Alanları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Helikopter vinçler hangi projelerde ve operasyonlarda kullanılır?</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {kullanımAlanlari.map((k) => (
              <div key={k.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition group">
                <div className="text-4xl shrink-0">{k.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-700">{k.title}</h3>
                  <p className="text-gray-500 text-sm">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Deniz Kurtarma / Orman Yangını Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌊 Deniz Kurtarma Operasyonlarında Kullanımı</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Açık deniz ve kıyı bölgelerinde gemi kazaları, batma riski taşıyan teknelerde
                veya sağlık sorunu yaşayan kişilerin tahliyesinde helikopter vinç, hızlı ve
                güvenli bir müdahale imkanı sağlar.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔥 Orman Yangınlarına Müdahale</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Orman yangınlarında helikopter vinç sistemleri, su torbası ve söndürme
                ekipmanlarını taşıyarak karadan erişimin zor olduğu alev cephelerine havadan
                hızlı müdahale edilmesini sağlar.
              </p>
            </div>
          </div>

          {/* Dağlık Arazi / Enerji Hattı Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⛰️ Dağlık Arazilerde Kurtarma</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Karadan ulaşımın mümkün olmadığı yüksek rakımlı ve engebeli bölgelerde kaybolan
                veya yaralanan kişilerin tahliyesinde helikopter vinç, vakit kaybetmeden
                müdahale edilmesini sağlayan kritik bir araçtır.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Enerji Hatları ve Kule Kurulumu</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Yüksek gerilim hatlarının ve iletim kulelerinin kurulum ile bakım çalışmalarında
                helikopter vinç, izoleli donanımlarla güvenli erişim sağlayarak operasyon
                sürelerini kısaltır.
              </p>
            </div>
          </div>

          {/* İnşaat ve Gökdelen Alt Bölüm */}
          <div className="bg-gray-50 p-8 rounded-2xl mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🏙️ İnşaat ve Gökdelen Projeleri</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Yüksek katlı yapı ve gökdelen projelerinde kule vinç parçaları, klima üniteleri
              ve ağır ekipmanların havadan taşınmasında helikopter vinç, karadan erişimin
              kısıtlı olduğu şehir merkezlerinde önemli bir zaman avantajı sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Helikopter Vinç ile Konvansiyonel Vinç Farkları */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Karşılaştırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç ile Konvansiyonel Vinç Farkları</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">🚁 Helikopter Vinç</h3>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Karadan erişimin zor olduğu bölgelere ulaşır</li>
                <li>• Hızlı konumlanma ve operasyon esnekliği sağlar</li>
                <li>• Dağ, deniz ve orman gibi zorlu coğrafyalarda etkilidir</li>
                <li>• Uçuş ve hava koşullarına bağlı çalışır</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">🏗️ Konvansiyonel Vinç</h3>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Sabit bir konumdan çalışır</li>
                <li>• Zemin ve altyapı koşullarına bağımlıdır</li>
                <li>• Şehir içi ve düz arazide daha ekonomiktir</li>
                <li>• Hava koşullarından daha az etkilenir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Helikopter Vinç Teknik Özellikleri */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Teknik Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Teknik Özellikleri</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Taşıma Kapasitesi</h3>
              <p className="text-gray-500 text-sm">Helikopter modeline göre değişen yük kapasitesi, operasyon tipine uygun şekilde belirlenir.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🪢 Halat ve Makara Sistemi</h3>
              <p className="text-gray-500 text-sm">Yük tipine göre değişen uzunlukta özel halat ve hassas kontrol sağlayan makara sistemleri kullanılır.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🌬️ Uçuş ve Hava Koşulları</h3>
              <p className="text-gray-500 text-sm">Rüzgar hızı, görüş mesafesi ve hava koşulları operasyon güvenliği açısından sürekli takip edilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Kiralama Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel helikopter vinç kiralama</p>
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

      {/* Kiralama Fiyatları Nasıl Belirlenir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Kiralama Fiyatları Nasıl Belirlenir?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Taşınacak yükün ağırlığı ve boyutu",
              "Operasyon mesafesi ve uçuş süresi",
              "Bölgenin coğrafi ve hava koşulları",
              "Helikopter tipi ve vinç sistemi modeli",
              "Pilot ve yer ekibi gerekliliği",
              "Operasyonun aciliyeti ve süresi",
            ].map((f) => (
              <div key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-yellow-600 font-bold text-lg shrink-0">●</span>
                <p className="text-gray-700 text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiralama Öncesi Dikkat Edilmesi Gerekenler & Operatör Desteği */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Kiralama Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Türkiye&apos;de Helikopter Vinç Kiralama</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📋 Kiralama Öncesi Dikkat Edilmesi Gerekenler</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Operasyon bölgesinin uçuş izinleri, yükün ağırlık ve boyut bilgileri,
                hava koşulları ve operasyon süresi gibi detayların önceden netleştirilmesi,
                helikopter vinç kiralama sürecinin sorunsuz ilerlemesini sağlar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">👷 Operatör ve Teknik Destek Hizmetleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sertifikalı pilotlar ve deneyimli yer ekibi, operasyon süresince teknik
                destek sağlar. Uçuş öncesi planlama, saha güvenliği ve ekipman kontrolü
                tarafımızca eksiksiz şekilde yürütülür.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Güvenlik */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Operasyonlarında İş Güvenliği ve Pilot Sertifikası</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Havadan yapılan tüm operasyonlarda güvenlik her şeyin önünde gelir.
                Tüm helikopterlerimiz düzenli bakımdan geçmekte, pilotlarımız güncel
                lisans ve sertifikalara sahiptir.
              </p>
            </div>
            <div className="space-y-3">
              {guvenlikkurallari.map((kural) => (
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Helikopter Vinç Hakkında Sıkça Sorulan Sorular</h2>
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
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun helikopter vinç çözümünü belirleyelim.
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
