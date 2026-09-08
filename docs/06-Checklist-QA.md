# 06 — Checklist QA (warisan docs pra-wipe, tetap berlaku)

## 1. Struktur folder (kontrak build)

```
src/
├── app/                    # /(id-en route per §02): layout, page, products/[slug],
│                           #   story, process, impact, journal/[slug], contact
├── components/
│   ├── sections/           # 1 file per section home (§03-A)
│   ├── ui/                 # Button, Section/Container, Accordion, Marquee,
│   │                       #   Counter, FadeMaskImage, icons (Lucide SAJA)
│   ├── motion/             # Reveal, Rundown, EmberWipe, DeckSlider
│   ├── forms/              # QuoteForm (short/full), InquiryCart
│   └── layout/             # Navbar, Footer, ScrollTop
├── content/                # copy + data EN, CMS-ready (§04)
├── lib/                    # analytics(track), inquiry, gsap, smooth-scroll
└── styles/globals.css      # token @theme + keyframes + focus/fallback global
public/assets/             # hero/ · products/ · sourcing/ · brand/ (WebP)
```

## 2. Standar section (warisan, tetap)

- Container: `max-w-7xl`, `px-6 → md:px-10`. Heading besar `max-w-2xl`.
- Grid bernomor habis dibagi (bento 5 = 2+1/1+1+1; masonry 9 = 3/3/3).
- `overflow-x: clip` html DAN body. Input 44px, focus ring instan,
  slot error `min-h`, CTA `whitespace-nowrap`.

## 3. Motion (warisan, tetap)

- Durasi: mikro 120–200ms · reveal ≤700ms · scrub section. Stagger 60–100ms.
- Easing signature `cubic-bezier(0.16, 1, 0.3, 1)`. Tanpa pin.
- GSAP = scroll-linked; Framer = state-triggered; tidak ada properti ganda.
- Reduced-motion fallback + varian mobile ringan untuk semua motion berat.

## 4. Tracking events (warisan, tetap)

`hero_cta_quote` · `hero_cta_explore` · `product_line_click` ·
`numbers_section_viewed` · `testimonial_slide_change` · `faq_item_open` ·
`quote_submit` · `quote_whatsapp_click` · `closing_cta_quote` ·
`footer_link_click` — via `lib/analytics:track`, tanpa hardcode gtag di komponen.

## 5. SEO (warisan, tetap)

Satu `<h1>` per halaman · meta + OG + twitter per route · Organization schema
JSON-LD · `sitemap.ts` + `robots.ts` · alt bermakna semua gambar ·
poster = LCP (`priority` + `fetchpriority="high"`, tanpa lazy).

## 6. Performance budget (warisan, tetap)

Hero video (bila masuk): H.264 + WebM, ≤1080p, loop <15s, poster wajib,
`preload="none"`. Gambar: `next/image` WebP, `sizes`, lazy kecuali LCP.
Font: subset + `display: swap`. Target: LCP < 2,5s · INP < 200ms · CLS < 0,1.

## 7. Shot-list foto asli (warisan `09` lama, tetap)

Close-up kelapa · tangan memproses · tekstur kopra/tempurung · kiln/tungku ·
produksi · orang bekerja (candid) · landscape Katapiang · gudang · karung +
label · muat barang · tim (nama + peran) · video loop bara <15s.
Tone: sinematik + natural + dokumenter. Tanpa foto CSR generik.
