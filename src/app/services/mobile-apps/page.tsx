import Link from 'next/link';

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Mobile App Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            iOS and Android app development covering the complete software development lifecycle
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Complete Development Lifecycle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer cutting-edge mobile development solutions that help enterprises communicate seamlessly and process data effortlessly in a fast environment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our solutions cover the whole software development cycle - from requirements to deployment, testing and maintenance with a systematic approach.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600"
                alt="Mobile App Development"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Development Process</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Requirements Analysis', desc: 'Decipher requirements and define project scope' },
                { step: '02', title: 'Architecture Design', desc: 'Design scalable and efficient app architecture' },
                { step: '03', title: 'Development', desc: 'Build the application using best practices' },
                { step: '04', title: 'Testing & QA', desc: 'Rigorous testing for quality assurance' },
                { step: '05', title: 'Deployment', desc: 'Launch to App Store and Play Store' },
                { step: '06', title: 'Maintenance', desc: 'Ongoing support and updates' }
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

      {/* Platform Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Platforms We Support</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'iOS Apps', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
                { name: 'Android Apps', icon: 'M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10z' },
                { name: 'Cross-Platform', icon: 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' },
                { name: 'PWA', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' }
              ].map(({ name, icon }, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['iOS/Swift', 'Android/Kotlin', 'React Native', 'Flutter', 'Java/J2ME', 'Progressive Web Apps'].map((tech, i) => (
                <div key={i} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 text-sm">{tech}</p>
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
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600"
                alt="Mobile Development Process"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Comprehensive Mobile Services</h2>
              <ul className="space-y-3">
                {[
                  'Mobile application development',
                  'Mobile games design & development',
                  'GPS enabled applications',
                  'Social networking integrations',
                  'SMS and MMS integration',
                  'Platform migration & porting'
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

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create powerful mobile applications that engage your users
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Start Your App
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}