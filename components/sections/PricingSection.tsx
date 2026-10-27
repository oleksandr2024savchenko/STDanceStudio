import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clubPackages } from "@/lib/content/pricing";
import { PackageCards } from "./PackageCards";

export function PricingSection() {
  return (
    <Section id="preise" className="bg-canvas-alt">
      <SectionHeader
        eyebrow="Modelle & Preise"
        title="*Transparent* und flexibel"
        description="Wählen Sie zwischen dem Semesterkurs mit festem Termin und dem flexiblen 10er-Block. Das erste Schnuppertraining ist kostenlos und unverbindlich."
      />
      <div className="mt-16">
        <PackageCards packages={clubPackages} />
      </div>
      <p className="mt-8 text-center text-xs text-muted">
        Alle Preise in Euro. Über Ermäßigungen für Familien beraten wir Sie gerne persönlich.
      </p>
    </Section>
  );
}
