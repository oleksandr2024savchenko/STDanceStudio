import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LegalSection } from "@/lib/content/legal";

type Props = {
  eyebrow: string;
  title: string;
  /** Eigener Einleitungsblock, z. B. die Stammdaten im Impressum. */
  intro?: ReactNode;
  sections: readonly LegalSection[];
  footnote?: string;
};

/** Gemeinsames Layout für Impressum und Datenschutzerklärung. */
export function LegalPage({ eyebrow, title, intro, sections, footnote }: Props) {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <SectionHeader as="h1" eyebrow={eyebrow} title={title} />

        <div className="mx-auto mt-14 max-w-3xl space-y-10">
          {intro}
          {sections.map((section) => (
            <section key={section.heading} aria-labelledby={headingId(section.heading)}>
              <h2 id={headingId(section.heading)} className="text-2xl md:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
          {footnote && (
            <>
              <Ornament />
              <p className="text-center text-sm text-muted">{footnote}</p>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

function headingId(heading: string): string {
  return `legal-${heading
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}
