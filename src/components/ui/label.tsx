import * as React from "react"
import clsx from "clsx"

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={clsx(
        "block text-sm font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}
