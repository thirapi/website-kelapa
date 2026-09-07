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
    ScrollTrigger.refresh();
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
