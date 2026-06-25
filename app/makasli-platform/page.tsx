"use client";

import type { Metadata } from "next";

/* ─────────────────────────────────────────────
   VERİ
───────────────────────────────────────────── */

const fiyatTablosu = [
  { model: "4m – 6m Akülü", tip: "Akülü", gunluk: "₺1.200+", haftalik: "₺6.000+", aylik: "₺18.000+", zemin: "Düz / Sert" },
  { model: "8m – 10m Akülü", tip: "Akülü", gunluk: "₺1.800+", haftalik: "₺9.000+", aylik: "₺27.000+", zemin: "Düz / Sert" },
  { model: "12m – 14m Akülü", tip: "Akülü", gunluk: "₺2.400+", haftalik: "₺12.000+", aylik: "₺36.000+", zemin: "Düz / Sert" },
  { model: "10m – 12m Dizel", tip: "Dizel 4WD", gunluk: "₺2.800+", haftalik: "₺14.000+", aylik: "₺42.000+", zemin: "Karma / Engebeli" },
  { model: "14m – 16m Dizel", tip: "Dizel 4WD", gunluk: "₺3.600+", haftalik: "₺18.000+", aylik: "₺54.000+", zemin: "Şantiye" },
];

const sektorler = [
  { icon: "🏗️", title: "İnşaat ve Tadilat Projelerinde Makaslı Platform Kullanımı", desc: "Bina iç mekan düzenlemesi, alçı-boya-sıva işleri, tavan montajı ve tadilat çalışmalarında geniş ve stabil çalışma platformu sağlar. Makası sayesinde yük kapasitesi eklemli platforma göre daha yüksektir." },
  { icon: "🏭", title: "Depo ve Fabrika İçi Çalışmalarda Makaslı Platform", desc: "Yüksek raflı depolarda envanter yönetimi, fabrika tavanı ve konveyör bakımı ile ekipman montajında düşük zemin baskısı ve dar koridor uyumluluğuyla tercih edilir." },
  { icon: "💡", title: "Aydınlatma ve Elektrik Tesisatı", desc: "Fabrika, depo, AVM ve açık otopark aydınlatma sistemlerinin montajı ve periyodik bakımında düz çalışma platformu avantaj sağlar." },
  { icon: "🎨", title: "Cephe Boya ve Kaplama", desc: "Binaların dış cephesinde boya, mantolama ve kaplama işlerinde geniş platform alanı operatör konforunu ve verimliği artırır." },
  { icon: "📦", title: "Lojistik ve Depolama", desc: "Yüksek raflı depolarda malzeme yerleştirme, paletli yük kaldırma ve envanter sayımında operatörlerin güvenli çalışmasını sağlar." },
  { icon: "⚙️", title: "Endüstriyel Bakım ve Onarım", desc: "Üretim tesislerinde makine üstü bakım, tavan sistemleri ve boru tesisatı onarımında üretimi durdurmadan erişim imkanı sunar." },
];

const avantajlar = [
  ["Geniş Çalışma Platformu", "Eklemli platforma kıyasla daha geniş platform alanı, birden fazla operatör ve malzemenin aynı anda taşınmasına olanak tanır."],
  ["Yüksek Yük Kapasitesi", "Makaslı platformlar genellikle 230–450 kg yük kapasitesiyle eklemli modellerin üzerinde taşıma imkânı sunar."],
  ["Düşük Sermaye Bağlama", "Satın alma maliyeti 200.000 ₺ ile 1.500.000 ₺ arasındaki ekipmanlarda kiralama sabit yatırım gerektirmez."],
  ["Bakım ve Servis Dahil", "Periyodik bakım, yedek parça ve teknik servis kiralama paketine dahildir; ekstra maliyet oluşmaz."],
  ["Hızlı Teslimat", "Stoktan günlük kiralama ile 24 saat içinde işbaşında olabilirsiniz."],
  ["Amortisman ve Depolama Yok", "Sezon dışı depolama, sigorta ve değer kaybı gibi sahiplik maliyetlerini tamamen ortadan kaldırır."],
];

const secimRehberi = [
  { step: "01", label: "Çalışma Yüksekliği ve Platform Boyutu", text: "Makaslı platformlar dikey hareket eder; yatay uzanım gerektirmez. İhtiyaç duyulan yüksekliği belirleyerek minimum 1,2 m emniyet payı ekleyin. Birden fazla kişi çalışacaksa platform genişliği de belirleyici faktördür." },
  { step: "02", label: "Zemin Koşulları ve Taşıma Kapasitesi", text: "Düz beton veya asfalt için akülü model yeterlidir. Toprak, çakıl veya eğimli zemin için 4WD dizel model gerekir. Platform ağırlığı zemin taşıma kapasitesiyle mutlaka karşılaştırılmalıdır." },
  { step: "03", label: "İç Mekan mı Dış Mekan mı?", text: "Kapalı alanlarda akülü model emisyon ve gürültü avantajıyla öne çıkar. Açık alanda uzun süreli çalışma için yakıt ile çalışan dizel modeller daha ekonomiktir. Tavan yüksekliği sınırlaması varsa mutlaka belirtin." },
];

const surec = [
  ["İhtiyaç Analizi", "Çalışma yüksekliği, zemin tipi, platform kapasitesi ve kiralama süresini paylaşın."],
  ["Teklif ve Sözleşme", "Günlük/haftalık/aylık kiralama bedeli ve koşulları 2 saat içinde sunulur."],
  ["Platform Hazırlığı", "Seçilen platform teknik ekibimizce kontrol edilip sevkiyata hazır hâle getirilir."],
  ["Teslimat ve Eğitim", "Platform belirtilen adrese teslim edilir, talep hâlinde kısa operatör eğitimi verilir."],
  ["Aktif Destek", "Kiralama süresince 7/24 teknik destek hattımız aktiftir; arızada ikame araç garantisi geçerlidir."],
  ["İade ve Kapanış", "Süre sonunda ekipman alınır, hasar değerlendirmesi yapılır ve güvence iadesi yapılır."],
];

const fiyatFaktorler = [
  ["📏", "Çalışma Yüksekliği", "Platform büyüdükçe maliyet artar."],
  ["👥", "Platform Kapasitesi", "Daha fazla yük veya kişi taşıyan modeller daha yüksek ücretlidir."],
  ["⏱️", "Kiralama Süresi", "Uzun süreli kiralamalar günlük ortalama maliyeti düşürür."],
  ["🚛", "Teslimat Mesafesi", "Uzak lokasyonlar için nakliye ücreti eklenir."],
  ["🔋", "Motor Tipi", "Dizel modeller akülüye göre genellikle daha yüksek ücretlidir."],
  ["📅", "Sezon", "Yoğun inşaat ve tadilat sezonlarında talep artışı fiyatı etkiler."],
];

const sss = [
  ["Makaslı platform kiralama için minimum süre nedir?", "Genellikle minimum 1 günlük kiralama yapılmaktadır. Yarım gün kiralama bazı modellerde mümkündür; talep ettiğinizde bilgi verilir."],
  ["Makaslı platform ile eklemli platform arasındaki temel fark nedir?", "Makaslı platform yalnızca dikey yönde hareket eder ve daha geniş platform alanı ile daha yüksek yük kapasitesi sunar. Eklemli platform ise engel etrafından yatay uzanabilir; daha çok erişim esnekliği gerektiğinde tercih edilir."],
  ["Operatör sertifikası zorunlu mu?", "6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında yüksekte çalışma prosedürü uygulanmalı ve operatör yetkili sertifikaya sahip olmalıdır. Sertifikanız yoksa operatörlü kiralama paketini tercih edebilirsiniz."],
  ["Şantiye adresine teslimat yapılıyor mu?", "Evet. Türkiye genelinde şantiye ve proje adresi teslimatı yapılmaktadır. Teslimat süresi ve ücreti konuma göre belirlenir."],
  ["Kaç metreye kadar makaslı platform temin edebilirsiniz?", "Filomuzda 4 m'den 16 m'ye kadar farklı çalışma yüksekliğine sahip akülü ve dizel modeller bulunmaktadır."],
  ["Hafta sonu teslimat yapılıyor mu?", "Evet, 7/24 lojistik hizmetimiz mevcuttur. Hafta sonu ve resmi tatil teslimatları için ek koordinasyon ücreti uygulanabilir."],
];

/* ─────────────────────────────────────────────
   SAYFA
───────────────────────────────────────────── */

export default function Page() {
  return (
    <main className="bg-[#F5F4F0] text-[#0D1B2A]" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0D1B2A] text-white px-6 pt-20 pb-16">
        {/* Diagonal accent */}
        <div
          className="absolute top-0 right-0 h-full w-80 opacity-10"
          style={{ background: "#F5A623", clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />

        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#F5A623] text-[#0D1B2A] font-extrabold text-xs tracking-[3px] uppercase px-3 py-1 mb-5">
            Kiralık · 7/24 Hizmet · Türkiye Geneli
          </span>

          <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-6">
            Makaslı Platform Kiralama<br />
            <span className="text-[#F5A623]">Kiralık Makaslı Platform</span> Hizmetleri
          </h1>

          <p className="text-[#c8d4e0] text-lg max-w-2xl leading-relaxed mb-9">
            Akülü ve dizel makaslı platformlarla inşaat, depo, fabrika ve tadilat projelerinde
            güvenli, geniş çalışma alanı. Günlük, haftalık ve aylık kiralama seçenekleriyle hemen teklif alın.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#fiyatlar"
              className="inline-block bg-[#F5A623] text-[#0D1B2A] font-extrabold px-8 py-4 text-sm tracking-wide hover:brightness-105 transition"
            >
              Fiyat Teklifi Al →
            </a>
            <a
              href="#secim-rehberi"
              className="inline-block border border-white/30 text-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-white/10 transition"
            >
              Platform Seçim Rehberi
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STAT BAR
      ══════════════════════════════════════ */}
      <div className="bg-[#F5A623] px-6 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around gap-6">
          {[
            ["300+", "Teslim Edilen Platform"],
            ["4m – 16m", "Çalışma Yüksekliği"],
            ["450 kg", "Maks. Yük Kapasitesi"],
            ["24 Saat", "Teslimat Süresi"],
          ].map(([val, label]) => (
            <div key={label} className="text-center text-[#0D1B2A]">
              <div className="font-black text-2xl leading-none">{val}</div>
              <div className="text-xs font-bold tracking-widest mt-1 uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          İÇERİK
      ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6">

        {/* ── FİYAT TABLOSU ── */}
        <section id="fiyatlar" className="py-16">
          <Eyebrow>Ücretler</Eyebrow>
          <h2 className={h2}>Kiralık Makaslı Platform Fiyatları 2026 – Güncel Ücret Tablosu</h2>
          <p className={lead}>
            Aşağıdaki fiyatlar KDV hariç başlangıç ücretlerini göstermektedir. Nihai fiyat; çalışma
            yüksekliği, kiralama süresi, teslimat mesafesi ve operatör ihtiyacına göre belirlenir.
          </p>

          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0D1B2A] text-white">
                  {["Model / Yükseklik", "Tip", "Günlük", "Haftalık", "Aylık", "Zemin"].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-bold tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fiyatTablosu.map(({ model, tip, gunluk, haftalik, aylik, zemin }, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F4F0]"} style={{ borderBottom: "1px solid #E0DDD6" }}>
                    <td className="px-4 py-3 font-bold">{model}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-xs font-bold ${tip === "Akülü" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}>
                        {tip}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-[#0D1B2A]">{gunluk}</td>
                    <td className="px-4 py-3">{haftalik}</td>
                    <td className="px-4 py-3">{aylik}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{zemin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">* Fiyatlar piyasa koşullarına göre değişkenlik gösterebilir. Güncel teklif için iletişime geçin.</p>
        </section>

        <Divider />

        {/* ── NEDİR / FARK ── */}
        <section className="py-14">
          <Eyebrow>Tanım</Eyebrow>
          <h2 className={h2}>Makaslı Platform Nedir? Eklemli Platform ile Farkı</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-7">
              <div className="text-3xl mb-3">✂️</div>
              <h3 className="font-extrabold text-lg mb-3 text-[#0D1B2A]">Makaslı Platform</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Birbirine bağlı çapraz kolların açılıp kapanmasıyla yalnızca dikey yönde yükselen
                çalışma platformudur. Geniş ve düz platform yüzeyi sayesinde aynı anda birden fazla
                personel ve malzeme taşınabilir. Özellikle iç mekânlarda, depolarda ve düz zeminli
                alanlarda yüksek verimlilikle kullanılır.
              </p>
            </div>
            <div className="bg-white p-7">
              <div className="text-3xl mb-3">🔀</div>
              <h3 className="font-extrabold text-lg mb-3 text-[#0D1B2A]">Eklemli Platform ile Farkı</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Eklemli (mafsallı) platform kollar sayesinde yatay da uzanabilir; engel etrafından
                geçmesi gereken projelerde avantaj sağlar. Makaslı platform ise daha geniş platform
                alanı ve yüksek yük kapasitesiyle düz alanlarda daha ekonomik ve verimlidir.
                Uygun zemin ve doğrudan dikey erişim gerektiren işlerde makaslı model tercih edilmelidir.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── ÇEŞİTLER ── */}
        <section className="py-14">
          <Eyebrow>Ürünler</Eyebrow>
          <h2 className={h2}>Makaslı Platform Çeşitleri: Akülü ve Dizel Modeller</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-9">
            {/* Akülü */}
            <div className="bg-white p-7 border-l-4 border-green-600">
              <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1">AKÜLÜ</span>
              <h3 className="font-extrabold text-lg mt-4 mb-3 text-[#0D1B2A] leading-snug">
                Akülü Makaslı Platform Kiralama – Kapalı Alan ve İç Mekan Projeleri İçin
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Sıfır emisyon ve sessiz çalışma özelliğiyle fabrika, AVM, hastane, okul ve kapalı
                depolarda idealdir. Dar koridor ve kapı genişliklerine sığabilen kompakt gövdesi
                ve düşük zemin baskısıyla iç mekân çalışmalarında birinci tercih olur.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Sıfır egzoz emisyonu</li>
                <li>Düşük gürültü seviyesi</li>
                <li>Dar alanlarda manevra kolaylığı</li>
                <li>Düşük zemin baskısı</li>
              </ul>
            </div>

            {/* Dizel */}
            <div className="bg-white p-7 border-l-4 border-orange-500">
              <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1">DİZEL 4WD</span>
              <h3 className="font-extrabold text-lg mt-4 mb-3 text-[#0D1B2A] leading-snug">
                Dizel Makaslı Platform Kiralama – Açık Alan ve Şantiye Kullanımı İçin
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Dört tekerlekli çekiş ve yüksek kaldırma kapasitesiyle şantiye, park, açık alan
                etkinlikleri ve engebeli zeminlerde kullanılır. Uzun süreli dış mekân projelerinde
                yakıt ekonomisi ve güç avantajı sunar.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>4WD zemin hakimiyeti</li>
                <li>Yüksek yük kapasitesi</li>
                <li>Uzun süreli açık alan kullanımı</li>
                <li>Eğimli zeminde stabil çalışma</li>
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── SEKTÖRLER ── */}
        <section className="py-14">
          <Eyebrow>Kullanım Alanları</Eyebrow>
          <h2 className={h2}>Makaslı Platform Hangi Sektörlerde Kullanılır?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
            {sektorler.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 border-b-2 border-transparent hover:border-[#F5A623] transition-colors"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-extrabold text-sm mb-3 text-[#0D1B2A] leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── AVANTAJLAR ── */}
        <section className="py-14">
          <Eyebrow>Neden Kiralama?</Eyebrow>
          <h2 className={h2}>Makaslı Platform Kiralama Avantajları – Neden Satın Almak Yerine Kiralamalısınız?</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-9">
            {avantajlar.map(([title, text]) => (
              <div key={title} className="flex gap-4 bg-white p-5 border-b-2 border-[#F5A623]">
                <div className="w-1.5 flex-shrink-0 bg-[#F5A623] rounded" />
                <div>
                  <div className="font-extrabold text-sm mb-1 text-[#0D1B2A]">{title}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── SEÇİM REHBERİ ── */}
        <section id="secim-rehberi" className="py-14">
          <Eyebrow>Rehber</Eyebrow>
          <h2 className={h2}>Doğru Makaslı Platform Nasıl Seçilir? Yükseklik ve Kapasite Rehberi</h2>
          <p className={lead}>
            Yanlış platform seçimi verimlilik kaybına ve güvenlik riskine yol açar.
            Aşağıdaki üç faktörü değerlendirerek doğru modeli belirleyin.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-9">
            {secimRehberi.map(({ step, label, text }) => (
              <div key={step} className="bg-[#0D1B2A] text-white p-7 relative">
                <div className="absolute top-4 right-5 font-black text-5xl text-[#F5A623] opacity-15 leading-none">{step}</div>
                <div className="text-xs font-extrabold tracking-[3px] text-[#F5A623] mb-3 uppercase">Adım {step}</div>
                <div className="font-extrabold text-base mb-3">{label}</div>
                <p className="text-sm text-[#9ab0c5] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── KİRALAMA SÜRECİ ── */}
        <section className="py-14">
          <Eyebrow>Süreç</Eyebrow>
          <h2 className={h2}>Makaslı Platform Kiralama Süreci Nasıl İşler?</h2>
          <div className="relative mt-9">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#E0DDD6]" />
            <div className="flex flex-col gap-7">
              {surec.map(([title, text], i) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className="w-14 h-14 flex-shrink-0 bg-[#F5A623] text-[#0D1B2A] flex items-center justify-center font-black text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-2">
                    <div className="font-extrabold text-base mb-1">{title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── FİYAT ETKİLEYEN FAKTÖRLER ── */}
        <section className="py-14">
          <Eyebrow>Fiyatlandırma</Eyebrow>
          <h3 className="text-xl font-black text-[#0D1B2A] mb-7 leading-snug">
            Makaslı Platform Kiralama Fiyatlarını Etkileyen Faktörler
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {fiyatFaktorler.map(([icon, title, text]) => (
              <div key={title} className="bg-white p-5 text-center border-t-4 border-[#F5A623]">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="font-bold text-sm mb-1 text-[#0D1B2A]">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── İŞ GÜVENLİĞİ ── */}
        <section className="py-14">
          <Eyebrow>Güvenlik</Eyebrow>
          <h3 className="text-xl font-black text-[#0D1B2A] mb-7 leading-snug">
            Güvenli Yüksekte Çalışma: Makaslı Platformlarda İş Güvenliği
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 border-l-4 border-[#F5A623] p-7">
              <div className="font-extrabold text-base mb-4 text-[#0D1B2A]">Yasal Zorunluluklar</div>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside leading-relaxed">
                <li>6331 sayılı İSG Kanunu kapsamında yüksekte çalışma prosedürü uygulanmalıdır.</li>
                <li>Operatör yetkili eğitim kurumundan onaylı sertifikaya sahip olmalıdır.</li>
                <li>Platform operasyondan önce kontrol listesiyle denetlenmelidir.</li>
                <li>Çalışma alanı izole edilmeli, emniyet kemeri kullanımı zorunlu tutulmalıdır.</li>
                <li>Platform belirtilen maksimum yük kapasitesini aşmadan kullanılmalıdır.</li>
              </ul>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-7">
              <div className="font-extrabold text-base mb-4 text-[#0D1B2A]">Kiralama Paketinde Neler Var?</div>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside leading-relaxed">
                <li>Teslimat öncesi tam teknik bakım raporu</li>
                <li>Platform kullanım ve güvenlik eğitimi</li>
                <li>7/24 acil teknik destek hattı</li>
                <li>Arıza hâlinde ikame araç garantisi</li>
                <li>Talep üzerine yetkili operatör görevlendirme</li>
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── SSS ── */}
        <section className="py-14 pb-20">
          <Eyebrow>SSS</Eyebrow>
          <h3 className="text-xl font-black text-[#0D1B2A] mb-8 leading-snug">
            Makaslı Platform Kiralama Hakkında Sıkça Sorulan Sorular (SSS)
          </h3>
          <div className="flex flex-col">
            {sss.map(([q, a], i) => (
              <div key={i} className="border-b border-[#E0DDD6] py-6">
                <div className="font-bold text-sm text-[#0D1B2A] mb-2">
                  <span className="text-[#F5A623] mr-2">S.</span>{q}
                </div>
                <div className="text-sm text-gray-500 leading-relaxed pl-5">
                  <span className="text-green-700 font-bold mr-1">C.</span>{a}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════
          CTA FOOTER
      ══════════════════════════════════════ */}
      <section className="bg-[#F5A623] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <div className="text-3xl font-black text-[#0D1B2A] mb-2">Kiralık makaslı platform ihtiyacınız mı var?</div>
            <div className="text-[#0D1B2A]/70 text-lg">Projenizi anlatın, en uygun platformu hemen belirleyelim.</div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:05323039089"
              className="bg-[#0D1B2A] hover:bg-[#1a2e42] text-white font-black px-10 py-5 transition text-base"
            >
              📞 Hemen Ara
            </a>
            <a
              href="/iletisim"
              className="bg-white hover:bg-gray-100 text-[#0D1B2A] font-bold px-10 py-5 transition text-base"
            >
              Teklif Al →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ── Sub-components ── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[#F5A623] text-xs font-extrabold tracking-[3px] uppercase mb-3">
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-[#E0DDD6]" />;
}

/* ── Style tokens ── */
const h2 = "text-2xl md:text-3xl font-black text-[#0D1B2A] leading-tight tracking-tight mb-2";
const lead = "text-base text-gray-500 leading-relaxed max-w-2xl mt-2";
