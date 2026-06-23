import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Vinç Deposu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
