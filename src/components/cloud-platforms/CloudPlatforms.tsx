// src/components/cloud-platforms/CloudPlatforms.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { CloudPlatform } from '@/types/phase2';
import { cloudPlatforms } from '@/data/cloudPlatforms';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedContainer } from '@/components/shared/AnimatedContainer';
import { PlatformCard } from './PlatformCard';
import { ServiceHighlight } from './ServiceHighlight';
import { HeadlineText, TitleText, BodyText } from '@/components/ui/Typography';
import { AppleButton } from '@/components/ui/AppleButton';
import { AppleCard } from '@/components/ui/AppleCard';

interface CloudPlatformsProps {
  onServiceInquiry?: (platform: CloudPlatform, service: string) => void;
}

export function CloudPlatforms({ onServiceInquiry }: CloudPlatformsProps) {
  const [activeView, setActiveView] = useState<'simple' | 'overview' | 'services'>('simple');
  const [activePlatform, setActivePlatform] = useState('saas');

  // Simple cloud platforms for the main view
  const simplePlatforms = [
    {
      id: 'saas',
      name: 'Software as a Service',
      acronym: 'SaaS',
      icon: '☁️',
      color: 'from-primary-500 to-primary-600',
      description: 'Ready-to-use applications accessible via web browser',
      priceRange: '₹25,000 - ₹2,00,000/month',
      setupCost: '₹1,50,000 - ₹8,00,000',
      examples: ['Salesforce', 'Zoom', 'Slack', 'Custom Business Apps'],
      benefits: [
        'No infrastructure management',
        'Automatic updates and maintenance',
        'Scalable user access',
        'Lower upfront costs'
      ],
      services: [
        'Custom SaaS development',
        'Third-party SaaS integration',
        'Data migration and setup',
        'User training and support'
      ]
    },
    {
      id: 'paas',
      name: 'Platform as a Service',
      acronym: 'PaaS',
      icon: '🛠️',
      color: 'from-secondary-500 to-secondary-600',
      description: 'Development platform with tools and runtime environment',
      priceRange: '₹15,000 - ₹1,50,000/month',
      setupCost: '₹2,00,000 - ₹6,00,000',
      examples: ['Heroku', 'Vercel', 'Google App Engine', 'Custom Platforms'],
      benefits: [
        'Faster development cycles',
        'Built-in development tools',
        'Automated scaling',
        'Reduced complexity'
      ],
      services: [
        'Platform setup and configuration',
        'CI/CD pipeline implementation',
        'Application deployment',
        'Performance monitoring'
      ]
    },
    {
      id: 'iaas',
      name: 'Infrastructure as a Service',
      acronym: 'IaaS',
      icon: '🏗️',
      color: 'from-accent-500 to-accent-600',
      description: 'Fundamental compute, network, and storage resources',
      priceRange: '₹10,000 - ₹1,00,000/month',
      setupCost: '₹1,00,000 - ₹5,00,000',
      examples: ['AWS EC2', 'Google Cloud', 'Azure VMs', 'DigitalOcean'],
      benefits: [
        'Complete infrastructure control',
        'Highly scalable resources',
        'Pay-as-you-use pricing',
        'Global availability'
      ],
      services: [
        'Infrastructure design and setup',
        'Server configuration',
        'Network security implementation',
        'Backup and disaster recovery'
      ]
    }
  ];

  const handleServiceInquiry = (platform: CloudPlatform, service: string) => {
    if (onServiceInquiry) {
      onServiceInquiry(platform, service);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          const projectTypeField = document.querySelector('[name="projectType"]') as HTMLSelectElement;
          if (projectTypeField) {
            const projectTypeMap: Record<string, string> = {
              'saas': 'Web Application',
              'paas': 'Web Application', 
              'iaas': 'Infrastructure Setup',
              'erp': 'Business System'
            };
            projectTypeField.value = projectTypeMap[platform.id] || 'Web Application';
            projectTypeField.dispatchEvent(new Event('change', { bubbles: true }));
          }
          const descriptionField = document.querySelector('[name="projectDescription"]') as HTMLTextAreaElement;
          if (descriptionField && service !== 'general') {
            descriptionField.value = `I'm interested in ${service} for ${platform.name} (${platform.acronym}). Please provide more information about this service.`;
            descriptionField.dispatchEvent(new Event('input', { bubbles: true }));
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

  const selectedPlatform = simplePlatforms.find(p => p.id === activePlatform);
  const allServices = cloudPlatforms.flatMap(platform => 
    platform.services.map(service => ({ platform, service }))
  );

  return (
    <SectionWrapper id="cloud-platforms" background="white">
      <div className="space-y-12">
        {/* Header */}
        <AnimatedContainer animation="slideUp" className="text-center">
          <HeadlineText className="mb-6 text-3xl md:text-4xl lg:text-5xl">
            Cloud Platform Solutions
          </HeadlineText>
          <BodyText className="max-w-4xl mx-auto text-neutral-600 text-lg md:text-xl leading-relaxed">
            Understanding different cloud platforms and how they can transform your 
            business with transparent Indian pricing.
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
                onClick={() => setActiveView('overview')}
                variant={activeView === 'overview' ? 'primary' : 'ghost'}
                size="sm"
              >
                Platform Overview
              </AppleButton>
              <AppleButton
                onClick={() => setActiveView('services')}
                variant={activeView === 'services' ? 'primary' : 'ghost'}
                size="sm"
              >
                Our Services
              </AppleButton>
            </div>
          </div>
        </AnimatedContainer>

        {/* Content Area */}
        <AnimatedContainer animation="fadeIn" delay={0.3}>
          {activeView === 'simple' ? (
            /* Simple View - Clean Platform Selection */
            <div className="space-y-8">
              {/* Platform Selector Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {simplePlatforms.map((platform) => (
                  <AppleButton
                    key={platform.id}
                    variant={activePlatform === platform.id ? 'primary' : 'outline'}
                    onClick={() => setActivePlatform(platform.id)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xl">{platform.icon}</span>
                    <div className="text-left">
                      <div className="font-medium">{platform.acronym}</div>
                      <div className="text-xs opacity-75">{platform.name}</div>
                    </div>
                  </AppleButton>
                ))}
              </div>

              {/* Selected Platform Details */}
              {selectedPlatform && (
                <motion.div
                  key={selectedPlatform.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-6xl mx-auto"
                >
                  <AppleCard className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column - Overview */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-apple-lg bg-gradient-to-br ${selectedPlatform.color} flex items-center justify-center text-2xl`}>
                            {selectedPlatform.icon}
                          </div>
                          <div>
                            <TitleText>{selectedPlatform.name}</TitleText>
                            <span className="text-sm text-neutral-500">({selectedPlatform.acronym})</span>
                          </div>
                        </div>

                        <BodyText className="mb-6 text-neutral-600">
                          {selectedPlatform.description}
                        </BodyText>

                        {/* Pricing */}
                        <div className="space-y-3 mb-8">
                          <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-apple">
                            <span className="font-medium">Monthly Cost:</span>
                            <span className="text-primary-600 font-semibold">{selectedPlatform.priceRange}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-apple">
                            <span className="font-medium">Setup Investment:</span>
                            <span className="text-secondary-600 font-semibold">{selectedPlatform.setupCost}</span>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <TitleText className="mb-4">Key Benefits</TitleText>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedPlatform.benefits.map((benefit, index) => (
                              <motion.div
                                key={benefit}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                                <span className="text-sm text-neutral-600">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Services & Examples */}
                      <div>
                        {/* Examples */}
                        <div className="mb-8">
                          <TitleText className="mb-4">Popular Examples</TitleText>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedPlatform.examples.map((example, index) => (
                              <motion.div
                                key={example}
                                className="p-3 bg-neutral-50 rounded-apple text-center text-sm"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                {example}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Our Services */}
                        <div className="mb-8">
                          <TitleText className="mb-4">Our {selectedPlatform.acronym} Services</TitleText>
                          <div className="space-y-3">
                            {selectedPlatform.services.map((service, index) => (
                              <motion.div
                                key={service}
                                className="flex items-center gap-3 p-3 border border-neutral-200 rounded-apple hover:border-primary-300 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Shield size={16} className="text-primary-500" />
                                <span className="text-sm">{service}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <AppleButton
                          variant="primary"
                          onClick={scrollToContact}
                          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 group"
                        >
                          Get {selectedPlatform.acronym} Consultation
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </AppleButton>
                      </div>
                    </div>
                  </AppleCard>
                </motion.div>
              )}
            </div>
          ) : activeView === 'overview' ? (
            /* Overview View - Full Platform Cards */
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cloudPlatforms.map((platform, index) => (
                  <PlatformCard
                    key={platform.id}
                    platform={platform}
                    onServiceInquiry={handleServiceInquiry}
                    delay={index * 0.1}
                  />
                ))}
              </div>

              {/* Benefits Section */}
              <AppleCard className="bg-gradient-to-r from-neutral-50 to-primary-50">
                <TitleText className="text-center mb-6">
                  Why Choose Cloud Platforms?
                </TitleText>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-600 text-2xl">🚀</span>
                    </div>
                    <TitleText className="mb-2">Faster Time to Market</TitleText>
                    <BodyText className="text-neutral-600 text-sm">
                      Deploy applications quickly with pre-built infrastructure
                    </BodyText>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-secondary-600 text-2xl">💰</span>
                    </div>
                    <TitleText className="mb-2">Cost Optimization</TitleText>
                    <BodyText className="text-neutral-600 text-sm">
                      Pay only for resources you use with automatic scaling
                    </BodyText>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-600 text-2xl">🔒</span>
                    </div>
                    <TitleText className="mb-2">Enterprise Security</TitleText>
                    <BodyText className="text-neutral-600 text-sm">
                      Built-in security features and compliance certifications
                    </BodyText>
                  </div>
                </div>
              </AppleCard>
            </div>
          ) : (
            /* Services View - Detailed Services */
            <div className="space-y-8">
              <div className="text-center">
                <TitleText className="mb-2">
                  Comprehensive Cloud Services
                </TitleText>
                <BodyText className="text-neutral-600">
                  From strategy to implementation, we provide end-to-end cloud platform services
                </BodyText>
              </div>

              <div className="space-y-8">
                {cloudPlatforms.map((platform, platformIndex) => (
                  <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: platformIndex * 0.2 }}
                  >
                    <AppleCard>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-xl`}>
                          {platform.icon}
                        </div>
                        <div className="flex-1">
                          <TitleText>
                            {platform.name} Services
                          </TitleText>
                          <BodyText className="text-neutral-600">{platform.acronym} Implementation & Support</BodyText>
                        </div>
                        <AppleButton
                          onClick={() => handleServiceInquiry(platform, 'general')}
                          variant="outline"
                          size="sm"
                        >
                          Get Quote
                        </AppleButton>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {platform.services.map((service, serviceIndex) => (
                          <ServiceHighlight
                            key={serviceIndex}
                            service={service}
                            platform={platform}
                            onInquiry={() => handleServiceInquiry(platform, service)}
                            delay={serviceIndex * 0.1}
                            compact={true}
                          />
                        ))}
                      </div>
                    </AppleCard>
                  </motion.div>
                ))}
              </div>

              {/* Services Summary */}
              <AppleCard variant="flat" className="bg-gradient-to-r from-primary-50 to-secondary-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">{allServices.length}+</div>
                    <div className="text-sm text-neutral-600">Total Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-600">{cloudPlatforms.length}</div>
                    <div className="text-sm text-neutral-600">Platform Types</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-600">99.9%</div>
                    <div className="text-sm text-neutral-600">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neutral-600">24/7</div>
                    <div className="text-sm text-neutral-600">Support</div>
                  </div>
                </div>
              </AppleCard>
            </div>
          )}
        </AnimatedContainer>

        {/* Call to Action */}
        <AnimatedContainer animation="slideUp" delay={0.4}>
          <AppleCard variant="flat" className="text-center bg-gradient-to-r from-neutral-50 to-primary-50">
            <TitleText className="mb-4">
              Not Sure Which Platform is Right for You?
            </TitleText>
            <BodyText className="mb-6 text-neutral-600 max-w-2xl mx-auto">
              Our cloud experts will analyze your requirements and recommend the perfect 
              solution for your business needs and budget.
            </BodyText>
            <AppleButton 
              variant="primary" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Schedule Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </AppleButton>
          </AppleCard>
        </AnimatedContainer>
      </div>
    </SectionWrapper>
  );
}