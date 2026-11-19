import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { toRoman, waltzDelay } from "@/lib/motion";

export type ServiceItem = {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
  points: readonly string[];
  link?: { label: string; href: string };
};

type Props = {
  services: readonly ServiceItem[];
};

export function ServiceGrid({ services }: Props) {
  return (
    <ul
      className={
        services.length === 3
          ? "grid grid-cols-1 gap-6 lg:grid-cols-3"
          : "grid grid-cols-1 gap-6 md:grid-cols-2"
      }
    >
      {services.map(({ id, title, text, points, link }, index) => (
        <li key={id}>
          <Reveal delay={waltzDelay(index)} className="h-full">
            <Card className="flex h-full flex-col">
              <span
                aria-hidden="true"
                className="font-serif text-4xl italic leading-none text-gold-600"
              >
                {toRoman(index + 1)}.
              </span>
              <h3 className="mt-5 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/80">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              {link && (
                <Link
                  href={link.href}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-700 transition-colors hover:text-gold-800"
                >
                  {link.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
