"use client";

import { DeckSlider } from "@/components/motion/DeckSlider";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { PRODUCTS } from "@/content/products";
import { track } from "@/lib/analytics";
import Link from "next/link";

export function Portfolio() {
  return (
    <Section className="bg-surface-alt/50">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Products</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Meet Our Coconut Portfolio.
            </h2>
          </div>
          <ArrowLink href="/products" event="product_line_click">
            View all products
          </ArrowLink>
        </div>
      </Container>
      <DeckSlider className="mt-6">
        {PRODUCTS.map((p, i) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            onClick={() => track("product_line_click", { product: p.slug })}
            className="group w-[78vw] max-w-sm shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-brand/50 sm:w-80"
          >
            <SiteImage
              asset={p.image}
              alt={p.name}
              ratio="aspect-[4/3]"
              className="rounded-none"
              sizes="(max-width: 640px) 78vw, 320px"
            />
            <div className="p-6">
              <p className="text-xs font-bold tabular-nums text-muted">
                0{i + 1} — {p.availability}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {p.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explore
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </DeckSlider>
    </Section>
  );
}
