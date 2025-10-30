import Link from 'next/link';

export default function SEMPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Search Engine Marketing</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Maximize your online visibility with strategic paid search campaigns and performance-driven marketing
          </p>
        </div>
      </section>

      {/* Image + Text Section with Testimonial */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-primary-200 opacity-20 rounded-full -z-10" />
            <div className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Instant Visibility & Results</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Search engine marketing delivers immediate results for businesses looking to increase their online visibility. Our strategic SEM campaigns help you reach customers actively searching for your products or services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We combine paid search advertising with proven optimization techniques to maximize your ROI and drive qualified traffic to your website.
              </p>
              <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 text-primary-900 rounded shadow">
                <p className="italic mb-2">"Our SEM campaigns with CreatorIt generated 5x ROI in the first quarter!"</p>
                <p className="font-semibold">— Mike Chen, E-commerce Director</p>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600"
                alt="Search Engine Marketing Strategy"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is SEM?</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  SEM is an acronym for search engine marketing. It's the act of marketing a website to improve its performance and to get noticed in search engines, such as Google, Yahoo, or Bing.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SEM is a rapidly growing field. It can be a lucrative strategy due to rising demand for SEM services and the immediate results it delivers for businesses looking to increase online visibility.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Paid Search - PPC</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pay per click (PPC) or pay per action (PPA) where ads are placed by the search engine. Advertisers pay only when a searcher clicks on a displayed ad (PPC) or clicks and takes a specific action, such as signing up or purchasing (PPA).
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Google Ads</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Google Ads (formerly AdWords) is a powerful pay-per-click advertising tool that matches ads with keywords entered by potential customers. It allows highest-bidding advertisers to pull ahead of thousands of products or services generated in response to a single search.
                </p>
              </div>

              <div className="bg-white rounded-apple-lg shadow-apple p-8 transition-shadow hover:shadow-apple-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Google AdSense</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Google welcomes website owners to display ads for Google's advertisers. Use AdSense to maximize the reach of your Google Ads advertisements. Through AdSense, Google distributes text ads, graphical ads and even video advertisements to earn income per click.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our SEM Services Include</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Campaign Strategy",
                    desc: "Comprehensive planning for maximum ROI on your advertising budget",
                  },
                  {
                    title: "Keyword Research",
                    desc: "Identifying high-value keywords for your target audience",
                  },
                  {
                    title: "Ad Creation",
                    desc: "Compelling ad copy and creative design for better conversion",
                  },
                  {
                    title: "Performance Tracking",
                    desc: "Continuous monitoring and optimization of campaign performance",
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
                alt="SEM Performance Dashboard"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Data-Driven Optimization</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Track every aspect of your SEM campaigns with detailed analytics. Monitor clicks, conversions, and ROI in real-time to make informed decisions about your advertising spend.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our continuous optimization process ensures your campaigns deliver maximum results while maintaining cost efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Start Your SEM Campaign Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts create and manage high-performing search engine marketing campaigns for your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}