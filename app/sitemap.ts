import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { NAV_ITEMS } from "@/config/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_ITEMS.map((item) => ({
    url: new URL(item.href, SITE.url).toString(),
    lastModified: new Date(),
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
