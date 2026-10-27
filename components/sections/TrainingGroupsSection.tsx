import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trainingGroups } from "@/lib/content/club";

export function TrainingGroupsSection() {
  return (
    <Section id="training" className="bg-canvas-alt">
      <SectionHeader
        eyebrow="Kinder- & Jugendtraining"
        title="Der passende Einstieg für *jedes Alter*"
        description="Unsere Gruppen sind nach Alter und Können gegliedert. So lernt Ihr Kind in einem Tempo, das fordert, ohne zu überfordern."
      />
      <ul className="mt-16 grid gap-6 lg:grid-cols-3">
        {trainingGroups.map((group, index) => (
          <li key={group.id}>
            <Reveal delay={index * 0.08} className="h-full">
              <Card className="flex h-full flex-col">
                <p className="text-xs font-medium uppercase tracking-eyebrow text-gold-700">
                  {group.age}
                </p>
                <h3 className="mt-4 text-3xl">{group.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {group.text}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
