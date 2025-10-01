export default function OnlineSurveysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Online Survey Services</h1>
          <p className="text-xl max-w-3xl">
            Professional survey creation and market research tools to gather valuable customer insights
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
                WebAssist offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue. We also help remodel existing survey systems to make them more attractive and efficient. Our team of innovative and talented designers works in tandem with your needs to produce creative survey solutions that will leave an impact on your customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We streamline surveys and make them useful for the user. WebAssist ensures best practices, fast loading and takes care of cross-browser compatibility issues. We appreciate that the higher the engagement with your surveys, the better insights you will generate. We ensure that surveys are easy to find and navigate.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Online Survey Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Survey Design</h3>
                  <p className="text-gray-700">Create professional surveys tailored to your research needs</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Research</h3>
                  <p className="text-gray-700">Gather valuable customer insights and market data</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Feedback</h3>
                  <p className="text-gray-700">Collect and analyze customer satisfaction data</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Surveys</h3>
                  <p className="text-gray-700">Measure employee engagement and satisfaction</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analysis</h3>
                  <p className="text-gray-700">Comprehensive reporting and insights from survey data</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Platform Support</h3>
                  <p className="text-gray-700">Mobile-friendly surveys accessible on any device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Start Gathering Valuable Insights</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you create effective surveys that provide actionable insights for your business
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Create Your Survey
          </button>
        </div>
      </section>
    </div>
  );
}