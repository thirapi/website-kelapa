import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

export function Origin() {
  return (
    <Section compact className="bg-ink text-white">
      <Container>
        <SiteImage
          asset="palms-beach"
          alt="Coconut palms on the Katapiang coast, West Sumatra"
          ratio="aspect-[21/9]"
          className="fade-mask"
          sizes="100vw"
        />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
            From Katapiang. Where Our Story Begins.
          </h2>
          <Button
            href="/story"
            variant="secondary"
            className="border-white/30 text-base hover:border-white/60 hover:text-base"
          >
            Discover Our Story
          </Button>
        </div>
      </Container>
    </Section>
  );
}
