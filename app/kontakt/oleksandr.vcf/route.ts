import { trainers } from "@/lib/site";
import { buildVCard } from "@/lib/vcard";

export const dynamic = "force-static";

/** Digitale Visitenkarte, wird beim statischen Export als Datei erzeugt. */
export function GET() {
  return new Response(buildVCard(trainers.oleksandr), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="oleksandr-st-dance-studio.vcf"',
    },
  });
}
