import { site, trainers } from "@/lib/site";

/**
 * Angaben für das Impressum. Optionale Felder erscheinen nur, wenn sie befüllt sind.
 * Bitte vor dem Livegang mit den tatsächlichen Unternehmensdaten ergänzen.
 */
export type LegalDetails = {
  /** Inhaber bzw. vertretungsbefugte Person, z. B. "Max Mustermann". */
  owner?: string;
  /** Rechtsform, z. B. "Einzelunternehmen". */
  legalForm?: string;
  /** Umsatzsteuer-Identifikationsnummer, z. B. "ATU12345678". */
  uid?: string;
  /** Firmenbuchnummer samt Firmenbuchgericht. */
  companyRegister?: string;
  /** Zuständige Gewerbebehörde. */
  tradeAuthority?: string;
  /** Kammerzugehörigkeit, z. B. "Wirtschaftskammer Wien". */
  chamber?: string;
};

export const legalDetails: LegalDetails = {};

export const legalUpdated = "Oktober 2026";

export type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
};

const { address } = site;
const addressLine = `${address.street}, ${address.postalCode} ${address.city}, ${address.countryName}`;
const phones = Object.values(trainers)
  .map((trainer) => `${trainer.name}: ${trainer.phoneDisplay}`)
  .join(" · ");

export const privacySections: readonly LegalSection[] = [
  {
    heading: "1. Verantwortlicher",
    paragraphs: [
      `Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten auf dieser Website ist ${site.name}, ${addressLine}.`,
      `Sie erreichen uns per E-Mail unter ${site.email} sowie telefonisch unter ${phones}.`,
    ],
  },
  {
    heading: "2. Grundsätze",
    paragraphs: [
      "Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG).",
      "Diese Website verwendet keine Tracking- oder Analyse-Cookies und bindet keine Werbenetzwerke ein. Es werden daher keine Cookie-Einwilligungen benötigt.",
    ],
  },
  {
    heading: "3. Besuch der Website",
    paragraphs: [
      "Beim Aufruf unserer Seiten verarbeitet der Hosting-Anbieter technisch notwendige Verbindungsdaten in sogenannten Server-Logfiles, etwa IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browsertyp.",
      "Zweck der Verarbeitung ist der sichere und stabile Betrieb der Website. Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nur so lange gespeichert, wie es für diesen Zweck erforderlich ist.",
    ],
  },
  {
    heading: "4. Anfragen über die Formulare",
    paragraphs: [
      "Unsere Formulare für Schnuppertraining und Hochzeitstanz speichern Ihre Eingaben nicht auf unserem Server. Beim Absenden öffnet sich WhatsApp mit einer vorausgefüllten Nachricht. Ihre Angaben werden erst übermittelt, wenn Sie diese Nachricht in WhatsApp selbst absenden.",
      "Die Übermittlung erfolgt über WhatsApp, einen Dienst der WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland. Für diese Verarbeitung gelten die Datenschutzbestimmungen von WhatsApp.",
      "Wir verwenden Ihre Angaben ausschließlich, um Ihre Anfrage zu beantworten und einen Termin zu vereinbaren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie unser berechtigtes Interesse an der Bearbeitung von Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.",
      "Wenn Sie Angaben zu einem Kind machen, bitten wir darum, dass die Anfrage durch eine erziehungsberechtigte Person erfolgt. Wir löschen Anfragedaten, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    ],
  },
  {
    heading: "5. Kontakt per Telefon, WhatsApp und E-Mail",
    paragraphs: [
      "Wenn Sie uns anrufen, per WhatsApp oder per E-Mail kontaktieren, verarbeiten wir Ihre Kontaktdaten und den Inhalt Ihrer Nachricht zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.",
    ],
  },
  {
    heading: "6. Schriftarten und externe Links",
    paragraphs: [
      "Die auf dieser Website verwendeten Schriftarten werden von unserem eigenen Server ausgeliefert. Beim Seitenaufruf wird keine Verbindung zu den Servern von Schriftanbietern hergestellt.",
      "Unsere Seiten enthalten Links zu externen Diensten, etwa zu Google Maps für die Routenplanung oder zu WhatsApp. Erst wenn Sie einen solchen Link anklicken, werden Daten an den jeweiligen Anbieter übermittelt. Für diese Verarbeitung ist der jeweilige Anbieter verantwortlich.",
    ],
  },
  {
    heading: "7. Ihre Rechte",
    paragraphs: [
      "Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu. Bitte wenden Sie sich dazu an die oben genannten Kontaktdaten.",
      "Sie haben außerdem das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, E-Mail: dsb@dsb.gv.at, www.dsb.gv.at.",
    ],
  },
  {
    heading: "8. Änderungen",
    paragraphs: [
      "Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die rechtlichen Vorgaben ändern. Es gilt die jeweils hier veröffentlichte Fassung.",
    ],
  },
];

export const liabilitySections: readonly LegalSection[] = [
  {
    heading: "Haftung für Inhalte",
    paragraphs: [
      "Wir erstellen die Inhalte dieser Website mit größtmöglicher Sorgfalt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir dennoch keine Gewähr übernehmen. Preise und Termine verstehen sich als unverbindliche Information, verbindlich ist die persönliche Bestätigung durch uns.",
    ],
  },
  {
    heading: "Haftung für Links",
    paragraphs: [
      "Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss und übernehmen dafür keine Haftung. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.",
    ],
  },
  {
    heading: "Urheberrecht",
    paragraphs: [
      "Texte, Grafiken und sonstige Inhalte dieser Website unterliegen dem Urheberrecht. Eine Vervielfältigung oder Verwendung bedarf unserer vorherigen Zustimmung.",
    ],
  },
];
