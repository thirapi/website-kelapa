import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { Icons } from "@/components/ui/icons";

const SPECS = [
  { label: "Moisture", value: "≤ 7%", note: "Sun-dried, batch verified" },
  { label: "Ash", value: "≤ 3%", note: "Shell charcoal grade" },
  { label: "Fixed Carbon", value: "≥ 75%", note: "Charcoal & briquettes" },
  { label: "Size", value: "Graded", note: "Lump, cube, finger, hex" },
  { label: "Packaging", value: "Custom", note: "Bulk, bag, private label" },
  { label: "Origin", value: "Katapiang", note: "Single-village traceability" },
];

const FRAMEWORK = ["Raw material", "Processing", "Inspection", "Packaging", "Delivery"];

export function Quality() {
  return (
    <Section className="bg-surface-alt/50">
      <Container>
        <Eyebrow>Quality</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          Built on Quality.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-surface p-6 transition-[border-color] duration-200 hover:border-brand/50">
              <p className="flex items-center gap-2 text-sm font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icons.ShieldCheck size={18} aria-hidden />
                </span>
                {s.label}
              </p>
              <p className="mt-3 text-3xl font-extrabold tabular-nums tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.note}</p>
            </div>
          ))}
        </div>
        <ol className="mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold">
          {FRAMEWORK.map((f, i) => (
            <li key={f} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="text-muted">→</span>}
              <span className="rounded-full border border-line bg-surface px-4 py-2">{f}</span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
