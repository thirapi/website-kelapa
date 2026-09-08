"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InquiryProvider } from "@/components/inquiry/InquiryProvider";

gsap.registerPlugin(ScrollTrigger);

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    // Keep ScrollTrigger positions in sync with Lenis smooth scroll,
    // otherwise reveals/scrubs (footer, timeline, route map) never fire.
    lenis.on("scroll", ScrollTrigger.update);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
      lenis.destroy();
    };
  }, []);

  return <InquiryProvider>{children}</InquiryProvider>;
}
