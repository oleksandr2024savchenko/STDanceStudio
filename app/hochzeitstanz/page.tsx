import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { FactsDock } from "@/components/sections/FactsDock";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { PrincipleCards } from "@/components/sections/PrincipleCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WeddingBooking } from "@/components/sections/WeddingBooking";
import { Button } from "@/components/ui/Button";
import { SocialProof } from "@/components/ui/SocialProof";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  weddingBenefits,
  weddingFacts,
  weddingFaq,
  weddingOffers,
  weddingSteps,
} from "@/lib/content/wedding";
import { buildServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Hochzeitstanz in Wien – Express oder Komplettpaket",
  description:
    "Ihr erster Tanz als Ehepaar: Hochzeitswalzer einstudieren in Wien – als Express in 4 Einheiten oder als individuelle Komplettchoreografie. Jetzt unverbindlich anfragen.",
  path: "/hochzeitstanz",
});

export default function HochzeitstanzPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Hochzeitstanz einstudieren in Wien",
          description:
            "Einstudierung des Hochzeitstanzes für Brautpaare in Wien: Express in 4 Einheiten oder individuelle Komplettchoreografie.",
          path: "/hochzeitstanz",
          offers: weddingOffers,
        })}
      />

      <Hero
        badge="Hochzeitstanz • Wien 1040"
        title={"Ihr erster Tanz\nals *Ehepaar*"}
        description="Wir studieren Ihren Hochzeitswalzer ein – als Express in vier Einheiten oder als individuelle Komplettchoreografie. Persönlich betreut von Oleksandr."
        actions={
          <>
            <Button href="#anfrage" size="lg">
              Unverbindlich anfragen
            </Button>
            <Button href="#pakete" size="lg" variant="outline">
              Pakete ansehen
            </Button>
          </>
        }
        proof={
          <SocialProof initials={["O"]}>
            Persönlich betreut von Oleksandr – auch ohne Tanzerfahrung
          </SocialProof>
        }
        media={{
          src: "/images/hero-wedding.jpg",
          alt: "Brautpaar beim ersten Tanz in einem hellen Saal mit hohen Fenstern und Parkettboden",
        }}
      />
      <FactsDock facts={weddingFacts} label="Hochzeitstanz im Überblick" />

      <Section id="vorteile">
        <SectionHeader
          eyebrow="Ihre Vorteile"
          title="Souverän tanzen – *ohne Vorkenntnisse*"
          description="Ein gelungener Eröffnungstanz bleibt in Erinnerung. Wir sorgen dafür, dass Sie ihn genießen können."
        />
        <div className="mt-16">
          <PrincipleCards principles={weddingBenefits} />
        </div>
      </Section>

      <Section id="ablauf" className="bg-canvas-alt">
        <SectionHeader
          eyebrow="Ablauf"
          title="Von der Anfrage zum *ersten Tanz*"
          description="Vier klare Schritte – ohne Aufwand für Sie."
        />
        <Reveal className="mt-16">
          <ProcessSteps steps={weddingSteps} />
        </Reveal>
      </Section>

      <WeddingBooking />

      <FaqSection
        className="bg-canvas-alt"
        title="Fragen rund um Ihren *Hochzeitstanz*"
        description="Weitere Fragen beantworten wir gerne persönlich."
        items={weddingFaq}
      />
    </>
  );
}
