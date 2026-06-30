import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/mobil-vinc",
  },
  title: "Mobil Vinç Kiralama | Kiralık Mobil Vinç Hizmetleri",
  description:
    "İstanbul'da profesyonel kiralık mobil vinç hizmeti. Paletli ve lastikli mobil vinç modelleri, her tonajda çözüm. 7/24 hizmet: 0532 303 90 89",
};

const mobilVincTurleri = [
  {
    icon: "🦾",
    title: "Paletli Mobil Vinç",
    desc: "Geniş palet tabanı ve üstün stabilite ile zorlu arazi koşullarında güvenli kaldırma operasyonları için tercih edilen model.",
    fiyat: "15.000 – 35.000 TL / gün",
    href: "/paletli-mobil-vinc",
    ozellikler: ["Zorlu arazi", "Yüksek stabilite", "Büyük tonaj"],
  },
  {
    icon: "🚛",
    title: "Lastikli Mobil Vinç",
    desc: "Lastik tekerlekli şasisi sayesinde yol üzerinde seyahat edebilen, şehir içi ve kısa mesafeli projelerde hız avantajı sunan model.",
    fiyat: "12.000 – 28.000 TL / gün",
    href: "/lastikli-mobil-vinc",
    ozellikler: ["Hızlı konumlanma", "Yol izni ile seyahat", "Esnek kullanım"],
  },
  {
    icon: "🏗️",
    title: "Teleskopik Bomlu Mobil Vinç",
    desc: "Uzayan teleskopik bom sayesinde yüksek noktalara erişim sağlayan, inşaat ve montaj projelerinde yaygın kullanılan model.",
    fiyat: "18.000 – 40.000 TL / gün",
    href: "/teleskopik-bomlu-mobil-vinc",
    ozellikler: ["Geniş erişim", "Hızlı kurulum", "İnşaat uyumlu"],
  },
  {
    icon: "⚙️",
    title: "Kafes Bomlu Mobil Vinç",
    desc: "Kafes yapısındaki uzun bomu ile büyük yük kapasitesi ve uzun erişim mesafesi gerektiren ağır sanayi projelerinde kullanılır.",
    fiyat: "Teklif alınız",
    href: "/kafes-bomlu-mobil-vinc",
    ozellikler: ["Ağır yük", "Uzun erişim", "Sanayi uyumlu"],
  },
  {
    icon: "🏭",
    title: "Sanayi Tipi Ağır Mobil Vinç",
    desc: "Fabrika kurulumu, makine montajı ve endüstriyel tesis projelerinde yüzlerce ton kapasiteyle kaldırma operasyonu gerçekleştirir.",
    fiyat: "Teklif alınız",
    href: "/sanayi-tipi-agir-mobil-vinc",
    ozellikler: ["100+ ton kapasite", "Fabrika kurulumu", "Proje bazlı"],
  },
  {
    icon: "🌉",
    title: "Köprü & Altyapı Mobil Vinci",
    desc: "Köprü, viyadük ve altyapı projelerinde ağır prefabrik elemanların kaldırılması ve konumlandırılmasında uzmanlaşmış model.",
    fiyat: "Teklif alınız",
    href: "/kopru-altyapi-mobil-vinc",
    ozellikler: ["Prefabrik taşıma", "Altyapı uyumlu", "Yüksek hassasiyet"],
  },
];

const fiyatTablosu = [
  { tur: "25 Ton Lastikli Mobil Vinç", saatlik: "2.000 TL", gunluk: "12.000 TL", aylik: "180.000 TL" },
  { tur: "50 Ton Paletli Mobil Vinç", saatlik: "3.500 TL", gunluk: "20.000 TL", aylik: "280.000 TL" },
  { tur: "80 Ton Teleskopik Mobil Vinç", saatlik: "5.000 TL", gunluk: "30.000 TL", aylik: "Teklif" },
  { tur: "100 Ton Kafes Bomlu Mobil Vinç", saatlik: "7.000 TL", gunluk: "40.000 TL", aylik: "Teklif" },
  { tur: "200+ Ton Ağır Sanayi Vinci", saatlik: "Teklif", gunluk: "Teklif", aylik: "Teklif" },
  { tur: "Operatör + Taşıma İzni", saatlik: "600 TL", gunluk: "2.500 TL", aylik: "Teklif" },
];

const kullanımAlanlari = [
  { icon: "🏗️", title: "İnşaat & Yapı", desc: "Prefabrik, çelik konstrüksiyon ve ağır yapı elemanları montajı" },
  { icon: "🏭", title: "Fabrika Kurulumu", desc: "Makine, ekipman ve sanayi tesisi kurulum operasyonları" },
  { icon: "⚡", title: "Enerji Projeleri", desc: "Trafo, jeneratör ve enerji santral ekipmanı montajı" },
  { icon: "🌉", title: "Altyapı", desc: "Köprü, viyadük ve alt geçit inşaatlarında ağır taşıma" },
  { icon: "🚢", title: "Liman & Tersane", desc: "Yük aktarma, tekne kaldırma ve deniz yapı projeleri" },
  { icon: "🔧", title: "Bakım & Revizyon", desc: "Ağır sanayi ekipmanlarının bakım ve revizyon çalışmaları" },
];

const adimlar = [
  { no: "01", title: "İhtiyaç Analizi", desc: "Yük ağırlığı, kaldırma mesafesi ve saha koşullarını belirleyin." },
  { no: "02", title: "Tonaj Seçimi", desc: "Projeye uygun mobil vinç kapasitesini birlikte belirleriz." },
  { no: "03", title: "Teklif & Planlama", desc: "Detaylı fiyat teklifi ve operasyon planı hazırlanır." },
  { no: "04", title: "İzin & Lojistik", desc: "Taşıma izinleri ve yol güzergahı planlaması yapılır." },
  { no: "05", title: "Saha Kurulumu", desc: "Sertifikalı ekibimiz sahaya gelerek vincin kurulumunu tamamlar." },
  { no: "06", title: "Operasyon & Teslim", desc: "Güvenli kaldırma operasyonunun ardından ekipman teslim alınır." },
];

const guvenlikkurallari = [
  "Tüm operatörler mobil vinç kullanma sertifikasına ve mesleki yeterlilik belgesine sahiptir",
  "Vinçler periyodik muayene ve bakımdan düzenli olarak geçirilmektedir",
  "Her operasyon öncesi saha zemin ve yük dengeleme hesabı yapılmaktadır",
  "Maksimum yük kapasitesi hiçbir koşulda aşılmamaktadır",
  "Çalışma alanında barikat, uyarı levhası ve güvenlik personeli görevlendirilmektedir",
  "Tüm ekipmanlar tam kapsamlı sigorta güvencesi altındadır",
];

const sss = [
  {
    soru: "Mobil vinç nedir?",
    cevap: "Mobil vinç, kendi motoruyla hareket edebilen, tel ve bom sistemi sayesinde ağır yükleri kaldırıp konumlandıran, inşaat ve sanayi projelerinde yaygın olarak kullanılan taşınabilir kaldırma ekipmanıdır.",
  },
  {
    soru: "Mobil vinç ile sabit vinç arasındaki fark nedir?",
    cevap: "Mobil vinçler kendi hareket sistemleriyle farklı şantiyelere ve alanlara taşınabilirken, sabit vinçler belirli bir noktaya kurulur ve yalnızca o alanda çalışır. Mobil vinçler esneklikleri ve hızlı konumlanma avantajları nedeniyle kısa ve orta süreli projelerde tercih edilir.",
  },
  {
    soru: "Kiralık mobil vinç fiyatları nelere bağlıdır?",
    cevap: "Vinç tonajı ve bom uzunluğu, kiralama süresi, çalışma lokasyonu ve nakliye mesafesi, operatör hizmeti, taşıma izni maliyetleri ve proje kapsamı fiyatı belirleyen başlıca faktörlerdir.",
  },
  {
    soru: "Mobil vinç için taşıma izni gerekli midir?",
    cevap: "Evet, belirli tonajın üzerindeki mobil vinçlerin kamuya açık yollarda taşınması için Karayolları Genel Müdürlüğü'nden özel yük taşıma izni alınması zorunludur. Bu süreci firmamız sizin adınıza yönetir.",
  },
  {
    soru: "Mobil vinç kiralama hizmeti nasıl alınır?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak projenize özel teklif alabilirsiniz. Yük ağırlığı ve kaldırma yüksekliği bilgisini paylaşmanız yeterlidir.",
  },
];

export default function KiralikMobilVincPage() {
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
              🏗️ Mobil Vinç Kiralama Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Mobil Vinç Kiralama<br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde profesyonel kiralık mobil vinç hizmeti. Her tonajda çözüm,
              sertifikalı operatörler ve 7/24 teknik destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#mobil-vinc-modelleri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Mobil Vinç Modellerini İncele ↓
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
              { deger: "500+", label: "Tamamlanan Proje" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-yellow-400">{s.deger}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sahadan Kareler */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] sm:aspect-[20/9] rounded-2xl overflow-hidden border border-gray-100">
            <Image
              src="/images/mobil-vinc-yuksek-bina-istanbul.jpg"
              alt="İstanbul'da yüksek katlı bina cephesinde çalışan mobil vinç"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Şeffaf Fiyatlandırma</p>
            <h2 className="text-4xl font-black mb-4">Kiralık Mobil Vinç Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar tonaj, model ve proje kapsamına göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Mobil Vinç Türü</th>
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
            * Fiyatlar KDV hariç olup lokasyon, taşıma izni ve proje detaylarına göre değişebilir.
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

      {/* Mobil Vinç Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Nedir? Sabit Vinçten Farkı</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Mobil vinç, kendi motoruyla hareket edebilen bom ve tel sistemi sayesinde ağır yükleri
              kaldırıp konumlandıran taşınabilir kaldırma ekipmanıdır. Lastikli veya paletli şasi
              seçenekleriyle farklı arazi koşullarına uyum sağlar. Sabit vinçlerden farklı olarak
              şantiyeden şantiyeye kolayca taşınabilir ve kısa kurulum süresiyle operasyona
              hazır hale gelir. İnşaat, sanayi ve altyapı projelerinde hem yatay hem dikey
              taşıma kapasitesiyle güvenilir bir çözüm sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🦾 Mobil Vinç</h3>
              <p className="text-gray-500 text-sm">Kendi hareket kabiliyeti ile farklı şantiyelere taşınabilir; hızlı kurulum ve esneklik sağlar.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏗️ Kule (Tower) Vinç</h3>
              <p className="text-gray-500 text-sm">Yüksek binalarda sabit kurulum gerektiren, geniş yatay erişim alanı sunan uzun süreli çözüm.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚓ Portal & Köprü Vinç</h3>
              <p className="text-gray-500 text-sm">Fabrika ve liman gibi sabit alanlarda ray üzerinde hareket eden yüksek kapasiteli sistemler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobil Vinç Tonaj Seçenekleri */}
      <section id="mobil-vinc-modelleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ekipmanlarımız</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Tonaj Seçenekleri ve Modelleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              25 tondan 500 tona kadar her kapasitede mobil vinç. Projenize uygun modeli birlikte belirleyelim.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobilVincTurleri.map((v) => (
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

          {/* Paletli / Lastikli Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🦾 Paletli Mobil Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Paletli mobil vinçler, geniş palet tabanı sayesinde yumuşak ve engebeli
                zeminlerde yüksek stabilite sunar. İnşaat sahaları, şantiyeler ve açık
                arazi projelerinde zemin deformasyonunu minimize ederek güvenli kaldırma
                operasyonu gerçekleştirir. Büyük tonaj gerektiren ağır projelerde tercih
                edilen birinci seçenektir.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚛 Lastikli Mobil Vinç Kiralama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lastikli mobil vinçler, standart karayolu araçları gibi kendi hareket
                ettikleri için nakliye maliyetini ve süresini önemli ölçüde düşürür.
                Şehir içi ve çevre yollarında taşıma izni ile seyahat edebilen bu modeller,
                birden fazla şantiyede kısa süreli operasyon gerektiren projelerde ideal
                çözüm sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Kiralık mobil vinçler hangi projelerde kullanılır?</p>
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

          {/* İnşaat / Endüstriyel Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ İnşaat ve Yapı Projelerinde Mobil Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Prefabrik yapı elemanları, çelik konstrüksiyon montajı ve ağır kalıp
                sistemlerinin yerleştirilmesinde mobil vinç, inşaat projelerinin
                vazgeçilmez ekipmanıdır. Kısa kurulum süresi ve yüksek yük kapasitesiyle
                şantiye verimliliğini artırır, insan gücüyle mümkün olmayan taşıma
                operasyonlarını güvenle gerçekleştirir.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏭 Endüstriyel Tesis ve Fabrika Kurulumlarında Mobil Vinç</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fabrika inşaatı, makine montajı ve sanayi ekipmanlarının kurulumunda
                mobil vinç, yüksek tonaj kapasitesiyle kritik operasyonları üstlenir.
                Kompresörden türbine, reaktörden kazana kadar ağır endüstriyel
                ekipmanların hassas konumlandırılması deneyimli ekibimiz ve doğru
                tonajda vinç seçimiyle güvenle tamamlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Avantajları */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Neden Kiralama?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Kiralama Avantajları</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💰", title: "Düşük Maliyet", desc: "Milyonlarca TL'lik satın alma maliyetinden kaçınarak yalnızca kullandığınız süre için ödeme yaparsınız." },
              { icon: "🔧", title: "Bakım Derdi Yok", desc: "Periyodik bakım, muayene ve onarım maliyetleri kiralama firması tarafından karşılanır." },
              { icon: "🔄", title: "Doğru Tonaj", desc: "Her proje için ihtiyaçla tam örtüşen tonaj ve model seçimi yaparak verimliliği artırırsınız." },
              { icon: "👷", title: "Operatör Desteği", desc: "Sertifikalı ve deneyimli mobil vinç operatörüyle güvenli ve hızlı operasyon sağlanır." },
            ].map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100">
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

      {/* Doğru Mobil Vinç Nasıl Seçilir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Seçim Rehberi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Doğru Mobil Vinç Nasıl Seçilir?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Yük Ağırlığı ve Tonaj</h3>
              <p className="text-gray-500 text-sm">Kaldırılacak yükün ağırlığı ve kaldırma mesafesi, ihtiyaç duyulan minimum vinç tonajını belirler.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📏 Kaldırma Yüksekliği ve Erişim</h3>
              <p className="text-gray-500 text-sm">Yük ne kadar yükseğe ve ne kadar uzağa taşınacaksa bom uzunluğu ve kapasite buna göre hesaplanır.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🪨 Zemin ve Saha Koşulları</h3>
              <p className="text-gray-500 text-sm">Zemin sertliği ve saha alanı, paletli mi lastikli mi seçileceğini doğrudan etkiler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kiralama Süreci */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Kiralama Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda profesyonel mobil vinç kiralama</p>
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

      {/* Fiyatı Etkileyen Faktörler */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Fiyatlandırma</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Fiyatlarını Etkileyen Faktörler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Vinç tonajı ve bom uzunluğu (kapasite)",
              "Paletli veya lastikli model tercihi",
              "Kiralama süresi (saatlik, günlük, aylık)",
              "Çalışma lokasyonu ve nakliye mesafesi",
              "Operatör hizmeti gerekliliği",
              "Taşıma izni ve güzergah maliyetleri",
            ].map((f) => (
              <div key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-yellow-600 font-bold text-lg shrink-0">●</span>
                <p className="text-gray-700 text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güvenlik */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Operatörü ve Taşıma İzni Gereksinimleri</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Ağır yük kaldırma operasyonlarında güvenlik ve yasal uyumluluk
                her şeyin önündedir. Sertifikalı operatörlerimiz ve tam donanımlı
                ekipmanlarımızla tüm yasal gereksinimleri karşılıyoruz.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Mobil Vinç Kiralama Hakkında Sıkça Sorulan Sorular</h2>
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
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun mobil vinci ve tonajı belirleyelim.
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
