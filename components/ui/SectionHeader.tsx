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
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  tanz,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(eyebrow || tanz) && (
        <p
          className={cn(
            "mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-eyebrow text-gold-700",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          {tanz && (
            <>
              <span className="font-serif text-lg normal-case italic tracking-normal">
                Tanz {tanz}
              </span>
              <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-brass" />
            </>
          )}
          {eyebrow}
        </p>
      )}
      <Tag className="text-4xl leading-[1.1] md:text-5xl">
        <AccentText text={title} />
      </Tag>
      <Ornament align={align} className="mt-6" />
      {description && (
        <p className="mt-6 text-base font-light leading-[1.6] text-muted md:text-[17px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
