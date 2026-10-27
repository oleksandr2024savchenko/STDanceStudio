import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Props = {
  id?: string;
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
};

export function Section({
  id,
  className,
  containerClassName,
  "aria-labelledby": labelledBy,
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-28 py-20 md:py-28", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
