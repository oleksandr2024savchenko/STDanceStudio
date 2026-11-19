import { Button } from "@/components/ui/Button";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Reveal } from "@/components/ui/Reveal";
import { waltzDelay } from "@/lib/motion";

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

/**
 * Preise als „Preiskarte“ – gesetzt wie die Karte eines Wiener Kaffeehauses:
 * ein gerahmtes Blatt, Einträge untereinander, Name links, Preis rechts.
 * Empfehlungen erscheinen als kursive Randnotiz statt als Badge.
 */
export function PackageCards({ packages, onSelect }: Props) {
  return (
    <Reveal>
      <GoldFrame star className="mx-auto max-w-5xl" innerClassName="px-6 md:px-14">
        <p className="pt-10 text-center font-serif text-lg italic text-gold-700">Preiskarte</p>
        <ul className="divide-y divide-line">
          {packages.map((item, index) => (
            <li key={item.id}>
              <Reveal
                delay={waltzDelay(index)}
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-3xl md:text-[2.25rem]">{item.name}</h3>
                    {item.badge && (
                      <span className="font-serif text-lg italic text-gold-700">
                        – {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-ink/80 sm:grid-cols-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start md:col-span-5 md:items-end md:text-right">
                  <p className="font-serif text-5xl leading-none text-ink md:text-6xl">
                    {item.price}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
                    {item.priceNote}
                  </p>
                  <Button
                    href={item.cta.href}
                    external={item.cta.external}
                    onClick={onSelect ? () => onSelect(item.id) : undefined}
                    variant={item.highlighted ? "primary" : "outline"}
                    className="mt-8 w-full sm:w-auto"
                  >
                    {item.cta.label}
                  </Button>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </GoldFrame>
    </Reveal>
  );
}
