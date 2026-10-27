import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/FaqSection";
import { FactsDock } from "@/components/sections/FactsDock";
import { Hero } from "@/components/sections/Hero";
import { PricingSection } from "@/components/sections/PricingSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { SchnuppertrainingSection } from "@/components/sections/SchnuppertrainingSection";
import { TrainerTeamSection } from "@/components/sections/TrainerTeamSection";
import { TrainingGroupsSection } from "@/components/sections/TrainingGroupsSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { Button } from "@/components/ui/Button";
import { SocialProof } from "@/components/ui/SocialProof";
import { clubFacts, clubFaq } from "@/lib/content/club";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} – Kindertanzen, Turniertanz & Balleröffnungen in Wien` },
  description:
    "Kindertanzen und Jugendtraining in Wien-Wieden: Semesterkurs oder 10er-Block, Choreografien für Wiener Bälle und persönliches Coaching. Jetzt kostenloses Schnuppertraining vereinbaren.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Wien 1040 • Standard & Latein"
        title={"Tanzen mit\n*Haltung* –\nim Herzen von Wien"}
        description="Spielerischer Einstieg, ernsthafte Technik: Bei uns lernen Kinder und Jugendliche Standard- und Lateintänze, Haltung und Etikette – vom ersten Schritt bis zur Wiener Balleröffnung."
        actions={
          <>
            <Button href="#schnuppertraining" size="lg">
              Kostenloses Schnuppertraining
            </Button>
            <Button href="/show" size="lg" variant="outline">
              Show & Balleröffnungen
            </Button>
          </>
        }
        proof={
          <SocialProof initials={["O", "T"]}>
            Offizielles Training für Kinder & Jugendliche ab 4 Jahren
          </SocialProof>
        }
        media={{
          src: "/images/hero-ballroom.jpg",
          alt: "Tanzpaar in klassischer Standardhaltung auf einem Parkettboden in einem hellen Wiener Saal",
        }}
      />
      <FactsDock facts={clubFacts} label="Ihre Vorteile im Überblick" />
      <ValuesSection />
      <TrainingGroupsSection />
      <ScheduleSection />
      <PricingSection />
      <TrainerTeamSection />
      <FaqSection
        tanz={6}
        title="Antworten für *Eltern*"
        description="Die wichtigsten Fragen vor dem ersten Training. Weitere beantworten wir gerne persönlich."
        items={clubFaq}
      />
      <SchnuppertrainingSection />
    </>
  );
}
