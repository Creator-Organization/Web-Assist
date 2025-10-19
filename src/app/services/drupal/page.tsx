import Link from 'next/link';

export default function DrupalPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Drupal Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Enterprise-level Drupal CMS development with custom modules, themes, and powerful content management solutions
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Enterprise-Grade CMS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Drupal is one of the most popular free and open source Content Management Systems built with PHP. It's used to create websites from personal blogs to large political and corporate web portals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No programming skills are required for basic website settings and administration, while developers enjoy a unique programming interface for advanced customization.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600"
                alt="Drupal Development"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Drupal Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Management</h3>
                <ul className="space-y-4">
                  {[
                    'Advanced Search Functions',
                    'User Data Management',
                    'Multi-site Support',
                    'Feed Aggregator & RSS',
                    'Forums, Comments & Polls',
                    'User Profiles & Access Control'
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Features</h3>
                <ul className="space-y-4">
                  {[
                    'Performance Caching & Throttling',
                    'Descriptive & Clean URLs',
                    'Multiple Menu System Layers',
                    'Security & Update Announcements',
                    'Workflow Tools (Actions & Triggers)',
                    'Access Logging & Statistics'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Drupal?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Highly Extensible</h3>
                <p className="text-gray-700">Modular design allows unlimited customization</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Ready</h3>
                <p className="text-gray-700">Powers major corporate and government sites</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Robust Security</h3>
                <p className="text-gray-700">Regular security updates and strong protection</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Architecture</h3>
                <p className="text-gray-700">Handles high traffic and complex requirements</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">API-First Approach</h3>
                <p className="text-gray-700">Perfect for headless and decoupled applications</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Active Community</h3>
                <p className="text-gray-700">Thousands of contributed modules available</p>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600"
                alt="Drupal Solutions"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Drupal Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                WebAssist is an innovator in the open source area, successfully providing Drupal services and solutions to clients worldwide. We leverage open source technologies to assist businesses across various industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide progressive Drupal solutions including web applications, design services, software development, social media integration and Drupal migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready for Enterprise-Level CMS?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us build a powerful Drupal solution that scales with your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Started with Drupal
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}