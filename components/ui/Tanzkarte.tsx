import { cn } from "@/lib/cn";

export type TanzkarteEntry = {
  title: string;
  /** Zusatz hinter dem Titel, z. B. Altersangabe. */
  note?: string;
  /** Kurzer Text unter dem Titel. */
  text?: string;
  /** Rechts hinter der Punktlinie, z. B. die Uhrzeit. */
  meta?: string;
};

export type TanzkarteSection = {
  heading?: string;
  entries: readonly TanzkarteEntry[];
};

type Props = {
  title?: string;
  subtitle?: string;
  sections: readonly TanzkarteSection[];
  /** Barrierefreie Beschreibung der Liste. */
  label: string;
  className?: string;
};

/** Quaste an goldener Kordel, wie sie an den Tanzkarten der Wiener Bälle hing. */
function Tassel() {
  return (
    <svg
      viewBox="0 0 28 84"
      aria-hidden="true"
      className="pointer-events-none absolute right-7 top-0 h-[84px] w-7"
    >
      <path d="M14 0v38" className="stroke-brass" strokeWidth="1.4" fill="none" />
      <path
        d="M10 38h8v6c0 2-1.8 3-4 3s-4-1-4-3Z"
        className="fill-brass"
      />
      <g className="stroke-brass" strokeWidth="1" strokeLinecap="round" fill="none">
        <path d="M9 49c-.8 8-1.4 16-1.8 28" />
        <path d="M11.5 49.5c-.4 9-.6 18-.6 29" />
        <path d="M14 50v31" />
        <path d="M16.5 49.5c.4 9 .6 18 .6 29" />
        <path d="M19 49c.8 8 1.4 16 1.8 28" />
      </g>
    </svg>
  );
}

/**
 * Tanzkarte: nummerierte Programmfolge mit Punktlinien, als Papier gestaltet.
 * Die Nummern laufen über alle Abschnitte hinweg weiter.
 */
export function Tanzkarte({ title = "Tanzkarte", subtitle, sections, label, className }: Props) {
  // Laufende Nummer je Abschnitt vorab berechnen, damit das Rendern frei von Seiteneffekten bleibt.
  const offsets = sections.map((_, index) =>
    sections.slice(0, index).reduce((sum, section) => sum + section.entries.length, 0),
  );

  return (
    <div
      className={cn(
        "relative rounded-[2px] border border-brass/40 bg-surface px-6 pb-8 pt-10 shadow-frame sm:px-10",
        className,
      )}
    >
      {/* Papierkante: feine zweite Linie im Abstand */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[5px] rounded-[3px] border border-brass/20"
      />
      <Tassel />

      <header className="relative text-center">
        <p className="font-serif text-3xl tracking-[0.08em] text-ink sm:text-4xl">{title}</p>
        {subtitle && (
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-700">
            {subtitle}
          </p>
        )}
      </header>

      <div className="relative mt-8 space-y-8" role="group" aria-label={label}>
        {sections.map((section, sectionIndex) => (
          <div key={section.heading ?? sectionIndex}>
            {section.heading && (
              <p className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-brass" />
                {section.heading}
                <span aria-hidden="true" className="h-px flex-1 bg-brass/25" />
              </p>
            )}
            <ol className="space-y-5">
              {section.entries.map((entry, entryIndex) => {
                const number = (offsets[sectionIndex] ?? 0) + entryIndex + 1;
                return (
                  <li key={`${entry.title}-${entry.meta ?? number}`} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="w-7 shrink-0 text-right font-serif text-2xl italic leading-none text-gold-700"
                    >
                      {number}.
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:flex-nowrap">
                        <span className="font-serif text-xl leading-tight text-ink sm:text-2xl">
                          {entry.title}
                        </span>
                        {entry.note && (
                          <span className="text-xs text-muted">{entry.note}</span>
                        )}
                        {entry.meta && (
                          <>
                            <span
                              aria-hidden="true"
                              className="hidden min-w-6 flex-1 translate-y-[-3px] border-b border-dotted border-brass/60 sm:block"
                            />
                            <span className="whitespace-nowrap font-serif text-lg text-gold-700">
                              {entry.meta}
                            </span>
                          </>
                        )}
                      </div>
                      {entry.text && (
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{entry.text}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
