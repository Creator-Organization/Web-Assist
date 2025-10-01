import Link from 'next/link';

export default function DigitalMarketingPage() {
  const services = [
    {
      title: 'Email Marketing',
      description: 'Build customer loyalty and enhance brand recognition through targeted email campaigns',
      href: '/services/email-marketing',
    },
    {
      title: 'SEO Services',
      description: 'Professional search engine optimization to boost your rankings and increase traffic',
      href: '/services/seo',
    },
    {
      title: 'Search Engine Marketing',
      description: 'Strategic paid search campaigns with Google Ads and performance-driven marketing',
      href: '/services/sem',
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation that drives engagement and builds your brand presence',
      href: '/services/content-marketing',
    },
    {
      title: 'Google Marketing',
      description: 'Comprehensive Google marketing including Ads, My Business, and search visibility',
      href: '/services/google-marketing',
    },
    {
      title: 'Online Surveys',
      description: 'Professional survey creation and market research tools for customer insights',
      href: '/services/online-surveys',
    },
    {
      title: 'Classified Services',
      description: 'Professional classified ad posting and directory listing services',
      href: '/services/classifieds',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Digital Marketing Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive digital marketing solutions to grow your online presence and reach your target audience
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Digital Presence</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our digital marketing services help businesses of all sizes reach their target audience, increase brand awareness, and drive measurable results. From search engine optimization to email marketing, we provide comprehensive solutions tailored to your business goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-apple-lg shadow-apple p-6 hover:shadow-apple-lg transition-all duration-200 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <span className="text-primary-600 font-medium">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Boost Your Online Presence?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our digital marketing experts create a strategy that drives results
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}