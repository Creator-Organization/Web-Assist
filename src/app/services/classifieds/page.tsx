import Link from 'next/link';

export default function ClassifiedsPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Classified Services</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Professional classified ad posting and directory listing services to expand your business reach
          </p>
        </div>
      </section>

      {/* Image + Text Section with Testimonial */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Maximum Online Visibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Today 75% of business comes through the internet and online classified services are faster than traditional newspapers. Our expert team works around the clock to ensure your ads get maximum visibility on high-traffic platforms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide 100% manual posting with complete detail reports including user credentials so you can modify or delete your ads anytime.
              </p>
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"CreatorIt's classified posting service brought us 200+ quality leads in the first month!"</p>
                <p className="font-semibold">— Robert Johnson, Sales Manager</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600"
                alt="Classified Advertising Strategy"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Manual Posting Service</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  We are providing classified posting services with high skilled and expert personnel for ad posting service. CreatorIt provides 100% manual posting with no automated ad posting software.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide only live ads with complete detail reports including user credentials. We post your ads only on high authority and high-traffic classified websites.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Verified Accounts</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We have verified accounts on the world's famous free classified posting websites. If you are interested in our classified posting service and want to get more business through the internet, we have prepared service packages that suit your needs.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Targeted Reach</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in posting services for targeted cities and countries on major classified platforms. Our strategic approach ensures your ads reach the right audience in the right locations for maximum conversion potential.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Pricing</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  CreatorIt is a classified advertising service provider at very affordable prices, recognized worldwide as a leading ad posting agency. We offer custom packages designed to fit your budget and business goals.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Classified Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Manual Ad Posting",
                    desc: "100% manual posting on high-authority classified sites",
                  },
                  {
                    title: "Targeted Campaigns",
                    desc: "City and country-specific ad placement strategies",
                  },
                  {
                    title: "Live Ads Management",
                    desc: "Full access to modify and manage your posted ads",
                  },
                  {
                    title: "Detailed Reporting",
                    desc: "Complete reports with credentials and performance metrics",
                  },
                  {
                    title: "High Traffic Sites",
                    desc: "Posting on popular platforms with maximum visibility",
                  },
                  {
                    title: "24/7 Support",
                    desc: "Round-the-clock assistance for your classified campaigns",
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600"
                alt="Classified Performance Metrics"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Performance Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Monitor your classified ad performance with detailed reports and analytics. Track views, responses, and conversions to measure the effectiveness of your campaigns.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive reporting gives you full transparency and control over your classified advertising investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Expand Your Business Reach</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you reach more customers through strategic classified ad posting
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}