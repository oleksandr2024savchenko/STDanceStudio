import { ArrowUpRight, MapPin } from "lucide-react";
import { GoldFrame } from "@/components/ui/GoldFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tanzkarte, type TanzkarteSection } from "@/components/ui/Tanzkarte";
import { schedule } from "@/lib/content/club";
import { site } from "@/lib/site";

const { address } = site;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${address.street}, ${address.postalCode} ${address.city}`,
)}`;

/** Stundenplan nach Wochentagen gruppiert, in der Reihenfolge der Daten. */
const scheduleSections: readonly TanzkarteSection[] = schedule.reduce<TanzkarteSection[]>(
  (groups, entry) => {
    const entryItem = { title: entry.group, note: entry.age, meta: entry.time };
    const last = groups[groups.length - 1];
    if (last?.heading === entry.day) {
      return [...groups.slice(0, -1), { heading: entry.day, entries: [...last.entries, entryItem] }];
    }
    return [...groups, { heading: entry.day, entries: [entryItem] }];
  },
  [],
);

export function ScheduleSection() {
  return (
    <Section id="stundenplan">
      <SectionHeader
        eyebrow="Stundenplan & Saal"
        tanz={3}
        title="Wöchentlich in der *Favoritenstraße*"
        description="Alle Gruppen trainieren in unserem Saal im 4. Wiener Gemeindebezirk – gut erreichbar und ruhig gelegen."
      />

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <Tanzkarte
            subtitle="Wochenplan der Gruppen"
            label="Wöchentlicher Stundenplan der Kinder- und Jugendgruppen"
            sections={scheduleSections}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <GoldFrame className="h-full" innerClassName="flex h-full flex-col p-8">
            <MapPin className="h-6 w-6 text-gold-700" aria-hidden="true" />
            <h3 className="mt-5 text-2xl">Unser Saal</h3>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ink/80">
              {site.name}
              <br />
              {address.street}
              <br />
              {address.postalCode} {address.city}
            </address>
            <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">
              Die Gruppen beginnen mit dem Semester. Im Schnuppertraining finden wir
              gemeinsam mit Ihnen die passende Gruppe für Ihr Kind.
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700 transition-colors hover:text-gold-800"
            >
              Route in Google Maps
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </GoldFrame>
        </Reveal>
      </div>
    </Section>
  );
}
