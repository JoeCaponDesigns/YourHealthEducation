import * as React from "react"
import clsx from "clsx"

export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={clsx(
        "flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-base text-foreground",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"
