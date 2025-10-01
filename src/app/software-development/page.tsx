import Link from 'next/link';

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'iOS and Android app development covering the complete development lifecycle',
      href: '/services/mobile-apps',
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for business process automation and efficiency',
      href: '/services/custom-software',
    },
    {
      title: 'Offshore Development',
      description: 'Dedicated offshore development teams delivering quality solutions',
      href: '/services/offshore-development',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Software Development</h1>
          <p className="text-xl max-w-3xl">
            Custom software solutions and mobile applications that drive business innovation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Software Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our software development services help businesses automate processes, improve efficiency, and create new revenue streams. From mobile apps to enterprise software, we build solutions that solve real business problems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-apple-lg shadow-apple p-8 hover:shadow-apple-lg transition-all duration-200 transform hover:-translate-y-1"
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Custom Software?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create software solutions that transform your business
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}