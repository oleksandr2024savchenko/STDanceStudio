import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white shadow-cta hover:bg-gold-700 hover:shadow-cta-hover",
  outline:
    "border border-ink/30 bg-transparent text-ink hover:border-ink",
  ghost: "text-ink/80 hover:bg-canvas-alt hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5",
  lg: "px-9 py-4",
};

const base =
  "inline-flex items-center justify-center gap-2 max-w-full text-center sm:whitespace-nowrap rounded-[2px] " +
  "text-xs font-medium uppercase leading-snug tracking-[0.18em] " +
  "transition-all duration-300 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ActionProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

type LinkProps = CommonProps & {
  href: string;
  /** Öffnet in neuem Tab (z. B. WhatsApp) */
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

export type ButtonProps = ActionProps | LinkProps;

export function Button(props: ButtonProps) {
  if ("href" in props) {
    const {
      href,
      external = false,
      variant = "primary",
      size = "md",
      icon,
      className,
      children,
      onClick,
      "aria-label": ariaLabel,
    } = props;
    const classes = cn(base, variants[variant], sizes[size], className);

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          aria-label={ariaLabel}
          className={classes}
        >
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    icon,
    className,
    children,
    type = "button",
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
