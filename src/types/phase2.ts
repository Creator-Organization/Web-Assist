// src/types/phase2.ts
export interface TechStack {
  id: string;
  name: string;
  technologies: string[];
  description: string;
  timeline: string;
  complexity: 'Simple' | 'Moderate' | 'Complex';
  recommended: boolean;
  benefits: string[];
  idealFor: string[];
  estimatedCost: string;
  icon: string;
  color: string;
}

export interface CloudPlatform {
  id: string;
  name: string;
  acronym: string;
  description: string;
  examples: string[];
  services: string[];
  benefits: string[];
  icon: string;
  color: string;
  useCases: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  duration: string;
  activities: string[];
  deliverables: string[];
  clientInvolvement: string[];
  description: string;
  icon: string;
  color: string;
}

export interface QuoteRequest {
  stackId: string;
  stackName: string;
  userEmail?: string;
  projectType?: string;
  timeline?: string;
  additionalNotes?: string;
}

// Remove this interface as we'll use Framer Motion's Variants type directly

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

// Form types for integration with existing contact form
export interface TechStackFormData {
  preferredStack: string;
  projectComplexity: 'Simple' | 'Moderate' | 'Complex';
  hasPreference: boolean;
  alternativeStacks: string[];
}

export interface ProcessInquiry {
  stepInterest: number;
  questionsAboutProcess: string;
  preferredCommunication: 'email' | 'phone' | 'video' | 'in-person';
  projectUrgency: 'flexible' | 'moderate' | 'urgent';
}

export interface CloudPlatformInquiry {
  interestedPlatforms: string[];
  currentInfrastructure: string;
  migrationNeeded: boolean;
  scalingConcerns: string[];
}