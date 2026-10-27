import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** `arch`: Bogenfenster für Fotos. `panel`: Fläche mit Mikro-Rundung für Formulare und Karten. */
  shape?: "arch" | "panel";
  /** Goldener Vierzack (✦) im Scheitelpunkt. */
  star?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

/** Vierzackiger Stern als SVG, damit er unabhängig von Schriftarten sauber rendert. */
function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4 fill-brass", className)}
    >
      <path d="M12 0c.7 7 4.9 11.3 12 12-7.1.7-11.3 5-12 12-.7-7-4.9-11.3-12-12C7.1 11.3 11.3 7 12 0Z" />
    </svg>
  );
}

/**
 * Doppelrahmen im Palais-Stil: außen eine Haarlinie (1 px, Gold 50 %), 5 px Abstand,
 * innen eine zweite Kontur (Gold 25 %). Dazu eine warme, goldstichige Tiefe.
 */
export function GoldFrame({
  shape = "panel",
  star = shape === "arch",
  className,
  innerClassName,
  children,
}: Props) {
  const arch = shape === "arch";

  return (
    <div
      className={cn(
        "relative border border-brass/60 p-[5px] shadow-frame",
        arch ? "rounded-t-[999px] rounded-b-[2px]" : "rounded-[2px]",
        className,
      )}
    >
      {star && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 [filter:drop-shadow(0_0_5px_#FAF8F5)_drop-shadow(0_0_5px_#FAF8F5)]"
        >
          <Star />
        </span>
      )}
      <div
        className={cn(
          "relative overflow-hidden border border-brass/40 bg-surface",
          arch ? "rounded-t-[999px] rounded-b-[1px]" : "rounded-[1px]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
