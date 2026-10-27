import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function NotFound() {
  return (
    <section className="container py-32">
      <SectionHeader
        as="h1"
        eyebrow="Fehler 404"
        title="Diese Seite wurde nicht gefunden"
        description="Der gewünschte Inhalt existiert nicht oder wurde verschoben."
      />
      <div className="mt-10 flex justify-center">
        <Button href="/" size="lg">
          Zur Startseite
        </Button>
      </div>
    </section>
  );
}
