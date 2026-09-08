import Link from "next/link";
import { Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center">
      <Container className="py-32 text-center">
        <p className="tnum font-display text-7xl font-bold text-ember">404</p>
        <h1 className="font-display mt-4 text-3xl font-bold md:text-5xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The URL you requested does not exist — it may have moved or been mistyped.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-base"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-paper/25 px-6 py-3 text-sm font-semibold hover:border-paper/50"
          >
            View Products
          </Link>
        </div>
      </Container>
    </div>
  );
}
