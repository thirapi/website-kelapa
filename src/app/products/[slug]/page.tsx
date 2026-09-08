import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, PRODUCTS } from "@/content/products";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { AddToInquiry } from "@/components/inquiry/AddToInquiry";
import { RfqForm } from "@/components/forms/RfqForm";
import { Icons } from "@/components/ui/icons";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p ? p.name : "Product", description: p?.shortDesc };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Breadcrumb trail={[{ label: "Products", href: "/products" }, { label: product.name }]} />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SiteImage asset={product.gallery[0]} alt={product.name} ratio="aspect-[4/3]" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.gallery.slice(1, 4).map((g) => (
                <SiteImage key={g} asset={g} alt={`${product.name} detail`} ratio="aspect-square" sizes="(max-width: 1024px) 33vw, 200px" />
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>{product.category} · {product.availability}</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">{product.name}</h1>
            <p className="mt-3 text-lg font-medium text-muted">{product.tagline}</p>
            <p className="mt-4 leading-relaxed text-ink/80">{product.shortDesc}</p>

            <h2 className="mt-8 text-sm font-bold uppercase tracking-[0.18em]">Quick spec</h2>
            <table className="mt-3 w-full overflow-hidden rounded-2xl border border-line bg-surface text-sm">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label} className="border-b border-line transition-colors duration-200 last:border-0 hover:bg-surface-alt/60">
                    <th scope="row" className="px-5 py-3 text-left font-semibold text-muted">{s.label}</th>
                    <td className="px-5 py-3 text-right font-bold tabular-nums">{s.value}</td>
                  </tr>
                ))}
                <tr className="border-b border-line transition-colors duration-200 hover:bg-surface-alt/60">
                  <th scope="row" className="px-5 py-3 text-left font-semibold text-muted">MOQ</th>
                  <td className="px-5 py-3 text-right font-bold tabular-nums">{product.moq}</td>
                </tr>
                <tr className="transition-colors duration-200 hover:bg-surface-alt/60">
                  <th scope="row" className="px-5 py-3 text-left font-semibold text-muted">Price</th>
                  <td className="px-5 py-3 text-right font-bold">{product.price ?? "On request"}</td>
                </tr>
              </tbody>
            </table>

            <h2 className="mt-8 text-sm font-bold uppercase tracking-[0.18em]">Packing options</h2>
            <ul className="mt-3 space-y-2">
              {product.packingOptions.map((o) => (
                <li key={o} className="flex items-center gap-2.5 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icons.Package size={15} aria-hidden />
                  </span>
                  {o}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {product.availability === "Coming soon" ? (
                <p className="rounded-2xl border border-line bg-surface-alt p-5 text-sm">
                  This product is in development.{" "}
                  <Link href="/contact" className="font-semibold text-brand underline underline-offset-4">
                    Contact us
                  </Link>{" "}
                  to reserve early volumes.
                </p>
              ) : (
                <AddToInquiry product={product.name} />
              )}
            </div>
          </div>
        </Container>
      </Section>

      {product.availability !== "Coming soon" && (
        <Section className="bg-surface-alt/50">
          <Container className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Request this product.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Tell us quantity, specification, packaging and destination. We reply within 1–2 business days.
              </p>
            </div>
            <RfqForm fixedProduct={product.name} />
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight">Related products</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group flex items-center gap-5 rounded-2xl border border-line bg-surface p-5 transition-[border-color] duration-200 hover:border-brand/50">
                <div className="w-28 shrink-0">
                  <SiteImage asset={p.image} alt={p.name} ratio="aspect-square" sizes="112px" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight transition-colors duration-200 group-hover:text-brand">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
