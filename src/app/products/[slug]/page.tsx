import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, getProduct } from "@/content/products";
import { MEDIA } from "@/content/media";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return {
    title: p ? `${p.name} — Hancoco` : "Product — Hancoco",
    description: p?.shortDesc ?? "Product detail",
  };
}

// /products/[slug] — 05-PRD §2.2: galeri, spec, packaging, RFQ, related
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl flex-1 px-6 pt-28 pb-16 md:px-10">
      <Link href="/products" className="text-sm text-muted hover:text-paper">
        ← Katalog
      </Link>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="fade-mask-radial relative min-h-80 overflow-hidden rounded-2xl bg-surface-alt">
          <Image
            src={MEDIA.products[product.category]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-ember uppercase">{product.category}</p>
          <h1 className="font-display mt-2 text-4xl font-bold md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-muted">{product.shortDesc}</p>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between border-t border-white/10 py-2">
              <dt className="text-muted">MOQ</dt>
              <dd>{product.moq}</dd>
            </div>
            <div className="flex justify-between border-t border-white/10 py-2">
              <dt className="text-muted">Packing</dt>
              <dd>{product.packing}</dd>
            </div>
            <div className="flex justify-between border-t border-white/10 py-2">
              <dt className="text-muted">Lead time</dt>
              <dd>{product.leadTime}</dd>
            </div>
            <div className="flex justify-between border-y border-white/10 py-2">
              <dt className="text-muted">Kapasitas</dt>
              <dd>{product.capability}</dd>
            </div>
          </dl>
          <div className="mt-6">
            <h2 className="font-semibold">Spesifikasi</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {product.specs.map((s) => (
                <li key={s.label}>
                  {s.label}: <span className="text-paper">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`/contact?product=${product.slug}`}>Request Quote</Button>
            <Button href="/contact" variant="secondary">
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">Related products</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {related.map((r) => (
            <Link key={r.id} href={`/products/${r.slug}`} className="rounded-2xl border border-white/10 bg-surface p-6 hover:border-ember/50">
              <h3 className="font-display font-bold">{r.name}</h3>
              <p className="text-sm text-muted">{r.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
