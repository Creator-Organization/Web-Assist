export default function ClassifiedsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Classified Services</h1>
          <p className="text-xl max-w-3xl">
            Professional classified ad posting and directory listing services to expand your business reach
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Classifieds Posting Service</h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Manual Classifieds Posting Service</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today 75% of business comes through the internet and online classified services are faster than traditional newspapers. Now online classifieds are 90% free of any cost. If you are a seller or buyer, you need to promote your website on classified websites and you will get more clients through classified posting websites.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are providing classified posting services with high skilled and expert personnel for ad posting service. Our experts work around the clock to ensure your ads get maximum visibility. WebAssist provides 100% manual posting with no automated ad posting software. We also provide only live ads with complete detail reports including user credentials so you can modify or delete your ads. We post your ads only on high authority and high-traffic classified websites.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                WebAssist is a classified advertising service provider at very affordable prices, recognized worldwide as a leading ad posting agency.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Classified Services</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We have verified accounts on the world's famous free classified posting websites. If you are interested in our classified posting service and want to get more business through the internet, we have prepared classified posting service packages that suit your needs.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We also specialize in posting services for targeted cities and countries on major classified platforms.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Manual Ad Posting</h3>
                  <p className="text-gray-700">100% manual posting on high-authority classified sites</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeted Campaigns</h3>
                  <p className="text-gray-700">City and country-specific ad placement strategies</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Ads Management</h3>
                  <p className="text-gray-700">Full access to modify and manage your posted ads</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Reporting</h3>
                  <p className="text-gray-700">Complete reports with credentials and performance metrics</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">High Traffic Sites</h3>
                  <p className="text-gray-700">Posting on popular platforms with maximum visibility</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                  <p className="text-gray-700">Round-the-clock assistance for your classified campaigns</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Service?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Years of experience in classified ad posting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Expert team working 365 days a year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">No automated software - 100% manual posting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Phone verified accounts on major platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Affordable pricing with custom packages</span>
                </li>
              </ul>
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
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}