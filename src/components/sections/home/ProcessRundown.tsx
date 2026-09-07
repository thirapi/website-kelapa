import { PROCESS_STEPS } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Rundown } from "@/components/motion/Rundown";

// 05 Process Rundown — 01-PRD §05 signature (scrub progress + tahap menyala)
export function ProcessRundown() {
  return (
    <div className="border-y border-white/10 bg-surface/50">
      <Section ariaLabel="Our process">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            Dari Lahan ke Pelabuhan. Terejaga di Setiap Langkah.
          </h2>
        </Reveal>
        <Rundown
          items={PROCESS_STEPS.map((s, i) => ({
            marker: String(i + 1).padStart(2, "0"),
            title: s.title,
            desc: s.desc,
          }))}
        />
      </Section>
    </div>
  );
}
