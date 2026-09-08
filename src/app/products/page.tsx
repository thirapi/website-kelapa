import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { ICONS } from "@/components/ui/icons";
import { CATEGORIES, PRODUCTS } from "@/content/products";
import { MEDIA } from "@/content/media";

export const metadata: Metadata = {
  title: "Products",
  description: "Charcoal, briquette, and copra catalog — documented spec, fast RFQ.",
};

// Products — 8 section per 04-PRD §2 (katalog Fase 1 per 05-PRD)
export default function ProductsPage() {
  const flagship = PRODUCTS.filter((p) => p.flagship);
  return (
    <div className="flex flex-1 flex-col">
      {/* 1 Hero — foto briket menyala + scrim terang */}
      <section className="relative flex min-h-[60dvh] items-center overflow-hidden pt-24">
        <Image
          src="/assets/products/briquettes.webp"
          alt="Burning charcoal briquettes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/45 to-base" />
        <Container className="relative py-20">
          <p className="text-xs font-semibold tracking-widest text-ember uppercase">Catalog</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Ready to Scale to Your Volume.
          </h1>
        </Container>
      </section>

      {/* 2 Category Overview — split/bento, bukan 3 kartu identik */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Three Categories. One Standard.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          {CATEGORIES.map((c, i) => (
            <article
              key={c.id}
              className={`rounded-2xl border border-paper/15 bg-surface p-7 ${
                i < 2 ? (i === 0 ? "md:col-span-7" : "md:col-span-5") : "md:col-span-12 md:flex md:items-center md:justify-between md:gap-8"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-2 max-w-xl text-muted">{c.desc}</p>
              </div>
              {i === 2 && (
                <Link
                  href="/contact"
                  className="mt-4 inline-block shrink-0 rounded-full bg-ember px-6 py-3 text-sm font-semibold whitespace-nowrap text-base md:mt-0"
                >
                  Ask About Copra →
                </Link>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* 3 Product Showcase — flagship berdampingan, copra strip horizontal */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Showcase.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {PRODUCTS.filter((p) => p.flagship).map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-paper/15 bg-surface p-7 md:col-span-3 md:p-8"
            >
              <div className="fade-mask-radial relative mb-4 min-h-48 overflow-hidden rounded-xl bg-surface-alt">
                <Image
                  src={MEDIA.products[p.category]}
                  alt={p.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="text-[11px] font-bold tracking-widest text-ember uppercase">Flagship</p>
              <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.shortDesc}</p>
              <p className="mt-3 text-xs text-muted">
                MOQ {p.moq} · {p.leadTime} · {p.status}
              </p>
              <div className="mt-4 flex gap-3">
                <Link href={`/products/${p.slug}`} className="text-sm font-semibold whitespace-nowrap text-ember hover:underline">
                  View Details →
                </Link>
                <Link href={`/contact?product=${p.slug}`} className="text-sm whitespace-nowrap text-paper/70 hover:underline">
                  Request Quote
                </Link>
              </div>
            </article>
          ))}
          {PRODUCTS.filter((p) => !p.flagship).map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-paper/15 bg-surface-alt p-7 md:col-span-6 md:flex md:items-center md:gap-8"
            >
              <div className="fade-mask-radial relative mb-4 min-h-40 overflow-hidden rounded-xl bg-surface md:mb-0 md:h-40 md:w-72 md:shrink-0">
                <Image
                  src={MEDIA.products[p.category]}
                  alt={p.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.shortDesc}</p>
                <p className="mt-3 text-xs text-muted">
                  MOQ {p.moq} · {p.leadTime} · {p.status}
                </p>
                <div className="mt-4 flex gap-3">
                  <Link href={`/products/${p.slug}`} className="text-sm font-semibold whitespace-nowrap text-ember hover:underline">
                    View Details →
                  </Link>
                  <Link href={`/contact?product=${p.slug}`} className="text-sm whitespace-nowrap text-paper/70 hover:underline">
                    Request Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 4 Specifications */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Quality Standards.</h2>
        <div className="mt-8 space-y-6">
          {flagship.map((p) => (
            <div key={p.id} className="overflow-x-auto rounded-2xl border border-paper/15">
              <table className="w-full text-left text-sm">
                <caption className="px-5 py-3 text-left font-semibold">{p.name}</caption>
                <tbody>
                  {p.specs.map((s) => (
                    <tr key={s.label} className="border-t border-paper/15 transition-[background-color] hover:bg-ember/5">
                      <th className="px-5 py-3 font-bold text-paper">{s.label}</th>
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
        <h2 className="font-display max-w-2xl text-2xl font-bold md:text-4xl">Packing & Logistics.</h2>
        <ul className="mt-6 max-w-2xl space-y-3">
          {[
            ["package", "50 kg / 15 kg bags", "For bulk charcoal & copra."],
            ["badge", "Inner + master carton", "For retail & HoReCa briquettes."],
            ["fileCheck", "20ft container + documents", "Stuffing, fumigation if needed, full documents."],
          ].map(([icon, t, d]) => {
            const Icon = ICONS[icon as "package" | "badge" | "fileCheck"];
            return (
              <li key={t} className="flex items-start gap-4 rounded-2xl border border-paper/15 bg-surface p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <span>
                  <span className="block font-bold">{t}</span>
                  <span className="text-sm text-muted">{d}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 6 Why Our Products */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Why Our Products.</h2>
        <ol className="mt-6 divide-y divide-paper/15 border-y border-paper/15">
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
        <h2 className="font-display text-2xl font-bold md:text-4xl">Featured.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <article className="rounded-2xl border border-paper/15 bg-surface p-8 md:col-span-8">
            <h3 className="text-2xl font-bold">{flagship[0]?.name}</h3>
            <p className="mt-2 text-muted">{flagship[0]?.shortDesc}</p>
            <Link href={`/products/${flagship[0]?.slug}`} className="mt-4 inline-block font-semibold text-ember">
              View Details →
            </Link>
          </article>
          <div className="md:col-span-4">
            <Link href="/contact" className="block rounded-2xl bg-ember p-8 font-semibold text-base">
              Get a volume quote →
            </Link>
          </div>
        </div>
      </Section>

      {/* 8 CTA */}
      <section className="border-t border-paper/15 py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Need the Full Spec Sheet?</h2>
          <div className="mt-8">
            <Button href="/contact">Request Quote</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
