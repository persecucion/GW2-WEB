// app/components/Card.tsx
"use client"

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'overflow-hidden rounded-xl transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-dark-800/50 backdrop-blur-sm',
        gradient: 'bg-gradient-to-br from-primary-900/10 via-dark-800/50 to-secondary-900/10 backdrop-blur-sm',
        glass: 'glass',
        'glass-strong': 'glass-strong',
        outline: 'bg-dark-800/30 backdrop-blur-sm border border-primary-500/20',
        solid: 'bg-dark-800',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        default: 'shadow-lg',
        lg: 'shadow-xl',
        glow: 'shadow-lg shadow-primary-500/20',
        'glow-purple': 'shadow-lg shadow-secondary-500/20',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-2',
        scale: 'hover:scale-[1.02]',
        glow: 'hover:shadow-xl hover:shadow-primary-500/30',
        'glow-purple': 'hover:shadow-xl hover:shadow-secondary-500/30',
        border: 'hover:border-primary-500/50',
        '3d': 'hover:-translate-y-2 hover:rotate-x-[2deg] hover:rotate-y-[-2deg] transform-gpu',
      },
      border: {
        none: '',
        thin: 'border border-white/5',
        medium: 'border-2 border-white/10',
        glow: 'border border-primary-500/30',
        'glow-purple': 'border border-secondary-500/30',
        gradient: 'border border-transparent bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 bg-clip-padding',
      },
    },
    defaultVariants: {
      variant: 'default',
      shadow: 'default',
      hover: 'lift',
      border: 'thin',
    },
  }
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
  shimmer?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, shadow, hover, border, children, shimmer = false, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, shadow, hover, border }), className)}
        ref={ref}
        {...props}
      >
        {shimmer && (
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-4 sm:p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-xl sm:text-2xl font-bold text-white', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-gray-300 mt-2 text-sm sm:text-base', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-4 sm:p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-4 sm:p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
