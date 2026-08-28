import type { Metadata } from "next";
import "./globals.css";

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "LANGII | Engine Components";
const description = "Browse LANGII engine blocks, cylinder heads, head assemblies, and crankshafts by engine family or reference number.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title,
  description,
  applicationName: "LANGII",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteOrigin,
    images: [{ url: `${siteOrigin}/og-v2.png`, width: 1536, height: 1024, alt: "LANGII engine components" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteOrigin}/og-v2.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
