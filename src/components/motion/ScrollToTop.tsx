"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Scroll back to top on every page change.
// Required because Lenis smooth-scroll owns the scroll position, so the
// browser / Next.js default scroll restoration never takes effect on its own.
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
