"use client";

import { usePathname } from "next/navigation";
import { BuyerCta } from "@/components/sections/BuyerCta";

// Global inquiry section rendered above the footer on every page,
// except the contact page (has its own form) and the print-optimized
// company profile document.
const EXCLUDED = new Set(["/contact", "/company-profile"]);

export function GlobalBuyerCta() {
  const pathname = usePathname();
  if (EXCLUDED.has(pathname)) return null;
  return <BuyerCta />;
}
