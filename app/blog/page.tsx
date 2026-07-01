import type { Metadata } from "next";
import Link from "next/link";
import { categories, featuredPost, posts } from "./posts-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: "Blog | Vinç ve Kaldırma Ekipmanları Rehberi",
  description:
    "Vinç kiralama, iş güvenliği, ekipman seçimi ve sektör haberleri hakkında uzman makaleler. Vinç Deposu Blog.",
};

// ─── SSS Verileri ────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Vinç kiralama fiyatları nasıl belirleniyor?",
    a: "Kiralama fiyatları; vincin türü ve kapasitesi, kiralama süresi, operatör dahil olup olmadığı, proje konumu ve sigorta kapsamına göre değişir. Ortalama sepetli vinç günlüğü 500–1.500 ₺, mobil vinç ise 2.000–8.000 ₺ arasında fiyatlanır.",
  },
  {
    q: "Operatörlü vinç kiralamanın avantajları neler?",
    a: "Operatörlü kiralama; eğitimli ve belgeli operatör güvencesi, kaza riskinin minimize edilmesi, ekipman hasarında sorumluluk paylaşımı ve operasyonel verimlilik açısından avantaj sağlar. Özellikle büyük projeler için tercih edilir.",
  },
  {
    q: "Vinç için hangi belgeler gereklidir?",
    a: "Türkiye'de vinç operasyonu için; vincin periyodik muayene belgesi (yıllık), operatörün MEB onaylı sertifikası, projenin iş güvenliği planı ve gerekli hallerde belediye izni gerekmektedir.",
  },
  {
    q: "Minimum kiralama süresi kaç gün?",
    a: "Çoğu vinç kiralama şirketinde minimum kiralama süresi 1 gündür. Ancak kurulum ve söküm gerektiren büyük ekipmanlarda (kule vinç gibi) minimum süre 1 hafta veya üzeri olabilir.",
  },
  {
    q: "Vinç kiralama sigortası zorunlu mu?",
    a: "Evet. Türkiye'de kiraya verilen her vinç için geçerli bir 3. şahıs sorumluluk sigortası bulunması zorunludur. Kiracı olarak projenize ait iş makinesi sigortası yaptırmanız da önerilir.",
  },
];

// ─── İstatistikler ────────────────────────────────────────────────────────────

const stats = [
  { value: "150+", label: "Makale" },
  { value: "12K+", label: "Aylık Okuyucu" },
  { value: "8", label: "Uzman Yazar" },
  { value: "2018", label: "Kuruluş" },
];

// ─── Sayfa Bileşeni ───────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <div className="blog-root">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="blog-hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Uzman İçerik Merkezi
          </div>
          <h1 className="hero-title">
            Vinç & Kaldırma
            <br />{" "}
            <span className="hero-accent">Bilgi Bankası</span>
          </h1>
          <p className="hero-desc">
            Sektör uzmanlarından güvenilir rehberler, teknik analizler ve güncel
            haberler. Her proje için doğru kararı vermek için ihtiyaç duyduğunuz
            bilgi burada.
          </p>

          {/* İstatistikler */}
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="stat-val">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dekoratif arka plan şekli */}
        <div className="hero-deco" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="#f97316" strokeWidth="1" strokeDasharray="8 12" opacity="0.3" />
            <circle cx="200" cy="200" r="120" stroke="#f97316" strokeWidth="1" strokeDasharray="4 8" opacity="0.2" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="#f97316" strokeWidth="1" opacity="0.1" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="#f97316" strokeWidth="1" opacity="0.1" />
          </svg>
        </div>
      </section>

      {/* ── Kategoriler ───────────────────────────────────────────────── */}
      <section className="cat-bar">
        <div className="container">
          <div className="cat-list">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`cat-pill${cat.slug === "tumu" ? " cat-pill--active" : ""}`}
              >
                {cat.label}
                <span className="cat-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container main-grid">
        {/* ── Ana İçerik ────────────────────────────────────────────── */}
        <main className="content-col">

          {/* Öne Çıkan Yazı */}
          <section className="featured-section">
            <div className="section-label">
              <span className="label-icon">★</span> Öne Çıkan Yazı
            </div>
            <article className="featured-card">
              <div className="featured-emoji" aria-hidden="true">{featuredPost.image}</div>
              <div className="featured-body">
                <div className="featured-meta">
                  <span className="post-category post-category--blue">{featuredPost.category}</span>
                  <span className="meta-sep">·</span>
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="meta-sep">·</span>
                  <span className="post-read">{featuredPost.readTime} okuma</span>
                </div>
                <h2 className="featured-title">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-footer">
                  <div className="post-tags">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="read-more-btn">
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </article>
          </section>

          {/* Karşılaştırma Tablosu */}
          <section className="compare-section">
            <div className="section-label">
              <span className="label-icon">⚖️</span> Hızlı Karşılaştırma
            </div>
            <div className="compare-card">
              <h3 className="compare-title">Hangi Vinç Türü Sizin İçin Uygun?</h3>
              <div className="table-wrap">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Vinç Türü</th>
                      <th>Maks. Yük</th>
                      <th>Maks. Yükseklik</th>
                      <th>En Uygun Kullanım</th>
                      <th>Günlük Kira (₺)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="tc-emoji">🏗️</span> Sepetli Vinç</td>
                      <td>500 kg</td>
                      <td>12–80 m</td>
                      <td>Cephe, elektrik, bakım</td>
                      <td className="price-cell">500–1.500</td>
                    </tr>
                    <tr>
                      <td><span className="tc-emoji">🚛</span> Mobil Vinç</td>
                      <td>50–500 t</td>
                      <td>30–100 m</td>
                      <td>Endüstriyel montaj</td>
                      <td className="price-cell">3.000–10.000</td>
                    </tr>
                    <tr>
                      <td><span className="tc-emoji">🏢</span> Kule Vinç</td>
                      <td>6–25 t</td>
                      <td>40–200 m</td>
                      <td>Uzun dönem inşaat</td>
                      <td className="price-cell">2.500–8.000</td>
                    </tr>
                    <tr>
                      <td><span className="tc-emoji">🐙</span> Ahtapot Vinç</td>
                      <td>1–5 t</td>
                      <td>20–40 m</td>
                      <td>Dar alan, şehir merkezi</td>
                      <td className="price-cell">800–2.000</td>
                    </tr>
                    <tr>
                      <td><span className="tc-emoji">⚓</span> Paletli Vinç</td>
                      <td>100 t–1.500 t</td>
                      <td>60–150 m</td>
                      <td>Petrokimya, enerji</td>
                      <td className="price-cell">8.000–25.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="table-note">* Fiyatlar operatör dahil değildir. Proje detaylarına göre ücretsiz fiyat teklifi alın.</p>
            </div>
          </section>

          {/* Blog Listesi */}
          <section>
            <div className="section-label">
              <span className="label-icon">📰</span> Son Yazılar
            </div>
            <div className="post-grid">
              {posts.map((post) => (
                <article key={post.slug} className="post-card">
                  <div className="post-emoji" aria-hidden="true">{post.image}</div>
                  <div className="post-body">
                    <div className="post-meta">
                      <span
                        className="post-category"
                        style={{ color: post.categoryColor, borderColor: post.categoryColor + "33", backgroundColor: post.categoryColor + "15" }}
                      >
                        {post.category}
                      </span>
                      <span className="meta-sep">·</span>
                      <span className="post-read">{post.readTime} okuma</span>
                    </div>
                    <h3 className="post-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <span className="post-author">✍ {post.author}</span>
                      <span className="post-date-sm">{post.date}</span>
                    </div>
                    <div className="post-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sayfalama */}
            <div className="pagination">
              <button className="page-btn page-btn--active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <span className="page-dots">…</span>
              <button className="page-btn">8</button>
            </div>
          </section>
        </main>

        {/* ── Kenar Çubuğu ──────────────────────────────────────────── */}
        <aside className="sidebar">

          {/* Teklif Widget */}
          <div className="sidebar-card sidebar-cta">
            <div className="cta-icon">🏗️</div>
            <h3 className="cta-title">Ücretsiz Fiyat Teklifi</h3>
            <p className="cta-desc">Projeniz için en uygun vinci belirleyelim. 30 dakika içinde geri dönüyoruz.</p>
            <Link href="/iletisim" className="cta-btn">Hemen Teklif Al</Link>
            <a href="tel:05323039089" className="cta-phone">📞 0532 303 90 89</a>
          </div>

          {/* Popüler Yazılar */}
          <div className="sidebar-card">
            <h3 className="sidebar-title">Popüler Yazılar</h3>
            <div className="popular-list">
              {posts.slice(0, 5).map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="popular-item">
                  <span className="popular-num">0{i + 1}</span>
                  <span className="popular-title">{post.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Konular */}
          <div className="sidebar-card">
            <h3 className="sidebar-title">Konular</h3>
            <div className="topic-cloud">
              {["Sepetli Vinç", "Mobil Vinç", "İş Güvenliği", "Kule Vinç", "Kiralama Fiyatları", "Operatör", "Manlift", "Ahtapot Vinç", "Sertifikasyon", "Bakım", "Platform", "Forklift"].map((t) => (
                <span key={t} className="topic-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* İletişim */}
          <div className="sidebar-card sidebar-contact">
            <h3 className="sidebar-title">7/24 Destek Hattı</h3>
            <div className="contact-items">
              <div className="contact-item">
                <span className="ci-icon">📞</span>
                <div>
                  <div className="ci-label">Telefon</div>
                  <a href="tel:05323039089" className="ci-val">0532 303 90 89</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="ci-icon">📧</span>
                <div>
                  <div className="ci-label">E-posta</div>
                  <a href="mailto:info@vincdeposu.com.tr" className="ci-val">info@vincdeposu.com.tr</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="ci-icon">📍</span>
                <div>
                  <div className="ci-label">Bölge</div>
                  <span className="ci-val">İstanbul & Tüm Türkiye</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── SSS Bölümü ────────────────────────────────────────────────── */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <div className="section-label">
              <span className="label-icon">❓</span> Sık Sorulan Sorular
            </div>
            <h2 className="faq-title">Vinç Kiralama Hakkında En Çok Merak Edilenler</h2>
            <p className="faq-sub">Aşağıda bulamadığınız soruları <Link href="/sik-sorulan-sorular">SSS sayfamızdan</Link> veya iletişim hattımızdan sorabilirsiniz.</p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-card">
                <div className="faq-q">
                  <span className="faq-num">S{i + 1}</span>
                  <span>{faq.q}</span>
                </div>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bülten ────────────────────────────────────────────────────── */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-inner">
            <div className="nl-text">
              <h2 className="nl-title">Sektör Güncellemelerini Kaçırmayın</h2>
              <p className="nl-desc">Yeni makaleler, fiyat değişiklikleri ve vinç sektörü haberleri doğrudan e-postanıza gelsin.</p>
            </div>
            <div className="nl-form">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="nl-input"
              />
              <button className="nl-btn">Abone Ol</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stiller ──────────────────────────────────────────────────── */}
      <style>{`
        /* ─── Reset & Kök ─── */
        .blog-root {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #1a1a2e;
          background: #f8f9fa;
          line-height: 1.6;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ─── Hero ─── */
        .blog-hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: white;
          padding: 80px 24px 100px;
          position: relative;
          overflow: hidden;
        }
        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 24px;
        }
        .eyebrow-dot {
          width: 6px;
          height: 6px;
          background: #f97316;
          border-radius: 50%;
          display: inline-block;
        }
        .hero-title {
          font-size: clamp(38px, 6vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
        }
        .hero-accent {
          color: #f97316;
        }
        .hero-desc {
          font-size: 17px;
          color: #94a3b8;
          max-width: 540px;
          margin: 0 0 48px;
        }
        .hero-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
        }
        .stat-val {
          font-size: 32px;
          font-weight: 800;
          color: #f97316;
          line-height: 1;
        }
        .stat-lbl {
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
        }
        .hero-deco {
          position: absolute;
          right: -60px;
          top: -60px;
          width: 500px;
          height: 500px;
          opacity: 0.4;
          pointer-events: none;
        }

        /* ─── Kategori Bar ─── */
        .cat-bar {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .cat-list {
          display: flex;
          gap: 8px;
          padding: 14px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .cat-list::-webkit-scrollbar { display: none; }
        .cat-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          border: 1.5px solid #e5e7eb;
          background: transparent;
          color: #64748b;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s;
        }
        .cat-pill:hover {
          border-color: #f97316;
          color: #f97316;
        }
        .cat-pill--active {
          background: #f97316;
          border-color: #f97316;
          color: white;
        }
        .cat-count {
          background: rgba(0,0,0,0.1);
          border-radius: 100px;
          padding: 1px 7px;
          font-size: 11px;
          font-weight: 700;
        }
        .cat-pill--active .cat-count {
          background: rgba(255,255,255,0.25);
        }

        /* ─── Ana Grid ─── */
        .main-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          padding-top: 48px;
          padding-bottom: 64px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .main-grid { grid-template-columns: 1fr; }
          .sidebar { order: -1; }
        }

        /* ─── Section Label ─── */
        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 16px;
        }
        .label-icon { font-size: 14px; }

        /* ─── Featured ─── */
        .featured-section { margin-bottom: 56px; }
        .featured-card {
          background: white;
          border-radius: 16px;
          border: 1.5px solid #e5e7eb;
          overflow: hidden;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0;
          transition: box-shadow 0.2s;
        }
        .featured-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .featured-emoji {
          font-size: 80px;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          min-width: 180px;
        }
        .featured-body { padding: 32px; }
        .featured-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .post-category {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1.5px solid;
        }
        .post-category--blue {
          color: #3b82f6;
          border-color: #3b82f633;
          background: #3b82f615;
        }
        .meta-sep { color: #d1d5db; font-size: 12px; }
        .post-date, .post-read { font-size: 13px; color: #64748b; }
        .featured-title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 14px;
        }
        .featured-title a { color: inherit; text-decoration: none; }
        .featured-title a:hover { color: #f97316; }
        .featured-excerpt { color: #475569; font-size: 15px; margin: 0 0 20px; }
        .featured-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .post-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .tag {
          font-size: 12px;
          color: #64748b;
          background: #f1f5f9;
          border-radius: 100px;
          padding: 3px 10px;
        }
        .read-more-btn {
          font-size: 14px;
          font-weight: 600;
          color: #f97316;
          text-decoration: none;
          white-space: nowrap;
        }
        .read-more-btn:hover { color: #ea6c04; }

        /* ─── Compare Table ─── */
        .compare-section { margin-bottom: 56px; }
        .compare-card {
          background: white;
          border-radius: 16px;
          border: 1.5px solid #e5e7eb;
          padding: 32px;
          overflow: hidden;
        }
        .compare-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 20px;
        }
        .table-wrap { overflow-x: auto; }
        .compare-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .compare-table th {
          text-align: left;
          padding: 12px 16px;
          background: #f8f9fa;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #64748b;
          border-bottom: 2px solid #e5e7eb;
        }
        .compare-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #f1f5f9;
          color: #334155;
          vertical-align: middle;
        }
        .compare-table tr:last-child td { border-bottom: none; }
        .compare-table tr:hover td { background: #fafafa; }
        .tc-emoji { margin-right: 6px; }
        .price-cell { font-weight: 700; color: #f97316; }
        .table-note {
          font-size: 12px;
          color: #94a3b8;
          margin: 16px 0 0;
        }

        /* ─── Post Grid ─── */
        .post-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        @media (max-width: 700px) {
          .post-grid { grid-template-columns: 1fr; }
        }
        .post-card {
          background: white;
          border-radius: 12px;
          border: 1.5px solid #e5e7eb;
          overflow: hidden;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
        }
        .post-card:hover {
          border-color: #f97316;
          box-shadow: 0 4px 20px rgba(249,115,22,0.1);
          transform: translateY(-2px);
        }
        .post-emoji {
          font-size: 42px;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          padding: 24px;
          text-align: center;
        }
        .post-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
        .post-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .post-title {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px;
        }
        .post-title a { color: inherit; text-decoration: none; }
        .post-title a:hover { color: #f97316; }
        .post-excerpt {
          font-size: 13px;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 14px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          flex-wrap: wrap;
          gap: 4px;
        }
        .post-author { font-size: 12px; color: #64748b; }
        .post-date-sm { font-size: 12px; color: #94a3b8; }

        /* ─── Pagination ─── */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }
        .page-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1.5px solid #e5e7eb;
          background: white;
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.15s;
        }
        .page-btn:hover { border-color: #f97316; color: #f97316; }
        .page-btn--active { background: #f97316; border-color: #f97316; color: white; }
        .page-dots { line-height: 40px; color: #94a3b8; }

        /* ─── Sidebar ─── */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: sticky;
          top: 80px;
        }
        .sidebar-card {
          background: white;
          border-radius: 16px;
          border: 1.5px solid #e5e7eb;
          padding: 24px;
        }
        .sidebar-title {
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid #f1f5f9;
        }

        /* CTA Card */
        .sidebar-cta {
          background: linear-gradient(135deg, #1a1a2e, #0f3460);
          color: white;
          text-align: center;
          border-color: transparent;
        }
        .cta-icon { font-size: 48px; margin-bottom: 12px; }
        .cta-title { font-size: 18px; font-weight: 800; margin: 0 0 8px; color: white; }
        .cta-desc { font-size: 14px; color: #94a3b8; margin: 0 0 20px; line-height: 1.6; }
        .cta-btn {
          display: block;
          background: #f97316;
          color: white;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          padding: 14px;
          border-radius: 10px;
          margin-bottom: 12px;
          transition: background 0.15s;
        }
        .cta-btn:hover { background: #ea6c04; }
        .cta-phone {
          display: block;
          color: #f97316;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        /* Popular */
        .popular-list { display: flex; flex-direction: column; gap: 0; }
        .popular-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
          text-decoration: none;
          transition: color 0.15s;
        }
        .popular-item:last-child { border-bottom: none; padding-bottom: 0; }
        .popular-num {
          font-size: 18px;
          font-weight: 800;
          color: #e5e7eb;
          line-height: 1.3;
          min-width: 28px;
        }
        .popular-title {
          font-size: 13px;
          color: #334155;
          line-height: 1.5;
          font-weight: 500;
        }
        .popular-item:hover .popular-title { color: #f97316; }
        .popular-item:hover .popular-num { color: #f97316; }

        /* Topic Cloud */
        .topic-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
        .topic-tag {
          font-size: 12px;
          color: #475569;
          background: #f1f5f9;
          border-radius: 100px;
          padding: 5px 12px;
          cursor: pointer;
          transition: all 0.15s;
          border: 1.5px solid transparent;
        }
        .topic-tag:hover {
          color: #f97316;
          background: #fff7ed;
          border-color: #fed7aa;
        }

        /* Contact */
        .contact-items { display: flex; flex-direction: column; gap: 14px; }
        .contact-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .ci-icon { font-size: 20px; margin-top: 2px; }
        .ci-label { font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px; }
        .ci-val { font-size: 14px; font-weight: 600; color: #1a1a2e; text-decoration: none; }
        a.ci-val:hover { color: #f97316; }

        /* ─── FAQ ─── */
        .faq-section {
          background: white;
          padding: 80px 0;
          border-top: 1px solid #e5e7eb;
        }
        .faq-header { text-align: center; margin-bottom: 48px; }
        .faq-title {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 800;
          margin: 12px 0 16px;
        }
        .faq-sub { font-size: 15px; color: #64748b; }
        .faq-sub a { color: #f97316; text-decoration: none; }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 700px) {
          .faq-grid { grid-template-columns: 1fr; }
          .featured-card { grid-template-columns: 1fr; }
          .featured-emoji { padding: 24px; font-size: 48px; min-width: unset; }
        }
        .faq-card {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 28px;
          border: 1.5px solid #e5e7eb;
        }
        .faq-q {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }
        .faq-num {
          background: #f97316;
          color: white;
          font-size: 12px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
          margin-top: 2px;
        }
        .faq-a { font-size: 14px; color: #475569; line-height: 1.7; margin: 0; }

        /* ─── Newsletter ─── */
        .newsletter-section {
          background: linear-gradient(135deg, #1a1a2e, #0f3460);
          padding: 64px 0;
        }
        .newsletter-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }
        .nl-text { flex: 1; min-width: 260px; }
        .nl-title {
          font-size: 24px;
          font-weight: 800;
          color: white;
          margin: 0 0 8px;
        }
        .nl-desc { font-size: 15px; color: #94a3b8; margin: 0; }
        .nl-form {
          display: flex;
          gap: 12px;
          flex: 0 0 auto;
          flex-wrap: wrap;
        }
        .nl-input {
          padding: 14px 18px;
          border-radius: 10px;
          border: 1.5px solid #334155;
          background: rgba(255,255,255,0.07);
          color: white;
          font-size: 14px;
          width: 260px;
          outline: none;
          transition: border-color 0.15s;
        }
        .nl-input::placeholder { color: #64748b; }
        .nl-input:focus { border-color: #f97316; }
        .nl-btn {
          padding: 14px 28px;
          background: #f97316;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .nl-btn:hover { background: #ea6c04; }
      `}</style>
    </div>
  );
}
