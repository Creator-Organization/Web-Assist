// src/components/ui/AppleButton.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AppleButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function AppleButton({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className,
  onClick,
  href,
  icon,
  iconPosition = 'left'
}: AppleButtonProps) {
  const baseClasses = 'font-medium rounded-apple transition-all duration-200 focus-apple inline-flex items-center justify-center gap-2 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
    xl: 'text-xl py-5 px-10'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href } : { onClick };
  
  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...componentProps}
    >
      {/* Loading spinner */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-inherit"
        >
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      {/* Button content */}
      <motion.div
        className={cn(
          'flex items-center gap-2',
          loading && 'opacity-0'
        )}
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 0 : 1 }}
      >
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </motion.div>
    </Component>
  );
}

// Button group component for related actions
interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'md' | 'lg';
}

export function ButtonGroup({
  children,
  className,
  orientation = 'horizontal',
  spacing = 'md'
}: ButtonGroupProps) {
  const spacingClasses = {
    sm: orientation === 'horizontal' ? 'gap-2' : 'gap-2',
    md: orientation === 'horizontal' ? 'gap-4' : 'gap-3',
    lg: orientation === 'horizontal' ? 'gap-6' : 'gap-4'
  };

  const orientationClasses = orientation === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <div className={cn(
      'flex',
      orientationClasses,
      spacingClasses[spacing],
      className
    )}>
      {children}
    </div>
  );
}

// Icon button variant
interface IconButtonProps extends Omit<AppleButtonProps, 'children'> {
  icon: React.ReactNode;
  'aria-label': string;
}

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  className,
  ...props
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 p-2',
    md: 'w-10 h-10 p-2.5',
    lg: 'w-12 h-12 p-3',
    xl: 'w-14 h-14 p-3.5'
  };

  return (
    <AppleButton
      variant={variant}
      size={size}
      className={cn(
        'rounded-full aspect-square',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon}
    </AppleButton>
  );
}

// Floating action button
interface FABProps extends Omit<AppleButtonProps, 'variant' | 'size'> {
  icon: React.ReactNode;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export function FloatingActionButton({
  icon,
  position = 'bottom-right',
  className,
  ...props
}: FABProps) {
  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6'
  };

  return (
    <motion.div
      className={positionClasses[position]}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AppleButton
        variant="primary"
        className={cn(
          'w-14 h-14 rounded-full shadow-apple-lg hover:shadow-apple-xl',
          className
        )}
        {...props}
      >
        {icon}
      </AppleButton>
    </motion.div>
  );
}

// CTA (Call to Action) button with enhanced styling
interface CTAButtonProps extends AppleButtonProps {
  gradient?: boolean;
  glow?: boolean;
}

export function CTAButton({
  children,
  gradient = false,
  glow = false,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      {glow && (
        <div className="absolute -inset-1 bg-gradient-primary rounded-apple-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      )}
      
      <AppleButton
        className={cn(
          'relative',
          gradient && 'gradient-primary text-white border-0',
          glow && 'shadow-apple-xl',
          className
        )}
        {...props}
      >
        {children}
      </AppleButton>
    </motion.div>
  );
}