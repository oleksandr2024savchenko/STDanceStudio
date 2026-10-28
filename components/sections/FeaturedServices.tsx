import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Reveal } from "@/components/ui/Reveal";
import type { FeaturedService } from "@/lib/content/leistungen";
import { BASE_PATH } from "@/lib/site";

/** Zwei Schwerpunkte (Show, Hochzeitstanz) als große Karten mit Bild. */
export function FeaturedServices({ items }: { items: readonly FeaturedService[] }) {
  return (
    <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <li key={item.id} id={item.id} className="scroll-mt-28">
          <Reveal delay={index * 0.1} className="h-full">
            <GoldFrame shape="panel" className="h-full" innerClassName="flex h-full flex-col">
              <div className="relative aspect-[4/3] bg-canvas-alt">
                <Image
                  src={`${BASE_PATH}${item.image.src}`}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 480px, 90vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-xs font-medium uppercase tracking-eyebrow text-gold-700">
                  {item.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button href={item.cta.href} size="md" className="w-full sm:w-auto">
                    {item.cta.label}
                  </Button>
                </div>
              </div>
            </GoldFrame>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
