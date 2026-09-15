import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

const body = localFont({
  src: "../public/fonts/manrope-var.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 800",
  fallback: ["system-ui", "sans-serif"],
});

const display = localFont({
  src: [
    { path: "../public/fonts/barlow-400.woff2", weight: "400" },
    { path: "../public/fonts/barlow-500.woff2", weight: "500" },
    { path: "../public/fonts/barlow-600.woff2", weight: "600" },
    { path: "../public/fonts/barlow-700.woff2", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["var(--font-body)", "sans-serif"],
});

const mono = localFont({
  src: [
    { path: "../public/fonts/ibm-400.woff2", weight: "400" },
    { path: "../public/fonts/ibm-500.woff2", weight: "500" },
    { path: "../public/fonts/ibm-600.woff2", weight: "600" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Building Today. Engineering Tomorrow.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "construction company in Kenya",
    "building contractors Kenya",
    "civil engineering Kenya",
    "construction contractor Nairobi",
    "commercial construction Kenya",
    "road construction Kenya",
    "infrastructure development Kenya",
    "project management Kenya",
    "design and build Kenya",
    "property development Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Building Today. Engineering Tomorrow.`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Building Today. Engineering Tomorrow.`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#111513",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}