// src/components/cloud-platforms/ServiceHighlight.tsx
'use client';

import { motion } from 'framer-motion';
import { CloudPlatform } from '@/types/phase2';
import { cn } from '@/lib/utils';

interface ServiceHighlightProps {
  service: string;
  platform: CloudPlatform;
  onInquiry: () => void;
  delay?: number;
  compact?: boolean;
}

export function ServiceHighlight({ 
  service, 
  platform, 
  onInquiry, 
  delay = 0,
  compact = false 
}: ServiceHighlightProps) {
  // Get service icon based on service type
  const getServiceIcon = (service: string): string => {
    if (service.toLowerCase().includes('development')) return '💻';
    if (service.toLowerCase().includes('integration')) return '🔗';
    if (service.toLowerCase().includes('migration')) return '📦';
    if (service.toLowerCase().includes('setup') || service.toLowerCase().includes('configuration')) return '⚙️';
    if (service.toLowerCase().includes('security')) return '🔒';
    if (service.toLowerCase().includes('optimization')) return '⚡';
    if (service.toLowerCase().includes('monitoring')) return '📊';
    if (service.toLowerCase().includes('training')) return '🎓';
    if (service.toLowerCase().includes('automation')) return '🤖';
    if (service.toLowerCase().includes('design')) return '🏗️';
    if (service.toLowerCase().includes('backup')) return '💾';
    if (service.toLowerCase().includes('workflow')) return '🔄';
    return '🛠️';
  };

  // Get estimated timeline based on service complexity
  const getEstimatedTimeline = (service: string): string => {
    if (service.toLowerCase().includes('setup') || service.toLowerCase().includes('configuration')) return '1-2 weeks';
    if (service.toLowerCase().includes('migration') || service.toLowerCase().includes('integration')) return '2-4 weeks';
    if (service.toLowerCase().includes('development')) return '4-8 weeks';
    if (service.toLowerCase().includes('optimization')) return '1-3 weeks';
    if (service.toLowerCase().includes('training')) return '1 week';
    return '2-6 weeks';
  };

  const serviceIcon = getServiceIcon(service);
  const timeline = getEstimatedTimeline(service);

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.3 }}
        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{serviceIcon}</span>
          <div>
            <h4 className="font-medium text-gray-900 text-sm">{service}</h4>
            <p className="text-xs text-gray-500">Timeline: {timeline}</p>
          </div>
        </div>
        <button
          onClick={onInquiry}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
        >
          Learn More
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-colors",
            `bg-gradient-to-br ${platform.color} text-white`
          )}>
            {serviceIcon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm group-hover:text-primary-600 transition-colors">
              {service}
            </h4>
            <p className="text-xs text-gray-500">
              {platform.acronym} Service • {timeline}
            </p>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        {getServiceDescription(service, platform.acronym)}
      </p>

      {/* Features */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {getServiceFeatures(service).map((feature, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Action */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">
          Starting from consultation
        </div>
        <motion.button
          onClick={onInquiry}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Quote →
        </motion.button>
      </div>
    </motion.div>
  );
}

// Helper function to get service description
function getServiceDescription(service: string, platformType: string): string {
  const descriptions: Record<string, string> = {
    'Custom SaaS development': `Build scalable ${platformType} applications tailored to your business needs with modern architecture and user-friendly interfaces.`,
    'Third-party SaaS integration': `Seamlessly connect your existing systems with popular ${platformType} platforms to streamline workflows.`,
    'Platform setup and configuration': `Professional ${platformType} environment setup with optimal configurations for performance and security.`,
    'CI/CD pipeline implementation': `Automated deployment pipelines for faster, more reliable ${platformType} application delivery.`,
    'Infrastructure design and setup': `Custom ${platformType} infrastructure architecture designed for scalability, security, and cost-effectiveness.`,
    'Custom ERP development': `Tailored ${platformType} enterprise solutions that integrate all your business processes seamlessly.`,
    'ERP system integration': `Connect your existing systems with ${platformType} platforms for unified business operations.`,
    'Data migration and consolidation': `Safe and efficient data transfer to ${platformType} platforms with zero downtime.`,
    'Security implementation': `Enterprise-grade security measures for your ${platformType} infrastructure and applications.`,
    'Performance optimization': `Fine-tune your ${platformType} systems for maximum performance and cost efficiency.`,
    'Monitoring and logging setup': `Comprehensive monitoring solutions for ${platformType} applications and infrastructure.`,
    'Auto-scaling configuration': `Dynamic resource management for ${platformType} platforms that adapts to your needs.`,
    'Business process automation': `Streamline operations with intelligent ${platformType} workflow automation.`,
    'Training and change management': `Comprehensive team training for smooth ${platformType} platform adoption.`,
    'Backup and disaster recovery': `Robust data protection and recovery solutions for ${platformType} environments.`,
    'Network security implementation': `Advanced security configurations for ${platformType} infrastructure protection.`,
    'Workflow optimization': `Optimize business processes and workflows within ${platformType} systems.`,
    'Cost optimization strategies': `Analyze and optimize ${platformType} spending for maximum ROI.`
  };

  return descriptions[service] || `Professional ${platformType} consulting and implementation services tailored to your specific requirements.`;
}

// Helper function to get service features
function getServiceFeatures(service: string): string[] {
  const features: Record<string, string[]> = {
    'Custom SaaS development': ['Multi-tenant', 'Scalable', 'API-first'],
    'Third-party SaaS integration': ['Real-time sync', 'Data mapping', 'Webhook setup'],
    'Platform setup and configuration': ['Best practices', 'Security hardening', 'Performance tuning'],
    'CI/CD pipeline implementation': ['Automated testing', 'Zero downtime', 'Rollback capability'],
    'Infrastructure design and setup': ['High availability', 'Auto-scaling', 'Cost optimization'],
    'Custom ERP development': ['Modular design', 'Workflow automation', 'Reporting'],
    'ERP system integration': ['Data sync', 'Process automation', 'User training'],
    'Data migration and consolidation': ['Zero downtime', 'Data validation', 'Backup strategy'],
    'Security implementation': ['Encryption', 'Access control', 'Compliance'],
    'Performance optimization': ['Load balancing', 'Caching', 'Database tuning'],
    'Monitoring and logging setup': ['Real-time alerts', 'Custom dashboards', 'Analytics'],
    'Auto-scaling configuration': ['Traffic-based', 'Cost-effective', 'Automatic'],
    'Business process automation': ['Workflow design', 'Integration', 'Monitoring'],
    'Training and change management': ['Documentation', 'Hands-on training', 'Support'],
    'Backup and disaster recovery': ['Automated backups', 'Quick recovery', 'Testing'],
    'Network security implementation': ['Firewall config', 'VPN setup', 'Monitoring'],
    'Workflow optimization': ['Process mapping', 'Bottleneck removal', 'Automation'],
    'Cost optimization strategies': ['Usage analysis', 'Right-sizing', 'Reserved instances']
  };

  return features[service] || ['Consultation', 'Implementation', 'Support'];
}