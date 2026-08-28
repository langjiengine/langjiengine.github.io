import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outputDirectory = path.join(root, "dist", "client");
const siteOrigin = "https://langjiengine.github.io";

const productSource = fs.readFileSync(path.join(root, "app", "data", "products.ts"), "utf8");
const v8Section = productSource.split("export const v8Products")[1]?.split("type SupportingRecord")[0] ?? "";
const v8Slugs = [...v8Section.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const supportingProducts = JSON.parse(
  fs.readFileSync(path.join(root, "app", "data", "supporting-products.json"), "utf8"),
);
const productSlugs = [...v8Slugs, ...supportingProducts.map((product) => product.slug)];

const routes = [
  { path: "", priority: "1.0" },
  { path: "/products", priority: "0.9" },
  { path: "/request-a-quote", priority: "0.6" },
  ...productSlugs.map((slug) => ({ path: `/products/${slug}`, priority: "0.7" })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path: routePath, priority }) => `  <url>
    <loc>${siteOrigin}${routePath}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(outputDirectory, "sitemap.xml"), sitemap);
fs.writeFileSync(
  path.join(outputDirectory, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`,
);
fs.writeFileSync(path.join(outputDirectory, ".nojekyll"), "");
