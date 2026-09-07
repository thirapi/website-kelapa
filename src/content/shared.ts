// docs/04-PRD-Other-Pages.md §1 About + §3 Process + §4 Contact (shared)

export const PROCESS_STEPS = [
  { title: "Lahan Petani", desc: "Kelapa dari lahan & kemitraan petani terkelola." },
  { title: "Panen & Sortir", desc: "Seleksi bahan baku — hanya yang memenuhi standar." },
  { title: "Pengolahan", desc: "Karbonisasi / pengeringan terkontrol per tipe produk." },
  { title: "QC", desc: "Uji moisture, ash, size, purity per batch." },
  { title: "Pengemasan", desc: "Jute bag, karton, inner — sesuai spec buyer." },
  { title: "Logistik Ekspor", desc: "Stuffing kontainer, dokumen ekspor, kirim." },
] as const;

export const NUMBERS = [
  { value: 120, suffix: "+", label: "Ton/bulan charcoal" },
  { value: 200, suffix: "+", label: "Ton/bulan copra" },
  { value: 10, suffix: "+", label: "Tahun pengalaman" },
  { value: 12, suffix: "", label: "Negara tujuan" },
] as const;

export const CERTIFICATIONS = [
  "Export permits",
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
    q: "Apakah spesifikasi terdokumentasi per shipment?",
    a: "Ya — QC per batch (moisture, ash, size, purity) + dokumen ekspor.",
  },
  {
    q: "Bagaimana packaging & private label?",
    a: "Jute bag, karton, inner custom. Private label tersedia untuk kontrak volume.",
  },
  {
    q: "Bagaimana cara meminta penawaran?",
    a: "Isi form Request Quote atau chat WhatsApp — tim sales follow-up dengan proforma.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Shipment konsisten, dokumen rapi. Partner pasokan yang bisa dipegang.",
    name: "Buyer — BBQ Distributor",
    origin: "Middle East",
  },
  {
    quote: "Briket stabil, ash rendah. Repeat order tiap bulan.",
    name: "Buyer — Shisha Brand",
    origin: "Europe",
  },
  {
    quote: "Kopra bersih, rendemen minyak bagus.",
    name: "Buyer — Coconut Oil Mill",
    origin: "Asia",
  },
] as const;

export const INDUSTRIES = [
  "Shisha / Hookah",
  "BBQ & Grill",
  "Industrial",
  "Food / Coconut Oil",
  "HoReCa",
] as const;

export const JOURNEY = [
  { year: "2015", title: "Awal kemitraan petani", desc: "Jaringan lahan awal terbentuk." },
  { year: "2018", title: "Kapasitas karbonisasi naik", desc: "Investasi kiln & drying." },
  { year: "2021", title: "Ekspor reguler", desc: "Kontrak distributor Asia & Middle East." },
  { year: "2024", title: "QC terdokumentasi penuh", desc: "Batch testing + traceability." },
] as const;

export const VALUES = [
  { title: "Consistency", desc: "Shipment yang bisa diprediksi." },
  { title: "Integrity", desc: "Spec sesuai dokumen." },
  { title: "Sustainability", desc: "Limbah jadi energi." },
  { title: "Quality", desc: "QC per batch." },
  { title: "Partnership", desc: "Tumbuh bersama buyer." },
  { title: "Transparency", desc: "Asal tertelusur." },
] as const;
