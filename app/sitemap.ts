import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";
import { getAllProductSlugs } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/menu",
    "/custom-cakes",
    "/about",
    "/faq",
    "/contact",
    "/cart",
    "/checkout",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = getAllProductSlugs().map((slug) => ({
    url: `${SITE.url}/product/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
