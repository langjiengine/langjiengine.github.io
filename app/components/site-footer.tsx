import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark wordmark-footer" href="/">LANGII</Link>
      <p>Engine blocks, cylinder heads, assemblies, and crankshafts for trade inquiries.</p>
      <small>Product fitment, specifications, availability, and pricing are confirmed during inquiry.</small>
    </footer>
  );
}
