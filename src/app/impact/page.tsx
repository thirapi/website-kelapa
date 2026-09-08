import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Counter } from "@/components/motion/Counter";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { METRICS } from "@/content/metrics";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Business that creates more than products: farmer income, village jobs, and local value kept home.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="Business That Creates More Than Products."
        intro="Every container shipped keeps value in the village. Figures below publish only once verified. No invented numbers, ever."
        trail={[{ label: "Impact" }]}
      />
      <Section>
        <Container>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-alt/60 px-5 py-4 sm:px-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em]">
                Impact dashboard
              </h2>
              <span className="rounded-full bg-ember/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ember">
                Forthcoming
              </span>
            </div>
            <dl>
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line px-5 py-5 transition-colors duration-200 last:border-0 hover:bg-surface-alt/60 sm:px-6"
                >
                  <div>
                    <dt className="text-lg font-extrabold tracking-tight">
                      {m.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-muted">
                      {m.unit} · {m.source}, {m.year}
                    </dd>
                  </div>
                  <dd className="text-3xl font-extrabold tabular-nums tracking-tight">
                    {m.status === "pending" ? (
                      <span className="text-muted/60">TBD</span>
                    ) : (
                      <Counter value={m.value} />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-sm text-muted">
            Figures publish here only once verified. No invented numbers, ever.
          </p>
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
                home, built on palms their grandparents planted, backed by
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
