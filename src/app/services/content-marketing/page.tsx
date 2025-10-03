import Link from 'next/link';

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Content Marketing</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Strategic content creation and marketing solutions that drive engagement and build your brand presence
          </p>
        </div>
      </section>

      {/* Image + Text Section with Testimonial */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Engaging Content That Converts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of innovative and talented content creators works in tandem with your needs to produce creative content that will leave an impact on your customers. We ensure quality standards, engaging narratives and take care of audience targeting.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The higher the engagement with your content, the higher revenue it will generate. We ensure that the content is easy to find, valuable, and shareable.
              </p>
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"WebAssist's content strategy increased our blog traffic by 400% in 6 months!"</p>
                <p className="font-semibold">— David Martinez, Content Director</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600"
                alt="Content Marketing Strategy"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Creative Solutions</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  WebAssist offers creative technological solutions for your business online. We build the online presence of companies using the latest technology to boost business and generate both brand recall and revenue.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We also help remodel existing content strategies to make them more attractive and efficient. Our streamlined content is useful for the user and designed to maximize engagement.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Approach</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  WebAssist has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and transactions on the internet effective.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We aspire to offer next generation technology driven content solutions that make an ideal component of client's business. We focus our goals based on client's business strategies and their work processes, mapping them according to our work model for greater transparency and timely project completion.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Standards</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We ensure quality standards, engaging narratives and take care of audience targeting. Our content is designed to be easy to find, valuable, and shareable, maximizing both engagement and revenue potential for your business.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Marketing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Blog Writing",
                    desc: "Engaging blog posts that inform, educate, and convert your audience",
                  },
                  {
                    title: "Content Strategy",
                    desc: "Comprehensive planning aligned with your business goals",
                  },
                  {
                    title: "Social Media Content",
                    desc: "Compelling posts that drive engagement across platforms",
                  },
                  {
                    title: "Website Copy",
                    desc: "Persuasive copy that converts visitors into customers",
                  },
                  {
                    title: "SEO Content",
                    desc: "Optimized content that ranks well in search engines",
                  },
                  {
                    title: "Email Newsletters",
                    desc: "Regular updates that keep your audience engaged",
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
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600"
                alt="Content Performance Analytics"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Results-Driven Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every piece of content we create is designed with your business goals in mind. We track performance metrics and continuously optimize to ensure maximum engagement and ROI.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From initial strategy to final delivery, we provide transparent reporting and regular updates on how your content is performing and driving business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Boost Your Content Strategy?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create compelling content that engages your audience and drives business results
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Start Your Content Journey
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}