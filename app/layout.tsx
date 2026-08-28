import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

async function requestOrigin() {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${protocol}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  const title = "V8 Engine Blocks & Engine Components | V8 Blocks";
  const description = "Explore V8 cylinder block families and supporting engine components for United States and Australian specification-led inquiries.";
  return {
    metadataBase: new URL(origin),
    title,
    description,
    applicationName: "V8 Blocks",
    icons: { icon: "/og.png", shortcut: "/og.png" },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "V8 Blocks — specification-led engine components for the United States and Australia" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
