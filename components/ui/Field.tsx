import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const controlClasses =
  "w-full rounded-[2px] border border-line bg-surface px-4 py-3 text-sm text-ink " +
  "placeholder:text-muted transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500";

type Props = {
  label: string;
  htmlFor: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
};

export function Field({ label, htmlFor, optional = false, className, children }: Props) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
        {label}
        {optional && <span className="ml-2 text-xs font-normal text-muted">optional</span>}
      </label>
      {children}
    </div>
  );
}
