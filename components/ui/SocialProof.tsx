import { cn } from "@/lib/cn";

type Props = {
  /** Anfangsbuchstaben der Personen, die als Avatare gezeigt werden. */
  initials: readonly string[];
  children: string;
  className?: string;
};

/** Vertrauensblock: überlappende Avatare mit kurzer Aussage. */
export function SocialProof({ initials, children, className }: Props) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <ul className="flex -space-x-2.5" aria-hidden="true">
        {initials.map((letter) => (
          <li
            key={letter}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 bg-gold-50 font-serif text-lg text-gold-700 ring-2 ring-canvas"
          >
            {letter}
          </li>
        ))}
      </ul>
      <p className="max-w-xs text-sm leading-snug text-ink/80">{children}</p>
    </div>
  );
}
