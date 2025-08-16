// src/components/process/ProcessTimeline.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProcessStep as ProcessStepType } from '@/types/phase2';
import { processSteps, getTotalEstimatedDuration } from '@/data/processSteps';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedContainer } from '@/components/shared/AnimatedContainer';
import { ProcessIndicator } from './ProcessIndicator';
import { ProcessStep } from './ProcessStep';
import { cn } from '@/lib/utils';

interface ProcessTimelineProps {
  onProcessInquiry?: (step: ProcessStepType, topic: string) => void;
}

export function ProcessTimeline({ onProcessInquiry }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [viewMode, setViewMode] = useState<'timeline' | 'detailed'>('timeline');
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveStep(current => current >= processSteps.length ? 1 : current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleStepSelect = (stepId: number) => {
    setActiveStep(stepId);
    setIsAutoPlay(false); // Stop autoplay when user manually selects
  };

  const handleProcessInquiry = (step: ProcessStepType, topic: string) => {
    if (onProcessInquiry) {
      onProcessInquiry(step, topic);
    } else {
      // Scroll to contact form and pre-fill with process inquiry
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          const projectTypeField = document.querySelector('[name="projectType"]') as HTMLSelectElement;
          if (projectTypeField) {
            projectTypeField.value = 'Web Application';
            projectTypeField.dispatchEvent(new Event('change', { bubbles: true }));
          }

          const descriptionField = document.querySelector('[name="projectDescription"]') as HTMLTextAreaElement;
          if (descriptionField) {
            descriptionField.value = `I have questions about ${step.title} (Step ${step.id}) in your development process. Specifically, I'd like to know more about ${topic === 'timeline' ? 'timeline and scheduling' : 'the process details'}.`;
            descriptionField.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }, 1000);
      }
    }
  };

  const currentStep = processSteps.find(step => step.id === activeStep);
  const totalDuration = getTotalEstimatedDuration();

  return (
    <SectionWrapper id="process" background="gradient">
      <div className="space-y-12">
        {/* Header */}
        <AnimatedContainer animation="slideUp" className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            A proven 4-step methodology that ensures your project is delivered on time, 
            on budget, and exceeds expectations.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>📅 Total Timeline: {totalDuration}</span>
            <span>•</span>
            <span>🎯 Proven Process</span>
            <span>•</span>
            <span>👥 Client Collaboration</span>
          </div>
        </AnimatedContainer>

        {/* Process Overview Stats */}
        <AnimatedContainer animation="slideUp" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'text-center p-4 rounded-xl border-2 transition-all cursor-pointer',
                  activeStep === step.id 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                )}
                onClick={() => handleStepSelect(step.id)}
              >
                <div className={`text-2xl mb-2 ${activeStep === step.id ? 'animate-bounce' : ''}`}>
                  {step.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>

        {/* View Mode Toggle */}
        <AnimatedContainer animation="slideUp" delay={0.3}>
          <div className="flex justify-center items-center gap-4">
            <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
              <button
                onClick={() => setViewMode('timeline')}
                className={cn(
                  'px-4 py-2 rounded-md font-medium transition-all text-sm',
                  viewMode === 'timeline'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Timeline View
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={cn(
                  'px-4 py-2 rounded-md font-medium transition-all text-sm',
                  viewMode === 'detailed'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Detailed View
              </button>
            </div>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={cn(
                'px-4 py-2 rounded-lg font-medium transition-all text-sm border',
                isAutoPlay 
                  ? 'bg-green-100 text-green-700 border-green-300' 
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
              )}
            >
              {isAutoPlay ? '⏸️ Pause' : '▶️ Auto Play'}
            </button>
          </div>
        </AnimatedContainer>

        {/* Content Area */}
        <AnimatedContainer animation="fadeIn" delay={0.4}>
          {viewMode === 'timeline' ? (
            <div className="space-y-8">
              {/* Process Indicator */}
              <div className="flex justify-center">
                <ProcessIndicator
                  steps={processSteps}
                  currentStep={activeStep}
                  onStepClick={handleStepSelect}
                  orientation="horizontal"
                  showLabels={true}
                />
              </div>

              {/* Current Step Detail */}
              <AnimatePresence mode="wait">
                {currentStep && (
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                      {/* Step Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentStep.color} flex items-center justify-center text-2xl`}>
                          {currentStep.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            Step {currentStep.id}: {currentStep.title}
                          </h3>
                          <p className="text-gray-600">{currentStep.duration} • {currentStep.description}</p>
                        </div>
                      </div>

                      {/* Step Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span>⚙️</span> What We Do
                          </h4>
                          <ul className="space-y-2">
                            {currentStep.activities.slice(0, 3).map((activity, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-primary-500 text-xs mt-1">•</span>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span>📦</span> What You Get
                          </h4>
                          <ul className="space-y-2">
                            {currentStep.deliverables.slice(0, 3).map((deliverable, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-green-500 text-xs mt-1">✓</span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span>👥</span> Your Role
                          </h4>
                          <ul className="space-y-2">
                            {currentStep.clientInvolvement.slice(0, 3).map((involvement, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-blue-500 text-xs mt-1">•</span>
                                {involvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Step Navigation */}
                      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                        <button
                          onClick={() => handleStepSelect(Math.max(1, activeStep - 1))}
                          disabled={activeStep === 1}
                          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          ← Previous Step
                        </button>

                        <div className="flex gap-2">
                          <button
                            onClick={() => currentStep && handleProcessInquiry(currentStep, 'timeline')}
                            className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            Ask About Timeline
                          </button>
                          <button
                            onClick={() => currentStep && handleProcessInquiry(currentStep, 'process')}
                            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                          >
                            Learn More
                          </button>
                        </div>

                        <button
                          onClick={() => handleStepSelect(Math.min(processSteps.length, activeStep + 1))}
                          disabled={activeStep === processSteps.length}
                          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Next Step →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.id}
                  step={step}
                  isActive={activeStep === step.id}
                  onStepSelect={handleStepSelect}
                  onInquiry={handleProcessInquiry}
                  delay={index * 0.1}
                />
              ))}
            </div>
          )}
        </AnimatedContainer>

        {/* Call to Action */}
        <AnimatedContainer animation="slideUp" delay={0.6}>
          <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our structured process ensures your project stays on track from concept to launch. 
              Let's discuss your specific requirements and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                onClick={() => {
                  const firstStep = processSteps[0];
                  if (firstStep) {
                    handleProcessInquiry(firstStep, 'consultation');
                  }
                }}
                className="bg-white border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </SectionWrapper>
  );
}