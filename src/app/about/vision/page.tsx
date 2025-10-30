import Link from 'next/link';
import { Target, Lightbulb, Rocket, Globe, Heart, TrendingUp } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Vision & Mission</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Our vision for the future and mission to serve our clients
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2005</div>
              <div className="text-gray-600">Established</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Focused</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">∞</div>
              <div className="text-gray-600">Innovation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Driving Digital Transformation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We aspire to offer next generation technology driven web solutions to our clients that makes an ideal component of their business. Our criterion of working sets us apart from the crowd of web solution providers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We focus our goals based on client's business strategies and their work processes, and map them according to our work model. This provides greater transparency in work and timely completion of projects to client's satisfaction.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600"
                alt="Vision and Strategy"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">To be the leading provider of innovative web solutions that empower businesses globally</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">Deliver cutting-edge technology solutions with transparency, quality, and timely execution</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
                <p className="text-gray-700">Integrity, innovation, and client success drive everything we do</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
                <p className="text-gray-700">Constantly evolving with the latest technologies and best practices</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-700">Serving clients worldwide with localized expertise and support</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Partner</h3>
                <p className="text-gray-700">We grow when our clients succeed and achieve their business goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Mission Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed">
                CreatorIt, as a company has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have the expertise to make your communication and transactions on the internet effective.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to understanding your business needs and delivering solutions that not only meet but exceed expectations. Our transparent work process ensures you're always in control of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Join Us on Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to achieve your business goals
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