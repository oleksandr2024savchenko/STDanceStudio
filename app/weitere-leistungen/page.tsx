import type { Metadata } from "next";
import { ExtraServicesAccordion } from "@/components/sections/ExtraServicesAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { extraServices } from "@/lib/content/leistungen";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Weitere Leistungen – Ballvorbereitung, Wiener Walzer & Hochzeitstanz",
  description:
    "Ballvorbereitung, Wiener Walzer zum Ausprobieren und Hochzeitstanz in Wien: Persönlicher Unterricht von ST Dance Studio, auf Deutsch, Englisch, Ukrainisch und Russisch.",
  path: "/weitere-leistungen",
});

export default function WeitereLeistungenPage() {
  return (
    <Section className="pt-16 md:pt-24">
      <SectionHeader
        as="h1"
        eyebrow="Weitere Leistungen"
        title="Tanzen für *besondere Anlässe*"
        description="Ballvorbereitung, ein Hauch Wiener Flair oder der erste Tanz als Ehepaar: Wählen Sie, was zu Ihnen passt."
      />
      <Reveal className="mt-14">
        <ExtraServicesAccordion items={extraServices} />
      </Reveal>
    </Section>
  );
}
