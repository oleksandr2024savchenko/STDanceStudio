import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export type ExtraService = {
  id: string;
  icon: "crown" | "music";
  eyebrow: string;
  title: string;
  teaser: string;
  paragraphs: readonly string[];
  bullets: readonly string[];
  cta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
};

const contact = trainers.oleksandr;

export const extraServices: readonly ExtraService[] = [
  {
    id: "ballvorbereitung",
    icon: "crown",
    eyebrow: "Ballsaison",
    title: "Ballvorbereitung",
    teaser: "Sicher auf dem Parkett – vom Eröffnungswalzer bis zur Mitternachtseinlage.",
    paragraphs: [
      "Ein Wiener Ball ist ein Höhepunkt des Jahres – und mit ein wenig Vorbereitung tanzen Sie ihn entspannt und mit Freude. Wir bereiten Einzelpersonen, Paare und Gruppen gezielt auf Ihren Ball vor.",
      "Ob Debütantenpaar, Komitee oder Gast, der einfach nicht nur am Rand stehen möchte: Wir holen Sie dort ab, wo Sie stehen.",
    ],
    bullets: [
      "Wiener Walzer und Langsamer Walzer, Polka sowie weitere Ballklassiker",
      "Führen und Folgen, Haltung und Etikette auf dem Ballparkett",
      "Einzel-, Paar- oder Gruppenunterricht – auch als kompakter Intensivkurs vor dem Ball",
      "Einstudieren von Balleröffnung und Einlagen für Komitees (siehe Show)",
    ],
    cta: {
      label: "Ballvorbereitung anfragen",
      href: buildWhatsAppUrl(
        contact.phone,
        "Guten Tag Oleksandr, wir möchten uns auf einen Ball vorbereiten und bitten um einen Terminvorschlag.\n\nName des Balls / Datum:\nAnzahl Personen:\nTanzerfahrung:",
      ),
      external: true,
    },
    secondaryCta: { label: "Zu Show & Balleröffnungen", href: "/show" },
  },
  {
    id: "wiener-walzer",
    icon: "music",
    eyebrow: "Viennese Waltz Experience",
    title: "Wiener Walzer erleben",
    teaser: "Ein Stück Wiener Flair: den Walzer in kurzer Zeit selbst tanzen.",
    paragraphs: [
      "Sie sind in Wien zu Gast, feiern einen besonderen Anlass oder möchten einfach das Wiener Lebensgefühl spüren? In einer persönlichen Einheit lernen Sie die Grundlagen des Wiener Walzers – ganz ohne Vorkenntnisse.",
      "Wir unterrichten auf Deutsch, Englisch, Ukrainisch und Russisch. Am Ende tanzen Sie Ihre ersten Runden zu klassischer Musik.",
    ],
    bullets: [
      "Für Einzelpersonen, Paare, Familien und kleine Gruppen",
      "Keine Vorkenntnisse nötig, bequeme Kleidung genügt",
      "Auch als Geschenk, für Jubiläen oder Junggesellenabschiede",
      "Unterricht auf Deutsch, Englisch, Ukrainisch oder Russisch",
    ],
    cta: {
      label: "Wiener Walzer anfragen",
      href: buildWhatsAppUrl(
        contact.phone,
        "Guten Tag Oleksandr, wir möchten den Wiener Walzer in einer Einheit ausprobieren.\n\nWunschtermin:\nAnzahl Personen:\nSprache (DE / EN / UK / RU):",
      ),
      external: true,
    },
  },
];


export type FeaturedService = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  bullets: readonly string[];
  image: { src: string; alt: string };
  cta: { label: string; href: string };
};

export const featuredServices: readonly FeaturedService[] = [
  {
    id: "show",
    eyebrow: "Für Bälle & Galaabende",
    title: "Show & Balleröffnungen",
    text: "Balleröffnung, Mitternachtseinlage oder große Formation: Wir choreografieren Ihren Auftritt und studieren ihn mit Ihrem Komitee ein – auch ohne Tanzerfahrung.",
    bullets: ["Balleröffnung & Eröffnungswalzer", "Mitternachtseinlagen & Formationen", "Persönlich betreut von Oleksandr und Tetiana"],
    image: {
      src: "/images/hero-ballroom.jpg",
      alt: "Tanzpaar in klassischer Standardhaltung auf einem Parkettboden in einem hellen Wiener Saal",
    },
    cta: { label: "Zu Show & Balleröffnungen", href: "/show" },
  },
  {
    id: "hochzeitstanz",
    eyebrow: "Für Brautpaare",
    title: "Hochzeitstanz",
    text: "Ihr erster Tanz als Ehepaar: Wir studieren Ihren Hochzeitswalzer ein – als Express in vier Einheiten oder als individuelle Komplettchoreografie zu Ihrem Lieblingslied.",
    bullets: ["Express in 4 Einheiten oder Komplettpaket", "Auch ohne Tanzerfahrung geeignet", "Choreografie zu Ihrer Wunschmusik"],
    image: {
      src: "/images/hero-wedding.jpg",
      alt: "Brautpaar beim ersten Tanz in einem hellen Saal mit hohen Fenstern und Parkettboden",
    },
    cta: { label: "Zum Hochzeitstanz", href: "/hochzeitstanz" },
  },
];
