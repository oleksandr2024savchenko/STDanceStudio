import type { Metadata } from "next";
import { ExtraServicesAccordion } from "@/components/sections/ExtraServicesAccordion";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { extraServices, featuredServices } from "@/lib/content/leistungen";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Alle Leistungen – Show, Hochzeitstanz, Ballvorbereitung & Wiener Walzer",
  description:
    "Show und Balleröffnungen, Hochzeitstanz, Ballvorbereitung und Wiener Walzer zum Ausprobieren: Alle Leistungen von ST Dance Studio in Wien auf einen Blick.",
  path: "/alle-leistungen",
});

export default function AlleLeistungenPage() {
  return (
    <>
      <Section className="pb-12 pt-16 md:pb-16 md:pt-24">
        <SectionHeader
          as="h1"
          eyebrow="Alle Leistungen"
          title="Tanzen für *besondere Anlässe*"
          description="Unsere Schwerpunkte: der große Auftritt auf dem Ball und der erste Tanz als Ehepaar. Dazu Ballvorbereitung und ein Hauch Wiener Flair."
        />
        <div className="mt-14">
          <FeaturedServices items={featuredServices} />
        </div>
      </Section>

      <Section className="bg-canvas-alt pt-16 md:pt-20">
        <Reveal>
          <p className="mb-10 text-center text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            Außerdem im Angebot
          </p>
          <ExtraServicesAccordion items={extraServices} />
        </Reveal>
      </Section>
    </>
  );
}
