import { CERTIFICATIONS } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

// 06 Compliance — 01-PRD §06: marquee loop menyusul Fase 3, reveal ringan Fase 2
export function Compliance() {
  return (
    <Section ariaLabel="Compliance" spacing="compact">
      <Reveal>
        <h2 className="font-display text-2xl font-bold md:text-4xl">Standar yang Kami Penuhi.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mt-8 flex flex-wrap gap-3">
          {CERTIFICATIONS.map((c) => (
            <li key={c} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-paper/80">
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
