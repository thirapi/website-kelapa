# 01 — Design System (desain Pertamina, isi COCO)

Mengambil dari `pertamina.com` **hanya yang desain**: keterbacaan korporat,
navigasi tegas, tabel data, footer berkolom, keterbukaan visual (badge,
dokumen, kontak konkret). Tujuan bisnis Pertamina (investor, subholding,
PPID, whistleblowing, karier, portal mitra) TIDAK masuk — tidak ada di konten kita.

## 1. Token (putih + coklat, tetap)

`--base #FAF6EF` · `--surface #FFFFFF` · `--surface-alt #EFE7D8` ·
`--ink #2B1D12` · `--muted #6E5F50` (≥4,5:1) · `--brand #7A4E1F` (CTA/focus) ·
`--palm #304B38` (badge sustainability SAJA). Rasio 70 terang / 20 gelap /
7 hijau / 3 coklat.

## 2. Tipografi

Plus Jakarta Sans tunggal — display 700–800, body 400–600. Tabular-nums
untuk data. Italic dilarang di heading. CTA satu baris (`whitespace-nowrap`).

## 3. Pola desain yang diambil dari Pertamina

- **Header**: wordmark + badge program, nav tegas, CTA Inquire, hairline progress.
  Drawer fullscreen + Esc di mobile.
- **Announcement**: satu baris dismissible (+ arsip di Journal berkategori).
- **Trust row**: 3 fakta di bawah hero.
- **Tabel data** (gaya klasemen): header tebal + hover baris — untuk spec & data.
- **Kartu contoh berlabel** ("Sample format") untuk menunjukkan sistem.
- **Footer berkolom**: Shop · Company · Support · Contact + alamat/email/WA/sosmed
  + baris copyright. Tanpa link mati.
- **Breadcrumb** "Home / …" tiap halaman. Skip-link. `overflow-x: clip` html+body.

## 4. Motion & anti-slop (tetap)

Easing signature, GSAP = scroll / Framer = state, tanpa properti ganda.
Dilarang: `transition-all`, hover-scale seragam, animasi width, autoplay tanpa
pause, eyebrow >2/halaman, grid tak habis dibagi. Reduced-motion fallback +
varian mobile ringan untuk semua motion berat.

## 5. Standarisasi varian (beda rupa, satu suara)

Prinsip: komponen BOLEH bervarian asal dari token yang sama. Di luar daftar
ini = slop.

- **Radius**: `full` (button, chip, badge, dots) · `rounded-xl` (kotak ikon, input)
  · `rounded-2xl` (kartu, gambar, panel form). Dilarang radius lain.
- **Button**: tinggi 44px (`py-3`), `px-6`, `text-sm semibold`, `rounded-full`,
  `whitespace-nowrap`, ikon `gap-1.5/2` + panah gerak hover. Varian:
  primary (brand fill + teks terang + lift hover) vs secondary
  (border + shift hover). Focus ring instan, pressed-in `translate-y-px`,
  disabled 3-sinyal.
- **Section**: `py-24/md:py-32` default · `py-16/md:py-24` compact ·
  band gelap hanya momen signature (max ~20% halaman).
- **Eyebrow** (maks 2/halaman): `text-xs font-bold tracking-[0.25em]
  uppercase text-ember`, selalu di atas H2 dalam kolom yang sama.
- **Border**: 1px `--line` untuk kartu/tabel/divider; hover → `brand/40-50`.
  Tanpa border ganda, tanpa side-stripe tebal.
- **Shadow**: whisper saja; glow coklat hanya CTA primer.
- **Ikon**: Lucide SAJA via registri tunggal; `size 20-22`, stroke 1.75;
  sebaris judul (bukan tile), dalam kotak `rounded-xl brand/10`.
- **Angka**: selalu `tabular-nums`; counter ≤2 detik, format lokal.
