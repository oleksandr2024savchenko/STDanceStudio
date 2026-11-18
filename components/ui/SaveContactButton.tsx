import { Contact } from "lucide-react";
import { BASE_PATH, type Trainer } from "@/lib/site";
import { vcardPath } from "@/lib/vcard";
import { Button } from "./Button";

type Props = {
  trainer: Trainer;
  label?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

/** Lädt die digitale Visitenkarte – ein Tippen speichert den Kontakt auf iPhone und Android. */
export function SaveContactButton({
  trainer,
  label = "Kontakt speichern",
  variant = "outline",
  size = "md",
  className,
}: Props) {
  return (
    <Button
      href={`${BASE_PATH}${vcardPath(trainer)}`}
      download={`${trainer.id}-st-dance-studio.vcf`}
      variant={variant}
      size={size}
      className={className}
      aria-label={`Kontakt von ${trainer.name} im Adressbuch speichern`}
      icon={<Contact className="h-4 w-4" aria-hidden="true" />}
    >
      {label}
    </Button>
  );
}
