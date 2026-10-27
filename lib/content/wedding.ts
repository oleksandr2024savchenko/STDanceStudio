import { Clock, Footprints, Gem, Heart, MapPin, Music } from "lucide-react";
import type { Fact } from "@/components/sections/FactsDock";
import type { PackageItem } from "@/components/sections/PackageCards";
import type { Principle } from "@/components/sections/PrincipleCards";
import type { ProcessStep } from "@/components/sections/ProcessSteps";
import type { FaqItem } from "./club";
import { site } from "@/lib/site";

export const weddingFacts: readonly Fact[] = [
  { icon: Clock, title: "4 Einheiten", text: "Express-Paket für Ihren Hochzeitswalzer" },
  { icon: Gem, title: "Komplettpaket", text: "individuelle Choreografie nach Maß" },
  { icon: Music, title: "Ihr Wunschlied", text: "Wir choreografieren zu Ihrer Musik" },
  {
    icon: MapPin,
    title: `${site.address.postalCode} ${site.address.city}`,
    text: site.address.street,
  },
];

export type WeddingPackageId = "express" | "komplett" | "unsicher";

export const WEDDING_PACKAGE_IDS: readonly WeddingPackageId[] = [
  "express",
  "komplett",
  "unsicher",
];

export function isWeddingPackageId(value: string): value is WeddingPackageId {
  return (WEDDING_PACKAGE_IDS as readonly string[]).includes(value);
}

export const weddingPackageLabels: Record<WeddingPackageId, string> = {
  express: "Express in 4 Einheiten",
  komplett: "Komplettpaket",
  unsicher: "Noch unsicher",
};

const EXPRESS_PRICE = 380;
const KOMPLETT_PRICE = 890;

/** Maschinenlesbare Preise für schema.org */
export const weddingOffers = [
  { name: weddingPackageLabels.express, price: EXPRESS_PRICE },
  { name: weddingPackageLabels.komplett, price: KOMPLETT_PRICE },
] as const;

export const weddingPackages: readonly PackageItem[] = [
  {
    id: "express",
    name: "Express in 4 Einheiten",
    price: `€ ${EXPRESS_PRICE}`,
    priceNote: "für das Brautpaar, 4 Einheiten à 60 Minuten",
    description:
      "Die schnelle Lösung für Paare mit wenig Zeit: ein sicherer, eleganter Eröffnungstanz in vier Einheiten.",
    features: [
      "Grundchoreografie im Wiener Walzer oder Wunschtanz",
      "Auch ohne Tanzerfahrung geeignet",
      "Flexible Terminvereinbarung",
      "Übungsplan für zu Hause",
    ],
    cta: { label: "Express anfragen", href: "#anfrage" },
  },
  {
    id: "komplett",
    name: "Komplettpaket",
    price: `ab € ${KOMPLETT_PRICE}`,
    priceNote: "Hochzeitstanz nach Maß, bis zu 10 Einheiten",
    description:
      "Ihre individuelle Choreografie von der Musikauswahl bis zur Generalprobe – alles aus einer Hand.",
    features: [
      "Choreografie nach Maß zu Ihrem Lied",
      "Musikschnitt auf Ihre Wunschlänge",
      "Persönliche Betreuung bis zur Hochzeit",
      "Generalprobe vor Ort nach Absprache",
    ],
    highlighted: true,
    badge: "Rundum-Service",
    cta: { label: "Komplettpaket anfragen", href: "#anfrage" },
  },
];

export const weddingBenefits: readonly Principle[] = [
  {
    title: "Auch ohne Vorkenntnisse",
    text: "Sie müssen nicht tanzen können. Wir beginnen bei den Grundschritten und führen Sie sicher zu Ihrem großen Moment.",
    icon: Footprints,
  },
  {
    title: "Ihr Lied, Ihr Stil",
    text: "Vom klassischen Wiener Walzer bis zur modernen Mischung: Die Choreografie wird auf Ihre Musik und Ihr Können abgestimmt.",
    icon: Music,
  },
  {
    title: "Entspannt und diskret",
    text: "Sie trainieren in privater Atmosphäre, ohne Zuschauer und ohne Druck – damit am Hochzeitstag Freude statt Lampenfieber überwiegt.",
    icon: Heart,
  },
];

export const weddingSteps: readonly ProcessStep[] = [
  {
    title: "Anfrage & Kennenlernen",
    text: "Sie schildern uns Termin, Wünsche und Tanzerfahrung. Gemeinsam wählen wir das passende Paket.",
  },
  {
    title: "Musik & Konzept",
    text: "Wir besprechen Ihr Lied, den Stil und den Ablauf Ihres Tanzes – vom Einzug bis zum Schlussbild.",
  },
  {
    title: "Training",
    text: "In ruhigen Einheiten erarbeiten wir die Choreografie, bis jeder Schritt sitzt.",
  },
  {
    title: "Ihr erster Tanz",
    text: "Am Hochzeitstag tanzen Sie souverän – und genießen jeden Augenblick.",
  },
];

export const weddingFaq: readonly FaqItem[] = [
  {
    question: "Wie viele Einheiten benötigen wir?",
    answer:
      "Für einen sicheren Walzer genügen häufig vier Einheiten. Wünschen Sie eine aufwendigere Choreografie mit mehreren Teilen, empfehlen wir das Komplettpaket.",
  },
  {
    question: "Können wir auch ohne Tanzerfahrung teilnehmen?",
    answer:
      "Selbstverständlich. Die meisten Brautpaare haben vorher nie Gesellschaftstanz getanzt. Wir passen Tempo und Schwierigkeit an Sie beide an.",
  },
  {
    question: "Wann sollten wir mit dem Training beginnen?",
    answer:
      "Idealerweise zwei bis drei Monate vor der Hochzeit. Auch kurzfristigere Termine sind je nach Verfügbarkeit möglich – fragen Sie uns einfach an.",
  },
  {
    question: "Welche Musik und welche Tänze sind möglich?",
    answer:
      "Wiener Walzer, Langsamer Walzer, Discofox, Rumba oder eine individuelle Mischung: Wir studieren die Choreografie zu Ihrem Lieblingslied ein.",
  },
  {
    question: "Wo findet das Training statt?",
    answer:
      "Im ST Dance Studio in der Favoritenstraße 27a, 1040 Wien. Eine Generalprobe in Ihrer Location ist im Komplettpaket nach Absprache möglich.",
  },
];
