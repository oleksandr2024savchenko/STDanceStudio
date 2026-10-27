import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schedule } from "@/lib/content/club";
import { site } from "@/lib/site";

const { address } = site;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${address.street}, ${address.postalCode} ${address.city}`,
)}`;

export function ScheduleSection() {
  return (
    <Section id="stundenplan">
      <SectionHeader
        eyebrow="Stundenplan & Saal"
        title="Wöchentlich in der *Favoritenstraße*"
        description="Alle Gruppen trainieren in unserem Saal im 4. Wiener Gemeindebezirk – gut erreichbar und ruhig gelegen."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line bg-surface">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <caption className="sr-only">
                Wöchentlicher Stundenplan der Kinder- und Jugendgruppen
              </caption>
              <thead className="border-b border-line text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">Tag</th>
                  <th scope="col" className="px-6 py-4 font-medium">Zeit</th>
                  <th scope="col" className="px-6 py-4 font-medium">Gruppe</th>
                  <th scope="col" className="px-6 py-4 font-medium">Alter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {schedule.map((entry) => (
                  <tr
                    key={`${entry.day}-${entry.time}`}
                    className="transition-colors hover:bg-canvas-alt/60"
                  >
                    <th scope="row" className="px-6 py-4 font-serif text-lg font-medium text-ink">
                      {entry.day}
                    </th>
                    <td className="whitespace-nowrap px-6 py-4 text-gold-700">{entry.time}</td>
                    <td className="px-6 py-4 text-ink">{entry.group}</td>
                    <td className="px-6 py-4 text-muted">{entry.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl border border-gold-500/30 bg-surface p-8 shadow-gold">
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
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
