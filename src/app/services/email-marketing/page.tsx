export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Email Marketing</h1>
          <p className="text-xl max-w-3xl">
            Build customer loyalty, enhance brand recognition, and stay connected with your clients through targeted email campaigns
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Email Marketing?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You have heard of email marketing repeatedly on the internet, at conferences and during marketing strategy meetings. They say email marketing enriches business communications, targets specific key markets, and is both cost-effective and environmentally friendly. But what exactly is email marketing and how does it work? How is an email more effective than a radio spot or television advertisement and why should a business spend the time to maintain an email list?
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Email marketing occurs when a company sends a commercial message to a group of people by use of electronic email. Most commonly through advertisements, requests for business, or sales or donation solicitation, any email communication is considered email marketing if it helps to build customer loyalty, trust in a product or company or brand recognition. Email marketing is an efficient way to stay connected with your clients while also promoting your business.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Email Marketing?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With email marketing, you can easily and quickly reach target markets without the need for large quantities of print space, television or radio time or high production costs. Thanks to effective email marketing software, you can maintain an email list that has been segmented based on several factors including the length of time addresses have been on the list, customers' likes and dislikes, spending habits and other important criteria.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Emails are then created and sent out to specifically target members of your email list, providing them with a personalized email detailing information that they are interested in or have requested. This helps promote trust and loyalty to a company while also increasing sales.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
                  <p className="text-gray-700">Reach target markets without large production costs or media space requirements</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeted Communication</h3>
                  <p className="text-gray-700">Segment your audience based on preferences, behavior, and spending habits</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Loyalty</h3>
                  <p className="text-gray-700">Stay connected with clients and promote trust in your brand</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-apple">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Approach</h3>
                  <p className="text-gray-700">Send relevant content based on customer interests and requests</p>
                </div>
              </div>
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
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}