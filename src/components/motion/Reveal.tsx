"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: window.innerWidth < 768 ? 16 : 28 },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration: 0.65,
          ease: "power4.out",
          clearProps: "opacity,transform,visibility,willChange",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [delay]);

  return (
    <div ref={root} className={cn("motion-reveal", className)}>
      {children}
    </div>
  );
}
