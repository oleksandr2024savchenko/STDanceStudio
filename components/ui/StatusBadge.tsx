import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
};

/** Schmale Statusplakette über Überschriften, z. B. „Wien 1040 • Standard & Latein“. */
export function StatusBadge({ children, className }: Props) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-ink/80",
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-500" />
      {children}
    </p>
  );
}
