import { z } from 'zod';
import {
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINES,
  TECH_STACKS,
} from '@/types/contact';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      // Allow various phone number formats
      return /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\(\)\.]/g, ''));
    }, 'Please enter a valid phone number'),
  
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  
  projectType: z
    .enum(PROJECT_TYPES, {
      required_error: 'Please select a project type',
    }),
  
  preferredStack: z
    .enum([...TECH_STACKS, ''] as const)
    .optional()
    .transform((val) => val === '' ? undefined : val),
  
  budgetRange: z
    .enum(BUDGET_RANGES, {
      required_error: 'Please select a budget range',
    }),
  
  projectDescription: z
    .string()
    .min(10, 'Please provide more details about your project (at least 10 characters)')
    .max(2000, 'Project description must be less than 2000 characters'),
  
  timeline: z
    .enum(TIMELINES, {
      required_error: 'Please select a timeline',
    }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

// Sanitization helpers
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 2000); // Limit length
};

export const sanitizeFormData = (data: ContactFormInput): ContactFormInput => {
  return {
    ...data,
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    phone: data.phone ? sanitizeInput(data.phone) : undefined,
    company: data.company ? sanitizeInput(data.company) : undefined,
    preferredStack: data.preferredStack,
    projectDescription: sanitizeInput(data.projectDescription),
  };
};