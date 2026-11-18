import type { ReactNode } from "react";
import { AccentText } from "@/components/ui/AccentText";
import { Container } from "@/components/ui/Container";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Ornament } from "@/components/ui/Ornament";
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
  /** Aktion unten in der Profilkarte, z. B. „Kontakt speichern“. */
  profileAction?: ReactNode;
};

/** Hero für persönliche Trainerseiten: Text links, Profilkarte rechts. */
export function PersonalHero({ badge, title, description, actions, profile, profileAction }: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-14 md:pb-32 md:pt-20">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <StatusBadge>{badge}</StatusBadge>
          <h1 className="mt-3 overflow-visible pt-2 text-5xl leading-[1.15] md:text-6xl lg:text-7xl">
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
          {/* Bogenfenster wie bei den Fotos der übrigen Seiten, damit alle Hero-Bereiche einheitlich wirken. */}
          <GoldFrame shape="arch" className="mx-auto w-full max-w-md">
            <aside
              aria-label={`Profil ${profile.name}`}
              className="px-8 pb-10 pt-20 text-center md:px-10 md:pt-24"
            >
              <span
                aria-hidden="true"
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-brass/50 bg-canvas-alt font-serif text-5xl text-gold-700"
              >
                {profile.name.charAt(0)}
              </span>
              <p className="mt-6 font-serif text-4xl text-ink">{profile.name}</p>
              <p className="mt-1 text-sm text-gold-700">{profile.role}</p>
              <Ornament className="mt-6" />
              <ul className="mt-6 divide-y divide-line border-y border-line text-sm text-ink/80">
                {profile.focus.map((item) => (
                  <li key={item} className="py-3">
                    {item}
                  </li>
                ))}
              </ul>
              {profile.note && (
                <p className="mt-6 text-xs leading-relaxed text-muted">{profile.note}</p>
              )}
              {profileAction && <div className="mt-6">{profileAction}</div>}
            </aside>
          </GoldFrame>
        </Reveal>
      </Container>
    </section>
  );
}
