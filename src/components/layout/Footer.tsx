"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ComponentType } from "react";
import { NAV, SITE, SOCIALS } from "@/content/site";
import { PRODUCTS } from "@/content/products";
import { Container } from "@/components/ui/Section";
import { Icons } from "@/components/ui/icons";
import {
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { track } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

const SUPPORT_LINKS = [
  { label: "FAQs", href: "/faqs" },
  { label: "Shipping & returns", href: "/shipping-returns" },
  { label: "Price protection", href: "/price-protection" },
  { label: "Terms of service", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
] as const;

const SOCIAL_ICONS: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  TikTok: TiktokIcon,
  YouTube: YoutubeIcon,
};

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
    <footer ref={root} className="bg-ink text-cream">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
        <div data-footer-reveal>
          <p className="text-lg font-extrabold tracking-tight">
            COCO KATAPIANG
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {SITE.commerce} Premium coconut products from Nagari Katapiang, West
            Sumatra.
          </p>
          <p className="mt-4 inline-flex max-w-full items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-surface/10 py-1.5 pl-2 pr-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-cream/80">
            <span className="inline-flex shrink-0 items-center rounded-full bg-surface px-1.5 py-0.5">
              <Image
                src="/assets/brand/pertamina.svg"
                alt="Pertamina"
                width={46}
                height={11}
                className="h-2.5 w-auto"
                loading="lazy"
              />
            </span>
            <span aria-hidden>·</span>
            <span className="truncate">Desa Energi Berdikari</span>
          </p>
        </div>
        <nav aria-label="Shop" data-footer-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
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
            <li>
              <Link
                href="/products"
                onClick={onLink}
                className="font-semibold text-cream transition-colors duration-200 hover:text-surface-alt"
              >
                All products
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Company" data-footer-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
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
          </ul>
        </nav>
        <nav aria-label="Support" data-footer-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
            Support
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            {SUPPORT_LINKS.map((item) => (
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
          </ul>
        </nav>
        <div data-footer-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2.5">
              <Icons.MapPin
                size={16}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-cream/50"
              />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icons.Mail
                size={16}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-cream/50"
              />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all transition-colors duration-200 hover:text-surface-alt"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icons.Phone
                size={16}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-cream/50"
              />
              <span>{SITE.whatsapp}</span>
            </li>
          </ul>
          <ul className="mt-5 flex gap-2" aria-label="Social channels">
            {SOCIALS.map((s) => {
              const SocialIcon = SOCIAL_ICONS[s.label];
              return (
                <li key={s.label}>
                  <span
                    title={`${s.label} (forthcoming)`}
                    aria-label={`${s.label} (forthcoming)`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10 text-cream/80"
                  >
                    {SocialIcon ? <SocialIcon size={18} /> : null}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-cream/50">Channels forthcoming.</p>
        </div>
      </Container>
      <div className="border-t border-cream/10">
        <Container
          className="flex flex-col gap-3 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between"
          data-footer-reveal
        >
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>© 2026 COCO KATAPIANG.</span>
            <span className="inline-flex items-center gap-1.5">
              Powered by
              <span className="inline-flex items-center rounded-full bg-surface px-1.5 py-0.5">
                <Image
                  src="/assets/brand/pertamina.svg"
                  alt="Pertamina"
                  width={46}
                  height={11}
                  className="h-2.5 w-auto"
                  loading="lazy"
                />
              </span>
            </span>
          </p>
          <p>
            <a
              href="https://exantara.com"
              target="_blank"
              rel="noreferrer"
              onClick={onLink}
              className="transition-colors duration-200 hover:text-surface-alt"
            >
              Built on Exantara
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
