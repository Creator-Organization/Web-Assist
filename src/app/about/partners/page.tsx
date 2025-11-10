'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Handshake, Users, TrendingUp, Award, Globe, Briefcase } from 'lucide-react';

// ✅ Local image import
import partnershipImage from '../../../../Images/partnership_opportunities.jpg';

export default function PartnersPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* 🌟 Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* ✅ Keep video as-is */}
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-[1]" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">
            Partnership Opportunities
          </h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Explore partnership opportunities with CreatorIt
          </p>
        </div>
      </section>

      {/* 📊 Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Active Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Mutual Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Partner Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🖼️ Image + Text Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Build Success Together</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CreatorIt welcomes partnership opportunities with businesses and organizations that share our commitment to quality and innovation. We believe in building long-term relationships that benefit all parties involved.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're looking to resell our services, collaborate on projects, or explore strategic alliances, we're open to discussing how we can work together to achieve mutual success.
              </p>
            </div>
            <div className="flex justify-center">
              {/* ✅ Local image usage */}
              <Image
                src={partnershipImage}
                alt="Partnership Collaboration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 Partnership Models */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Handshake, title: 'Reseller Partners', desc: 'Offer our web solutions to your clients under your brand with competitive margins' },
                { icon: Users, title: 'Referral Partners', desc: 'Earn commission by referring clients to our services with our partner program' },
                { icon: Briefcase, title: 'Strategic Alliances', desc: 'Collaborate on large-scale projects and combine expertise for better outcomes' },
                { icon: TrendingUp, title: 'Technology Partners', desc: 'Integrate your technology solutions with our platform for mutual benefit' },
                { icon: Globe, title: 'Regional Partners', desc: 'Represent CreatorIt in your region and expand our global reach together' },
                { icon: Award, title: 'Agency Partners', desc: 'White-label our services for your agency clients with full support' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 💼 Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partner Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Partner With Us</h3>
                <ul className="space-y-3">
                  {[
                    'Competitive revenue sharing models',
                    'Dedicated partner support team',
                    'Marketing and sales resources',
                    'Technical training and certification',
                    'Co-marketing opportunities',
                    'Priority project allocation',
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are committed to our partners' success. When you partner with CreatorIt, you gain access to our expertise, resources, and support network.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our partnership team works closely with you to ensure mutual growth, providing the tools and assistance needed to succeed in delivering exceptional web solutions to your clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Interested in Partnering?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss partnership opportunities
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
