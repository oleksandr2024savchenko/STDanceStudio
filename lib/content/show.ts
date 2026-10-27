import { Crown, Footprints, MapPin, Music, Sparkles, Trophy, Users } from "lucide-react";
import type { Fact } from "@/components/sections/FactsDock";
import type { Principle } from "@/components/sections/PrincipleCards";
import { site } from "@/lib/site";
import type { FaqItem } from "./club";

export type ShowService = {
  id: string;
  title: string;
  text: string;
};

export const showServices: readonly ShowService[] = [
  {
    id: "ballroeffnung",
    title: "Balleröffnung",
    text: "Einzug, Polonaise und Eröffnungswalzer – stilsicher nach Wiener Tradition und abgestimmt auf Ihr Ballkomitee.",
  },
  {
    id: "mitternachtseinlage",
    title: "Mitternachtseinlage",
    text: "Eine Showeinlage als Höhepunkt des Abends: Latein, Standard oder eine Kombination, passend zum Motto Ihres Balls.",
  },
  {
    id: "komitee",
    title: "Damen- und Herrenkomitee",
    text: "Wir studieren den Eröffnungstanz mit Ihrem Komitee ein – auch für Teilnehmende ohne Vorkenntnisse.",
  },
  {
    id: "formation",
    title: "Vom Paar zur Formation",
    text: "Paar, Gruppe oder große Formation: Choreografie und Probenplan wachsen mit der Größe Ihres Auftritts.",
  },
];

export const showProcess: readonly { title: string; text: string }[] = [
  {
    title: "Anfrage & Briefing",
    text: "Wir besprechen Anlass, Rahmen, Teilnehmerzahl und Motto Ihrer Veranstaltung.",
  },
  {
    title: "Choreografie & Proben",
    text: "Sie erhalten ein Konzept samt Probenplan. Wir studieren die Choreografie mit allen Beteiligten ein.",
  },
  {
    title: "Ihr Auftritt",
    text: "Wir begleiten Sie bis zum Einzug. Der Applaus gehört Ihnen.",
  },
];

export const showFacts: readonly Fact[] = [
  { icon: Trophy, title: "Balleröffnung", text: "Einzug, Polonaise und Eröffnungswalzer" },
  { icon: Sparkles, title: "Mitternachtseinlage", text: "der Höhepunkt Ihres Abends" },
  { icon: Users, title: "Komitee & Formation", text: "vom Paar bis zur großen Gruppe" },
  {
    icon: MapPin,
    title: `${site.address.postalCode} ${site.address.city}`,
    text: site.address.street,
  },
];

export const showBenefits: readonly Principle[] = [
  {
    title: "Stilsicher nach Wiener Tradition",
    text: "Vom Einzug bis zum letzten Walzertakt: Wir kennen das Protokoll der Wiener Bälle und achten auf Haltung, Etikette und Timing.",
    icon: Crown,
  },
  {
    title: "Auch ohne Vorkenntnisse",
    text: "Ihr Komitee muss nicht tanzen können. Wir beginnen bei den Grundschritten und führen alle sicher zum Auftritt.",
    icon: Footprints,
  },
  {
    title: "Maßgeschneidert",
    text: "Choreografie, Musik und Probenplan richten sich nach Motto, Location und Größe Ihrer Gruppe.",
    icon: Music,
  },
];

export const showFaq: readonly FaqItem[] = [
  {
    question: "Wie läuft eine Balleröffnung mit Ihnen ab?",
    answer:
      "Nach Ihrer Anfrage besprechen wir Rahmen, Teilnehmerzahl und Motto. Danach erhalten Sie ein Konzept samt Probenplan und wir beginnen mit der Einstudierung.",
  },
  {
    question: "Wie viele Proben benötigt unser Komitee?",
    answer:
      "Das hängt von Gruppengröße und Vorkenntnissen ab. Im Briefing stellen wir Ihnen einen Probenplan zusammen, der zu Ihrem Zeitrahmen passt.",
  },
  {
    question: "Können Teilnehmende ohne Tanzerfahrung mitmachen?",
    answer:
      "Selbstverständlich. Die meisten Komitees bestehen aus Tanzanfängerinnen und Tanzanfängern. Wir passen Tempo und Schwierigkeit an die Gruppe an.",
  },
  {
    question: "Wo finden die Proben statt?",
    answer:
      "Im ST Dance Studio in der Favoritenstraße 27a, 1040 Wien. Eine Probe in Ihrer Location ist nach Absprache möglich.",
  },
  {
    question: "Wie früh sollten wir anfragen?",
    answer:
      "Möglichst früh. Für Bälle in der Hauptsaison empfehlen wir einen Vorlauf von mehreren Monaten. Termine werden in der Reihenfolge der Anfragen vergeben.",
  },
];
