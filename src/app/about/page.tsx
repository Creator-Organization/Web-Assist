import Link from 'next/link';

export default function AboutPage() {
  const pages = [
    {
      title: 'Why Choose Us',
      description: 'Discover what makes us the right partner for your web development needs',
      href: '/about/why-us',
    },
    {
      title: 'Vision & Mission',
      description: 'Our vision for the future and mission to serve our clients',
      href: '/about/vision',
    },
    {
      title: 'Partnership',
      description: 'Explore partnership opportunities with WebAssist',
      href: '/about/partners',
    },
    {
      title: 'FAQ',
      description: 'Find answers to common questions about our services',
      href: '/faq',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About WebAssist</h1>
          <p className="text-xl max-w-3xl">
            Learn more about our company, values, and commitment to excellence
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebAssist is a leading web development and digital solutions company dedicated to helping businesses succeed online. With years of experience and a team of talented professionals, we deliver high-quality solutions that drive results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to provide next-generation technology-driven web solutions that become an ideal component of our clients' businesses. We focus on understanding your business strategies and work processes to deliver solutions with greater transparency and timely completion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="bg-white rounded-apple-lg shadow-apple p-8 hover:shadow-apple-lg transition-all duration-200 transform hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{page.title}</h3>
                  <p className="text-gray-700 mb-4">{page.description}</p>
                  <span className="text-primary-600 font-medium">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to achieve your business goals
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}