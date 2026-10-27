"use client";

import { MessageCircle } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, controlClasses } from "@/components/ui/Field";
import {
  WEDDING_PACKAGE_IDS,
  isWeddingPackageId,
  weddingPackageLabels,
  type WeddingPackageId,
} from "@/lib/content/wedding";
import { formatDateDe, readField } from "@/lib/forms";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppSuccess } from "./WhatsAppSuccess";

const EXPERIENCE = [
  "Keine Tanzerfahrung",
  "Grundkenntnisse",
  "Fortgeschritten",
] as const;

type Props = {
  selected: WeddingPackageId;
  onSelectedChange: (id: WeddingPackageId) => void;
};

type Sent = { url: string };

const trainer = trainers.oleksandr;

export function WeddingForm({ selected, onSelectedChange }: Props) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [sent, setSent] = useState<Sent | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = [
      "Guten Tag Oleksandr, wir möchten unseren Hochzeitstanz einstudieren und bitten um ein unverbindliches Gespräch.",
      "",
      `Paket: ${weddingPackageLabels[selected]}`,
      `Namen: ${readField(data, "names")}`,
      `Tanzerfahrung: ${readField(data, "experience")}`,
    ];
    const date = readField(data, "date");
    const song = readField(data, "song");
    const phone = readField(data, "phone");
    const note = readField(data, "note");
    if (date) lines.push(`Hochzeitsdatum: ${formatDateDe(date)}`);
    if (song) lines.push(`Wunschlied / Stil: ${song}`);
    if (phone) lines.push(`Telefon: ${phone}`);
    if (note) lines.push(`Anmerkung: ${note}`);
    lines.push("", "Vielen Dank und freundliche Grüße");

    const url = buildWhatsAppUrl(trainer.phone, lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setSent({ url });
  }

  if (sent) {
    return (
      <WhatsAppSuccess
        url={sent.url}
        recipientName={trainer.name}
        onReset={() => setSent(null)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Anfrage Hochzeitstanz">
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-ink">Gewünschtes Paket</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {WEDDING_PACKAGE_IDS.map((pkg) => (
            <label key={pkg} className="cursor-pointer">
              <input
                type="radio"
                name="package"
                value={pkg}
                checked={selected === pkg}
                onChange={(event) => {
                  const value = event.target.value;
                  if (isWeddingPackageId(value)) onSelectedChange(value);
                }}
                className="peer sr-only"
              />
              <span className="block rounded-xl border border-line px-3 py-3 text-center text-sm text-ink/80 transition peer-checked:border-gold-500 peer-checked:bg-gold-500/10 peer-checked:text-gold-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-gold-600">
                {weddingPackageLabels[pkg]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Ihre Namen" htmlFor={id("names")}>
        <input
          id={id("names")}
          name="names"
          type="text"
          required
          autoComplete="name"
          placeholder="z. B. Anna und Michael Muster"
          className={controlClasses}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Hochzeitsdatum" htmlFor={id("date")} optional>
          <input id={id("date")} name="date" type="date" className={controlClasses} />
        </Field>
        <Field label="Tanzerfahrung" htmlFor={id("experience")}>
          <select
            id={id("experience")}
            name="experience"
            required
            defaultValue=""
            className={controlClasses}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {EXPERIENCE.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Wunschlied oder Stil" htmlFor={id("song")} optional>
        <input
          id={id("song")}
          name="song"
          type="text"
          placeholder="z. B. Wiener Walzer oder ein Lieblingslied"
          className={controlClasses}
        />
      </Field>

      <Field label="Telefonnummer" htmlFor={id("phone")} optional>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+43 …"
          className={controlClasses}
        />
      </Field>

      <Field label="Anmerkung" htmlFor={id("note")} optional>
        <textarea id={id("note")} name="note" rows={3} className={controlClasses} />
      </Field>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
      >
        Per WhatsApp anfragen
      </Button>
      <p className="text-center text-xs leading-relaxed text-muted">
        Mit dem Absenden öffnet sich WhatsApp mit Ihrer vorausgefüllten Nachricht. Ihre Angaben
        werden erst übermittelt, wenn Sie die Nachricht dort senden.
      </p>
    </form>
  );
}
