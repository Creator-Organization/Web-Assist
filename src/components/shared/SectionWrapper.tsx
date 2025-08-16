// src/components/shared/SectionWrapper.tsx
'use client';

import { SectionWrapperProps } from '@/types/phase2';
import { cn } from '@/lib/utils';

export function SectionWrapper({ 
  children, 
  id, 
  className = '', 
  background = 'white' 
}: SectionWrapperProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 to-blue-50'
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container-max section-padding">
        {children}
      </div>
    </section>
  );
}