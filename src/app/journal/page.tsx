import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { JournalGrid } from "@/components/journal/JournalGrid";

export const metadata: Metadata = {
  title: "Journal",
  description: "Origin stories, process notes, product updates and market notes from Katapiang.",
};

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes from Katapiang."
        intro="Origin stories, process discipline, product updates and market notes, written by the people who make the product."
        trail={[{ label: "Journal" }]}
      />
      <Section className="pt-10 md:pt-14">
        <Container>
          <JournalGrid />
        </Container>
      </Section>
    </>
  );
}
