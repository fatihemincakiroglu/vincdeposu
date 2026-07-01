"use client";

import Image from "next/image";

export default function Page() {
  return (
    <main style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: "#F5F4F0", color: "#0D1B2A", margin: 0, padding: 0 }}>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #0D1B2A 60%, #1a2e42 100%)",
        color: "#fff",
        padding: "80px 24px 64px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* diagonal accent stripe */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: "340px", height: "100%",
          background: "#F5A623", clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
          opacity: 0.12,
        }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <span style={{
            display: "inline-block", background: "#F5A623", color: "#0D1B2A",
            fontWeight: 800, fontSize: 11, letterSpacing: 3, padding: "4px 12px",
            textTransform: "uppercase", marginBottom: 20,
          }}>
            Kiralık · 7/24 Hizmet · Türkiye Geneli
          </span>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 54px)", fontWeight: 900, lineHeight: 1.1,
            letterSpacing: "-1px", margin: "0 0 24px",
            textTransform: "uppercase",
          }}>
            Eklemli Platform Kiralama<br />{" "}
            <span style={{ color: "#F5A623" }}>Kiralık Eklemli Platform</span> Hizmetleri
          </h1>
          <p style={{ fontSize: 18, color: "#c8d4e0", maxWidth: 600, lineHeight: 1.7, margin: "0 0 36px" }}>
            Akülü ve dizel eklemli platformlarla inşaat, bakım ve endüstriyel projelerde
            güvenli yüksek erişim. Günlük, haftalık ve aylık kiralama seçenekleriyle hemen teklif alın.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#fiyatlar" style={{
              background: "#F5A623", color: "#0D1B2A", padding: "14px 32px",
              fontWeight: 800, fontSize: 15, textDecoration: "none", letterSpacing: 0.5,
              display: "inline-block",
            }}>
              Fiyat Teklifi Al →
            </a>
            <a href="#secim-rehberi" style={{
              background: "transparent", color: "#fff", padding: "14px 32px",
              fontWeight: 600, fontSize: 15, textDecoration: "none", letterSpacing: 0.5,
              border: "1.5px solid rgba(255,255,255,0.35)", display: "inline-block",
            }}>
              Platform Seçim Rehberi
            </a>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <div style={{ background: "#F5A623", padding: "18px 24px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "space-around",
        }}>
          {[
            ["500+", "Teslim Edilen Platform"],
            ["4m – 43m", "Çalışma Yüksekliği"],
            ["24 Saat", "Teslimat Süresi"],
            ["ISO 9001", "Belgelenmiş Güvenlik"],
          ].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center", color: "#0D1B2A" }}>
              <div style={{ fontWeight: 900, fontSize: 22, lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SAHADAN KARELER ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
            <Image
              src="/images/eklemli-platform-stadyum-cephe.jpg"
              alt="Eklemli platform ile stadyum cephe çalışması"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
            <Image
              src="/images/eklemli-platform-yan-gorunum.jpg"
              alt="Eklemli platform (manlift) yan görünüm"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* ── CONTENT WRAPPER ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* ── FİYAT TABLOSU ── */}
        <section id="fiyatlar" style={{ padding: "72px 0 56px" }}>
          <SectionEyebrow>Ücretler</SectionEyebrow>
          <h2 style={h2Style}>
            Kiralık Eklemli Platform Fiyatları 2026 – Güncel Ücret Tablosu
          </h2>
          <p style={leadStyle}>
            Aşağıdaki fiyatlar KDV hariç başlangıç ücretlerini göstermektedir. Nihai fiyat; çalışma
            yüksekliği, kiralama süresi, teslimat mesafesi ve operatör ihtiyacına göre belirlenir.
          </p>
          <div style={{ overflowX: "auto", marginTop: 32 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#0D1B2A", color: "#fff" }}>
                  {["Model / Yükseklik", "Tip", "Günlük", "Haftalık", "Aylık", "Zemin"].map(h => (
                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, letterSpacing: 0.5 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["10m – 12m", "Akülü", "₺2.800+", "₺14.000+", "₺42.000+", "Düz / Sert"],
                  ["14m – 16m", "Akülü", "₺3.500+", "₺17.500+", "₺52.000+", "Düz / Sert"],
                  ["18m – 20m", "Dizel 4WD", "₺4.200+", "₺21.000+", "₺62.000+", "Karma / Engebeli"],
                  ["24m – 26m", "Dizel 4WD", "₺5.500+", "₺27.500+", "₺80.000+", "Şantiye"],
                  ["30m – 43m", "Dizel 4WD", "₺7.500+", "₺37.500+", "₺110.000+", "Açık Alan"],
                ].map(([model, tip, gun, hafta, ay, zemin], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F5F4F0", borderBottom: "1px solid #E0DDD6" }}>
                    <td style={{ padding: "13px 16px", fontWeight: 700 }}>{model}</td>
                    <td style={{ padding: "13px 16px" }}>
                      <span style={{
                        background: tip === "Akülü" ? "#e8f4e8" : "#fff3e0",
                        color: tip === "Akülü" ? "#2d6a2d" : "#b35a00",
                        padding: "2px 8px", fontSize: 12, fontWeight: 700,
                      }}>{tip}</span>
                    </td>
                    <td style={{ padding: "13px 16px", fontWeight: 700, color: "#0D1B2A" }}>{gun}</td>
                    <td style={{ padding: "13px 16px" }}>{hafta}</td>
                    <td style={{ padding: "13px 16px" }}>{ay}</td>
                    <td style={{ padding: "13px 16px", color: "#555", fontSize: 13 }}>{zemin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "#777" }}>
            * Fiyatlar piyasa koşullarına göre değişkenlik gösterebilir. Güncel teklif için iletişime geçin.
          </p>
        </section>

        <Divider />

        {/* ── NEDİR / FARK ── */}
        <section style={{ padding: "56px 0" }}>
          <SectionEyebrow>Tanım</SectionEyebrow>
          <h2 style={h2Style}>Eklemli Platform Nedir? Boom Lift ile Farkı</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginTop: 32 }}>
            <div style={cardStyle}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>🦾</div>
              <h3 style={h3CardStyle}>Eklemli Platform</h3>
              <p style={cardTextStyle}>
                Kolları birden fazla eklemden bükülen, hem dikey hem de yatay yönde hareket edebilen
                yüksek erişim aracıdır. Engel arkasına, kolon altına veya dar alanlara girebilme
                kapasitesi sayesinde makas platformların ulaşamadığı noktalara erişir.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>↕️</div>
              <h3 style={h3CardStyle}>Boom Lift ile Farkı</h3>
              <p style={cardTextStyle}>
                &quot;Boom lift&quot; hem teleskopik hem eklemli platformları kapsayan genel bir terimdir.
                Teleskopik (düz kollu) modeller yalnızca yukarı-ileri hareket ederken, eklemli
                (mafsallı) modeller engel aşarak yatay uzanabilir. Eklemli tipler kapalı alanlarda
                ve engelli ortamlarda belirgin şekilde avantajlıdır.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── ÇEŞİTLER ── */}
        <section style={{ padding: "56px 0" }}>
          <SectionEyebrow>Ürünler</SectionEyebrow>
          <h2 style={h2Style}>Eklemli Platform Çeşitleri: Akülü ve Dizel Modeller</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginTop: 36 }}>

            {/* Akülü */}
            <div style={{ ...cardStyle, borderLeft: "4px solid #3a8a3a" }}>
              <span style={{ background: "#e8f4e8", color: "#2d6a2d", padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>AKÜLÜ</span>
              <h3 style={{ ...h2Style, fontSize: 20, marginTop: 16 }}>
                Akülü Eklemli Platform Kiralama – Kapalı Alan ve İç Mekan Projeleri İçin
              </h3>
              <p style={cardTextStyle}>
                Sıfır emisyon ve sessiz çalışma özelliğiyle fabrika, AVM, hastane ve kapalı depo
                gibi iç mekanlarda idealdir. Düz ve sert zeminlerde 4–18 m çalışma yüksekliği sunar.
                Dar koridor ve kapı genişliklerine sığabilen kompakt gövdesiyle tercih edilir.
              </p>
              <ul style={listStyle}>
                <li>Sıfır egzoz emisyonu</li>
                <li>Düşük gürültü seviyesi</li>
                <li>Dar alanlarda manevra kolaylığı</li>
                <li>Zemin duyarlı tekerlek sistemi</li>
              </ul>
            </div>

            {/* Dizel */}
            <div style={{ ...cardStyle, borderLeft: "4px solid #c85a00" }}>
              <span style={{ background: "#fff3e0", color: "#b35a00", padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>DİZEL 4WD</span>
              <h3 style={{ ...h2Style, fontSize: 20, marginTop: 16 }}>
                Dizel Eklemli Platform Kiralama – Açık Alan, Şantiye ve Engebeli Zemin İçin
              </h3>
              <p style={cardTextStyle}>
                Dört tekerlekli çekiş ve yüksek kaldırma kapasitesiyle şantiye, köprü, enerji tesisi
                ve açık alan projelerinde kullanılır. 18–43 m çalışma yüksekliğine kadar ulaşır,
                eğimli ve engebeli zemin koşullarında güvenli çalışma sağlar.
              </p>
              <ul style={listStyle}>
                <li>4WD zemin hakimiyeti</li>
                <li>43 m&apos;ye kadar çalışma yüksekliği</li>
                <li>Yüksek yük kapasitesi</li>
                <li>Uzun süreli şantiye kullanımına uygun</li>
              </ul>
            </div>

          </div>
        </section>

        <Divider />

        {/* ── SEKTÖRLER ── */}
        <section style={{ padding: "56px 0" }}>
          <SectionEyebrow>Kullanım Alanları</SectionEyebrow>
          <h2 style={h2Style}>Eklemli Platform Hangi Sektörlerde ve Alanlarda Kullanılır?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 36 }}>

            <SectorCard
              icon="🏗️"
              h3="İnşaat ve Cephe Çalışmalarında Eklemli Platform Kullanımı"
              text="Bina cephesi, iskele destekleme, beton kalıp işleri ve yüksek kat pencere montajında en çok tercih edilen erişim ekipmanıdır. Engelli şantiye yapısında kol esnekliği kritik avantaj sağlar."
            />
            <SectorCard
              icon="⚙️"
              h3="Bakım, Montaj ve Endüstriyel Tesislerde Eklemli Platform"
              text="Fabrika tavanı, boru tesisatı, elektrik panosu ve HVAC sistemlerinin bakım-onarımında kullanılır. Üretim hattını durdurmadan makinelerin üstünden aşarak erişim sağlar."
            />
            <SectorCard
              icon="💡"
              h3="Aydınlatma ve Elektrik Tesisatı"
              text="Stadyum, meydan, otopark ve sanayi aydınlatma sistemlerinin montaj ve bakımında etkili çözüm sunar."
            />
            <SectorCard
              icon="🌳"
              h3="Ağaç Bakımı ve Peyzaj"
              text="Büyük ağaçların budanması, park ve meydan peyzaj düzenlemelerinde güvenli ve stabil çalışma platformu sağlar."
            />
            <SectorCard
              icon="🎬"
              h3="Film, Etkinlik ve Prodüksiyon"
              text="Film çekimi, konser sahne kurulumu ve açık hava etkinliklerinde kamera platformu veya teknik erişim aracı olarak kullanılır."
            />
            <SectorCard
              icon="⚡"
              h3="Enerji ve Altyapı"
              text="Rüzgâr türbini bakımı, enerji nakil hattı ve trafo merkezi çalışmalarında yüksek güvenlik standardıyla hizmet verir."
            />

          </div>
        </section>

        <Divider />

        {/* ── AVANTAJLAR ── */}
        <section style={{ padding: "56px 0" }}>
          <SectionEyebrow>Neden Kiralama?</SectionEyebrow>
          <h2 style={h2Style}>Eklemli Platform Kiralama Avantajları – Neden Satın Almak Yerine Kiralamalısınız?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 16, marginTop: 36 }}>
            {[
              ["Düşük Sermaye Bağlama", "Satın alma maliyeti 500.000 ₺ ile 3.000.000 ₺ arasında değişen bu ekipmanlarda kiralama, sabit yatırım gerektirmez."],
              ["Bakım ve Servis Dahil", "Periyodik bakım, yedek parça ve teknik servis kiralama paketine dahil olduğundan ekstra maliyet oluşmaz."],
              ["Her Proje İçin Doğru Model", "Proje ihtiyacınıza göre yükseklik, motor tipi ve kapasite seçimi yaparak gereksiz kapasite için ödeme yapmazsınız."],
              ["Hızlı Teslimat", "Stoktan günlük kiralama ile 24 saat içinde işbaşında olabilirsiniz."],
              ["Operatör Desteği", "Operatörlü kiralama seçeneği ile iş güvenliği yükümlülüklerini tamamen devredersiniz."],
              ["Amortisman ve Depolama Yok", "Sezon dışı depolama, sigorta ve değer kaybı gibi sahiplik maliyetlerini ortadan kaldırır."],
            ].map(([title, text]) => (
              <div key={title} style={{ display: "flex", gap: 16, padding: "20px", background: "#fff", borderBottom: "2px solid #F5A623" }}>
                <div style={{ width: 6, flexShrink: 0, background: "#F5A623", borderRadius: 3 }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6, color: "#0D1B2A" }}>{title}</div>
                  <div style={{ fontSize: 14, color: "#555", lineHeight: 1.6 }}>{text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── SEÇİM REHBERİ ── */}
        <section id="secim-rehberi" style={{ padding: "56px 0" }}>
          <SectionEyebrow>Rehber</SectionEyebrow>
          <h2 style={h2Style}>Doğru Eklemli Platform Nasıl Seçilir? Yükseklik, Zemin ve Erişim Rehberi</h2>
          <p style={leadStyle}>
            Yanlış platform seçimi hem verimlilik kaybına hem de güvenlik riskine yol açar.
            Aşağıdaki üç faktörü değerlendirerek doğru modeli belirleyin.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 36 }}>
            {[
              {
                step: "01", label: "Çalışma Yüksekliği",
                text: "Platform yüksekliği, iş güvenliği nedeniyle gerçek çalışma noktasından en az 1,2 m daha yüksek olmalıdır. Örneğin 8 m yükseklikte çalışacaksanız en az 10 m platformu tercih edin.",
              },
              {
                step: "02", label: "Zemin Koşulları",
                text: "Düz beton için akülü model yeterlidir. Toprak, çakıl veya eğimli zemin için 4WD dizel model gerekir. Zemin taşıma kapasitesini zemin baskı değeriyle (ground pressure) mutlaka kontrol edin.",
              },
              {
                step: "03", label: "Erişim Noktası",
                text: "Engelin etrafından ya da üstünden geçmek gerekiyorsa eklemli model şarttır. Doğrudan yukarı çıkış yeterliyse teleskopik veya makas platform daha ekonomik olabilir.",
              },
            ].map(({ step, label, text }) => (
              <div key={step} style={{ background: "#0D1B2A", color: "#fff", padding: "28px 24px", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 20, fontWeight: 900, fontSize: 48, color: "#F5A623", opacity: 0.18, lineHeight: 1 }}>{step}</div>
                <div style={{ fontSize: 11, letterSpacing: 2, color: "#F5A623", fontWeight: 700, marginBottom: 12 }}>ADIM {step}</div>
                <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{label}</div>
                <p style={{ fontSize: 14, color: "#9ab0c5", lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── KİRALAMA SÜRECİ ── */}
        <section style={{ padding: "56px 0" }}>
          <SectionEyebrow>Süreç</SectionEyebrow>
          <h2 style={h2Style}>Eklemli Platform Kiralama Süreci Nasıl İşler?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 36, position: "relative" }}>
            <div style={{ position: "absolute", left: 27, top: 0, bottom: 0, width: 2, background: "#E0DDD6", zIndex: 0 }} />
            {[
              ["İhtiyaç Analizi", "Proje yüksekliği, zemin tipi, çalışma süresi ve alan bilgilerinizi paylaşın. Uzmanlarımız size en uygun modeli önerin."],
              ["Teklif ve Sözleşme", "Günlük/haftalık/aylık kiralama bedeli, teslim koşulları ve güvence bedeli içeren teklifinizi 2 saat içinde alırsınız."],
              ["Platform Hazırlığı ve Kontrol", "Seçilen platform teknik ekibimiz tarafından kontrol edilip sevkiyata hazır hâle getirilir."],
              ["Teslimat ve Kurulum", "Platformat belirtilen adrese teslim edilir. Talep hâlinde operatör görevlendirmesi yapılır."],
              ["Aktif Destek", "Kiralama süresince 7/24 teknik destek hattımız aktiftir. Arıza durumunda ikame araç garanti edilir."],
              ["İade ve Kapanış", "Süre sonunda ekipman alınır, hasar değerlendirmesi yapılır ve güvence iadesi gerçekleştirilir."],
            ].map(([title, text], i) => (
              <div key={i} style={{ display: "flex", gap: 24, marginBottom: 28, position: "relative", zIndex: 1 }}>
                <div style={{
                  width: 56, height: 56, flexShrink: 0, background: "#F5A623", color: "#0D1B2A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: 18,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>{text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── FİYAT ETKİLEYEN FAKTÖRLER ── */}
        <section style={{ padding: "56px 0" }}>
          <SectionEyebrow>Fiyatlandırma</SectionEyebrow>
          <h3 style={{ ...h2Style, fontSize: 22 }}>Eklemli Platform Kiralama Fiyatlarını Etkileyen Faktörler</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginTop: 28 }}>
            {[
              ["📏", "Çalışma Yüksekliği", "Yüksek erişim arttıkça platform büyüklüğü ve maliyet artar."],
              ["⏱️", "Kiralama Süresi", "Uzun süreli kiralamalar günlük ortalama maliyeti düşürür."],
              ["🚛", "Teslimat Mesafesi", "Uzak lokasyonlar için nakliye ücreti eklenir."],
              ["👷", "Operatör İhtiyacı", "Operatörlü kiralama için ek ücret uygulanır."],
              ["🔧", "Ekipman Yaşı", "Yeni model platformlar daha yüksek performans sunar, fiyat farkı oluşabilir."],
              ["📅", "Sezon", "Yoğun inşaat sezonlarında talep artar ve fiyatlar buna göre şekillenir."],
            ].map(([icon, title, text]) => (
              <div key={title} style={{ background: "#fff", padding: "20px", textAlign: "center", borderTop: "3px solid #F5A623" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── İŞ GÜVENLİĞİ ── */}
        <section style={{ padding: "56px 0" }}>
          <SectionEyebrow>Güvenlik</SectionEyebrow>
          <h3 style={{ ...h2Style, fontSize: 22 }}>Eklemli Platformlarda İş Güvenliği ve Operatör Sertifikası Gereksinimleri</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 28 }}>
            <div style={{ padding: "28px", background: "#fff3e0", borderLeft: "4px solid #F5A623" }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 12, color: "#0D1B2A" }}>Yasal Zorunluluklar</div>
              <ul style={listStyle}>
                <li>6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında yüksekte çalışma prosedürü uygulanmalıdır.</li>
                <li>Operatör, yetkili eğitim kurumundan onaylı operatör sertifikasına sahip olmalıdır.</li>
                <li>Platform günlük operasyon öncesinde kontrol listesiyle denetlenmelidir.</li>
                <li>Çalışma alanı izole edilmeli, jenerik emniyet kemeri kullanımı zorunlu tutulmalıdır.</li>
              </ul>
            </div>
            <div style={{ padding: "28px", background: "#e8f4e8", borderLeft: "4px solid #3a8a3a" }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 12, color: "#0D1B2A" }}>Kiralama Paketinde Neler Var?</div>
              <ul style={listStyle}>
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
        <section style={{ padding: "56px 0 72px" }}>
          <SectionEyebrow>SSS</SectionEyebrow>
          <h3 style={{ ...h2Style, fontSize: 22 }}>Eklemli Platform Kiralama Hakkında Sıkça Sorulan Sorular (SSS)</h3>
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              ["Eklemli platform kiralama için minimum süre nedir?", "Genellikle minimum 1 günlük kiralama yapılmaktadır. Yarım gün kiralama bazı modellerde mümkün olabilir; talep ettiğinizde bilgi verilir."],
              ["Operatör zorunlu mudur?", "Yasal olarak operatör sertifikasına sahip bir kişi platformat kullanmak zorundadır. Sertifikanız yoksa operatörlü kiralama paketini tercih etmenizi öneririz."],
              ["Şantiye adresine teslimat yapılıyor mu?", "Evet. Türkiye genelinde şantiye ve proje adresi teslimatı yapılmaktadır. Teslimat süresi ve ücreti konuma göre değişir."],
              ["Platform hasar görürse ne olur?", "Kiralama sözleşmesi kapsamındaki normal aşınma ve yıpranma kapsam dışıdır; ancak kaza kaynaklı hasarlar kiracı sorumluluğundadır. Bunun için kiralama sürecinde opsiyonel hasar güvencesi önerilir."],
              ["Hafta sonu ve tatillerde platform teslimi yapılıyor mu?", "Evet, 7/24 lojistik hizmetimiz mevcuttur. Hafta sonu ve resmi tatil teslimatları için ek koordinasyon ücreti uygulanabilir."],
              ["Kaç metreye kadar eklemli platform temin edilebilir?", "Filomuzda 10 m'den 43 m'ye kadar farklı çalışma yüksekliğine sahip modeller bulunmaktadır."],
            ].map(([q, a], i) => (
              <div key={i} style={{ borderBottom: "1px solid #E0DDD6", padding: "22px 0" }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#0D1B2A" }}>
                  <span style={{ color: "#F5A623", marginRight: 8 }}>S.</span>{q}
                </div>
                <div style={{ fontSize: 14, color: "#555", lineHeight: 1.75, paddingLeft: 20 }}>
                  <span style={{ color: "#3a8a3a", fontWeight: 700, marginRight: 4 }}>C.</span>{a}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── CTA FOOTER ── */}
      <div style={{ background: "#0D1B2A", padding: "56px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ color: "#F5A623", fontWeight: 700, fontSize: 12, letterSpacing: 3, marginBottom: 16 }}>HEMEN BAŞLAYIN</div>
          <h2 style={{ color: "#fff", fontSize: 32, fontWeight: 900, margin: "0 0 16px", lineHeight: 1.2 }}>
            Projeniz İçin En Uygun Eklemli Platformu Bulalım
          </h2>
          <p style={{ color: "#9ab0c5", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
            Yükseklik, zemin ve süre bilgilerini paylaşın — 2 saat içinde özel fiyat teklifiniz hazır olsun.
          </p>
          <a href="tel:+900000000000" style={{
            display: "inline-block", background: "#F5A623", color: "#0D1B2A",
            padding: "16px 40px", fontWeight: 900, fontSize: 16, textDecoration: "none",
            letterSpacing: 0.5,
          }}>
            Teklif İste →
          </a>
        </div>
      </div>

    </main>
  );
}

/* ── Shared sub-components ── */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 800, letterSpacing: 3,
      color: "#F5A623", textTransform: "uppercase", marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "#E0DDD6" }} />;
}

function SectorCard({ icon, h3, text }: { icon: string; h3: string; text: string }) {
  return (
    <div style={{ background: "#fff", padding: "24px", borderBottom: "3px solid transparent", transition: "border-color .2s" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#F5A623")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <h3 style={{ fontWeight: 800, fontSize: 15, marginBottom: 10, color: "#0D1B2A", lineHeight: 1.4 }}>{h3}</h3>
      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  );
}

/* ── Style tokens ── */
const h2Style: React.CSSProperties = {
  fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, lineHeight: 1.2,
  color: "#0D1B2A", margin: "0 0 8px", letterSpacing: "-0.5px",
};

const h3CardStyle: React.CSSProperties = {
  fontWeight: 800, fontSize: 17, color: "#0D1B2A", margin: "0 0 10px",
};

const leadStyle: React.CSSProperties = {
  fontSize: 16, color: "#555", lineHeight: 1.8, maxWidth: 700, marginTop: 8,
};

const cardStyle: React.CSSProperties = {
  background: "#fff", padding: "28px 24px",
};

const cardTextStyle: React.CSSProperties = {
  fontSize: 14, color: "#555", lineHeight: 1.75, margin: "0 0 16px",
};

const listStyle: React.CSSProperties = {
  paddingLeft: 18, margin: 0, fontSize: 14, color: "#444", lineHeight: 2,
};
