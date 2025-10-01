export default function OffshoreDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Offshore Development</h1>
          <p className="text-xl max-w-3xl">
            Dedicated offshore development teams delivering quality solutions with cost-effective pricing
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
                WebAssist offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue. We also help remodel existing solutions to make them more attractive and efficient. Our team of innovative and talented developers works in tandem with your needs to produce solutions that will leave an impact on your customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We streamline development processes and make them efficient for your organization. WebAssist ensures quality standards, fast delivery and takes care of compatibility issues. We appreciate that the higher the efficiency of your development team, the higher value it will generate. We ensure that solutions are scalable and maintainable.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Offshore Development Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Teams</h3>
                  <p className="text-gray-700">Experienced developers working exclusively on your projects</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Efficiency</h3>
                  <p className="text-gray-700">High-quality development at competitive offshore rates</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Zone Advantage</h3>
                  <p className="text-gray-700">Round-the-clock development cycles for faster delivery</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalability</h3>
                  <p className="text-gray-700">Easily scale your team up or down based on project needs</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                  <p className="text-gray-700">Rigorous testing and quality control processes</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Communication</h3>
                  <p className="text-gray-700">Regular updates and clear project management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Offshore Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us provide dedicated developers who work as an extension of your team
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}