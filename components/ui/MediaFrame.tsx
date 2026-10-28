import Image from "next/image";
import { cn } from "@/lib/cn";
import { BASE_PATH } from "@/lib/site";
import { GoldFrame } from "./GoldFrame";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Seitenverhältnis des Bildfensters; Standard 3:4. */
  aspectClassName?: string;
  priority?: boolean;
};

/** Hochformatiges Bild im Bogenfenster mit goldenem Doppelrahmen und Stern im Scheitel. */
export function MediaFrame({
  src,
  alt,
  className,
  aspectClassName = "aspect-[3/4]",
  priority = true,
}: Props) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      <GoldFrame shape="arch">
        <div className={cn("relative bg-canvas-alt", aspectClassName)}>
          <Image
            src={`${BASE_PATH}${src}`}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 440px, 90vw"
            className="object-cover"
          />
        </div>
      </GoldFrame>
    </div>
  );
}
