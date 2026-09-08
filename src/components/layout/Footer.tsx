"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NAV, SITE, SOCIALS } from "@/content/site";
import { PRODUCTS } from "@/content/products";
import { Container } from "@/components/ui/Section";
import { track } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const root = useRef<HTMLElement>(null);
  const onLink = () => track("footer_link_click");

  useLayoutEffect(() => {
    const element = root.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const items = element.querySelectorAll<HTMLElement>("[data-footer-reveal]");
    const context = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: window.innerWidth < 768 ? 16 : 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power4.out",
          clearProps: "opacity,transform,visibility",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, []);

  return (
    <footer ref={root} className="bg-ink text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div data-footer-reveal>
          <p className="text-lg font-extrabold tracking-tight">
            COCO KATAPIANG
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {SITE.commerce} Premium coconut products from Nagari Katapiang, West
            Sumatra.
          </p>
          <p className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
            {SITE.badge}
          </p>
        </div>
        <nav aria-label="Shop" data-footer-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Shop
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  onClick={onLink}
                  className="transition-colors duration-200 hover:text-surface-alt"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company" data-footer-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Company
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onLink}
                  className="transition-colors duration-200 hover:text-surface-alt"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={onLink}
                className="transition-colors duration-200 hover:text-surface-alt"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div data-footer-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>{SITE.address}</li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors duration-200 hover:text-surface-alt"
              >
                {SITE.email}
              </a>
            </li>
            <li>{SITE.whatsapp}</li>
          </ul>
          <div className="mt-4 flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={onLink}
                aria-label={s.label}
                className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold transition-colors duration-200 hover:border-white/50"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container
          className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"
          data-footer-reveal
        >
          <p>© 2026 COCO KATAPIANG, Nagari Katapiang, Indonesia.</p>
          <p>
            Photography: site imagery placeholders pending stakeholder assets.
          </p>
        </Container>
      </div>
    </footer>
  );
}
