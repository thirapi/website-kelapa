import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/ui/ScrollTop";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hancoco.id"),
  title: {
    default: "Hancoco — Coconut Products, Global Standard",
    template: "%s — Hancoco",
  },
  description:
    "Coconut shell charcoal & premium copra — consistent, traceable, export-ready supply from the coconut heartlands to the world.",
  openGraph: {
    title: "Hancoco — Coconut Products, Global Standard",
    description:
      "Coconut shell charcoal & premium copra for B2B global buyers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hancoco — Coconut Products, Global Standard",
    description: "Consistent, traceable, export-ready coconut supply.",
  },
};

// Organization schema — 01-PRD §5 SEO
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hancoco",
  description: "B2B export supplier of coconut shell charcoal and copra.",
  email: "export@hancoco.id",
  address: { "@type": "PostalAddress", addressCountry: "ID" },
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
          <CustomCursor />
          <Navbar />
          <main id="main" className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <ScrollTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
