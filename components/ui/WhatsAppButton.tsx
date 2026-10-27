import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "./Button";

type Props = {
  phone: string;
  message: string;
  label: string;
  size?: "md" | "lg";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

/** Button mit direktem Sprung in WhatsApp (neuer Tab, vorausgefüllte Nachricht). */
export function WhatsAppButton({
  phone,
  message,
  label,
  size = "lg",
  variant = "primary",
  className,
}: Props) {
  return (
    <Button
      href={buildWhatsAppUrl(phone, message)}
      external
      size={size}
      variant={variant}
      className={className}
      icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
    >
      {label}
    </Button>
  );
}
