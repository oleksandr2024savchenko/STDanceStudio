import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
};

/** Vertrauenszeile: feine Zierlinie mit kurzer Aussage, ohne Avatar-Kreise. */
export function SocialProof({ children, className }: Props) {
  return (
    <p className={cn("flex items-center gap-4 text-xs tracking-wider text-muted", className)}>
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-brass/70" />
      <span className="max-w-sm leading-relaxed">{children}</span>
    </p>
  );
}
