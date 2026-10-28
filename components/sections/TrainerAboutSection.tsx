import Image from "next/image";
import { AccentText } from "@/components/ui/AccentText";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { TrainerAbout } from "@/lib/content/about";
import { BASE_PATH } from "@/lib/site";

type Props = {
  id?: string;
  /** Vorname; erscheint als Initiale im Foto-Platzhalter. */
  name: string;
  about: TrainerAbout;
  className?: string;
};

/** „Über mich“: Porträt im Bogenfenster (mit Platzhalter) neben einer persönlichen Vorstellung. */
export function TrainerAboutSection({ id = "ueber-mich", name, about, className }: Props) {
  const { photo } = about;

  return (
    <Section id={id} className={className}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <GoldFrame shape="arch">
              <div className="relative aspect-[3/4] bg-canvas-alt">
                {photo ? (
                  <Image
                    src={`${BASE_PATH}${photo.src}`}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                    <span
                      aria-hidden="true"
                      className="font-serif text-8xl font-medium leading-none text-brass/50"
                    >
                      {name.charAt(0)}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
                      Porträtfoto folgt
                    </span>
                  </div>
                )}
              </div>
            </GoldFrame>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            Über mich
          </p>
          <h2 className="text-4xl leading-[1.1] md:text-5xl">
            <AccentText text={about.title} />
          </h2>
          <Ornament align="left" className="mt-6" />
          <p className="mt-6 font-serif text-xl italic text-gold-700">{about.tagline}</p>
          <div className="mt-6 space-y-4 text-base font-light leading-[1.6] text-muted md:text-[17px]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
