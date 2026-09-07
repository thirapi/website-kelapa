import { FAQS } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/motion/Reveal";

// 11 FAQ — 01-PRD §11: accordion accessible (Framer AnimatePresence)
export function Faq() {
  return (
    <Section ariaLabel="FAQ" width="narrow">
      <Reveal>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Pertanyaan yang Sering Diajukan.</h2>
      </Reveal>
      <div className="mt-10">
        <FaqList items={FAQS} />
      </div>
    </Section>
  );
}
