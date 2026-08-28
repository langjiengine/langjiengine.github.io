/* eslint-disable @next/next/no-html-link-for-pages -- native navigation keeps hash targets reliable on static hosting */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "../../components/product-card";
import { ProductGallery } from "../../components/product-gallery";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { allProducts, getCatalogProduct } from "../../data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getCatalogProduct(slug);
  if (!product) return { title: "Product Not Found | LANGII" };
  const title = `${product.name} | LANGII`;
  const productUrl = `${siteOrigin}/products/${product.slug}`;
  const imageUrl = `${siteOrigin}${product.cardImage ?? product.images[0] ?? "/og-v2.png"}`;

  return {
    title,
    description: product.summary,
    alternates: { canonical: productUrl },
    openGraph: {
      title,
      description: product.summary,
      type: "website",
      url: productUrl,
      images: [{ url: imageUrl, alt: `${product.name} product view` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.summary,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getCatalogProduct(slug);
  if (!product) notFound();

  const related = allProducts
    .filter((item) => item.slug !== product.slug && (item.category === product.category || item.family === product.family))
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: product.category,
    brand: { "@type": "Brand", name: "LANGII" },
    image: product.images.map((image) => `${siteOrigin}${image}`),
    url: `${siteOrigin}/products/${product.slug}`,
    sku: product.partNumbers[0] ?? product.id,
  };

  return (
    <main>
      <SiteHeader />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><a href="/products#catalog">Products</a><span>/</span><span>{product.family}</span>
      </nav>

      <section className="product-detail">
        <ProductGallery images={product.images} name={product.name} cardImage={product.cardImage} rotateSource={product.category === "Featured V8 Blocks"} />
        <div className="product-detail-copy">
          <p className="eyebrow">{product.category} · {product.id}</p>
          <h1>{product.name}</h1>
          <p className="product-summary">{product.summary}</p>
          <div className="price-line"><span>Pricing</span><strong>{product.priceLabel}</strong></div>

          {product.status === "needs-confirmation" && (
            <p className="verification-note"><strong>Fitment matching:</strong> quote against the engine family, casting or reference number and required machining state.</p>
          )}

          <dl className="spec-table">
            <div><dt>Engine / application family</dt><dd>{product.applicationBrand}</dd></div>
            <div><dt>Product family</dt><dd>{product.family}</dd></div>
            {product.specifications.map((item) => (
              <div key={`${item.label}-${item.value}`}><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>

          <div className="detail-actions">
            <a className="button button-primary" href={`/request-a-quote?product=${encodeURIComponent(product.name)}#inquiry-form`}>Prepare inquiry</a>
            <a className="button button-secondary" href="/products#catalog">Back to catalog</a>
          </div>
        </div>
      </section>

      <section className="buyer-strip">
        <strong>For a precise response, include:</strong>
        <span>Engine family</span>
        <span>Part or casting number</span>
        <span>Quantity</span>
        <span>Machining state</span>
        <span>Application</span>
      </section>

      {related.length > 0 && (
        <section className="related-section">
          <div className="section-kicker"><p className="eyebrow">Related products</p><a href="/products#catalog">View catalog →</a></div>
          <div className="product-grid related-grid">
            {related.map((item) => <ProductCard key={item.slug} product={item} />)}
          </div>
        </section>
      )}
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }} />
    </main>
  );
}
