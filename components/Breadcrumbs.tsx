"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labelForSegment } from "@/lib/route-labels";

const SITE_URL = "https://vincdeposu.com.tr";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Anasayfada breadcrumb gösterilmez (tek başına "Anasayfa" anlamsız olurdu).
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items = [
    { name: "Anasayfa", path: "/" },
    ...segments.map((seg, i) => ({
      name: labelForSegment(seg),
      path: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <span key={item.path} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-gray-300">/</span>}
                {isLast ? (
                  <span className="text-gray-700 font-medium">{item.name}</span>
                ) : (
                  <Link href={item.path} className="hover:text-yellow-600 transition">
                    {item.name}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </nav>
    </>
  );
}
