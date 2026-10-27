import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { legalUpdated, privacySections } from "@/lib/content/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von ST Dance Studio: Welche Daten wir verarbeiten, wie Ihre Anfragen übermittelt werden und welche Rechte Ihnen zustehen.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      sections={privacySections}
      footnote={`Stand: ${legalUpdated}`}
    />
  );
}
