# Patokan Anti-Slop — COCO KATAPIANG

**Sumber:** `nutlope/hallmark` (MIT) — diambil **hanya ketentuan yang mengubah
desain** (tata letak, gerak, state visual, tipografi, safety viewport).
Aturan copywriting, backend, dan operasional skill TIDAK masuk sini.
Bukan skill, bukan template — patokan review sebelum push.

> Struktur dikunci PRD (`01`, `04`, `05`), jadi anti-slop ditegakkan di
> **detail eksekusi**, bukan variasi layout.

---

## 1. Self-critique sebelum touring (6 sumbu, skor 1–5)

Skor < 3 di sumbu mana pun = revisi dulu.

| # | Sumbu | Arti untuk COCO KATAPIANG |
|---|-------|---------------------------|
| A | Philosophy | Ada posisi visual yang diambil? (produsen serius, bukan proyek CSR) |
| B | Hierarchy | Dalam 2 detik jelas primer/sekunder/tersier? |
| C | Execution | Ring focus, kontras, text-wrap — tidak ada yang asal |
| D | Specificity | Terlihat seperti *brand kelapa*, bukan SaaS generik? |
| E | Restraint | Semua yang tidak menghasilkan nilainya sudah dibuang? |
| F | Variety | Antar-section tidak berbagi fingerprint struktural yang sama? |

---

## 2. Gate checklist desain

### Visual — auto-fail bila YA
- [ ] Font display generik (Inter/system)? → Plus Jakarta Sans tunggal (display 700–800, body 400–600).
- [ ] Gradien ungu-biru / gradient text? → dilarang. Bloom radial coklat ≤ 15% kanvas OK.
- [ ] Grid 3 kartu seragam? → dilarang; pakai span asimetris (§3 Design System).
- [ ] Card-in-card / side-stripe tebal / hitam-putih murni? → dilarang.
- [ ] Hero centred-everything? → hero left-aligned; CTA closing centered tanpa eyebrow OK.
- [ ] Emoji sebagai ikon / campur 2 library ikon? → Lucide saja (`ui/icons.ts`).
- [ ] Italic di heading? → dilarang; penekanan via weight/warna/underline.
- [ ] CTA wrap 2 baris? → `whitespace-nowrap` + parent reflow.
- [ ] Tanda baca ASCII (`"..."`, `--`, `"..."`)? → curly `“ ”`, em-dash `—`, ellipsis `…`.

### Motion & interaksi
- [ ] `transition-all` di mana pun? → sebutkan properti spesifik.
- [ ] `hover:scale` seragam lintas elemen? → satu sinyal per elemen.
- [ ] Animasi `width/height/top/left/margin/padding`? → dilarang (dots pakai opacity/scale).
- [ ] Focus ring fade-in / hilang tanpa pengganti? → ring instan `:focus-visible`.
- [ ] Autoplay tanpa pause-hover-focus? → wajib pause (deck testimonial).
- [ ] Scroll-reveal di semua section tanpa henti? → batasi ke set Fase 2.

### State visual form (mengubah CSS — bukan redaksi pesan)
- [ ] Border-width berubah antar state? → 1px konstan; sinyal via outline/border-color.
- [ ] Focus tanpa outline? → `outline: 2px` instan di `globals.css`.
- [ ] Error menggeser layout? → slot `min-h` selalu dirender.
- [ ] Disabled hanya opacity? → + `cursor-not-allowed` + atribut native.
- [ ] Input vs button beda tinggi? → samakan 44px.

### Layout safety (wajib tiap viewport 320–1920)
- [ ] `overflow-x: clip` di **html DAN body** (bukan `hidden`).
- [ ] Grid berisi gambar tanpa `minmax(0, 1fr)`? → bawaan `grid-cols-*` Tailwind sudah.
- [ ] Netral zero-chroma / aksen > 5% viewport? → token warm-tinted; aksen spot.

---

## 3. Deviasi sadar (dicatat, bukan dilanggar diam-diam)

| # | Deviasi | Alasan |
|---|---------|--------|
| 1 | Angka kapasitas belum terverifikasi | Menunggu stakeholder (`00` §6). Bukan klaim final. |
| 2 | Reveal per-section (bukan satu entrance) | Keputusan Fase 2; subtle + once-only. |
| 3 | Testimoni anonim | Menunggu approval (`01` §8). |
| 4 | Struktur dikunci PRD | Anti-slop di detail, bukan variasi layout. |
| 5 | Kartu contoh batch Traceability | Berlabel "Contoh format" — sistem, bukan klaim. |

---

## 4. Cara pakai

Sebelum push: jalan checklist §2, catat deviasi baru ke §3 bila ada.
Audit manual: `grep -rn "transition-all" src/` harus kosong.
(Zoom foto masonry `scale-[1.03]` dikecualikan — satu sinyal pada media.)
