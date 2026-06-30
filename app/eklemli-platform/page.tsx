import type { Metadata } from "next";
import EklemliPlatformClient from "./EklemliPlatformClient";

export const metadata: Metadata = {
  title: "Eklemli Platform",
  alternates: {
    canonical: "/eklemli-platform",
  },
};

export default function Page() {
  return <EklemliPlatformClient />;
}
