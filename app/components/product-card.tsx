/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { CatalogProduct } from "../data/products";

export function ProductCard({ product }: { product: CatalogProduct }) {
  const image = product.cardImage ?? product.images[0];
  const firstReference = product.partNumbers[0] ?? product.id;
  const rotateSource = product.category === "Featured V8 Blocks" && !product.cardImage;

  return (
    <article className="product-card">
      <Link className={`product-image${product.cardImage ? " product-image-cutout" : ""}${rotateSource ? " product-image-rotated" : ""}`} href={`/products/${product.slug}`}>
        {image ? (
          <img src={image} alt={`${product.name} product view`} />
        ) : (
          <span className="image-missing">Image pending</span>
        )}
      </Link>
      <div className="product-card-body">
        <p className="product-reference">{product.family} · {firstReference}</p>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p className="product-card-summary">{product.summary}</p>
        <dl>
          <div><dt>Category</dt><dd>{product.category}</dd></div>
          <div><dt>Pricing</dt><dd>{product.priceLabel}</dd></div>
        </dl>
        <Link className="product-detail-link" href={`/products/${product.slug}`} aria-label={`View specifications for ${product.name}`}>
          View specifications <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
