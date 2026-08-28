import type { Metadata } from "next";
import { QuoteForm } from "../components/quote-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Product Inquiry | LANGII",
  description: "Send product, part-number, quantity, and application details to request LANGII pricing and specification confirmation.",
};

type QuotePageProps = { searchParams: Promise<{ product?: string }> };

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const { product = "" } = await searchParams;
  return (
    <main>
      <SiteHeader />
      <section className="quote-page-grid">
        <div className="quote-page-intro">
          <p className="eyebrow">Product inquiry</p>
          <h1>Prepare a complete product inquiry.</h1>
          <p>Build a concise sourcing brief with the information needed to identify the component and quote the correct configuration.</p>
          <dl>
            <div><dt>01</dt><dd>Engine family and application</dd></div>
            <div><dt>02</dt><dd>Part or casting number</dd></div>
            <div><dt>03</dt><dd>Quantity and machining requirements</dd></div>
          </dl>
          <p className="inquiry-helper">The form prepares the inquiry locally, copies a backup and opens your email application. No information is stored by this website.</p>
        </div>
        <div className="quote-form-shell">
          <h2>Inquiry details</h2>
          <QuoteForm initialProduct={product} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
