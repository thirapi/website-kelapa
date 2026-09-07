import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/ui/ScrollTop";

// Display: Fraunces — serif hangat berkarakter heritage (bukan techy).
// Body: Plus Jakarta Sans — karya desainer Indonesia, netral & bersahabat.
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nagarikatapiang.id"),
  title: {
    default: "COCO KATAPIANG — The Value of Coconut, Reimagined",
    template: "%s — COCO KATAPIANG",
  },
  description:
    "COCO KATAPIANG — coconut processing & products from Katapiang, West Sumatra, Indonesia. Supported by Pertamina through Desa Energi Berdikari.",
  openGraph: {
    title: "COCO KATAPIANG — The Value of Coconut, Reimagined",
    description:
      "Coconut products from Indonesia: shell charcoal, briquettes, copra.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "COCO KATAPIANG — The Value of Coconut, Reimagined",
    description: "Source coconut products from Indonesia.",
  },
};

// Organization schema — 01-PRD §5 SEO
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "COCO KATAPIANG",
  description: "Coconut processing & products from West Sumatra, Indonesia. A Pertamina-supported Desa Energi Berdikari initiative.",
  email: "info@nagarikatapiang.id",
  address: { "@type": "PostalAddress", addressLocality: "Katapiang", addressRegion: "Sumatera Barat", addressCountry: "ID" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:rounded-full focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-base"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <SmoothScrollProvider>
          <Navbar />
          <main id="main" className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <ScrollTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
