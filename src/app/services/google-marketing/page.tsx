import Link from 'next/link';

export default function GoogleMarketingPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Google Marketing</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Comprehensive Google marketing solutions including Google Ads, My Business optimization, and search visibility
          </p>
        </div>
      </section>

      {/* Image + Text Section with Testimonial */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Dominate Google's Ecosystem</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of innovative and talented marketing specialists works in tandem with your needs to produce creative Google marketing strategies that will leave an impact on your customers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We ensure that your business is easy to find and navigate through Google's ecosystem, maximizing traffic and revenue generation through strategic visibility.
              </p>
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"WebAssist's Google Ads strategy reduced our CPC by 45% while doubling conversions!"</p>
                <p className="font-semibold">— Rachel Kim, Digital Marketing Lead</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600"
                alt="Google Marketing Strategy"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Creative Solutions</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  WebAssist offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We also help remodel existing websites to make them more attractive and efficient, ensuring best practices, fast loading and cross-browser compatibility.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  WebAssist has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and transactions on the internet effective.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We aspire to offer next generation technology driven web solutions that make an ideal component of client's business. We focus our goals based on client's business strategies and work processes, mapping them according to our work model for greater transparency and timely project completion.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximum Visibility</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We appreciate that the higher the traffic to your website, the higher revenue it will generate. We ensure that your website is easy to find and navigate through Google's powerful ecosystem of marketing tools and platforms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Google Marketing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Google Ads Management",
                    desc: "Strategic campaign management for maximum ROI on your advertising budget",
                  },
                  {
                    title: "Google My Business",
                    desc: "Optimize your business presence on Google Maps and local search",
                  },
                  {
                    title: "Display Advertising",
                    desc: "Create compelling display ads across Google's vast network",
                  },
                  {
                    title: "Shopping Campaigns",
                    desc: "Drive e-commerce sales with Google Shopping ads",
                  },
                  {
                    title: "YouTube Advertising",
                    desc: "Reach audiences through video advertising on YouTube",
                  },
                  {
                    title: "Performance Tracking",
                    desc: "Detailed analytics and reporting for all Google campaigns",
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600"
                alt="Google Analytics Dashboard"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Data-Driven Optimization</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Track every metric across all Google platforms with comprehensive analytics. Monitor performance, identify opportunities, and make data-driven decisions to maximize your marketing ROI.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our continuous optimization ensures your Google marketing campaigns deliver consistent results and adapt to changing market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Maximize Your Google Presence</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts help you leverage Google's powerful marketing platform to grow your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Started with Google Marketing
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}