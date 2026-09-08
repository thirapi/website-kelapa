import { Container, Section, Eyebrow } from "@/components/ui/Section";

const PARTS = [
  { part: "Kernel", value: "Copra & oil — the calorie core." },
  { part: "Shell", value: "Charcoal & briquettes — dense carbon." },
  { part: "Husk", value: "Fibre & growing media — next frontier." },
  { part: "Water", value: "Beverage & processing input." },
];

export function Commodity() {
  return (
    <Section>
      <Container>
        <Eyebrow>Anatomy</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          More Than a Commodity. We See Value in Every Part.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          One fruit, one portfolio. Nothing wasted. Everything with value.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PARTS.map((p, i) => (
            <div key={p.part} className="bg-surface p-6 transition-colors duration-200 hover:bg-surface-alt">
              <p className="text-xs font-bold tabular-nums text-muted">0{i + 1}</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight">{p.part}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
