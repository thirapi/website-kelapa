import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Products",
  description: "Copra, coconut shell charcoal and briquettes, export-ready, with custom packing. Coconut oil & VCO coming soon.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Our Products"
        intro="Three export-ready lines today, two in development. Every lot traceable to Katapiang, specified for world buyers."
        trail={[{ label: "Products" }]}
      />
      <ProductCatalog />
    </>
  );
}
