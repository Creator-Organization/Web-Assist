// src/components/shared/CreatorItLogo.tsx
import Link from 'next/link';

interface CreatorItLogoProps {
  className?: string;
}

export default function CreatorItLogo({ className = '' }: CreatorItLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background Circle */}
        <rect width="48" height="48" rx="10" fill="#14b8a6"/>
        
        {/* Code Brackets */}
        <path 
          d="M16 14L10 24L16 34" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M32 14L38 24L32 34" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Forward Slash */}
        <path 
          d="M28 12L20 36" 
          stroke="#ccfbf1" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </svg>

      {/* Logo Text */}
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-gray-800">Creator</span>
        <span className="text-2xl font-bold text-teal-600">IT</span>
      </div>
    </Link>
  );
}