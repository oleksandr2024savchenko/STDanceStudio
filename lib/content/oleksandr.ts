import { Crown, Handshake, Heart, ShieldCheck, Target, Trophy } from "lucide-react";
import type { PackageItem } from "@/components/sections/PackageCards";
import type { Principle } from "@/components/sections/PrincipleCards";
import type { ProcessStep } from "@/components/sections/ProcessSteps";
import type { ServiceItem } from "@/components/sections/ServiceGrid";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { FaqItem } from "./club";

const phone = trainers.oleksandr.phone;

export const oleksandrMessages = {
  general:
    "Guten Tag Oleksandr, ich interessiere mich für Ihr Coaching und bitte um ein Erstgespräch.",
  proAm:
    "Guten Tag Oleksandr, ich interessiere mich für Pro-Am-Training und Turnierbegleitung. Bitte um ein Erstgespräch.",
  coaching:
    "Guten Tag Oleksandr, ich möchte eine Coaching-Einheit bei Ihnen buchen. Bitte um einen Terminvorschlag.",
  ball:
    "Guten Tag Oleksandr, ich möchte Sie als Taxitänzer für einen Wiener Ball anfragen.\n\nBall:\nDatum:\nAnzahl der Tänze / Dauer:",
} as const;

export const oleksandrServices: readonly ServiceItem[] = [
  {
    id: "pro-am",
    title: "Pro-Am-Turnierbegleitung",
    text: "Sie starten Turniere an der Seite eines erfahrenen Partners – technisch geführt, choreografisch maßgeschneidert und von der Vorbereitung bis zum Startaufruf begleitet.",
    icon: Trophy,
    points: [
      "Standard und Latein",
      "Choreografie und Musikauswahl nach Maß",
      "Begleitung am Turniertag",
    ],
  },
  {
    id: "coaching",
    title: "Coaching für Damen und Paare",
    text: "Gezielte Arbeit an Haltung, Führung und Folgen, Fußarbeit und Musikalität – für Einsteigerinnen mit Ehrgeiz ebenso wie für eingespielte Paare.",
    icon: Target,
    points: [
      "Einzel- und Paarstunden",
      "Technikanalyse und Trainingsplan",
      "Gezielte Turniervorbereitung",
    ],
  },
  {
    id: "taxitaenzer",
    title: "Taxitänzer auf Wiener Bällen",
    text: "Charmant, sicher und diskret: Ich begleite Sie über das Ballparkett – vom Eröffnungswalzer bis zum letzten Tanz.",
    icon: Crown,
    points: [
      "Wiener Walzer und alle Standardtänze",
      "Souveräne Führung auch ohne Vorkenntnisse",
      "Auf Wunsch mit Auffrischungsstunde vorab",
    ],
  },
  {
    id: "hochzeitstanz",
    title: "Hochzeitstanz nach Maß",
    text: "Der erste Tanz als Ehepaar soll gelingen: Ich studiere Ihren Hochzeitswalzer oder Ihre Wunschchoreografie Schritt für Schritt mit Ihnen ein.",
    icon: Heart,
    points: [
      "Wiener Walzer oder Wunschtanz",
      "Express in 4 Einheiten oder Komplettpaket",
      "Auch für Paare ohne Tanzerfahrung",
    ],
    link: { label: "Zum Hochzeitstanz", href: "/hochzeitstanz" },
  },
];

export const proAmSteps: readonly ProcessStep[] = [
  {
    title: "Erstgespräch & Standortbestimmung",
    text: "Wir klären Ziele, Tanzerfahrung und Zeitrahmen. In einer ersten Einheit analysiere ich Haltung, Bewegung und Musikalität.",
  },
  {
    title: "Trainingsplan",
    text: "Sie erhalten einen Plan mit festen Einheiten, klaren Schwerpunkten und nachvollziehbaren Zwischenzielen.",
  },
  {
    title: "Choreografie & Feinschliff",
    text: "Wir erarbeiten Ihre Turnierchoreografie, wählen die Musik und schleifen Details bis zur Wettkampfreife.",
  },
  {
    title: "Turnierstart",
    text: "Ich begleite Sie zur Veranstaltung, tanze an Ihrer Seite und werte das Ergebnis anschließend mit Ihnen aus.",
  },
];

export const ballBenefits: readonly string[] = [
  "Vorgespräch zu Ihren Wunschtänzen und Ihrem Können",
  "Ballgerechte Garderobe und tadelloses Auftreten",
  "Souveräne Führung – auch bei wenig Tanzerfahrung",
  "Diskretion und Verlässlichkeit vor, während und nach dem Ball",
  "Optionale Auffrischungsstunde vor dem Ball",
];

export const ballRepertoire: readonly string[] = [
  "Wiener Walzer",
  "Langsamer Walzer",
  "Quickstep",
  "Foxtrott",
  "Tango",
  "Polka",
  "Cha-Cha-Cha",
  "Rumba",
];

export const oleksandrPrinciples: readonly Principle[] = [
  {
    title: "Präzision",
    text: "Jede Einheit hat ein klares Ziel. Fortschritt ist bei mir messbar und nachvollziehbar.",
    icon: Target,
  },
  {
    title: "Diskretion",
    text: "Ihre Ziele, Ihr Können und Ihre Anliegen bleiben bei mir – im Training, am Turnier und auf dem Ball.",
    icon: ShieldCheck,
  },
  {
    title: "Verlässlichkeit",
    text: "Pünktlich, vorbereitet, erreichbar. Termine und Absprachen gelten.",
    icon: Handshake,
  },
];

export const oleksandrPackages: readonly PackageItem[] = [
  {
    id: "einzelcoaching",
    name: "Einzelcoaching",
    price: "€ 95",
    priceNote: "pro Einheit, 60 Minuten",
    description:
      "Technik und Turnierpräsenz – gezielt für Damen und Paare, flexibel buchbar.",
    features: [
      "Individuelle Technikanalyse",
      "Standard und Latein",
      "Blockbuchung ab 5 Einheiten möglich",
    ],
    cta: {
      label: "Termin anfragen",
      href: buildWhatsAppUrl(phone, oleksandrMessages.coaching),
      external: true,
    },
  },
  {
    id: "pro-am-programm",
    name: "Pro-Am-Programm",
    price: "ab € 690",
    priceNote: "pro Monat, 4 Trainingseinheiten",
    description:
      "Das Komplettprogramm für Ihren Turnierstart: Training, Choreografie und Begleitung.",
    features: [
      "Wöchentliches Training mit Ihrem Pro-Am-Partner",
      "Turnierchoreografie und Musikauswahl",
      "Begleitung bei Ihrem Turnierstart",
      "Startgebühren und Garderobe separat",
    ],
    highlighted: true,
    badge: "Pro-Am",
    cta: {
      label: "Erstgespräch vereinbaren",
      href: buildWhatsAppUrl(phone, oleksandrMessages.proAm),
      external: true,
    },
  },
  {
    id: "ballbegleitung",
    name: "Ballbegleitung",
    price: "ab € 220",
    priceNote: "pro Ballabend",
    description:
      "Taxitänzer für Ihren Abend auf dem Wiener Parkett – souverän und diskret.",
    features: [
      "Begleitung über den gesamten Abend",
      "Vorgespräch zu Ihren Wunschtänzen",
      "Auffrischungsstunde auf Wunsch",
    ],
    cta: {
      label: "Ball anfragen",
      href: buildWhatsAppUrl(phone, oleksandrMessages.ball),
      external: true,
    },
  },
];

export const oleksandrFaq: readonly FaqItem[] = [
  {
    question: "Muss ich Turniererfahrung mitbringen?",
    answer:
      "Nein. Viele Pro-Am-Partnerinnen und -Partner starten ohne Turniererfahrung. Wir bauen Technik und Wettkampfroutine Schritt für Schritt auf.",
  },
  {
    question: "Was bedeutet Pro-Am genau?",
    answer:
      "Pro-Am steht für Professional-Amateur: Sie starten als Amateurin bzw. Amateur gemeinsam mit einem professionellen Tanzpartner bei offiziellen Turnieren. Einen eigenen Tanzpartner benötigen Sie dafür nicht.",
  },
  {
    question: "Sind Startgebühren im Honorar enthalten?",
    answer:
      "Nein. Startgebühren, Garderobe und eventuelle Reisekosten werden separat abgerechnet. Vorab erhalten Sie eine transparente Aufstellung.",
  },
  {
    question: "Wie früh sollte ich einen Taxitänzer für einen Ball anfragen?",
    answer:
      "Wir empfehlen eine Anfrage mehrere Wochen vor dem Ball, in der Hauptsaison gerne früher. Termine werden in der Reihenfolge der Anfragen vergeben.",
  },
  {
    question: "Kann ich auch als Paar bei Ihnen trainieren?",
    answer:
      "Selbstverständlich. Für Paare biete ich Technik- und Turniercoaching in Standard und Latein an – als Einzelstunden oder in einem festen Trainingsplan.",
  },
];
