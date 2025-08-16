// src/data/cloudPlatforms.ts
import { CloudPlatform } from '@/types/phase2';

export const cloudPlatforms: CloudPlatform[] = [
  {
    id: 'saas',
    name: 'Software as a Service',
    acronym: 'SaaS',
    description: 'Ready-to-use software applications delivered over the internet. Users access the software through a web browser without needing to install or maintain it.',
    examples: [
      'Salesforce CRM',
      'Google Workspace',
      'Slack',
      'Zoom',
      'Dropbox',
      'HubSpot'
    ],
    services: [
      'Custom SaaS development',
      'Third-party SaaS integration',
      'Data migration to SaaS platforms',
      'SaaS customization and configuration',
      'Multi-tenant architecture design',
      'SaaS security implementation'
    ],
    benefits: [
      'Quick deployment and setup',
      'No maintenance required',
      'Automatic updates and patches',
      'Cost-effective subscription model',
      'Accessible from anywhere',
      'Scalable user management'
    ],
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    useCases: [
      'Customer relationship management',
      'Team collaboration tools',
      'Document management systems',
      'Project management platforms',
      'Communication and video conferencing',
      'Accounting and invoicing software'
    ]
  },
  {
    id: 'paas',
    name: 'Platform as a Service',
    acronym: 'PaaS',
    description: 'Cloud computing platform that provides developers with tools, libraries, and services to build, deploy, and manage applications without worrying about infrastructure.',
    examples: [
      'Vercel',
      'Heroku',
      'AWS Lambda',
      'Google App Engine',
      'Microsoft Azure App Service',
      'Netlify'
    ],
    services: [
      'Platform setup and configuration',
      'CI/CD pipeline implementation',
      'Auto-scaling configuration',
      'Performance optimization',
      'Monitoring and logging setup',
      'Security and compliance implementation'
    ],
    benefits: [
      'Focus on coding, not infrastructure',
      'Automatic scaling and load balancing',
      'Built-in development tools',
      'Faster time to market',
      'Reduced operational overhead',
      'Integrated monitoring and analytics'
    ],
    icon: '🛠️',
    color: 'from-purple-500 to-pink-500',
    useCases: [
      'Web application deployment',
      'API backend hosting',
      'Microservices architecture',
      'Serverless functions',
      'Real-time applications',
      'Mobile app backends'
    ]
  },
  {
    id: 'iaas',
    name: 'Infrastructure as a Service',
    acronym: 'IaaS',
    description: 'Virtualized computing resources over the internet. Provides fundamental compute, network, and storage resources on-demand, giving you complete control over your infrastructure.',
    examples: [
      'AWS EC2',
      'Google Cloud Compute Engine',
      'Microsoft Azure VMs',
      'DigitalOcean Droplets',
      'Linode',
      'Vultr'
    ],
    services: [
      'Infrastructure design and setup',
      'Server configuration and management',
      'Network security implementation',
      'Backup and disaster recovery',
      'Performance monitoring',
      'Cost optimization strategies'
    ],
    benefits: [
      'Complete control over infrastructure',
      'Highly scalable resources',
      'Pay-as-you-use pricing model',
      'Global availability and redundancy',
      'Flexible configuration options',
      'Advanced security features'
    ],
    icon: '🏗️',
    color: 'from-orange-500 to-red-500',
    useCases: [
      'Custom server configurations',
      'High-performance computing',
      'Development and testing environments',
      'Data storage and backup',
      'Legacy application migration',
      'Hybrid cloud solutions'
    ]
  },
  {
    id: 'erp',
    name: 'Enterprise Resource Planning',
    acronym: 'ERP',
    description: 'Integrated business management software that connects and manages all aspects of your business operations in real-time, from finance to supply chain to human resources.',
    examples: [
      'SAP',
      'Oracle NetSuite',
      'Microsoft Dynamics 365',
      'Workday',
      'Infor',
      'Epicor'
    ],
    services: [
      'Custom ERP development',
      'ERP system integration',
      'Business process automation',
      'Data migration and consolidation',
      'Workflow optimization',
      'Training and change management'
    ],
    benefits: [
      'Streamlined business operations',
      'Real-time data integration',
      'Improved decision making',
      'Enhanced productivity',
      'Better compliance and reporting',
      'Reduced operational costs'
    ],
    icon: '🏢',
    color: 'from-green-500 to-teal-500',
    useCases: [
      'Financial management and accounting',
      'Supply chain management',
      'Human resources management',
      'Customer relationship management',
      'Inventory and warehouse management',
      'Business intelligence and reporting'
    ]
  }
];

// Helper function to get platform by ID
export const getPlatformById = (id: string): CloudPlatform | undefined => {
  return cloudPlatforms.find(platform => platform.id === id);
};

// Helper function to get all platform acronyms
export const getPlatformAcronyms = (): string[] => {
  return cloudPlatforms.map(platform => platform.acronym);
};

// Helper function to search platforms
export const searchPlatforms = (query: string): CloudPlatform[] => {
  const lowercaseQuery = query.toLowerCase();
  return cloudPlatforms.filter(platform => 
    platform.name.toLowerCase().includes(lowercaseQuery) ||
    platform.acronym.toLowerCase().includes(lowercaseQuery) ||
    platform.description.toLowerCase().includes(lowercaseQuery) ||
    platform.examples.some(example => example.toLowerCase().includes(lowercaseQuery))
  );
};