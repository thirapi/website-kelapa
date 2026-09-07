# Bar Properness — F1 · Pertamina · Stripe

**Posisi dokumen ini:** ketiga situs itu BUKAN contekan visual — mereka adalah
**contoh level "proper" yang dituju**: dibuka terasa meyakinkan, rapi,
fungsional, dan tepercaya. Bedah di bawah mengekstrak *standar*-nya
(apa yang membuat mereka terasa proper), bukan bentuknya.

**Metode:** bedah langsung homepage masing-masing (Sep 2026). Patagonia/Aesop
memblokir fetch bot — pola mereka (editorial commerce, earthy premium) sudah
diwakili arahan fotografi di `07` §1.3.

> Cara pakai: tiap pola punya status — ✅ sudah ada · ➕ ditambahkan kini ·
> ⬜ backlog. Tiru rasanya, bukan rupa-nya.

---

## 1. Formula 1 (formula1.com) — media hub + data

| Pola | Standar yang dicuri | Status kita |
|------|---------------------|-------------|
| Strip utilitas terpisah (Store/Tickets/F1 TV/Sign In) | Pisahkan **transaksi** (RFQ/Quote) dari **navigasi editorial** | ✅ CTA Quote selalu di nav |
| Hub konten: hero story + grid sekunder + rail video | Homepage = koran, bukan brosur (mendukung backlog Journal `07` §3) | ⬜ (Journal belum ada) |
| Tabel klasemen + kartu podium berfoto | Data BOLEH padat asal tabular-nums + foto | ✅ (`tnum`, spec table) |
| Rail video + **durasi** (8:12) di thumbnail | Setiap video cantumkan durasi & poster; LCP jangan lazy | ✅ poster priority; ⬜ durasi saat video masuk |
| CDN gambar berukuran (w_448/w_1584) + **alt deskriptif tiap gambar** | Responsive `sizes` + alt bermakna, bukan "image1" | ✅ (`sizes`, alt) |
| Skip-to-content link | Wajib ada | ✅ (layout) |
| Footer legal dalam (Terms, Privacy, Cookies, Accessibility Statement, Code of Conduct) | Footer serius = kepercayaan B2B | ⬜ rute legal belum ada — JANGAN pasang link mati |
| Logo wall partner + halaman app download | Bukti ekosistem visual | ⬜ (butuh aset logo Pertamina) |

## 2. Pertamina (pertamina.com) — korporat Indonesia

| Pola | Standar yang dicuri | Status kita |
|------|---------------------|-------------|
| Switcher bahasa ID/EN | Siapkan slot i18n sejak awal | ⬜ (open question `00` §6) |
| Announcement + pengadaan + keterbukaan informasi publik | Transparansi = trust ala BUMN | ➕ adaptasi: catatan anti-penipuan di Contact |
| **"Waspada Penipuan"** + Whistle Blowing + Call Center 135 | Program yang pegang uang/transaksi WAJIB punya ini | ➕ microcopy anti-penipuan (tanpa rute baru) |
| Footer jaringan (subholding) + tools + kontak + sosmed lengkap | Footer = peta situs, bukan hiasan | ✅ struktur; ⬜ perdalam saat rute legal ada |
| Alamat + email resmi di footer | Identitas kontak konkret | ✅ (placeholder, ganti saat final) |

## 3. Stripe (stripe.com) — B2B conversion benchmark

| Pola | Standar yang dicuri | Status kita |
|------|---------------------|-------------|
| CTA ganda (Start now + Contact sales) | Selalu sediakan jalur cepat DAN jalur konsultasi | ✅ (Quote + WhatsApp berdampingan) |
| Proof bar angka raksasa BERNAMA (US$1.9tn, 99.999%) | Angka hanya yang riil — selaras anti-slop `06` §3 deviasi 1 | ✅ (angka = placeholder bertanda) |
| Testimoni bernama + perusahaan + metrik | Anonim = lemah; kejar approval logo (`01` §8) | ⬜ |
| Segmentasi solusi (enterprise/startup/platform) | Bicara per persona (`00` §2.1), bukan satu sapaan | ⬜ copy menyusul |
| Status page + changelog + docs + sitemap + locale selector | Infrastruktur kepercayaan engineering | ✅ sitemap/robots; ⬜ status/changelog/docs |
| Annual letter / laporan | Ritme publikasi = kredibilitas hidup | ⬜ (masuk akal via Journal) |

---

## 4. Adopsi visual — blend selektif (diputuskan)

Hanya yang koheren dengan tema putih-coklat. Yang bertabrakan **ditolak eksplisit**.

| Sumber | Diambil | Ditolak + alasan |
|--------|---------|------------------|
| F1 | Badge hero jadi **chip solid ember** (race-tag) · trust row faktual di hero · tabel spec gaya klasemen (header tebal + hover baris) | Headline miring & tema gelap-merah (tabrakan tema + anti-slop gate 38a) · sudut miring/diagonal (tabrakan fade-mask) |
| Pertamina | Trust row korporat · microcopy anti-penipuan · footer beridentitas konkret | Biru korporat · kepadatan link BUMN (tabrakan footer strip anti-slop) |
| Stripe | Ritme terang lega · CTA ganda berdampingan | Mesh gradient & playful 3D (dilarang anti-slop) · ilustrasi stok |

> Prinsip blend: satu situs, satu suara. Referensi adalah bumbu, bukan menu.

---

## 5. Checklist universal (gabungan ketiganya)

- [ ] Skip link, heading tunggal, alt bermakna, focus terlihat — ✅
- [ ] Gambar responsif (`sizes`), LCP prioritas — ✅
- [ ] Sitemap + robots — ✅
- [ ] Legal footer (Terms/Privacy/Cookies) — ⬜ tanpa link mati
- [ ] i18n ID/EN — ⬜
- [ ] Anti-penipuan & kontak resmi — ➕ kini
- [ ] Angka karena data, bukan dekorasi — ✅ (ditandai)
- [ ] Durasi pada setiap video — ⬜ (saat video masuk)
