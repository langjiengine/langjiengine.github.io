/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand-lockup brand-lockup-footer" href="/" aria-label="LANGII home">
        <img src="/brand/langii-lt-mark-v2.png" alt="" />
        <span><strong>LANGII</strong><small>Engine Components</small></span>
      </Link>
      <p>V8 engine blocks and supporting engine components presented for professional sourcing.</p>
      <small>Ningbo Langji Technology Co., Ltd.<br />Fitment, availability and pricing are confirmed against each inquiry.</small>
    </footer>
  );
}
