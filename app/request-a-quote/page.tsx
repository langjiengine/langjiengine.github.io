import type { Metadata } from "next";
import { QuoteForm } from "../components/quote-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Request an Engine Component Quote | V8 Blocks",
  description: "Send a specification-led inquiry for V8 cylinder blocks and supporting engine components for the United States or Australia.",
};

type QuotePageProps = { searchParams: Promise<{ product?: string }> };

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const { product = "" } = await searchParams;
  return (
    <main>
      <SiteHeader />
      <section className="quote-page-grid">
        <div className="quote-page-intro">
          <p className="eyebrow">Request a specification match</p>
          <h1>Start with what the engine needs.</h1>
          <p>Provide enough detail to identify the right record and reduce the number of follow-up questions.</p>
          <dl>
            <div><dt>01</dt><dd>Engine family and application</dd></div>
            <div><dt>02</dt><dd>Bore, machining state, and quantity</dd></div>
            <div><dt>03</dt><dd>Destination and commercial requirements</dd></div>
          </dl>
          <div className="placeholder-alert"><strong>Contact setup pending</strong><p>The recipient address <code>sales@example.com</code> is a visible placeholder. Replace it before public launch.</p></div>
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
