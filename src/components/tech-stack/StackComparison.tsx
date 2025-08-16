// src/components/tech-stack/StackComparison.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechStack } from '@/types/phase2';
import { InteractiveCard } from '@/components/shared/InteractiveCard';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StackComparisonProps {
  stacks: TechStack[];
  onQuoteRequest: (stack: TechStack) => void;
}

export function StackComparison({ stacks, onQuoteRequest }: StackComparisonProps) {
  const [selectedStacks, setSelectedStacks] = useState<TechStack[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const toggleStackSelection = (stack: TechStack) => {
    if (selectedStacks.includes(stack)) {
      setSelectedStacks(selectedStacks.filter(s => s.id !== stack.id));
    } else if (selectedStacks.length < 3) {
      setSelectedStacks([...selectedStacks, stack]);
    }
  };

  const startComparison = () => {
    if (selectedStacks.length >= 2) {
      setIsComparing(true);
    }
  };

  const clearComparison = () => {
    setSelectedStacks([]);
    setIsComparing(false);
  };

  if (isComparing) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            Stack Comparison
          </h3>
          <button
            onClick={clearComparison}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕ Clear
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-w-full">
            {selectedStacks.map((stack, index) => (
              <motion.div
                key={stack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <InteractiveCard className="h-full">
                  {/* Stack Header */}
                  <div className="text-center mb-6">
                    <span className="text-3xl mb-2 block">{stack.icon}</span>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {stack.name}
                    </h4>
                    {stack.recommended && (
                      <Badge variant="default" className="mt-2">
                        ⭐ Recommended
                      </Badge>
                    )}
                  </div>

                  {/* Comparison Details */}
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Timeline</h5>
                      <p className="text-gray-600">{stack.timeline}</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Complexity</h5>
                      <Badge 
                        variant={stack.complexity === 'Simple' ? 'default' : 
                                stack.complexity === 'Moderate' ? 'secondary' : 'destructive'}
                      >
                        {stack.complexity}
                      </Badge>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Cost Range</h5>
                      <p className="text-gray-600">{stack.estimatedCost}</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Technologies</h5>
                      <div className="space-y-1">
                        {stack.technologies.map((tech, i) => (
                          <div key={i} className="text-sm text-gray-600">
                            • {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Best For</h5>
                      <div className="space-y-1">
                        {stack.idealFor.map((use, i) => (
                          <div key={i} className="text-sm text-gray-600">
                            • {use}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onQuoteRequest(stack)}
                      className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      Get Quote for {stack.name.split(' ')[0]}
                    </button>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Compare Technology Stacks
        </h3>
        <p className="text-gray-600">
          Select 2-3 stacks to compare their features, costs, and timelines
        </p>
      </div>

      {/* Selection Status */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">
            Selected: {selectedStacks.length}/3
          </span>
          <AnimatePresence>
            {selectedStacks.map((stack) => (
              <motion.div
                key={stack.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex items-center gap-1"
              >
                <Badge variant="default">
                  {stack.icon} {stack.name.split(' ')[0]}
                </Badge>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex gap-2">
          {selectedStacks.length > 0 && (
            <button
              onClick={clearComparison}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear All
            </button>
          )}
          {selectedStacks.length >= 2 && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={startComparison}
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Compare Selected
            </motion.button>
          )}
        </div>
      </div>

      {/* Stack Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stacks.map((stack, index) => {
          const isSelected = selectedStacks.includes(stack);
          const isDisabled = selectedStacks.length >= 3 && !isSelected;

          return (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleStackSelection(stack)}
                disabled={isDisabled}
                className={cn(
                  'w-full p-4 rounded-lg border-2 transition-all text-left',
                  isSelected 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-200 hover:border-gray-300',
                  isDisabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{stack.icon}</span>
                    <span className="font-medium text-gray-900">
                      {stack.name}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="text-primary-600">✓</span>
                  )}
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Timeline: {stack.timeline}</div>
                  <div>Complexity: {stack.complexity}</div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}