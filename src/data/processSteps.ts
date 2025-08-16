// src/data/processSteps.ts
import { ProcessStep } from '@/types/phase2';

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Planning',
    duration: '1-2 weeks',
    description: 'We dive deep into understanding your business needs, target audience, and project goals to create a comprehensive roadmap for success.',
    activities: [
      'Stakeholder interviews and requirement gathering',
      'Technical feasibility analysis',
      'Competitive research and market analysis',
      'User persona development',
      'Project scope definition and documentation',
      'Risk assessment and mitigation planning'
    ],
    deliverables: [
      'Detailed project roadmap and timeline',
      'Technical specifications document',
      'User stories and acceptance criteria',
      'Architecture and technology recommendations',
      'Budget breakdown and resource allocation',
      'Project charter and success metrics'
    ],
    clientInvolvement: [
      'Initial consultation meeting (2-3 hours)',
      'Stakeholder interviews (1 hour each)',
      'Requirements review and approval session',
      'Weekly check-in calls (30 minutes)',
      'Final planning presentation and sign-off'
    ],
    icon: '🔍',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Design & Architecture',
    duration: '2-3 weeks',
    description: 'We create beautiful, user-friendly designs and establish the technical foundation that will power your application.',
    activities: [
      'User experience (UX) research and planning',
      'Wireframing and user flow mapping',
      'Visual design and brand integration',
      'Interactive prototype development',
      'System architecture design',
      'Database schema and API planning'
    ],
    deliverables: [
      'Complete UI/UX mockups and designs',
      'Interactive prototype for testing',
      'Design system and style guide',
      'Technical architecture documentation',
      'Database schema and relationships',
      'API documentation and endpoints'
    ],
    clientInvolvement: [
      'Design concept presentation and feedback',
      'Weekly design review meetings',
      'Prototype testing and feedback sessions',
      'Architecture review and approval',
      'Final design sign-off meeting'
    ],
    icon: '🎨',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Development & Testing',
    duration: '4-12 weeks',
    description: 'Our experienced developers bring your vision to life with clean, scalable code while ensuring everything works perfectly through rigorous testing.',
    activities: [
      'Frontend development with modern frameworks',
      'Backend API development and database setup',
      'Third-party service integrations',
      'User authentication and security implementation',
      'Automated testing suite development',
      'Performance optimization and code review'
    ],
    deliverables: [
      'Fully functional web application',
      'Comprehensive test suite and reports',
      'Code documentation and comments',
      'Security audit and vulnerability assessment',
      'Performance optimization report',
      'User acceptance testing (UAT) results'
    ],
    clientInvolvement: [
      'Weekly progress demos and feedback',
      'Feature review and testing sessions',
      'User acceptance testing participation',
      'Content and data preparation assistance',
      'Training on admin features and functionality'
    ],
    icon: '⚙️',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Launch & Support',
    duration: '1-2 weeks + ongoing',
    description: 'We ensure a smooth launch and provide ongoing support to keep your application running optimally and evolving with your business needs.',
    activities: [
      'Production environment setup and configuration',
      'Domain and SSL certificate setup',
      'Performance monitoring and analytics setup',
      'Team training and knowledge transfer',
      'Go-live support and issue resolution',
      'Post-launch optimization and maintenance'
    ],
    deliverables: [
      'Live, fully functional website',
      'Training materials and documentation',
      'Monitoring and analytics dashboard setup',
      'Backup and security systems',
      'Support and maintenance plan',
      'Project completion report and metrics'
    ],
    clientInvolvement: [
      'Final pre-launch review and approval',
      'Team training sessions (2-3 hours)',
      'Go-live monitoring and immediate support',
      'Post-launch feedback and optimization',
      'Ongoing communication for support needs'
    ],
    icon: '🚀',
    color: 'from-orange-500 to-red-500'
  }
];

// Helper function to get step by ID
export const getProcessStepById = (id: number): ProcessStep | undefined => {
  return processSteps.find(step => step.id === id);
};

// Helper function to get next step
export const getNextStep = (currentStepId: number): ProcessStep | undefined => {
  return processSteps.find(step => step.id === currentStepId + 1);
};

// Helper function to get previous step
export const getPreviousStep = (currentStepId: number): ProcessStep | undefined => {
  return processSteps.find(step => step.id === currentStepId - 1);
};

// Helper function to calculate total estimated duration
export const getTotalEstimatedDuration = (): string => {
  return "8-19 weeks"; // Based on the sum of all step durations
};

// Helper function to get steps by phase
export const getStepsByPhase = (phase: 'planning' | 'execution' | 'delivery'): ProcessStep[] => {
  switch (phase) {
    case 'planning':
      return processSteps.filter(step => step.id <= 2);
    case 'execution':
      return processSteps.filter(step => step.id === 3);
    case 'delivery':
      return processSteps.filter(step => step.id === 4);
    default:
      return processSteps;
  }
};