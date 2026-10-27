import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
};

/** Schmale Satzzeile über Überschriften, z. B. „✦ Wien 1040 · Standard & Latein ✦“. */
export function StatusBadge({ children, className }: Props) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium uppercase leading-snug tracking-[0.2em] text-gold-700 sm:tracking-[0.25em]",
        className,
      )}
    >
      <span aria-hidden="true">✦</span>
      <span>{children.replace(/\s*[•·]\s*/g, " · ")}</span>
      <span aria-hidden="true">✦</span>
    </p>
  );
}
