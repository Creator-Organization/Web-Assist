// src/data/techStacks.ts
import { TechStack } from '@/types/phase2';

export const techStacks: TechStack[] = [
  {
    id: 'nextjs-postgresql',
    name: 'Next.js + PostgreSQL',
    technologies: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    description: 'Modern, full-stack React framework with robust database integration and excellent performance.',
    timeline: '4-6 weeks',
    complexity: 'Moderate',
    recommended: true,
    benefits: [
      'Excellent SEO and performance',
      'Type-safe development',
      'Scalable architecture',
      'Fast deployment',
      'Great developer experience'
    ],
    idealFor: [
      'E-commerce platforms',
      'SaaS applications',
      'Corporate websites',
      'Content management systems'
    ],
    estimatedCost: '$15,000 - $50,000',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'vue-mongodb',
    name: 'Vue.js + MongoDB',
    technologies: ['Vue.js 3', 'Nuxt.js', 'MongoDB', 'Express.js', 'Node.js'],
    description: 'Progressive JavaScript framework with flexible NoSQL database for rapid development.',
    timeline: '4-8 weeks',
    complexity: 'Moderate',
    recommended: false,
    benefits: [
      'Gentle learning curve',
      'Flexible data structure',
      'Rapid prototyping',
      'Component-based architecture',
      'Strong ecosystem'
    ],
    idealFor: [
      'Startups and MVPs',
      'Real-time applications',
      'Content-heavy sites',
      'Rapid prototypes'
    ],
    estimatedCost: '$12,000 - $40,000',
    icon: '💚',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'angular-sqlserver',
    name: 'Angular + SQL Server',
    technologies: ['Angular 17', 'TypeScript', 'SQL Server', '.NET Core', 'Azure'],
    description: 'Enterprise-grade framework with powerful database for large-scale applications.',
    timeline: '6-10 weeks',
    complexity: 'Complex',
    recommended: false,
    benefits: [
      'Enterprise-ready',
      'Strong typing',
      'Powerful tooling',
      'Microsoft ecosystem',
      'Robust architecture'
    ],
    idealFor: [
      'Enterprise applications',
      'Large-scale systems',
      'Microsoft environments',
      'Complex business logic'
    ],
    estimatedCost: '$25,000 - $80,000',
    icon: '🅰️',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'wordpress-mysql',
    name: 'WordPress + MySQL',
    technologies: ['WordPress 6.4', 'PHP 8', 'MySQL', 'Custom Themes', 'Plugins'],
    description: 'Content management system perfect for blogs, business sites, and simple e-commerce.',
    timeline: '2-4 weeks',
    complexity: 'Simple',
    recommended: false,
    benefits: [
      'Quick deployment',
      'Easy content management',
      'Vast plugin ecosystem',
      'SEO-friendly',
      'Cost-effective'
    ],
    idealFor: [
      'Business websites',
      'Blogs and news sites',
      'Small e-commerce',
      'Portfolio sites'
    ],
    estimatedCost: '$5,000 - $20,000',
    icon: '🔗',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'laravel-mysql',
    name: 'Laravel + MySQL',
    technologies: ['Laravel 10', 'PHP 8', 'MySQL', 'Blade Templates', 'Eloquent ORM'],
    description: 'Elegant PHP framework with powerful ORM for rapid web application development.',
    timeline: '4-7 weeks',
    complexity: 'Moderate',
    recommended: false,
    benefits: [
      'Rapid development',
      'Elegant syntax',
      'Built-in features',
      'Strong community',
      'Excellent documentation'
    ],
    idealFor: [
      'Web applications',
      'API development',
      'E-commerce platforms',
      'Custom CMS'
    ],
    estimatedCost: '$10,000 - $35,000',
    icon: '🎨',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'django-postgresql',
    name: 'Django + PostgreSQL',
    technologies: ['Django 5', 'Python 3.12', 'PostgreSQL', 'Django REST', 'Celery'],
    description: 'High-level Python framework with robust database for rapid, secure development.',
    timeline: '5-8 weeks',
    complexity: 'Moderate',
    recommended: false,
    benefits: [
      'Rapid development',
      'Security by default',
      'Admin interface',
      'Scalable architecture',
      'Python ecosystem'
    ],
    idealFor: [
      'Data-driven applications',
      'API backends',
      'Scientific applications',
      'Content management'
    ],
    estimatedCost: '$15,000 - $45,000',
    icon: '🐍',
    color: 'from-green-600 to-blue-600'
  }
];

// Helper function to get recommended stack
export const getRecommendedStack = (): TechStack => {
  const recommended = techStacks.find(stack => stack.recommended);
  if (!recommended) {
    throw new Error('No recommended stack found');
  }
  return recommended;
};

// Helper function to get stacks by complexity
export const getStacksByComplexity = (complexity: TechStack['complexity']): TechStack[] => {
  return techStacks.filter(stack => stack.complexity === complexity);
};

// Helper function to search stacks
export const searchStacks = (query: string): TechStack[] => {
  const lowercaseQuery = query.toLowerCase();
  return techStacks.filter(stack => 
    stack.name.toLowerCase().includes(lowercaseQuery) ||
    stack.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
    stack.description.toLowerCase().includes(lowercaseQuery)
  );
};