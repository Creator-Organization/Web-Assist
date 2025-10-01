export default function SEOServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">SEO Services</h1>
          <p className="text-xl max-w-3xl">
            Professional Search Engine Optimization services to boost your rankings and increase website traffic
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert SEO Solutions</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebAssist offers quality solutions for SEO Services, Internet marketing, Web Marketing, and search engine optimization strategies. We are a leading Search Engine Optimization company providing affordable SEO services. Our Search Engine Optimization services are carefully planned by our SEO experts to get the best results from the SEO process.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are a perfect SEO consultant who will provide complete SEO solutions, SEO guidance and SEO programs to our clients. The majority of our clients achieve good SEO rankings with first page top positions in Google, Yahoo, Bing and other major search engines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Search Engine Optimization may be defined as a set of processes by which certain alterations and modifications are done to the website so that it can achieve higher rankings in search engines, thereby increasing the number of visitors (traffic) to the website. WebAssist strongly believes in white hat SEO or the ethical way of SEO.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our SEO Services?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your search for an ethical SEO company ends here. WebAssist is a leading professional SEO - Search Engine Optimization company which is a renowned service provider of Search Engine Optimization, Search Engine Placement, and Internet Marketing services.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                WebAssist has a team of SEO consultants, analysts, and experts who, with their experience and industry-specific knowledge, give you the perfect strategies that will boost your search engine rankings.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge</h3>
                  <p className="text-gray-700">Deep expertise in SEO best practices and search engine algorithms</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Projects Executed</h3>
                  <p className="text-gray-700">Proven track record with successful SEO campaigns across industries</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
                  <p className="text-gray-700">Experience optimizing websites for international markets</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our SEO Services Include</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Comprehensive keyword research and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">On-page optimization and content strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Technical SEO audits and implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Link building and authority enhancement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Local SEO optimization for regional targeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Monthly reporting and performance tracking</span>
                </li>
              </ul>
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
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get SEO Consultation
          </button>
        </div>
      </section>
    </div>
  );
}