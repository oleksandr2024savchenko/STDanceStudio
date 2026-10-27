import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type Fact = { icon: LucideIcon; title: string; text: string };

type Props = {
  facts: readonly Fact[];
  label: string;
};

/** Schwebende Leiste mit vier Kernvorteilen, ragt in den Hero hinein. */
export function FactsDock({ facts, label }: Props) {
  return (
    <div className="relative z-10 -mt-14 md:-mt-16">
      <Container>
        <Reveal>
          <ul
            aria-label={label}
            className="grid grid-cols-2 gap-y-4 rounded-[2px] border border-brass/30 bg-surface p-4 shadow-glass lg:grid-cols-4 lg:gap-y-0"
          >
            {facts.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className={
                  "relative flex flex-col items-center px-3 py-3 text-center " +
                  // Feine goldene Trennlinie rechts: bei zwei Spalten nur nach links stehenden Feldern.
                  "after:absolute after:right-0 after:top-1/2 after:h-3/4 after:w-px after:-translate-y-1/2 " +
                  "after:bg-gradient-to-b after:from-transparent after:via-brass/60 after:to-transparent " +
                  "max-lg:even:after:hidden lg:last:after:hidden"
                }
              >
                <Icon className="h-7 w-7 text-brass" strokeWidth={1.5} aria-hidden="true" />
                <p className="mt-3 font-serif text-xl text-ink">{title}</p>
                <p className="mt-1 text-sm leading-snug text-ink/75">{text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </div>
  );
}
