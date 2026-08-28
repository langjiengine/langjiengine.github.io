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
          <h1>Send the details buyers rely on.</h1>
          <p>Provide enough information to identify the correct component and reduce follow-up questions.</p>
          <dl>
            <div><dt>01</dt><dd>Engine family and application</dd></div>
            <div><dt>02</dt><dd>Part or casting number</dd></div>
            <div><dt>03</dt><dd>Quantity and machining requirements</dd></div>
          </dl>
          <div className="placeholder-alert"><strong>Sales contact pending</strong><p><code>sales@langii.example</code> is an intentional placeholder. Replace it before public launch.</p></div>
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
