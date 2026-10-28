/**
 * „Über mich“-Texte der Trainer. Platzhalter – bitte später durch die echten Texte
 * ersetzen. Das Porträtfoto wird über `photo` eingetragen (Datei unter /public/images/,
 * z. B. { src: "/images/oleksandr.jpg", alt: "Oleksandr im Tanzsaal" }).
 */
export type TrainerAbout = {
  /** Titel mit `*Hervorhebung*`. */
  title: string;
  /** Kurze Zeile unter dem Titel (Rolle / Schwerpunkt). */
  tagline: string;
  paragraphs: readonly string[];
  /** Porträtfoto; solange nicht gesetzt, erscheint ein Platzhalter. */
  photo?: { src: string; alt: string };
};

export const oleksandrAbout: TrainerAbout = {
  title: "Hallo, ich bin *Oleksandr*",
  tagline: "Turniertrainer & Pro-Am-Partner",
  paragraphs: [
    "Tanzen ist für mich mehr als Technik: Es ist Haltung, Disziplin und die Freude, gemeinsam etwas zu erreichen – im Turnier, auf dem Ball und im Alltag.",
    "An dieser Stelle folgt in Kürze eine persönliche Vorstellung: mein Werdegang, meine Erfahrung auf dem Turnierparkett und was mir in der Arbeit mit Damen, Paaren und Hochzeitspaaren besonders wichtig ist.",
  ],
};

export const tetianaAbout: TrainerAbout = {
  title: "Hallo, ich bin *Tetiana*",
  tagline: "Stretching, Latin & Turniervorbereitung",
  paragraphs: [
    "Für mich sind Beweglichkeit und Ausstrahlung zwei Seiten derselben Sache: Wer sich in seinem Körper wohlfühlt, tanzt und tritt freier auf.",
    "An dieser Stelle folgt in Kürze eine persönliche Vorstellung: mein Werdegang, meine Erfahrung im Latein und im Turnier und was mir im Training mit Ihnen besonders am Herzen liegt.",
  ],
};
