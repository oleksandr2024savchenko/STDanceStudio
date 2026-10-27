"use client";

import { useId, useState, type FormEvent } from "react";
import { Field, controlClasses } from "@/components/ui/Field";
import {
  WEDDING_PACKAGE_IDS,
  isWeddingPackageId,
  weddingPackageLabels,
  type WeddingPackageId,
} from "@/lib/content/wedding";
import { EXPERIENCE_LEVELS } from "@/lib/content/registration";
import { formatDateDe, readField } from "@/lib/forms";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ChoiceGroup } from "./ChoiceGroup";
import { WhatsAppSubmit } from "./WhatsAppSubmit";
import { WhatsAppSuccess } from "./WhatsAppSuccess";

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
      <ChoiceGroup
        legend="Gewünschtes Paket"
        name="package"
        options={WEDDING_PACKAGE_IDS.map((pkg) => ({
          value: pkg,
          label: weddingPackageLabels[pkg],
        }))}
        value={selected}
        onChange={(value) => {
          if (isWeddingPackageId(value)) onSelectedChange(value);
        }}
        columns="grid-cols-1 sm:grid-cols-3"
      />

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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            {EXPERIENCE_LEVELS.map((level) => (
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

      <WhatsAppSubmit />
    </form>
  );
}
