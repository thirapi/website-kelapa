import { PROCESS_STEPS } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Rundown } from "@/components/motion/Rundown";

// 05 Process Rundown — signature di atas band gelap (ritme terang-gelap).
export function ProcessRundown() {
  return (
    <div className="border-y border-white/10 bg-[#1f130b]">
      <Section ariaLabel="Our process">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.25em] text-ember uppercase">Proses</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold text-[#faf6ef] md:text-5xl">
            From Grove to Port. Guarded at Every Step.
          </h2>
        </Reveal>
        <Rundown
          tone="dark"
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
