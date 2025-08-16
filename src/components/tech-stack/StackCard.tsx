// src/components/tech-stack/StackCard.tsx
'use client';

import { TechStack } from '@/types/phase2';
import { InteractiveCard } from '@/components/shared/InteractiveCard';
import { QuoteButton } from './QuoteButton';
import { Badge } from '@/components/ui/badge';

interface StackCardProps {
  stack: TechStack;
  onQuoteRequest: (stack: TechStack) => void;
  delay?: number;
}

export function StackCard({ stack, onQuoteRequest, delay = 0 }: StackCardProps) {
  const complexityColors = {
    Simple: 'bg-green-100 text-green-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Complex: 'bg-red-100 text-red-800'
  };

  return (
    <InteractiveCard delay={delay} className="h-full">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{stack.icon}</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {stack.name}
              </h3>
              {stack.recommended && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm font-medium text-yellow-600">
                    Recommended
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${complexityColors[stack.complexity]}`}>
            {stack.complexity}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {stack.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {stack.description}
        </p>

        {/* Project Info */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Timeline:</span>
            <span className="text-sm font-medium text-gray-900">{stack.timeline}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Estimated Cost:</span>
            <span className="text-sm font-medium text-gray-900">{stack.estimatedCost}</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {stack.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500 text-xs">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal For */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Ideal For:</h4>
          <div className="flex flex-wrap gap-1">
            {stack.idealFor.slice(0, 2).map((use, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        {/* Quote Button */}
        <div className="mt-auto">
          <QuoteButton 
            stack={stack} 
            onQuoteRequest={onQuoteRequest}
            className="w-full"
          />
        </div>
      </div>
    </InteractiveCard>
  );
}