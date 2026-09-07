import { TESTIMONIALS } from "@/content/shared";
import { Section } from "@/components/ui/Section";

// 09 Testimonials — 01-PRD §09: stacked deck di Fase 3, list statis di Fase 1
export function Testimonials() {
  return (
    <div className="border-y border-white/10 bg-surface/50">
      <Section ariaLabel="Testimonials">
        <h2 className="font-display max-w-xl text-3xl font-bold md:text-5xl">
          Kepercayaan Mitra Adalah Standar Kami.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-base p-7">
              <blockquote className="text-paper/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                {t.name} · {t.origin}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  );
}
