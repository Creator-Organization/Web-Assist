import Link from 'next/link';
import { TrendingUp, Globe, Database, Cpu, Award, Zap, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const categories = [
    {
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing solutions including SEO, SEM, email marketing, and content strategy',
      href: '/digital-marketing',
      services: ['Email Marketing', 'SEO', 'SEM', 'Content Marketing', 'Google Marketing', 'Online Surveys', 'Classifieds'],
      icon: <TrendingUp className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600'
    },
    {
      title: 'Web Services',
      description: 'Complete web solutions from design to development, creating exceptional online experiences',
      href: '/web-services',
      services: ['Web Design', 'Web Development', 'Interactive Design', 'E-commerce', 'Logo Design'],
      icon: <Globe className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600'
    },
    {
      title: 'CMS Development',
      description: 'Expert content management system development for easy content control',
      href: '/cms-development',
      services: ['WordPress', 'Joomla', 'Drupal', 'Magento'],
      icon: <Database className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions and mobile applications that drive business innovation',
      href: '/software-development',
      services: ['Mobile Apps', 'Custom Software', 'Offshore Development'],
      icon: <Cpu className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600'
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
        <section className="relative py-20 hero-gradient text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
          <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Our Services</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Comprehensive digital solutions to help your business succeed online
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Services Offered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Complete Digital Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              WebAssist offers a full range of digital services to help businesses establish and grow their online presence. From marketing to development, we provide end-to-end solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories with Alternating Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {categories.map((category, index) => (
              <div key={category.href} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.services.map((service) => (
                      <span
                        key={service}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <Link href={category.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Explore Services
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={category.image}
                    alt={category.title}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose WebAssist</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-700">Experienced professionals dedicated to delivering exceptional results</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-700">Efficient processes that ensure timely project completion</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assured</h3>
                <p className="text-gray-700">Rigorous quality checks to guarantee outstanding outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your business grow
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}