type Props = {
  /** Text, in dem Hervorhebungen mit Sternchen markiert sind: "Tanzen mit *Haltung*". */
  text: string;
};

/**
 * Rendert Überschriften mit hervorgehobenen Schlüsselwörtern.
 * Die Markierung `*Wort*` wird zu einem goldenen Kursivakzent mit dezentem Textmarker.
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
