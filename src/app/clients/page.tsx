export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl max-w-3xl">
            Trusted by businesses across various industries
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                WebAssist has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have worked with businesses ranging from startups to established enterprises across various industries, helping them achieve their digital goals and grow their online presence.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">E-commerce</h3>
                  <p className="text-gray-700">Online retail and marketplace solutions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare</h3>
                  <p className="text-gray-700">Medical and healthcare technology platforms</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                  <p className="text-gray-700">Learning management and educational tools</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Finance</h3>
                  <p className="text-gray-700">Financial services and fintech applications</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Estate</h3>
                  <p className="text-gray-700">Property management and listing platforms</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology</h3>
                  <p className="text-gray-700">SaaS products and tech startups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Join Our Growing Client Family</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business succeed
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}