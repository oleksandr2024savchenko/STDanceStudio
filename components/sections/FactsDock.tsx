import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type Fact = { icon: LucideIcon; title: string; text: string };

type Props = {
  facts: readonly Fact[];
  label: string;
};

/** Schwebende Glas-Leiste mit vier Kernvorteilen, ragt in den Hero hinein. */
export function FactsDock({ facts, label }: Props) {
  return (
    <div className="relative z-10 -mt-14 md:-mt-16">
      <Container>
        <Reveal>
          <ul
            aria-label={label}
            className="grid grid-cols-2 gap-y-6 rounded-2xl border border-stone-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-md lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-stone-200/80"
          >
            {facts.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col items-center px-3 py-3 text-center">
                <Icon className="h-7 w-7 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
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
