import Link from 'next/link';
import { Users, Target, Handshake, HelpCircle, Building2, Briefcase } from 'lucide-react';

export default function AboutPage() {
  const pages = [
    {
      title: 'Why Choose Us',
      description: 'Discover what makes us the right partner for your web development needs',
      href: '/about/why-us',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: 'Vision & Mission',
      description: 'Our vision for the future and mission to serve our clients',
      href: '/about/vision',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Partnership',
      description: 'Explore partnership opportunities with CreatorIt',
      href: '/about/partners',
      icon: <Handshake className="w-8 h-8" />
    },
    {
      title: 'FAQ',
      description: 'Find answers to common questions about our services',
      href: '/faq',
      icon: <HelpCircle className="w-8 h-8" />
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">About CreatorIt</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Learn more about our company, values, and commitment to excellence
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CreatorIt is a leading web development and digital solutions company dedicated to helping businesses succeed online. With years of experience and a team of talented professionals, we deliver high-quality solutions that drive results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide next-generation technology-driven web solutions that become an ideal component of our clients' businesses. We focus on understanding your business strategies and work processes to deliver solutions with greater transparency and timely completion.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600"
                alt="CreatorIt Team"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore More About Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {page.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{page.title}</h3>
                  <p className="text-gray-700 mb-4">{page.description}</p>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client First</h3>
                <p className="text-gray-700">Your success is our priority. We work closely with you to understand and achieve your goals.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Driven</h3>
                <p className="text-gray-700">We maintain the highest standards in every project, ensuring excellence in delivery.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">We stay ahead with the latest technologies and best practices in web development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to achieve your business goals
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}