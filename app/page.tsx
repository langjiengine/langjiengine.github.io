/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProductCard } from "./components/product-card";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { supportingProductCount, supportingRanges, v8Products } from "./data/products";

export default function Home() {
  const featuredProducts = [v8Products[0], v8Products[2], v8Products[4], v8Products[7]];

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Engine components · United States &amp; Australia</p>
          <h1>
            V8 engine blocks.
            <span>Built around the specification.</span>
          </h1>
          <p className="hero-lede">
            A focused range for professional engine builders, machine shops,
            distributors, and performance specialists. Review the block family,
            bore options, and production views—then send us your exact build.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">Explore V8 blocks</Link>
            <Link className="button button-secondary" href="/request-a-quote">Send your specification</Link>
          </div>
          <dl className="hero-stats" aria-label="Catalog facts">
            <div><dt>9</dt><dd>V8 product groups</dd></div>
            <div><dt>60</dt><dd>Production views</dd></div>
            <div><dt>US / AU</dt><dd>Inquiry markets</dd></div>
          </dl>
        </div>
        <div className="hero-visual" aria-label="Ford 351 V8 engine block">
          <img src="/products/v8/ford-351-02.jpg" alt="Ford 351 V8 engine block showing the cylinder bores and valley" />
          <div className="hero-spec-card">
            <span>Featured block</span>
            <strong>351 Series</strong>
            <small>Bore options: 4.000 / 4.125 in</small>
          </div>
        </div>
      </section>

      <section className="catalog-intro" id="products">
        <div>
          <p className="eyebrow">Flagship range</p>
          <h2>Start with the block family.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Browse verified source photography and the specifications currently on record.
            Full fitment and machining details are confirmed during quotation.
          </p>
          <Link className="text-link" href="/products">View all 9 V8 block groups →</Link>
        </div>
      </section>

      <section className="product-grid" aria-label="Featured V8 engine blocks">
        {featuredProducts.map((product, index) => (
          <ProductCard product={product} index={index} key={product.slug} />
        ))}
      </section>

      <section className="proof-strip" aria-label="Catalog capabilities">
        <p>Product-led support</p>
        <span>Reference-number search</span>
        <span>Source-backed specifications</span>
        <span>Application-led inquiries</span>
      </section>

      <section className="support-section" id="supporting-range">
        <div className="support-heading">
          <div>
            <p className="eyebrow">Supporting range</p>
            <h2>More engine components, kept in context.</h2>
          </div>
          <p>
            The secondary catalog currently contains {supportingProductCount} supplied records
            across cylinder heads, head assemblies, cylinder blocks, and crankshafts.
          </p>
        </div>
        <div className="support-grid">
          {supportingRanges.map((range) => (
            <article className="support-card" key={range.brand}>
              <span>{String(range.count).padStart(2, "0")} records</span>
              <h3>{range.brand}</h3>
              <p>{range.focus}</p>
              <small>{range.examples.join(" · ")}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="market-panel">
        <p className="eyebrow">Two target markets</p>
        <div>
          <h2>United States</h2>
          <p>Imperial-first specifications, application-led search, and quotation support for trade buyers.</p>
        </div>
        <div>
          <h2>Australia</h2>
          <p>Metric and imperial context, heavy-duty engine references, and destination-based inquiries.</p>
        </div>
      </section>

      <section className="quote-panel">
        <div>
          <p className="eyebrow">Build request</p>
          <h2>Tell us what the engine needs.</h2>
        </div>
        <p>
          Share the engine family, bore, application, quantity, and destination.
          The request will be matched to the relevant product record.
        </p>
        <Link className="button button-light" href="/request-a-quote">Start a quote request</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
