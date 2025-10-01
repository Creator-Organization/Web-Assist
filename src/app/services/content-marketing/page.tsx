export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Content Marketing</h1>
          <p className="text-xl max-w-3xl">
            Strategic content creation and marketing solutions that drive engagement and build your brand presence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Creative Content Solutions</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebAssist offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue. We also help remodel existing content strategies to make them more attractive and efficient. Our team of innovative and talented content creators works in tandem with your needs to produce creative content that will leave an impact on your customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We streamline content and make it useful for the user. WebAssist ensures quality standards, engaging narratives and takes care of audience targeting. We appreciate that the higher the engagement with your content, the higher revenue it will generate. We ensure that the content is easy to find, valuable, and shareable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-apple-lg shadow-apple p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Approach</h2>
                <p className="text-gray-700 leading-relaxed">
                  WebAssist, as a company has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and transactions on the internet effective.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  We aspire to offer next generation technology driven content solutions to our clients that makes an ideal component of their business. Our criterion of working sets us apart from the crowd of content providers. We focus our goals based on client's business strategies and their work processes, and map them according to our work model. This provides greater transparency in work and timely completion of projects to client's satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Marketing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog Writing</h3>
                  <p className="text-gray-700">Engaging blog posts that inform, educate, and convert your audience</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Strategy</h3>
                  <p className="text-gray-700">Comprehensive planning aligned with your business goals</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media Content</h3>
                  <p className="text-gray-700">Compelling posts that drive engagement across platforms</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Copy</h3>
                  <p className="text-gray-700">Persuasive copy that converts visitors into customers</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO Content</h3>
                  <p className="text-gray-700">Optimized content that ranks well in search engines</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Newsletters</h3>
                  <p className="text-gray-700">Regular updates that keep your audience engaged</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Boost Your Content Strategy?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create compelling content that engages your audience and drives business results
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Start Your Content Journey
          </button>
        </div>
      </section>
    </div>
  );
}