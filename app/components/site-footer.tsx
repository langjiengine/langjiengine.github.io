import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="markets">
      <Link className="wordmark wordmark-footer" href="/">
        <span>V8</span><strong>BLOCKS</strong>
      </Link>
      <p>Product-led engine component inquiries for the United States and Australia.</p>
      <small>Working identity and contact details remain placeholders pending supplier approval.</small>
    </footer>
  );
}
