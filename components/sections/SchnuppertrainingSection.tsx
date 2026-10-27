import { Check } from "lucide-react";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { AccentText } from "@/components/ui/AccentText";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const benefits = [
  "Kinder und Jugendliche: erste Einheit kostenlos und ohne Verpflichtung",
  "Erwachsene und Paare: persönliche Beratung zum passenden Angebot",
  "Persönliche Rückmeldung direkt per WhatsApp",
] as const;

export function SchnuppertrainingSection() {
  return (
    <Section id="schnuppertraining">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            <span className="font-serif text-lg normal-case italic tracking-normal">Tanz 7</span>
            <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-brass" />
            Anmeldung & Schnuppertraining
          </p>
          <h2 className="text-4xl leading-[1.1] md:text-5xl">
            <AccentText text="Lernen Sie uns *unverbindlich* kennen" />
          </h2>
          <Ornament align="left" className="mt-6" />
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Der erste Schritt dauert nur eine Minute: Teilen Sie uns mit, wer teilnehmen möchte
            und wofür – ob Kind, Erwachsene oder Paar. Wir vereinbaren gemeinsam einen Termin in
            der Favoritenstraße.
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
            <RegistrationForm />
          </GoldFrame>
        </Reveal>
      </div>
    </Section>
  );
}
