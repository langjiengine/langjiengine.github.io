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
          <p>Use the left-side categories to narrow the catalog, or search by engine family and part number. Each card opens a maintained specification page.</p>
        </div>
      </section>
      <CatalogExplorer />
      <section className="catalog-disclaimer">
        <strong>Specification notice</strong>
        <p>Source labels are retained for traceability. Final fitment, material, machining state, package dimensions, availability, and compatible part numbers must be confirmed before ordering.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
