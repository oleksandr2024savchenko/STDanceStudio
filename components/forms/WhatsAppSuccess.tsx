import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Props = {
  url: string;
  recipientName: string;
  onReset: () => void;
};

/** Bestätigung nach dem Öffnen von WhatsApp; wird von allen WhatsApp-Formularen genutzt. */
export function WhatsAppSuccess({ url, recipientName, onReset }: Props) {
  return (
    <div role="status" aria-live="polite" className="text-center">
      <CheckCircle2 className="mx-auto h-12 w-12 text-gold-700" aria-hidden="true" />
      <h3 className="mt-5 text-3xl">Vielen Dank!</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        WhatsApp wurde mit Ihrer Anfrage an {recipientName} geöffnet. Bitte senden Sie die
        Nachricht dort ab. Wir melden uns umgehend bei Ihnen.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          href={url}
          external
          icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
        >
          WhatsApp erneut öffnen
        </Button>
        <Button variant="ghost" onClick={onReset}>
          Neue Anfrage
        </Button>
      </div>
    </div>
  );
}
