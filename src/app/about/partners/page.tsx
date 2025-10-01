export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Partnership Opportunities</h1>
          <p className="text-xl max-w-3xl">
            Explore partnership opportunities with WebAssist
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner With Us</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebAssist welcomes partnership opportunities with businesses and organizations that share our commitment to quality and innovation. We believe in building long-term relationships that benefit all parties involved.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking to resell our services, collaborate on projects, or explore strategic alliances, we're open to discussing how we can work together to achieve mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Interested in Partnering?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss partnership opportunities
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}