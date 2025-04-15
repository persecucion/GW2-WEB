// app/components/Card.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'overflow-hidden rounded-xl', 
  {
    variants: {
      variant: {
        default: 'bg-dark-700',
        gradient: 'bg-gradient-to-br from-primary-900/20 via-dark-700 to-secondary-900/20',
        glass: 'bg-dark-700/50 backdrop-blur-sm',
        outline: 'bg-dark-800 border border-primary-800/50',
        gradientSolid: 'relative bg-dark-800 before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary-900/20 before:via-dark-700 before:to-secondary-900/20 before:z-0',
        glassSolid: 'relative bg-dark-800 before:content-[""] before:absolute before:inset-0 before:bg-dark-700/50 before:backdrop-blur-sm before:z-0',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        default: 'shadow-md',
        lg: 'shadow-lg',
        glow: 'shadow-lg shadow-primary-500/20',
      },
      hover: {
        none: '',
        lift: 'transition-transform duration-300 hover:-translate-y-2',
        scale: 'transition-transform duration-300 hover:scale-105',
        glow: 'transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-500/30',
        border: 'transition-colors duration-300 hover:border-primary-500',
      },
      border: {
        none: '',
        thin: 'border border-gray-700',
        medium: 'border-2 border-gray-700',
        glow: 'border border-primary-500/30',
      },
    },
    defaultVariants: {
      variant: 'default',
      shadow: 'default',
      hover: 'none',
      border: 'thin',
    },
  }
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, shadow, hover, border, children, ...props }, ref) => {
    const isGradientSolid = variant === 'gradientSolid';
    const isGlassSolid = variant === 'glassSolid';
    
    return (
      <div
        className={cn(cardVariants({ variant, shadow, hover, border, className }))}
        ref={ref}
        {...props}
      >
        {(isGradientSolid || isGlassSolid) ? (
          <div className="relative z-10">{children}</div>
        ) : (
          children
        )}
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
    className={cn('p-6', className)}
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
    className={cn('text-2xl font-semibold text-white', className)}
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
    className={cn('text-gray-400 mt-2', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
