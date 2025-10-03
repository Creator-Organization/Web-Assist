import Link from 'next/link';

export default function JoomlaPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Joomla Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Professional Joomla CMS development with custom templates, extensions, and complete content management solutions
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Powerful & Flexible CMS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Joomla is one of the most popular content management systems, perfect for customers new to technology who want full control over their website administration. Joomla is used by individuals and corporate organizations for simple installations of intranet and extranet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our dynamic, database-driven designs give you the power to manage your website like a competent programmer, controlling publishing, hosting, and all site activities.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600"
                alt="Joomla Development"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Joomla Support Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation & Setup</h3>
                <ul className="space-y-4">
                  {[
                    'Complete Joomla Installation',
                    'Extensions Installation',
                    'Joomla Upgrades & Security',
                    'Initial Website Structure Setup',
                    'Customized Joomla Templates',
                    'Content Development & Menus'
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Management & Support</h3>
                <ul className="space-y-4">
                  {[
                    'Content Upload & Management',
                    'Component Selection & Installation',
                    'Search Engine Optimization',
                    'Data Backup & Recovery Plans',
                    'Employee Training Programs',
                    'Payment Gateway Integration'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Joomla?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Expansion</h3>
                <p className="text-gray-700">Flexible platform that grows with your business</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Quality</h3>
                <p className="text-gray-700">Create attractive websites that stand out</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">User Friendly</h3>
                <p className="text-gray-700">No programming skills required for administration</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-700">From simple sites to complex portals</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Open Source</h3>
                <p className="text-gray-700">Cost-effective with no licensing fees</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strong Community</h3>
                <p className="text-gray-700">Extensive extensions and templates available</p>
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
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600"
                alt="Joomla Features"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Expert Joomla Development</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We cater to the needs of individuals with simple websites and large corporate organizations with complex web designs. Our trained professionals manage complex tasks with ease, offering new tools customized to your requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A professional Joomla website not only helps achieve business goals but also attracts visitors and markets your brand effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Interested in Joomla Development?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us build a powerful Joomla website tailored to your business needs
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