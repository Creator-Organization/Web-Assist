export default function GoogleMarketingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Google Marketing</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive Google marketing solutions including Google Ads, My Business optimization, and search visibility
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to WebAssist</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebAssist offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue. We also help remodel an existing website to make it more attractive and efficient. Our team of innovative and talented marketing specialists works in tandem with your needs to produce creative Google marketing strategies that will leave an impact on your customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We streamline websites and make them useful for the user. WebAssist ensures best practices, fast loading and takes care of cross-browser compatibility issues. We appreciate that the higher the traffic to your website, the higher revenue it will generate. We ensure that the website is easy to find and navigate through Google's ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-apple-lg shadow-apple p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  WebAssist, as a company has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and transactions on the internet effective.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  We aspire to offer next generation technology driven web solutions to our clients that makes an ideal component of their business. Our criterion of working sets us apart from the crowd of web solution providers. We focus our goals based on client's business strategies and their work processes, and map them according to our work model. This provides greater transparency in work and timely completion of the projects to client's satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Google Marketing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Ads Management</h3>
                  <p className="text-gray-700">Strategic campaign management for maximum ROI on your advertising budget</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Google My Business</h3>
                  <p className="text-gray-700">Optimize your business presence on Google Maps and local search</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Display Advertising</h3>
                  <p className="text-gray-700">Create compelling display ads across Google's vast network</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Shopping Campaigns</h3>
                  <p className="text-gray-700">Drive e-commerce sales with Google Shopping ads</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">YouTube Advertising</h3>
                  <p className="text-gray-700">Reach audiences through video advertising on YouTube</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Tracking</h3>
                  <p className="text-gray-700">Detailed analytics and reporting for all Google campaigns</p>
                </div>
              </div>
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
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get Started with Google Marketing
          </button>
        </div>
      </section>
    </div>
  );
}