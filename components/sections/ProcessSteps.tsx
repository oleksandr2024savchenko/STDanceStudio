import { cn } from "@/lib/cn";

export type ProcessStep = { title: string; text: string };

type Props = {
  steps: readonly ProcessStep[];
  /** Überschriftsebene der Schritte; h4, wenn direkt darüber eine h3 steht. */
  as?: "h3" | "h4";
  className?: string;
};

export function ProcessSteps({ steps, as: Heading = "h3", className }: Props) {
  const columns =
    steps.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";

  return (
    <ol className={cn("grid grid-cols-1 gap-8", columns, className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-gold-500/40 pt-6">
          <span className="font-serif text-4xl text-gold-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Heading className="mt-3 text-xl">{step.title}</Heading>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
