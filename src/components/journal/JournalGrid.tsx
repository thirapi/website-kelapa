"use client";

import { useState } from "react";
import Link from "next/link";
import { ARTICLES, type ArticleCategory } from "@/content/articles";
import { SiteImage } from "@/components/ui/SiteImage";
import { FilterPills } from "@/components/ui/FilterPills";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const FILTERS: ("All" | ArticleCategory)[] = [
  "All",
  ...Array.from(new Set(ARTICLES.map((a) => a.category))),
];

export function JournalGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === filter);

  return (
    <div>
      <FilterPills
        label="Filter articles"
        options={FILTERS.map((f) => ({ value: f, label: f }))}
        value={filter}
        onChange={setFilter}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {list.map((a) => (
          <Link
            key={a.slug}
            href={`/journal/${a.slug}`}
            className="group overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-black/10"
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
      </div>
    </div>
  );
}
