import { Check } from "lucide-react";
import { SchnuppertrainingForm } from "@/components/forms/SchnuppertrainingForm";
import { AccentText } from "@/components/ui/AccentText";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const benefits = [
  "Eine Einheit kostenlos und ohne Verpflichtung",
  "Persönliche Beratung zur passenden Gruppe",
  "Persönliche Rückmeldung direkt per WhatsApp",
] as const;

export function SchnuppertrainingSection() {
  return (
    <Section id="schnuppertraining" className="bg-hero-glow">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            Kostenloses Schnuppertraining
          </p>
          <h2 className="text-4xl leading-[1.1] md:text-5xl">
            <AccentText text="Lernen Sie uns *unverbindlich* kennen" />
          </h2>
          <Ornament align="left" className="mt-6" />
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Der erste Schritt dauert nur eine Minute: Teilen Sie uns mit, wer teilnehmen möchte,
            und wir vereinbaren gemeinsam einen Termin in der Favoritenstraße.
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
          <div className="rounded-2xl border border-gold-500/30 bg-surface p-8 shadow-gold md:p-10">
            <SchnuppertrainingForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
