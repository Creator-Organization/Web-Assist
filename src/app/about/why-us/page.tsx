export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Why Choose WebAssist?</h1>
          <p className="text-xl max-w-3xl">
            Discover what makes us the right partner for your web development needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why WebAssist?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Custom website designs offer the maximum benefit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">We strive to understand your requirements and work accordingly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">We offer the best possible design for your e-commerce website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">We use the latest versions of varied software and technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">We ensure best practices, cross-browser compatibility and clean code</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-apple-lg shadow-apple p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  WebAssist, as a company has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and transactions on the internet effective.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  We aspire to offer next generation technology driven web solutions to our clients that makes an ideal component of their business. Our criterion of working sets us apart from the crowd of web solution providers. We focus our goals based on client's business strategies and their work processes, and map them according to our work model. This provides greater transparency in work and timely completion of projects to client's satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the WebAssist difference in your next project
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}