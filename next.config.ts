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
    ];
  },
};

export default nextConfig;
