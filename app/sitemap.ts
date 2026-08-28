import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { v8Products } from "./data/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const now = new Date();
  return [
    { url: origin, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${origin}/request-a-quote`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...v8Products.map((product) => ({
      url: `${origin}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: product.images.map((image) => `${origin}${image}`),
    })),
  ];
}
