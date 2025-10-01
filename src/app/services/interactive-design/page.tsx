export default function InteractiveDesignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Interactive Design</h1>
          <p className="text-xl max-w-3xl">
            Modern animations and interactive web experiences that captivate your audience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Interactive Experiences</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nowadays, interactive design is a very intriguing technology to add interactivity and dynamic graphics to a website. Modern interactive design brings a break from traditional static presentations and people are recommending the use of animations in their websites because interactive web design allows rich presentation of your concepts through graphics and motion via dynamic winning tutorials, training courses, introductions and video content.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Impressive visuals used in animated designs are more like a business campaign as they impart a positive impact in people's imagination through dramatic visual effects that urge them to visit your website time-to-time and become your regular customer.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Interactive Design</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                If the primary purpose of the website is to offer artistic or visual effects to the visitors (such as a business that is primarily a design or arts company, with visitors coming to the website on recommendations or direct traffic) then interactive design is highly recommended.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Interactive Design Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Animations</h3>
                  <p className="text-gray-700">Smooth, engaging animations using modern CSS and JavaScript</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Elements</h3>
                  <p className="text-gray-700">Dynamic components that respond to user interactions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Motion Graphics</h3>
                  <p className="text-gray-700">Eye-catching motion design for presentations and content</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Animated Logos</h3>
                  <p className="text-gray-700">Memorable animated branding that leaves an impression</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Integration</h3>
                  <p className="text-gray-700">Seamless video content and multimedia experiences</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Presentations</h3>
                  <p className="text-gray-700">Engaging tutorials and training materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Make Your Website Interactive?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create captivating interactive experiences that engage your audience
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}