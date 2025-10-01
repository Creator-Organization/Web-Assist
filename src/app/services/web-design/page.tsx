export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Web Design</h1>
          <p className="text-xl max-w-3xl">
            Professional, attractive, and mission-oriented web design that conveys your business message at a single glance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Web Design Services</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Internet presents businesses with an enormous opportunity. Millions of people are already connected and the number is growing every second.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebAssist is a dedicated web solution company, whose objective is to enable its customer's profitability through building web solutions that work for them. To fully exploit the capabilities of the Internet you need a great deal of imagination and entrepreneurial spirit. Design should be professional, attractive, mission oriented and should convey business message at a single glance and development architecture should allow an easy navigation all across the website without any confusion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                WebAssist offers professional, affordable website design and development services. Whether you are looking to build your first website or make enhancements to your current site, WebAssist can help your business succeed online.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Web Design Solutions</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide complete web design solutions including graphic design, domain registration, web hosting, free email and search engine optimization. Our specialty services feature multimedia design, print graphics, online marketing, web promotions, technical support and e-commerce.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Technically, our web design services include creation of high quality design and layout using modern tools, converting designs to responsive HTML/CSS, and integration with content management systems like WordPress and Joomla with language conversion options on web pages.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Web Design Team?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our core web design team is adept in technical skills like most other good web design firms but at the same time also features:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Unique and custom designs for clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Commitment with dedication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Honest, down to earth approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-2xl">•</span>
                  <span className="text-lg text-gray-700">Cost-effective and timely delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Web Design Services Include</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Design</h3>
                  <p className="text-gray-700">Unique layouts tailored to your brand identity</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
                  <p className="text-gray-700">Mobile-friendly websites that work on all devices</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">UI/UX Design</h3>
                  <p className="text-gray-700">Intuitive user interfaces for better engagement</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Identity</h3>
                  <p className="text-gray-700">Cohesive visual design that represents your brand</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Graphics Design</h3>
                  <p className="text-gray-700">Professional graphics and visual elements</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Redesign</h3>
                  <p className="text-gray-700">Modernize your existing website design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Need Pricing Information?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us now to get a free, no-obligation quote today!
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}