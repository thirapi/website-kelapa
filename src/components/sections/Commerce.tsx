import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { ArrowLink, Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";

const STEPS = [
  {
    icon: Icons.ShoppingBag,
    name: "Inquire",
    desc: "Add products to your inquiry list, or send specs, volume, packaging and destination.",
  },
  {
    icon: Icons.FileText,
    name: "Quote",
    desc: "We match your spec to current lots and reply with a quotation in 1–2 business days.",
  },
  {
    icon: Icons.Ship,
    name: "Ship",
    desc: "Approve the lot and we pack, load and ship your container, domestic or export.",
  },
];

export function Commerce() {
  return (
    <Section>
      <Container>
        <Eyebrow>Shop</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Source COCO KATAPIANG.
          </h2>
          <ArrowLink href="/contact">How ordering works</ArrowLink>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.name}
              className="rounded-2xl border border-line bg-surface p-6 transition-[border-color] duration-200 hover:border-brand/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <s.icon size={20} aria-hidden />
                </span>
                <span className="text-xs font-bold tabular-nums text-ember">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight">{s.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button href="/contact" event="closing_cta_quote">
            Start an Inquiry
          </Button>
        </div>
      </Container>
    </Section>
  );
}
