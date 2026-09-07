"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { homepage } from "@/content/homepage";
import { MEDIA } from "@/content/media";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { track } from "@/lib/analytics";

// 01 Hero — parallax teks vs media + scroll indicator fade (GSAP scrub, Fase 3).
// Slot video: isi MEDIA.hero.videoMp4/Webm lalu render <video> di sini.
export function Hero() {
  const { hero } = homepage;
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-hero-content]", {
        yPercent: -12,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-media]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-scroll-hint]", {
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "30% top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      aria-label="Hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24"
    >
      <div data-hero-media className="absolute inset-0">
        <Image
          src={MEDIA.hero.poster}
          alt={MEDIA.hero.posterAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/55 to-base" />
      <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,78,31,0.12),transparent_65%)]" />
      <Container className="relative py-24">
        <div data-hero-content>
          {/* Badge chip solid ala race-tag F1 */}
          <p className="inline-block rounded-md bg-ember px-3 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
            {hero.badge}
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">{hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          {/* Trust row korporat ala Pertamina */}
          <dl className="mt-12 flex max-w-xl flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-6">
            {[
              ["100%", "Tempurung kelapa"],
              ["Per batch", "QC terdokumentasi"],
              ["Katapiang", "Sumatera Barat"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-xl font-bold">
                  {v} <span className="text-sm font-medium text-muted">{l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
      <div
        data-scroll-hint
        aria-hidden
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="text-[11px] tracking-[0.25em] uppercase">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-ember to-transparent" />
      </div>
      <span className="sr-only">
        <a
          href="#products"
          onClick={() => track("hero_cta_explore", { source: "scroll-hint" })}
        >
          Explore products
        </a>
      </span>
    </section>
  );
}
