import type { PackageItem } from "@/components/sections/PackageCards";

export const clubPackages: readonly PackageItem[] = [
  {
    id: "schnuppertraining",
    name: "Schnuppertraining",
    price: "Kostenlos",
    priceNote: "unverbindlich, 1 Einheit",
    description:
      "Ihr Kind lernt Trainer, Gruppe und Saal in Ruhe kennen – ohne Verpflichtung.",
    features: [
      "Eine Einheit in der passenden Gruppe",
      "Persönliche Beratung zur Gruppenwahl",
      "Keine Anmeldegebühr",
    ],
    cta: { label: "Termin anfragen", href: "/#schnuppertraining" },
  },
  {
    id: "semesterkurs",
    name: "Semesterkurs",
    price: "€ 236",
    priceNote: "pro Semester, 1 Einheit pro Woche",
    description:
      "Der Weg für kontinuierlichen Fortschritt: ein fester Wochentermin in Ihrer Gruppe.",
    features: [
      "Fester Platz und fester Wochentermin",
      "Zwei Semester pro Schuljahr",
      "Teilnahme an Vorführungen der Gruppe",
      "10 % Geschwisterermäßigung",
    ],
    highlighted: true,
    badge: "Empfohlen",
    cta: { label: "Platz anfragen", href: "/#schnuppertraining" },
  },
  {
    id: "10er-block",
    name: "10er-Block",
    price: "€ 140",
    priceNote: "10 Einheiten, 6 Monate gültig",
    description:
      "Maximale Flexibilität für Familien mit wechselnden Terminen.",
    features: [
      "Zehn Einheiten nach Wahl",
      "Gültig in allen passenden Gruppen",
      "Jederzeit zum Semesterkurs wechselbar",
    ],
    cta: { label: "10er-Block anfragen", href: "/#schnuppertraining" },
  },
];
