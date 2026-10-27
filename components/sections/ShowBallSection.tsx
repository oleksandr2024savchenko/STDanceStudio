import { ContactModalButton } from "@/components/forms/ContactModalButton";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { showProcess, showServices } from "@/lib/content/club";
import { ProcessSteps } from "./ProcessSteps";

export function ShowBallSection() {
  return (
    <Section id="show">
      <SectionHeader
        eyebrow="Show & Balleröffnungen"
        title="Choreografien für den *großen Auftritt*"
        description="Vom Eröffnungswalzer eines Paares bis zur großen Formation: Wir choreografieren Balleröffnungen und Einlagen für Wiener Bälle und Galaabende."
      />

      <ul className="mt-16 grid gap-6 sm:grid-cols-2">
        {showServices.map((service, index) => (
          <li key={service.title}>
            <Reveal delay={(index % 2) * 0.08} className="h-full">
              <Card className="h-full">
                <h3 className="text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-20">
        <h3 className="text-center text-3xl">So arbeiten wir mit Ihnen</h3>
        <ProcessSteps steps={showProcess} as="h4" className="mt-10" />
      </Reveal>

      <Reveal className="mt-14 flex justify-center">
        <ContactModalButton
          label="Balleröffnung unverbindlich anfragen"
          modalTitle="Anfrage für Ihre Veranstaltung"
          intro="Schildern Sie uns kurz Ihren Anlass, das Datum und die ungefähre Teilnehmerzahl. Wir melden uns persönlich bei Ihnen."
        />
      </Reveal>
    </Section>
  );
}
