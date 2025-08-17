// src/components/ui/AppleCard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AppleCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'elevated' | 'flat' | 'glass';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  delay?: number;
}

export function AppleCard({ 
  children, 
  className,
  variant = 'elevated',
  hover = true,
  padding = 'lg',
  onClick,
  delay = 0
}: AppleCardProps) {
  const baseClasses = 'transition-all duration-300';
  
  const variantClasses = {
    elevated: 'card-apple',
    flat: 'card-apple-flat',
    glass: 'glass-apple'
  };
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };
  
  const hoverClasses = hover ? 'cursor-pointer hover:scale-[1.02]' : '';
  
  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        className
      )}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Card variants for specific use cases
interface FeatureCardProps extends Omit<AppleCardProps, 'variant' | 'children'> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function FeatureCard({
  icon,
  title,
  description,
  children,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <AppleCard
      className={cn('text-center', className)}
      variant="elevated"
      {...props}
    >
      {icon && (
        <motion.div
          className="text-4xl mb-4 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: (props.delay || 0) / 1000 + 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      
      {title && (
        <motion.h3
          className="text-title text-neutral-900 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (props.delay || 0) / 1000 + 0.3 }}
        >
          {title}
        </motion.h3>
      )}
      
      {description && (
        <motion.p
          className="text-body text-neutral-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (props.delay || 0) / 1000 + 0.4 }}
        >
          {description}
        </motion.p>
      )}
      
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (props.delay || 0) / 1000 + 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AppleCard>
  );
}

// Testimonial card variant
interface TestimonialCardProps extends Omit<AppleCardProps, 'variant'> {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <AppleCard
      className={cn('relative', className)}
      variant="flat"
      {...props}
    >
      {/* Quote */}
      <blockquote className="text-body text-neutral-700 mb-6 italic">
        "{quote}"
      </blockquote>
      
      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={cn(
                'text-lg',
                i < rating ? 'text-accent-500' : 'text-neutral-300'
              )}
            >
              ★
            </span>
          ))}
        </div>
      )}
      
      {/* Author info */}
      <div className="flex items-center gap-3">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-neutral-900">{author}</div>
          {(role || company) && (
            <div className="text-caption text-neutral-600">
              {role}{role && company && ', '}{company}
            </div>
          )}
        </div>
      </div>
    </AppleCard>
  );
}

// Stat card variant
interface StatCardProps extends Omit<AppleCardProps, 'variant'> {
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatCard({
  value,
  label,
  trend,
  trendValue,
  className,
  ...props
}: StatCardProps) {
  const trendColors = {
    up: 'text-secondary-500',
    down: 'text-red-500',
    neutral: 'text-neutral-500'
  };

  return (
    <AppleCard
      className={cn('text-center', className)}
      variant="flat"
      padding="md"
      {...props}
    >
      <div className="text-display text-primary-500 mb-2">
        {value}
      </div>
      <div className="text-body text-neutral-700 mb-2">
        {label}
      </div>
      {trend && trendValue && (
        <div className={cn('text-caption flex items-center justify-center gap-1', trendColors[trend])}>
          <span>{trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}</span>
          {trendValue}
        </div>
      )}
    </AppleCard>
  );
}