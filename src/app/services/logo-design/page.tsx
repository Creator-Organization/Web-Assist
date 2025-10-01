export default function LogoDesignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Logo Design</h1>
          <p className="text-xl max-w-3xl">
            Professional logo and branding design that creates lasting brand recall and recognition
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
                WebAssist offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue. We also help remodel existing branding to make it more attractive and efficient. Our team of innovative and talented designers works in tandem with your needs to produce creative designs that will leave an impact on your customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We streamline branding and make it memorable for the user. WebAssist ensures quality standards, professional execution and takes care of versatility across platforms. We appreciate that the stronger your brand identity, the higher recognition it will generate. We ensure that the logo is impactful and easily recognizable.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Logo Design Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Logo Design</h3>
                  <p className="text-gray-700">Unique logos tailored to your brand identity</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Identity</h3>
                  <p className="text-gray-700">Complete branding packages with style guides</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Logo Redesign</h3>
                  <p className="text-gray-700">Modernize and refresh existing logos</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vector Graphics</h3>
                  <p className="text-gray-700">Scalable logos for all media and sizes</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Concepts</h3>
                  <p className="text-gray-700">Various design options to choose from</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">File Formats</h3>
                  <p className="text-gray-700">All necessary formats for print and digital use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Create Your Brand Identity?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us design a memorable logo that represents your business perfectly
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Start Your Logo Design
          </button>
        </div>
      </section>
    </div>
  );
}