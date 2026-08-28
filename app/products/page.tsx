import type { Metadata } from "next";
import { CatalogExplorer } from "../components/catalog-explorer";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Product Catalog | LANGII",
  description: "Search LANGII engine blocks, cylinder heads, head assemblies, and crankshafts by engine family or reference number.",
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="catalog-hero catalog-page-hero">
        <div>
          <p className="eyebrow">Product catalog</p>
          <h1>Engine components.<br /><em>Clearly specified.</em></h1>
        </div>
        <div className="catalog-hero-copy">
          <p>Use the left-side categories to narrow the catalog, or search by engine family and part number. Every card opens a dedicated specification page.</p>
        </div>
      </section>
      <CatalogExplorer />
      <section className="catalog-disclaimer">
        <strong>Ordering note</strong>
        <p>Confirm final fitment, material, machining state, availability and compatible part numbers against the engine family and casting or reference number.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
