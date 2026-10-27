import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export type Principle = { title: string; text: string; icon: LucideIcon };

type Props = {
  principles: readonly Principle[];
};

export function PrincipleCards({ principles }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {principles.map(({ title, text, icon: Icon }, index) => (
        <li key={title}>
          <Reveal delay={index * 0.08} className="h-full">
            <Card className="h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-[2px] border border-gold-500/40 text-gold-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
