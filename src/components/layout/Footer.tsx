import Link from "next/link";
import { CONTACT, NAV_LINKS } from "@/content/site";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base">
      <Container className="py-14">
        <Reveal>
          <p className="font-display text-2xl font-bold">
            Coconut Products, Global Standard.
          </p>
          <p className="mt-2 max-w-md text-sm text-muted">
            Coconut shell charcoal & premium copra — consistent, traceable,
            export-ready.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm text-muted">
            <a href={CONTACT.whatsapp} className="hover:text-paper">
              WhatsApp
            </a>
            {" · "}
            <a href={CONTACT.email} className="hover:text-paper">
              {CONTACT.emailText}
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} Hancoco. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
