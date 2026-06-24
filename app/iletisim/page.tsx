"use client";

import { useState } from "react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    konu: "",
    mesaj: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Barlow+Condensed:wght@600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .iletisim-root {
          --clr-bg: #0d1117;
          --clr-surface: #131920;
          --clr-surface2: #1a2332;
          --clr-border: #1e2d3d;
          --clr-orange: #f97316;
          --clr-orange-dim: rgba(249,115,22,0.12);
          --clr-orange-glow: rgba(249,115,22,0.25);
          --clr-text: #e8edf2;
          --clr-muted: #7a8fa3;
          --clr-muted2: #4a6070;
          --ff-display: 'Barlow Condensed', sans-serif;
          --ff-body: 'Barlow', sans-serif;
          font-family: var(--ff-body);
          background: var(--clr-bg);
          color: var(--clr-text);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          overflow: hidden;
          background: var(--clr-bg);
          padding: 100px 24px 80px;
          border-bottom: 1px solid var(--clr-border);
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 900px 500px at 60% 50%, rgba(249,115,22,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 79px, #fff 79px, #fff 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, #fff 79px, #fff 80px);
        }
        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--ff-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--clr-orange);
          margin-bottom: 20px;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: var(--clr-orange);
        }
        .hero-title {
          font-family: var(--ff-display);
          font-size: clamp(52px, 9vw, 110px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -1px;
          text-transform: uppercase;
          color: var(--clr-text);
        }
        .hero-title span {
          color: var(--clr-orange);
        }
        .hero-sub {
          max-width: 500px;
          margin-top: 24px;
          font-size: 16px;
          line-height: 1.6;
          color: var(--clr-muted);
        }

        /* ── QUICK CONTACT STRIP ── */
        .quick-strip {
          background: var(--clr-surface);
          border-bottom: 1px solid var(--clr-border);
        }
        .quick-strip-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          divide: 1px solid var(--clr-border);
        }
        .quick-item {
          padding: 36px 40px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          border-right: 1px solid var(--clr-border);
          transition: background 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .quick-item:last-child { border-right: none; }
        .quick-item:hover { background: var(--clr-surface2); }
        .quick-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--clr-orange-dim);
          border: 1px solid var(--clr-orange-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 20px;
        }
        .quick-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--clr-muted2);
          margin-bottom: 6px;
        }
        .quick-value {
          font-size: 18px;
          font-weight: 700;
          color: var(--clr-text);
          line-height: 1.3;
        }
        .quick-desc {
          font-size: 13px;
          color: var(--clr-muted);
          margin-top: 3px;
        }

        /* ── MAIN SECTION ── */
        .main-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }

        /* ── LEFT SIDE INFO ── */
        .info-section-title {
          font-family: var(--ff-display);
          font-size: 38px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 16px;
        }
        .info-section-title em {
          font-style: normal;
          color: var(--clr-orange);
        }
        .info-intro {
          font-size: 15px;
          line-height: 1.7;
          color: var(--clr-muted);
          margin-bottom: 40px;
        }

        .info-card {
          background: var(--clr-surface);
          border: 1px solid var(--clr-border);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        .info-card-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid var(--clr-border);
        }
        .info-card-row:last-child { border-bottom: none; }
        .info-card-row-icon {
          font-size: 18px;
          width: 36px;
          height: 36px;
          background: var(--clr-orange-dim);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-card-row-text strong {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: var(--clr-text);
        }
        .info-card-row-text span {
          font-size: 13px;
          color: var(--clr-muted);
        }

        .hours-block {
          background: var(--clr-surface);
          border: 1px solid var(--clr-border);
          border-radius: 16px;
          padding: 24px;
          margin-top: 16px;
        }
        .hours-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--clr-orange);
          margin-bottom: 16px;
        }
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--clr-border);
          font-size: 14px;
        }
        .hours-row:last-child { border-bottom: none; padding-bottom: 0; }
        .hours-day { color: var(--clr-muted); }
        .hours-time { font-weight: 600; color: var(--clr-text); }
        .badge-open {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);
          color: #4ade80;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
        }
        .badge-open::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── MAP PREVIEW ── */
        .map-block {
          margin-top: 20px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--clr-border);
          position: relative;
        }
        .map-block iframe {
          display: block;
          width: 100%;
          height: 220px;
          border: none;
          filter: grayscale(100%) brightness(0.6) contrast(1.2);
          transition: filter 0.3s;
        }
        .map-block:hover iframe {
          filter: grayscale(60%) brightness(0.8) contrast(1.1);
        }
        .map-overlay-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px 16px;
          background: linear-gradient(to top, rgba(13,17,23,0.95) 60%, transparent);
          font-size: 13px;
          font-weight: 600;
          color: var(--clr-text);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ── FORM ── */
        .form-wrapper {
          background: var(--clr-surface);
          border: 1px solid var(--clr-border);
          border-radius: 20px;
          padding: 48px;
          position: relative;
          overflow: hidden;
        }
        .form-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--clr-orange), #fb923c, var(--clr-orange));
        }
        .form-title {
          font-family: var(--ff-display);
          font-size: 28px;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .form-subtitle {
          font-size: 14px;
          color: var(--clr-muted);
          margin-bottom: 36px;
          line-height: 1.5;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-grid.full { grid-column: 1 / -1; }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field.full { grid-column: 1 / -1; }

        .field label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--clr-muted);
        }

        .field input,
        .field select,
        .field textarea {
          background: var(--clr-surface2);
          border: 1px solid var(--clr-border);
          border-radius: 10px;
          padding: 14px 16px;
          font-family: var(--ff-body);
          font-size: 15px;
          color: var(--clr-text);
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          appearance: none;
        }
        .field input::placeholder,
        .field textarea::placeholder {
          color: var(--clr-muted2);
        }
        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: var(--clr-orange);
          box-shadow: 0 0 0 3px var(--clr-orange-dim);
        }
        .field textarea {
          resize: vertical;
          min-height: 130px;
          line-height: 1.6;
        }
        .field select option {
          background: #1a2332;
          color: var(--clr-text);
        }

        .form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 24px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .form-note {
          font-size: 12px;
          color: var(--clr-muted2);
          max-width: 260px;
          line-height: 1.5;
        }
        .form-note strong {
          color: var(--clr-muted);
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--clr-orange);
          color: #fff;
          font-family: var(--ff-display);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: none;
          border-radius: 10px;
          padding: 16px 36px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, background 0.2s;
          position: relative;
          overflow: hidden;
        }
        .btn-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.08);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .btn-submit:hover::after { opacity: 1; }
        .btn-submit:hover {
          background: #ea6c0f;
          box-shadow: 0 8px 32px rgba(249,115,22,0.35);
          transform: translateY(-1px);
        }
        .btn-submit:active { transform: translateY(0); }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── SUCCESS STATE ── */
        .success-state {
          text-align: center;
          padding: 60px 24px;
        }
        .success-icon {
          width: 80px;
          height: 80px;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin: 0 auto 24px;
        }
        .success-title {
          font-family: var(--ff-display);
          font-size: 32px;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .success-text {
          font-size: 15px;
          color: var(--clr-muted);
          line-height: 1.6;
          max-width: 340px;
          margin: 0 auto 32px;
        }
        .btn-reset {
          background: transparent;
          border: 1px solid var(--clr-border);
          border-radius: 10px;
          color: var(--clr-muted);
          font-family: var(--ff-body);
          font-size: 14px;
          padding: 12px 24px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-reset:hover { border-color: var(--clr-orange); color: var(--clr-orange); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .main-section {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .quick-strip-inner {
            grid-template-columns: 1fr;
          }
          .quick-item { border-right: none; border-bottom: 1px solid var(--clr-border); }
          .quick-item:last-child { border-bottom: none; }
          .form-grid { grid-template-columns: 1fr; }
          .form-wrapper { padding: 28px 20px; }
        }
        @media (max-width: 600px) {
          .hero { padding: 80px 20px 60px; }
          .form-footer { flex-direction: column; align-items: stretch; }
          .btn-submit { justify-content: center; }
        }
      `}</style>

      <div className="iletisim-root">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-grid-lines" />
          <div className="hero-inner">
            <div className="hero-eyebrow">İletişim</div>
            <h1 className="hero-title">
              Bize<br />
              <span>Ulaşın</span>
            </h1>
            <p className="hero-sub">
              Vinç kiralama, operatör desteği veya teknik danışmanlık için
              7/24 hizmetinizdeyiz. Ekibimiz en kısa sürede size dönüş yapar.
            </p>
          </div>
        </section>

        {/* ── QUICK CONTACT STRIP ── */}
        <div className="quick-strip">
          <div className="quick-strip-inner">
            <a className="quick-item" href="tel:05323039089">
              <div className="quick-icon">📞</div>
              <div>
                <div className="quick-label">Telefon</div>
                <div className="quick-value">0532 303 90 89</div>
                <div className="quick-desc">Acil çağrı hattı — 7/24 aktif</div>
              </div>
            </a>
            <a className="quick-item" href="mailto:info@vincdeposu.com">
              <div className="quick-icon">✉️</div>
              <div>
                <div className="quick-label">E-posta</div>
                <div className="quick-value">info@vincdeposu.com</div>
                <div className="quick-desc">En geç 2 saat içinde yanıt</div>
              </div>
            </a>
            <div className="quick-item">
              <div className="quick-icon">📍</div>
              <div>
                <div className="quick-label">Adres</div>
                <div className="quick-value">Express Vinç Hizmetleri</div>
                <div className="quick-desc">İstanbul, Türkiye</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="main-section">
          {/* LEFT: INFO */}
          <div>
            <h2 className="info-section-title">
              Hızlı<br /><em>Bilgi</em>
            </h2>
            <p className="info-intro">
              İstanbul'un her ilçesinde aktif kadromuzla kısa sürede çözüm üretiyoruz.
              Aşağıdaki bilgilerden bize doğrudan ulaşabilir ya da formu doldurabilirsiniz.
            </p>

            {/* Contact Details */}
            <div className="info-card">
              <div className="info-card-row">
                <div className="info-card-row-icon">📞</div>
                <div className="info-card-row-text">
                  <strong>0532 303 90 89</strong>
                  <span>Acil ve genel talepler</span>
                </div>
              </div>
              <div className="info-card-row">
                <div className="info-card-row-icon">✉️</div>
                <div className="info-card-row-text">
                  <strong>info@vincdeposu.com</strong>
                  <span>E-posta ile iletişim</span>
                </div>
              </div>
              <div className="info-card-row">
                <div className="info-card-row-icon">📍</div>
                <div className="info-card-row-text">
                  <strong>Express Vinç Hizmetleri ve Nak. Ltd. Şti.</strong>
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="hours-block">
              <div className="hours-title">Çalışma Saatleri</div>
              <div className="hours-row">
                <span className="hours-day">Pazartesi – Cuma</span>
                <span className="hours-time">08:00 – 18:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Cumartesi</span>
                <span className="hours-time">09:00 – 15:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Pazar</span>
                <span className="hours-time">Kapalı</span>
              </div>
              <div className="hours-row" style={{ paddingTop: "14px", borderTop: "1px solid var(--clr-border)" }}>
                <span className="hours-day" style={{ fontWeight: 600, color: "var(--clr-text)" }}>
                  Acil Çağrı Hattı
                </span>
                <span className="badge-open">7/24 Açık</span>
              </div>
            </div>

            {/* Map */}
            <div className="map-block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.933587747738!2d28.803315476427326!3d41.070444315593925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb2bea89e70b%3A0x57c3faea048af5db!2sExpress%20Vin%C3%A7%20Hizmetleri%20ve%20Nak.%20Ltd.%20%C5%9Eti!5e0!3m2!1str!2str!4v1782329979263!5m2!1str!2str"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Express Vinç Hizmetleri Konum"
              />
              <div className="map-overlay-label">
                <span>📍</span>
                Express Vinç Hizmetleri — İstanbul
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="form-wrapper">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">✅</div>
                <h3 className="success-title">Mesajınız Alındı!</h3>
                <p className="success-text">
                  Talebiniz başarıyla iletildi. Ekibimiz en kısa sürede sizinle iletişime
                  geçecektir. Acil durumlarda <strong>0532 303 90 89</strong> numaramızı arayabilirsiniz.
                </p>
                <button className="btn-reset" onClick={() => setSubmitted(false)}>
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="form-title">Teklif & Bilgi Formu</h3>
                <p className="form-subtitle">
                  Proje detaylarınızı paylaşın, en uygun vinç çözümünü sizin için hazırlayalım.
                </p>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="ad">Ad *</label>
                    <input
                      id="ad"
                      name="ad"
                      type="text"
                      placeholder="Adınız"
                      value={formData.ad}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="soyad">Soyad *</label>
                    <input
                      id="soyad"
                      name="soyad"
                      type="text"
                      placeholder="Soyadınız"
                      value={formData.soyad}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">E-posta *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ornek@sirket.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="telefon">Telefon *</label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      placeholder="0532 000 00 00"
                      value={formData.telefon}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field full">
                    <label htmlFor="konu">Konu</label>
                    <select
                      id="konu"
                      name="konu"
                      value={formData.konu}
                      onChange={handleChange}
                    >
                      <option value="">— Talep türünü seçin —</option>
                      <option value="kiralik-vinc">Kiralık Vinç</option>
                      <option value="satilik-vinc">Satılık Vinç</option>
                      <option value="operatorlu">Operatörlü Vinç Hizmeti</option>
                      <option value="platform">Platform / Manlift Kiralama</option>
                      <option value="forklift">Forklift Kiralama</option>
                      <option value="teknik">Teknik Danışmanlık</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="mesaj">Mesajınız *</label>
                    <textarea
                      id="mesaj"
                      name="mesaj"
                      placeholder="Projeniz hakkında detay paylaşın: çalışma bölgesi, süre, kapasite gereksinimleri..."
                      value={formData.mesaj}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <p className="form-note">
                    <strong>Gizlilik taahhüdü:</strong> Bilgileriniz yalnızca talebinizi
                    yanıtlamak için kullanılır, üçüncü taraflarla paylaşılmaz.
                  </p>
                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner" />
                        Gönderiliyor…
                      </>
                    ) : (
                      <>
                        Gönder
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
