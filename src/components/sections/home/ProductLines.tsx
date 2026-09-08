import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FadeMaskImage } from "@/components/ui/FadeMaskImage";
import { ICONS } from "@/components/ui/icons";
import { MEDIA } from "@/content/media";

// 02 Product Lines — 01-PRD §02: split asimetris, BUKAN 2 kartu seragam
export function ProductLines() {
  return (
    <Section ariaLabel="Product lines" id="products">
      <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
        Two Core Products. One Quality Standard.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-12">
        <article className="overflow-hidden rounded-2xl border border-paper/15 bg-surface md:col-span-7">
          <FadeMaskImage
            src={MEDIA.products.charcoal}
            alt="Glowing coconut shell charcoal"
            variant="linear"
            className="h-64 md:h-80"
          />
          <div className="p-8 md:p-12">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-ember uppercase">
              <ICONS.flame size={15} aria-hidden /> 01 — Charcoal
            </p>
            <h3 className="mt-3 text-2xl font-bold md:text-4xl">Coconut Shell Charcoal</h3>
            <p className="mt-3 max-w-md text-muted">Briquettes & raw charcoal for BBQ, shisha, industry.</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Charcoal quick specs">
              {["Ash ≤ 3%", "Moisture ≤ 8%", "120 tons/month"].map((s) => (
                <li key={s} className="rounded-full border border-paper/15 px-3 py-1 text-xs font-semibold text-paper/80">
                  {s}
                </li>
              ))}
            </ul>
            <Link href="/products" className="mt-6 inline-block text-sm font-semibold text-ember underline-offset-4 hover:underline">
              View details →
            </Link>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-paper/15 bg-surface-alt md:col-span-5 md:mt-12">
          <FadeMaskImage
            src={MEDIA.products.copra}
            alt="Hand-husking coconut for copra"
            variant="linear"
            className="h-56 md:h-64"
          />
          <div className="p-8 md:p-10">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-ember uppercase">
              <ICONS.package size={15} aria-hidden /> 02 — Copra
            </p>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">Copra</h3>
            <p className="mt-3 text-muted">Dried coconut for oil mills & the food industry.</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Copra quick specs">
              {["Moisture ≤ 7%", "62–65% oil yield", "200 tons/month"].map((s) => (
                <li key={s} className="rounded-full border border-paper/15 px-3 py-1 text-xs font-semibold text-paper/80">
                  {s}
                </li>
              ))}
            </ul>
            <Link href="/products" className="mt-6 inline-block text-sm font-semibold text-ember underline-offset-4 hover:underline">
              View details →
            </Link>
          </div>
        </article>
      </div>
    </Section>
  );
}
