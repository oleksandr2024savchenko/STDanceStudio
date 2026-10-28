import { Award, Globe, GraduationCap, Trophy } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const highlights = [
  {
    icon: Award,
    title: "Langjährige Erfahrung",
    text: "Viele Jahre im Tanzsport – Standard und Latein",
  },
  {
    icon: Trophy,
    title: "Aktiv auf Turnieren",
    text: "Wir tanzen selbst und kennen den Wettkampf aus erster Hand",
  },
  {
    icon: GraduationCap,
    title: "Professionell",
    text: "Fundierte Technik, klare Methodik, persönliche Betreuung",
  },
  {
    icon: Globe,
    title: "Vier Sprachen",
    text: "Deutsch, Englisch, Ukrainisch und Russisch",
  },
] as const;

/** „Über uns“: Text mit Eckdaten links, Foto des Tanzpaars im Bogenfenster rechts. */
export function AboutSection() {
  return (
    <Section id="ueber-uns" aria-labelledby="ueber-uns-title">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            ST Dance Studio
          </p>
          <h2 id="ueber-uns-title" className="text-4xl leading-[1.1] md:text-5xl">
            <AccentText text="Über *uns*" />
          </h2>
          <Ornament align="left" className="mt-6" />

          <div className="mt-8 max-w-xl space-y-5 text-base font-light leading-[1.7] text-muted md:text-[17px]">
            <p>
              Wir sind Oleksandr und Tetiana – ein Tanzpaar mit langjähriger Erfahrung im Turniertanz.
              Seit vielen Jahren stehen wir selbst auf dem Parkett, treten aktiv bei Turnieren an und
              geben unser Wissen mit Leidenschaft an Kinder, Jugendliche und Erwachsene weiter.
            </p>
            <p>
              Als professionelle Trainer legen wir Wert auf saubere Technik, Haltung und Musikalität –
              und darauf, dass die Freude am Tanzen nie verloren geht. Ob erster Schritt, Turnier,
              Hochzeitstanz oder Balleröffnung: Wir begleiten Sie persönlich.
            </p>
            <p>
              Wir sprechen Deutsch, Englisch, Ukrainisch und Russisch – bei uns fühlt sich jede Familie
              gut aufgehoben.
            </p>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] border border-gold-500/40 text-gold-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-tight">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="lg:order-first">
          <MediaFrame
            src="/images/about-us.jpg"
            alt="Oleksandr und Tetiana beim Tanzen im hellen Trainingssaal"
            aspectClassName="aspect-[2/3]"
            priority={false}
          />
        </Reveal>
      </div>
    </Section>
  );
}
