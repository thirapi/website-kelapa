import { GlobalRoute } from "@/components/motion/GlobalRoute";
import { Container, Section, Eyebrow } from "@/components/ui/Section";

const STOPS = [
  { name: "Katapiang", note: "Origin · West Sumatra" },
  { name: "Belawan International Port", note: "Sumatera" },
  { name: "Global markets", note: "Destination" },
];

export function Global() {
  return (
    <Section className="bg-surface-alt/50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Global</Eyebrow>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            From Indonesia to the World.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Building toward global markets, one verified lot at a time.
          </p>
        </div>
        <GlobalRoute stops={STOPS} />
      </Container>
    </Section>
  );
}
