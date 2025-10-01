export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Careers at WebAssist</h1>
          <p className="text-xl max-w-3xl">
            Join our team and grow your career with us
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Work With Us</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Thank you for your interest in WebAssist. We offer excellent career opportunities and we hope that you will become a valued member of our team in the future.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are always looking for talented individuals who are passionate about technology and committed to delivering exceptional results. Whether you're a developer, designer, marketer, or project manager, we'd love to hear from you.
              </p>
              <div className="bg-primary-50 p-6 rounded-apple">
                <p className="text-lg text-gray-900 font-semibold mb-2">Submit your resume:</p>
                <p className="text-lg text-primary-700">career@webassist.com</p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                    <p className="text-gray-700">Continuous learning and career advancement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Compensation</h3>
                    <p className="text-gray-700">Industry-standard salaries plus incentives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Work</h3>
                    <p className="text-gray-700">Work-life balance and flexible schedules</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Technology</h3>
                    <p className="text-gray-700">Work with latest tools and technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Send us your resume and let's start the conversation
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}