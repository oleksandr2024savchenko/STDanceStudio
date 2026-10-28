export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Unterpfad beim Hosting auf GitHub Pages, sonst leer. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "ST Dance Studio",
  shortName: "ST Dance",
  tagline: "Tanzen mit Haltung – im Herzen von Wien",
  description:
    "ST Dance Studio in Wien: Kinder- und Jugendtraining im Turniertanz, Choreografien für Wiener Bälle, Pro-Am-Coaching und Hochzeitstanz. Jetzt Schnuppertraining vereinbaren.",
  locale: "de_AT",
  email: "kontakt@st-dance.example",
  address: {
    street: "Favoritenstraße 27a",
    postalCode: "1040",
    city: "Wien",
    region: "Wien",
    country: "AT",
    countryName: "Österreich",
  },
} as const;

export type Trainer = {
  id: "oleksandr" | "tetiana";
  name: string;
  role: string;
  href: string;
  phone: string; // internationales Format ohne Leerzeichen
  phoneDisplay: string;
  whatsappGreeting: string;
};

export const trainers: Record<Trainer["id"], Trainer> = {
  oleksandr: {
    id: "oleksandr",
    name: "Oleksandr",
    role: "Turniertrainer & Pro-Am-Partner",
    href: "/oleksandr",
    phone: "+436787832431",
    phoneDisplay: "+43 678 7832431",
    whatsappGreeting:
      "Guten Tag Oleksandr, ich interessiere mich für Ihr Training und bitte um Rückmeldung.",
  },
  tetiana: {
    id: "tetiana",
    name: "Tetiana",
    role: "Stretching, Latin & Turniervorbereitung",
    href: "/tetiana",
    phone: "+4367764802096",
    phoneDisplay: "+43 677 64802096",
    whatsappGreeting:
      "Guten Tag Tetiana, ich interessiere mich für Ihr Training und bitte um Rückmeldung.",
  },
};

export type NavItem = { label: string; href: string };

export const legalNav: readonly NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export const mainNav: readonly NavItem[] = [
  { label: "Club", href: "/" },
  { label: "Oleksandr", href: "/oleksandr" },
  { label: "Tetiana", href: "/tetiana" },
  { label: "Show", href: "/show" },
  { label: "Weitere Leistungen", href: "/weitere-leistungen" },
];
