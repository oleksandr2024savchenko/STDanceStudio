import { cn } from "@/lib/cn";

type Props = {
  align?: "left" | "center";
  className?: string;
};

/** Dezenter goldener Trenner: Haarlinie, Raute, Haarlinie. */
export function Ornament({ align = "center", className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center gap-3",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/70" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/70" />
    </div>
  );
}
