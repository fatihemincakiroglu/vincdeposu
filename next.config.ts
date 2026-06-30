import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/kurumsal", destination: "/", permanent: true },
      { source: "/hakkimizda", destination: "/", permanent: true },
      { source: "/misyon-vizyon", destination: "/", permanent: true },
      { source: "/yonetim-kurulu", destination: "/", permanent: true },
      { source: "/sosyal-sorumluluk", destination: "/", permanent: true },
      { source: "/basin-ve-medya", destination: "/", permanent: true },
      { source: "/kariyer", destination: "/", permanent: true },
      // Eyüp ilçesi 2019'da Eyüpsultan olarak yeniden adlandırıldı; aynı ilçe için
      // iki ayrı sayfa (duplicate content) oluşmaması için tek canonical sayfaya yönlendiriyoruz.
      { source: "/eyup-vinc-kiralama", destination: "/eyupsultan-vinc-kiralama", permanent: true },
    ];
  },
};

export default nextConfig;
