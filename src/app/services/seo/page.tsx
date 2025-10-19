import Link from 'next/link';

export default function SEOServicesPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">SEO Services</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Professional Search Engine Optimization services to boost your rankings and increase website traffic
          </p>
        </div>
      </section>

      {/* Image + Text Section with Testimonial and Decorative Shape */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            {/* Decorative Soft Shape Behind Text */}
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Dominate Search Rankings</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our proven SEO strategies help your website achieve top rankings in Google, Yahoo, Bing, and other major search engines. We focus on ethical, white-hat techniques that deliver sustainable results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With our expert SEO services, you'll see increased organic traffic, better visibility, and higher conversion rates for your business.
              </p>
              {/* Testimonial Card */}
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"WebAssist boosted our search rankings and doubled our organic traffic in 6 months!"</p>
                <p className="font-semibold">— Jane Doe, CEO of TechStartup</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600"
                alt="SEO Analytics and Strategy"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert SEO Solutions</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  WebAssist offers quality solutions for SEO Services, Internet marketing, Web Marketing, and search engine optimization strategies. We are a leading Search Engine Optimization company providing affordable SEO services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our Search Engine Optimization services are carefully planned by our SEO experts to get the best results from the SEO process.
                </p>
              </div>
              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  We are a perfect SEO consultant who will provide complete SEO solutions, SEO guidance and SEO programs to our clients.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The majority of our clients achieve good SEO rankings with first page top positions in Google, Yahoo, Bing and other major search engines.
                </p>
              </div>
              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">White Hat SEO</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Search Engine Optimization may be defined as a set of processes by which certain alterations and modifications are done to the website so that it can achieve higher rankings in search engines, thereby increasing the number of visitors (traffic) to the website. WebAssist strongly believes in white hat SEO or the ethical way of SEO.
                </p>
              </div>
              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Your search for an ethical SEO company ends here. WebAssist is a leading professional SEO company which is a renowned service provider of Search Engine Optimization, Search Engine Placement, and Internet Marketing services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  WebAssist has a team of SEO consultants, analysts, and experts who give you the perfect strategies that will boost your search engine rankings.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our SEO Services Include</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Keyword Research & Analysis",
                    desc: "Comprehensive keyword research and analysis",
                  },
                  {
                    title: "On-Page Optimization",
                    desc: "On-page optimization and content strategy",
                  },
                  {
                    title: "Technical SEO",
                    desc: "Technical SEO audits and implementation",
                  },
                  {
                    title: "Link Building",
                    desc: "Link building and authority enhancement",
                  },
                  {
                    title: "Local SEO",
                    desc: "Local SEO optimization for regional targeting",
                  },
                  {
                    title: "Performance Tracking",
                    desc: "Monthly reporting and performance tracking",
                  }
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600"
                alt="SEO Performance Results"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Measurable Results</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Track your SEO performance with detailed monthly reports and analytics. We provide transparent reporting that shows keyword rankings, organic traffic growth, and conversion improvements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our data-driven approach ensures continuous optimization and maximum ROI from your SEO investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Improve Your Search Rankings Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our SEO experts help you achieve top rankings and drive more organic traffic to your website
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get SEO Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
