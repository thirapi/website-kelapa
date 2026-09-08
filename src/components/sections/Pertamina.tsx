import Image from "next/image";
import { Container, Section } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Button";

export function Pertamina() {
  return (
    <Section compact>
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-palm">
              Supported by
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
              Growing Local Potential with Purpose.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              COCO KATAPIANG grows within Pertamina&apos;s Desa Energi Berdikari
              framework — village energy independence turned into village industry.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Image
                src="/assets/brand/pertamina.svg"
                alt="Pertamina"
                width={132}
                height={31}
                className="h-8 w-auto"
                loading="lazy"
              />
              <span className="rounded-full bg-surface-alt px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                Desa Energi Berdikari
              </span>
            </div>
          </div>
          <ArrowLink href="/impact">Learn about our impact</ArrowLink>
        </div>
      </Container>
    </Section>
  );
}
