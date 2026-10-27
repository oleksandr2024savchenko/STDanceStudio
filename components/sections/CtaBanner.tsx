import { Phone } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { Container } from "@/components/ui/Container";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { Trainer } from "@/lib/site";
import { buildTelUrl } from "@/lib/whatsapp";

type Props = {
  id?: string;
  trainer: Trainer;
  title: string;
  description: string;
  whatsappLabel: string;
  message: string;
};

/** Abschließender Conversion-Block mit direktem WhatsApp-Kontakt. */
export function CtaBanner({
  id = "kontakt",
  trainer,
  title,
  description,
  whatsappLabel,
  message,
}: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <GoldFrame innerClassName="px-6 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
            <div className="relative">
              <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
                Kontakt
              </p>
              <h2 className="mx-auto max-w-2xl text-4xl leading-[1.1] md:text-5xl">
                <AccentText text={title} />
              </h2>
              <Ornament className="mt-6" />
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppButton
                  phone={trainer.phone}
                  message={message}
                  label={whatsappLabel}
                />
                <a
                  href={buildTelUrl(trainer.phone)}
                  className="inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-gold-800"
                >
                  <Phone className="h-4 w-4 text-gold-600" aria-hidden="true" />
                  {trainer.phoneDisplay}
                </a>
              </div>
            </div>
          </GoldFrame>
        </Reveal>
      </Container>
    </section>
  );
}
