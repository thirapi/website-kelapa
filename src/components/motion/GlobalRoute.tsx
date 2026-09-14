"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/ui/icons";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { x: 90, y: 235 },
  { x: 500, y: 180 },
  { x: 910, y: 75 },
];

const ROUTE_PATH =
  "M90 235 C190 220 230 125 340 125 S515 235 640 205 S790 100 910 75";

const STOP_ICONS = [Icons.Sprout, Icons.Ship, Icons.Globe2] as const;

export function GlobalRoute({
  stops,
}: {
  stops: { name: string; note: string }[];
}) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const path = element.querySelector<SVGPathElement>("[data-route-path]");
    // Animate ONLY the SVG markers — the HTML legend stays static so no
    // script can ever hide or recolor the stop names.
    const nodes = element.querySelectorAll("[data-route-node]");
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
      className="mt-12 overflow-hidden rounded-3xl border border-line bg-cream p-6 shadow-xl shadow-brand/5 md:p-10"
    >
      <svg
        viewBox="0 0 1000 300"
        role="img"
        aria-label="Route from Katapiang via Belawan International Port toward global markets"
        className="hidden h-auto w-full overflow-visible md:block"
      >
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 10"
          className="text-brand/30"
        />
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-brand"
          data-route-path
        />
        {POINTS.map((point, index) => (
          <g key={stops[index].name} data-route-node>
            <circle
              cx={point.x}
              cy={point.y}
              r="24"
              className="fill-brand"
            />
            <text
              x={point.x}
              y={point.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="14"
              fontWeight="800"
              className="fill-cream"
            >
              0{index + 1}
            </text>
          </g>
        ))}
      </svg>

      {/* Journey stepper — vertical timeline on mobile, horizontal on desktop */}
      <ol className="mt-2 grid gap-0 md:mt-10 md:grid-cols-3">
        {stops.map((stop, index) => {
          const StopIcon = STOP_ICONS[index % STOP_ICONS.length];
          const last = index === stops.length - 1;
          return (
            <li
              key={stop.name}
              className="relative flex gap-4 pb-8 last:pb-0 md:block md:pb-0 md:pt-2 md:text-center"
            >
              {/* vertical rail (mobile) */}
              {!last && (
                <span
                  aria-hidden
                  className="absolute bottom-0 left-[21px] top-12 w-px bg-brand/25 md:hidden"
                />
              )}
              {/* horizontal connector (desktop) */}
              {!last && (
                <span
                  aria-hidden
                  className="absolute left-[calc(50%+28px)] right-[calc(-50%+28px)] top-[21px] hidden h-px bg-brand/25 md:block"
                />
              )}
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold tabular-nums text-cream ring-4 ring-cream md:mx-auto">
                0{index + 1}
              </span>
              <div className="min-w-0 pt-1 md:px-2 md:pt-4">
                <p className="flex items-center gap-2 text-base font-extrabold tracking-tight text-ink md:justify-center md:text-lg">
                  <StopIcon
                    size={17}
                    className="shrink-0 text-brand"
                    aria-hidden
                  />
                  {stop.name}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  {stop.note}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
