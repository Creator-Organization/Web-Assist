import Link from 'next/link';

export default function OnlineSurveysPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Online Survey Services</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Professional survey creation and market research tools to gather valuable customer insights
          </p>
        </div>
      </section>

      {/* Image + Text Section with Testimonial */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Gather Actionable Insights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of innovative designers works in tandem with your needs to produce creative survey solutions that engage your audience and deliver meaningful data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We ensure surveys are easy to navigate, mobile-friendly, and optimized for maximum response rates. The higher the engagement with your surveys, the better insights you will generate.
              </p>
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"WebAssist's survey platform helped us achieve an 85% response rate!"</p>
                <p className="font-semibold">— Emily Chen, Research Director</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600"
                alt="Survey Research and Analytics"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Solutions</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  WebAssist offers creative technological solutions for your business online. We build survey systems using the latest technology to boost business and generate valuable insights.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We also help remodel existing survey systems to make them more attractive and efficient, ensuring best practices and cross-browser compatibility.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  WebAssist has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and data collection on the internet effective.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We aspire to offer next generation technology driven survey solutions that make an ideal component of client's business. We focus our goals based on client's business strategies and work processes, ensuring greater transparency and timely project completion.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User-Friendly Design</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We streamline surveys and make them useful for users. Our surveys ensure fast loading, intuitive navigation, and maximum engagement to generate the best possible insights for your business decisions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Online Survey Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Custom Survey Design",
                    desc: "Create professional surveys tailored to your research needs",
                  },
                  {
                    title: "Market Research",
                    desc: "Gather valuable customer insights and market data",
                  },
                  {
                    title: "Customer Feedback",
                    desc: "Collect and analyze customer satisfaction data",
                  },
                  {
                    title: "Employee Surveys",
                    desc: "Measure employee engagement and satisfaction",
                  },
                  {
                    title: "Data Analysis",
                    desc: "Comprehensive reporting and insights from survey data",
                  },
                  {
                    title: "Multi-Platform Support",
                    desc: "Mobile-friendly surveys accessible on any device",
                  }
                ].map(({ title, desc }, i) => (
                  <div className="flex items-start" key={i}>
                    <span className="text-primary-500 mr-3 text-2xl">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-700">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text + Image Section (Reversed) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600"
                alt="Survey Data Analytics"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Actionable Data Insights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transform survey responses into actionable business intelligence. Our comprehensive analytics and reporting tools help you understand your audience and make data-driven decisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Track response rates, analyze trends, and export detailed reports to share insights across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Start Gathering Valuable Insights</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you create effective surveys that provide actionable insights for your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Create Your Survey
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}