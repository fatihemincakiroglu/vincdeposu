import type { Metadata } from "next";
import MakasliPlatformClient from "./MakasliPlatformClient";

export const metadata: Metadata = {
  title: "Makaslı Platform",
  alternates: {
    canonical: "/makasli-platform",
  },
};

export default function Page() {
  return <MakasliPlatformClient />;
}
