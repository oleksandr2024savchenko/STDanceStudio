import { SITE_URL, site, trainers, type Trainer } from "./site";

type TrainerSchemaInput = {
  trainer: Trainer;
  jobTitle: string;
  description: string;
  knowsAbout: readonly string[];
};

/** schema.org: Person (Trainer) mit Bezug zum Club */
export function buildTrainerSchema({
  trainer,
  jobTitle,
  description,
  knowsAbout,
}: TrainerSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}${trainer.href}#person`,
    name: trainer.name,
    url: `${SITE_URL}${trainer.href}`,
    jobTitle,
    description,
    telephone: trainer.phone,
    knowsAbout,
    worksFor: { "@id": `${SITE_URL}/#club` },
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressCountry: site.address.country,
      },
    },
  };
}

/** schema.org: SportsClub + LocalBusiness (Wien) */
export function buildClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsClub", "LocalBusiness"],
    "@id": `${SITE_URL}/#club`,
    name: site.name,
    description: site.description,
    url: SITE_URL,
    telephone: trainers.oleksandr.phone,
    sport: "Gesellschaftstanz / Turniertanz",
    inLanguage: "de-AT",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: "Wien" },
    contactPoint: Object.values(trainers).map((t) => ({
      "@type": "ContactPoint",
      contactType: "customer service",
      name: t.name,
      telephone: t.phone,
      availableLanguage: ["de", "uk", "en"],
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  offers: readonly { name: string; price: number }[];
};

/** schema.org: Service mit Angeboten (EUR), angeboten vom Club in Wien */
export function buildServiceSchema({ name, description, path, offers }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "de-AT",
    provider: { "@id": `${SITE_URL}/#club` },
    areaServed: { "@type": "City", name: "Wien" },
    ...(offers.length > 0 && {
      offers: offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        price: offer.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      })),
    }),
  };
}
