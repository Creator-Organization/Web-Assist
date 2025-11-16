import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.creatorit.in';
  const currentDate = new Date();
  
  const routes = [
    { url: '', priority: 1, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/about/vision', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/about/why-us', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/about/partners', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/web-services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/digital-marketing', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/cms-development', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/software-development', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/clients', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Service pages
    { url: '/services/web-development', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/web-design', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/seo', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/sem', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/email-marketing', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/google-marketing', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/content-marketing', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/mobile-apps', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/custom-software', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/ecommerce', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/wordpress', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/joomla', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/drupal', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/magento', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/logo-design', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services/interactive-design', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services/offshore-development', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services/online-surveys', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services/classifieds', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}