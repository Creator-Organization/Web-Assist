// src/components/cloud-platforms/PlatformCard.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudPlatform } from '@/types/phase2';
import { InteractiveCard } from '@/components/shared/InteractiveCard';
import { Badge } from '@/components/ui/badge';
import { ServiceHighlight } from './ServiceHighlight';

interface PlatformCardProps {
  platform: CloudPlatform;
  onServiceInquiry: (platform: CloudPlatform, service: string) => void;
  delay?: number;
}

export function PlatformCard({ platform, onServiceInquiry, delay = 0 }: PlatformCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'examples'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'services', label: 'Our Services', icon: '🛠️' },
    { id: 'examples', label: 'Examples', icon: '💡' }
  ];

  return (
    <InteractiveCard delay={delay} className="h-full">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-2xl`}>
              {platform.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {platform.name}
              </h3>
              <Badge variant="secondary" className="mt-1">
                {platform.acronym}
              </Badge>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ⌄
            </motion.div>
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {platform.description}
        </p>

        {/* Quick Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Benefits:</h4>
          <div className="grid grid-cols-1 gap-1">
            {platform.benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500 text-xs">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="text-xs">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">All Benefits:</h5>
                      <div className="grid grid-cols-1 gap-1">
                        {platform.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-green-500 text-xs">✓</span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Use Cases:</h5>
                      <div className="flex flex-wrap gap-2">
                        {platform.useCases.map((useCase, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    {platform.services.map((service, index) => (
                      <ServiceHighlight
                        key={index}
                        service={service}
                        platform={platform}
                        onInquiry={() => onServiceInquiry(platform, service)}
                        delay={index * 0.1}
                      />
                    ))}
                  </motion.div>
                )}

                {activeTab === 'examples' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    <h5 className="font-medium text-gray-900 mb-3">Popular Examples:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {platform.examples.map((example, index) => (
                        <div
                          key={index}
                          className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="font-medium text-gray-900 text-sm mb-1">
                            {example}
                          </div>
                          <div className="text-xs text-gray-500">
                            {platform.acronym} Platform
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        <div className="mt-auto pt-4">
          <motion.button
            onClick={() => onServiceInquiry(platform, 'general')}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors bg-gradient-to-r ${platform.color} hover:opacity-90`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More About {platform.acronym}
          </motion.button>
        </div>
      </div>
    </InteractiveCard>
  );
}