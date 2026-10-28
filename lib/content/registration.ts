import type { Trainer } from "@/lib/site";
import { trainingGroups } from "./club";

export type AudienceId = "kind" | "erwachsene" | "paar";

export const audiences: readonly { id: AudienceId; label: string }[] = [
  { id: "kind", label: "Kind oder Jugendliche(r)" },
  { id: "erwachsene", label: "Erwachsene(r)" },
  { id: "paar", label: "Paar" },
];

export function isAudienceId(value: string): value is AudienceId {
  return audiences.some((audience) => audience.id === value);
}

export type RegistrationOffer = {
  /** Text, der in der WhatsApp-Nachricht erscheint. */
  value: string;
  /** Text in der Auswahlliste. */
  label: string;
  /** Zuständige Person; wird im Formular vorausgewählt. */
  trainer?: Trainer["id"];
};

export type RegistrationOfferGroup = {
  label: string;
  offers: readonly RegistrationOffer[];
};

export const UNSURE_OFFER: RegistrationOffer = {
  value: "Noch unsicher – bitte um Beratung",
  label: "Noch unsicher – bitte um Beratung",
};

const tetianaOffers = {
  stretching: {
    value: "Stretching & Body Conditioning",
    label: "Stretching & Body Conditioning",
    trainer: "tetiana",
  },
  soloLatin: { value: "Solo-Latin", label: "Solo-Latin", trainer: "tetiana" },
  turnier: {
    value: "Turniervorbereitung",
    label: "Turniervorbereitung",
    trainer: "tetiana",
  },
  proAm: { value: "Pro-Am für Herren", label: "Pro-Am für Herren", trainer: "tetiana" },
} as const satisfies Record<string, RegistrationOffer>;

/** Auswahlmöglichkeiten je nach Teilnehmerkreis, gruppiert für das Dropdown. */
export const offerGroups: Record<AudienceId, readonly RegistrationOfferGroup[]> = {
  kind: [
    {
      label: "Gruppen im Club",
      offers: trainingGroups.map((group) => ({
        value: `${group.name} (${group.age})`,
        label: `${group.name} – ${group.age}`,
      })),
    },
    { label: "Weiteres", offers: [UNSURE_OFFER] },
  ],
  erwachsene: [
    {
      label: "Bei Tetiana",
      offers: [
        tetianaOffers.stretching,
        tetianaOffers.soloLatin,
        tetianaOffers.turnier,
        tetianaOffers.proAm,
      ],
    },
    {
      label: "Bei Oleksandr",
      offers: [
        {
          value: "Einzelcoaching (Technik & Turnierpräsenz)",
          label: "Einzelcoaching – Technik & Turnierpräsenz",
          trainer: "oleksandr",
        },
        {
          value: "Pro-Am-Programm für Damen",
          label: "Pro-Am-Programm für Damen",
          trainer: "oleksandr",
        },
        {
          value: "Taxitänzer auf Wiener Bällen",
          label: "Taxitänzer auf Wiener Bällen",
          trainer: "oleksandr",
        },
      ],
    },
    { label: "Weiteres", offers: [UNSURE_OFFER] },
  ],
  paar: [
    {
      label: "Bei Oleksandr",
      offers: [
        {
          value: "Coaching für Paare (Standard & Latein)",
          label: "Coaching für Paare – Standard & Latein",
          trainer: "oleksandr",
        },
        {
          value: "Turniercoaching für Paare",
          label: "Turniercoaching für Paare",
          trainer: "oleksandr",
        },
        {
          value: "Hochzeitstanz",
          label: "Hochzeitstanz",
          trainer: "oleksandr",
        },
      ],
    },
    {
      label: "Bei Tetiana",
      offers: [tetianaOffers.turnier],
    },
    { label: "Weiteres", offers: [UNSURE_OFFER] },
  ],
};

export function findOffer(audience: AudienceId, value: string): RegistrationOffer | undefined {
  return offerGroups[audience]
    .flatMap((group) => group.offers)
    .find((offer) => offer.value === value);
}

export const EXPERIENCE_LEVELS = [
  "Keine Tanzerfahrung",
  "Grundkenntnisse",
  "Fortgeschritten",
] as const;

/** Erlaubte Altersangaben für Kinder und Jugendliche (4–17). */
export const CHILD_AGES: readonly number[] = Array.from({ length: 14 }, (_, i) => i + 4);
