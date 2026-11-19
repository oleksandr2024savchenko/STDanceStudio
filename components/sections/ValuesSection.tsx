import { EditorialList } from "@/components/ui/EditorialList";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clubValues } from "@/lib/content/club";

export function ValuesSection() {
  return (
    <Section id="philosophie">
      <SectionHeader
        eyebrow="Philosophie"
        tanz={1}
        title="Tanzen als *Training fürs Leben*"
        description="Wir verstehen Tanzsport als Erziehung zu Konzentration, Respekt und Selbstsicherheit. Musik und Bewegung sind das Mittel – Charakter ist das Ergebnis."
      />
      <EditorialList items={clubValues} className="mt-16" />
    </Section>
  );
}
