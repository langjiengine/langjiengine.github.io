import Link from "next/link";
import { CatalogExplorer } from "./components/catalog-explorer";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="catalog-hero">
        <div>
          <p className="eyebrow">LANGII engine components</p>
          <h1>Find the part.<br /><em>Check the specification.</em></h1>
        </div>
        <div className="catalog-hero-copy">
          <p>Browse by component type, engine family, or reference number. V8 engine blocks are listed first, followed by cylinder heads, assemblies, diesel blocks, and crankshafts.</p>
          <div>
            <Link className="button button-primary" href="#featured-v8">Browse V8 blocks</Link>
            <Link className="button button-secondary" href="/request-a-quote">Request pricing</Link>
          </div>
        </div>
      </section>
      <CatalogExplorer />
      <section className="catalog-disclaimer">
        <strong>Specification notice</strong>
        <p>Product records reproduce the supplied source data. Part-number fitment, material, machining state, availability, packing data, and final pricing must be confirmed before ordering.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
