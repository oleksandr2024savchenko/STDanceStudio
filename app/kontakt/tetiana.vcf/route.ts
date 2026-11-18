import { trainers } from "@/lib/site";
import { buildVCard } from "@/lib/vcard";

export const dynamic = "force-static";

/** Digitale Visitenkarte, wird beim statischen Export als Datei erzeugt. */
export function GET() {
  return new Response(buildVCard(trainers.tetiana), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="tetiana-st-dance-studio.vcf"',
    },
  });
}
