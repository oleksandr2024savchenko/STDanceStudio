import { Check } from "lucide-react";
import { ShowForm } from "@/components/forms/ShowForm";
import { AccentText } from "@/components/ui/AccentText";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const benefits = [
  "Unverbindliches Erstgespräch zu Anlass, Motto und Größe der Gruppe",
  "Konzept mit Probenplan, abgestimmt auf Ihren Zeitrahmen",
  "Persönliche Rückmeldung direkt per WhatsApp",
] as const;

export function ShowRequestSection() {
  return (
    <Section id="anfrage">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            Unverbindliche Anfrage
          </p>
          <h2 className="text-4xl leading-[1.1] md:text-5xl">
            <AccentText text="Erzählen Sie uns von Ihrem *Auftritt*" />
          </h2>
          <Ornament align="left" className="mt-6" />
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Schildern Sie uns kurz Ihren Anlass, das Datum und die ungefähre Teilnehmerzahl. Wir
            melden uns persönlich bei Ihnen.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-ink/80">
                <Check className="mt-1 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <GoldFrame innerClassName="p-8 md:p-10">
            <ShowForm />
          </GoldFrame>
        </Reveal>
      </div>
    </Section>
  );
}
