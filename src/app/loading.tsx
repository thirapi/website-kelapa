import { Container } from "@/components/ui/Section";

// Loading global — skeleton ringan saat navigasi antar-route.
export default function Loading() {
  return (
    <div className="flex flex-1 items-center">
      <Container className="py-32 text-center" width="narrow">
        <div
          aria-hidden
          className="mx-auto h-1.5 w-40 animate-pulse rounded-full bg-ember/70"
        />
        <p className="mt-4 text-sm text-muted">Memuat…</p>
      </Container>
    </div>
  );
}
