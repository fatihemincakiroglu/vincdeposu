import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vinç Bakım ve Onarım Hizmetleri | Periyodik Bakım & Arıza Müdahale",
  description:
    "Köprülü, portal, konsol ve mobil vinçler için periyodik bakım, arıza tespiti, yedek parça ve güvenlik muayenesi hizmetleri. 7/24 teknik destek: 0532 303 90 89",
};

const periyodikBakim = [
  { icon: "📋", title: "Günlük ve Haftalık Kontrol Listesi", desc: "Vinç operasyonu öncesi temel güvenlik ve fonksiyon kontrollerinin düzenli olarak yapılması." },
  { icon: "🗓️", title: "Aylık Bakım Planlaması", desc: "Mekanik ve elektrik aksamların aylık periyotlarla detaylı kontrolü ve raporlanması." },
  { icon: "📆", title: "Yıllık Kapsamlı Bakım Programı", desc: "Tüm sistemlerin baştan sona gözden geçirildiği, uzun ömür için kritik yıllık bakım süreci." },
  { icon: "🛢️", title: "Yağlama ve Koruyucu Bakım", desc: "Hareketli aksamların düzenli yağlanması ile aşınmanın ve arızaların önlenmesi." },
];

const arizaTespiti = [
  { icon: "⚙️", title: "Mekanik Arıza Tanılama", desc: "Redüktör, fren ve kaldırma mekanizmasındaki mekanik sorunların hızlı ve doğru teşhisi." },
  { icon: "🔌", title: "Elektrik ve Kontrol Sistemi Arızaları", desc: "Motor, sürücü ve kontrol panelindeki elektriksel arızaların tespiti ve onarımı." },
  { icon: "💧", title: "Hidrolik Sistem Onarımı", desc: "Hidrolik pompa, valf ve silindirlerdeki basınç kaybı ve sızıntı sorunlarının giderilmesi." },
  { icon: "🚨", title: "Acil Arıza Müdahalesi", desc: "Operasyonu durduran kritik arızalara sahada hızlı müdahale ile üretim kaybının önlenmesi." },
];

const vincTurleriBakim = [
  { icon: "🏭", title: "Köprülü Vinç Bakımı", desc: "Raylı sistem, traversin ve kaldırma mekanizmasının düzenli kontrolü ve servisi." },
  { icon: "🌉", title: "Portal ve Yarı Portal Vinç Bakımı", desc: "Açık alan koşullarına dayanıklılığı artıran periyodik bakım ve aşınma kontrolü." },
  { icon: "🧱", title: "Konsol ve Duvar Vinci Bakımı", desc: "Sabit montajlı sistemlerde ankraj, motor ve halat kontrolünün düzenli yapılması." },
  { icon: "🚚", title: "Mobil ve Taşınabilir Vinç Bakımı", desc: "Şasi, hidrolik sistem ve taşıma mekanizmasının saha koşullarına uygun bakımı." },
];

const bilesenServisi = [
  { icon: "🪝", title: "Kanca, Halat ve Zincir Kontrolü", desc: "Aşınma, çatlak ve deformasyon açısından düzenli görsel ve teknik muayene." },
  { icon: "⚙️", title: "Redüktör ve Dişli Kutusu Revizyonu", desc: "Güç iletim sisteminin performansını korumak için periyodik revizyon hizmeti." },
  { icon: "🛑", title: "Fren Sistemi Bakımı ve Ayarı", desc: "Yük güvenliği için kritik önem taşıyan fren balata ve mekanizma kontrolleri." },
  { icon: "🛤️", title: "Traversin ve Ray Kontrolü", desc: "Yatay hareket sisteminin düzgün ve güvenli çalışması için ray hizalama kontrolü." },
  { icon: "🔧", title: "Kaldırma Mekanizması Revizyonu", desc: "Motor, tambur ve kasnak sisteminin kapsamlı revizyonu ile performans artışı." },
];

const guvenlikMuayenesi = [
  { icon: "📜", title: "Periyodik Muayene ve Sertifikasyon", desc: "Yasal mevzuata uygun periyotlarla yapılan muayene ve sertifikalandırma süreci." },
  { icon: "⚖️", title: "Yük Testi ve Kapasite Doğrulama", desc: "Vinçlerin beyan edilen kapasitede güvenli çalıştığının test ile doğrulanması." },
  { icon: "✅", title: "TSE ve CE Uygunluk Kontrolleri", desc: "Ulusal ve uluslararası standartlara uygunluğun denetlenmesi ve belgelenmesi." },
  { icon: "🦺", title: "İş Güvenliği Denetimi", desc: "Operasyon alanındaki risklerin tespiti ve iş güvenliği önlemlerinin değerlendirilmesi." },
];

const yedekParca = [
  { icon: "🔩", title: "Orijinal ve Muadil Yedek Parça Temini", desc: "Marka orijinali veya kalite onaylı muadil parçalarla hızlı tedarik imkanı." },
  { icon: "🛠️", title: "Tam Revizyon ve Yenileme Hizmetleri", desc: "Eski ve yıpranmış vinçlerin baştan sona yenilenerek ömrünün uzatılması." },
  { icon: "📈", title: "Modernizasyon ve Kapasite Artırımı", desc: "Kontrol sistemleri ve mekanik aksamın güncellenerek kapasite ve verimliliğin artırılması." },
];

const servisAnlasmalari = [
  { icon: "📑", title: "Yıllık Bakım Kontratları", desc: "Önceden planlanmış periyotlarla kesintisiz bakım hizmeti güvencesi." },
  { icon: "☎️", title: "7/24 Teknik Destek ve Çağrı Merkezi", desc: "Gün ve saat fark etmeden ulaşabileceğiniz teknik destek hattı." },
  { icon: "📡", title: "Uzaktan İzleme ve Önleyici Bakım", desc: "Sensör tabanlı izleme sistemleriyle arıza oluşmadan önleyici müdahale." },
];

const sss = [
  {
    soru: "Vinç bakımı ne sıklıkla yapılmalıdır?",
    cevap: "Kullanım yoğunluğuna bağlı olarak günlük kontroller, aylık periyodik bakımlar ve yıllık kapsamlı bakım programları birlikte uygulanmalıdır.",
  },
  {
    soru: "Acil arıza durumunda ne kadar sürede müdahale ediliyor?",
    cevap: "7/24 teknik destek hattımız üzerinden gelen acil çağrılara, bölgeye ve arıza tipine göre en kısa sürede saha ekibimiz yönlendirilir.",
  },
  {
    soru: "Periyodik muayene ve sertifikasyon zorunlu mu?",
    cevap: "Evet, vinçlerin yasal mevzuata uygun periyotlarla muayeneden geçirilmesi ve sertifikalandırılması iş güvenliği açısından zorunludur.",
  },
  {
    soru: "Yedek parça tedarikinde orijinal mi muadil mi tercih edilmeli?",
    cevap: "Kritik güvenlik bileşenlerinde orijinal parça önerilir; bütçe ve aciliyet durumuna göre kalite onaylı muadil parçalar da güvenle kullanılabilir.",
  },
  {
    soru: "Yıllık bakım kontratının avantajı nedir?",
    cevap: "Yıllık kontrat ile bakım periyotları önceden planlanır, beklenmedik arıza riskleri azalır ve toplam bakım maliyeti daha öngörülebilir hale gelir.",
  },
];

export default function VincBakimVeOnarimPage() {
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
              🔧 Bakım ve Onarım Rehberi 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Vinç Bakım ve<br />
              <span className="text-yellow-400">Onarım Hizmetleri</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Köprülü, portal, konsol ve mobil vinçler için periyodik bakım, arıza tespiti,
              yedek parça ve güvenlik muayenesi. Sertifikalı teknik ekip, 7/24 destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="#periyodik-bakim"
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
              { deger: "7/24", label: "Teknik Destek" },
              { deger: "81", label: "İlde Hizmet" },
              { deger: "2000+", label: "Tamamlanan Servis" },
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
            { href: "#periyodik-bakim", label: "Periyodik Bakım" },
            { href: "#ariza-tespiti", label: "Arıza Tespiti" },
            { href: "#vinc-turleri", label: "Vinç Türleri" },
            { href: "#bilesen-servisi", label: "Bileşen Servisi" },
            { href: "#guvenlik-muayenesi", label: "Güvenlik Muayenesi" },
            { href: "#yedek-parca", label: "Yedek Parça" },
            { href: "#servis-anlasmalari", label: "Servis Anlaşmaları" },
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

      {/* Periyodik Bakım Hizmetleri */}
      <section id="periyodik-bakim" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Düzenli Bakım</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Periyodik Bakım Hizmetleri</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Vincinizin ömrünü uzatan ve arıza riskini azaltan düzenli bakım planları.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {periyodikBakim.map((p) => (
              <div key={p.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arıza Tespiti ve Onarım */}
      <section id="ariza-tespiti" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Hızlı Çözüm</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Arıza Tespiti ve Onarım</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Mekanik, elektrik ve hidrolik sistemlerdeki arızalara hızlı ve doğru müdahale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {arizaTespiti.map((a) => (
              <div key={a.title} className="bg-gray-50 p-6 rounded-2xl hover:bg-yellow-50 transition group">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-700">{a.title}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vinç Türlerine Göre Bakım */}
      <section id="vinc-turleri" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Tüm Vinç Tipleri</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Türlerine Göre Bakım</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Her vinç tipinin kendine özgü yapısına uygun bakım yaklaşımı.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vincTurleriBakim.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bileşen Bazlı Servis */}
      <section id="bilesen-servisi" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Detaylı Servis</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Bileşen Bazlı Servis</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Vincin kritik parçalarına özel, uzmanlık gerektiren servis hizmetleri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bilesenServisi.map((b) => (
              <div key={b.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güvenlik Muayenesi ve Belgelendirme */}
      <section id="guvenlik-muayenesi" className="py-20 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wider mb-3">Önceliğimiz</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Güvenlik Muayenesi ve Belgelendirme</h2>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              Yasal mevzuata uygun muayene ve sertifikasyon süreçleriyle güvenli operasyon.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guvenlikMuayenesi.map((g) => (
              <div key={g.title} className="bg-white/70 p-6 rounded-2xl">
                <div className="text-3xl mb-3">{g.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-gray-700 text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yedek Parça ve Revizyon */}
      <section id="yedek-parca" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Uzun Ömür</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Yedek Parça ve Revizyon</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {yedekParca.map((y) => (
              <div key={y.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{y.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{y.title}</h3>
                <p className="text-gray-500 text-sm">{y.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servis Anlaşmaları */}
      <section id="servis-anlasmalari" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">Güvence Altında</p>
            <h2 className="text-4xl font-black mb-4">Servis Anlaşmaları</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Planlı bakım ve kesintisiz teknik destekle operasyonel sürekliliğinizi koruyun.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servisAnlasmalari.map((s) => (
              <div key={s.title} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="tel:05323039089"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 Servis Anlaşması İçin Teklif Alın
            </a>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">SSS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Vinç Bakım ve Onarım Hakkında Sıkça Sorulan Sorular</h2>
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
          <h2 className="text-4xl font-black mb-4">Vincinizin Bakımını Planlayalım</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, vincinize özel bakım ve onarım programını oluşturalım.
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
