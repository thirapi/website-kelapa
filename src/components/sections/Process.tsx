import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink, Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import type { AssetKey } from "@/content/assets";
import Link from "next/link";

const STEPS: { name: string; desc: string; image: AssetKey }[] = [
  { name: "Source", desc: "Selected coconuts from Katapiang groves.", image: "harvest-piles" },
  { name: "Select", desc: "Graded by size, maturity, soundness.", image: "sort-yard" },
  { name: "Process", desc: "Dehusking, splitting, kernel prep.", image: "split-fresh" },
  { name: "Dry", desc: "Sun-dried to ≤ 7% moisture.", image: "dry-house" },
  { name: "Control", desc: "Batch checks: moisture, ash, carbon.", image: "control-kernel" },
  { name: "Pack", desc: "Bulk, bag or private label.", image: "pack-sack" },
  { name: "Deliver", desc: "Container loading for export.", image: "deliver-barge" },
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
          <span className="hidden lg:block">
            <ArrowLink href="/process">See the full process</ArrowLink>
          </span>
        </div>
        <ol className="mt-10 grid gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-px lg:overflow-hidden lg:rounded-2xl lg:border lg:border-line lg:bg-line">
          {STEPS.map((s, i) => (
            <li key={s.name}>
              <Link
                href="/process"
                className="group flex h-full gap-4 rounded-2xl border border-line bg-surface p-3 transition-colors duration-200 hover:bg-surface-alt sm:p-4 lg:block lg:rounded-none lg:border-0 lg:p-6"
              >
                <SiteImage
                  asset={s.image}
                  alt={`${s.name}: ${s.desc}`}
                  ratio="aspect-square lg:aspect-[4/3]"
                  className="w-24 shrink-0 rounded-xl sm:w-28 lg:mb-4 lg:w-full lg:rounded-xl"
                  sizes="(max-width: 1024px) 160px, 400px"
                />
                <div className="min-w-0 py-1 lg:py-0">
                  <p className="text-xs font-bold tabular-nums text-ember">0{i + 1}</p>
                  <h3 className="mt-1.5 text-base font-extrabold tracking-tight text-ink sm:text-lg">{s.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Link>
            </li>
          ))}
          <li className="hidden items-center rounded-2xl bg-brand p-5 text-cream sm:p-6 lg:flex lg:rounded-none">
            <Link href="/process" className="text-sm font-semibold leading-relaxed">
              Seven gates. Every lot passes all of them. Explore the timeline →
            </Link>
          </li>
        </ol>
        <div className="mt-6 lg:hidden">
          <Button href="/process" className="w-full sm:w-auto">
            Explore the timeline
          </Button>
        </div>
      </Container>
    </Section>
  );
}
