import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Counter } from "@/components/motion/Counter";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { METRICS } from "@/content/metrics";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Business that creates more than products — farmer income, village jobs, and local value kept home.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="Business That Creates More Than Products."
        intro="Every container shipped keeps value in the village. Figures below publish only once verified — no invented numbers, ever."
        trail={[{ label: "Impact" }]}
      />
      <Section>
        <Container>
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <dd className="text-5xl font-extrabold tabular-nums tracking-tight">
                  {m.status === "pending" ? "—" : <Counter value={m.value} />}
                </dd>
                <dt className="mt-3 font-bold">{m.label}</dt>
                <dd className="mt-1 text-sm text-muted">
                  {m.status === "pending"
                    ? `Data forthcoming · ${m.source}, ${m.year}`
                    : `${m.unit} · ${m.source}, ${m.year}`}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Economy</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                Income that stays.
              </h2>
              <p className="mt-3 leading-relaxed text-ink/80">
                Farmer suppliers sell at fair, transparent grades. Processing,
                grading and packing jobs are filled locally. The margin that
                once left Katapiang with raw nuts now pays village wages.
              </p>
            </div>
            <div>
              <Eyebrow>Community</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                A reason to stay.
              </h2>
              <p className="mt-3 leading-relaxed text-ink/80">
                Viable village industry gives the next generation a future at
                home — built on palms their grandparents planted, backed by
                Pertamina&apos;s Desa Energi Berdikari framework.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button href="/contact" event="closing_cta_quote">
              Partner with us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
