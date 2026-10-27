"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { WeddingForm } from "@/components/forms/WeddingForm";
import { AccentText } from "@/components/ui/AccentText";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  isWeddingPackageId,
  weddingPackages,
  type WeddingPackageId,
} from "@/lib/content/wedding";
import { trainers } from "@/lib/site";
import { buildTelUrl } from "@/lib/whatsapp";
import { PackageCards } from "./PackageCards";

const trainer = trainers.oleksandr;

/**
 * Pakete und Anfrageformular teilen sich den Zustand:
 * Ein Klick auf ein Paket wählt es im Formular vor.
 */
export function WeddingBooking() {
  const [selected, setSelected] = useState<WeddingPackageId>("unsicher");

  return (
    <>
      <Section id="pakete" className="bg-canvas-alt">
        <SectionHeader
          eyebrow="Pakete & Preise"
          title="Zwei Wege zum *perfekten ersten Tanz*"
          description="Wählen Sie den schnellen Express oder die individuelle Komplettchoreografie. Beide Pakete sind auch ohne Tanzerfahrung geeignet."
        />
        <div className="mt-16">
          <PackageCards
            packages={weddingPackages}
            onSelect={(id) => {
              if (isWeddingPackageId(id)) setSelected(id);
            }}
          />
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Alle Preise in Euro, pro Brautpaar. Weitere Wünsche, etwa eine Choreografie für die
          Hochzeitsgesellschaft, besprechen wir gerne persönlich.
        </p>
      </Section>

      <Section id="anfrage">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
              Unverbindliche Anfrage
            </p>
            <h2 className="text-4xl leading-[1.1] md:text-5xl">
              <AccentText text="Erzählen Sie uns von Ihrem *großen Tag*" />
            </h2>
            <Ornament align="left" className="mt-6" />
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Wenige Angaben genügen. Ihre Anfrage geht direkt per WhatsApp an Oleksandr, der
              Ihren Hochzeitstanz persönlich betreut.
            </p>

            <div className="mt-10 flex items-center gap-5 rounded-2xl border border-line bg-surface p-6">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-canvas-alt font-serif text-3xl text-gold-700"
              >
                {trainer.name.charAt(0)}
              </span>
              <div className="text-sm">
                <p className="font-serif text-2xl text-ink">{trainer.name}</p>
                <p className="mt-1 text-gold-700">Ihr Ansprechpartner</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-muted">
                  <a
                    href={buildTelUrl(trainer.phone)}
                    className="inline-flex items-center gap-2 transition-colors hover:text-gold-800"
                  >
                    <Phone className="h-4 w-4 text-gold-600" aria-hidden="true" />
                    {trainer.phoneDisplay}
                  </a>
                  <Link
                    href={trainer.href}
                    className="transition-colors hover:text-gold-800"
                  >
                    Zum Profil
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GoldFrame innerClassName="p-8 md:p-10">
              <WeddingForm selected={selected} onSelectedChange={setSelected} />
            </GoldFrame>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
