import type { MetadataRoute } from "next";
import { SITE_URL, legalNav, mainNav } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = mainNav.map((item) => ({
    url: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
  const legal = legalNav.map((item) => ({
    url: `${SITE_URL}${item.href}`,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));
  return [...pages, ...legal];
}
