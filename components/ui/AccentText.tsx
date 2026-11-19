type Props = {
  /** Text, in dem Hervorhebungen mit Sternchen markiert sind: "Tanzen mit *Haltung*". */
  text: string;
  /**
   * `gold`: kursiver Akzent in Goldprägung – bewusst nur einmal pro Seite (Hero).
   * `ink`: ruhige Kursive in Textfarbe für alle übrigen Überschriften.
   */
  tone?: "gold" | "ink";
};

/** Rendert Überschriften mit hervorgehobenen Schlüsselwörtern (`*Wort*`). */
export function AccentText({ text, tone = "gold" }: Props) {
  return (
    <>
      {text.split("*").map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className={tone === "gold" ? "accent-word" : "accent-word-ink"}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
