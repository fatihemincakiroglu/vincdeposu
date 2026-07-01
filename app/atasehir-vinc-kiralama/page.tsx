import type { Metadata } from "next";
import Link from "next/link";
import IlceGrid from "@/components/IlceGrid";

export const metadata: Metadata = {
  alternates: {
    canonical: "/atasehir-vinc-kiralama",
  },
  title: { absolute: "Ataşehir Vinç Kiralama ve Ataşehir Kiralık Vinç" },
  description:
    "Ataşehir vinç kiralama hizmetleri ile güvenli ve profesyonel çözümler sunuyoruz. Günlük, aylık Ataşehir kiralık vinç seçenekleri için hemen bize ulaşın!",
  keywords: ["avcılar vinç kiralama", "avcılar kiralık vinç", "vinç kiralama avcılar", "avcılar sepetli vinç", "avcılar mobil vinç kiralama"],
};

/* ─────────────────────────────────────────────
   VERİ
───────────────────────────────────────────── */

const vincTurleri = [
  {
    icon: "🚛",
    renk: "#F59E0B",
    renkBg: "#FEF3C7",
    title: "Sepetli Vinç",
    href: "/sepetli-vinc",
    kapasite: "12m – 90m",
    kullanim: "Cam cephe, ofis kulesi bakımı",
    desc: "Ataşehir'in finans merkezindeki cam cepheli ofis kulelerinin temizlik, bakım ve tadilat işlerinde yüksek erişimli sepetli vinçlerimiz tercih edilir.",
    ozellikler: ["Cam cephe bakımı", "Yüksek erişim", "Hızlı kurulum", "Geniş erişim açısı"],
  },
  {
    icon: "🏗️",
    renk: "#3B82F6",
    renkBg: "#DBEAFE",
    title: "Mobil Vinç",
    href: "/mobil-vinc",
    kapasite: "25 – 500 ton",
    kullanim: "Ofis kulesi, rezidans inşaatı",
    desc: "Ataşehir'in geniş ve düzenli cadde yapısında hızlı mobilizasyon sağlayan mobil vinçlerimiz, kurumsal ofis ve rezidans projelerinde yaygın kullanılır.",
    ozellikler: ["Hızlı mobilizasyon", "Yüksek kapasite", "Geniş cadde uyumu", "Farklı bom uzunlukları"],
  },
  {
    icon: "🗼",
    renk: "#8B5CF6",
    renkBg: "#EDE9FE",
    title: "Kule Vinç",
    href: "/kule-vinc",
    kapasite: "1 – 25 ton",
    kullanim: "Yüksek katlı kule inşaatı",
    desc: "Ataşehir'deki çok katlı ofis kulesi ve rezidans projelerinde aylarca sabit çalışan, yüksek irtifada hassas yük taşıma yapan vinç türü.",
    ozellikler: ["Yüksek katlı proje", "Yüksek irtifa", "Sabit kurulum", "Düşük günlük maliyet"],
  },
  {
    icon: "🦾",
    renk: "#14B8A6",
    renkBg: "#CCFBF1",
    title: "Eklemli Platform",
    href: "/eklemli-platform",
    kapasite: "10m – 43m",
    kullanim: "Ofis içi, otopark, atrium",
    desc: "Plaza ve AVM gibi yapıların atrium, otopark ve iç mekan bakım çalışmalarında engelleri aşarak erişim sağlayan eklemli platformlar.",
    ozellikler: ["İç mekan erişimi", "Engel aşma kabiliyeti", "Akülü-sessiz modeller", "Otopark uyumlu"],
  },
  {
    icon: "⬆️",
    renk: "#F59E0B",
    renkBg: "#FEF3C7",
    title: "Makaslı Platform",
    href: "/makasli-platform",
    kapasite: "4m – 18m",
    kullanim: "Plaza lobisi, geniş ofis katı",
    desc: "Plaza lobileri ve geniş ofis katlarında aydınlatma, tavan ve tesisat işlerinde stabil ve geniş çalışma alanı sunan makaslı platformlar.",
    ozellikler: ["Geniş platform", "Lobi/ofis uyumlu", "Çok kişili çalışma", "Düz zemin idealdir"],
  },
  {
    icon: "🚚",
    renk: "#10B981",
    renkBg: "#D1FAE5",
    title: "Kamyon Üstü Vinç",
    href: "/kamyon-ustu-vinc",
    kapasite: "3 – 50 ton",
    kullanim: "Ofis taşıma, malzeme indirme",
    desc: "Kurumsal ofis taşımalarında ve plaza giriş/çıkışlarında yük indirme-bindirme işlemlerini hızlandıran pratik araç üstü vinç çözümü.",
    ozellikler: ["Yük taşıma + indirme", "Plaza/ofis uyumu", "Hızlı teslimat", "Araç üstü çalışma"],
  },
];

const fiyatTablosu = [
  { tur: "18m Sepetli Vinç", saatlik: "1.500 TL", gunluk: "8.000 TL", haftalik: "45.000 TL", aylik: "Teklif" },
  { tur: "32m Sepetli Vinç", saatlik: "2.000 TL", gunluk: "10.000 TL", haftalik: "55.000 TL", aylik: "Teklif" },
  { tur: "53m Sepetli Vinç", saatlik: "3.000 TL", gunluk: "14.000 TL", haftalik: "75.000 TL", aylik: "Teklif" },
  { tur: "Mobil Vinç (50t)", saatlik: "1.500 TL", gunluk: "15.000 TL", haftalik: "80.000 TL", aylik: "250.000 TL" },
  { tur: "Kule Vinç", saatlik: "—", gunluk: "3.000 TL", haftalik: "18.000 TL", aylik: "65.000 TL" },
  { tur: "Eklemli Platform", saatlik: "Teklif", gunluk: "9.000 TL", haftalik: "48.000 TL", aylik: "Teklif" },
  { tur: "Makaslı Platform", saatlik: "Teklif", gunluk: "7.000 TL", haftalik: "40.000 TL", aylik: "Teklif" },
  { tur: "Operatör (ek)", saatlik: "500 TL", gunluk: "2.000 TL", haftalik: "10.000 TL", aylik: "35.000 TL" },
];

const kullanımAlanlari = [
  { icon: "🏢", title: "Ofis Kulesi Cephe Bakımı", desc: "Finans merkezindeki banka ve şirket genel müdürlük binalarının cam cephe temizliği ve bakımı." },
  { icon: "🏙️", title: "Rezidans İnşaatı", desc: "Ataşehir'in yüksek katlı konut/rezidans projelerinde kaba inşaat ve cephe montaj işleri." },
  { icon: "🛒", title: "AVM & Plaza Operasyonları", desc: "Alışveriş merkezleri ve plazalarda tabela, aydınlatma ve iç mekan bakım çalışmaları." },
  { icon: "🅿️", title: "Otopark & Atrium", desc: "Kapalı otopark ve atrium alanlarında tesisat, aydınlatma ve tavan işleri için kompakt ekipman." },
  { icon: "📡", title: "Kurumsal Altyapı", desc: "Şirket merkezlerinde jeneratör, klima santrali ve çatı ekipmanı taşıma-yerleştirme." },
  { icon: "🛣️", title: "TEM Otoyolu Çevresi", desc: "TEM Otoyolu'na yakın lojistik ve ticari yapı projelerinde ağır ekipman desteği." },
];

const adimlar = [
  { no: "01", icon: "📞", title: "Arayın veya WhatsApp Yazın", desc: "Projenizi, yükün ağırlığını, çalışma yüksekliğini ve süreyi belirtin." },
  { no: "02", icon: "🔍", title: "Keşif & Uygun Vinç Seçimi", desc: "Uzmanımız projenizi ve bina/plaza yönetimi gereksinimlerini analiz eder." },
  { no: "03", icon: "📋", title: "Fiyat Teklifi", desc: "Şeffaf, kalem kalem fiyatlandırma e-posta ile iletilir." },
  { no: "04", icon: "✍️", title: "Sözleşme İmzalanır", desc: "Kiralama koşulları, sigorta ve operatör detayları netleşir." },
  { no: "05", icon: "🚛", title: "Vinç Ataşehir'e Teslim Edilir", desc: "Belirlenen tarihte Ataşehir'deki plaza veya şantiyenize kurulum ekibi ile ulaşırız." },
  { no: "06", icon: "✅", title: "İş Tamamlanır", desc: "Operasyon sona erince vinç teslim alınır, alan temizlenir." },
];

const neden = [
  { icon: "🏆", title: "25 Yıllık Deneyim", desc: "Sektörde çeyrek asır, 1000+ başarıyla tamamlanan proje." },
  { icon: "🛡️", title: "Tam Sigortalı", desc: "Tüm ekipman ve operasyonlar kapsamlı sigorta güvencesinde." },
  { icon: "🏢", title: "Plaza & Kurumsal Bina Deneyimi", desc: "Bina yönetimi prosedürlerine uygun, düzenli ofis/plaza müşterilerinden referanslı hizmet." },
  { icon: "👷", title: "Sertifikalı Operatör", desc: "MEB onaylı belgeli, ISG eğitimli operatörler." },
  { icon: "🔧", title: "Bakımlı Filo", desc: "Her ekipman periyodik bakımdan geçer, arıza riski minimumda." },
  { icon: "📞", title: "7/24 Destek", desc: "Gece, hafta sonu, resmi tatil dahil her an ulaşabilirsiniz." },
];

const sss = [
  {
    s: "Ataşehir'de vinç kiralama fiyatları nasıl belirleniyor?",
    c: "Ataşehir'de vinç kiralama fiyatı; seçilen vinç türü ve kapasitesi, çalışma yüksekliği (özellikle yüksek katlı ofis kuleleri için), kiralama süresi ve operatör ihtiyacına göre değişir.",
  },
  {
    s: "Plaza ve ofis binalarında çalışma izni süreci nasıl işliyor?",
    c: "Bina yönetimi veya site yönetiminin gerektirdiği güvenlik ve çalışma izni süreçlerini sizinle koordineli şekilde yönetiyoruz; gerekli evrak ve sigorta belgelerini önceden hazırlıyoruz.",
  },
  {
    s: "Cam cephe binalarda hangi vinç türü kullanılıyor?",
    c: "Yüksek katlı cam cephe binalarda genellikle 32-53 metre erişimli sepetli vinçler kullanılır; bina yüksekliği ve cephe açısına göre uygun model belirlenir.",
  },
  {
    s: "Hafta sonu veya mesai dışında çalışma yapılıyor mu?",
    c: "Evet. Plaza ve ofis binalarının çalışma saatlerini etkilememek için hafta sonu veya akşam saatlerinde operasyon planlaması yapılabilir.",
  },
  {
    s: "Operatörsüz vinç kiralayabilir miyim?",
    c: "Teknik olarak mümkün olsa da yasal düzenlemeler gereği belgeli operatör zorunludur. Operatörsüz kullanım iş güvenliği ihlali oluşturur ve yaptırım gerektirir.",
  },
  {
    s: "Minimum kiralama süresi ne kadar?",
    c: "Sepetli vinçte minimum yarım gün (4 saat), mobil ve kule vinçte minimum 1 tam gün uygulanmaktadır.",
  },
  {
    s: "Fiyata ne dahil, ne değil?",
    c: "Standart fiyata vinç, operatör ve sigorta dahildir. Şehir dışı nakliye, gece çalışması ve özel izin ücretleri ayrıca yansıtılır.",
  },
  {
    s: "Uzun dönem kiralama daha mı ucuz?",
    c: "Evet. Aylık ve üzeri kiralamalarda günlük fiyata göre %20–35 indirim uygulanmaktadır. Kurumsal müşteriler için çerçeve anlaşma seçenekleri de sunulmaktadır.",
  },
];

const istatistikler = [
  { v: "39", l: "İlçede Hizmet", icon: "📍" },
  { v: "25+", l: "Yıllık Deneyim", icon: "🏆" },
  { v: "1000+", l: "Tamamlanan Proje", icon: "✅" },
  { v: "90 dk", l: "Acil Yanıt Süresi", icon: "⚡" },
  { v: "50+", l: "Belgeli Operatör", icon: "👷" },
  { v: "7/24", l: "Destek Hattı", icon: "📞" },
];


export default function AtasehirVincKiralamaPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-gray-950 text-white min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-yellow-400 opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Sol */}
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 text-sm font-bold tracking-wide">Ataşehir Bölgesinde 7/24</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-8">
                Ataşehir<br />{" "}
                <span className="text-yellow-400">Vinç</span><br />{" "}
                Kiralama
              </h1>

              <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                Ataşehir ve çevresinde sepetli vinç, mobil vinç, kule vinç, makaslı ve eklemli
                platform seçenekleriyle hizmet veriyoruz. Sertifikalı operatör, tam sigorta ve
                aynı gün teslimatla profesyonel vinç kiralama hizmeti sunuyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:05323039089"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-5 rounded-2xl text-lg transition text-center shadow-lg shadow-yellow-400/20"
                >
                  📞 0532 303 90 89
                </a>
                <a
                  href="#vinc-turleri"
                  className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-5 rounded-2xl text-lg transition text-center"
                >
                  Vinç Türlerini Keşfet ↓
                </a>
              </div>

              {/* Mini istatistikler */}
              <div className="grid grid-cols-3 gap-5 border-t border-white/10 pt-8">
                {[
                  { v: "39", l: "İlçe" },
                  { v: "25+", l: "Yıl Deneyim" },
                  { v: "7/24", l: "Destek" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black text-yellow-400">{s.v}</div>
                    <div className="text-gray-500 text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ — Vinç türü grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {vincTurleri.slice(0, 6).map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-yellow-400/40 transition"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-3"
                    style={{ background: v.renk + "25" }}
                  >
                    {v.icon}
                  </div>
                  <div className="text-white font-bold text-sm group-hover:text-yellow-400 transition mb-1">{v.title}</div>
                  <div className="text-gray-500 text-xs">{v.kapasite}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          İSTATİSTİK BARI
      ══════════════════════════════════════ */}
      <section className="bg-gray-900 py-10 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {istatistikler.map((s) => (
            <div key={s.l}>
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-black text-yellow-400">{s.v}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          VİNÇ TÜRLERİ
      ══════════════════════════════════════ */}
      <section id="vinc-turleri" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Ürün Kataloğu</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Ataşehir Vinç Kiralama Türleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Projenizin ölçeğine ve ihtiyacına göre doğru vinç türünü seçin. Uzmanımız en uygun seçeneği belirler.
            </p>
          </div>

          <div className="space-y-6">
            {vincTurleri.map((v) => (
              <div
                key={v.href}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
                  style={{ background: `linear-gradient(135deg, ${v.renk}15 0%, ${v.renk}04 100%)`, borderBottom: `2px solid ${v.renk}25` }}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: v.renkBg, border: `2px solid ${v.renk}40` }}
                    >
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1">Ataşehir {v.title} Kiralama</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-gray-500">
                          <span>⚖️</span> Kapasite: <strong className="text-gray-800">{v.kapasite}</strong>
                        </span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <span>🔨</span> Kullanım: <strong className="text-gray-800">{v.kullanim}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl transition text-sm whitespace-nowrap flex-shrink-0 text-white hover:opacity-90"
                    style={{ background: v.renk }}
                  >
                    Detaylı Bilgi →
                  </Link>
                </div>

                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-5">{v.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {v.ozellikler.map((o) => (
                        <div key={o} className="flex items-center gap-2.5">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                            style={{ background: v.renk }}
                          >
                            ✓
                          </div>
                          <span className="text-gray-700 text-sm">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="rounded-2xl p-5 text-center flex flex-col items-center justify-center gap-3"
                    style={{ background: v.renkBg, border: `1px solid ${v.renk}30` }}
                  >
                    <div className="text-4xl">{v.icon}</div>
                    <div className="font-black text-gray-900">{v.title}</div>
                    <div className="text-sm text-gray-600">{v.kapasite}</div>
                    <a
                      href="tel:05323039089"
                      className="mt-2 w-full text-center text-sm font-bold py-2.5 rounded-xl text-white transition hover:opacity-90"
                      style={{ background: v.renk }}
                    >
                      📞 Fiyat Al
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FİYAT TABLOSU
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Fiyatlandırma</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Ataşehir Vinç Kiralama Fiyat Listesi</h2>
            <p className="text-gray-500 text-lg">
              Aşağıdaki fiyatlar yol gösterici niteliktedir. Projenize özel teklif için arayın.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-5 font-black text-base">Vinç / Hizmet</th>
                  <th className="text-center px-5 py-5 font-bold">Saatlik</th>
                  <th className="text-center px-5 py-5 font-bold">Günlük</th>
                  <th className="text-center px-5 py-5 font-bold">Haftalık</th>
                  <th className="text-center px-5 py-5 font-bold">Aylık</th>
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map((r, i) => (
                  <tr
                    key={r.tur}
                    className={`border-b border-gray-100 hover:bg-yellow-50 transition ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 font-bold text-gray-900">{r.tur}</td>
                    <td className="px-5 py-4 text-center text-gray-700">{r.saatlik}</td>
                    <td className="px-5 py-4 text-center text-gray-700 font-medium">{r.gunluk}</td>
                    <td className="px-5 py-4 text-center text-gray-700">{r.haftalik}</td>
                    <td className="px-5 py-4 text-center font-bold text-yellow-600">{r.aylik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">Fiyata dahil</div>
                <div className="text-gray-600 text-xs leading-relaxed">Vinç, sertifikalı operatör ve sigorta standartta dahildir.</div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">Ek ücretler</div>
                <div className="text-gray-600 text-xs leading-relaxed">Ataşehir dışı nakliye, gece mesaisi ve özel izin ayrıca fiyatlandırılır.</div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">Uzun dönem indirim</div>
                <div className="text-gray-600 text-xs leading-relaxed">Aylık kiralama anlaşmalarında %20–35 indirim uygulanmaktadır.</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-400">
            * Tüm fiyatlar KDV hariç olup piyasa koşullarına göre değişkenlik gösterebilir. Projenize özel kesin fiyat için teklif alınız.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KULLANIM ALANLARI
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Nerede Kullanılır?</span>
            <h2 className="text-4xl font-black mt-3 mb-4">Ataşehir Vinç Kiralama Kullanım Alanları</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ofis kulelerinden plazalara, rezidanslardan AVM&apos;lere — Ataşehir&apos;de vinç gereken her yerde yanınızdayız.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {kullanımAlanlari.map((k) => (
              <div
                key={k.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/30 transition group"
              >
                <div className="text-4xl mb-4">{k.icon}</div>
                <h4 className="text-white font-black mb-2 group-hover:text-yellow-400 transition">{k.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SÜREÇ
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Nasıl Çalışır?</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">6 Adımda Ataşehir Vinç Kiralama</h2>
            <p className="text-gray-500 text-lg">Telefon etmekten sahaya teslimata, her adım kolay ve şeffaf.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {adimlar.map((a, i) => (
              <div key={a.no} className="text-center relative">
                {i < adimlar.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-yellow-400/40 to-yellow-400/10" />
                )}
                <div className="w-16 h-16 bg-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 relative z-10">
                  {a.icon}
                </div>
                <div className="text-yellow-500 text-xs font-black tracking-widest mb-2">{a.no}</div>
                <h4 className="text-gray-900 font-black text-sm mb-2">{a.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="tel:05323039089"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-5 rounded-2xl text-lg transition shadow-lg shadow-yellow-400/20"
            >
              📞 Hemen Başlayın — 0532 303 90 89
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NEDEN BİZ
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div>
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Neden Biz?</span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                Ataşehir Bölgesinin<br />Tercih Ettiği<br />Vinç Kiralama Firması
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Ataşehir&apos;de 25 yılı aşkın deneyim, geniş ve bakımlı filomuz, sertifikalı
                operatörlerimiz ve 7/24 destek hattımızla Ataşehir vinç kiralama sektöründe fark yaratıyoruz.
              </p>
              <a
                href="tel:05323039089"
                className="inline-block bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-black px-6 py-4 rounded-xl transition"
              >
                Hemen Arayın
              </a>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {neden.map((n) => (
                <div
                  key={n.title}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-yellow-300 hover:shadow-md transition group"
                >
                  <div className="text-3xl flex-shrink-0">{n.icon}</div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-1 group-hover:text-yellow-600 transition">{n.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SSS
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">SSS</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Ataşehir Vinç Kiralama Sık Sorulan Sorular</h2>
            <p className="text-gray-500 text-lg">Ataşehir vinç kiralama hakkında en çok merak edilenler.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {sss.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-6 hover:border-yellow-300 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-black text-sm flex-shrink-0 mt-0.5">
                    S{i + 1}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 mb-2">{item.s}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.c}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-yellow-400 rounded-3xl text-center">
            <div className="text-2xl font-black text-gray-900 mb-2">Ataşehir vinç kiralama hakkında başka sorunuz mu var?</div>
            <p className="text-gray-800 mb-6">Uzmanlarımız 7/24 hatta, hemen yanıt alın.</p>
            <a
              href="tel:05323039089"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl transition"
            >
              📞 0532 303 90 89 — Hemen Ara
            </a>
          </div>
        </div>
      </section>

      <IlceGrid aktifSlug="atasehir" />

      {/* ══════════════════════════════════════
          DİĞER HİZMETLER
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Diğer Hizmetler</span>
            <h2 className="text-3xl font-black text-gray-900 mt-3">Ataşehir Vinç Kiralama ile Birlikte</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "👷", title: "Operatörlü Hizmet", desc: "Sertifikalı operatör ile tam hizmet paketi.", href: "/operatorlu-vinc-hizmeti", renk: "#10B981" },
              { icon: "🔧", title: "Bakım & Onarım", desc: "Vinci arızalandığında saha servisi.", href: "/vinc-bakim-ve-onarim", renk: "#3B82F6" },
              { icon: "🚨", title: "Acil Hizmet", desc: "7/24 acil vinç ihtiyaçlarınız için.", href: "/vinc-acil-durum-hizmetleri", renk: "#EF4444" },
              { icon: "🚛", title: "Taşıma & Lojistik", desc: "Vinç nakliye ve şantiye kurulumu.", href: "/vinc-tasima-ve-lojistik", renk: "#14B8A6" },
            ].map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-md transition"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: h.renk + "20" }}
                >
                  {h.icon}
                </div>
                <h4 className="font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition">{h.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{h.desc}</p>
                <span className="text-sm font-bold" style={{ color: h.renk }}>İncele →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SON CTA
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <div className="text-4xl font-black text-gray-900 mb-3">
              Ataşehir&apos;de kiralık vinç ihtiyacınız mı var?
            </div>
            <div className="text-gray-800 text-lg">
              Projenizi anlatın, projeniz için doğru vinci hemen belirleyelim.
            </div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-black px-10 py-5 rounded-2xl transition text-lg"
            >
              📞 Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-10 py-5 rounded-2xl transition text-lg"
            >
              Teklif Al →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
