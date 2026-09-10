import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { GlobalBuyerCta } from "@/components/sections/GlobalBuyerCta";
import { Footer } from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "COCO KATAPIANG: Source Coconut Products from Indonesia",
    template: "%s | COCO KATAPIANG",
  },
  description:
    "Premium coconut products from Nagari Katapiang, West Sumatra. Copra, shell charcoal and briquettes for B2B buyers worldwide.",
  metadataBase: new URL("https://cocokatapiang.id"),
  openGraph: {
    type: "website",
    siteName: "COCO KATAPIANG",
    title: "COCO KATAPIANG: The Value of Coconut, Reimagined",
    description:
      "Premium coconut products from Indonesia. Copra, shell charcoal, briquettes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-cream text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main">
            {children}
            <GlobalBuyerCta />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
