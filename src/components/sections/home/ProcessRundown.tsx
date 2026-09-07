import { PROCESS_STEPS } from "@/content/shared";
import { Section } from "@/components/ui/Section";

// 05 Process Rundown — 01-PRD §05 signature (scrub di Fase 3, statis di Fase 1)
export function ProcessRundown() {
  return (
    <div className="border-y border-white/10 bg-surface/50">
      <Section ariaLabel="Our process">
        <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
          Dari Lahan ke Pelabuhan. Terejaga di Setiap Langkah.
        </h2>
        <ol className="mt-12 space-y-0">
          {PROCESS_STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-6 border-t border-white/10 py-6 last:border-b">
              <span className="tnum font-display text-3xl font-bold text-ember md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-1 text-muted">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
