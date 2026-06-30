import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function Page() {
  return <IletisimClient />;
}
