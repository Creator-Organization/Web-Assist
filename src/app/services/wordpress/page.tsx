import Link from 'next/link';

export default function WordPressPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">WordPress Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Custom WordPress solutions with themes, plugins, and complete content management that powers your business
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">World's Most Popular CMS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                WordPress is the world's most popular content management system, powering over 40% of all websites. Our expert developers create custom WordPress solutions that are secure, scalable, and easy to manage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From simple blogs to complex e-commerce platforms, we build WordPress sites that deliver exceptional performance and user experience.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600"
                alt="WordPress Development"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">WordPress Development Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Services</h3>
                <ul className="space-y-4">
                  {[
                    'Custom Theme Development',
                    'Plugin Development & Customization',
                    'WooCommerce Integration',
                    'Website Migration Services',
                    'Performance Optimization',
                    'Security Hardening'
                  ].map((service, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h3>
                <ul className="space-y-4">
                  {[
                    'Multi-site Network Setup',
                    'API Integration & Development',
                    'Custom Post Types & Taxonomies',
                    'Membership Site Development',
                    'SEO Optimization',
                    'Ongoing Maintenance & Support'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose WordPress?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Use</h3>
                <p className="text-gray-700">Intuitive dashboard that anyone can learn quickly</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Highly Customizable</h3>
                <p className="text-gray-700">Thousands of themes and plugins available</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Friendly</h3>
                <p className="text-gray-700">Built-in features for search engine optimization</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-gray-700">Mobile-friendly websites that work on all devices</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-700">Regular updates and strong security measures</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-700">Open source platform with affordable development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text + Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600"
                alt="WordPress Dashboard"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Expert WordPress Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our WordPress development team has years of experience creating custom solutions for businesses of all sizes. We follow WordPress coding standards and best practices to ensure your site is secure, fast, and maintainable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a simple blog, corporate website, or complex e-commerce platform, we have the expertise to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build with WordPress?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a powerful WordPress website that grows with your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Start Your WordPress Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}