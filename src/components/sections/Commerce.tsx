import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { AddToInquiry } from "@/components/inquiry/AddToInquiry";
import { PRODUCTS } from "@/content/products";
import Link from "next/link";

export function Commerce() {
  const sellable = PRODUCTS.filter((p) => p.availability !== "Coming soon");
  return (
    <Section>
      <Container>
        <Eyebrow>Shop</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Source COCO KATAPIANG.
          </h2>
          <ArrowLink href="/contact">How ordering works</ArrowLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sellable.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color] duration-200 hover:border-brand/50">
              <SiteImage asset={p.image} alt={p.name} ratio="aspect-[4/3]" className="rounded-none" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2 text-xs font-bold">
                  <span className="uppercase tracking-[0.14em] text-muted">Katapiang origin</span>
                  <span className="rounded-full bg-palm/10 px-2.5 py-1 text-palm">{p.availability}</span>
                </div>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight">
                  <Link href={`/products/${p.slug}`} className="transition-colors duration-200 hover:text-brand">
                    {p.name}
                  </Link>
                </h3>
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
                <div className="mt-5">
                  <AddToInquiry product={p.name} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
