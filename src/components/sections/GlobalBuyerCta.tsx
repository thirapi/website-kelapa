"use client";

import { usePathname } from "next/navigation";
import { BuyerCta } from "@/components/sections/BuyerCta";

// Global inquiry section rendered above the footer on every page,
// except the print-optimized company profile document.
export function GlobalBuyerCta() {
  const pathname = usePathname();
  if (pathname === "/company-profile") return null;
  return <BuyerCta />;
}
