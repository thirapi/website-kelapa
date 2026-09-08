import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/content/articles";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata: Metadata = {
  title: "Journal",
  description: "Origin stories, process notes, product updates and market notes from Katapiang.",
};

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes from Katapiang."
        intro="Origin stories, process discipline, product updates and market notes — written by the people who make the product."
        trail={[{ label: "Journal" }]}
      />
      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="group overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-brand/50"
            >
              <SiteImage asset={a.cover} alt={a.title} ratio="aspect-[16/9]" className="rounded-none" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="p-6">
                <p className="text-xs font-bold">
                  <span className="uppercase tracking-[0.14em] text-ember">{a.category}</span>
                  <span className="mx-2 text-line">·</span>
                  <time dateTime={a.date} className="font-medium tabular-nums text-muted">{formatDate(a.date)}</time>
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight transition-colors duration-200 group-hover:text-brand">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
