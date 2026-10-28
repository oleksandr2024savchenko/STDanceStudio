"use client";

import { Check, ChevronDown, Crown, Heart, Music } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { ExtraService } from "@/lib/content/leistungen";

const icons = { crown: Crown, music: Music, heart: Heart } as const;

type Props = { items: readonly ExtraService[] };

/** Harmonika: ein Punkt ist offen, der Anker (#id) öffnet den passenden Eintrag. */
export function ExtraServicesAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (items.some((item) => item.id === id)) setOpenId(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  return (
    <ul className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {items.map((item) => {
        const open = item.id === openId;
        const Icon = icons[item.icon];
        const panelId = `${item.id}-panel`;
        const buttonId = `${item.id}-trigger`;
        return (
          <li key={item.id} id={item.id} className="scroll-mt-28">
            <h2>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center gap-5 py-6 text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[2px] border border-gold-500/40 text-gold-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-medium uppercase tracking-eyebrow text-gold-700">
                    {item.eyebrow}
                  </span>
                  <span className="mt-1 block font-serif text-2xl leading-tight text-ink md:text-3xl">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm font-light text-muted">{item.teaser}</span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-gold-700 transition-transform duration-300",
                    open && "rotate-180",
                  )}
                />
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-8 pl-0 sm:pl-[4.25rem]"
            >
              <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
                {item.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {item.bullets.map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={item.cta.href} external={item.cta.external} size="md">
                  {item.cta.label}
                </Button>
                {item.secondaryCta && (
                  <Button href={item.secondaryCta.href} size="md" variant="outline">
                    {item.secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
