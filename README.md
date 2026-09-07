# COCO KATAPIANG — Produk Kelapa Indonesia

**Brand:** COCO KATAPIANG — product & commerce brand dari Nagari Katapiang, Padang Pariaman.
**Program:** binaan Pertamina melalui Desa Energi Berdikari (DEB) — credibility layer, bukan headline.

**Stack:** Next.js (App Router) + Tailwind v4 + GSAP + Framer Motion + Lenis

Dokumentasi pengembangan di folder `docs/`:

| # | Dokumen | Isi |
|---|---------|-----|
| 00 | `00-Planning-Brief.md` | Brand, persona, benchmark, KPI, direction |
| 01 | `01-PRD-Landing-Page.md` | Spec section-by-section homepage |
| 02 | `02-PRD-Design-System.md` | "Tropical Heritage" theme, motion DNA, layout rules |
| 03 | `03-Workflow-Development.md` | Tech stack, phases, GSAP/Framer division of labor |
| 04 | `04-PRD-Other-Pages.md` | About, Products, Process, Contact |
| 05 | `05-PRD-Ecommerce.md` | Product catalog, cart, checkout |
| 06 | `06-Anti-Slop.md` | Patokan anti-AI-slop (dari nutlope/hallmark) + checklist pre-push |
| 07 | `07-Commerce-Blueprint.md` | Suling blueprint commerce eksternal: adopsi vs konflik vs backlog |

---

## Cara Pengembangan (Flow — dari Java Management)

1. **Dokumentasi dulu** — PRD lengkap sebelum kode (di folder `docs/`).
2. **Design System fix** — warna, tipografi, motion DNA, "no uniform cards" rule.
3. **Phased development** — Static → Light reveal → Signature interaction → Data/Integrasi → QA → Deploy.
4. **Library split rule** — GSAP = scroll-linked; Framer Motion = state-triggered. Tidak pernah keduanya mengontrol properti sama pada elemen sama.
5. **Content data decoupled** dari komponen, mudah migrasi CMS.
6. **Anti-slop** — cek `docs/06-Anti-Slop.md` sebelum push (grep `transition-all` harus kosong).

Lihat `docs/03-Workflow-Development.md` untuk detail teknis & urutan kerja.
