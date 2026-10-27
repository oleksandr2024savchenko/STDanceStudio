"use client";

import { useId, useState, type FormEvent } from "react";
import { Field, controlClasses } from "@/components/ui/Field";
import { showServices } from "@/lib/content/show";
import { formatDateDe, readField } from "@/lib/forms";
import { trainers, type Trainer } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ChoiceGroup } from "./ChoiceGroup";
import { WhatsAppSubmit } from "./WhatsAppSubmit";
import { WhatsAppSuccess } from "./WhatsAppSuccess";

const UNSURE = "Noch unsicher – bitte um Beratung";

const trainerOptions = Object.values(trainers).map((t) => ({ value: t.id, label: t.name }));

type Sent = { url: string; trainerName: string };

/** Anfrage für Show, Balleröffnung und Einlagen bei Veranstaltungen. */
export function ShowForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [sent, setSent] = useState<Sent | null>(null);
  const [trainerId, setTrainerId] = useState<Trainer["id"]>("oleksandr");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const trainer = trainers[trainerId];

    const lines = [
      "Guten Tag, wir planen eine Veranstaltung und bitten um ein unverbindliches Gespräch zu Show bzw. Balleröffnung.",
      "",
      `Name: ${readField(data, "name")}`,
      `Veranstaltung: ${readField(data, "event")}`,
      `Gewünschtes Format: ${readField(data, "format")}`,
    ];
    const date = readField(data, "date");
    const count = readField(data, "count");
    const phone = readField(data, "phone");
    const note = readField(data, "note");
    if (date) lines.push(`Datum: ${formatDateDe(date)}`);
    if (count) lines.push(`Anzahl Tanzende: ${count}`);
    if (phone) lines.push(`Telefon: ${phone}`);
    if (note) lines.push(`Anmerkung: ${note}`);
    lines.push("", "Vielen Dank und freundliche Grüße");

    const url = buildWhatsAppUrl(trainer.phone, lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setSent({ url, trainerName: trainer.name });
  }

  if (sent) {
    return (
      <WhatsAppSuccess
        url={sent.url}
        recipientName={sent.trainerName}
        onReset={() => setSent(null)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Anfrage Show und Balleröffnung">
      <Field label="Was möchten Sie anfragen?" htmlFor={id("format")}>
        <select
          id={id("format")}
          name="format"
          required
          defaultValue=""
          className={controlClasses}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {showServices.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value={UNSURE}>{UNSURE}</option>
        </select>
      </Field>

      <ChoiceGroup
        legend="Ihre Ansprechperson"
        name="trainer"
        options={trainerOptions}
        value={trainerId}
        onChange={(value) => {
          const next = Object.values(trainers).find((t) => t.id === value);
          if (next) setTrainerId(next.id);
        }}
      />

      <Field label="Ihr Name" htmlFor={id("name")}>
        <input
          id={id("name")}
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Vor- und Nachname"
          className={controlClasses}
        />
      </Field>

      <Field label="Veranstaltung oder Anlass" htmlFor={id("event")}>
        <input
          id={id("event")}
          name="event"
          type="text"
          required
          placeholder="z. B. Vereinsball oder Firmengala"
          className={controlClasses}
        />
      </Field>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Datum der Veranstaltung" htmlFor={id("date")} optional>
          <input id={id("date")} name="date" type="date" className={controlClasses} />
        </Field>
        <Field label="Anzahl der Tanzenden" htmlFor={id("count")} optional>
          <input
            id={id("count")}
            name="count"
            type="number"
            min={1}
            inputMode="numeric"
            placeholder="z. B. 12"
            className={controlClasses}
          />
        </Field>
      </div>

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

      <Field label="Motto oder Anmerkung" htmlFor={id("note")} optional>
        <textarea id={id("note")} name="note" rows={3} className={controlClasses} />
      </Field>

      <WhatsAppSubmit />
    </form>
  );
}
