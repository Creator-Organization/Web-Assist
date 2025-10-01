export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Web Development</h1>
          <p className="text-xl max-w-3xl">
            Custom web development with solid coding and strategic features that give your business a competitive advantage
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond Template Websites</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Most website development firms deliver out of the box business sites that look great as a brochure, but lack interactivity and connection with the customer. These dry, uninviting sites lack originality and quickly turn off customers. Sites with cookie cutter templates take very little time to setup. As a result, these sites rarely lead to a successful business because customers leave as soon as they arrive. When they leave, they are left without an impact or lasting impression of your corporate identity. This gives them little reason to return.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Web Development</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our website development professionals recognize the value of solid information architecture design and integrative branding that engages the customer from the first stop at your site. Engagement with your customer is crucial to tying into their emotional connection to your site and developing loyalty.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Behind great design lies website development that contains solid coding and web application design with targeted features that place your business at a competitive advantage.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Web Development Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Web Applications</h3>
                  <p className="text-gray-700">Tailored solutions built from the ground up for your business</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend Development</h3>
                  <p className="text-gray-700">Modern, responsive interfaces using latest technologies</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend Development</h3>
                  <p className="text-gray-700">Robust server-side solutions and database architecture</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API Development</h3>
                  <p className="text-gray-700">RESTful APIs and third-party integrations</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Database Design</h3>
                  <p className="text-gray-700">Efficient data structures and management systems</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
                  <p className="text-gray-700">Fast loading times and optimized code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Have Questions About Web Development?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for a proposal for your next web development project? Contact us using the link below
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}