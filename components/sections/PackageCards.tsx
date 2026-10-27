import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export type PackageItem = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
  badge?: string;
  cta: { label: string; href: string; external?: boolean };
};

type Props = {
  packages: readonly PackageItem[];
  /** Wird beim Klick auf den Button eines Pakets mit dessen ID aufgerufen. */
  onSelect?: (id: string) => void;
};

export function PackageCards({ packages, onSelect }: Props) {
  return (
    <ul
      className={
        packages.length === 2
          ? "mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
          : "grid gap-6 lg:grid-cols-3"
      }
    >
      {packages.map((item, index) => (
        <li key={item.id}>
          <Reveal delay={index * 0.08} className="h-full">
            <Card highlighted={item.highlighted} className="relative flex h-full flex-col">
              {item.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                  {item.badge}
                </span>
              )}
              <h3 className="text-2xl">{item.name}</h3>
              <p className="mt-6 bg-gradient-to-br from-gold-600 to-gold-800 bg-clip-text font-serif text-5xl text-transparent">{item.price}</p>
              <p className="mt-2 text-sm text-muted">{item.priceNote}</p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/80">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-700"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={item.cta.href}
                external={item.cta.external}
                onClick={onSelect ? () => onSelect(item.id) : undefined}
                variant={item.highlighted ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {item.cta.label}
              </Button>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
