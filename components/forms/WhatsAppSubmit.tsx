import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

/** Absende-Button samt Datenschutzhinweis, gemeinsam für alle WhatsApp-Formulare. */
export function WhatsAppSubmit() {
  return (
    <>
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
    </>
  );
}
