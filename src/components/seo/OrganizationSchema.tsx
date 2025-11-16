export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CreatorIT',
    url: 'https://www.creatorit.in',
    logo: 'https://www.creatorit.in/images/creatorit-logo.png',
    description: 'Professional web development, digital marketing, CMS development, and ready-to-deploy ERP systems.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aurangabad',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.facebook.com/creatorit',
      'https://www.linkedin.com/company/creatorit',
      'https://twitter.com/creatorit',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: [
      'Web Development',
      'Digital Marketing',
      'SEO Services',
      'CMS Development',
      'Software Development',
      'ERP Systems',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}