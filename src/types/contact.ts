export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  company?: string;
  subject: string;
  serviceInterest?: string;
  budgetRange?: string;
  message: string;
  captchaToken: string;
}

export interface DatabaseContact {
  id: number;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  company?: string;
  subject: string;
  serviceInterest?: string;
  budgetRange?: string;
  message: string;
  isVerified: boolean;
  captchaScore?: number;
  ipAddress?: string;
  userAgent?: string;
  status: 'new' | 'in_progress' | 'replied' | 'closed' | 'spam';
  adminNotes?: string;
  repliedAt?: Date;
  repliedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  contactId?: number;
}

export const SERVICE_INTERESTS = [
  // Web Services
  'Web Development',
  'Web Design',
  'E-commerce Development',
  'E-commerce Portal (Multiple Vendor)',
  'Responsive Web Design',
  'Interactive Design',
  'Domain and Web Hosting',
  'Cloud Hosting Services',
  
  // CMS Development
  'CMS Development',
  'WordPress Development',
  'Drupal Development',
  'Joomla Development',
  'Magento Development',
  
  // Software & Custom Development
  'Software Development',
  'Custom Software Development',
  'Mobile App Development',
  'Offshore Development Services',
  
  // ERP Solutions
  'Hospital Management System',
  'School Management System Pro',
  'CRM Software Pro Version',
  'HR Management System',
  'Point of Sales System (POS)',
  'POS System for Restaurants',
  'Pharmacy Management System',
  'Gym Management and Fitness System',
  'Project Management Software',
  'Real Estate System',
  'Advocate Management System',
  'Courier and Logistics Management',
  'Support Ticket System',
  
  // Portals & Web Applications
  'Online Job Portal',
  'Tour & Travel Portal',
  'Matrimonial Web Portal',
  'News Portal',
  'Online Classes & Tutorial Portal',
  'Online Exam Portal',
  
  // Digital Marketing
  'Digital Marketing',
  'SEO Services',
  'SEM (Search Engine Marketing)',
  'Social Media Marketing',
  'Content Marketing',
  'Email Marketing',
  'Google Marketing (Ads & Analytics)',
  'WhatsApp Marketing',
  'YouTube Marketing',
  'Voice Marketing',
  
  // Design Services
  'UI/UX Design',
  'Graphic Design',
  'Logo Design',
  
  // Other Services
  'Online Surveys',
  'Classifieds Portal',
  'Web To APK Converter',
  'Website Maintenance',
  'Consultation Services',
  'Other',
] as const;

export const BUDGET_RANGES = [
  'Under ₹10,000',
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹75,000',
  '₹75,000 - ₹1,00,000',
  '₹1,00,000 - ₹1,50,000',
  '₹1,50,000 - ₹2,00,000',
  'Over ₹2,00,000',
  'Not sure yet',
] as const;

export const COUNTRY_CODES = [
  // Asia
  { code: '+91', country: 'India', flag: '🇮🇳', maxLength: 10 },
  { code: '+86', country: 'China', flag: '🇨🇳', maxLength: 11 },
  { code: '+81', country: 'Japan', flag: '🇯🇵', maxLength: 10 },
  { code: '+82', country: 'South Korea', flag: '🇰🇷', maxLength: 10 },
  { code: '+65', country: 'Singapore', flag: '🇸🇬', maxLength: 8 },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾', maxLength: 10 },
  { code: '+66', country: 'Thailand', flag: '🇹🇭', maxLength: 9 },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳', maxLength: 10 },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩', maxLength: 11 },
  { code: '+63', country: 'Philippines', flag: '🇵🇭', maxLength: 10 },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰', maxLength: 10 },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩', maxLength: 10 },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰', maxLength: 9 },
  { code: '+977', country: 'Nepal', flag: '🇳🇵', maxLength: 10 },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰', maxLength: 8 },
  
  // Middle East
  { code: '+971', country: 'UAE', flag: '🇦🇪', maxLength: 9 },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦', maxLength: 9 },
  { code: '+974', country: 'Qatar', flag: '🇶🇦', maxLength: 8 },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭', maxLength: 8 },
  { code: '+968', country: 'Oman', flag: '🇴🇲', maxLength: 8 },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼', maxLength: 8 },
  { code: '+972', country: 'Israel', flag: '🇮🇱', maxLength: 9 },
  { code: '+90', country: 'Turkey', flag: '🇹🇷', maxLength: 10 },
  
  // Europe
  { code: '+44', country: 'UK', flag: '🇬🇧', maxLength: 10 },
  { code: '+49', country: 'Germany', flag: '🇩🇪', maxLength: 11 },
  { code: '+33', country: 'France', flag: '🇫🇷', maxLength: 9 },
  { code: '+39', country: 'Italy', flag: '🇮🇹', maxLength: 10 },
  { code: '+34', country: 'Spain', flag: '🇪🇸', maxLength: 9 },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱', maxLength: 9 },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭', maxLength: 9 },
  { code: '+46', country: 'Sweden', flag: '🇸🇪', maxLength: 9 },
  { code: '+47', country: 'Norway', flag: '🇳🇴', maxLength: 8 },
  { code: '+45', country: 'Denmark', flag: '🇩🇰', maxLength: 8 },
  { code: '+48', country: 'Poland', flag: '🇵🇱', maxLength: 9 },
  { code: '+7', country: 'Russia', flag: '🇷🇺', maxLength: 10 },
  { code: '+380', country: 'Ukraine', flag: '🇺🇦', maxLength: 9 },
  { code: '+351', country: 'Portugal', flag: '🇵🇹', maxLength: 9 },
  { code: '+30', country: 'Greece', flag: '🇬🇷', maxLength: 10 },
  { code: '+353', country: 'Ireland', flag: '🇮🇪', maxLength: 9 },
  { code: '+32', country: 'Belgium', flag: '🇧🇪', maxLength: 9 },
  { code: '+43', country: 'Austria', flag: '🇦🇹', maxLength: 10 },
  
  // North America
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸', maxLength: 10 },
  { code: '+52', country: 'Mexico', flag: '🇲🇽', maxLength: 10 },
  
  // South America
  { code: '+55', country: 'Brazil', flag: '🇧🇷', maxLength: 11 },
  { code: '+54', country: 'Argentina', flag: '🇦🇷', maxLength: 10 },
  { code: '+56', country: 'Chile', flag: '🇨🇱', maxLength: 9 },
  { code: '+57', country: 'Colombia', flag: '🇨🇴', maxLength: 10 },
  { code: '+51', country: 'Peru', flag: '🇵🇪', maxLength: 9 },
  
  // Oceania
  { code: '+61', country: 'Australia', flag: '🇦🇺', maxLength: 9 },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿', maxLength: 9 },
  
  // Africa
  { code: '+27', country: 'South Africa', flag: '🇿🇦', maxLength: 9 },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬', maxLength: 10 },
  { code: '+254', country: 'Kenya', flag: '🇰🇪', maxLength: 10 },
  { code: '+20', country: 'Egypt', flag: '🇪🇬', maxLength: 10 },
  { code: '+212', country: 'Morocco', flag: '🇲🇦', maxLength: 9 },
  { code: '+233', country: 'Ghana', flag: '🇬🇭', maxLength: 9 },
] as const;

export type ServiceInterest = typeof SERVICE_INTERESTS[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
export type CountryCode = typeof COUNTRY_CODES[number];

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  fullName: string;
  role: 'admin' | 'super_admin';
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminLoginData {
  username: string;
  password: string;
}

export interface AdminSession {
  userId: number;
  username: string;
  role: string;
  expiresAt: Date;
}