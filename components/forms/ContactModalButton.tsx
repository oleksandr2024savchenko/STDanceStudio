"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { trainers } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  label: string;
  modalTitle: string;
  intro: string;
  variant?: "primary" | "outline" | "ghost";
};

/** Öffnet ein Modal mit direkter WhatsApp-Verbindung zu beiden Trainern. */
export function ContactModalButton({ label, modalTitle, intro, variant = "primary" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size="lg" variant={variant} onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title={modalTitle}>
        <p className="text-sm leading-relaxed text-muted">{intro}</p>
        <ul className="mt-6 space-y-3">
          {Object.values(trainers).map((trainer) => (
            <li key={trainer.id}>
              <Button
                href={buildWhatsAppUrl(trainer.phone, trainer.whatsappGreeting)}
                external
                variant="outline"
                size="lg"
                className="w-full justify-between"
                icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
              >
                WhatsApp an {trainer.name}
              </Button>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}
