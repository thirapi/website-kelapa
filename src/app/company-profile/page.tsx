import type { Metadata } from "next";
import { PRODUCTS } from "@/content/products";
import { SITE } from "@/content/site";
import { METRICS } from "@/content/metrics";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "COCO KATAPIANG company profile: products, process, quality and contact.",
  robots: { index: false, follow: false },
};

const GATES = ["Source", "Select", "Process", "Dry", "Control", "Pack", "Deliver"];

export default function CompanyProfilePage() {
  return (
    <div className="mx-auto max-w-3xl bg-surface px-10 py-12 text-ink print:px-0 print:py-0">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">
        Company Profile
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
        COCO KATAPIANG
      </h1>
      <p className="mt-2 text-lg font-medium text-muted">{SITE.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed">
        Premium B2B coconut products from Nagari Katapiang, Padang Pariaman,
        West Sumatra, Indonesia. {SITE.commerce} Grown within Pertamina&apos;s
        Desa Energi Berdikari framework.
      </p>

      <h2 className="mt-8 border-b border-line pb-2 text-sm font-bold uppercase tracking-[0.18em]">
        Products
      </h2>
      <table className="mt-2 w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-[0.12em] text-muted">
            <th className="py-2 pr-4">Product</th>
            <th className="py-2 pr-4">Key spec</th>
            <th className="py-2 text-right">MOQ</th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS.map((p) => (
            <tr key={p.slug} className="border-t border-line">
              <td className="py-2 pr-4 font-bold">{p.name}</td>
              <td className="py-2 pr-4 text-muted">
                {p.specs.map((s) => `${s.label} ${s.value}`).slice(0, 3).join(" · ")}
              </td>
              <td className="py-2 text-right tabular-nums">{p.moq}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-8 border-b border-line pb-2 text-sm font-bold uppercase tracking-[0.18em]">
        Process: seven gates
      </h2>
      <p className="mt-2 text-sm leading-relaxed">{GATES.join(" → ")}</p>

      <h2 className="mt-8 border-b border-line pb-2 text-sm font-bold uppercase tracking-[0.18em]">
        Impact (verified figures forthcoming)
      </h2>
      <p className="mt-2 text-sm leading-relaxed">
        {METRICS.map((m) => m.label).join(" · ")}. Every container shipped keeps
        value in the village: farmer income, processing jobs, and a reason for
        the next generation to stay.
      </p>

      <h2 className="mt-8 border-b border-line pb-2 text-sm font-bold uppercase tracking-[0.18em]">
        Contact
      </h2>
      <p className="mt-2 text-sm leading-relaxed">
        {SITE.address}
        <br />
        {SITE.email} · {SITE.whatsapp}
      </p>
    </div>
  );
}
