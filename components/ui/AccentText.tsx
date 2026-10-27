type Props = {
  /** Text, in dem Hervorhebungen mit Sternchen markiert sind: "Tanzen mit *Haltung*". */
  text: string;
};

/**
 * Rendert Überschriften mit hervorgehobenen Schlüsselwörtern.
 * Die Markierung `*Wort*` wird zu einem kursiven Akzent in Goldprägung (Farbverlauf im Text, ohne Fläche dahinter).
 */
export function AccentText({ text }: Props) {
  return (
    <>
      {text.split("*").map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="accent-word">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
