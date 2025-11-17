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
  title,
  description = 'CreatorIT offers professional web development, digital marketing, CMS development, and ready-to-deploy ERP systems. Based in Aurangabad, Maharashtra.',
  keywords = [],
  canonical,
  noindex = false,
  ogImage = '/images/creatorit-logo.png'
}: SEOProps = {}): Metadata {
  const baseUrl = 'https://www.creatorit.in';
  const fullTitle = title 
    ? (title.includes('CreatorIT') ? title : `${title} | CreatorIT`)
    : 'CreatorIT - Professional Web Development & Digital Marketing Services';
  
  const defaultKeywords = [
    'web development',
    'digital marketing',
    'SEO services',
    'CMS development',
    'ERP systems',
    'software development',
    'web development aurangabad',
    'CreatorIT',
    'responsive design',
    'ecommerce development',
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
      siteName: 'CreatorIT',
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'CreatorIT - Professional Web Development Services',
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

// Service page structured data
export function generateServiceStructuredData(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'CreatorIT',
      url: 'https://www.creatorit.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
          },
        },
      ],
    },
  };
}

// Breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.creatorit.in${item.url}`,
    })),
  };
}