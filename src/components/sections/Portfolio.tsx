"use client";

import { DeckSlider, deckCardClass } from "@/components/motion/DeckSlider";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { Icons } from "@/components/ui/icons";
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
      <DeckSlider contained className="mt-10">
        {PRODUCTS.map((p, i) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            onClick={() => track("product_line_click", { product: p.slug })}
            className={`group ${deckCardClass} overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-brand/50`}
          >
            <SiteImage
              asset={p.image}
              alt={p.name}
              ratio="aspect-[4/3]"
              className="rounded-none"
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 31vw"
            />
            <div className="p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold tabular-nums text-muted">
                  0{i + 1}
                </p>
                <span
                  className={
                    p.availability === "Coming soon"
                      ? "rounded-full bg-ember/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ember"
                      : "rounded-full bg-palm/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-palm"
                  }
                >
                  {p.availability === "Coming soon" ? "Future" : p.availability}
                </span>
              </div>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {p.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explore
                <Icons.ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </DeckSlider>
      </Container>
    </Section>
  );
}
