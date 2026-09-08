"use client";

import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { track } from "@/lib/analytics";
import { Icons } from "@/components/ui/icons";

export function AddToInquiry({
  product,
  compact = false,
}: {
  product: string;
  compact?: boolean;
}) {
  const { add, lines } = useInquiry();
  const added = lines.some((l) => l.product === product);

  return (
    <button
      type="button"
      onClick={() => {
        add({ product, quantity: "1 × 20ft container" });
        track("inquiry_add", { product });
      }}
      className={
        compact
          ? "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-4 py-2 text-xs font-bold text-cream transition-[background-color,transform] duration-200 hover:bg-brand-deep active:translate-y-px"
          : "inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream transition-[background-color,transform,box-shadow] duration-200 hover:bg-brand-deep hover:shadow-lg hover:shadow-brand/25 active:translate-y-px"
      }
    >
      {added ? <Icons.Check size={16} aria-hidden /> : <Icons.ShoppingBag size={16} aria-hidden />}
      {added ? "In Inquiry List" : "Add to Inquiry"}
    </button>
  );
}
