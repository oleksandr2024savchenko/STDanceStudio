"use client";

import { useId, useState, type FormEvent } from "react";
import { Field, controlClasses } from "@/components/ui/Field";
import {
  CHILD_AGES,
  EXPERIENCE_LEVELS,
  audiences,
  findOffer,
  isAudienceId,
  offerGroups,
  type AudienceId,
} from "@/lib/content/registration";
import { readField } from "@/lib/forms";
import { trainers, type Trainer } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ChoiceGroup } from "./ChoiceGroup";
import { WhatsAppSubmit } from "./WhatsAppSubmit";
import { WhatsAppSuccess } from "./WhatsAppSuccess";

type Sent = { url: string; trainerName: string };

const trainerOptions = Object.values(trainers).map((t) => ({ value: t.id, label: t.name }));

const introByAudience: Record<AudienceId, string> = {
  kind: "Guten Tag, ich möchte für mein Kind ein kostenloses Schnuppertraining vereinbaren.",
  erwachsene: "Guten Tag, ich möchte mich anmelden und bitte um einen Terminvorschlag.",
  paar: "Guten Tag, wir möchten uns als Paar anmelden und bitten um einen Terminvorschlag.",
};

/** Anmeldung für Kinder, Erwachsene und Paare: erst „Wer?“, dann „Wohin?“. */
export function RegistrationForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [sent, setSent] = useState<Sent | null>(null);
  const [audience, setAudience] = useState<AudienceId>("kind");
  const [offer, setOffer] = useState("");
  const [trainerId, setTrainerId] = useState<Trainer["id"]>("oleksandr");

  function handleAudienceChange(value: string) {
    if (!isAudienceId(value)) return;
    setAudience(value);
    setOffer("");
  }

  function handleOfferChange(value: string) {
    setOffer(value);
    const trainer = findOffer(audience, value)?.trainer;
    if (trainer) setTrainerId(trainer);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const trainer = trainers[trainerId];
    const name = readField(data, "name");

    const lines: string[] = [introByAudience[audience], ""];
    if (audience === "kind") {
      lines.push(
        `Name: ${name}`,
        `Kind: ${readField(data, "child")}, ${readField(data, "age")} Jahre`,
        `Gruppe: ${offer}`,
      );
    } else if (audience === "erwachsene") {
      lines.push(
        `Name: ${name}`,
        "Teilnehmer: Erwachsene(r)",
        `Angebot: ${offer}`,
        `Tanzerfahrung: ${readField(data, "experience")}`,
      );
    } else {
      lines.push(
        `Namen: ${name} und ${readField(data, "partner")}`,
        "Teilnehmer: Paar",
        `Angebot: ${offer}`,
        `Tanzerfahrung: ${readField(data, "experience")}`,
      );
    }
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

  const experienceField = (
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
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="Anmeldung und Schnuppertraining"
    >
      <ChoiceGroup
        legend="Wer möchte teilnehmen?"
        name="audience"
        options={audiences.map((a) => ({ value: a.id, label: a.label }))}
        value={audience}
        onChange={handleAudienceChange}
        columns="grid-cols-1 sm:grid-cols-3"
      />

      <Field label="Wofür möchten Sie sich anmelden?" htmlFor={id("offer")}>
        <select
          id={id("offer")}
          name="offer"
          required
          value={offer}
          onChange={(event) => handleOfferChange(event.target.value)}
          className={controlClasses}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {offerGroups[audience].map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.offers.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </optgroup>
          ))}
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

      {audience === "kind" && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_8rem]">
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
            <select
              id={id("age")}
              name="age"
              required
              defaultValue=""
              className={controlClasses}
            >
              <option value="" disabled>
                Wählen
              </option>
              {CHILD_AGES.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </Field>
        </div>
      )}

      {audience === "erwachsene" && experienceField}

      {audience === "paar" && (
        <>
          <Field label="Name Ihres Partners oder Ihrer Partnerin" htmlFor={id("partner")}>
            <input
              id={id("partner")}
              name="partner"
              type="text"
              required
              placeholder="Vor- und Nachname"
              className={controlClasses}
            />
          </Field>
          {experienceField}
        </>
      )}

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

      <WhatsAppSubmit />
    </form>
  );
}
