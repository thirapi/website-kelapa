import { GlobalRoute } from "@/components/motion/GlobalRoute";
import { Container, Section, Eyebrow } from "@/components/ui/Section";

const STOPS = ["Katapiang", "West Sumatra", "Indonesia", "Global markets"];

export function Global() {
  return (
    <Section className="bg-surface-alt/50">
      <Container>
        <Eyebrow>Global</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          From Indonesia to the World.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Building toward global markets — one verified lot at a time.
        </p>
        <GlobalRoute stops={STOPS} />
      </Container>
    </Section>
  );
}
