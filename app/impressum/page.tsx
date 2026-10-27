import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/sections/LegalPage";
import { legalDetails, liabilitySections } from "@/lib/content/legal";
import { buildPageMetadata } from "@/lib/seo";
import { site, trainers } from "@/lib/site";
import { buildTelUrl } from "@/lib/whatsapp";

export const metadata: Metadata = buildPageMetadata({
  title: "Impressum",
  description:
    "Impressum und Offenlegung gemäß § 5 ECG, § 25 MedienG und § 14 UGB für ST Dance Studio, Favoritenstraße 27a, 1040 Wien.",
  path: "/impressum",
});

type Row = { label: string; value: ReactNode };

function buildRows(): Row[] {
  const { address } = site;
  const rows: Row[] = [
    { label: "Unternehmen", value: site.name },
    ...(legalDetails.owner ? [{ label: "Inhaber", value: legalDetails.owner }] : []),
    ...(legalDetails.legalForm ? [{ label: "Rechtsform", value: legalDetails.legalForm }] : []),
    {
      label: "Unternehmensgegenstand",
      value: "Tanzunterricht, Tanzcoaching und Choreografien für Veranstaltungen",
    },
    {
      label: "Sitz und Anschrift",
      value: `${address.street}, ${address.postalCode} ${address.city}, ${address.countryName}`,
    },
    {
      label: "Telefon",
      value: (
        <ul className="space-y-1">
          {Object.values(trainers).map((trainer) => (
            <li key={trainer.id}>
              {trainer.name}:{" "}
              <a
                href={buildTelUrl(trainer.phone)}
                className="transition-colors hover:text-gold-800"
              >
                {trainer.phoneDisplay}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "E-Mail",
      value: (
        <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-800">
          {site.email}
        </a>
      ),
    },
    ...(legalDetails.uid ? [{ label: "UID-Nummer", value: legalDetails.uid }] : []),
    ...(legalDetails.companyRegister
      ? [{ label: "Firmenbuch", value: legalDetails.companyRegister }]
      : []),
    ...(legalDetails.chamber ? [{ label: "Kammer", value: legalDetails.chamber }] : []),
    ...(legalDetails.tradeAuthority
      ? [{ label: "Gewerbebehörde", value: legalDetails.tradeAuthority }]
      : []),
  ];
  return rows;
}

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      intro={
        <div className="rounded-[2px] border border-line bg-surface p-8 shadow-card">
          <p className="text-sm text-muted">
            Offenlegung gemäß § 5 E-Commerce-Gesetz, § 25 Mediengesetz und § 14 Unternehmensgesetzbuch
          </p>
          <dl className="mt-6 divide-y divide-line text-sm">
            {buildRows().map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-6"
              >
                <dt className="text-muted">{row.label}</dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      }
      sections={liabilitySections}
    />
  );
}
