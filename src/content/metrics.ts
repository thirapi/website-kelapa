export interface Metric {
  label: string;
  value: string;
  unit: string;
  source: string;
  year: string;
  status: "verified" | "pending";
}

// Values pending stakeholder data — render as "data forthcoming".
export const METRICS: Metric[] = [
  { label: "Coconuts processed", value: "XXX", unit: "MT", source: "Internal assessment", year: "2026", status: "pending" },
  { label: "Farmer suppliers", value: "XXX", unit: "households", source: "Internal assessment", year: "2026", status: "pending" },
  { label: "People involved", value: "XXX", unit: "people", source: "Internal assessment", year: "2026", status: "pending" },
  { label: "Products in portfolio", value: "XXX", unit: "SKUs", source: "Internal assessment", year: "2026", status: "pending" },
];
