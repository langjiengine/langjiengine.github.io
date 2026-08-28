/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="LANGII home">
        <img src="/brand/langii-lt-mark-v2.png" alt="" />
        <span>
          <strong>LANGII</strong>
          <small>Engine Components</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/products">Products</Link>
        <Link href="/products#featured-v8">V8 range</Link>
        <Link href="/#manufacturing">Manufacturing</Link>
        <Link href="/request-a-quote">Inquiry</Link>
      </nav>
      <Link className="header-cta" href="/request-a-quote">Prepare inquiry</Link>
    </header>
  );
}
