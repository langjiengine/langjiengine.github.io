import type { Metadata } from "next";
import { QuoteForm } from "../components/quote-form";
import { EmailDialogTrigger } from "../components/email-dialog";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { LANGII_CONTACT } from "../data/contact";

export const metadata: Metadata = {
  title: "Product Inquiry | LANGII",
  description: "Send product, part-number, quantity, and application details to request LANGII pricing and specification confirmation.",
};

export default function QuotePage() {
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
          <p className="inquiry-helper">The form prepares the inquiry locally, copies a backup and lets you choose Gmail, Outlook or your email application. No information is stored by this website.</p>
          <div className="direct-contacts" aria-label="Direct contact options">
            <EmailDialogTrigger className="direct-contact-email">
              <span>Email</span>
              <strong>{LANGII_CONTACT.email}</strong>
            </EmailDialogTrigger>
            <a href={LANGII_CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              <span>WhatsApp / WeChat</span>
              <strong>{LANGII_CONTACT.phoneDisplay}</strong>
            </a>
          </div>
        </div>
        <div className="quote-form-shell">
          <h2>Inquiry details</h2>
          <QuoteForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
