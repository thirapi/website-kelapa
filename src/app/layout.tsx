import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  title: "Hancoco — Coconut Products, Global Standard",
  description:
    "Coconut shell charcoal & premium copra — consistent, traceable, export-ready supply from the coconut heartlands to the world.",
  openGraph: {
    title: "Hancoco — Coconut Products, Global Standard",
    description:
      "Coconut shell charcoal & premium copra for B2B global buyers.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-paper">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
