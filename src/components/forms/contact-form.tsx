'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ContactFormData, PROJECT_TYPES, BUDGET_RANGES, TIMELINES, TECH_STACKS } from '@/types/contact';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '' as any,
    preferredStack: '',
    budgetRange: '' as any,
    projectDescription: '',
    timeline: '' as any,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.budgetRange) newErrors.budgetRange = 'Budget range is required';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
    if (!formData.timeline) newErrors.timeline = 'Timeline is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Name validation
    if (formData.name && formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Project description validation
    if (formData.projectDescription && formData.projectDescription.length < 10) {
      newErrors.projectDescription = 'Please provide more details (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We\'ll get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '' as any,
          preferredStack: '',
          budgetRange: '' as any,
          projectDescription: '',
          timeline: '' as any,
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
        
        // Handle validation errors from server
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn('w-full max-w-2xl mx-auto', className)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                'form-input',
                errors.name && 'border-red-500 focus:border-red-500 focus:ring-red-500'
              )}
              placeholder="Your full name"
              disabled={isSubmitting}
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                'form-input',
                errors.email && 'border-red-500 focus:border-red-500 focus:ring-red-500'
              )}
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
        </div>

        {/* Phone and Company Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+91-9545415111"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              placeholder="Your company name"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Project Type and Budget Range Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="form-label">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={cn(
                'form-select',
                errors.projectType && 'border-red-500 focus:border-red-500 focus:ring-red-500'
              )}
              disabled={isSubmitting}
            >
              <option value="">Select project type</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && <p className="form-error">{errors.projectType}</p>}
          </div>

          <div>
            <label htmlFor="budgetRange" className="form-label">
              Budget Range *
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className={cn(
                'form-select',
                errors.budgetRange && 'border-red-500 focus:border-red-500 focus:ring-red-500'
              )}
              disabled={isSubmitting}
            >
              <option value="">Select budget range</option>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.budgetRange && <p className="form-error">{errors.budgetRange}</p>}
          </div>
        </div>

        {/* Preferred Tech Stack and Timeline Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredStack" className="form-label">
              Preferred Tech Stack
            </label>
            <select
              id="preferredStack"
              name="preferredStack"
              value={formData.preferredStack}
              onChange={handleChange}
              className="form-select"
              disabled={isSubmitting}
            >
              <option value="">No preference</option>
              {TECH_STACKS.map((stack) => (
                <option key={stack} value={stack}>
                  {stack}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="form-label">
              Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={cn(
                'form-select',
                errors.timeline && 'border-red-500 focus:border-red-500 focus:ring-red-500'
              )}
              disabled={isSubmitting}
            >
              <option value="">Select timeline</option>
              {TIMELINES.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.timeline && <p className="form-error">{errors.timeline}</p>}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="form-label">
            Project Description *
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows={5}
            className={cn(
              'form-textarea',
              errors.projectDescription && 'border-red-500 focus:border-red-500 focus:ring-red-500'
            )}
            placeholder="Please describe your project requirements, goals, and any specific features you need..."
            disabled={isSubmitting}
          />
          {errors.projectDescription && <p className="form-error">{errors.projectDescription}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : submitStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                : 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
              'text-white'
            )}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircle className="h-5 w-5" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </motion.button>
        </div>

        {/* Status Messages */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'p-4 rounded-lg flex items-center gap-3',
              submitStatus === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            )}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-600" />
            )}
            <p className="font-medium">{submitMessage}</p>
          </motion.div>
        )}
      </form>
    </div>
  );
}