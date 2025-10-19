import Link from 'next/link';
import Image from 'next/image';
import { Shield, Zap, Users } from 'lucide-react';
import wordpressLogo from '../../../Images/wordpress_development.png';
import joomlaLogo from '../../../Images/Jompla_development.png';
import drupalLogo from '../../../Images/drupal.png';
import magentoLogo from '../../../Images/Magento.png';

export default function CMSDevelopmentPage() {
  const services = [
    {
      title: 'WordPress Development',
      description: 'Professional WordPress solutions with custom themes, plugins, and complete content management capabilities',
      href: '/services/wordpress',
      icon: <Image src={wordpressLogo} alt="WordPress Development" className="w-12 h-12 object-contain" />,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600'
    },
    {
      title: 'Joomla Development',
      description: 'Professional Joomla CMS development with custom templates and powerful extensions',
      href: '/services/joomla',
      icon: <Image src={joomlaLogo} alt="Joomla Development" className="w-12 h-12 object-contain" />,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600'
    },
    {
      title: 'Drupal Development',
      description: 'Enterprise-level Drupal CMS with custom modules and themes for complex requirements',
      href: '/services/drupal',
      icon: <Image src={drupalLogo} alt="Drupal Development" className="w-12 h-12 object-contain" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600'
    },
    {
      title: 'Magento Development',
      description: 'Powerful Magento e-commerce solutions with complete flexibility and scalability',
      href: '/services/magento',
      icon: <Image src={magentoLogo} alt="Magento Development" className="w-12 h-12 object-contain" />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600'
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">CMS Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Expert content management system development for easy content control and management
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">400+</div>
              <div className="text-gray-600">CMS Sites Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">CMS Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Powerful Content Management</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in building and customizing content management systems that give you complete control over your website content. Whether you need a simple blog or a complex enterprise portal, we have the expertise to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Services with Alternating Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div key={service.href} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Learn More 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our CMS Development</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Friendly</h3>
                <p className="text-gray-700">Intuitive interfaces that make content management easy for everyone</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
                <p className="text-gray-700">Enterprise-grade security with regular updates and maintenance</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Solutions</h3>
                <p className="text-gray-700">CMS platforms that grow with your business needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Need a CMS Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us build a content management system that makes updating your website easy
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}