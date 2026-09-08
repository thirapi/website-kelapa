"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, PRODUCT_FILTERS, type ProductCategory } from "@/content/products";
import { Container, Section } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { AddToInquiry } from "@/components/inquiry/AddToInquiry";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function ProductCatalog() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");
  const list = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <Section>
      <Container>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products">
          {PRODUCT_FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value as ProductCategory | "all")}
              aria-pressed={filter === f.value}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,color,border-color] duration-200",
                filter === f.value
                  ? "bg-ink text-cream"
                  : "border border-line bg-surface text-ink hover:border-brand/50",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color] duration-200 hover:border-brand/50">
              <SiteImage asset={p.image} alt={p.name} ratio="aspect-[4/3]" className="rounded-none" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2 text-xs font-bold">
                  <span className="uppercase tracking-[0.14em] text-muted">{p.category}</span>
                  <span className="rounded-full bg-palm/10 px-2.5 py-1 text-palm">{p.availability}</span>
                </div>
                <h2 className="mt-2 text-xl font-extrabold tracking-tight">
                  <Link
                    href={`/products/${p.slug}`}
                    onClick={() => track("product_line_click", { product: p.slug })}
                    className="transition-colors duration-200 hover:text-brand"
                  >
                    {p.name}
                  </Link>
                </h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{p.shortDesc}</p>
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
                <div className="mt-5 flex gap-2">
                  {p.availability === "Coming soon" ? (
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold transition-[border-color,color] duration-200 hover:border-brand/60 hover:text-brand-deep"
                    >
                      Notify Me
                    </Link>
                  ) : (
                    <>
                      <div className="flex-1">
                        <AddToInquiry product={p.name} />
                      </div>
                      <Link
                        href={`/products/${p.slug}`}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold transition-[border-color,color] duration-200 hover:border-brand/60 hover:text-brand-deep"
                      >
                        View
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
