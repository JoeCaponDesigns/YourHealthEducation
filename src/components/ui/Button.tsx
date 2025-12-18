import clsx from "clsx"
import type { ButtonHTMLAttributes } from "react"

type ButtonVariant = "default" | "outline"
type ButtonSize = "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  className,
  size = "md",
  variant = "default",
  ...props
}: ButtonProps) {
  const sizes: Record<ButtonSize, string> = {
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  }

  const variants: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-muted",
  }

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
