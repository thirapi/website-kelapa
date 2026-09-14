import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";

const PILLARS = [
  {
    icon: "Sprout",
    title: "Income that stays",
    desc: "Farmer suppliers paid on fair, transparent grades.",
  },
  {
    icon: "Factory",
    title: "Work at home",
    desc: "Processing, grading and packing jobs filled locally.",
  },
  {
    icon: "ShieldCheck",
    title: "Traceable lots",
    desc: "Every container traceable to Katapiang groves.",
  },
] as const;

export function Impact() {
  return (
    <Section dark>
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Editorial intro — sticky on desktop, stacked first on mobile */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-surface-alt">
            Impact
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Business That Creates More Than Products.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75">
            Every container shipped keeps value in the village: farmer income,
            processing jobs, and a reason for the next generation to stay.
          </p>
          <div className="mt-8">
            <Button
              href="/impact"
              variant="secondaryDark"
              event="numbers_section_viewed"
              className="w-full sm:w-auto"
            >
              See the full picture
            </Button>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-cream/60">
              Quantified dashboard (tonnage, suppliers, jobs) publishes only
              when verified.
            </p>
          </div>
        </div>

        {/* Pillar rows — divided list, not cards */}
        <ol className="border-t border-cream/15">
          {PILLARS.map((p, i) => {
            const Icon = Icons[p.icon];
            return (
              <li
                key={p.title}
                className="flex items-start gap-5 border-b border-cream/15 py-7 md:py-8"
              >
                <span
                  aria-hidden
                  className="text-sm font-extrabold tabular-nums text-cream/40"
                >
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream">
                  <Icon size={22} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/70 md:text-base">
                    {p.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
