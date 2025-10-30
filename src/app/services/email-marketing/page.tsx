import Link from 'next/link';

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Email Marketing</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Build customer loyalty, enhance brand recognition, and stay connected with your clients through targeted email campaigns
          </p>
        </div>
      </section>

      {/* Image + Text Section with Testimonial */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Reach Your Audience Effectively</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Email marketing is one of the most powerful tools for building customer relationships and driving conversions. Our targeted campaigns help you connect with your audience at the right time with the right message.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We help you create personalized email campaigns that resonate with your subscribers and deliver measurable results for your business.
              </p>
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"Our email campaigns now have 3x higher engagement rates thanks to creatorit!"</p>
                <p className="font-semibold">— Sarah Johnson, Marketing Director</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600" 
                alt="Email Marketing Strategy"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Email Marketing?</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Email marketing enriches business communications, targets specific key markets, and is both cost-effective and environmentally friendly. It helps build customer loyalty, trust in a product or company and brand recognition.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Email marketing occurs when a company sends a commercial message to a group of people by use of electronic email. It's an efficient way to stay connected with your clients while also promoting your business.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Email Marketing?</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  With email marketing, you can easily and quickly reach target markets without the need for large quantities of print space, television or radio time or high production costs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Thanks to effective email marketing software, you can maintain an email list segmented based on several factors including customer preferences, spending habits and other important criteria.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Personalized Approach</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Emails are created and sent out to specifically target members of your email list, providing them with a personalized email detailing information that they are interested in or have requested. This helps promote trust and loyalty to a company while also increasing sales.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Drive Results</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Email marketing is more effective than traditional advertising because it allows for targeted, personalized communication. Track engagement, measure ROI, and continuously optimize your campaigns for better performance and higher conversion rates.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Email Marketing Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cost-Effective",
                    desc: "Reach target markets without large production costs or media space requirements",
                  },
                  {
                    title: "Targeted Communication",
                    desc: "Segment your audience based on preferences, behavior, and spending habits",
                  },
                  {
                    title: "Build Loyalty",
                    desc: "Stay connected with clients and promote trust in your brand",
                  },
                  {
                    title: "Personalized Approach",
                    desc: "Send relevant content based on customer interests and requests",
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
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600" 
                alt="Email Campaign Analytics"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Data-Driven Results</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Track your campaign performance with detailed analytics and insights. Monitor open rates, click-through rates, and conversions to continuously optimize your email marketing strategy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our email marketing solutions include comprehensive reporting tools that help you understand what works and make data-driven decisions for better ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Start Your Email Campaign?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you build effective email marketing strategies that drive results
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}