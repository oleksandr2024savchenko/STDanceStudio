import type { ReactNode } from "react";
import { AccentText } from "@/components/ui/AccentText";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";

type Props = {
  badge: string;
  /** Zeilenumbrüche mit "\n", Hervorhebung mit `*Wort*`. */
  title: string;
  description: string;
  actions?: ReactNode;
  /** Vertrauensblock unter den Buttons, siehe `SocialProof`. */
  proof?: ReactNode;
  media: { src: string; alt: string };
};

/** Editorial-Split-Hero: Text und Vertrauen links, Bild als visueller Anker rechts. */
export function Hero({ badge, title, description, actions, proof, media }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-hero-glow pb-28 pt-14 md:pb-32 md:pt-20 lg:pt-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <StatusBadge>{badge}</StatusBadge>
          <h1 className="mt-7 text-5xl leading-[1.04] md:text-6xl lg:text-7xl">
            {title.split("\n").map((line) => (
              <span key={line} className="block">
                <AccentText text={line} />
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{description}</p>
          {actions && (
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">{actions}</div>
          )}
          {proof && <div className="mt-10 border-t border-line pt-6">{proof}</div>}
        </Reveal>

        <Reveal delay={0.12}>
          <MediaFrame src={media.src} alt={media.alt} />
        </Reveal>
      </Container>
    </section>
  );
}
