import { cn } from "@/lib/cn";
import { AccentText } from "./AccentText";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  /** Nummer des „Tanzes“ im Programm des Abends; erscheint vor dem Eyebrow. */
  tanz?: number;
  /** Hervorhebungen mit `*Wort*` markieren. */
  title: string;
  description?: string;
  /**
   * `split` (Standard): Editorial-Layout – Titel links, Text rechts, darüber eine Haarlinie.
   * `center`: klassisch zentriert, sparsam einsetzen (z. B. FAQ).
   * `left`: linksbündig in schmalen Spalten.
   */
  align?: "split" | "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

function Eyebrow({ eyebrow, tanz, center }: { eyebrow?: string; tanz?: number; center?: boolean }) {
  if (!eyebrow && !tanz) return null;
  return (
    <p
      className={cn(
        "mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-eyebrow text-gold-700",
        center ? "justify-center" : "justify-start",
      )}
    >
      {tanz && (
        <>
          <span className="font-serif text-lg normal-case italic tracking-normal">Tanz {tanz}</span>
          <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-brass" />
        </>
      )}
      {eyebrow}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  tanz,
  title,
  description,
  align = "split",
  as: Tag = "h2",
  className,
}: Props) {
  if (align === "split") {
    return (
      <Reveal
        className={cn(
          "relative grid grid-cols-1 gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12",
          className,
        )}
      >
        {/* Kurzes Goldstück auf der Haarlinie als ruhiger Auftakt der Sektion. */}
        <span aria-hidden="true" className="absolute -top-px left-0 h-px w-20 bg-brass" />
        <div className="lg:col-span-7">
          <Eyebrow eyebrow={eyebrow} tanz={tanz} />
          <Tag className="text-4xl leading-[1.08] md:text-5xl lg:text-[3.5rem]">
            <AccentText text={title} tone="ink" />
          </Tag>
        </div>
        {description && (
          <p className="max-w-md text-base font-light leading-[1.7] text-muted md:text-[17px] lg:col-span-5 lg:self-end lg:justify-self-end">
            {description}
          </p>
        )}
      </Reveal>
    );
  }

  const center = align === "center";
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <Eyebrow eyebrow={eyebrow} tanz={tanz} center={center} />
      <Tag className="text-4xl leading-[1.1] md:text-5xl">
        <AccentText text={title} tone="ink" />
      </Tag>
      <Ornament align={center ? "center" : "left"} className="mt-6" />
      {description && (
        <p className="mt-6 text-base font-light leading-[1.6] text-muted md:text-[17px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
