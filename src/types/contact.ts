export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  preferredStack?: string;
  budgetRange: string;
  projectDescription: string;
  timeline: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export interface DatabaseContact extends ContactFormData {
  id: number;
  createdAt: Date;
  status: 'new' | 'contacted' | 'in_progress' | 'completed';
}

// Dropdown options
export const PROJECT_TYPES = [
  'E-commerce Website',
  'Business Website',
  'Portfolio Website',
  'Web Application',
  'Mobile App',
  'API Development',
  'Website Redesign',
  'Maintenance & Support',
  'Other',
] as const;

export const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000 - $100,000',
  'Over $100,000',
  'Not sure yet',
] as const;

export const TIMELINES = [
  'ASAP (Rush job)',
  '1-2 weeks',
  '1 month',
  '2-3 months',
  '3-6 months',
  '6+ months',
  'Flexible',
] as const;

export const TECH_STACKS = [
  'React/Next.js',
  'Vue.js/Nuxt.js',
  'Angular',
  'WordPress',
  'Shopify',
  'Custom PHP',
  'Python/Django',
  'Ruby on Rails',
  'No preference',
] as const;

export type ProjectType = typeof PROJECT_TYPES[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
export type Timeline = typeof TIMELINES[number];
export type TechStack = typeof TECH_STACKS[number];