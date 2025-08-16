// src/components/cloud-platforms/CloudPlatforms.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudPlatform } from '@/types/phase2';
import { cloudPlatforms } from '@/data/cloudPlatforms';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedContainer } from '@/components/shared/AnimatedContainer';
import { PlatformCard } from './PlatformCard';
import { ServiceHighlight } from './ServiceHighlight';
import { cn } from '@/lib/utils';

interface CloudPlatformsProps {
  onServiceInquiry?: (platform: CloudPlatform, service: string) => void;
}

export function CloudPlatforms({ onServiceInquiry }: CloudPlatformsProps) {
  const [activeView, setActiveView] = useState<'overview' | 'services'>('overview');

  const handleServiceInquiry = (platform: CloudPlatform, service: string) => {
    if (onServiceInquiry) {
      onServiceInquiry(platform, service);
    } else {
      // Scroll to contact form and pre-fill with platform preference
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Try to pre-fill the form if possible
        setTimeout(() => {
          const projectTypeField = document.querySelector('[name="projectType"]') as HTMLSelectElement;
          if (projectTypeField) {
            // Set project type based on platform
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

  const allServices = cloudPlatforms.flatMap(platform => 
    platform.services.map(service => ({ platform, service }))
  );

  return (
    <SectionWrapper id="cloud-platforms" background="white">
      <div className="space-y-12">
        {/* Header */}
        <AnimatedContainer animation="slideUp" className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cloud Platform Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understanding the different types of cloud platforms and how they can transform your business. 
            We help you choose and implement the right cloud strategy.
          </p>
        </AnimatedContainer>

        {/* Platform Types Overview */}
        <AnimatedContainer animation="slideUp" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center cursor-pointer"
                onClick={() => setActiveView('overview')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-2xl hover:shadow-lg transition-shadow`}>
                  {platform.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{platform.acronym}</h3>
                <p className="text-xs text-gray-500 mt-1">{platform.name}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>

        {/* View Toggle */}
        <AnimatedContainer animation="slideUp" delay={0.3}>
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveView('overview')}
                className={cn(
                  'px-6 py-2 rounded-md font-medium transition-all',
                  activeView === 'overview'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Platform Overview
              </button>
              <button
                onClick={() => setActiveView('services')}
                className={cn(
                  'px-6 py-2 rounded-md font-medium transition-all',
                  activeView === 'services'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Our Services
              </button>
            </div>
          </div>
        </AnimatedContainer>

        {/* Content Area */}
        <AnimatedContainer animation="fadeIn" delay={0.4}>
          {activeView === 'overview' ? (
            <div className="space-y-8">
              {/* Platform Cards Grid */}
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

              {/* Platform Comparison */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Which Platform is Right for You?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cloudPlatforms.map((platform, index) => (
                    <motion.div
                      key={platform.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white p-4 rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleServiceInquiry(platform, 'general')}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{platform.icon}</span>
                        <h4 className="font-semibold text-gray-900">{platform.acronym}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {platform.description.slice(0, 80)}...
                      </p>
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-gray-900">Best for:</div>
                        {platform.useCases.slice(0, 2).map((useCase, i) => (
                          <div key={i} className="text-xs text-gray-600">• {useCase}</div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Cloud Platforms?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 text-2xl">🚀</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Faster Time to Market</h4>
                    <p className="text-gray-600 text-sm">
                      Deploy applications quickly with pre-built infrastructure and services
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-2xl">💰</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cost Optimization</h4>
                    <p className="text-gray-600 text-sm">
                      Pay only for resources you use with automatic scaling capabilities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 text-2xl">🔒</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                    <p className="text-gray-600 text-sm">
                      Built-in security features and compliance certifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Services Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Comprehensive Cloud Services
                </h3>
                <p className="text-gray-600">
                  From strategy to implementation, we provide end-to-end cloud platform services
                </p>
              </div>

              {/* Services by Platform */}
              <div className="space-y-8">
                {cloudPlatforms.map((platform, platformIndex) => (
                  <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: platformIndex * 0.2 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Platform Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-xl`}>
                        {platform.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900">
                          {platform.name} Services
                        </h4>
                        <p className="text-gray-600">{platform.acronym} Implementation & Support</p>
                      </div>
                      <motion.button
                        onClick={() => handleServiceInquiry(platform, 'general')}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Quote
                      </motion.button>
                    </div>

                    {/* Services Grid */}
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
                  </motion.div>
                ))}
              </div>

              {/* Services Summary Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{allServices.length}+</div>
                    <div className="text-sm text-gray-600">Total Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{cloudPlatforms.length}</div>
                    <div className="text-sm text-gray-600">Platform Types</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatedContainer>

        {/* Call to Action */}
        <AnimatedContainer animation="slideUp" delay={0.6}>
          <div className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Move to the Cloud?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our cloud experts will help you choose the right platform and create a migration 
              strategy that minimizes disruption and maximizes benefits.
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
                Schedule Consultation
              </motion.button>
              <motion.button
                onClick={() => setActiveView(activeView === 'services' ? 'overview' : 'services')}
                className="bg-white border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeView === 'services' ? 'View Platform Overview' : 'Explore All Services'}
              </motion.button>
            </div>
          </div>
        </AnimatedContainer>

        {/* Quick Action Cards */}
        <AnimatedContainer animation="slideUp" delay={0.7}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-blue-600 text-xl">💬</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
              <p className="text-sm text-gray-600">
                Discuss your cloud needs with our experts
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setActiveView('services')}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-green-600 text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quick Assessment</h4>
              <p className="text-sm text-gray-600">
                Find the right platform for your business
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => {
                // Create a download link for a hypothetical resource
                const link = document.createElement('a');
                link.href = '/resources/cloud-migration-guide.pdf';
                link.download = 'cloud-migration-guide.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-purple-600 text-xl">📖</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Migration Guide</h4>
              <p className="text-sm text-gray-600">
                Download our comprehensive migration guide
              </p>
            </motion.div>
          </div>
        </AnimatedContainer>

        {/* Industry Use Cases */}
        <AnimatedContainer animation="slideUp" delay={0.8}>
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Industry-Specific Cloud Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h4 className="font-semibold mb-2">Healthcare</h4>
                <p className="text-sm opacity-90">HIPAA-compliant cloud solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h4 className="font-semibold mb-2">Financial Services</h4>
                <p className="text-sm opacity-90">Secure, compliant financial platforms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-sm opacity-90">Scalable learning management systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h4 className="font-semibold mb-2">E-commerce</h4>
                <p className="text-sm opacity-90">High-performance retail platforms</p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </SectionWrapper>
  );
}
