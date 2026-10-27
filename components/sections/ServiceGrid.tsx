import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

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
        services.length === 3 ? "grid gap-6 lg:grid-cols-3" : "grid gap-6 md:grid-cols-2"
      }
    >
      {services.map(({ id, title, text, icon: Icon, points, link }, index) => (
        <li key={id}>
          <Reveal delay={(index % 2) * 0.08} className="h-full">
            <Card className="flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-50 text-gold-700 shadow-sm">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/80">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-700"
                      aria-hidden="true"
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
