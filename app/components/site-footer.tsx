/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { LANGII_CONTACT } from "../data/contact";

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand-lockup brand-lockup-footer" href="/" aria-label="LANGII home">
        <img src="/brand/langii-lt-mark-v2.png" alt="" />
        <span><strong>LANGII</strong><small>Engine Components</small></span>
      </Link>
      <p>V8 engine blocks and supporting engine components presented for professional sourcing.</p>
      <div className="footer-contact">
        <small>Ningbo Langji Technology Co., Ltd.</small>
        <a href={`mailto:${LANGII_CONTACT.email}`}>{LANGII_CONTACT.email}</a>
        <a href={LANGII_CONTACT.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp / WeChat&nbsp; {LANGII_CONTACT.phoneDisplay}</a>
      </div>
    </footer>
  );
}
