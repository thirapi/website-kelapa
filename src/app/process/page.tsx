import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import type { AssetKey } from "@/content/assets";

export const metadata: Metadata = {
  title: "Process & Quality",
  description:
    "Seven gates from coconut to container: our process timeline and quality framework.",
};

const STEPS: { name: string; desc: string; photo: AssetKey }[] = [
  {
    name: "Source",
    desc: "Selected mature coconuts from Katapiang groves.",
    photo: "harvest-piles",
  },
  {
    name: "Select",
    desc: "Grading by size, maturity and soundness.",
    photo: "sort-yard",
  },
  {
    name: "Process",
    desc: "Dehusking, splitting and kernel preparation.",
    photo: "split-fresh",
  },
  {
    name: "Dry",
    desc: "Sun-drying on raised racks to ≤ 7% moisture.",
    photo: "dry-house",
  },
  {
    name: "Control",
    desc: "Batch checks: moisture, ash, fixed carbon.",
    photo: "control-kernel",
  },
  {
    name: "Pack",
    desc: "Graded packing: bulk, bag or private label.",
    photo: "pack-sack",
  },
  {
    name: "Deliver",
    desc: "Container loading for domestic & export.",
    photo: "deliver-barge",
  },
];

const FRAMEWORK = [
  {
    stage: "Raw material",
    checks: "Maturity, soundness, variety selection at intake.",
  },
  {
    stage: "Processing",
    checks: "Clean cuts, drying discipline, turning schedules.",
  },
  { stage: "Inspection", checks: "Moisture, ash, fixed carbon per batch." },
  { stage: "Packaging", checks: "Weight accuracy, bag integrity, labeling." },
  {
    stage: "Delivery",
    checks: "Container condition, moisture re-check, documents.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process & quality"
        title="From Coconut to Value."
        intro="Seven gates. Every lot passes all of them before it ships. Documented, batch by batch."
        trail={[{ label: "Process" }]}
      />
      <Section className="pt-10 md:pt-14">
        <Container>
          <ol className="relative">
            <span
              aria-hidden
              className="absolute bottom-10 left-4 top-10 w-px bg-brand/25 md:left-1/2"
            />
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={s.name}
                  className={cn(
                    "relative py-8 pl-14 md:w-1/2 md:py-10 md:pl-0",
                    left ? "md:pr-14" : "md:ml-auto md:pl-14",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-8 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-extrabold tabular-nums text-cream ring-4 ring-cream md:top-10",
                      "left-0",
                      left ? "md:left-auto md:-right-[18px]" : "md:-left-[18px]",
                    )}
                  >
                    {i + 1}
                  </span>
                  <SiteImage
                    asset={s.photo}
                    alt={`${s.name}: ${s.desc}`}
                    ratio="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-ember">
                    Step {i + 1} of {STEPS.length}
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
                    {s.name}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted">{s.desc}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>
      <Section className="bg-surface-alt/50">
        <Container>
          <Eyebrow>Quality framework</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Checked at every stage.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
            <table className="w-full text-sm">
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-line bg-surface-alt/60 text-left">
                  <th
                    scope="col"
                    className="px-5 py-4 text-left align-top text-xs font-bold uppercase tracking-[0.14em]"
                  >
                    Stage
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-left align-top text-xs font-bold uppercase tracking-[0.14em]"
                  >
                    What we check
                  </th>
                </tr>
              </thead>
              <tbody>
                {FRAMEWORK.map((f) => (
                  <tr
                    key={f.stage}
                    className="block border-b border-line px-5 py-4 transition-colors duration-200 last:border-0 hover:bg-surface-alt/60 md:table-row md:px-0 md:py-0"
                  >
                    <th
                      scope="row"
                      className="flex items-center gap-2.5 text-left align-top font-bold md:px-5 md:py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <Icons.ShieldCheck size={15} aria-hidden />
                      </span>
                      {f.stage}
                    </th>
                    <td className="mt-1 pl-[38px] text-left align-top text-muted md:mt-0 md:px-5 md:py-4 md:pl-5">
                      {f.checks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream transition-[background-color,transform,box-shadow] duration-200 hover:bg-brand-deep hover:shadow-lg hover:shadow-brand/25 active:translate-y-px"
            >
              <Icons.FileText size={16} aria-hidden />
              Download our company profile
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
