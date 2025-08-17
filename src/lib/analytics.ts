// src/lib/analytics.ts

// Google Analytics helper functions
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId?: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string = 'engagement',
  label?: string,
  value?: number
) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'form',
    formName
  );
};

// Track section engagement
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', 'engagement', sectionName);
};

// Track testimonial interactions
export const trackTestimonialView = (testimonialId: string | number) => {
  trackEvent('testimonial_view', 'engagement', `testimonial_${testimonialId}`);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', 'interaction', `${buttonName}${location ? `_${location}` : ''}`);
};

// Track contact form specific events
export const trackContactFormEvents = {
  start: () => trackEvent('contact_form_start', 'form'),
  complete: () => trackEvent('contact_form_complete', 'form'),
  error: (errorType: string) => trackEvent('contact_form_error', 'form', errorType),
};

// Performance tracking
export const trackPerformance = () => {
  if (typeof window === 'undefined' || !window.performance) return;

  // Track Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        const navEntry = entry as PerformanceNavigationTiming;
        
        // Track page load time
        trackEvent('page_load_time', 'performance', 'total', Math.round(navEntry.loadEventEnd - navEntry.fetchStart));
        
        // Track DOM ready time
        trackEvent('dom_ready_time', 'performance', 'dom', Math.round(navEntry.domContentLoadedEventEnd - navEntry.fetchStart));
      }
    }
  });

  observer.observe({ type: 'navigation', buffered: true });
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  console.error('Error tracked:', error);
  
  trackEvent('javascript_error', 'error', `${context || 'unknown'}: ${error.message}`);
};

// Session tracking
export const trackSession = () => {
  const sessionStart = sessionStorage.getItem('session_start');
  
  if (!sessionStart) {
    sessionStorage.setItem('session_start', Date.now().toString());
    trackEvent('session_start', 'engagement');
  }
};

// Scroll depth tracking
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const milestones = [25, 50, 75, 90, 100];
  const tracked: number[] = [];

  const trackScrollDepth = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !tracked.includes(milestone)) {
          tracked.push(milestone);
          trackEvent('scroll_depth', 'engagement', `${milestone}%`);
        }
      });
    }
  };

  window.addEventListener('scroll', trackScrollDepth, { passive: true });
  
  return () => window.removeEventListener('scroll', trackScrollDepth);
};

// Utility to check if analytics is enabled
export const isAnalyticsEnabled = () => {
  return Boolean(GA_TRACKING_ID) && typeof window !== 'undefined';
};