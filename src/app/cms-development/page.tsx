import Link from 'next/link';

export default function CMSDevelopmentPage() {
  const services = [
    {
      title: 'WordPress Development',
      description: 'Professional WordPress solutions with custom themes, plugins, and CMS',
      href: '/services/wordpress',
    },
    {
      title: 'Joomla Development',
      description: 'Professional Joomla CMS development with custom templates and extensions',
      href: '/services/joomla',
    },
    {
      title: 'Drupal Development',
      description: 'Enterprise-level Drupal CMS with custom modules and themes',
      href: '/services/drupal',
    },
    {
      title: 'Magento Development',
      description: 'Powerful Magento e-commerce solutions with complete flexibility',
      href: '/services/magento',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">CMS Development</h1>
          <p className="text-xl max-w-3xl">
            Expert content management system development for easy content control and management
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Content Management</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in building and customizing content management systems that give you complete control over your website content. Whether you need a simple blog or a complex enterprise portal, we have the expertise to deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-apple-lg shadow-apple p-8 hover:shadow-apple-lg transition-all duration-200 transform hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Need a CMS Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us build a content management system that makes updating your website easy
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}