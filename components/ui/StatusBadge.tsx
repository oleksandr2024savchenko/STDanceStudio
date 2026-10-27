import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
};

/** Kapselmedaillon über Überschriften, z. B. „Wien 1040 • Standard & Latein“. */
export function StatusBadge({ children, className }: Props) {
  return (
    <p
      className={cn(
        "inline-flex max-w-full items-center gap-3 rounded-full border border-brass/40 px-5 py-2 text-[11px] font-medium uppercase leading-snug tracking-[0.16em] text-gold-700 sm:tracking-[0.22em]",
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
      {children}
    </p>
  );
}
