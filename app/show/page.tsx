import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { FactsDock } from "@/components/sections/FactsDock";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { PrincipleCards } from "@/components/sections/PrincipleCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ShowRequestSection } from "@/components/sections/ShowRequestSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialProof } from "@/components/ui/SocialProof";
import { Tanzkarte } from "@/components/ui/Tanzkarte";
import {
  showBenefits,
  showFacts,
  showFaq,
  showProcess,
  showProgram,
} from "@/lib/content/show";
import { buildServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Show & Balleröffnungen in Wien – Choreografie für Ihren Ball",
  description:
    "Balleröffnung, Mitternachtseinlage und Formationen für Wiener Bälle und Galaabende: Wir choreografieren Ihren Auftritt und studieren ihn mit Ihrem Komitee ein. Jetzt unverbindlich anfragen.",
  path: "/show",
});

export default function ShowPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Show und Balleröffnung in Wien",
          description:
            "Choreografie und Einstudierung von Balleröffnungen, Mitternachtseinlagen und Formationen für Wiener Bälle und Galaabende.",
          path: "/show",
          offers: [],
        })}
      />

      <Hero
        badge="Show & Balleröffnungen • Wien"
        title={"Der große\n*Auftritt*\nIhres Balls"}
        description="Balleröffnung, Mitternachtseinlage oder große Formation: Wir choreografieren Ihren Auftritt für Wiener Bälle und Galaabende – von der ersten Idee bis zum Einzug."
        actions={
          <>
            <Button href="#anfrage" size="lg">
              Unverbindlich anfragen
            </Button>
            <Button href="#leistungen" size="lg" variant="outline">
              Leistungen ansehen
            </Button>
          </>
        }
        proof={
          <SocialProof initials={["O", "T"]}>
            Persönlich betreut von Oleksandr und Tania – auch für Komitees ohne Tanzerfahrung
          </SocialProof>
        }
        media={{
          src: "/images/hero-ballroom.jpg",
          alt: "Tanzpaar in klassischer Standardhaltung auf einem Parkettboden in einem hellen Wiener Saal",
        }}
      />
      <FactsDock facts={showFacts} label="Show und Balleröffnung im Überblick" />

      <Section id="leistungen">
        <SectionHeader
          eyebrow="Leistungen"
          title="Choreografien für den *großen Auftritt*"
          description="Vom Eröffnungswalzer eines Paares bis zur großen Formation: Wir choreografieren Balleröffnungen und Einlagen für Wiener Bälle und Galaabende."
        />
        <Reveal className="mx-auto mt-16 max-w-3xl">
          <Tanzkarte
            title="Programm Ihres Balls"
            subtitle="Nach Ihrem Motto choreografiert"
            label="Unsere Leistungen für Ihre Veranstaltung"
            sections={showProgram}
          />
          <p className="mt-6 text-center text-sm text-muted">
            Welche Nummern auf Ihrer Tanzkarte stehen, entscheiden wir gemeinsam mit Ihnen.
          </p>
        </Reveal>
      </Section>

      <Section id="vorteile" className="bg-canvas-alt">
        <SectionHeader
          eyebrow="Ihre Vorteile"
          title="Ein Auftritt, der *in Erinnerung bleibt*"
          description="Gute Choreografie ist Handwerk und Gespür für den Moment. Wir sorgen dafür, dass Ihr Auftritt gelingt."
        />
        <div className="mt-16">
          <PrincipleCards principles={showBenefits} />
        </div>
      </Section>

      <Section id="ablauf">
        <SectionHeader
          eyebrow="Ablauf"
          title="Vom Briefing *zum Einzug*"
          description="Drei klare Schritte – mit festen Ansprechpersonen und ohne Aufwand für Sie."
        />
        <Reveal className="mt-16">
          <ProcessSteps steps={showProcess} />
        </Reveal>
      </Section>

      <ShowRequestSection />

      <FaqSection
        className="bg-canvas-alt"
        title="Fragen rund um *Ihren Auftritt*"
        description="Weitere Fragen beantworten wir gerne persönlich."
        items={showFaq}
      />
    </>
  );
}
