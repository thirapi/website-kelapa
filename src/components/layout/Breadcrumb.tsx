import Link from "next/link";
import { Container } from "@/components/ui/Section";

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-base">
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted">
          <li>
            <Link href="/" className="transition-colors duration-200 hover:text-brand">
              Home
            </Link>
          </li>
          {trail.map((t) => (
            <li key={t.label} className="flex items-center gap-1.5">
              <span aria-hidden className="text-line">/</span>
              {t.href ? (
                <Link href={t.href} className="transition-colors duration-200 hover:text-brand">
                  {t.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-ink">{t.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
