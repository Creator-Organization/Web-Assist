// src/components/shared/InteractiveCard.tsx
'use client';

import { motion } from 'framer-motion';
import { CardProps } from '@/types/phase2';
import { cn } from '@/lib/utils';

export function InteractiveCard({
  children,
  className = '',
  hover = true,
  onClick,
  delay = 0
}: CardProps) {
  const isClickable = !!onClick;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { 
        y: -4, 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : undefined}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      className={cn(
        'card',
        'transition-all duration-300',
        'border border-gray-200',
        'hover:border-gray-300 hover:shadow-xl',
        isClickable && 'cursor-pointer select-none',
        className
      )}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      } : undefined}
    >
      {children}
    </motion.div>
  );
}