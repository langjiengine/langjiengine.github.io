import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="LANGII home">LANGII</Link>
      <nav aria-label="Primary navigation">
        <Link href="/products">Products</Link>
        <Link href="/products#featured-v8">V8 range</Link>
        <Link href="/request-a-quote">Inquiry</Link>
      </nav>
      <Link className="header-cta" href="/request-a-quote">Request pricing</Link>
    </header>
  );
}
