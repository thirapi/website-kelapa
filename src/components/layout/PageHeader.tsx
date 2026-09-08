import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow } from "@/components/ui/Section";

export function PageHeader({
  eyebrow,
  title,
  intro,
  trail,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  trail: { label: string; href?: string }[];
}) {
  return (
    <>
      <Breadcrumb trail={trail} />
      <div className="border-b border-line bg-surface">
        <Reveal>
          <Container className="py-12 md:py-16">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {intro}
              </p>
            )}
          </Container>
        </Reveal>
      </div>
    </>
  );
}
