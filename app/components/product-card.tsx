/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { V8Product } from "../data/products";

export function ProductCard({ product, index }: { product: V8Product; index: number }) {
  return (
    <article className="product-card">
      <Link className="product-image" href={`/products/${product.slug}`}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <img src={product.images[0]} alt={`${product.name} production view`} />
      </Link>
      <div className="product-card-body">
        <p>{product.family}</p>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <dl><dt>Bore</dt><dd>{product.bore}</dd></dl>
        <Link href={`/products/${product.slug}`} aria-label={`View details for ${product.name}`}>
          View block details <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
