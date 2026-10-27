import { cn } from "@/lib/cn";
import { AccentText } from "./AccentText";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  /** Hervorhebungen mit `*Wort*` markieren. */
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
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
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
          {eyebrow}
        </p>
      )}
      <Tag className="text-4xl leading-[1.1] md:text-5xl">
        <AccentText text={title} />
      </Tag>
      <Ornament align={align} className="mt-6" />
      {description && (
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
