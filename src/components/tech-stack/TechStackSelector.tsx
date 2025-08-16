// src/components/tech-stack/TechStackSelector.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TechStack } from '@/types/phase2';
import { techStacks, getRecommendedStack } from '@/data/techStacks';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedContainer } from '@/components/shared/AnimatedContainer';
import { StackCard } from './StackCard';
import { StackComparison } from './StackComparison';
import { cn } from '@/lib/utils';

interface TechStackSelectorProps {
  onQuoteRequest?: (stack: TechStack) => void;
}

export function TechStackSelector({ onQuoteRequest }: TechStackSelectorProps) {
  const [activeView, setActiveView] = useState<'browse' | 'compare'>('browse');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const recommendedStack = getRecommendedStack();

  // Filter stacks based on complexity and search
  const filteredStacks = techStacks.filter(stack => {
    const matchesComplexity = selectedComplexity === 'all' || stack.complexity === selectedComplexity;
    const matchesSearch = searchQuery === '' || 
      stack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stack.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesComplexity && matchesSearch;
  });

  const handleQuoteRequest = (stack: TechStack) => {
    // If no external handler, scroll to contact form
    if (onQuoteRequest) {
      onQuoteRequest(stack);
    } else {
      // Scroll to contact form and pre-fill with stack preference
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Try to pre-fill the form if possible
        setTimeout(() => {
          const stackField = document.querySelector('[name="preferredStack"]') as HTMLSelectElement;
          if (stackField) {
            stackField.value = stack.name;
            stackField.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }, 1000);
      }
    }
  };

  const complexityOptions = [
    { value: 'all', label: 'All Levels', icon: '🎯' },
    { value: 'Simple', label: 'Simple', icon: '🟢' },
    { value: 'Moderate', label: 'Moderate', icon: '🟡' },
    { value: 'Complex', label: 'Complex', icon: '🔴' }
  ];

  return (
    <SectionWrapper id="tech-stacks" background="gray">
      <div className="space-y-12">
        {/* Header */}
        <AnimatedContainer animation="slideUp" className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect technology combination for your project. 
            We'll guide you through the options and help you make the best choice.
          </p>
        </AnimatedContainer>

        {/* Recommended Stack Highlight */}
        <AnimatedContainer animation="slideUp" delay={0.2}>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 md:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{recommendedStack.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {recommendedStack.name}
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                      ⭐ Our Top Recommendation
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{recommendedStack.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>📅 {recommendedStack.timeline}</span>
                    <span>💰 {recommendedStack.estimatedCost}</span>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => handleQuoteRequest(recommendedStack)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote for Top Pick
              </motion.button>
            </div>
          </div>
        </AnimatedContainer>

        {/* View Toggle */}
        <AnimatedContainer animation="slideUp" delay={0.3}>
          <div className="flex justify-center">
            <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
              <button
                onClick={() => setActiveView('browse')}
                className={cn(
                  'px-6 py-2 rounded-md font-medium transition-all',
                  activeView === 'browse'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Browse Stacks
              </button>
              <button
                onClick={() => setActiveView('compare')}
                className={cn(
                  'px-6 py-2 rounded-md font-medium transition-all',
                  activeView === 'compare'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Compare Stacks
              </button>
            </div>
          </div>
        </AnimatedContainer>

        {/* Content Area */}
        <AnimatedContainer animation="fadeIn" delay={0.4}>
          {activeView === 'browse' ? (
            <div className="space-y-8">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Search technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* Complexity Filter */}
                <div className="flex gap-2">
                  {complexityOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedComplexity(option.value)}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
                        selectedComplexity === option.value
                          ? 'bg-primary-600 text-white shadow-sm'
                          : 'bg-white border border-gray-300 text-gray-600 hover:border-gray-400'
                      )}
                    >
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center text-gray-600">
                Showing {filteredStacks.length} of {techStacks.length} technology stacks
              </div>

              {/* Stack Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStacks.map((stack, index) => (
                  <StackCard
                    key={stack.id}
                    stack={stack}
                    onQuoteRequest={handleQuoteRequest}
                    delay={index * 0.1}
                  />
                ))}
              </div>

              {/* No Results */}
              {filteredStacks.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No stacks found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or complexity filter
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedComplexity('all');
                    }}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          ) : (
            <StackComparison 
              stacks={techStacks} 
              onQuoteRequest={handleQuoteRequest}
            />
          )}
        </AnimatedContainer>

        {/* Call to Action */}
        <AnimatedContainer animation="slideUp" delay={0.5}>
          <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Stack to Choose?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experienced team can help you select the perfect technology stack 
              based on your specific requirements, budget, and timeline.
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Expert Consultation
            </motion.button>
          </div>
        </AnimatedContainer>
      </div>
    </SectionWrapper>
  );
}