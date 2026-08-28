import type { MetadataRoute } from "next";
import { allProducts } from "./data/products";

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteOrigin, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteOrigin}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteOrigin}/request-a-quote`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...allProducts.map((product) => ({
      url: `${siteOrigin}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: product.featured ? 0.8 : 0.7,
      images: product.images.map((image) => `${siteOrigin}${image}`),
    })),
  ];
}
