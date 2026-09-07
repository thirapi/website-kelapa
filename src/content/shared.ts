// docs/04-PRD-Other-Pages.md §1 About + §3 Process + §4 Contact (shared)
// Konteks: program Desa Energi Berdikari (DEB) Pertamina — Nagari Katapiang.

export const PROCESS_STEPS = [
  { title: "Lahan Petani", desc: "Kelapa dari lahan & kemitraan petani nagari." },
  { title: "Panen & Sortir", desc: "Seleksi bahan baku — hanya yang memenuhi standar." },
  { title: "Pengolahan", desc: "Karbonisasi / pengeringan terkontrol per tipe produk." },
  { title: "QC", desc: "Uji moisture, ash, size, purity per batch." },
  { title: "Pengemasan", desc: "Jute bag, karton, inner — sesuai pesanan pembeli." },
  { title: "Distribusi", desc: "Pengepakan, dokumen, kirim ke pembeli." },
] as const;

export const NUMBERS = [
  { value: 120, suffix: "+", label: "Ton/bulan charcoal" },
  { value: 200, suffix: "+", label: "Ton/bulan copra" },
  { value: 10, suffix: "+", label: "Tahun pengalaman" },
  { value: 12, suffix: "", label: "Mitra & daerah pasar" },
] as const;

export const CERTIFICATIONS = [
  "Perizinan usaha nagari",
  "QC documentation per batch",
  "Food-grade handling",
  "Traceable origin",
] as const;

export const FAQS = [
  {
    q: "Berapa MOQ (minimum order)?",
    a: "Mulai 1 × 20ft container untuk charcoal/briket, 25 ton untuk kopra. Sample kecil bisa didiskusikan.",
  },
  {
    q: "Berapa lead time produksi & pengiriman?",
    a: "14–28 hari tergantung produk & volume. Jadwal pasti dikonfirmasi saat RFQ.",
  },
  {
    q: "Apakah spesifikasi terdokumentasi per pengiriman?",
    a: "Ya — QC per batch (moisture, ash, size, purity) + dokumen lengkap.",
  },
  {
    q: "Bagaimana packaging & private label?",
    a: "Jute bag, karton, inner custom. Private label tersedia untuk kontrak volume.",
  },
  {
    q: "Bagaimana cara meminta penawaran?",
    a: "Isi form Request Quote atau chat WhatsApp — tim nagari follow-up dengan proforma.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Pasokan konsisten, dokumen rapi. Partner yang bisa dipegang.",
    name: "Distributor BBQ",
    origin: "Jakarta",
  },
  {
    quote: "Briket stabil, ash rendah. Repeat order tiap bulan.",
    name: "Shisha Brand",
    origin: "Surabaya",
  },
  {
    quote: "Kopra bersih, rendemen minyak bagus.",
    name: "Pabrik Minyak Kelapa",
    origin: "Medan",
  },
] as const;

export const INDUSTRIES = [
  { name: "Shisha / Hookah", product: "Briket hexagon · low ash" },
  { name: "BBQ & Grill", product: "Lump charcoal · long burn" },
  { name: "Industrial", product: "Bulk charcoal · custom spec" },
  { name: "Food / Coconut Oil", product: "Kopra kering · rendemen tinggi" },
  { name: "HoReCa", product: "Briket pillow · packing ritel" },
] as const;

export const JOURNEY = [
  { year: "2015", title: "Awal kemitraan petani", desc: "Jaringan lahan awal terbentuk." },
  { year: "2018", title: "Kapasitas karbonisasi naik", desc: "Investasi kiln & drying." },
  { year: "2021", title: "Pasokan rutin", desc: "Kontrak distributor antar-pulau." },
  { year: "2024", title: "QC terdokumentasi penuh", desc: "Batch testing + traceability." },
] as const;

export const VALUES = [
  { icon: "repeat", title: "Consistency", desc: "Pengiriman yang bisa diprediksi — batch demi batch." },
  { icon: "shield", title: "Integrity", desc: "Spec sesuai dokumen. Tidak ada yang ditutup-tutupi." },
  { icon: "recycle", title: "Sustainability", desc: "Tempurung sisa panen jadi energi — bukan sampah." },
  { icon: "badge", title: "Quality", desc: "Diuji tiap batch: moisture, ash, size, purity." },
  { icon: "handshake", title: "Partnership", desc: "Tumbuh bersama pembeli dan petani nagari." },
  { icon: "eye", title: "Transparency", desc: "Asal tertelusur sampai ke lahan." },
] as const;
