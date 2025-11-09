// src/components/process/ProcessStep.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProcessStep as ProcessStepType } from '@/types/phase2';
import { InteractiveCard } from '@/components/shared/InteractiveCard';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  step: ProcessStepType;
  isActive: boolean;
  onStepSelect: (stepId: number) => void;
  onInquiry: (step: ProcessStepType, topic: string) => void;
  delay?: number;
}

export function ProcessStep({ 
  step, 
  isActive, 
  onStepSelect, 
  onInquiry, 
  delay = 0 
}: ProcessStepProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    { id: 'activities', title: 'What We Do', items: step.activities, icon: '⚙️' },
    { id: 'deliverables', title: 'What You Get', items: step.deliverables, icon: '📦' },
    { id: 'involvement', title: 'Your Role', items: step.clientInvolvement, icon: '👥' }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <InteractiveCard 
      delay={delay}
      className={cn(
        'h-full transition-all duration-300',
        isActive && 'ring-2 ring-primary-500 border-primary-200 bg-primary-50'
      )}
      onClick={() => onStepSelect(step.id)}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-colors',
              `bg-gradient-to-br ${step.color}`,
              isActive ? 'text-white' : 'text-white'
            )}>
              {step.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className={cn(
                  'text-xl font-bold transition-colors',
                  isActive ? 'text-primary-700' : 'text-gray-900'
                )}>
                  Step {step.id}: {step.title}
                </h3>
              </div>
              <Badge 
                variant={isActive ? 'default' : 'secondary'}
                className="text-xs"
              >
                {step.duration}
              </Badge>
            </div>
          </div>
          
          {/* Active indicator */}
          {isActive && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 bg-primary-500 rounded-full"
            />
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
          {step.description}
        </p>

        {/* Expandable Sections */}
        <div className="space-y-3">
          {sections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection(section.id);
                }}
                className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{section.icon}</span>
                  <span className="font-medium text-gray-900 text-sm">
                    {section.title}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {section.items.length}
                  </Badge>
                </div>
                <motion.div
                  animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  ⌄
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-primary-500 text-xs mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex gap-2">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onInquiry(step, 'timeline');
            }}
            className="flex-1 px-4 py-2 text-sm border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ask About Timeline
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onInquiry(step, 'process');
            }}
            className={cn(
              'flex-1 px-4 py-2 text-sm rounded-lg font-medium transition-colors',
              isActive 
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <motion.div
              className={cn(
                'h-2 rounded-full bg-gradient-to-r',
                `${step.color.replace('from-', 'from-').replace('to-', 'to-')}`
              )}
              initial={{ width: 0 }}
              animate={{ width: isActive ? '100%' : '0%' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <span className="text-xs text-gray-500 font-medium">
            Step {step.id}/4
          </span>
        </div>
      </div>
    </InteractiveCard>
  );
}