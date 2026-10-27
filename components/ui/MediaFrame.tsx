import Image from "next/image";
import { cn } from "@/lib/cn";
import { BASE_PATH } from "@/lib/site";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/** Hochformatiges Bild im Bogenrahmen mit feinem Goldkontur dahinter. */
export function MediaFrame({ src, alt, className }: Props) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      <div
        aria-hidden="true"
        className="absolute -right-4 -top-4 h-full w-full rounded-t-[999px] rounded-b-2xl border border-gold-500/40"
      />
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl border border-stone-200/80 bg-canvas-alt shadow-xl">
        <Image
          src={`${BASE_PATH}${src}`}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 440px, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
