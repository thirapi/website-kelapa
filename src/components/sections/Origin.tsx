import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { Icons } from "@/components/ui/icons";

export function Origin() {
  return (
    <Section compact className="bg-ink text-base">
      <Container>
        <div className="relative overflow-hidden rounded-2xl">
          <SiteImage
            asset="palms-beach"
            alt="Coconut palms on the Katapiang coast, West Sumatra"
            ratio="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
            className="rounded-2xl"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-base/70">
              Origin
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-base drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
              From Katapiang. Where Our Story Begins.
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-base/70">
                <Icons.MapPin size={14} aria-hidden />
                Padang Pariaman · West Sumatra · Indonesia
              </p>
              <Button href="/story" variant="secondaryDark" className="sm:w-auto">
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
