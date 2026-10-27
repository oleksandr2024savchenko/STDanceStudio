import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-gradient text-ink shadow-cta hover:-translate-y-0.5 hover:brightness-105 hover:shadow-cta-hover active:translate-y-0 active:brightness-95",
  outline:
    "border border-brass/40 bg-white text-ink hover:-translate-y-0.5 hover:border-brass hover:bg-gold-50/70 hover:shadow-[0_6px_18px_-8px_rgba(212,175,55,0.55)] active:translate-y-0 active:bg-canvas",
  ghost: "text-ink/80 hover:bg-canvas-alt hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 max-w-full text-center sm:whitespace-nowrap rounded-full font-medium tracking-wide " +
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
