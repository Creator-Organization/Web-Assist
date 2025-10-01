export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What services do you offer?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We offer a comprehensive range of services including web design, web development, mobile app development, digital marketing, SEO, content marketing, and custom software development. Visit our services page for a complete list.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does a typical project take?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take several months. We provide detailed timelines during the consultation phase.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you provide ongoing support?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we offer various support and maintenance packages to ensure your website or application continues to run smoothly after launch. We can discuss your specific needs during our consultation.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What is your development process?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our process includes: analysis and conceptualization, technical specification and documentation, designing and prototyping, development, and quality analysis and testing. We keep you involved throughout the entire process.
                  </p>
                </div>

                <div className="pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I get started?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Simply contact us through our website, email, or phone. We'll schedule a consultation to discuss your needs, provide recommendations, and create a customized proposal for your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us and we'll be happy to help
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}