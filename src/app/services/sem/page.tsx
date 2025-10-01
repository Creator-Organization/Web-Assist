export default function SEMPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Search Engine Marketing</h1>
          <p className="text-xl max-w-3xl">
            Maximize your online visibility with strategic paid search campaigns and performance-driven marketing
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Search Engine Marketing?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SEM is an acronym for the term search engine marketing. Search engine marketing is the act of marketing a website to improve its performance and to get noticed in the search engines, such as Google, Yahoo, or Bing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                SEM is a fairly new, but rapidly growing field. Search engine marketing can be a lucrative strategy due to rapidly rising demand for SEM services and the immediate results it can deliver for businesses looking to increase their online visibility.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Two Major Components of Search Engine Marketing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                There are two primary forms of SEM:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-apple border-l-4 border-primary-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Paid Search Marketing - PPC</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pay per click (PPC) or pay per action (PPA) where ads are placed by the search engine through that engine's search marketing programs (such as Google Ads). Advertisers pay only when a searcher clicks on a displayed ad (PPC) or clicks on an ad and takes a specific action, such as signing up on a website or purchasing a product (PPA).
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-apple border-l-4 border-primary-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO (Search Engine Optimization)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Techniques employed in the hopes of improving a website's search rankings in the natural, or unpaid search results.
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Many people who use the term "search engine marketing" or SEM, refer to paid search marketing techniques only and SEO for organic techniques only. In reality, search engine marketing, or SEM, refers to both.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Google Ads (AdWords)</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Google's top money earner is Google Ads (formerly AdWords). It is a powerful pay-per-click advertising tool that matches the advertiser's ad with keywords or phrases entered by potential customers. It allows the highest-bidding advertisers to pull ahead of the thousands of products or services generated in response to a single search.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Google AdSense</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                A different, yet confusingly named, Google service is AdSense. Google welcomes website owners to display ads for Google's advertisers. As a merchant, you can use AdSense to maximize the reach of your Google Ads advertisements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through AdSense, Google distributes text ads, graphical ads and even video advertisements to earn income per click.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our SEM Services Include</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Strategy</h3>
                  <p className="text-gray-700">Comprehensive planning for maximum ROI on your advertising budget</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Keyword Research</h3>
                  <p className="text-gray-700">Identifying high-value keywords for your target audience</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ad Creation</h3>
                  <p className="text-gray-700">Compelling ad copy and creative design for better conversion</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Tracking</h3>
                  <p className="text-gray-700">Continuous monitoring and optimization of campaign performance</p>
                </div>
              </div>
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
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}