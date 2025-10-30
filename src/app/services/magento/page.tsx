import Link from 'next/link';

export default function MagentoPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Magento Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Powerful Magento e-commerce solutions with unparalleled flexibility and complete control over your online store
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ultimate E-commerce Platform</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Magento provides modern open-source web solutions with unparalleled control and flexibility. Every e-commerce implementation has to be distinctive as every business succeeds due to its unique qualities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Magento has total flexibility and control over content, look and functionality of your online store. It's economical because of its open source nature and customizable to your exact needs.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1556742400-b5b7c9c13870?w=800&h=600"
                alt="Magento E-commerce"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Magento Development Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Services</h3>
                <ul className="space-y-4">
                  {[
                    'Custom Store Development',
                    'Module Development',
                    'Theme Customization',
                    'Integration Services',
                    'Migration to Magento',
                    'Performance Optimization'
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
                    'SEO Optimization Tools',
                    'Multi-Store Management',
                    'Payment Gateway Integration',
                    'Catalog Management Tools',
                    'Marketing & Promotions',
                    'Dedicated Support & Maintenance'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Magento?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Flexibility</h3>
                <p className="text-gray-700">Total control over store appearance and functionality</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Friendly</h3>
                <p className="text-gray-700">Built-in SEO tools and clean URL structure</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Highly Customizable</h3>
                <p className="text-gray-700">Modular architecture for unique requirements</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Platform</h3>
                <p className="text-gray-700">Grows with your business from startup to enterprise</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rich Features</h3>
                <p className="text-gray-700">Comprehensive e-commerce functionality out of the box</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-700">Open source with no licensing fees</p>
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
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600"
                alt="Magento Platform"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Magento Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our deep insights in open source technology allow us to provide Magento customization that delivers assured quality and value. We provide full transparency in our dealings with no hidden charges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our developers create customized modules, integrate your site with other software and themes, making full use of unique Magento e-commerce services for minimal hassle and maximum profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Magento Store?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a powerful e-commerce platform that drives sales and grows your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}