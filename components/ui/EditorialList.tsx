import { cn } from "@/lib/cn";
import { toRoman, waltzDelay } from "@/lib/motion";
import { Reveal } from "./Reveal";

export type EditorialItem = { title: string; text: string };

type Props = {
  items: readonly EditorialItem[];
  className?: string;
};

/**
 * Nummerierte Liste im Editorial-Stil: römische Ziffern, Haarlinien statt Karten und Icons.
 * Spalten nach Anzahl der Einträge (3 oder 4), auf kleinen Bildschirmen untereinander.
 */
export function EditorialList({ items, className }: Props) {
  const columns = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <ol
      className={cn(
        "grid grid-cols-1 divide-y divide-line border-y border-line lg:divide-x lg:divide-y-0",
        columns,
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={item.title} className="py-10 lg:px-8 lg:first:pl-0 lg:last:pr-0">
          <Reveal delay={waltzDelay(index)}>
            <span
              aria-hidden="true"
              className="block font-serif text-6xl font-normal italic leading-none text-gold-600"
            >
              {toRoman(index + 1)}.
            </span>
            <h3 className="mt-6 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
