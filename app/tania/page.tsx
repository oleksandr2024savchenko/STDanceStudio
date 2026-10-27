import type { Metadata } from "next";
import { Check } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { PackageCards } from "@/components/sections/PackageCards";
import { PersonalHero } from "@/components/sections/PersonalHero";
import { PrincipleCards } from "@/components/sections/PrincipleCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import {
  proAmSteps,
  soloLatinBenefits,
  soloLatinDances,
  stretchingBenefits,
  stretchingFacts,
  taniaFaq,
  taniaMessages,
  taniaPackages,
  taniaPrinciples,
  taniaServices,
} from "@/lib/content/tania";
import { buildTrainerSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const trainer = trainers.tania;

export const metadata: Metadata = buildPageMetadata({
  title: "Tania – Stretching, Solo-Latin & Pro-Am in Wien",
  description:
    "Stretching & Body Conditioning für Erwachsene, Solo-Latin und Pro-Am-Begleitung für Herren auf Wiener Bällen. Termin direkt per WhatsApp vereinbaren.",
  path: "/tania",
});

export default function TaniaPage() {
  return (
    <>
      <JsonLd
        data={buildTrainerSchema({
          trainer,
          jobTitle: "Trainerin für Stretching, Latin und Pro-Am",
          description:
            "Stretching & Body Conditioning für Erwachsene, Solo-Latin und Pro-Am-Begleitung für Herren in Wien.",
          knowsAbout: [
            "Stretching",
            "Body Conditioning",
            "Solo-Latin",
            "Lateinamerikanische Tänze",
            "Pro-Am",
            "Wiener Bälle",
          ],
        })}
      />

      <PersonalHero
        badge="Wien 1040 • Stretching & Solo-Latin"
        title={"Beweglich.\nAufrecht.\n*Anmutig.*"}
        description="Ich begleite Sie zu mehr Beweglichkeit, Körperspannung und Ausstrahlung – im Stretching, im Solo-Latin und als Pro-Am-Partnerin für Herren auf dem Wiener Ballparkett."
        actions={
          <>
            <WhatsAppButton
              phone={trainer.phone}
              message={taniaMessages.general}
              label="Termin per WhatsApp anfragen"
            />
            <Button href="#angebot" size="lg" variant="outline">
              Angebot ansehen
            </Button>
          </>
        }
        profile={{
          name: trainer.name,
          role: trainer.role,
          focus: [
            "Stretching & Body Conditioning",
            "Solo-Latin & Bewegungsästhetik",
            "Pro-Am für Herren",
          ],
          note: "Training im ST Dance Studio, Favoritenstraße 27a, 1040 Wien – Termine nach Vereinbarung.",
        }}
      />

      <Section id="angebot">
        <SectionHeader
          eyebrow="Angebot"
          title="Drei Wege zu mehr *Ausstrahlung*"
          description="Körper, Bewegung und Auftritt: Wählen Sie den Schwerpunkt, der zu Ihnen passt, oder kombinieren Sie alle drei."
        />
        <div className="mt-16">
          <ServiceGrid services={taniaServices} />
        </div>
      </Section>

      <Section id="stretching" className="bg-canvas-alt">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Stretching & Body Conditioning"
              title="Mehr Beweglichkeit. *Mehr Leichtigkeit.*"
              description="Eine Einheit, die fordert und zugleich guttut: gezielte Dehnung, sanfte Kräftigung und bewusste Atmung in ruhiger Atmosphäre."
            />
            <ul className="mt-8 space-y-4">
              {stretchingBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-ink/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <Card highlighted className="p-8 md:p-10">
              <h3 className="text-2xl">Ihre Einheit</h3>
              <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
                {stretchingFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[6.5rem_1fr] gap-4 py-4"
                  >
                    <dt className="text-muted">{fact.label}</dt>
                    <dd className="text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <WhatsAppButton
                phone={trainer.phone}
                message={taniaMessages.stretching}
                label="Stretching-Termin anfragen"
                className="mt-8 w-full"
              />
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="solo-latin">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <Card className="p-8 md:p-10">
              <h3 className="text-2xl">Meine Tänze im Solo-Latin</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {soloLatinDances.map((dance) => (
                  <li
                    key={dance}
                    className="rounded-full border border-gold-500/30 px-4 py-1.5 text-sm text-gold-700"
                  >
                    {dance}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-muted">
                Sie benötigen weder einen Partner noch Vorkenntnisse. Wir beginnen mit den
                Grundlagen und bauen Ihre Choreografie Schritt für Schritt auf.
              </p>
              <WhatsAppButton
                phone={trainer.phone}
                message={taniaMessages.soloLatin}
                label="Solo-Latin anfragen"
                variant="outline"
                className="mt-8 w-full"
              />
            </Card>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Solo-Latin"
              title="Ausdruck, der *den Raum einnimmt*"
              description="Cha-Cha-Cha, Rumba, Samba: Im Solo-Latin arbeiten Sie an Hüftbewegung, Armführung, Fußarbeit und Präsenz – für mehr Ausstrahlung auf und neben der Tanzfläche."
            />
            <ul className="mt-8 space-y-4">
              {soloLatinBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-ink/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="pro-am" className="bg-canvas-alt">
        <SectionHeader
          eyebrow="Pro-Am für Herren"
          title="Ihr Auftritt auf dem *Parkett*"
          description="Ob Turnier oder Ball: Als Ihre Partnerin sorge ich dafür, dass Sie sich sicher fühlen und souverän auftreten."
        />
        <Reveal className="mt-16">
          <ProcessSteps steps={proAmSteps} />
        </Reveal>
        <Reveal className="mt-14 flex justify-center">
          <WhatsAppButton
            phone={trainer.phone}
            message={taniaMessages.proAm}
            label="Pro-Am-Anfrage senden"
          />
        </Reveal>
      </Section>

      <Section id="ansatz">
        <SectionHeader eyebrow="Mein Ansatz" title="Bewegung, die *Ihnen guttut*" />
        <div className="mt-16">
          <PrincipleCards principles={taniaPrinciples} />
        </div>
      </Section>

      <Section id="preise" className="bg-canvas-alt">
        <SectionHeader
          eyebrow="Formate & Preise"
          title="*Transparent* und persönlich"
          description="Für Paare, Gruppen oder besondere Anlässe stelle ich Ihnen gerne ein individuelles Angebot zusammen."
        />
        <div className="mt-16">
          <PackageCards packages={taniaPackages} />
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Alle Preise in Euro. Pro-Am-Honorare richten sich nach Anlass und Aufwand.
        </p>
      </Section>

      <FaqSection
        title="Fragen vor Ihrer *ersten Einheit*"
        description="Weitere Fragen beantworte ich gerne im persönlichen Gespräch."
        items={taniaFaq}
      />

      <CtaBanner
        trainer={trainer}
        title="Vereinbaren Sie Ihren *ersten Termin*"
        description="Schreiben Sie mir direkt per WhatsApp: kurz Ihr Anliegen und Ihr Wunschzeitraum. Ich melde mich persönlich bei Ihnen."
        whatsappLabel="Jetzt per WhatsApp schreiben"
        message={taniaMessages.general}
      />

      <WhatsAppFloat href={buildWhatsAppUrl(trainer.phone, taniaMessages.general)} />
    </>
  );
}
