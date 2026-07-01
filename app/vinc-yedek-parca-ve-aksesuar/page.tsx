import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/vinc-yedek-parca-ve-aksesuar",
  },
  title: "Vinç Yedek Parça ve Aksesuar | Orijinal Parçalar, Hızlı Teslimat",
  description:
    "Orijinal vinç yedek parçaları ve aksesuarları. Halat, kumanda, makara, kanca ve daha fazlası. Goliath, Warn, Ironman uyumlu parçalar. Hızlı kargo: 0532 303 90 89",
};

const parcaKategorileri = [
  {
    icon: "🔩",
    title: "Vinç Halatları ve Tel Kabloları",
    desc: "Çelik ve sentetik halat seçenekleri. Her kapasite ve uzunlukta orijinal vinç halatı.",
    fiyat: "850 TL'den başlayan",
    href: "/vinc-halati",
    ozellikler: ["Çelik halat", "Sentetik halat", "Her kapasiteye uygun"],
  },
  {
    icon: "🎮",
    title: "Vinç Kumanda Sistemleri ve Uzaktan Kumandalar",
    desc: "12V kablolu ve kablosuz vinç kumanda sistemleri. Çift yönlü uzaktan kumanda setleri.",
    fiyat: "1.200 TL'den başlayan",
    href: "/vinc-kumanda",
    ozellikler: ["Kablolu kumanda", "Kablosuz kumanda", "12V uyumlu"],
  },
  {
    icon: "⚙️",
    title: "Vinç Makaraları ve Kılavuzlar",
    desc: "Ağır yük kapasiteli makara sistemleri ve alüminyum kılavuz takımları.",
    fiyat: "650 TL'den başlayan",
    href: "/vinc-makarasi",
    ozellikler: ["Ağır yük", "Alüminyum kılavuz", "Uzun ömür"],
  },
  {
    icon: "🪝",
    title: "Vinç Kancaları ve Bağlantı Elemanları",
    desc: "Çelik kanca, döner çekme noktası ve yük bağlantı elemanları. Sertifikalı modeller.",
    fiyat: "450 TL'den başlayan",
    href: "/vinc-kancasi",
    ozellikler: ["Sertifikalı", "Döner kanca", "Yüksek dayanım"],
  },
  {
    icon: "⚡",
    title: "Vinç Elektrik ve Röle Sistemleri",
    desc: "Vinç röle setleri, soket ve elektrik kutusu yedek parçaları. Tüm marka uyumlu.",
    fiyat: "380 TL'den başlayan",
    href: "/vinc-roleleri",
    ozellikler: ["Evrensel uyum", "Röle seti", "Soket dahil"],
  },
  {
    icon: "🚗",
    title: "Çekme ve Kurtarma Aksesuarları",
    desc: "Bridle çekme halatı, şakl, D-ring ve kurtarma kayışları. Off-road için tam set.",
    fiyat: "950 TL'den başlayan",
    href: "/cekme-aksesuarlari",
    ozellikler: ["Bridle halat", "D-ring şakl", "Kurtarma seti"],
  },
];

const fiyatTablosu = [
  { parca: "Çelik Vinç Halatı (9mm x 28m)", birim: "Adet", fiyat: "1.850 TL", stok: "Stokta" },
  { parca: "Sentetik Vinç Halatı (10mm x 30m)", birim: "Adet", fiyat: "2.400 TL", stok: "Stokta" },
  { parca: "Kablosuz Uzaktan Kumanda Seti", birim: "Set", fiyat: "1.650 TL", stok: "Stokta" },
  { parca: "Vinç Röle ve Soket Seti", birim: "Set", fiyat: "850 TL", stok: "Stokta" },
  { parca: "Alüminyum Halat Kılavuzu", birim: "Adet", fiyat: "1.100 TL", stok: "Stokta" },
  { parca: "Döner Çekme Noktası (4.7 ton)", birim: "Adet", fiyat: "680 TL", stok: "Stokta" },
  { parca: "Vinç Bakım ve Aksesuar Kiti", birim: "Kit", fiyat: "Teklif alınız", stok: "Sipariş" },
  { parca: "Marka Uyumlu Tambur Yedek Parça", birim: "Adet", fiyat: "Teklif alınız", stok: "Sipariş" },
];

const kullanımAlanlari = [
  { icon: "🛻", title: "Off-Road", desc: "4x4 araç vinçleri için yedek parça ve kurtarma aksesuarları" },
  { icon: "🏗️", title: "İnşaat", desc: "Şantiye ve ağır iş vinçleri için orijinal yedek parçalar" },
  { icon: "🚢", title: "Denizcilik", desc: "Tekne ve gemi vinçleri için paslanmaz bağlantı elemanları" },
  { icon: "🚛", title: "Lojistik", desc: "Taşıma ve yük vincine özel kumanda ve elektrik setleri" },
  { icon: "🏭", title: "Sanayi", desc: "Fabrika ve tesis vinçleri için ağır yük yedek parçaları" },
  { icon: "🔧", title: "Servis", desc: "Vinç servis atölyeleri için toplu yedek parça ve bakım kitleri" },
];

const adimlar = [
  { no: "01", title: "Model Tespiti", desc: "Vinç markanızı ve modelinizi belirleyin veya bilmiyorsanız bizimle paylaşın." },
  { no: "02", title: "Parça Talebi", desc: "İhtiyaç duyduğunuz parçayı bize bildirin, stok durumunu anlık kontrol edelim." },
  { no: "03", title: "Fiyat Teklifi", desc: "Uygun fiyat teklifini hızlıca alın, ödeme seçeneklerini değerlendirin." },
  { no: "04", title: "Sipariş Onayı", desc: "Siparişinizi onaylayın, paketleme ve kargo sürecini başlatalım." },
  { no: "05", title: "Hızlı Kargo", desc: "Aynı gün veya ertesi gün kargo seçeneğiyle parçanız yola çıkar." },
  { no: "06", title: "Teslimat & Destek", desc: "Parça tesliminin ardından montaj ve kullanım desteği sağlıyoruz." },
];

const garantiBilgileri = [
  "Tüm yedek parçalar orijinal üretici sertifikasına sahiptir",
  "Çelik halatlar SGS ve CE belgeli olarak temin edilmektedir",
  "Elektrik ve kumanda setleri montaj öncesi test edilmektedir",
  "Kanca ve bağlantı elemanları yük testi belgesiyle birlikte teslim edilir",
  "Garanti süreci içinde arıza durumunda ücretsiz değişim yapılmaktadır",
  "Marka uyumsuzluğunda ürün iade ve değişim garantisi mevcuttur",
];

const sss = [
  {
    soru: "Hangi marka vinçler için yedek parça bulunabilir?",
    cevap: "Goliath, Warn, Ironman, Smittybilt, Runva, Dragon Winch ve diğer popüler vinç markalarına uyumlu yedek parça ve aksesuarlar stokta mevcuttur. Listelenmemiş markalar için lütfen bizimle iletişime geçin.",
  },
  {
    soru: "Sentetik halat ile çelik halat arasındaki fark nedir?",
    cevap: "Sentetik halatlar çelik halatlara göre çok daha hafiftir, kırılma anında geri tepmez ve suya dayanıklıdır. Çelik halatlar ise daha uzun ömürlü ve aşınmaya dayanıklıdır. Kullanım alanına göre doğru seçim için destek alabilirsiniz.",
  },
  {
    soru: "Kargo süresi ne kadardır?",
    cevap: "Stokta bulunan ürünler için aynı iş günü kargoya verilmektedir. Yurt içi kargo ile genellikle 1-3 iş günü içinde teslimat sağlanmaktadır. Özel sipariş parçalar için süre ayrıca bildirilir.",
  },
  {
    soru: "Ürünlerin garantisi var mı?",
    cevap: "Evet, tüm yedek parça ve aksesuarlar üretici garantisi kapsamındadır. Halatlar ve bağlantı elemanları için ek yük testi belgeleri talep edilebilir.",
  },
  {
    soru: "Toplu alımda indirim yapılıyor mu?",
    cevap: "Servisler, atölyeler ve kurumsal alıcılar için özel fiyatlandırma uygulanmaktadır. Toplu sipariş talepleriniz için 0532 303 90 89 numaralı hattı arayabilirsiniz.",
  },
];

const h3Bolumler = [
  {
    id: "celik-halat",
    baslik: "Çelik Vinç Halatı Çeşitleri ve Fiyatları",
    icerik: "Yüksek çekme dayanımlı galvanizli çelik halatlar, 6mm'den 14mm'ye kadar geniş çap yelpazesinde sunulmaktadır. 9mm x 28m standart set en çok tercih edilen modeldir. Tüm çelik halatlar CE ve SGS belgeli olup uzun ömürlü kullanım için sıkıştırılmış tel yapısına sahiptir.",
    icon: "🔗",
  },
  {
    id: "sentetik-halat",
    baslik: "Sentetik Vinç Halatı – Hafif ve Dayanıklı Seçenekler",
    icerik: "UHMWPE fiber teknolojisiyle üretilen sentetik halatlar, çelik halatlara kıyasla %70 daha hafif ve kırılma anında sıçrama riski olmayan güvenli bir alternatiftir. Özellikle off-road ve su geçişlerinde tercih edilir.",
    icon: "🧵",
  },
  {
    id: "kumanda",
    baslik: "12V Kablolu ve Kablosuz Vinç Kumandası",
    icerik: "Standart 12V sistemle uyumlu kablolu kumandalar ve 30 metreye kadar çalışma menzilli kablosuz uzaktan kumanda setleri mevcuttur. Çift yönlü kontrol, LED göstergeli ve su geçirmez yapıda modeller stokta bulunmaktadır.",
    icon: "📡",
  },
  {
    id: "role",
    baslik: "Yedek Vinç Röle ve Soket Setleri",
    icerik: "Tüm marka vinçlerle uyumlu 4-pin ve 6-pin soket setleri, kontaktör ve röle takımları. Korozyon önleyici kaplama ile uzun ömürlü bağlantı sağlar. Kurulum kılavuzu ile birlikte teslim edilir.",
    icon: "🔌",
  },
  {
    id: "makara",
    baslik: "Ağır Yük İçin Vinç Makarası Modelleri",
    icerik: "4.5 ton ile 9 ton arasında yük kapasitesine sahip çelik ve alüminyum makara seçenekleri. Snatch block olarak kullanılan bu makaralar, vinç çekiş gücünü ikiye katlamak için idealdir.",
    icon: "🎡",
  },
  {
    id: "cekme-halati",
    baslik: "Çekme Halatı ve Bridle Çekme Halatları",
    icerik: "Yüksek dayanımlı polyester kinetic çekme halatları ve V şeklinde bridle çekme halatları ile vinç yükünü iki noktadan dağıtarak güvenli kurtarma sağlayın. Araç şasisine zarar vermez.",
    icon: "↔️",
  },
  {
    id: "kanca",
    baslik: "Kanca ve Döner Çekme Noktası Seçenekleri",
    icerik: "Kilit mekanizmalı güvenlik kancaları ve 360° döner çekme noktaları. Yük altında burulma ve halat dolanmasını önler. 3.5 ton ile 8 ton arasında çeşitli kapasitelerde mevcuttur.",
    icon: "🔒",
  },
  {
    id: "denge",
    baslik: "Yük Dengeleme ve Stabilizasyon Aksesuarları",
    icerik: "Çekme esnasında araç stabilitesini artıran yük dengeleme kayışları, saplama ve kilit sistemleri. Kurtarma operasyonlarında yana kayma ve devirmeyi önleyen aksesuarlar.",
    icon: "⚖️",
  },
  {
    id: "kilavuz",
    baslik: "Vinç Alüminyum Roller ve Kılavuz Takımları",
    icerik: "4 yönlü alüminyum roller kılavuzlar ve fairlead setleri, halatın düzgün sarılmasını ve tambura zarar vermemesini sağlar. Hawse ve roller olmak üzere iki tip kılavuz stokta mevcuttur.",
    icon: "🛤️",
  },
  {
    id: "elektrik-kutusu",
    baslik: "Off-Road Vinç İçin Yedek Elektrik Kutusu",
    icerik: "Sertleştirilmiş plastik gövde ve su geçirmez contasıyla üretilen yedek kontrol kutusu ve bağlantı kapakları. Devre koruyucu sigortalar ve kablo girişleriyle komple set halinde temin edilir.",
    icon: "📦",
  },
  {
    id: "marka-uyumlu",
    baslik: "Goliath, Warn, Ironman Uyumlu Yedek Parçalar",
    icerik: "Türkiye'de en yaygın kullanılan vinç markalarına özel yedek parçalar stokta mevcuttur. Goliath 9500, Warn VR10, Ironman 4x4 modelleri başta olmak üzere tüm popüler seriler için parça temini yapılmaktadır.",
    icon: "🏷️",
  },
  {
    id: "bakim-kiti",
    baslik: "Vinç Bakım Seti ve Aksesuar Kitleri",
    icerik: "Halat yağlama spreyinden tambur temizleme takımına, soket koruyucudan kılavuz kilidine kadar eksiksiz bakım kitleri. Periyodik bakımı kolaylaştıran komple setler tek kutu içinde sunulmaktadır.",
    icon: "🧰",
  },
];

export default function VincYedekParcaPage() {
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
              🔧 Vinç Yedek Parça ve Aksesuar Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Vinç Yedek Parça ve<br />{" "}
              <span className="text-yellow-400">Aksesuar</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Orijinal parçalar, sertifikalı halatlar ve marka uyumlu aksesuar. Goliath, Warn,
              Ironman ve daha fazlası için hızlı kargo ile kapınıza teslim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Sipariş Ver
              </a>
              <a
                href="#parca-kategorileri"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Parça Kategorilerini İncele ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { deger: "500+", label: "Stok Çeşidi" },
              { deger: "Aynı Gün", label: "Kargo İmkânı" },
              { deger: "10+", label: "Marka Uyumu" },
              { deger: "7/24", label: "Teknik Destek" },
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
            <h2 className="text-4xl font-black mb-4">Vinç Yedek Parça Fiyatları 2026</h2>
            <p className="text-gray-400 text-lg">Fiyatlar parça çeşidi ve miktara göre değişiklik gösterebilir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="text-left px-6 py-4 font-semibold">Parça / Aksesuar</th>
                  <th className="text-center px-6 py-4 font-semibold">Birim</th>
                  <th className="text-center px-6 py-4 font-semibold">Fiyat</th>
                  <th className="text-center px-6 py-4 font-semibold">Stok Durumu</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((f, i) => (
                  <tr
                    key={f.parca}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}`}
                  >
                    <td className="px-6 py-4 font-medium text-white">{f.parca}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{f.birim}</td>
                    <td className="px-6 py-4 text-center text-yellow-400">{f.fiyat}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${f.stok === "Stokta" ? "bg-green-900 text-green-400" : "bg-gray-700 text-gray-400"}`}>
                        {f.stok}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            * Fiyatlar KDV hariç olup stok durumu ve miktara göre değişebilir.
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

      {/* Vinç Yedek Parça Nedir */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Temel Bilgiler</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Yedek Parça Seçerken Dikkat Edilmesi Gerekenler</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Vinç performansı ve güvenliği doğrudan kullanılan yedek parçanın kalitesine bağlıdır.
              Orijinal veya OEM uyumlu parçalar, vinç ömrünü uzatır ve arıza riskini minimuma indirir.
              Özellikle halat, kanca ve elektrik sistemlerinde mutlaka sertifikalı ürünler tercih edilmelidir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">📋 Marka Uyumluluğu</h3>
              <p className="text-gray-500 text-sm">Parçanın vinç marka ve modeline göre seçilmesi doğru çalışma için zorunludur.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏋️ Kapasite ve Yük Değeri</h3>
              <p className="text-gray-500 text-sm">Halat, kanca ve makara seçiminde mutlaka vinç çekiş kapasitesiyle eşleşen ürün kullanın.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-2">🏅 Sertifika ve Belge</h3>
              <p className="text-gray-500 text-sm">CE, SGS veya üretici onaylı ürünler seçin; belgesiz parçalar güvenlik riski oluşturabilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parça Kategorileri */}
      <section id="parca-kategorileri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Ürün Grupları</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Halatları ve Tel Kabloları ile Tüm Parça Kategorileri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her marka ve kapasiteye uygun yedek parça. İhtiyacınıza göre doğru ürünü belirleyin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parcaKategorileri.map((v) => (
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
                      <div className="text-xs text-gray-400">Başlangıç Fiyatı</div>
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

          {/* Halat ve Kumanda Alt Bölümler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔗 Vinç Kumanda Sistemleri ve Uzaktan Kumandalar</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Arıza yapan ya da hasar gören vinç kumandalarını değiştirmek için orijinal ve evrensel
                uyumlu kumanda setleri stokta mevcuttur. Kablolu ve kablosuz seçenekler, tüm popüler
                12V vinç sistemleriyle uyumlu olarak sunulmaktadır.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚙️ Vinç Tambur ve Dişli Yedek Parçaları</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tambur, dişli kutusu ve mil yedek parçaları vinç performansının sürdürülmesi açısından
                kritik öneme sahiptir. Marka uyumlu orijinal parçalar ve muadil seçenekler için
                teknik ekibimizle iletişime geçin.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Çekme ve Kurtarma Aksesuarları ile Kullanım Alanları</h2>
            <p className="text-gray-500 text-lg">Vinç yedek parça ve aksesuarları hangi sektörlerde kullanılır?</p>
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

          {/* Off-Road / Sanayi Alt Bölüm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛻 Sentetik ve Çelik Halat Seçenekleri</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Off-road tutkunları ve profesyonel kurtarma ekipleri için hem sentetik hem de çelik
                halat alternatifleri mevcuttur. Araç tipine, kullanım sıklığına ve bütçeye göre doğru
                halat seçimi için teknik destek alabilirsiniz.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏭 Vinç Güvenlik Ekipmanları</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ağır sanayi ve inşaat sektörü için sertifikalı vinç güvenlik ekipmanları; kilit
                mekanizmalı kancalar, yük göstergeli halatlar ve acil durdurma sistemleri toplu
                sipariş imkânıyla temin edilmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Neden Biz?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Marka Bazlı Vinç Yedek Parçalarında Farkımız</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "✅", title: "Orijinal ve OEM Parça", desc: "Üretici onaylı veya eşdeğer kalitede OEM parçalar. Muadil ürünlerde tam uyumluluk garantisi." },
              { icon: "🚀", title: "Hızlı Kargo", desc: "Stokta olan ürünler için aynı gün kargo seçeneği. Tüm Türkiye'ye 1-3 iş günü teslimat." },
              { icon: "📞", title: "Teknik Destek", desc: "Parça seçimi ve montaj konusunda 7/24 telefon desteği. Yanlış ürün alma riskini ortadan kaldırın." },
              { icon: "🔄", title: "Kolay İade", desc: "Yanlış parça siparişi veya uyumsuzluk durumunda sorunsuz iade ve değişim imkânı." },
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

      {/* Sipariş Süreci */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Nasıl Çalışır?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Yedek Parça Sipariş Süreci</h2>
            <p className="text-gray-500 text-lg">6 adımda hızlı ve güvenli parça temini</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adimlar.map((a) => (
              <div key={a.no} className="relative p-6 border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-lg transition group bg-gray-50">
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

      {/* Parça Detay H3 Bölümleri */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Detaylı Ürün Bilgisi</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Bakım Seti ve Aksesuar Kitleri – Tüm Kategoriler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {h3Bolumler.map((b) => (
              <div key={b.id} id={b.id} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-300 transition">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{b.icon} {b.baslik}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.icerik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanti */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Orijinal Parça Garantisi ve Sertifikalı Ürünler</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Vinç güvenliği, kullanılan yedek parçanın kalitesiyle doğru orantılıdır.
                Tüm ürünlerimiz sertifikalı tedarikçilerden temin edilmekte ve
                size ulaşmadan önce kalite kontrolünden geçmektedir.
              </p>
            </div>
            <div className="space-y-3">
              {garantiBilgileri.map((kural) => (
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Yedek Parça Hakkında Sıkça Sorulan Sorular</h2>
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
          <h2 className="text-4xl font-black mb-4">İhtiyacınız Olan Parça İçin Teklif Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, ihtiyacınıza en uygun parçayı birlikte belirleyelim.
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
