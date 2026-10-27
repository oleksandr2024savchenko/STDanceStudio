import { Feather, Flower2, Gem, HeartPulse, Leaf, Sparkles } from "lucide-react";
import type { PackageItem } from "@/components/sections/PackageCards";
import type { Principle } from "@/components/sections/PrincipleCards";
import type { ProcessStep } from "@/components/sections/ProcessSteps";
import type { ServiceItem } from "@/components/sections/ServiceGrid";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { FaqItem } from "./club";

const phone = trainers.tania.phone;

export const taniaMessages = {
  general:
    "Guten Tag Tania, ich interessiere mich für Ihr Training und bitte um einen Terminvorschlag.",
  stretching:
    "Guten Tag Tania, ich möchte mich für Stretching & Body Conditioning anmelden. Bitte um einen Terminvorschlag.\n\nEinzelstunde oder Kleingruppe:\nWunschzeitraum:",
  soloLatin:
    "Guten Tag Tania, ich interessiere mich für Solo-Latin. Bitte um einen Terminvorschlag für eine erste Einheit.",
  proAm:
    "Guten Tag Tania, ich interessiere mich für Pro-Am-Begleitung auf dem Ballparkett bzw. beim Turnier.\n\nAnlass / Ball:\nDatum:",
} as const;

export const taniaServices: readonly ServiceItem[] = [
  {
    id: "stretching",
    title: "Stretching & Body Conditioning",
    text: "Sanfte, aber konsequente Arbeit an Beweglichkeit, Kräftigung und Haltung – für einen Körper, der sich leicht anfühlt und aufrecht trägt.",
    icon: Leaf,
    points: [
      "Dehnung und Mobilisation für Rücken, Hüfte und Beine",
      "Kräftigung von Körpermitte und Haltungsmuskulatur",
      "Einzelstunden oder Kleingruppe",
    ],
  },
  {
    id: "solo-latin",
    title: "Solo-Latin & Bewegungsästhetik",
    text: "Cha-Cha-Cha, Rumba, Samba: Sie erarbeiten Ausdruck, Hüftarbeit, Armführung und Präsenz – ohne Partner und ohne Vorkenntnisse.",
    icon: Sparkles,
    points: [
      "Technik der lateinamerikanischen Tänze",
      "Ausstrahlung und weibliche Bewegungsästhetik",
      "Choreografie für Ihren Auftritt",
    ],
  },
  {
    id: "pro-am",
    title: "Pro-Am für Herren",
    text: "Als Pro-Am-Partnerin begleite ich Herren beim Turnier und auf dem Wiener Ballparkett – mit Charme, Sicherheit und guter Vorbereitung.",
    icon: Gem,
    points: [
      "Turnierstart und Ballbegleitung",
      "Standard und Latein",
      "Diskret und partnerschaftlich",
    ],
  },
];

export const stretchingBenefits: readonly string[] = [
  "Spürbar mehr Beweglichkeit in Rücken, Hüfte und Beinen",
  "Aufrechtere Haltung und stabile Körpermitte",
  "Lösen von alltäglichen Verspannungen",
  "Mehr Körperbewusstsein für Tanz, Sport und Beruf",
];

export const stretchingFacts: readonly { label: string; value: string }[] = [
  { label: "Dauer", value: "60 Minuten" },
  { label: "Format", value: "Einzelstunde oder Kleingruppe" },
  { label: "Ort", value: "ST Dance Studio, Favoritenstraße 27a, 1040 Wien" },
  { label: "Mitbringen", value: "Bequeme Kleidung und ein Handtuch" },
];

export const soloLatinBenefits: readonly string[] = [
  "Hüftbewegung, Armführung und Fußarbeit mit System",
  "Ausstrahlung, die den Raum einnimmt",
  "Choreografien für Feiern, Auftritte und Shows",
  "Privatstunden oder kleine Gruppen",
];

export const soloLatinDances: readonly string[] = [
  "Cha-Cha-Cha",
  "Rumba",
  "Samba",
  "Jive",
  "Paso Doble",
];

export const proAmSteps: readonly ProcessStep[] = [
  {
    title: "Kennenlernen & Ziel",
    text: "Wir besprechen Anlass, Ihr tänzerisches Können und Ihre Wunschtänze – ob Turnier oder Ball.",
  },
  {
    title: "Training",
    text: "In individuellen Einheiten erarbeiten wir Technik, Führung und, wenn gewünscht, Ihre Choreografie.",
  },
  {
    title: "Ihr Auftritt",
    text: "Ich begleite Sie zu Turnier oder Ball und tanze an Ihrer Seite – sicher, elegant und gut vorbereitet.",
  },
];

export const taniaPrinciples: readonly Principle[] = [
  {
    title: "Anmut",
    text: "Schönheit der Bewegung entsteht aus Technik und Ruhe. Ich zeige Ihnen, wie Sie beides verbinden.",
    icon: Flower2,
  },
  {
    title: "Körpergefühl",
    text: "Wir arbeiten mit Ihrem Körper, nicht gegen ihn: in Ihrem Tempo, ohne Leistungsdruck und mit klarem Fortschritt.",
    icon: HeartPulse,
  },
  {
    title: "Achtsamkeit",
    text: "Ruhige Atmosphäre, persönliche Betreuung und volle Aufmerksamkeit in jeder Einheit.",
    icon: Feather,
  },
];

export const taniaPackages: readonly PackageItem[] = [
  {
    id: "stretching-einzel",
    name: "Stretching-Einzelstunde",
    price: "€ 75",
    priceNote: "pro Einheit, 60 Minuten",
    description:
      "Persönliche Betreuung mit Trainingsplan, abgestimmt auf Ihre Beweglichkeit und Ihre Ziele.",
    features: [
      "Individuelle Bestandsaufnahme",
      "Dehnung, Mobilisation und Kräftigung",
      "Flexibel buchbar",
    ],
    cta: {
      label: "Termin anfragen",
      href: buildWhatsAppUrl(phone, taniaMessages.stretching),
      external: true,
    },
  },
  {
    id: "stretching-10er-block",
    name: "Stretching 10er-Block",
    price: "€ 650",
    priceNote: "10 Einheiten, 6 Monate gültig",
    description:
      "Für nachhaltige Ergebnisse: regelmäßig trainieren und dabei sparen.",
    features: [
      "Zehn Einheiten à 60 Minuten",
      "Persönlicher Trainingsplan",
      "Als Einzelstunde oder Kleingruppe",
    ],
    highlighted: true,
    badge: "Beliebt",
    cta: {
      label: "10er-Block anfragen",
      href: buildWhatsAppUrl(phone, taniaMessages.stretching),
      external: true,
    },
  },
  {
    id: "solo-latin-pro-am",
    name: "Solo-Latin & Pro-Am",
    price: "Individuell",
    priceNote: "Solo-Latin ab € 85 pro Einheit",
    description:
      "Privatstunden, Choreografien und Pro-Am-Begleitung erhalten Sie als persönliches Angebot.",
    features: [
      "Solo-Latin als Privatstunde oder Kleingruppe",
      "Pro-Am-Begleitung für Turnier und Ball",
      "Angebot nach Gespräch und Aufwand",
    ],
    cta: {
      label: "Angebot anfragen",
      href: buildWhatsAppUrl(phone, taniaMessages.soloLatin),
      external: true,
    },
  },
];

export const taniaFaq: readonly FaqItem[] = [
  {
    question: "Ist Stretching für mich geeignet, wenn ich sehr unbeweglich bin?",
    answer:
      "Gerade dann. Wir beginnen dort, wo Sie stehen, und steigern Beweglichkeit und Intensität Schritt für Schritt – ohne Leistungsdruck.",
  },
  {
    question: "Was soll ich zur ersten Einheit mitbringen?",
    answer:
      "Bequeme Kleidung, in der Sie sich frei bewegen können, und ein Handtuch. Alles Weitere besprechen wir vor Ort.",
  },
  {
    question: "Kann ich mit gesundheitlichen Beschwerden teilnehmen?",
    answer:
      "Bitte besprechen Sie Beschwerden vorab mit Ihrer Ärztin oder Ihrem Arzt und teilen Sie mir diese mit. Das Training ersetzt keine ärztliche oder physiotherapeutische Behandlung.",
  },
  {
    question: "Brauche ich für Solo-Latin einen Tanzpartner?",
    answer:
      "Nein. Solo-Latin tanzen Sie allein. Vorkenntnisse sind nicht erforderlich – wir bauen Technik und Ausdruck von Grund auf auf.",
  },
  {
    question: "Wie funktioniert Pro-Am für Herren auf Bällen?",
    answer:
      "Sie tanzen gemeinsam mit mir als professioneller Partnerin bei Turnier oder Ball. Nach einem Gespräch über Anlass und Wunschtänze bereiten wir Sie in individuellen Einheiten darauf vor.",
  },
];
