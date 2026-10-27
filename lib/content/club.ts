import {
  CalendarDays,
  Crown,
  Gift,
  HeartHandshake,
  Hourglass,
  MapPin,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { Fact } from "@/components/sections/FactsDock";
import { site } from "@/lib/site";

export const clubFacts: readonly Fact[] = [
  { icon: Gift, title: "Kostenlos", text: "Schnuppertraining ohne Verpflichtung" },
  { icon: CalendarDays, title: "Semesterkurs", text: "oder flexibler 10er-Block" },
  {
    icon: MapPin,
    title: `${site.address.postalCode} ${site.address.city}`,
    text: site.address.street,
  },
  { icon: Trophy, title: "Balleröffnung", text: "vom ersten Schritt bis zum Auftritt" },
];

export type ClubValue = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const clubValues: readonly ClubValue[] = [
  {
    title: "Disziplin",
    text: "Pünktlichkeit, Konzentration und Ausdauer werden in jeder Einheit geübt – mit klaren Regeln, die Kindern Orientierung geben.",
    icon: Hourglass,
  },
  {
    title: "Haltung",
    text: "Aufrechte Körperhaltung, Körperspannung und Balance: Was im Tanzsaal beginnt, zeigt sich bald in Schule und Alltag.",
    icon: Crown,
  },
  {
    title: "Etikette",
    text: "Aufforderung, Verbeugung, Dank: Wir vermitteln Umgangsformen, die in Wien seit jeher zum guten Ton des Tanzens gehören.",
    icon: Sparkles,
  },
  {
    title: "Gemeinschaft",
    text: "Die Arbeit im Paar lehrt Rücksicht und Verantwortung. In unseren Gruppen entstehen Freundschaften, die über das Training hinaus halten.",
    icon: HeartHandshake,
  },
];

export type TrainingGroup = {
  id: string;
  name: string;
  age: string;
  text: string;
  tags: readonly string[];
};

export const trainingGroups: readonly TrainingGroup[] = [
  {
    id: "kindertanzen",
    name: "Kindertanzen",
    age: "4 bis 7 Jahre",
    text: "Spielerischer Zugang zu Rhythmus, Koordination und Partnerführung. Die ersten Schritte in Walzer, Cha-Cha-Cha und Polka.",
    tags: ["Rhythmusgefühl", "Koordination", "Erste Tänze"],
  },
  {
    id: "kinder",
    name: "Kindertraining",
    age: "8 bis 11 Jahre",
    text: "Systematischer Aufbau in Standard und Latein: Grundschritte, saubere Technik und erste Formationsarbeit.",
    tags: ["Standard & Latein", "Technik", "Formationen"],
  },
  {
    id: "jugend",
    name: "Jugendtraining",
    age: "12 bis 17 Jahre",
    text: "Anspruchsvolles Training für Jugendliche – vom Wiener Walzer bis zur Turnierreife und zur eigenen Balleröffnung.",
    tags: ["Turnierreife", "Wiener Walzer", "Balleröffnung"],
  },
];

export type ScheduleEntry = {
  day: string;
  time: string;
  group: string;
  age: string;
};

export const schedule: readonly ScheduleEntry[] = [
  { day: "Montag", time: "16:00 – 17:00", group: "Kindertanzen", age: "4 bis 7 Jahre" },
  { day: "Montag", time: "17:15 – 18:30", group: "Kindertraining", age: "8 bis 11 Jahre" },
  { day: "Mittwoch", time: "17:00 – 18:15", group: "Jugendtraining", age: "12 bis 17 Jahre" },
  { day: "Mittwoch", time: "18:30 – 19:45", group: "Turniergruppe", age: "ab 10 Jahren, nach Absprache" },
  { day: "Freitag", time: "16:30 – 17:30", group: "Kindertanzen", age: "4 bis 7 Jahre" },
  { day: "Samstag", time: "10:00 – 11:30", group: "Formationstraining", age: "ab 8 Jahren" },
];

export type TeamProfile = {
  id: "oleksandr" | "tania";
  summary: string;
  tags: readonly string[];
};

export const teamProfiles: readonly TeamProfile[] = [
  {
    id: "oleksandr",
    summary:
      "Turniertechnik, Pro-Am-Begleitung für Damen und Paare sowie Taxitänzer auf Wiener Bällen. Auf Wunsch studiert er Ihren Hochzeitstanz ein.",
    tags: ["Turniercoaching", "Pro-Am", "Taxitänzer", "Hochzeitstanz"],
  },
  {
    id: "tania",
    summary:
      "Stretching und Body Conditioning für Erwachsene, Solo-Latin, Turniervorbereitung sowie Pro-Am-Begleitung für Herren auf dem Ballparkett.",
    tags: ["Stretching", "Solo-Latin", "Turniervorbereitung", "Pro-Am"],
  },
];

export type FaqItem = { question: string; answer: string };

export const clubFaq: readonly FaqItem[] = [
  {
    question: "Ab welchem Alter kann mein Kind teilnehmen?",
    answer:
      "Im Kindertanzen ab 4 Jahren. Kinder von 8 bis 11 Jahren und Jugendliche bis 17 Jahre trainieren in eigenen Gruppen.",
  },
  {
    question: "Benötigt mein Kind einen Tanzpartner?",
    answer:
      "Nein. Wir stellen die Paare innerhalb der Gruppe zusammen. Ein fester Partner ist nicht erforderlich.",
  },
  {
    question: "Was ist zum Schnuppertraining mitzubringen?",
    answer:
      "Bequeme Sportkleidung und saubere Hallenschuhe oder Socken genügen. Spezielle Tanzschuhe werden erst später benötigt – wir beraten Sie gerne.",
  },
  {
    question: "Worin unterscheiden sich Semesterkurs und 10er-Block?",
    answer:
      "Der Semesterkurs bindet einen festen Wochentermin für ein ganzes Semester und eignet sich für kontinuierlichen Fortschritt. Der 10er-Block bietet zehn flexible Einheiten in den passenden Gruppen und ist sechs Monate gültig.",
  },
  {
    question: "Kann mein Kind später an Turnieren teilnehmen?",
    answer:
      "Ja. Talentierte und motivierte Kinder begleiten wir in Absprache mit den Eltern in den Turniertanzsport.",
  },
];
