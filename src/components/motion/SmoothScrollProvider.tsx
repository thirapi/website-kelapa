"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "@/lib/smooth-scroll";
import { ScrollTrigger } from "@/lib/gsap";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = initSmoothScroll();
    // Diekspos agar ScrollTop & logo-nav bisa scroll via Lenis (fallback native)
    (window as unknown as { lenis?: typeof lenis }).lenis = lenis;
    ScrollTrigger.refresh();
    return () => {
      (window as unknown as { lenis?: typeof lenis }).lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
