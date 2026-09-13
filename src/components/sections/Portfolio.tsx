"use client";

import { DeckSlider, deckCardClass } from "@/components/motion/DeckSlider";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { AddToInquiry } from "@/components/inquiry/AddToInquiry";
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
              Meet Our Best Seller Products
            </h2>
          </div>
          <ArrowLink href="/store" event="product_line_click">
            Visit store
          </ArrowLink>
        </div>
      <DeckSlider contained className="mt-10">
        {PRODUCTS.map((p) => (
          <article
            key={p.slug}
            className={`group ${deckCardClass} flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-black/10`}
          >
            <SiteImage
              asset={p.image}
              alt={p.name}
              ratio="aspect-[4/3]"
              className="rounded-none"
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 31vw"
            />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-2 text-xs font-bold">
                <span className="uppercase tracking-[0.14em] text-muted">Katapiang origin</span>
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
                <Link
                  href={`/store/${p.slug}`}
                  onClick={() => track("product_line_click", { product: p.slug })}
                  className="transition-colors duration-200 hover:text-brand"
                >
                  {p.name}
                </Link>
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                {p.shortDesc}
              </p>
              <dl className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">MOQ</dt>
                  <dd className="font-semibold tabular-nums">{p.moq}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Price</dt>
                  <dd className="font-semibold">{p.price ?? "On request"}</dd>
                </div>
              </dl>
              <div className="mt-5">
                {p.availability === "Coming soon" ? (
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold transition-[border-color,color] duration-200 hover:border-brand/60 hover:text-brand-deep"
                  >
                    Notify Me
                  </Link>
                ) : (
                  <AddToInquiry product={p.name} />
                )}
              </div>
            </div>
          </article>
        ))}
      </DeckSlider>
      </Container>
    </Section>
  );
}
