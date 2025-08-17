// src/components/ui/Typography.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function DisplayText({ children, className, as: Component = 'h1' }: TypographyProps) {
  return (
    <Component className={cn('text-display text-neutral-900', className)}>
      {children}
    </Component>
  );
}

export function HeadlineText({ children, className, as: Component = 'h2' }: TypographyProps) {
  return (
    <Component className={cn('text-headline text-neutral-900', className)}>
      {children}
    </Component>
  );
}

export function TitleText({ children, className, as: Component = 'h3' }: TypographyProps) {
  return (
    <Component className={cn('text-title text-neutral-900', className)}>
      {children}
    </Component>
  );
}

export function BodyText({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn('text-body text-neutral-700', className)}>
      {children}
    </Component>
  );
}

export function CaptionText({ children, className, as: Component = 'span' }: TypographyProps) {
  return (
    <Component className={cn('text-caption', className)}>
      {children}
    </Component>
  );
}

// Utility component for gradual text reveals (Apple-style)
interface AnimatedTextProps extends TypographyProps {
  delay?: number;
  stagger?: boolean;
}

export function AnimatedDisplayText({ 
  children, 
  className, 
  as: Component = 'h1',
  delay = 0,
  stagger = false 
}: AnimatedTextProps) {
  return (
    <Component 
      className={cn(
        'text-display text-neutral-900 animate-fade-in-up',
        stagger && 'animate-stagger',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export function AnimatedHeadlineText({ 
  children, 
  className, 
  as: Component = 'h2',
  delay = 0,
  stagger = false 
}: AnimatedTextProps) {
  return (
    <Component 
      className={cn(
        'text-headline text-neutral-900 animate-fade-in-up',
        stagger && 'animate-stagger',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

// Gradient text component (Apple-style)
interface GradientTextProps extends TypographyProps {
  gradient?: 'primary' | 'secondary' | 'accent';
}

export function GradientText({ 
  children, 
  className, 
  as: Component = 'span',
  gradient = 'primary'
}: GradientTextProps) {
  const gradientClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-secondary-500',
    secondary: 'bg-gradient-to-r from-secondary-500 to-accent-500',
    accent: 'bg-gradient-to-r from-accent-500 to-primary-500'
  };

  return (
    <Component 
      className={cn(
        'bg-clip-text text-transparent font-bold',
        gradientClasses[gradient],
        className
      )}
    >
      {children}
    </Component>
  );
}