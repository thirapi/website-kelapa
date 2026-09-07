"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const POINTS = [
  {
    title: "QC per batch",
    desc: "Moisture, ash, size, purity diuji tiap batch — bukan sampling acak.",
    src: "/assets/products/charcoal.webp",
    alt: "Charcoal embers under quality check",
  },
  {
    title: "Spesifikasi terdokumentasi",
    desc: "Spec sheet menyertai tiap shipment — buyer tahu persis yang datang.",
    src: "/assets/products/briquettes.webp",
    alt: "Briquette charcoal burn test",
  },
  {
    title: "Asal lahan tertelusur",
    desc: "Dari lahan petani terkelola hingga pelabuhan — rantai tercatat.",
    src: "/assets/sourcing/husking.webp",
    alt: "Hand-husking coconut at origin",
  },
  {
    title: "Konsistensi shipment",
    desc: "Deviasi dikontrol antar batch — repeat order terasa sama.",
    src: "/assets/sourcing/harvest.webp",
    alt: "Consistent harvest volume",
  },
];

// 04 Quality & Traceability — split-scroll scrollytelling (GSAP scrub state).
// Desktop: teks kiri scroll, visual kanan sticky crossfade. Mobile: kartu berurutan.
export function QualityTraceability() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-quality-step]").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <Section ariaLabel="Quality and traceability">
      <Reveal>
        <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
          Kualitas Tidak Terjadi Secara Kebetulan.
        </h2>
      </Reveal>
      <div ref={root} className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Steps */}
        <ol className="space-y-10 md:space-y-0">
          {POINTS.map((p, i) => (
            <li
              key={p.title}
              data-quality-step
              className="border-l-2 pl-6 transition-colors duration-500 md:flex md:min-h-[46vh] md:flex-col md:justify-center"
              style={{ borderColor: active === i ? "var(--color-ember)" : "rgba(43,29,18,0.12)" }}
            >
              <p className="tnum text-xs text-muted">0{i + 1}</p>
              <h3
                className="font-display mt-1 text-xl font-bold transition-opacity duration-500 md:text-2xl"
                style={{ opacity: active === i ? 1 : 0.55 }}
              >
                {p.title}
              </h3>
              <p className="mt-1 text-muted">{p.desc}</p>
              {/* Mobile visual */}
              <div className="fade-mask-radial relative mt-4 h-48 overflow-hidden rounded-2xl md:hidden">
                <Image src={p.src} alt={p.alt} fill loading="lazy" sizes="100vw" className="object-cover" />
              </div>
            </li>
          ))}
        </ol>
        {/* Sticky visual (desktop) */}
        <div className="relative hidden md:block">
          <div className="sticky top-28 h-[70vh] overflow-hidden rounded-2xl">
            {POINTS.map((p, i) => (
              <div
                key={p.title}
                aria-hidden={active !== i}
                className="fade-mask-radial absolute inset-0 transition-opacity duration-700"
                style={{ opacity: active === i ? 1 : 0 }}
              >
                <Image
                  src={p.src}
                  alt={active === i ? p.alt : ""}
                  fill
                  loading="lazy"
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
            {/* Progress indicator */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {POINTS.map((p, i) => (
                <span
                  key={p.title}
                  className="h-1.5 w-6 rounded-full transition-[background-color,opacity] duration-500"
                  style={{
                    background: active === i ? "var(--color-ember)" : "rgba(43,29,18,0.25)",
                    opacity: active === i ? 1 : 0.6,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
