import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clubValues } from "@/lib/content/club";

export function ValuesSection() {
  return (
    <Section id="philosophie">
      <SectionHeader
        eyebrow="Philosophie"
        tanz={1}
        title="Tanzen als *Schule fürs Leben*"
        description="Wir verstehen Tanzsport als Erziehung zu Konzentration, Respekt und Selbstsicherheit. Musik und Bewegung sind das Mittel – Charakter ist das Ergebnis."
      />
      <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {clubValues.map(({ title, text, icon: Icon }, index) => (
          <li key={title}>
            <Reveal delay={index * 0.08} className="h-full">
              <Card className="h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-[2px] border border-gold-500/40 text-gold-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
