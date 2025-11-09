// src/components/tech-stack/TechStackSelector.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Zap } from 'lucide-react';
import { TechStack } from '@/types/phase2';
import { techStacks} from '@/data/techStacks';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedContainer } from '@/components/shared/AnimatedContainer';
import { StackCard } from './StackCard';
import { StackComparison } from './StackComparison';
import { HeadlineText, TitleText, BodyText } from '@/components/ui/Typography';
import { AppleButton } from '@/components/ui/AppleButton';
import { AppleCard } from '@/components/ui/AppleCard';

interface TechStackSelectorProps {
  onQuoteRequest?: (stack: TechStack) => void;
}

export function TechStackSelector({ onQuoteRequest }: TechStackSelectorProps) {
  const [activeView, setActiveView] = useState<'simple' | 'browse' | 'compare'>('simple');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStack, setSelectedStack] = useState('react');

  // Simple tech stacks for the main view
  const simpleTechStacks = [
    {
      id: 'react',
      name: 'React + Next.js',
      icon: '⚛️',
      timeline: '4-8 weeks',
      complexity: 'Moderate',
      estimatedCost: '₹2,50,000 - ₹6,00,000',
      description: 'Modern, fast, and SEO-optimized applications',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      idealFor: ['Business websites', 'E-commerce', 'SaaS platforms'],
      recommended: true,
    },
    {
      id: 'vue',
      name: 'Vue.js + Nuxt',
      icon: '🟢',
      timeline: '3-7 weeks',
      complexity: 'Simple',
      estimatedCost: '₹2,00,000 - ₹5,00,000',
      description: 'Progressive and developer-friendly framework',
      technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'SCSS'],
      idealFor: ['Startups', 'Rapid prototyping', 'Medium apps'],
      recommended: false,
    },
    {
      id: 'angular',
      name: 'Angular',
      icon: '🅰️',
      timeline: '6-12 weeks',
      complexity: 'Complex',
      estimatedCost: '₹4,00,000 - ₹10,00,000',
      description: 'Enterprise-grade applications with robust architecture',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
      idealFor: ['Enterprise apps', 'Complex dashboards', 'Large teams'],
      recommended: false,
    },
  ];

  // Filter stacks based on complexity and search
  const filteredStacks = techStacks.filter(stack => {
    const matchesComplexity = selectedComplexity === 'all' || stack.complexity === selectedComplexity;
    const matchesSearch = searchQuery === '' || 
      stack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stack.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesComplexity && matchesSearch;
  });

  const handleQuoteRequest = (stack: TechStack) => {
    if (onQuoteRequest) {
      onQuoteRequest(stack);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
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
          <HeadlineText className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            Choose Your Technology Stack
          </HeadlineText>
          <BodyText className="max-w-4xl mx-auto text-neutral-600 text-lg md:text-xl leading-relaxed">
            Select the perfect technology stack for your project. Each option is 
            carefully crafted for Indian businesses with transparent ₹ pricing.
          </BodyText>
        </AnimatedContainer>

        {/* View Toggle */}
        <AnimatedContainer animation="slideUp" delay={0.2}>
          <div className="flex justify-center">
            <div className="bg-neutral-100 p-1 rounded-apple border border-neutral-200">
              <AppleButton
                onClick={() => setActiveView('simple')}
                variant={activeView === 'simple' ? 'primary' : 'ghost'}
                size="sm"
              >
                Quick Select
              </AppleButton>
              <AppleButton
                onClick={() => setActiveView('browse')}
                variant={activeView === 'browse' ? 'primary' : 'ghost'}
                size="sm"
              >
                Browse All
              </AppleButton>
              <AppleButton
                onClick={() => setActiveView('compare')}
                variant={activeView === 'compare' ? 'primary' : 'ghost'}
                size="sm"
              >
                Compare
              </AppleButton>
            </div>
          </div>
        </AnimatedContainer>

        {/* Content Area */}
        <AnimatedContainer animation="fadeIn" delay={0.3}>
          {activeView === 'simple' ? (
            /* Simple View - Clean and Minimal */
            <div className="space-y-8">
              {/* Stack Selector Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {simpleTechStacks.map((stack) => (
                  <AppleButton
                    key={stack.id}
                    variant={selectedStack === stack.id ? 'primary' : 'outline'}
                    onClick={() => setSelectedStack(stack.id)}
                    className="relative"
                  >
                    <span className="text-xl mr-2">{stack.icon}</span>
                    {stack.name}
                    {stack.recommended && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⭐</span>
                      </div>
                    )}
                  </AppleButton>
                ))}
              </div>

              {/* Selected Stack Details */}
              <AnimatePresence mode="wait">
                {simpleTechStacks.map((stack) => (
                  selectedStack === stack.id && (
                    <motion.div
                      key={stack.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <AppleCard className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-4xl">{stack.icon}</span>
                              <div>
                                <TitleText>{stack.name}</TitleText>
                                {stack.recommended && (
                                  <span className="inline-block bg-accent-100 text-accent-700 text-xs px-2 py-1 rounded-full mt-1">
                                    ⭐ Recommended
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <BodyText className="mb-6 text-neutral-600">
                              {stack.description}
                            </BodyText>

                            <div className="space-y-4">
                              <div>
                                <span className="font-medium text-neutral-900">Timeline: </span>
                                <span className="text-neutral-600">{stack.timeline}</span>
                              </div>
                              <div>
                                <span className="font-medium text-neutral-900">Investment: </span>
                                <span className="text-neutral-600">{stack.estimatedCost}</span>
                              </div>
                              <div>
                                <span className="font-medium text-neutral-900">Complexity: </span>
                                <span className={`px-2 py-1 rounded text-xs ${
                                  stack.complexity === 'Simple' ? 'bg-secondary-100 text-secondary-700' :
                                  stack.complexity === 'Moderate' ? 'bg-primary-100 text-primary-700' :
                                  'bg-accent-100 text-accent-700'
                                }`}>
                                  {stack.complexity}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div>
                            <div className="mb-6">
                              <TitleText className="mb-3">Technologies Included</TitleText>
                              <div className="flex flex-wrap gap-2">
                                {stack.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mb-6">
                              <TitleText className="mb-3">Ideal For</TitleText>
                              <ul className="space-y-2">
                                {stack.idealFor.map((item) => (
                                  <li key={item} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                    <BodyText className="text-neutral-600">{item}</BodyText>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <AppleButton 
                              variant="primary" 
                              className="w-full group"
                              onClick={scrollToContact}
                            >
                              Get Quote for {stack.name}
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </AppleButton>
                          </div>
                        </div>
                      </AppleCard>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          ) : activeView === 'browse' ? (
            /* Browse View - Full Featured */
            <div className="space-y-8">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Search technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-input w-full md:w-80 rounded-apple border-neutral-300 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="flex gap-2">
                  {complexityOptions.map((option) => (
                    <AppleButton
                      key={option.value}
                      onClick={() => setSelectedComplexity(option.value)}
                      variant={selectedComplexity === option.value ? 'primary' : 'outline'}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </AppleButton>
                  ))}
                </div>
              </div>

              <div className="text-center text-neutral-600">
                Showing {filteredStacks.length} of {techStacks.length} technology stacks
              </div>

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

              {filteredStacks.length === 0 && (
                <AppleCard className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <TitleText className="text-neutral-900 mb-2">No stacks found</TitleText>
                  <BodyText className="text-neutral-600 mb-4">
                    Try adjusting your search or complexity filter
                  </BodyText>
                  <AppleButton
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedComplexity('all');
                    }}
                    variant="outline"
                  >
                    Clear all filters
                  </AppleButton>
                </AppleCard>
              )}
            </div>
          ) : (
            /* Compare View */
            <StackComparison 
              stacks={techStacks} 
              onQuoteRequest={handleQuoteRequest}
            />
          )}
        </AnimatedContainer>

        {/* Portfolio Redirect Button - Full Width */}
        <AnimatedContainer animation="slideUp" delay={0.4}>
          <AppleCard variant="flat" className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} className="text-white" />
              </div>
              
              <TitleText className="mb-3">
                See Our Work in Action
              </TitleText>
              
              <BodyText className="mb-6 text-neutral-600 max-w-2xl mx-auto">
                Explore our portfolio of successful projects and see how we've helped 
                Indian businesses transform their digital presence.
              </BodyText>
              
              <AppleButton
                variant="primary"
                size="lg"
                href="https://www.youtube.com"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 group"
              >
                <ExternalLink size={20} />
                View Our Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </AppleButton>
              
              <div className="mt-4 text-sm text-neutral-500">
                ✨ Coming soon: Interactive project showcase
              </div>
            </div>
          </AppleCard>
        </AnimatedContainer>

        {/* Call to Action */}
        <AnimatedContainer animation="slideUp" delay={0.5}>
          <AppleCard className="text-center">
            <TitleText className="text-neutral-900 mb-4">
              Not Sure Which Stack to Choose?
            </TitleText>
            <BodyText className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our experienced team can help you select the perfect technology stack 
              based on your specific requirements, budget, and timeline.
            </BodyText>
            <AppleButton
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="primary"
              size="lg"
              className="group"
            >
              Get Expert Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </AppleButton>
          </AppleCard>
        </AnimatedContainer>
      </div>
    </SectionWrapper>
  );
}