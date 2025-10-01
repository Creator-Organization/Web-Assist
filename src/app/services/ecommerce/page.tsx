export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">E-commerce Services</h1>
          <p className="text-xl max-w-3xl">
            Complete online store development with superior design that drives customers straight to checkout
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">E-commerce Opportunities</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With e-commerce booming at a tremendous pace, small businesses have found the next dimensional gates of growth as major online marketplaces provide platforms for SMEs. The e-tailers connect the sellers with the buyers for a commission helping them mutually. There are many sprouting businesses which survive purely depending on online marketplaces.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                E-commerce sites provide small scale retailers, who do not have sufficient resources to set up a physical store, a space to market their products. There have been examples where small scale businesses have rocketed after establishing their online presence. The world's largest retailers earn significant revenue by providing effective e-commerce platforms.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our E-commerce Approach</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebAssist understands that when we add an e-commerce option to your website, you need to make sure it has a superior design. We follow some basic principles to drive your customers straight to checkout. WebAssist will help you define your marketing goals, sales expectations and best practices to reach maximum consumer outreach.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We will design your e-commerce site from the ground up - everything from content development to final graphic design layout. Such a directed approach will give your site consistent branding on every page and customers will recognize the superior quality of your e-commerce web design.
              </p>
            </div>

            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">E-commerce Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Online Stores</h3>
                  <p className="text-gray-700">Fully customized e-commerce platforms tailored to your business</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Shopping Cart Integration</h3>
                  <p className="text-gray-700">Seamless cart systems with secure checkout processes</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Gateway Setup</h3>
                  <p className="text-gray-700">Multiple payment options and secure transaction processing</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Management</h3>
                  <p className="text-gray-700">Easy-to-use systems for managing inventory and products</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Management</h3>
                  <p className="text-gray-700">Complete order tracking and fulfillment systems</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-apple border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Commerce</h3>
                  <p className="text-gray-700">Responsive designs optimized for mobile shopping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Launch Your Online Store?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us build a powerful e-commerce platform that drives sales and grows your business
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
            Start Selling Online
          </button>
        </div>
      </section>
    </div>
  );
}