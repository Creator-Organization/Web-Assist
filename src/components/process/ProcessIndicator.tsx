// src/components/process/ProcessIndicator.tsx
'use client';

import { motion } from 'framer-motion';
import { ProcessStep } from '@/types/phase2';
import { cn } from '@/lib/utils';

interface ProcessIndicatorProps {
  steps: ProcessStep[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
  orientation?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  compact?: boolean;
}

export function ProcessIndicator({ 
  steps, 
  currentStep, 
  onStepClick, 
  orientation = 'horizontal',
  showLabels = true,
  compact = false 
}: ProcessIndicatorProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={cn(
      'flex',
      isHorizontal ? 'items-center justify-center' : 'flex-col items-start',
      compact ? 'gap-2' : 'gap-4'
    )}>
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        const isClickable = true; // All steps are clickable for navigation

        return (
          <div 
            key={step.id}
            className={cn(
              'flex items-center',
              isHorizontal ? 'flex-row' : 'flex-col',
              !compact && 'relative'
            )}
          >
            {/* Step Circle */}
            <motion.button
              onClick={() => onStepClick(step.id)}
              className={cn(
                'relative z-10 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                compact ? 'w-8 h-8' : 'w-12 h-12',
                isActive && 'border-primary-500 bg-primary-500 text-white shadow-lg',
                isCompleted && 'border-green-500 bg-green-500 text-white',
                !isActive && !isCompleted && 'border-gray-300 bg-white text-gray-400 hover:border-gray-400',
                isClickable && 'cursor-pointer hover:scale-110'
              )}
              whileHover={{ scale: isClickable ? 1.1 : 1 }}
              whileTap={{ scale: isClickable ? 0.95 : 1 }}
              initial={false}
              animate={{
                backgroundColor: isActive ? '#2563eb' : isCompleted ? '#10b981' : '#ffffff',
                borderColor: isActive ? '#2563eb' : isCompleted ? '#10b981' : '#d1d5db'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-full h-full">
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    ✓
                  </motion.div>
                ) : (
                  <span className={cn(
                    'font-bold',
                    compact ? 'text-xs' : 'text-sm'
                  )}>
                    {step.id}
                  </span>
                )}
              </div>

              {/* Active indicator pulse */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.button>

            {/* Step Label */}
            {showLabels && (
              <div className={cn(
                'text-center',
                isHorizontal ? 'ml-3' : 'mt-2',
                compact ? 'text-xs' : 'text-sm'
              )}>
                <div className={cn(
                  'font-medium transition-colors',
                  isActive ? 'text-primary-600' : 'text-gray-600'
                )}>
                  {step.title}
                </div>
                {!compact && (
                  <div className="text-xs text-gray-500 mt-1">
                    {step.duration}
                  </div>
                )}
              </div>
            )}

            {/* Progress Line */}
            {index < steps.length - 1 && (
              <div className={cn(
                'bg-gray-200 absolute',
                isHorizontal 
                  ? 'h-0.5 left-6 right-6 top-1/2 transform -translate-y-1/2' 
                  : 'w-0.5 top-6 bottom-6 left-1/2 transform -translate-x-1/2',
                compact && (isHorizontal ? 'h-px' : 'w-px')
              )}>
                <motion.div
                  className={cn(
                    'bg-gradient-to-r from-primary-500 to-green-500',
                    isHorizontal ? 'h-full' : 'w-full'
                  )}
                  initial={{ 
                    [isHorizontal ? 'width' : 'height']: '0%' 
                  }}
                  animate={{ 
                    [isHorizontal ? 'width' : 'height']: isCompleted ? '100%' : '0%' 
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}