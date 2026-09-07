// Katalog CMS-ready — docs/05-PRD-Ecommerce.md §2.1 + 04 §2
export type ProductCategory = "charcoal" | "briquettes" | "copra";
export type ProductStatus = "available" | "pre-order" | "on-request";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDesc: string;
  specs: { label: string; value: string }[];
  packing: string;
  moq: string;
  price: string;
  status: ProductStatus;
  leadTime: string;
  capability: string;
  flagship: boolean;
};

export const CATEGORIES = [
  {
    id: "charcoal",
    name: "Coconut Shell Charcoal",
    desc: "Raw lump charcoal untuk BBQ, industri, dan ekspor volume besar.",
  },
  {
    id: "briquettes",
    name: "Coconut Charcoal Briquettes",
    desc: "Briket hexagon/pillow untuk shisha, BBQ retail, dan HoReCa.",
  },
  {
    id: "copra",
    name: "Copra",
    desc: "Dried coconut (smoke/sun-dried) untuk pabrik minyak & food processing.",
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "coconut-shell-charcoal-lump",
    name: "Coconut Shell Charcoal — Lump",
    category: "charcoal",
    shortDesc: "Raw lump charcoal, high caloric, untuk BBQ & industri.",
    specs: [
      { label: "Moisture", value: "≤ 8%" },
      { label: "Ash content", value: "≤ 3%" },
      { label: "Size", value: "40–120 mm, screened" },
      { label: "Caloric value", value: "≥ 6.500 kcal/kg" },
    ],
    packing: "15 kg bag / 20ft container",
    moq: "1 × 20ft container",
    price: "on request",
    status: "available",
    leadTime: "14–21 hari",
    capability: "120 ton/bulan",
    flagship: true,
  },
  {
    id: "p2",
    slug: "coconut-charcoal-briquettes-hexagon",
    name: "Coconut Charcoal Briquettes — Hexagon",
    category: "briquettes",
    shortDesc: "Briket hexagon, long burn, low ash — untuk shisha & BBQ.",
    specs: [
      { label: "Moisture", value: "≤ 6%" },
      { label: "Ash content", value: "≤ 2.5%" },
      { label: "Burn time", value: "2–2.5 jam" },
      { label: "Shape", value: "Hexagon, pillow (custom)" },
    ],
    packing: "1 kg / 10 kg inner + master carton",
    moq: "1 × 20ft container",
    price: "on request",
    status: "available",
    leadTime: "21–28 hari",
    capability: "80 ton/bulan",
    flagship: true,
  },
  {
    id: "p3",
    slug: "copra-smoke-dried",
    name: "Copra — Smoke Dried",
    category: "copra",
    shortDesc: "Dried coconut untuk produsen minyak kelapa & food processing.",
    specs: [
      { label: "Moisture", value: "≤ 7%" },
      { label: "Purity", value: "Sortir manual, low mould" },
      { label: "Cut", value: "Cup / half-cut" },
      { label: "Oil yield", value: "62–65%" },
    ],
    packing: "Jute bag 50 kg / container curah",
    moq: "25 ton",
    price: "on request",
    status: "on-request",
    leadTime: "14 hari",
    capability: "200 ton/bulan",
    flagship: false,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
