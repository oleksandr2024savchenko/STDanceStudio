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
  ballBenefits,
  ballRepertoire,
  oleksandrFaq,
  oleksandrMessages,
  oleksandrPackages,
  oleksandrPrinciples,
  oleksandrServices,
  proAmSteps,
} from "@/lib/content/oleksandr";
import { buildTrainerSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const trainer = trainers.oleksandr;

export const metadata: Metadata = buildPageMetadata({
  title: "Oleksandr – Pro-Am, Turniercoaching & Taxitänzer in Wien",
  description:
    "Pro-Am-Turnierbegleitung und Coaching für Damen und Paare, Taxitänzer auf Wiener Bällen und Hochzeitstanz nach Maß. Erstgespräch direkt per WhatsApp.",
  path: "/oleksandr",
});

export default function OleksandrPage() {
  return (
    <>
      <JsonLd
        data={buildTrainerSchema({
          trainer,
          jobTitle: "Turniertrainer, Pro-Am-Partner und Taxitänzer",
          description:
            "Pro-Am-Turnierbegleitung, Coaching für Damen und Paare, Taxitänzer auf Wiener Bällen und Hochzeitstanz in Wien.",
          knowsAbout: [
            "Turniertanz",
            "Pro-Am",
            "Standardtänze",
            "Lateinamerikanische Tänze",
            "Wiener Walzer",
            "Hochzeitstanz",
          ],
        })}
      />

      <PersonalHero
        badge="Wien 1040 • Pro-Am & Turniercoaching"
        title={"Souverän auf dem Parkett.\n*Präzise* im Turnier."}
        description="Ich begleite Damen und Paare als Pro-Am-Partner und Coach, tanze als Taxitänzer auf Wiener Bällen und studiere Ihren Hochzeitstanz ein – persönlich, diskret und mit klarem Plan."
        actions={
          <>
            <WhatsAppButton
              phone={trainer.phone}
              message={oleksandrMessages.general}
              label="Erstgespräch per WhatsApp"
            />
            <Button href="#leistungen" size="lg" variant="outline">
              Leistungen ansehen
            </Button>
          </>
        }
        profile={{
          name: trainer.name,
          role: trainer.role,
          focus: [
            "Pro-Am-Turnierpartner",
            "Coaching für Damen und Paare",
            "Taxitänzer · Wiener Bälle",
            "Hochzeitstanz",
          ],
          note: "Training im ST Dance Studio, Favoritenstraße 27a, 1040 Wien – Termine nach Vereinbarung.",
        }}
      />

      <Section id="leistungen">
        <SectionHeader
          eyebrow="Leistungen"
          title="Vier Schwerpunkte, *ein Anspruch*"
          description="Ob Turnier, Ballsaison oder Hochzeit: Sie erhalten einen Partner, der technisch führt und organisatorisch mitdenkt."
        />
        <div className="mt-16">
          <ServiceGrid services={oleksandrServices} />
        </div>
      </Section>

      <Section id="pro-am" className="bg-canvas-alt">
        <SectionHeader
          eyebrow="Pro-Am"
          title="Ihr Weg zum *Turnierparkett*"
          description="Pro-Am bedeutet: Sie starten gemeinsam mit einem professionellen Partner. Weder einen eigenen Tanzpartner noch Turniererfahrung müssen Sie mitbringen."
        />
        <Reveal className="mt-16">
          <ProcessSteps steps={proAmSteps} />
        </Reveal>
        <Reveal className="mt-14 flex justify-center">
          <WhatsAppButton
            phone={trainer.phone}
            message={oleksandrMessages.proAm}
            label="Pro-Am-Erstgespräch anfragen"
          />
        </Reveal>
      </Section>

      <Section id="baelle">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Wiener Bälle"
              title="Taxitänzer *mit Format*"
              description="Ob Vereinsball, Zunftball oder Galaabend: Sie genießen den Abend, ich sorge für Sicherheit auf dem Parkett."
            />
            <ul className="mt-8 space-y-4">
              {ballBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-ink/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <Card highlighted className="p-8 md:p-10">
              <h3 className="text-2xl">Mein Ballrepertoire</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {ballRepertoire.map((dance) => (
                  <li
                    key={dance}
                    className="rounded-full border border-gold-500/30 px-4 py-1.5 text-sm text-gold-700"
                  >
                    {dance}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-muted">
                Die Ballsaison ist dicht. Bitte fragen Sie Ihren Wunschtermin frühzeitig an –
                Termine werden in der Reihenfolge der Anfragen vergeben.
              </p>
              <WhatsAppButton
                phone={trainer.phone}
                message={oleksandrMessages.ball}
                label="Taxitänzer anfragen"
                className="mt-8 w-full"
              />
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="anspruch" className="bg-canvas-alt">
        <SectionHeader
          eyebrow="Mein Anspruch"
          title="Drei *Maßstäbe*, an denen Sie mich messen dürfen"
        />
        <div className="mt-16">
          <PrincipleCards principles={oleksandrPrinciples} />
        </div>
      </Section>

      <Section id="honorar">
        <SectionHeader
          eyebrow="Formate & Honorar"
          title="Klare Formate, *faire Konditionen*"
          description="Individuelle Pakete für Paare, Gruppen oder besondere Anlässe besprechen wir gerne persönlich."
        />
        <div className="mt-16">
          <PackageCards packages={oleksandrPackages} />
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Alle Preise in Euro. Startgebühren, Garderobe und Fahrtkosten außerhalb Wiens sind nicht
          enthalten.
        </p>
      </Section>

      <FaqSection
        className="bg-canvas-alt"
        title="Fragen, die Sie *vorab klären* möchten"
        description="Weitere Fragen beantworte ich gerne im persönlichen Gespräch."
        items={oleksandrFaq}
      />

      <CtaBanner
        trainer={trainer}
        title="Vereinbaren Sie Ihr *Erstgespräch*"
        description="Schreiben Sie mir direkt per WhatsApp: kurz Ihr Anliegen und Ihr Wunschzeitraum. Ich melde mich persönlich bei Ihnen."
        whatsappLabel="Jetzt per WhatsApp schreiben"
        message={oleksandrMessages.general}
      />

      <WhatsAppFloat href={buildWhatsAppUrl(trainer.phone, oleksandrMessages.general)} />
    </>
  );
}
