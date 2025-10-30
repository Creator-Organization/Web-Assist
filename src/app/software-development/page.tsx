import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Rocket, Shield } from 'lucide-react';
import mobileAppLogo from '../../../Images/Mobile_App.png';
import customSoftwareLogo from '../../../Images/custom_software.png';
import offshoreDevelopmentLogo from '../../../Images/offshore_development.png';

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'iOS and Android app development covering the complete software development lifecycle from concept to deployment',
      href: '/services/mobile-apps',
      icon: <Image src={mobileAppLogo} alt="Mobile App Development" className="w-12 h-12 object-contain" />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for business process automation, efficiency, and digital transformation',
      href: '/services/custom-software',
      icon: <Image src={customSoftwareLogo} alt="Custom Software Development" className="w-12 h-12 object-contain" />,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600'
    },
    {
      title: 'Offshore Development',
      description: 'Dedicated offshore development teams delivering quality solutions with cost-effective collaboration',
      href: '/services/offshore-development',
      icon: <Image src={offshoreDevelopmentLogo} alt="Offshore Development" className="w-12 h-12 object-contain" />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600'
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Software Development</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Custom software solutions and mobile applications that drive business innovation
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Apps Developed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Dev Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Innovative Software Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our software development services help businesses automate processes, improve efficiency, and create new revenue streams. From mobile apps to enterprise software, we build solutions that solve real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Services with Alternating Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div key={service.href} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Learn More 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Software Development</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Technology</h3>
                <p className="text-gray-700">Built with the latest technologies and best development practices</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile Development</h3>
                <p className="text-gray-700">Iterative approach with regular updates and client collaboration</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-700">Rigorous testing to ensure reliable and bug-free software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Custom Software?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create software solutions that transform your business
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}