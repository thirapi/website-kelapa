import { CERTIFICATIONS } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/motion/Reveal";

// 06 Compliance — 01-PRD §06: marquee kinetic list (loop mulus, hover-pause)
export function Compliance() {
  return (
    <Section ariaLabel="Compliance" spacing="compact">
      <Reveal>
        <h2 className="font-display text-2xl font-bold md:text-4xl">Standar yang Kami Penuhi.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <Marquee
          label="Certifications and compliance"
          items={CERTIFICATIONS}
          renderItem={(c, key) => (
            <span
              key={key}
              className="rounded-full border border-paper/20 px-5 py-2.5 text-sm whitespace-nowrap text-paper/80"
            >
              {c}
            </span>
          )}
          className="mt-8"
        />
      </Reveal>
    </Section>
  );
}
