import type { AssetKey } from "@/content/assets";

export type ArticleCategory =
  | "Origin"
  | "Coconut"
  | "Process"
  | "People"
  | "Products"
  | "Market"
  | "Announcements";

export interface Article {
  slug: string;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  cover: AssetKey;
  date: string;
  author: string;
  body: string[];
  references: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "from-katapiang",
    category: "Origin",
    title: "From Katapiang: Where Our Story Begins",
    excerpt:
      "A coastal village in West Sumatra, generations of coconut farmers, and the idea that nothing should go to waste.",
    cover: "grove-rows",
    date: "2026-08-12",
    author: "COCO KATAPIANG",
    body: [
      "Nagari Katapiang sits on the coast of Padang Pariaman, West Sumatra, a place where coconut palms have shaped daily life for generations.",
      "COCO KATAPIANG began with a simple observation: every part of the coconut has value. The kernel becomes copra and oil. The shell becomes charcoal and briquettes. What the village once treated as waste, we now treat as product.",
      "This journal follows that journey, from grove to global buyer.",
    ],
    references: [],
  },
  {
    slug: "anatomy-of-value",
    category: "Coconut",
    title: "One Fruit, Five Products: The Anatomy of Value",
    excerpt:
      "Kernel, shell, husk, water, trunk: how a single coconut becomes a portfolio.",
    cover: "copra-hands",
    date: "2026-08-20",
    author: "COCO KATAPIANG",
    body: [
      "A coconut is not one commodity. It is a bundle of raw materials, each with its own buyers, specifications and markets.",
      "Our portfolio today covers three of them: copra from the kernel, shell charcoal from the shell, and briquettes pressed from that charcoal. Coconut oil and virgin coconut oil are next.",
      "Nothing wasted. Everything with value.",
    ],
    references: [],
  },
  {
    slug: "why-moisture-matters",
    category: "Process",
    title: "Why Moisture Content Decides Copra Quality",
    excerpt:
      "The single number buyers ask about first, and how sun-drying discipline controls it.",
    cover: "coast-hero",
    date: "2026-08-28",
    author: "COCO KATAPIANG",
    body: [
      "Ask any copra buyer what they check first and the answer is moisture. Above the threshold, oil yield drops and spoilage risk rises.",
      "Our process controls it the traditional way, done with discipline: selected kernels, raised drying racks, turning schedules, and batch checks before packing.",
      "Every lot we ship is dried to ≤ 7% moisture, verified before it leaves Katapiang.",
    ],
    references: [],
  },
  {
    slug: "harvest-lots-available",
    category: "Announcements",
    title: "New Harvest Lots Available for Q4",
    excerpt:
      "Fresh copra and shell charcoal lots open for quotation. Made-to-order briquette slots for Q4.",
    cover: "sacks-pile",
    date: "2026-09-01",
    author: "COCO KATAPIANG",
    body: [
      "New harvest lots are now open: sun-dried copra and graded shell charcoal, ready for inspection and quotation.",
      "Briquette production runs made-to-order. Reserve Q4 slots early for private-label and bulk orders.",
      "Contact our team with your specification, packaging and destination for a quotation.",
    ],
    references: [],
  },
  {
    slug: "hands-behind-harvest",
    category: "People",
    title: "The Hands Behind the Harvest",
    excerpt:
      "Meet the farming families of Katapiang whose selection and drying discipline set every lot's quality.",
    cover: "select-coconut",
    date: "2026-09-05",
    author: "COCO KATAPIANG",
    body: [
      "Quality starts before processing, at selection. Our partner families choose mature nuts with thick kernels, the ones that dry evenly and yield more oil.",
      "Most of this knowledge is generational: reading husk color, judging weight by hand, knowing which palms produce the densest copra.",
      "Every lot we sell carries their names in our records, because traceability begins with people, not paperwork.",
    ],
    references: [],
  },
  {
    slug: "shell-charcoal-graded",
    category: "Products",
    title: "Shell Charcoal, Graded for Export",
    excerpt:
      "Fixed carbon, ash content, and sizing: what our graded shell charcoal guarantees buyers.",
    cover: "charcoal-dark",
    date: "2026-09-08",
    author: "COCO KATAPIANG",
    body: [
      "Not all shell charcoal burns the same. Dense Katapiang shells, carbonized slowly, produce charcoal with high fixed carbon and low ash.",
      "We grade every batch by size and screen out fines, so briquettes makers and shisha producers get consistent feedstock.",
      "Available in bulk bags with lot-level grading reports on request.",
    ],
    references: [],
  },
  {
    slug: "what-buyers-ask",
    category: "Market",
    title: "What Global Buyers Ask Before Ordering",
    excerpt:
      "Moisture, specs, packaging, lead time: the four questions behind every quotation we send.",
    cover: "port-cranes",
    date: "2026-09-10",
    author: "COCO KATAPIANG",
    body: [
      "After dozens of buyer conversations, the questions repeat: what is the moisture content, what specification can you guarantee, how is it packed, and when can it ship.",
      "We built our quotation format around those four answers, with lot photos and grading notes attached.",
      "If you buy copra or charcoal, send us your spec sheet. We will match it against current lots within two working days.",
    ],
    references: [],
  },
  {
    slug: "kiln-to-cube",
    category: "Process",
    title: "From Kiln to Cube: How Our Briquettes Are Made",
    excerpt:
      "Carbonize, crush, bind, press, dry: the five steps behind smokeless coconut briquettes.",
    cover: "kiln-embers",
    date: "2026-09-12",
    author: "COCO KATAPIANG",
    body: [
      "Good briquettes begin with good charcoal. We carbonize selected shells until they reach consistent fixed carbon, then crush to uniform grain.",
      "A food-safe natural binder holds the mix before hydraulic pressing shapes it into cubes or hexagons.",
      "Final drying brings moisture down for a long, smokeless burn. Made-to-order, in bulk or private-label boxes.",
    ],
    references: [],
  },
  {
    slug: "copra-to-bottle",
    category: "Coconut",
    title: "Coconut Oil Next: From Copra to Bottle",
    excerpt:
      "Why our roadmap runs from dried copra to milled oil, and what buyers can pre-register interest for.",
    cover: "oil-bottle",
    date: "2026-09-14",
    author: "COCO KATAPIANG",
    body: [
      "Copra is our foundation, but the value chain continues. Milled and filtered in bulk, the same Katapiang kernels become food-grade coconut oil.",
      "We are preparing pressing and filtration capacity for bulk grades first, food and industrial, with virgin oil to follow.",
      "Buyers with recurring oil demand can already share specifications so first production is allocated to real orders.",
    ],
    references: [],
  },
  {
    slug: "coast-that-feeds-palms",
    category: "Origin",
    title: "Padang Pariaman: The Coast That Feeds the Palms",
    excerpt:
      "Sea air, volcanic soil, and year-round rain: why this coastline grows coconuts worth exporting.",
    cover: "palms-beach",
    date: "2026-09-16",
    author: "COCO KATAPIANG",
    body: [
      "Padang Pariaman's coastline gives coconut palms almost everything they ask for: steady rainfall, sandy loam, and sun in every season.",
      "Palms here fruit year-round, which means harvests never stop and lots can be scheduled around buyer demand, not seasons.",
      "That geography is our quiet advantage, and the reason Katapiang can promise continuity, not just quality.",
    ],
    references: [],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
