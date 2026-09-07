export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT = {
  whatsapp: "https://wa.me/6200000000000",
  email: "mailto:info@nagarikatapiang.id",
  emailText: "info@nagarikatapiang.id",
  address: "Nagari Katapiang, Padang Pariaman, Sumatera Barat",
  // Ganti dengan alamat balai/gudang final bila sudah ditetapkan
  mapsQuery: "Katapiang, Batang Anai, Padang Pariaman",
} as const;
