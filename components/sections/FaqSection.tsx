import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { FaqItem } from "@/lib/content/club";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly FaqItem[];
  className?: string;
};

export function FaqSection({
  id = "faq",
  eyebrow = "Häufige Fragen",
  title,
  description,
  items,
  className,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "de-AT",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Section id={id} className={className}>
      <JsonLd data={schema} />
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <Reveal className="mx-auto mt-14 max-w-3xl divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-ink marker:hidden [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-gold-700 transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-4 pr-10 text-sm leading-relaxed text-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}
