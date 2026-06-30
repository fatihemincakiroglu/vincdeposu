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
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              📞 7/24 Hizmetinizdeyiz
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Bize<br />
              <span className="text-yellow-400">Ulaşın</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Vinç kiralama, operatör desteği veya teknik danışmanlık için
              ekibimiz en kısa sürede size dönüş yapar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05323039089"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                📞 0532 303 90 89
              </a>
              <a
                href="#iletisim-formu"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Mesaj Gönder ↓
              </a>
            </div>
          </div>
        </div>

        {/* Hızlı İletişim Bandı */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-0 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <a
              href="tel:05323039089"
              className="flex items-center gap-4 px-8 py-6 hover:bg-white/5 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-xl shrink-0">
                📞
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Telefon</div>
                <div className="font-bold text-white text-lg leading-tight">0532 303 90 89</div>
                <div className="text-gray-400 text-sm">Acil çağrı hattı — 7/24 aktif</div>
              </div>
            </a>
            <a
              href="mailto:info@vincdeposu.com.tr"
              className="flex items-center gap-4 px-8 py-6 hover:bg-white/5 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-xl shrink-0">
                ✉️
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">E-posta</div>
                <div className="font-bold text-white text-lg leading-tight">info@vincdeposu.com.tr</div>
                <div className="text-gray-400 text-sm">En geç 2 saat içinde yanıt</div>
              </div>
            </a>
            <div className="flex items-center gap-4 px-8 py-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-xl shrink-0">
                📍
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Adres</div>
                <div className="font-bold text-white text-lg leading-tight">Express Vinç Hizmetleri</div>
                <div className="text-gray-400 text-sm">İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112, 34490 Başakşehir/İstanbul</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ana İçerik */}
      <section id="iletisim-formu" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Sol: Bilgi */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">İletişim Bilgileri</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Hızlı<br />
                <span className="text-yellow-500">Bilgi</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                İstanbul&apos;un her ilçesinde aktif kadromuzla kısa sürede çözüm
                üretiyoruz. Aşağıdaki bilgilerden doğrudan ulaşabilir ya da
                formu doldurabilirsiniz.
              </p>
            </div>

            {/* İletişim Kartı */}
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-4 p-5 border-b border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-yellow-400/20 flex items-center justify-center text-base shrink-0">📞</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">0532 303 90 89</div>
                  <div className="text-gray-500 text-xs">Acil ve genel talepler</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 border-b border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-yellow-400/20 flex items-center justify-center text-base shrink-0">✉️</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">info@vincdeposu.com.tr</div>
                  <div className="text-gray-500 text-xs">E-posta ile iletişim</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5">
                <div className="w-9 h-9 rounded-lg bg-yellow-400/20 flex items-center justify-center text-base shrink-0">📍</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Express Vinç Hizmetleri ve Nak. Ltd. Şti.</div>
                  <div className="text-gray-500 text-xs">İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112, 34490 Başakşehir/İstanbul</div>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="border border-gray-100 rounded-2xl p-6">
              <p className="text-yellow-600 font-semibold text-xs uppercase tracking-wider mb-4">Çalışma Saatleri</p>
              <div className="space-y-3">
                {[
                  { gun: "Pazartesi – Cuma", saat: "08:00 – 18:00" },
                  { gun: "Cumartesi", saat: "09:00 – 15:00" },
                  { gun: "Pazar", saat: "Kapalı" },
                ].map((r) => (
                  <div key={r.gun} className="flex justify-between items-center text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-500">{r.gun}</span>
                    <span className="font-semibold text-gray-900">{r.saat}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm pt-1 border-t border-gray-100">
                  <span className="font-semibold text-gray-900">Acil Çağrı Hattı</span>
                  <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    7/24 Açık
                  </span>
                </div>
              </div>
            </div>

            {/* Harita */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.933587747738!2d28.803315476427326!3d41.070444315593925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb2bea89e70b%3A0x57c3faea048af5db!2sExpress%20Vin%C3%A7%20Hizmetleri%20ve%20Nak.%20Ltd.%20%C5%9Eti!5e0!3m2!1str!2str!4v1782329979263!5m2!1str!2str"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Express Vinç Hizmetleri Konum"
                className="w-full h-52 grayscale brightness-75 contrast-110 border-none block"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent px-4 py-3 text-white text-sm font-semibold flex items-center gap-2">
                <span>📍</span> İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112, Başakşehir/İstanbul
              </div>
            </div>
          </div>

          {/* Sağ: Form */}
          <div className="lg:col-span-3">
            <div className="border border-gray-100 rounded-2xl overflow-hidden relative">
              {/* Sarı üst şerit */}
              <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />

              <div className="p-8 md:p-12">
                {submitted ? (
                  <div className="text-center py-16 px-4">
                    <div className="w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-4xl mx-auto mb-6">
                      ✅
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-3">Mesajınız Alındı!</h3>
                    <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto mb-8">
                      Talebiniz başarıyla iletildi. Ekibimiz en kısa sürede sizinle
                      iletişime geçecektir. Acil durumlarda{" "}
                      <strong className="text-gray-900">0532 303 90 89</strong>{" "}
                      numaramızı arayabilirsiniz.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="border border-gray-200 hover:border-yellow-400 hover:text-yellow-600 text-gray-500 font-semibold px-6 py-3 rounded-xl text-sm transition"
                    >
                      Yeni Mesaj Gönder
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-3">Form</p>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">Teklif & Bilgi Formu</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                      Proje detaylarınızı paylaşın, en uygun vinç çözümünü sizin için hazırlayalım.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Ad */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="ad" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Ad *
                        </label>
                        <input
                          id="ad"
                          name="ad"
                          type="text"
                          placeholder="Adınız"
                          value={formData.ad}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                        />
                      </div>

                      {/* Soyad */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="soyad" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Soyad *
                        </label>
                        <input
                          id="soyad"
                          name="soyad"
                          type="text"
                          placeholder="Soyadınız"
                          value={formData.soyad}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                        />
                      </div>

                      {/* E-posta */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          E-posta *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="ornek@sirket.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                        />
                      </div>

                      {/* Telefon */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="telefon" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Telefon *
                        </label>
                        <input
                          id="telefon"
                          name="telefon"
                          type="tel"
                          placeholder="0532 000 00 00"
                          value={formData.telefon}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                        />
                      </div>

                      {/* Konu */}
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label htmlFor="konu" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Konu
                        </label>
                        <select
                          id="konu"
                          name="konu"
                          value={formData.konu}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition appearance-none"
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

                      {/* Mesaj */}
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label htmlFor="mesaj" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Mesajınız *
                        </label>
                        <textarea
                          id="mesaj"
                          name="mesaj"
                          placeholder="Projeniz hakkında detay paylaşın: çalışma bölgesi, süre, kapasite gereksinimleri..."
                          value={formData.mesaj}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition resize-vertical leading-relaxed"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                      <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                        <strong className="text-gray-500">Gizlilik taahhüdü:</strong> Bilgileriniz yalnızca
                        talebinizi yanıtlamak için kullanılır, üçüncü taraflarla paylaşılmaz.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold px-8 py-4 rounded-xl text-base transition shrink-0"
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Gönderiliyor…
                          </>
                        ) : (
                          <>
                            Gönder
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Projeniz İçin Teklif Alın</h2>
          <p className="text-gray-400 mb-8 text-lg">
            7/24 hizmetinizdeyiz. Hemen arayın, size en uygun vinci belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05323039089"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              📞 0532 303 90 89
            </a>
            <a
              href="mailto:info@vincdeposu.com.tr"
              className="border-2 border-gray-600 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              ✉️ E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
