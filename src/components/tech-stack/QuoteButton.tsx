// src/components/tech-stack/QuoteButton.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TechStack } from '@/types/phase2';
import { cn } from '@/lib/utils';

interface QuoteButtonProps {
  stack: TechStack;
  onQuoteRequest: (stack: TechStack) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function QuoteButton({ 
  stack, 
  onQuoteRequest, 
  className = '',
  variant = 'primary',
  size = 'md'
}: QuoteButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onQuoteRequest(stack);
    
    // Reset the clicked state after animation
    setTimeout(() => setIsClicked(false), 300);
  };

  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={cn(
        'relative overflow-hidden rounded-lg font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={false}
      animate={isClicked ? { scale: [1, 0.95, 1] } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Background effect */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%' }}
        animate={isClicked ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span>Get Quote</span>
        <motion.span
          animate={isClicked ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          💼
        </motion.span>
      </span>

      {/* Recommended badge effect */}
      {stack.recommended && (
        <motion.div
          className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full"
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        >
          ⭐ Top Pick
        </motion.div>
      )}
    </motion.button>
  );
}