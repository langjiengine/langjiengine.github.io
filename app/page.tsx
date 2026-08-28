/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages -- native navigation keeps hash targets reliable on static hosting */
import { CatalogExplorer } from "./components/catalog-explorer";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Engine blocks · cylinder heads · crankshafts</p>
          <h1>Engine components, <em>clearly specified.</em></h1>
          <p>LANGII presents V8 and heavy-duty engine components for professional sourcing. Compare engine family, reference numbers and technical details before preparing an inquiry.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#featured-v8">Explore V8 blocks</a>
            <a className="button button-secondary" href="/products#catalog">View full catalog</a>
          </div>
        </div>
        <div className="home-hero-product" aria-label="Featured LS3 aluminum V8 cylinder block">
          <span>Featured V8 · LS3 6.2L</span>
          <img src="/products/cutouts/ls3-v2.png" alt="LS3 aluminum 6.2L V8 cylinder block" />
        </div>
      </section>
      <section className="assurance-strip" aria-label="Catalog benefits">
        <div><strong>71</strong><span>Product records</span></div>
        <div><strong>10</strong><span>Priority V8 blocks</span></div>
        <div><strong>Search</strong><span>By family or reference</span></div>
        <div><strong>Detail</strong><span>Dedicated specification pages</span></div>
      </section>
      <CatalogExplorer />
      <section className="manufacturing-section" id="manufacturing">
        <div className="manufacturing-heading">
          <div>
            <p className="eyebrow">Manufacturing &amp; inspection</p>
            <h2>Built around repeatable production and verification.</h2>
          </div>
          <p>Selected views from the supplied company materials show machining, tooling and dimensional inspection. Technical scope for each order is confirmed against the product reference.</p>
        </div>
        <div className="manufacturing-grid">
          <figure>
            <img src="/company/cnc-machining.png" alt="CNC machining equipment in the production workshop" />
            <figcaption><strong>CNC machining</strong><span>Production equipment for complex component work.</span></figcaption>
          </figure>
          <figure>
            <img src="/company/precision-inspection.png" alt="Precision inspection of a machined component" />
            <figcaption><strong>Dimensional inspection</strong><span>Component geometry checked with precision equipment.</span></figcaption>
          </figure>
          <figure>
            <img src="/company/tooling-workshop.png" alt="Engine component tooling workshop" />
            <figcaption><strong>Tooling capability</strong><span>Dedicated workspace for tooling preparation and review.</span></figcaption>
          </figure>
        </div>
      </section>
      <section className="catalog-disclaimer">
        <strong>Ordering note</strong>
        <p>For the most precise match, include the engine family, casting or reference number, quantity, application and required machining state with your inquiry.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
