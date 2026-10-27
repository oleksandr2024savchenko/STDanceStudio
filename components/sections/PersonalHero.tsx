import type { ReactNode } from "react";
import { AccentText } from "@/components/ui/AccentText";
import { Container } from "@/components/ui/Container";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";

type Profile = {
  name: string;
  role: string;
  focus: readonly string[];
  note?: string;
};

type Props = {
  badge: string;
  /** Zeilenumbrüche mit "\n", Hervorhebung mit `*Wort*`. */
  title: string;
  description: string;
  actions: ReactNode;
  profile: Profile;
};

/** Hero für persönliche Trainerseiten: Text links, Profilkarte rechts. */
export function PersonalHero({ badge, title, description, actions, profile }: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-14 md:pb-32 md:pt-20">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <StatusBadge>{badge}</StatusBadge>
          <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl lg:text-7xl">
            {title.split("\n").map((line) => (
              <span key={line} className="block">
                <AccentText text={line} />
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-[1.6] text-muted md:text-[17px]">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">{actions}</div>
        </Reveal>

        <Reveal delay={0.12}>
          <GoldFrame star>
            <aside
              aria-label={`Profil ${profile.name}`}
              className="p-8 md:p-10"
            >
              <div className="flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[2px] border border-brass/50 bg-canvas-alt font-serif text-5xl text-gold-700"
                >
                  {profile.name.charAt(0)}
                </span>
                <div>
                  <p className="font-serif text-3xl text-ink">{profile.name}</p>
                  <p className="mt-1 text-sm text-gold-700">{profile.role}</p>
                </div>
              </div>
              <ul className="mt-8 divide-y divide-line border-y border-line text-sm text-ink/80">
                {profile.focus.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-3">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              {profile.note && (
                <p className="mt-6 text-xs leading-relaxed text-muted">{profile.note}</p>
              )}
            </aside>
          </GoldFrame>
        </Reveal>
      </Container>
    </section>
  );
}
