import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { teamProfiles } from "@/lib/content/club";
import { trainers } from "@/lib/site";

export function TrainerTeamSection() {
  return (
    <Section id="trainerteam" className="bg-canvas-alt">
      <SectionHeader
        eyebrow="Trainerteam"
        tanz={5}
        title="Zwei Persönlichkeiten, *eine Haltung*"
        description="Hinter ST Dance Studio stehen zwei Trainer mit klaren Schwerpunkten. Für Erwachsene und Paare bieten beide zusätzlich persönliches Coaching an."
      />

      <ul className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {teamProfiles.map((profile, index) => {
          const trainer = trainers[profile.id];
          return (
            <li key={profile.id}>
              <Reveal delay={index * 0.1} className="h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex items-center gap-5">
                    <span
                      aria-hidden="true"
                      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-canvas-alt font-serif text-4xl text-gold-700"
                    >
                      {trainer.name.charAt(0)}
                    </span>
                    <div>
                      <h3 className="text-3xl">{trainer.name}</h3>
                      <p className="mt-1 text-sm text-gold-700">{trainer.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">
                    {profile.summary}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {profile.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-ink/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={trainer.href}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-700 transition-colors hover:text-gold-800"
                  >
                    Profil von {trainer.name} ansehen
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
