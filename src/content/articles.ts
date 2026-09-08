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
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
