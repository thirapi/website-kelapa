import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description: "From Katapiang village to world buyers: the origin and journey of COCO KATAPIANG.",
};

const JOURNEY = [
  { year: "Village roots", text: "Generations of coconut farming in Nagari Katapiang, Padang Pariaman." },
  { year: "The idea", text: "Every part of the coconut has value. Waste becomes product." },
  { year: "DEB backing", text: "Pertamina's Desa Energi Berdikari framework turns village energy into village industry." },
  { year: "Today", text: "Copra, shell charcoal and briquettes, specified for world buyers." },
];

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="From Katapiang. For the World."
        intro="A coastal village, generations of farmers, and the discipline to turn every part of the coconut into value."
        trail={[{ label: "Our Story" }]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SiteImage asset="grove-rows" alt="Rows of coconut palms in Katapiang" ratio="aspect-[4/3]" />
          <div>
            <Eyebrow>Origin</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Where the palms meet the sea.
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Nagari Katapiang sits on the coast of Padang Pariaman, West Sumatra.
              Coconut palms shape daily life here, and for generations, much of each
              harvest&apos;s value left the village unprocessed.
            </p>
            <p className="mt-3 leading-relaxed text-ink/80">
              COCO KATAPIANG exists to keep that value home: processing in the village,
              grading to export specification, and selling directly to buyers who care
              where their product comes from.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-surface-alt/50">
        <Container>
          <Eyebrow>Journey</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            How we got here.
          </h2>
          <div className="relative mt-10">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-11 hidden h-px bg-brand/30 lg:block"
            />
            <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {JOURNEY.map((j, i) => (
                <li key={j.year} className="rounded-2xl border border-line bg-surface p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-extrabold tabular-nums text-cream ring-4 ring-surface">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold tracking-tight text-ink">{j.year}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{j.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>People</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              The hands behind the product.
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Farmer suppliers, processors, graders and packers, all from Katapiang and
              surroundings. Team profiles with photos follow once stakeholder materials arrive.
            </p>
            <div className="mt-6">
              <Button href="/impact">See our impact</Button>
            </div>
          </div>
          <SiteImage asset="copra-hands" alt="Hands holding freshly cracked coconut in Katapiang" ratio="aspect-[4/3]" />
        </Container>
      </Section>
    </>
  );
}
