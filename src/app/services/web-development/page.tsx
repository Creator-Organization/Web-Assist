import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Web Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Custom web development with solid coding and strategic features that give your business a competitive advantage
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Beyond Templates</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We recognize the value of solid information architecture design and integrative branding that engages customers from the first stop at your site. Engagement is crucial to developing loyalty and emotional connection.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Behind great design lies website development with solid coding and web application design with targeted features that place your business at a competitive advantage.
              </p>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600"
                alt="Web Development"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Web Development Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Custom Web Applications", desc: "Tailored solutions built from the ground up for your business" },
                { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Frontend Development", desc: "Modern, responsive interfaces using latest technologies" },
                { icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01", title: "Backend Development", desc: "Robust server-side solutions and database architecture" },
                { icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "API Development", desc: "RESTful APIs and third-party integrations" },
                { icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", title: "Database Design", desc: "Efficient data structures and management systems" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Performance Optimization", desc: "Fast loading times and optimized code" }
              ].map(({ icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text + Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600"
                alt="Code Development"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Solid Architecture</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most website development firms deliver template-based sites that lack interactivity and connection with customers. These dry sites rarely lead to successful business because customers leave without lasting impressions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our professionals deliver custom solutions with engaging design and solid coding that provides your business with a competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Have Questions About Web Development?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for a proposal for your next web development project? Contact us using the link below
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}