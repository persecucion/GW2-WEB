import React, { LabelHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  className?: string
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label
        className={cn(
          "block text-white mb-2 font-medium",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    )
  }
)

Label.displayName = 'Label' 