import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vinç Deposu | İstanbul Vinç Kiralama",
    template: "%s | Vinç Deposu",
  },
  description:
    "Vinç Deposu, inşaat ve sanayi sektörlerinde profesyonel vinç kiralama ve satış hizmetleri sunar. 7/24 hizmet: 0532 303 90 89",
  keywords: ["vinç kiralama", "kiralık vinç", "istanbul vinç", "sepetli vinç", "mobil vinç"],
  metadataBase: new URL("https://vincdeposu.com.tr"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Fatih Emin Çakıroğlu" }],
  creator: "Fatih Emin Çakıroğlu",
  publisher: "Fatih Emin Çakıroğlu",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Vinç Deposu",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Express Vinç Hizmetleri ve Nak. Ltd. Şti.",
  alternateName: "Vinç Deposu",
  image: "https://vincdeposu.com.tr/icon.png",
  url: "https://vincdeposu.com.tr",
  telephone: "+905323039089",
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112",
    addressLocality: "Başakşehir",
    addressRegion: "İstanbul",
    postalCode: "34490",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.070444315593925,
    longitude: 28.803315476427326,
  },
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
