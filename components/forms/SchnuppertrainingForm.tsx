"use client";

import { MessageCircle } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, controlClasses } from "@/components/ui/Field";
import { trainingGroups } from "@/lib/content/club";
import { readField } from "@/lib/forms";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppSuccess } from "./WhatsAppSuccess";

const AGES = Array.from({ length: 14 }, (_, i) => i + 4); // 4–17
const UNSURE = "Noch unsicher – bitte um Beratung";

type Sent = { url: string; trainerName: string };

export function SchnuppertrainingForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [sent, setSent] = useState<Sent | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const trainer =
      Object.values(trainers).find((t) => t.id === readField(data, "trainer")) ??
      trainers.oleksandr;

    const lines = [
      "Guten Tag, ich möchte für mein Kind ein kostenloses Schnuppertraining vereinbaren.",
      "",
      `Name: ${readField(data, "parent")}`,
      `Kind: ${readField(data, "child")}, ${readField(data, "age")} Jahre`,
      `Gruppe: ${readField(data, "group")}`,
    ];
    const phone = readField(data, "phone");
    const wish = readField(data, "wish");
    if (phone) lines.push(`Telefon: ${phone}`);
    if (wish) lines.push(`Terminwunsch / Anmerkung: ${wish}`);
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
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Anfrage Schnuppertraining">
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-ink">Ihre Ansprechperson</legend>
        <div className="grid grid-cols-2 gap-3">
          {Object.values(trainers).map((trainer, index) => (
            <label key={trainer.id} className="cursor-pointer">
              <input
                type="radio"
                name="trainer"
                value={trainer.id}
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="block rounded-xl border border-line px-4 py-3 text-center text-sm text-ink/80 transition peer-checked:border-gold-500 peer-checked:bg-gold-500/10 peer-checked:text-gold-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-gold-600">
                {trainer.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Ihr Name" htmlFor={id("parent")}>
        <input
          id={id("parent")}
          name="parent"
          type="text"
          required
          autoComplete="name"
          placeholder="Vor- und Nachname"
          className={controlClasses}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-[1fr_8rem]">
        <Field label="Vorname des Kindes" htmlFor={id("child")}>
          <input
            id={id("child")}
            name="child"
            type="text"
            required
            className={controlClasses}
          />
        </Field>
        <Field label="Alter" htmlFor={id("age")}>
          <select id={id("age")} name="age" required defaultValue="" className={controlClasses}>
            <option value="" disabled>
              Wählen
            </option>
            {AGES.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Gewünschte Gruppe" htmlFor={id("group")}>
        <select id={id("group")} name="group" required defaultValue="" className={controlClasses}>
          <option value="" disabled>
            Bitte wählen
          </option>
          {trainingGroups.map((group) => (
            <option key={group.id} value={`${group.name} (${group.age})`}>
              {group.name} – {group.age}
            </option>
          ))}
          <option value={UNSURE}>{UNSURE}</option>
        </select>
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

      <Field label="Terminwunsch oder Anmerkung" htmlFor={id("wish")} optional>
        <textarea id={id("wish")} name="wish" rows={3} className={controlClasses} />
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
