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
        <Eyebrow>Standards</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          Built on Quality.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Every lot is specified, graded and verified before it ships.
          Five gates from raw material to delivery. No lot skips one.
        </p>

        <ol className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {FRAMEWORK.map((f, i) => (
            <li
              key={f}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 transition-[border-color] duration-200 hover:border-brand/50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-xs font-extrabold tabular-nums text-brand">
                {i + 1}
              </span>
              <span className="text-sm font-bold leading-snug">{f}</span>
            </li>
          ))}
        </ol>

        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface-alt/60 text-left">
                <th scope="col" className="px-4 py-4 text-xs font-bold uppercase tracking-[0.14em] sm:px-6">
                  Parameter
                </th>
                <th scope="col" className="hidden px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.14em] md:table-cell">
                  Note
                </th>
                <th scope="col" className="px-4 py-4 text-right text-xs font-bold uppercase tracking-[0.14em] sm:px-6">
                  Specification
                </th>
              </tr>
            </thead>
            <tbody>
              {SPECS.map((s) => (
                <tr key={s.label} className="border-b border-line transition-colors duration-200 last:border-0 hover:bg-surface-alt/60">
                  <th scope="row" className="px-4 py-4 text-left sm:px-6">
                    <span className="flex items-center gap-2.5 font-bold">
                      <Icons.ShieldCheck size={16} aria-hidden className="shrink-0 text-brand" />
                      {s.label}
                    </span>
                  </th>
                  <td className="hidden px-4 py-4 text-muted md:table-cell">{s.note}</td>
                  <td className="px-4 py-4 text-right font-extrabold tabular-nums sm:px-6">
                    {s.value}
                    <span className="mt-0.5 block text-xs font-normal text-muted md:hidden">
                      {s.note}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
