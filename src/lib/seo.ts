// src/lib/seo.ts

import type { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
}

export function generateSEO({
  title = 'CreatorIt - Professional Web Development Services',
  description = 'Custom website building, maintenance, and consulting using modern full-stack technologies. Security-focused, reliable, and scalable web solutions.',
  keywords = [],
  canonical,
  noindex = false,
  ogImage = '/images/og-image.jpg'
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://CreatorIt.com';
  const fullTitle = title.includes('CreatorIt') ? title : `${title} | CreatorIt`;
  
  const defaultKeywords = [
    'web development',
    'custom websites',
    'full-stack development',
    'React',
    'Next.js',
    'web maintenance',
    'web consulting',
    'secure websites',
    'responsive design',
    'professional web services'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical || baseUrl,
      siteName: 'CreatorIt',
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'CreatorIt - Professional Web Development Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
  };
}

// Structured data for business
export function generateBusinessStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://CreatorIt.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CreatorIt',
    description: 'Professional Web Development Services',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: `${baseUrl}/#contact`,
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://twitter.com/CreatorIt',
      // 'https://linkedin.com/company/CreatorIt',
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Web Development Services',
        description: 'Custom website building, maintenance, and consulting',
      },
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
          },
        },
        {
          '@type': 'Service',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Maintenance',
          },
        },
      ],
    },
  };
}

// Structured data for testimonials
export function generateTestimonialsStructuredData(testimonials: any[]) {
    
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CreatorIt',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map(testimonial => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.clientName,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: testimonial.content,
      publisher: {
        '@type': 'Organization',
        name: testimonial.clientCompany,
      },
    })),
  };
}