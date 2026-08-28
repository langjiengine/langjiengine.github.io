import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "../../components/product-card";
import { ProductGallery } from "../../components/product-gallery";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { getV8Product, v8Products } from "../../data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

async function requestOrigin() {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${protocol}://${host}`;
}

export function generateStaticParams() {
  return v8Products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getV8Product(slug);
  if (!product) return { title: "Product Not Found | V8 Blocks" };
  const origin = await requestOrigin();
  const title = `${product.name} | V8 Blocks`;
  const description = `${product.summary} Review ${product.imageCount} source-supplied product views and request a specification match.`;
  const productUrl = `${origin}/products/${product.slug}`;
  const imageUrl = `${origin}${product.images[0]}`;

  return {
    title,
    description,
    alternates: { canonical: productUrl },
    openGraph: {
      title,
      description,
      type: "website",
      url: productUrl,
      images: [{ url: imageUrl, alt: `${product.name} production view` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getV8Product(slug);
  if (!product) notFound();
  const origin = await requestOrigin();
  const related = v8Products.filter((item) => item.slug !== product.slug && (item.brand === product.brand || item.family === product.family)).slice(0, 3);
  if (related.length < 3) {
    for (const item of v8Products) {
      if (item.slug !== product.slug && !related.some((current) => current.slug === item.slug) && related.length < 3) related.push(item);
    }
  }
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: "V8 Cylinder Block",
    brand: { "@type": "Brand", name: product.brand },
    image: product.images.map((image) => `${origin}${image}`),
    url: `${origin}/products/${product.slug}`,
    sku: product.sourceLabel,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Products", item: `${origin}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${origin}/products/${product.slug}` },
    ],
  };

  return (
    <main>
      <SiteHeader />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>{product.family}</span>
      </nav>
      <section className="product-detail">
        <ProductGallery images={product.images} name={product.name} />
        <div className="product-detail-copy">
          <p className="eyebrow">V8 cylinder block · {product.family}</p>
          <h1>{product.name}</h1>
          <p className="product-summary">{product.summary}</p>
          {product.status === "needs-confirmation" && (
            <p className="verification-note"><strong>Source check:</strong> exact brand, family, and application need supplier confirmation.</p>
          )}
          <dl className="spec-table">
            <div><dt>Source label</dt><dd>{product.sourceLabel}</dd></div>
            <div><dt>Brand</dt><dd>{product.brand}</dd></div>
            <div><dt>Engine family</dt><dd>{product.family}</dd></div>
            <div><dt>Bore</dt><dd>{product.bore}</dd></div>
            <div><dt>Source photography</dt><dd>{product.imageCount} views</dd></div>
            <div><dt>Target markets</dt><dd>United States / Australia</dd></div>
          </dl>
          <div className="detail-actions">
            <Link className="button button-primary" href={`/request-a-quote?product=${encodeURIComponent(product.name)}`}>Request a specification match</Link>
            <Link className="button button-secondary" href="/products">Back to catalog</Link>
          </div>
          <small className="detail-fineprint">No price or fitment claim is published until the product specification and application have been confirmed.</small>
        </div>
      </section>

      <section className="detail-process">
        <p className="eyebrow">What to include</p>
        <ol>
          <li><span>01</span><strong>Identify</strong><p>Engine family, casting or reference number, and vehicle or equipment application.</p></li>
          <li><span>02</span><strong>Specify</strong><p>Required bore, machining state, quantity, and any inspection or material requirements.</p></li>
          <li><span>03</span><strong>Deliver</strong><p>Destination country, postcode, and preferred commercial terms for quotation.</p></li>
        </ol>
      </section>

      <section className="related-section">
        <div className="section-kicker"><p className="eyebrow">Related blocks</p><Link href="/products">View full catalog →</Link></div>
        <div className="product-grid related-grid">
          {related.map((item, index) => <ProductCard key={item.slug} product={item} index={index} />)}
        </div>
      </section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
    </main>
  );
}
