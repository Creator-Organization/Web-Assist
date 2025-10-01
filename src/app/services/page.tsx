import Link from 'next/link';

export default function ServicesPage() {
  const categories = [
    {
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing solutions including SEO, SEM, email marketing, and content strategy',
      href: '/digital-marketing',
      services: ['Email Marketing', 'SEO', 'SEM', 'Content Marketing', 'Google Marketing', 'Online Surveys', 'Classifieds'],
    },
    {
      title: 'Web Services',
      description: 'Complete web solutions from design to development, creating exceptional online experiences',
      href: '/web-services',
      services: ['Web Design', 'Web Development', 'Interactive Design', 'E-commerce', 'Logo Design'],
    },
    {
      title: 'CMS Development',
      description: 'Expert content management system development for easy content control',
      href: '/cms-development',
      services: ['WordPress', 'Joomla', 'Drupal', 'Magento'],
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions and mobile applications that drive business innovation',
      href: '/software-development',
      services: ['Mobile Apps', 'Custom Software', 'Offshore Development'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive digital solutions to help your business succeed online
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Digital Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                WebAssist offers a full range of digital services to help businesses establish and grow their online presence. From marketing to development, we provide end-to-end solutions tailored to your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="bg-white rounded-apple-lg shadow-apple p-8 hover:shadow-apple-lg transition-all duration-200 transform hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-6">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.services.map((service) => (
                      <span
                        key={service}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <span className="text-primary-600 font-medium">Explore Services →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your business grow
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}