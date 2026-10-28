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
  tetianaFaq,
  tetianaMessages,
  tetianaPackages,
  tetianaPrinciples,
  tetianaServices,
  turnierBenefits,
  turnierSteps,
} from "@/lib/content/tetiana";
import { buildTrainerSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const trainer = trainers.tetiana;

export const metadata: Metadata = buildPageMetadata({
  title: "Tetiana – Stretching, Solo-Latin & Turniervorbereitung in Wien",
  description:
    "Stretching & Body Conditioning für Erwachsene, Solo-Latin, Turniervorbereitung und Pro-Am-Begleitung für Herren auf Wiener Bällen. Termin direkt per WhatsApp vereinbaren.",
  path: "/tetiana",
});

export default function TetianaPage() {
  return (
    <>
      <JsonLd
        data={buildTrainerSchema({
          trainer,
          jobTitle: "Trainerin für Stretching, Latin und Turniervorbereitung",
          description:
            "Stretching & Body Conditioning für Erwachsene, Solo-Latin, Turniervorbereitung und Pro-Am-Begleitung für Herren in Wien.",
          knowsAbout: [
            "Stretching",
            "Body Conditioning",
            "Solo-Latin",
            "Turniervorbereitung",
            "Lateinamerikanische Tänze",
            "Pro-Am",
            "Wiener Bälle",
          ],
        })}
      />

      <PersonalHero
        badge="Wien 1040 • Stretching, Latin & Turnier"
        title={"Beweglich.\nAufrecht.\n*Anmutig.*"}
        description="Ich begleite Sie zu mehr Beweglichkeit, Körperspannung und Ausstrahlung – im Stretching, im Solo-Latin, in der Turniervorbereitung und als Pro-Am-Partnerin für Herren auf dem Wiener Ballparkett."
        actions={
          <>
            <WhatsAppButton
              phone={trainer.phone}
              message={tetianaMessages.general}
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
            "Turniervorbereitung",
            "Pro-Am für Herren",
          ],
          note: "Training im ST Dance Studio, Favoritenstraße 27a, 1040 Wien – Termine nach Vereinbarung.",
        }}
      />

      <Section id="angebot">
        <SectionHeader
          eyebrow="Angebot"
          title="Vier Wege zu mehr *Ausstrahlung*"
          description="Körper, Bewegung und Auftritt: Wählen Sie den Schwerpunkt, der zu Ihnen passt, oder kombinieren Sie mehrere."
        />
        <div className="mt-16">
          <ServiceGrid services={tetianaServices} />
        </div>
      </Section>

      <Section id="stretching" className="bg-canvas-alt">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
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
                message={tetianaMessages.stretching}
                label="Stretching-Termin anfragen"
                className="mt-8 w-full"
              />
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="solo-latin">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <Card className="p-8 md:p-10">
              <h3 className="text-2xl">Meine Tänze im Solo-Latin</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {soloLatinDances.map((dance) => (
                  <li
                    key={dance}
                    className="rounded-[2px] border border-gold-500/30 px-4 py-1.5 text-sm text-gold-700"
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
                message={tetianaMessages.soloLatin}
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

      <Section id="turnier" className="bg-canvas-alt">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Turniervorbereitung"
              title="Bereit für Ihren *Turnierstart*"
              description="Ein Turnier verlangt mehr als saubere Schritte: Körper, Musikalität und Nerven müssen zusammenspielen. Ich bereite Sie ganzheitlich vor – von der ersten Technikanalyse bis zum Einlaufen am Turniertag."
            />
            <ul className="mt-8 space-y-4">
              {turnierBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-ink/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Für Einzeltänzerinnen und Einzeltänzer, Paare und Pro-Am-Starter – in Einzelstunden
              und auf Wunsch mit schriftlichem Trainingsplan.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Card highlighted className="p-8 md:p-10">
              <h3 className="text-2xl">Ihre Vorbereitung in vier Schritten</h3>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {turnierSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-5 py-5">
                    <span className="font-serif text-3xl leading-none text-gold-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-serif text-xl text-ink">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <WhatsAppButton
                phone={trainer.phone}
                message={tetianaMessages.turnier}
                label="Turniervorbereitung anfragen"
                className="mt-8 w-full"
              />
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="pro-am">
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
            message={tetianaMessages.proAm}
            label="Pro-Am-Anfrage senden"
          />
        </Reveal>
      </Section>

      <Section id="ansatz" className="bg-canvas-alt">
        <SectionHeader eyebrow="Mein Ansatz" title="Bewegung, die *Ihnen guttut*" />
        <div className="mt-16">
          <PrincipleCards principles={tetianaPrinciples} />
        </div>
      </Section>

      <Section id="preise">
        <SectionHeader
          eyebrow="Formate & Preise"
          title="*Transparent* und persönlich"
          description="Für Paare, Gruppen oder besondere Anlässe stelle ich Ihnen gerne ein individuelles Angebot zusammen."
        />
        <div className="mt-16">
          <PackageCards packages={tetianaPackages} />
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Alle Preise in Euro. Pro-Am-Honorare richten sich nach Anlass und Aufwand.
        </p>
      </Section>

      <FaqSection
        className="bg-canvas-alt"
        title="Fragen vor Ihrer *ersten Einheit*"
        description="Weitere Fragen beantworte ich gerne im persönlichen Gespräch."
        items={tetianaFaq}
      />

      <CtaBanner
        trainer={trainer}
        title="Vereinbaren Sie Ihren *ersten Termin*"
        description="Schreiben Sie mir direkt per WhatsApp: kurz Ihr Anliegen und Ihr Wunschzeitraum. Ich melde mich persönlich bei Ihnen."
        whatsappLabel="Jetzt per WhatsApp schreiben"
        message={tetianaMessages.general}
      />

      <WhatsAppFloat href={buildWhatsAppUrl(trainer.phone, tetianaMessages.general)} />
    </>
  );
}
