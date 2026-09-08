// Central map of local stock assets. See public/assets/CREDITS.md.
export const ASSETS = {
  "grove-hero": "/assets/hero/grove-hero.webp",
  "grove-hero-mobile": "/assets/hero/grove-hero-mobile.webp",
  "grove-rows": "/assets/hero/grove-rows.webp",
  "coast-hero": "/assets/hero/coast-hero.webp",
  "palms-beach": "/assets/origin/palms-beach.webp",
  "palms-clouds": "/assets/origin/palms-clouds.webp",
  "copra-split": "/assets/products/copra-split.webp",
  "copra-hands": "/assets/products/copra-hands.webp",
  "copra-table": "/assets/products/copra-table.webp",
  "shell-texture": "/assets/products/shell-texture.webp",
  "charcoal-fire": "/assets/products/charcoal-fire.webp",
  "embers-close": "/assets/products/embers-close.webp",
  "briquettes-grill": "/assets/products/briquettes-grill.webp",
  "charcoal-dark": "/assets/products/charcoal-dark.webp",
  "oil-bottle": "/assets/products/oil-bottle.webp",
  "vco-bottle": "/assets/products/vco-bottle.webp",
  "grove-fruit": "/assets/process/grove-fruit.webp",
  "select-coconut": "/assets/process/select-coconut.webp",
  "kiln-embers": "/assets/process/kiln-embers.webp",
  "sack-burlap": "/assets/process/sack-burlap.webp",
  "sacks-pile": "/assets/process/sacks-pile.webp",
  "port-cranes": "/assets/process/port-cranes.webp",
  "port-ship": "/assets/process/port-ship.webp",
} as const;

export type AssetKey = keyof typeof ASSETS;
