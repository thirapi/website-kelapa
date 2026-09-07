import { INDUSTRIES } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

// 10 Market / Industries — 01-PRD §10: marquee menyusul Fase 3, reveal ringan Fase 2
export function MarketIndustries() {
  return (
    <Section ariaLabel="Markets" spacing="compact">
      <Reveal>
        <h2 className="font-display text-2xl font-bold md:text-4xl">Melayani Pasar Global.</h2>
        <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {INDUSTRIES.map((m, i) => (
            <li key={m} className="flex items-baseline gap-4 py-4">
              <span className="tnum text-xs text-muted">0{i + 1}</span>
              <span className="font-display text-xl font-bold md:text-2xl">{m}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
