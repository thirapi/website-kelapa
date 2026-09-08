import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProcessTimeline } from "@/components/motion/ProcessTimeline";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Icons } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Process & Quality",
  description:
    "Seven gates from coconut to container — our process timeline and quality framework.",
};

const STEPS = [
  {
    name: "Source",
    desc: "Selected mature coconuts from Katapiang groves.",
    photo: "Sourcing — grove photo",
  },
  {
    name: "Select",
    desc: "Grading by size, maturity and soundness.",
    photo: "Selection — grading photo",
  },
  {
    name: "Process",
    desc: "Dehusking, splitting and kernel preparation.",
    photo: "Processing — dehusking photo",
  },
  {
    name: "Dry",
    desc: "Sun-drying on raised racks to ≤ 7% moisture.",
    photo: "Drying — racks photo",
  },
  {
    name: "Control",
    desc: "Batch checks: moisture, ash, fixed carbon.",
    photo: "Quality control — lab photo",
  },
  {
    name: "Pack",
    desc: "Graded packing — bulk, bag or private label.",
    photo: "Packing — bags photo",
  },
  {
    name: "Deliver",
    desc: "Container loading for domestic & export.",
    photo: "Loading — container photo",
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
        intro="Seven gates. Every lot passes all of them before it ships — documented, batch by batch."
        trail={[{ label: "Process" }]}
      />
      <Section>
        <Container>
          <ProcessTimeline steps={STEPS} />
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
              <thead>
                <tr className="border-b border-line bg-surface-alt/60 text-left">
                  <th
                    scope="col"
                    className="px-5 py-4 text-xs font-bold uppercase tracking-[0.14em]"
                  >
                    Stage
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-xs font-bold uppercase tracking-[0.14em]"
                  >
                    What we check
                  </th>
                </tr>
              </thead>
              <tbody>
                {FRAMEWORK.map((f) => (
                  <tr
                    key={f.stage}
                    className="border-b border-line transition-colors duration-200 last:border-0 hover:bg-surface-alt/60"
                  >
                    <th
                      scope="row"
                      className="flex items-center gap-2.5 px-5 py-4 font-bold"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <Icons.ShieldCheck size={15} aria-hidden />
                      </span>
                      {f.stage}
                    </th>
                    <td className="px-5 py-4 text-muted">{f.checks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 flex items-center gap-2.5 text-sm text-muted">
            <Icons.FileText size={16} aria-hidden />
            Downloadable spec sheets (PDF) follow once stakeholder files arrive.
          </p>
        </Container>
      </Section>
    </>
  );
}
