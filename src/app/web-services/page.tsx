import Link from 'next/link';

export default function WebServicesPage() {
  const services = [
    {
      title: 'Web Design',
      description: 'Professional, attractive, and mission-oriented web design that conveys your message',
      href: '/services/web-design',
    },
    {
      title: 'Web Development',
      description: 'Custom web development with solid coding and strategic features',
      href: '/services/web-development',
    },
    {
      title: 'Interactive Design',
      description: 'Modern animations and interactive web experiences that captivate audiences',
      href: '/services/interactive-design',
    },
    {
      title: 'E-commerce Services',
      description: 'Complete online store development with superior design',
      href: '/services/ecommerce',
    },
    {
      title: 'Logo Design',
      description: 'Professional logo and branding design that creates lasting brand recognition',
      href: '/services/logo-design',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Web Services</h1>
          <p className="text-xl max-w-3xl">
            Complete web solutions from design to development, creating exceptional online experiences
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your Digital Foundation</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our web services cover everything you need to establish and grow your online presence. From stunning visual design to robust development, we create websites that not only look great but perform exceptionally well.
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Website?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a stunning web presence that drives your business forward
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}