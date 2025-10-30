import Link from 'next/link';

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Custom Software Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Tailored software solutions for business process automation and efficiency
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Business Process Automation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have expertise in comprehensive software, custom solutions and tools development which help both small companies and large enterprises in business process automation, increasing employee efficiency and reducing costs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our business software development approach allows us to create highly expandable, modular and stable software tailored to your unique needs.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600"
                alt="Custom Software Development"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Cycle Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Development Cycle</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Analysis & Conceptualization', desc: 'Understanding requirements and defining the solution' },
                { step: '02', title: 'Technical Specification', desc: 'Creating detailed documentation and architecture' },
                { step: '03', title: 'Designing & Prototyping', desc: 'UI/UX design and interactive prototypes' },
                { step: '04', title: 'Development', desc: 'Building the software with best practices' },
                { step: '05', title: 'Quality Analysis & Testing', desc: 'Rigorous testing and quality assurance' }
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600"
                alt="Software Solutions"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Automation Solutions</h2>
              <ul className="space-y-3">
                {[
                  'Workflow management systems',
                  'Customer support ticket tracking',
                  'Console tools development',
                  'File processing automation',
                  'Report management solutions',
                  'Custom database management'
                ].map((service, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Web Applications',
                'Corporate Portals',
                'SaaS Development',
                'Document Management',
                'Off-the-shelf Solutions',
                'Mobility Solutions',
                'Business Intelligence',
                'Portability Services'
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section (Another) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Expert Consultation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strongly focus on adhering, conceptualizing, consulting and development with agility. Our qualified consultants clear uncertainties with their expert advice and recommendations for appropriate solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our experienced workforce is skilled in producing Software as a Service applications and products that help organizations in commercialization and growth.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600"
                alt="Software Consulting"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Need Custom Software?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us build tailored solutions that automate your business processes
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