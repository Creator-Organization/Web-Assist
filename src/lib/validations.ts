import { z } from 'zod';
import { SERVICE_INTERESTS, BUDGET_RANGES, COUNTRY_CODES } from '@/types/contact';

const COUNTRY_PHONE_RULES = {
  '+91': { minLength: 10, maxLength: 10, pattern: /^[6-9]\d{9}$/ },
  '+1': { minLength: 10, maxLength: 10, pattern: /^\d{10}$/ },
  '+44': { minLength: 10, maxLength: 10, pattern: /^\d{10}$/ },
  '+61': { minLength: 9, maxLength: 9, pattern: /^\d{9}$/ },
  '+971': { minLength: 9, maxLength: 9, pattern: /^\d{9}$/ },
  '+65': { minLength: 8, maxLength: 8, pattern: /^\d{8}$/ },
  '+60': { minLength: 9, maxLength: 10, pattern: /^\d{9,10}$/ },
  '+86': { minLength: 11, maxLength: 11, pattern: /^\d{11}$/ },
  '+81': { minLength: 10, maxLength: 10, pattern: /^\d{10}$/ },
  '+49': { minLength: 10, maxLength: 11, pattern: /^\d{10,11}$/ },
};

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s.'-]+$/, 'Name can only contain letters, spaces, dots, hyphens, and apostrophes')
    .transform(val => val.trim()),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .transform(val => val.trim()),

  countryCode: z
    .string()
    .refine((val) => COUNTRY_CODES.some(c => c.code === val), {
      message: 'Please select a valid country code',
    }),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .transform(val => val.replace(/[\s\-\(\)\.]/g, '')),

  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .transform(val => val?.trim()),

  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(500, 'Subject must be less than 500 characters')
    .transform(val => val.trim()),

  serviceInterest: z
    .enum([...SERVICE_INTERESTS, ''] as const)
    .optional()
    .transform(val => val === '' ? undefined : val),

  budgetRange: z
    .enum([...BUDGET_RANGES, ''] as const)
    .optional()
    .transform(val => val === '' ? undefined : val),

  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .transform(val => val.trim()),

  captchaToken: z
    .string()
    .min(1, 'CAPTCHA verification failed. Please try again.'),
}).refine(
  (data) => {
    const rules = COUNTRY_PHONE_RULES[data.countryCode as keyof typeof COUNTRY_PHONE_RULES];
    if (!rules) return true;
    
    const phoneLength = data.phone.length;
    return phoneLength >= rules.minLength && phoneLength <= rules.maxLength;
  },
  (data) => {
    const rules = COUNTRY_PHONE_RULES[data.countryCode as keyof typeof COUNTRY_PHONE_RULES];
    const countryName = COUNTRY_CODES.find(c => c.code === data.countryCode)?.country || 'this country';
    return {
      message: `Phone number must be ${rules?.minLength} digits for ${countryName}`,
      path: ['phone'],
    };
  }
).refine(
  (data) => {
    const rules = COUNTRY_PHONE_RULES[data.countryCode as keyof typeof COUNTRY_PHONE_RULES];
    if (!rules || !rules.pattern) return true;
    
    return rules.pattern.test(data.phone);
  },
  (data) => {
    const countryName = COUNTRY_CODES.find(c => c.code === data.countryCode)?.country || 'this country';
    return {
      message: `Invalid phone number format for ${countryName}`,
      path: ['phone'],
    };
  }
);

export const adminLoginSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(100, 'Username is too long')
    .transform(val => val.trim().toLowerCase()),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(255, 'Password is too long'),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type AdminLoginInput = z.infer<typeof adminLoginSchema>;

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .slice(0, 2000);
};

export const sanitizeFormData = (data: ContactFormInput): ContactFormInput => {
  return {
    ...data,
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    phone: sanitizeInput(data.phone),
    company: data.company ? sanitizeInput(data.company) : undefined,
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message),
  };
};

export function validatePhoneNumber(phone: string, countryCode: string): boolean {
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  const rules = COUNTRY_PHONE_RULES[countryCode as keyof typeof COUNTRY_PHONE_RULES];
  
  if (!rules) return false;
  
  if (cleanPhone.length < rules.minLength || cleanPhone.length > rules.maxLength) {
    return false;
  }
  
  if (rules.pattern && !rules.pattern.test(cleanPhone)) {
    return false;
  }
  
  return true;
}