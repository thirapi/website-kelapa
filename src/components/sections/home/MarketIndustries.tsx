import { INDUSTRIES } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

// 10 Market / Industries — daftar bernomor + produk yang dipakai tiap sektor.
export function MarketIndustries() {
  return (
    <Section ariaLabel="Markets" spacing="compact">
      <Reveal>
        <p className="text-xs font-bold tracking-[0.25em] text-ember uppercase">Pasar</p>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-bold md:text-4xl">
          Melayani Pasar Global.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mt-8 divide-y divide-paper/15 border-y border-paper/15">
          {INDUSTRIES.map((m, i) => (
            <li
              key={m.name}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
            >
              <span className="tnum text-xs text-muted">0{i + 1}</span>
              <span className="font-display text-xl font-bold md:text-2xl">{m.name}</span>
              <span className="ml-auto text-sm text-muted">{m.product}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
