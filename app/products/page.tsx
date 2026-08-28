import type { Metadata } from "next";
import { CatalogExplorer } from "../components/catalog-explorer";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Engine Component Catalog | V8 Blocks",
  description: "Search nine V8 cylinder block groups and a supporting range of 61 engine component records for US and Australian inquiries.",
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero catalog-page-hero">
        <p className="eyebrow">Product catalog</p>
        <h1>Find the family.<br /><em>Then confirm the build.</em></h1>
        <p>V8 blocks lead this catalog. Supporting diesel and heavy-duty components remain searchable by brand and engine family.</p>
      </section>
      <CatalogExplorer />
      <section className="catalog-disclaimer">
        <strong>Specification notice</strong>
        <p>Source labels are preserved for traceability. Fitment, material, machining state, package dimensions, and final part-number compatibility must be confirmed before an order is placed.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
