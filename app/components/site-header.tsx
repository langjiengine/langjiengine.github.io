import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="V8 Blocks home">
        <span>V8</span>
        <strong>BLOCKS</strong>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/products">Products</Link>
        <Link href="/#supporting-range">Supporting range</Link>
        <Link href="/#markets">Markets</Link>
      </nav>
      <Link className="header-cta" href="/request-a-quote">Request a quote</Link>
    </header>
  );
}
