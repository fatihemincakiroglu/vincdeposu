import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/vinc-sertifikasyon-ve-egitim",
  },
  title: "Vinç Sertifikasyon ve Eğitim Hizmetleri | Operatör Belgelendirme",
  description:
    "Vinç operatörlüğü sertifikaları, teknik eğitimler, İSG ve kalite yönetim sistemleri. G ve H sınıfı belgelendirme, ISO 9001, ISO 45001 ve sektöre özel eğitim programları. 0532 303 90 89",
};

const kategoriler = [
  {
    no: "01",
    icon: "🎓",
    title: "Mesleki Sertifikalar",
    desc: "Vinç operatörlüğü için yasal mevzuata uygun G ve H sınıfı belgelendirme programları.",
  },
  {
    no: "02",
    icon: "🔧",
    title: "Teknik Eğitimler",
    desc: "Hidrolik sistemler, bakım-onarım ve arıza tespiti üzerine uygulamalı teknik eğitimler.",
  },
  {
    no: "03",
    icon: "👔",
    title: "Liderlik ve Yönetim",
    desc: "Saha ekipleri ve operasyon yöneticileri için yönetim becerisi geliştirme programları.",
  },
  {
    no: "04",
    icon: "💻",
    title: "Dijital Dönüşüm",
    desc: "Uzaktan izleme, sensör tabanlı bakım ve dijital filo yönetimi konularında eğitimler.",
  },
  {
    no: "05",
    icon: "🦺",
    title: "İş Sağlığı ve Güvenliği",
    desc: "Yüksekte çalışma, kaldırma operasyonları ve saha güvenliği üzerine zorunlu İSG eğitimleri.",
  },
  {
    no: "06",
    icon: "📋",
    title: "Kalite Yönetim Sistemleri",
    desc: "ISO standartlarına uygun kalite ve süreç yönetimi sertifikasyon programları.",
  },
  {
    no: "07",
    icon: "🖥️",
    title: "Yazılım ve Programlama",
    desc: "Vinç kontrol sistemleri, PLC programlama ve otomasyon yazılımları üzerine eğitimler.",
  },
  {
    no: "08",
    icon: "💰",
    title: "Finans ve Muhasebe",
    desc: "Filo maliyet yönetimi, kiralama finansmanı ve yatırım analizi konularında eğitimler.",
  },
  {
    no: "09",
    icon: "📐",
    title: "Proje Yönetimi",
    desc: "İnşaat ve sanayi projelerinde vinç operasyonlarının planlanması ve koordinasyonu.",
  },
  {
    no: "10",
    icon: "🌱",
    title: "Kişisel Gelişim",
    desc: "Operatör ve saha personeli için iletişim, stres yönetimi ve karar alma becerileri.",
  },
];

const altKategoriler = [
  { no: "01", title: "ISO 9001 Kalite Yönetimi", desc: "Vinç bakım ve hizmet süreçlerinde kalite standardının kurumsallaştırılması.", grup: "Kalite Yönetim Sistemleri" },
  { no: "02", title: "ISO 45001 İSG Sertifikası", desc: "İş sağlığı ve güvenliği yönetim sistemi kurulumu ve belgelendirme süreci.", grup: "İş Sağlığı ve Güvenliği" },
  { no: "03", title: "G ve H Sınıfı Operatör Belgesi", desc: "Vinç operatörlüğü için yasal zorunlu mesleki yeterlilik belgesi eğitimi.", grup: "Mesleki Sertifikalar" },
  { no: "04", title: "Yüksekte Çalışma Güvenliği", desc: "Sepetli vinç ve platform operasyonlarında yüksekte çalışma risklerine yönelik eğitim.", grup: "İş Sağlığı ve Güvenliği" },
  { no: "05", title: "Hidrolik Sistemler Eğitimi", desc: "Vinçlerin hidrolik pompa, valf ve silindir sistemlerinin çalışma prensipleri.", grup: "Teknik Eğitimler" },
  { no: "06", title: "Arıza Tespiti ve Saha Onarımı", desc: "Mekanik, elektrik ve hidrolik arızaların sahada hızlı teşhis ve müdahale teknikleri.", grup: "Teknik Eğitimler" },
  { no: "07", title: "Saha Operasyon Yöneticiliği", desc: "Vinç filosu ve operatör ekiplerinin sahada etkin yönetimi için liderlik becerileri.", grup: "Liderlik ve Yönetim" },
  { no: "08", title: "Filo ve Kaynak Planlaması", desc: "Birden fazla proje arasında vinç ve operatör kaynaklarının verimli dağıtımı.", grup: "Proje Yönetimi" },
  { no: "09", title: "Filo Maliyet ve Yatırım Analizi", desc: "Satın alma, kiralama ve bakım maliyetlerinin karşılaştırmalı finansal analizi.", grup: "Finans ve Muhasebe" },
  { no: "10", title: "PLC ve Kontrol Sistemleri Programlama", desc: "Modern vinçlerde kullanılan otomasyon ve kontrol yazılımlarının temel programlama eğitimi.", grup: "Yazılım ve Programlama" },
  { no: "11", title: "Etkili İletişim ve Saha Koordinasyonu", desc: "Operatör, yer ekibi ve proje yöneticisi arasında etkili iletişim teknikleri.", grup: "Kişisel Gelişim" },
  { no: "12", title: "Uzaktan İzleme ve Akıllı Bakım Sistemleri", desc: "Sensör verileriyle önleyici bakım planlayan dijital izleme sistemlerinin kullanımı.", grup: "Dijital Dönüşüm" },
];

const sss = [
  {
    soru: "Vinç operatörü olmak için hangi sertifika gereklidir?",
    cevap: "Vinç operatörlüğü için yasal mevzuata uygun G veya H sınıfı mesleki yeterlilik belgesi alınması zorunludur. Vinç tipine göre ek sertifikalar da gerekebilir.",
  },
  {
    soru: "ISO 9001 ve ISO 45001 sertifikaları neden önemlidir?",
    cevap: "ISO 9001 hizmet kalitesini standartlaştırırken, ISO 45001 iş sağlığı ve güvenliği yönetim sistemini kurumsallaştırır. Her iki belge de kurumsal müşteri ilişkilerinde güven oluşturur.",
  },
  {
    soru: "Eğitimler kaç gün sürmektedir?",
    cevap: "Eğitim süresi içeriğe göre değişmektedir; mesleki sertifika programları birkaç gün, teknik ve yönetim eğitimleri ise modüler olarak haftalar içinde tamamlanabilir.",
  },
  {
    soru: "Eğitimler şirket içinde (in-house) verilebiliyor mu?",
    cevap: "Evet, kurumsal müşterilerimiz için sahada veya tesis içinde özel olarak planlanan in-house eğitim programları düzenlenmektedir.",
  },
  {
    soru: "Sertifikasyon eğitimleri için nasıl başvurulur?",
    cevap: "0532 303 90 89 numaralı hattımızı arayarak veya iletişim formunu doldurarak size uygun eğitim programı hakkında bilgi alabilirsiniz.",
  },
];

export default function VincSertifikasyonVeEgitimPage() {
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
              🎓 Sertifikasyon ve Eğitim 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Sertifikasyon ve<br />
              <span className="text-yellow-400">Eğitim</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Vinç operatörlüğü ve sektörel yönetim alanlarında sertifikalı eğitim programları.
              Mesleki belgelendirme, teknik eğitim ve kurumsal gelişim çözümleri tek çatı altında.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Eğitim Programı İçin Arayın
              </a>
              <a
                href="#kategoriler"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Kategorileri İncele ↓
              </a>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { deger: "25+", label: "Yıllık Deneyim" },
              { deger: "10", label: "Eğitim Kategorisi" },
              { deger: "12+", label: "Sertifika Programı" },
              { deger: "1000+", label: "Sertifikalı Katılımcı" },
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
            { href: "#kategoriler", label: "Eğitim Kategorileri" },
            { href: "#alt-kategoriler", label: "Sertifika Programları" },
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

      {/* Kategori Başlıkları */}
      <section id="kategoriler" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Eğitim Alanları</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sertifikasyon ve Eğitim Kategorileri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Operatörden saha yöneticisine, her seviyeye uygun 10 farklı eğitim kategorisi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kategoriler.map((k) => (
              <div
                key={k.no}
                className="relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{k.icon}</div>
                  <div className="text-3xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition leading-none">
                    {k.no}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{k.title}</h3>
                <p className="text-gray-500 text-sm">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alt Kategori Başlıkları */}
      <section id="alt-kategoriler" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Sertifika Programları</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Öne Çıkan Eğitim ve Sertifika Programları</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her sertifika programı, ait olduğu kategoriye uygun olarak detaylı şekilde yapılandırılmıştır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {altKategoriler.map((a) => (
              <div
                key={a.no}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                    {a.grup}
                  </span>
                  <span className="text-gray-300 font-black text-sm">#{a.no}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-700">{a.title}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Sertifikasyon */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Neden Önemli?</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Sertifikalı Eğitimin Sahaya Katkısı</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Sertifikalı operatör ve teknik personel, hem iş güvenliğini artırır hem de
                operasyonel verimliliği yükseltir. Belgelendirilmiş ekipler, yasal denetimlerde
                ve kurumsal ihale süreçlerinde önemli bir avantaj sağlar.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Yasal mevzuata uygun belgelendirme süreci",
                "Saha güvenliğinde ölçülebilir iyileşme",
                "Kurumsal ihale ve denetimlerde avantaj",
                "Düzenli güncellenen eğitim içerikleri",
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Sertifikasyon ve Eğitim Hakkında Sıkça Sorulan Sorular</h2>
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
          <h2 className="text-4xl font-black mb-4">Eğitim Programınızı Planlayalım</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, ekibinize uygun sertifikasyon ve eğitim programını belirleyelim.
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
