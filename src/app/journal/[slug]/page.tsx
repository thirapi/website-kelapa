import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, ARTICLES } from "@/content/articles";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container, Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return { title: a ? a.title : "Article", description: a?.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const date = new Date(article.date + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Breadcrumb trail={[{ label: "Journal", href: "/journal" }, { label: article.title }]} />
      <Section>
        <Container className="max-w-3xl">
          <p className="text-xs font-bold">
            <span className="uppercase tracking-[0.14em] text-ember">{article.category}</span>
            <span className="mx-2 text-line">·</span>
            <time dateTime={article.date} className="font-medium tabular-nums text-muted">{date}</time>
            <span className="mx-2 text-line">·</span>
            <span className="font-medium text-muted">By {article.author}</span>
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">{article.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>
          <Placeholder label={`${article.title} — cover`} ratio="aspect-[16/9]" className="mt-8" />
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/90">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {article.references.length > 0 && (
            <div className="mt-10 border-t border-line pt-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em]">References</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
                {article.references.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-10">
            <Link href="/journal" className="text-sm font-semibold text-brand underline-offset-4 hover:underline">
              ← Back to Journal
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
