import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FadeMaskImage } from "@/components/ui/FadeMaskImage";
import { MEDIA } from "@/content/media";

// 02 Product Lines — 01-PRD §02: split asimetris, BUKAN 2 kartu seragam
export function ProductLines() {
  return (
    <Section ariaLabel="Product lines" id="products">
      <h2 className="font-display max-w-xl text-3xl font-bold md:text-5xl">
        Dua Produk Inti. Satu Standar Kualitas.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-12">
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-surface md:col-span-7">
          <FadeMaskImage
            src={MEDIA.products.charcoal}
            alt="Glowing coconut shell charcoal"
            variant="linear"
            className="h-64 md:h-80"
          />
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold tracking-widest text-ember uppercase">01 — Charcoal</p>
            <h3 className="font-display mt-3 text-2xl font-bold md:text-4xl">Coconut Shell Charcoal</h3>
            <p className="mt-3 max-w-md text-muted">Briket & raw charcoal untuk BBQ, shisha, industri.</p>
            <Link href="/products" className="mt-6 inline-block text-sm font-semibold text-ember underline-offset-4 hover:underline">
              Lihat detail →
            </Link>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-surface-alt md:col-span-5 md:mt-12">
          <FadeMaskImage
            src={MEDIA.products.copra}
            alt="Hand-husking coconut for copra"
            variant="linear"
            className="h-56 md:h-64"
          />
          <div className="p-8 md:p-10">
            <p className="text-xs font-semibold tracking-widest text-ember uppercase">02 — Copra</p>
            <h3 className="font-display mt-3 text-2xl font-bold md:text-3xl">Copra</h3>
            <p className="mt-3 text-muted">Dried coconut untuk produsen minyak & industri pangan.</p>
            <Link href="/products" className="mt-6 inline-block text-sm font-semibold text-ember underline-offset-4 hover:underline">
              Lihat detail →
            </Link>
          </div>
        </article>
      </div>
    </Section>
  );
}
