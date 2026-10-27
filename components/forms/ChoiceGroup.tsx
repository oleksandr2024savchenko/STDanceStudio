import { cn } from "@/lib/cn";

type Option = { value: string; label: string };

type Props = {
  legend: string;
  name: string;
  options: readonly Option[];
  value: string;
  onChange: (value: string) => void;
  /** Tailwind-Klassen für das Spaltenraster der Optionen. */
  columns?: string;
};

/** Auswahl per Radio-Pillen: barrierefrei (echte Radio-Inputs) und tastaturbedienbar. */
export function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
  columns = "grid-cols-2",
}: Props) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-ink">{legend}</legend>
      <div className={cn("grid gap-3", columns)}>
        {options.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(event) => onChange(event.target.value)}
              className="peer sr-only"
            />
            <span className="flex h-full items-center justify-center rounded-[2px] border border-line px-3 py-3 text-center text-sm text-ink/80 transition peer-checked:border-gold-500 peer-checked:bg-gold-500/10 peer-checked:text-gold-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-gold-600">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
