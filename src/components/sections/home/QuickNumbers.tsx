import { NUMBERS } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/motion/Reveal";

// 03 Quick Numbers — 01-PRD §03: kinetic large-digit asimetris, CMS-driven
// Counter GSAP onEnter sekali (Fase 2). Tracking numbers_section_viewed ikut di sini.
export function QuickNumbers() {
  return (
    <div className="border-y border-paper/15 bg-surface-alt/60">
      <Section ariaLabel="Capacity" spacing="compact">
        <Reveal>
          <h2 className="font-display text-2xl font-bold md:text-4xl">Capacity Ready to Back Your Supply.</h2>
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {NUMBERS.map((n, i) => (
            <div key={n.label} className={i % 2 === 1 ? "md:mt-8" : ""}>
              <dd className="font-display text-5xl font-bold text-paper md:text-6xl">
                <Counter value={n.value} suffix={n.suffix} />
              </dd>
              <dt className="mt-2 text-sm text-muted">{n.label}</dt>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}
