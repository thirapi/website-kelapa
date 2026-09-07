# Patokan Anti-Slop — Hancoco

**Sumber:** `nutlope/hallmark` (MIT) — skill anti-AI-slop. Diambil **isinya saja**,
diadaptasi ke stack kita (Next.js + Tailwind v4 + tema Tropical Heritage).
Bukan skill, bukan template — patokan review sebelum push.

> Prinsip Hallmark yang kita adopsi penuh: *dua brief berbeda harus terasa seperti
> situs berbeda, bukan colour-swap satu template.* Struktur kita dikunci PRD
> (`01`, `04`, `05`), jadi anti-slop ditegakkan di **detail eksekusi**, bukan layout.

---

## 1. Self-critique sebelum touring (6 sumbu, skor 1–5)

Skor < 3 di sumbu mana pun = revisi dulu. Dua putaran wajar; tiga = brief-nya yang salah.

| # | Sumbu | Arti untuk Hancoco |
|---|-------|--------------------|
| A | Philosophy | Ada posisi yang diambil? (*farm-to-export partner*, bukan farm stand) |
| B | Hierarchy | Dalam 2 detik jelas primer/sekunder/tersier? |
| C | Execution | Ring focus, kontras, text-wrap, safelist — tidak ada yang asal |
| D | Specificity | Terlihat seperti *eksportir kelapa*, bukan SaaS generik? |
| E | Restraint | Semua yang tidak menghasilkan nilainya sudah dibuang? |
| F | Variety | Antar-section tidak berbagi fingerprint struktural yang sama? |

---

## 2. Gate checklist (dipetakan ke komponen kita)

### Visual — auto-fail bila YA
- [ ] Font display = Inter/system default? → harus Space Grotesk + Inter (2 family, `globals.css`).
- [ ] Gradien ungu-biru / gradient text? → dilarang. Bloom radial ember ≤ 15% kanvas masih OK (atmospheric).
- [ ] Grid 3 kartu seragam (ikon-atas-judul-copy)? → dilarang PRD §3 Design System; showcase/produk pakai span asimetris.
- [ ] Card-in-card / side-stripe tebal / hitam-putih murni? → dilarang.
- [ ] Hero centred-everything 100dvh? → hero kita left-aligned; CTA closing centered tanpa eyebrow masih OK.
- [ ] Nav generik (wordmark kiri, link tengah, CTA kanan, sticky putih)? → nav kita Export House Bar (nomor rundown + progress + underline aktif).
- [ ] Footer 4 kolom SaaS? → footer kita strip tunggal penutup.

### Motion & interaksi
- [ ] `transition-all` di mana pun? → sebutkan properti (`transition-[background-color,...]`).
- [ ] `hover:scale` seragam lintas elemen? → satu sinyal per elemen (primary lift, secondary border-shift).
- [ ] Animasi `width/height/top/left/margin/padding`? → dilarang (dots pakai opacity/scale).
- [ ] Focus ring fade-in / hilang tanpa pengganti? → ring instan via `:focus-visible` (`globals.css`).
- [ ] Autoplay tanpa pause-hover-focus? → deck testimonial wajib pause (sudah).
- [ ] Sukses dirayakan berlebihan? → panel pengganti form, bukan toast.
- [ ] Scroll-reveal di semua section tanpa henti? → batasi ke Fase 2 set; sisanya statis.

### Form (8 state: default, hover, focus, active, disabled, loading, error, success)
- [ ] Border-width berubah antar state? → 1px konstan; sinyal via outline/border-color.
- [ ] Focus tanpa outline? → `outline: 2px ember` instan di `globals.css`.
- [ ] Error menggeser layout? → slot `min-h` selalu dirender.
- [ ] Disabled hanya opacity? → + `cursor-not-allowed` + atribut native.
- [ ] Input vs button beda tinggi? → samakan 44px (`py-3`).

### Tipografi & copy
- [ ] > 3 family font? → maksimal 2 (+ tabular-nums, bukan mono).
- [ ] Italic di heading? → dilarang; penekanan via weight/warna/underline.
- [ ] Kata banned: seamless, unleash, elevate, empower, delight, supercharge, "built for the modern team", "where X meets Y", emoji sebagai ikon.
- [ ] Tanda baca: curly quotes `“ ”`, em-dash `—`, ellipsis `…` — bukan versi ASCII.
- [ ] CTA boleh wrap 2 baris? → tidak; `whitespace-nowrap` + parent reflow.

### Layout safety (wajib tiap viewport 320–1920)
- [ ] `overflow-x: clip` di **html DAN body** (bukan `hidden` — jaga sticky/fixed).
- [ ] Grid berisi gambar pakai `minmax(0, 1fr)` (bawaan `grid-cols-*` Tailwind sudah).
- [ ] Satu warna netral zero-chroma? → semua token kita warm-tinted.
- [ ] Aksen > 5% viewport? → announcement ±4% masih OK; sisanya spot.

---

## 3. Deviasi sadar (dicatat, bukan dilanggar diam-diam)

| # | Deviasi | Alasan |
|---|---------|--------|
| 1 | Angka kapasitas (120+/200+/dst) belum terverifikasi | Menunggu stakeholder (`00` §6). Jangan jadikan klaim final. |
| 2 | Reveal per-section (bukan satu entrance) | Keputusan Fase 2; subtle + once-only. Matikan bila terasa ramai. |
| 3 | Testimoni anonim ("Buyer — BBQ Distributor") | Menunggu approval logo (`01` §8). |
| 4 | Struktur dikunci PRD, bukan 21 macrostructure | Anti-slop ditegakkan di detail, bukan variasi layout. |
| 5 | Kartu contoh batch Traceability | Jelas berlabel "Contoh format" — menunjukkan sistem, bukan klaim data. |

---

## 4. Cara pakai

Sebelum push: jalan checklist §2, catat deviasi baru ke §3 bila ada.
Perintah audit manual: `grep -rn "transition-all" src/` harus kosong.
(Zoom foto masonry `scale-[1.03]` dikecualikan — satu sinyal pada media, bukan lift kartu.)
