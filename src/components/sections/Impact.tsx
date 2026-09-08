import { Counter } from "@/components/motion/Counter";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";
import { METRICS } from "@/content/metrics";

export function Impact() {
  return (
    <Section>
      <Container>
        <Eyebrow>Impact</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          Business That Creates More Than Products.
        </h2>
        <dl className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="border-l-2 border-brand/60 pl-5">
              <dd className="text-4xl font-extrabold tabular-nums tracking-tight md:text-5xl">
                {m.status === "pending" ? "—" : <Counter value={m.value} />}
              </dd>
              <dt className="mt-2 text-sm font-semibold">{m.label}</dt>
              <dd className="text-xs text-muted">
                {m.status === "pending"
                  ? "Data forthcoming"
                  : `${m.unit} · ${m.source}, ${m.year}`}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
          Every container shipped keeps value in the village — farmer income,
          processing jobs, and a reason for the next generation to stay.
        </p>
        <div className="mt-6">
          <ArrowLink href="/impact" event="numbers_section_viewed">
            See the full picture
          </ArrowLink>
        </div>
      </Container>
    </Section>
  );
}
