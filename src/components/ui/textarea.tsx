import * as React from "react"
import clsx from "clsx"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        // Base
        "flex min-h-30 w-full rounded-xl border border-input bg-background px-4 py-3 text-base",
        "placeholder:text-muted-foreground resize-none",

        // Focus
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "focus:ring-offset-background",

        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"
