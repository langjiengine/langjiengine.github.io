/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages -- native navigation keeps hash targets reliable on static hosting */
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
        <a href="/products#catalog">Products</a>
        <a href="/products#featured-v8">V8 range</a>
        <a href="/#manufacturing">Manufacturing</a>
        <a href="/request-a-quote#inquiry-form">Inquiry</a>
      </nav>
      <a className="header-cta" href="/request-a-quote#inquiry-form">Prepare inquiry</a>
    </header>
  );
}
