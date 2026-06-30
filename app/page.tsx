import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import IlceGrid from "@/components/IlceGrid";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Vinç Kiralama | Kiralık Vinç | Sepetli Vinç Kiralama",
    template: "%s | Vinç Deposu",
  },
  description:
    "İstanbul'un tüm 39 ilçesinde profesyonel vinç ve manlift kiralama hizmetleri. Sepetli vinç, mobil vinç, kule vinç, makaslı & eklemli platform. 7/24: 0532 303 90 89",
  keywords: ["vinç kiralama", "kiralık vinç", "istanbul vinç", "sepetli vinç", "mobil vinç", "manlift kiralama"],
  metadataBase: new URL("https://vincdeposu.com.tr"),
  openGraph: { type: "website", locale: "tr_TR", siteName: "Vinç Deposu" },
};

/* ─── VERİ ─── */
const hizmetler = [
  { icon: "🏗️", title: "Kiralık Vinç", desc: "Her ölçekte inşaat ve sanayi projesi için kiralık vinç hizmeti.", href: "/kiralik-vinc" },
  { icon: "🦺", title: "Kiralık Manlift", desc: "Makaslı, eklemli, örümcek ve sepetli platform kiralama.", href: "/kiralik-manlift" },
  { icon: "👷", title: "Operatörlü Hizmet", desc: "Sertifikalı operatörlerimizle güvenli ve profesyonel vinç operasyonu.", href: "/operatorlu-vinc-hizmeti" },
  { icon: "🔧", title: "Bakım & Onarım", desc: "Vinçlerinizin uzun ömürlü kullanımı için periyodik bakım hizmeti.", href: "/vinc-bakim-ve-onarim" },
  { icon: "🚛", title: "Taşıma & Lojistik", desc: "Vinç taşıma ve lojistik süreçlerinde güvenilir çözümler.", href: "/vinc-tasima-ve-lojistik" },
  { icon: "📋", title: "Sertifikasyon", desc: "Vinç operatörleri için eğitim ve sertifikasyon programları.", href: "/vinc-sertifikasyon-ve-egitim" },
  { icon: "🚨", title: "Acil Hizmet", desc: "7/24 acil vinç hizmetleriyle her an yanınızdayız.", href: "/vinc-acil-durum-hizmetleri" },
  { icon: "🛒", title: "Satılık Vinç", desc: "İkinci el ve sıfır vinç satışında güvenilir adresiniz.", href: "/satilik-vinc" },
];

const vincCesitleri = [
  { title: "Sepetli Vinç", href: "/sepetli-vinc", icon: "🚛", renk: "#F59E0B" },
  { title: "Mobil Vinç", href: "/mobil-vinc", icon: "🏗️", renk: "#3B82F6" },
  { title: "Kule Vinç", href: "/kule-vinc", icon: "🗼", renk: "#8B5CF6" },
  { title: "Ahtapot Vinç", href: "/ahtapot-vinc", icon: "🐙", renk: "#EC4899" },
  { title: "Kamyon Üstü Vinç", href: "/kamyon-ustu-vinc", icon: "🚚", renk: "#10B981" },
  { title: "Paletli Vinç", href: "/paletli-vinc", icon: "⚙️", renk: "#F97316" },
  { title: "Raylı Vinç", href: "/rayli-vinc", icon: "🚃", renk: "#14B8A6" },
  { title: "Portal Vinç", href: "/portal-vinc", icon: "🌉", renk: "#6366F1" },
  { title: "Monoray Vinç", href: "/monoray-vinc", icon: "📐", renk: "#EF4444" },
  { title: "Sabit Vinç", href: "/sabit-vinc", icon: "🏭", renk: "#84CC16" },
  { title: "Minik Vinç", href: "/minik-vinc", icon: "🔩", renk: "#F59E0B" },
  { title: "Helikopter Vinç", href: "/helikopter-vinc", icon: "🚁", renk: "#06B6D4" },
];

const urunler = [
  { title: "Makaslı Platform", href: "/makasli-platform", icon: "⬆️", desc: "Dikey erişim, geniş çalışma platformu" },
  { title: "Eklemli Platform", href: "/eklemli-platform", icon: "🦾", desc: "Dar alanlarda engel üzeri erişim" },
  { title: "Örümcek Platform", href: "/orumcek-platform", icon: "🕷️", desc: "Hassas zemin, dar alan uyumlu" },
  { title: "Forklift", href: "/forklift-kiralama", icon: "🚜", desc: "Depo ve fabrika yük taşıma çözümleri" },
  { title: "Telehandler", href: "/telehandler-kiralama", icon: "🦺", desc: "Yüksek erişimli teleskopik ekipman" },
];

const neden = [
  { icon: "🏆", title: "25 Yıllık Deneyim", desc: "Sektörde çeyrek asırlık tecrübemizle binlerce projeyi başarıyla tamamladık." },
  { icon: "🛡️", title: "Tam Sigortalı", desc: "Tüm ekipmanlarımız kapsamlı sigorta güvencesi altındadır." },
  { icon: "⚡", title: "Hızlı Teslimat", desc: "İstanbul'un tüm ilçelerinde aynı gün ya da ertesi gün teslimat." },
  { icon: "🔧", title: "Bakımlı Filo", desc: "Filomuz düzenli teknik kontrollerden geçer, arıza riskini minimize ederiz." },
  { icon: "👷", title: "Sertifikalı Operatör", desc: "Eğitimli ve belgeli operatörlerimiz iş güvenliğini en üst seviyede tutar." },
  { icon: "📞", title: "7/24 Destek", desc: "Gece ya da gündüz, her an teknik destek ve acil müdahale hizmetindeyiz." },
];

const galeri = [
  { src: "/images/vinc-kiralama-gece-calismasi.jpg", alt: "Gece saatlerinde minarede vinç ile çalışma", buyuk: true },
  { src: "/images/vinc-cami-ic-mekan-calismasi.jpg", alt: "Cami iç mekanında kiralık vinç ile yapılan çalışma" },
  { src: "/images/orumcek-platform-spxs32.jpg", alt: "Örümcek platform SPXS32 model manlift" },
  { src: "/images/eklemli-platform-stadyum-cephe.jpg", alt: "Eklemli platform ile stadyum cephe çalışması" },
  { src: "/images/sepetli-vinc-platform-gokyuzu.jpg", alt: "Sepetli vinç platformları gökyüzünde çalışma anı" },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-gray-950 text-white min-h-[92vh] flex items-center overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-yellow-400 opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-yellow-500 opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 text-sm font-bold tracking-wide">İstanbul&apos;un Güvenilir Vinç Partneri</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8">
                Profesyonel<br />
                <span className="text-yellow-400">Vinç &</span><br />
                <span className="text-yellow-400">Manlift</span><br />
                Kiralama
              </h1>

              <p className="text-gray-400 text-xl mb-10 leading-relaxed max-w-lg">
                İstanbul&apos;un 39 ilçesinde 7/24 kiralık vinç, manlift ve platform hizmetleri.
                Sertifikalı operatör, tam sigorta, hızlı teslimat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:05323039089"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-5 rounded-2xl text-lg transition text-center shadow-lg shadow-yellow-400/20"
                >
                  📞 0532 303 90 89
                </a>
                <Link
                  href="/kiralik-vinc"
                  className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-5 rounded-2xl text-lg transition text-center"
                >
                  Ürünleri Keşfet →
                </Link>
              </div>

              {/* Mini stats row */}
              <div className="flex gap-8 border-t border-white/10 pt-8">
                {[
                  { v: "39", l: "İlçe" },
                  { v: "25+", l: "Yıl Deneyim" },
                  { v: "1000+", l: "Müşteri" },
                  { v: "7/24", l: "Destek" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-black text-yellow-400">{s.v}</div>
                    <div className="text-gray-500 text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — big feature cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: "🏗️", title: "Kiralık Vinç", sub: "Sepetli · Mobil · Kule", href: "/kiralik-vinc", bg: "from-yellow-500/20 to-yellow-500/5" },
                { icon: "🦺", title: "Kiralık Manlift", sub: "Makaslı · Eklemli · Örümcek", href: "/kiralik-manlift", bg: "from-blue-500/20 to-blue-500/5" },
                { icon: "👷", title: "Operatörlü", sub: "Sertifikalı operatör desteği", href: "/operatorlu-vinc-hizmeti", bg: "from-green-500/20 to-green-500/5" },
                { icon: "🚨", title: "Acil Hizmet", sub: "7/24 anında müdahale", href: "/vinc-acil-durum-hizmetleri", bg: "from-red-500/20 to-red-500/5" },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className={`group bg-gradient-to-br ${c.bg} border border-white/10 rounded-3xl p-6 hover:border-yellow-400/50 hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="text-5xl mb-4">{c.icon}</div>
                  <div className="text-white font-black text-lg mb-1">{c.title}</div>
                  <div className="text-gray-500 text-sm">{c.sub}</div>
                  <div className="mt-4 text-yellow-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition">
                    İncele →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NEDEN VİNÇ DEPOSU
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left label */}
            <div className="lg:col-span-1">
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Neden Biz?</span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                Farkımızı<br />Hissettiren<br />Değerler
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                25 yılı aşkın deneyimimiz, geniş filomuz ve sertifikalı ekibimizle
                İstanbul&apos;un en güvenilir vinç kiralama firmasıyız.
              </p>
              <a
                href="tel:05323039089"
                className="inline-block bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-black px-6 py-4 rounded-xl transition"
              >
                Hemen Arayın
              </a>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {neden.map((n) => (
                <div key={n.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-md transition group">
                  <div className="text-3xl flex-shrink-0">{n.icon}</div>
                  <div>
                    <h3 className="font-black text-gray-900 mb-1 group-hover:text-yellow-600 transition">{n.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SAHADAN KARELER
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Sözden Çok İş</span>
            <h2 className="text-4xl font-black text-white mt-3 mb-4">Sahadan Kareler</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              İstanbul&apos;un dört bir yanında, cami restorasyonundan gökdelen cephesine kadar
              gerçekleştirdiğimiz projelerden kareler.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[160px]">
            {galeri.map((g) => (
              <div
                key={g.src}
                className={`relative rounded-3xl overflow-hidden border border-white/10 group ${
                  g.buyuk ? "col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square md:aspect-auto"
                }`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/referans" className="text-yellow-400 font-semibold hover:underline">
              Referanslarımızı görün →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HİZMETLER
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Hizmetlerimiz</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Her İhtiyaca Çözüm</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              İnşaat ve sanayinin her aşamasında profesyonel vinç ve platform çözümleri.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hizmetler.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group bg-white border border-gray-100 rounded-3xl p-6 hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-5">{h.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-yellow-600 transition">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{h.desc}</p>
                <span className="text-yellow-500 text-sm font-bold">Detaylar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VİNÇ ÇEŞİTLERİ
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Vinç Kataloğu</span>
              <h2 className="text-4xl font-black mt-3 mb-4">12 Farklı Vinç Tipi</h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Projenizin ölçeğine ve ihtiyacına göre doğru vinç türünü seçin.
              </p>
            </div>
            <Link
              href="/vinc-cesitleri"
              className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-6 py-3 rounded-xl transition whitespace-nowrap"
            >
              Tüm Çeşitler →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {vincCesitleri.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-yellow-400/60 transition"
                style={{ "--accent": v.renk } as React.CSSProperties}
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <div className="text-white font-bold text-sm group-hover:text-yellow-400 transition leading-tight">{v.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ÜRÜNLER (MANLIFT & PLATFORM)
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Platform & Ekipman</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Ürün Kataloğumuz</h2>
            <p className="text-gray-500 text-lg">
              Makaslı platformdan forklift ve telehandler&apos;a geniş ürün yelpazemiz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {urunler.map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="group relative bg-gray-900 text-white rounded-3xl p-7 hover:bg-yellow-400 hover:text-black transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-8 -translate-y-8 group-hover:bg-black/10 transition" />
                <div className="relative">
                  <div className="text-5xl mb-5">{u.icon}</div>
                  <h3 className="font-black text-lg mb-2">{u.title}</h3>
                  <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed">{u.desc}</p>
                  <div className="mt-5 font-bold text-sm text-yellow-400 group-hover:text-black">İncele →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KİRALIK VİNÇ BANNER
      ══════════════════════════════════════ */}
      <section className="py-6 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black text-gray-900 mb-1">Kiralık Vinç İhtiyacınız mı Var?</div>
            <div className="text-gray-800">Uzmanlarımız doğru vinç seçiminde size yardımcı olsun.</div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:05323039089"
              className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl transition"
            >
              📞 Hemen Ara
            </a>
            <Link
              href="/kiralik-vinc"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-xl transition"
            >
              Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          İSTANBUL HARİTASI / İLÇELER
      ══════════════════════════════════════ */}
      <IlceGrid />

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "25+", l: "Yıllık Deneyim", icon: "🏆" },
            { v: "39", l: "İlçede Hizmet", icon: "📍" },
            { v: "1000+", l: "Tamamlanan Proje", icon: "✅" },
            { v: "7/24", l: "Acil Destek", icon: "📞" },
          ].map((s) => (
            <div key={s.l} className="border border-white/10 rounded-2xl p-6">
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-4xl font-black text-yellow-400 mb-2">{s.v}</div>
              <div className="text-gray-400 text-sm font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SON CTA
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gray-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(250,204,21,1) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-7xl mb-8">🏗️</div>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            Projeniz İçin<br />
            <span className="text-yellow-400">Hemen Teklif Alın</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed">
            İnşaattan endüstriye, dış cepheden depolara — her proje için doğru vinç
            ve platform çözümünü birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-12 py-5 rounded-2xl text-xl transition shadow-2xl shadow-yellow-400/20"
            >
              📞 0532 303 90 89
            </a>
            <Link
              href="/iletisim"
              className="border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-12 py-5 rounded-2xl text-xl transition"
            >
              Mesaj Gönder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
