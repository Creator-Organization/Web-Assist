import Link from 'next/link';

export default function OffshoreDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Offshore Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Dedicated offshore development teams delivering quality solutions with cost-effective pricing
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Global Development Excellence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of innovative and talented developers works in tandem with your needs to produce solutions that leave an impact. We streamline development processes and make them efficient for your organization.
              </p>
              <p className="text-gray-700 leading-relaxed">
                WebAssist ensures quality standards, fast delivery and takes care of compatibility issues. We ensure that solutions are scalable and maintainable.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600"
                alt="Offshore Development Team"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Offshore Development?</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Cost Efficiency', desc: 'High-quality development at competitive offshore rates without compromising quality' },
                { step: '02', title: 'Time Zone Advantage', desc: 'Round-the-clock development cycles for faster delivery and continuous progress' },
                { step: '03', title: 'Scalability', desc: 'Easily scale your team up or down based on project needs and requirements' },
                { step: '04', title: 'Expert Resources', desc: 'Access to skilled developers and specialized technical expertise' }
              ].map(({ step, title, desc }, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step}
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text + Image Section (Reversed) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600"
                alt="Remote Team Collaboration"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Dedicated Teams</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide dedicated developers who work exclusively on your projects as an extension of your in-house team. Our transparent communication ensures you're always in the loop.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With our proven track record and impressive client roster, we deliver high quality, timely solutions that drive business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Offshore Development Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Dedicated Teams', desc: 'Experienced developers working exclusively on your projects' },
                { title: 'Cost Efficiency', desc: 'High-quality development at competitive offshore rates' },
                { title: 'Time Zone Advantage', desc: 'Round-the-clock development cycles for faster delivery' },
                { title: 'Scalability', desc: 'Easily scale your team up or down based on needs' },
                { title: 'Quality Assurance', desc: 'Rigorous testing and quality control processes' },
                { title: 'Transparent Communication', desc: 'Regular updates and clear project management' }
              ].map(({ title, desc }, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section (Final) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We aspire to offer next generation technology driven web solutions that make an ideal component of client's business. Our criterion of working sets us apart from the crowd of solution providers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We focus our goals based on client's business strategies and work processes, mapping them according to our work model for greater transparency and timely project completion.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600"
                alt="Global Team Success"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Offshore Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us provide dedicated developers who work as an extension of your team
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}