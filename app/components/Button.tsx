// app/components/Button.tsx
"use client"

import React, { ButtonHTMLAttributes, useState } from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group touch-target',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-md hover:shadow-lg',
        outline: 'border-2 border-primary-500/50 text-white hover:bg-primary-500/10 hover:border-primary-400',
        ghost: 'text-primary-400 hover:bg-primary-500/10',
        gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/30',
        destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
        link: 'text-primary-400 underline-offset-4 hover:underline',
        glow: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-glow hover:shadow-glow-lg border border-primary-500/30',
      },
      size: {
        default: 'h-10 py-2 px-4 text-sm',
        sm: 'h-8 py-1 px-3 text-xs',
        lg: 'h-12 py-3 px-6 text-base',
        xl: 'h-14 py-4 px-8 text-lg',
        icon: 'h-10 w-10 p-0',
      },
      rounded: {
        default: 'rounded-lg',
        full: 'rounded-full',
        none: 'rounded-none',
        xl: 'rounded-xl',
        sm: 'rounded-md',
      },
      animation: {
        none: '',
        float: 'hover:-translate-y-1 active:translate-y-0',
        scale: 'hover:scale-105 active:scale-95',
        pulse: 'hover:animate-pulse-glow',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
      animation: 'float',
    },
  }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string
  external?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  ripple?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, animation, children, href, external, leftIcon, rightIcon, ripple = true, onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && variant !== 'link') {
        const button = e.currentTarget
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const id = Date.now()

        setRipples(prev => [...prev, { x, y, id }])
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== id))
        }, 600)
      }

      if (onClick) onClick(e)
    }

    const classNames = cn(buttonVariants({ variant, size, rounded, animation, className }))

    const content = (
      <>
        {ripple && variant !== 'link' && ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ping"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        {variant === 'gradient' || variant === 'glow' ? (
          <span className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-white/20 to-primary-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        ) : null}
        <span className="relative z-10 flex items-center justify-center">
          {leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2 flex-shrink-0">{rightIcon}</span>}
        </span>
      </>
    )

    if (href) {
      const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

      return (
        <Link href={href} className={classNames} {...linkProps}>
          {content}
        </Link>
      )
    }

    return (
      <button className={classNames} ref={ref} onClick={handleClick} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
