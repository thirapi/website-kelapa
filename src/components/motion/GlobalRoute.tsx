"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/ui/icons";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { x: 90, y: 235 },
  { x: 340, y: 125 },
  { x: 640, y: 205 },
  { x: 910, y: 75 },
];

export function GlobalRoute({ stops }: { stops: string[] }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const path = element.querySelector<SVGPathElement>("[data-route-path]");
    const nodes = element.querySelectorAll("[data-route-stop]");
    if (!path) return;

    const length = path.getTotalLength();
    const context = gsap.context(() => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 768px)", () => {
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.set(nodes, {
          autoAlpha: 0,
          scale: 0.82,
          transformOrigin: "center",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            end: "bottom 62%",
            scrub: 0.55,
          },
        });
        timeline
          .to(path, { strokeDashoffset: 0, ease: "none", duration: 1 })
          .to(
            nodes,
            {
              autoAlpha: 1,
              scale: 1,
              stagger: 0.12,
              ease: "power3.out",
              duration: 0.45,
            },
            0.08,
          );
      });

      matchMedia.add("(max-width: 767px)", () => {
        gsap.set(path, { strokeDasharray: "none", strokeDashoffset: 0 });
        gsap.fromTo(
          nodes,
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      return () => matchMedia.revert();
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={root}
      className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface p-5 md:p-8"
    >
      <svg
        viewBox="0 0 1000 300"
        role="img"
        aria-label="Route from Katapiang through Indonesia toward global markets"
        className="h-auto w-full overflow-visible"
      >
        <path
          d="M90 235 C190 220 230 125 340 125 S515 235 640 205 S790 100 910 75"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-brand/35"
          data-route-path
        />
        {POINTS.map((point, index) => (
          <g key={stops[index]} data-route-stop>
            <circle
              cx={point.x}
              cy={point.y}
              r="24"
              className="fill-base stroke-brand"
              strokeWidth="3"
            />
            <circle cx={point.x} cy={point.y} r="7" className="fill-ember" />
          </g>
        ))}
      </svg>
      <ol className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stops.map((stop, index) => (
          <li
            key={stop}
            data-route-stop
            className="flex items-start gap-2.5 border-t border-line pt-4"
          >
            <Icons.Globe2
              size={17}
              className="mt-0.5 shrink-0 text-brand"
              aria-hidden
            />
            <div>
              <p className="text-xs font-bold tabular-nums text-muted">
                0{index + 1}
              </p>
              <p className="text-sm font-extrabold tracking-tight md:text-base">
                {stop}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
