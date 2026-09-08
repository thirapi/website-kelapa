import { Section } from "@/components/ui/Section";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { ICONS, type IconName } from "@/components/ui/icons";

// 07 Why Katapiang — bento asimetris: ikon sebaris judul (bukan tile generik),
// copy spesifik nagari. Stagger reveal, blok besar dulu.
const ITEMS: { icon: IconName; title: string; desc: string; big?: boolean }[] = [
  {
    icon: "repeat",
    title: "Consistent volume",
    desc: "Weekly village production — from retail sacks to containers, on a schedule you can hold.",
    big: true,
  },
  {
    icon: "percent",
    title: "Straight-from-source pricing",
    desc: "No layered middlemen. Negotiate directly with the village team.",
  },
  {
    icon: "chat",
    title: "Fast response",
    desc: "Ask for specs or fresh batch photos — answered via WA/email, not tickets.",
  },
  {
    icon: "calendar",
    title: "Transparent lead time",
    desc: "Production and ship dates confirmed upfront — clean documents, safe packing.",
  },
  {
    icon: "origin",
    title: "Traceable origin",
    desc: "Every batch logged from Katapiang farmer groves to packing.",
  },
];

export function WhyCoco() {
  return (
    <Section ariaLabel="Why COCO KATAPIANG">
      <Reveal>
        <p className="text-xs font-bold tracking-[0.25em] text-ember uppercase">Why the village</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
          Why Choose Us.
        </h2>
      </Reveal>
      <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
        {ITEMS.map((it) => {
          const Icon = ICONS[it.icon];
          return (
            <article
              key={it.title}
              data-reveal-item
              className={`rounded-2xl border border-paper/15 bg-surface p-7 transition-[border-color] hover:border-ember/40 ${
                it.big ? "md:col-span-2 md:p-10" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-xl font-bold">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{it.desc}</p>
            </article>
          );
        })}
      </RevealStagger>
    </Section>
  );
}
