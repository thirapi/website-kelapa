import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { CATEGORIES, PRODUCTS } from "@/content/products";
import { MEDIA } from "@/content/media";

export const metadata: Metadata = {
  title: "Products",
  description: "Katalog charcoal, briket, dan kopra — spec terdokumentasi, RFQ cepat.",
};

// Products — 8 section per 04-PRD §2 (katalog Fase 1 per 05-PRD)
export default function ProductsPage() {
  const flagship = PRODUCTS.filter((p) => p.flagship);
  return (
    <div className="flex flex-1 flex-col">
      {/* 1 Hero */}
      <section className="relative flex min-h-[60dvh] items-center pt-24">
        <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,140,40,0.12),transparent_65%)]" />
        <Container className="relative py-20">
          <p className="text-xs font-semibold tracking-widest text-ember uppercase">Catalog</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Produk yang Siap Diskala ke Volume Anda.
          </h1>
        </Container>
      </section>

      {/* 2 Category Overview — split/bento, bukan 3 kartu identik */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Tiga Kategori, Satu Standar.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          {CATEGORIES.map((c, i) => (
            <article
              key={c.id}
              className={`rounded-2xl border border-white/10 bg-surface p-7 ${i === 0 ? "md:col-span-7" : "md:col-span-5"}`}
            >
              <h3 className="font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-2 text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 3 Product Showcase — flagship lebih besar */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Showcase.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className={`rounded-2xl border border-white/10 bg-surface p-7 ${p.flagship ? "md:p-8" : ""}`}
            >
              <div className="fade-mask-radial relative mb-4 min-h-32 overflow-hidden rounded-xl bg-surface-alt">
                <Image
                  src={MEDIA.products[p.category]}
                  alt={p.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.shortDesc}</p>
              <p className="mt-3 text-xs text-muted">
                MOQ {p.moq} · {p.leadTime} · {p.status}
              </p>
              <div className="mt-4 flex gap-3">
                <Link href={`/products/${p.slug}`} className="text-sm font-semibold text-ember hover:underline">
                  Lihat Detail →
                </Link>
                <Link href={`/contact?product=${p.slug}`} className="text-sm text-paper/70 hover:underline">
                  Request Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 4 Specifications */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Standar Mutu.</h2>
        <div className="mt-8 space-y-6">
          {flagship.map((p) => (
            <div key={p.id} className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <caption className="px-5 py-3 text-left font-semibold">{p.name}</caption>
                <tbody>
                  {p.specs.map((s) => (
                    <tr key={s.label} className="border-t border-white/10">
                      <th className="px-5 py-3 font-medium text-muted">{s.label}</th>
                      <td className="px-5 py-3">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Section>

      {/* 5 Packaging & Logistics */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Pengemasan & Logistik.</h2>
        <ul className="mt-6 space-y-3 text-muted">
          <li>Jute bag 50 kg / 15 kg bag untuk charcoal & kopra.</li>
          <li>Inner + master carton untuk briket retail.</li>
          <li>Stuffing 20ft container + dokumen ekspor lengkap.</li>
        </ul>
      </Section>

      {/* 6 Why Our Products */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Kenapa Produk Kami.</h2>
        <ol className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {["Screened & graded", "Low moisture, low ash", "Batch-tested", "Private label ready"].map((t, i) => (
            <li key={t} className="flex gap-4 py-4">
              <span className="tnum text-muted">0{i + 1}</span>
              <span className="font-semibold">{t}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 7 Featured Products — editorial hybrid */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Unggulan.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <article className="rounded-2xl border border-white/10 bg-surface p-8 md:col-span-8">
            <h3 className="font-display text-2xl font-bold">{flagship[0]?.name}</h3>
            <p className="mt-2 text-muted">{flagship[0]?.shortDesc}</p>
            <Link href={`/products/${flagship[0]?.slug}`} className="mt-4 inline-block font-semibold text-ember">
              Lihat Detail →
            </Link>
          </article>
          <div className="md:col-span-4">
            <Link href="/contact" className="block rounded-2xl bg-ember p-8 font-semibold text-base">
              Minta penawaran volume →
            </Link>
          </div>
        </div>
      </Section>

      {/* 8 CTA */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Butuh Spec Sheet Lengkap?</h2>
          <div className="mt-8">
            <Button href="/contact">Request Quote</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
