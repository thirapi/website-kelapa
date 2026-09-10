"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ARTICLES, type ArticleCategory } from "@/content/articles";
import { SiteImage } from "@/components/ui/SiteImage";
import { FilterPills } from "@/components/ui/FilterPills";
import { Icons } from "@/components/ui/icons";

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

type Sort = "newest" | "oldest";

export function JournalGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [sort, setSort] = useState<Sort>("newest");
  const list = useMemo(() => {
    const filtered =
      filter === "All"
        ? [...ARTICLES]
        : ARTICLES.filter((a) => a.category === filter);
    filtered.sort((a, b) =>
      sort === "newest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date),
    );
    return filtered;
  }, [filter, sort]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="w-full min-w-0 sm:flex-1">
          <FilterPills
            label="Filter articles"
            options={FILTERS.map((f) => ({ value: f, label: f }))}
            value={filter}
            onChange={setFilter}
            wrap
          />
        </div>
        <label className="relative inline-flex shrink-0 items-center self-start sm:self-auto">
          <span className="sr-only">Sort articles</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="appearance-none rounded-full bg-ink/5 py-1.5 pl-4 pr-9 text-[13px] font-semibold text-ink transition-colors duration-200 hover:bg-ink/10"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <Icons.ChevronDown
            size={16}
            aria-hidden
            className="pointer-events-none absolute right-3.5 text-muted"
          />
        </label>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {list.map((a) => (
          <Link
            key={a.slug}
            href={`/journal/${a.slug}`}
            className="group flex gap-4 rounded-2xl bg-surface-alt/60 p-3 transition-colors duration-200 hover:bg-surface-alt sm:p-4"
          >
            <div className="w-28 shrink-0 sm:w-44">
              <SiteImage
                asset={a.cover}
                alt={a.title}
                ratio="aspect-square"
                className="rounded-xl"
                sizes="(max-width: 768px) 112px, 176px"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col py-1">
              <p className="w-fit rounded bg-ember px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cream">
                {a.category}
              </p>
              <h2 className="mt-2 line-clamp-3 text-base font-extrabold leading-snug tracking-tight transition-colors duration-200 group-hover:text-brand sm:text-lg">
                {a.title}
              </h2>
              <time
                dateTime={a.date}
                className="mt-auto pt-2 text-xs font-medium tabular-nums text-muted"
              >
                {formatDate(a.date)}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
