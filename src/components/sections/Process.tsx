import { ProcessTimeline } from "@/components/motion/ProcessTimeline";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";

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

export function Process() {
  return (
    <Section>
      <Container>
        <Eyebrow>Process</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
            From Coconut to Value.
          </h2>
          <ArrowLink href="/process">See the full process</ArrowLink>
        </div>
        <div className="mt-10">
          <ProcessTimeline steps={STEPS} />
        </div>
      </Container>
    </Section>
  );
}
