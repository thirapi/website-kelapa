import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
import Link from "next/link";

const STEPS = [
  { name: "Source", desc: "Selected coconuts from Katapiang groves." },
  { name: "Select", desc: "Graded by size, maturity, soundness." },
  { name: "Process", desc: "Dehusking, splitting, kernel prep." },
  { name: "Dry", desc: "Sun-dried to ≤ 7% moisture." },
  { name: "Control", desc: "Batch checks: moisture, ash, carbon." },
  { name: "Pack", desc: "Bulk, bag or private label." },
  { name: "Deliver", desc: "Container loading for export." },
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
        <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.name} className={i === STEPS.length - 1 ? "col-span-2 lg:col-span-1" : undefined}>
              <Link
                href="/process"
                className="block h-full bg-surface p-4 transition-colors duration-200 hover:bg-surface-alt sm:p-6"
              >
                <p className="text-xs font-bold tabular-nums text-ember">0{i + 1}</p>
                <h3 className="mt-2 text-base font-extrabold tracking-tight text-ink sm:text-lg">{s.name}</h3>
                <p className="mt-1 hidden text-sm leading-relaxed text-muted sm:block">{s.desc}</p>
              </Link>
            </li>
          ))}
          <li className="col-span-2 flex items-center bg-brand p-4 text-cream sm:p-6 lg:col-span-1">
            <Link href="/process" className="text-sm font-semibold leading-relaxed">
              Seven gates. Every lot passes all of them — explore the timeline →
            </Link>
          </li>
        </ol>
      </Container>
    </Section>
  );
}
