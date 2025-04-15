// app/components/Button.tsx
import React, { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
        outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500/10',
        ghost: 'text-primary-500 hover:bg-primary-500/10',
        gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        link: 'text-primary-500 underline-offset-4 hover:underline',
        glow: 'relative overflow-hidden shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#4338ca,0_0_15px_#4338ca,0_0_30px_#4338ca] hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6d28d9,0_0_15px_#6d28d9,0_0_30px_#6d28d9] bg-dark-800 border border-primary-600 text-white',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-8 py-1 px-3 text-xs',
        lg: 'h-12 py-3 px-6 text-base',
        xl: 'h-14 py-4 px-8 text-lg',
        icon: 'h-9 w-9 p-0',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
        none: 'rounded-none',
        lg: 'rounded-lg',
        sm: 'rounded-sm', 
      },
      animation: {
        none: '',
        float: 'hover:translate-y-[-4px] transition-transform duration-300',
        scale: 'hover:scale-105 transition-transform duration-300',
        pulse: 'hover:animate-pulse',
        shimmer: 'shimmer',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
      animation: 'none',
    },
  }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string
  external?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, animation, children, href, external, leftIcon, rightIcon, ...props }, ref) => {
    const classNames = cn(buttonVariants({ variant, size, rounded, animation, className }))

    if (href) {
      const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
      
      return (
        <Link href={href} className={classNames} {...linkProps}>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </Link>
      )
    }

    return (
      <button className={classNames} ref={ref} {...props}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
