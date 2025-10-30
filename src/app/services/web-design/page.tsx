import Link from 'next/link';

export default function WebDesignPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Web Design</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Professional, attractive, and mission-oriented web design that conveys your business message at a single glance
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Design That Drives Results</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                creatorit is a dedicated web solution company, whose objective is to enable customer profitability through building web solutions that work. Design should be professional, attractive, mission oriented and convey business message at a single glance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're building your first website or enhancing your current site, creatorit can help your business succeed online with affordable, professional design services.
              </p>
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"creatorit transformed our outdated site into a modern masterpiece that tripled our conversions!"</p>
                <p className="font-semibold">— Jennifer Lee, E-commerce Owner</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600"
                alt="Professional Web Design"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Web Design Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Graphic Design</h3>
                <p className="text-gray-700">High quality design and layout using modern tools and technologies</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
                <p className="text-gray-700">Mobile-friendly websites that work perfectly on all devices</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Domain & Hosting</h3>
                <p className="text-gray-700">Complete solutions including domain registration and web hosting</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO Optimization</h3>
                <p className="text-gray-700">Search engine optimized designs for better visibility</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">CMS Integration</h3>
                <p className="text-gray-700">Integration with WordPress and Joomla platforms</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Support</h3>
                <p className="text-gray-700">Ongoing support and maintenance services</p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Web Design Team?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Unique Custom Designs", desc: "Tailored designs that match your brand identity" },
                  { title: "Commitment & Dedication", desc: "Focused team dedicated to your success" },
                  { title: "Honest Approach", desc: "Transparent communication throughout the project" },
                  { title: "Cost-Effective Delivery", desc: "Quality designs within your budget and timeline" }
                ].map(({ title, desc }, i) => (
                  <div className="flex items-start" key={i}>
                    <span className="text-primary-500 mr-3 text-2xl">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-700">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600"
                alt="Web Design Process"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Modern Design Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide complete web design solutions including multimedia design, print graphics, online marketing, web promotions, and e-commerce capabilities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our services include converting designs to responsive HTML/CSS with language conversion options, ensuring your website reaches a global audience effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Need Pricing Information?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us now to get a free, no-obligation quote today!
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Free Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}