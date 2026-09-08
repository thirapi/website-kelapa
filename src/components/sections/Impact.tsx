import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
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
    <Section>
      <Container>
        <Eyebrow>Impact</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          Business That Creates More Than Products.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = Icons[p.icon];
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-black/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
          Every container shipped keeps value in the village: farmer income,
          processing jobs, and a reason for the next generation to stay.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ArrowLink href="/impact" event="numbers_section_viewed">
            See the full picture
          </ArrowLink>
          <p className="text-xs text-muted">
            Quantified dashboard (tonnage, suppliers, jobs) publishes only when verified.
          </p>
        </div>
      </Container>
    </Section>
  );
}
