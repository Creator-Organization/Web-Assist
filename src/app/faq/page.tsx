'use client';

import Link from 'next/link';
import { HelpCircle, MessageCircle, Clock } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including web design, web development, mobile app development, digital marketing, SEO, content marketing, and custom software development. Visit our services page for a complete list."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take several months. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support and maintenance packages to ensure your website or application continues to run smoothly after launch. We can discuss your specific needs during our consultation."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: analysis and conceptualization, technical specification and documentation, designing and prototyping, development, and quality analysis and testing. We keep you involved throughout the entire process."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our website, email, or phone. We'll schedule a consultation to discuss your needs, provide recommendations, and create a customized proposal for your project."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with milestone-based payments: 40% upfront, 40% at mid-project review, and 20% upon completion. Custom payment plans can be arranged for larger projects."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients worldwide. We have experience managing projects across different time zones and provide excellent communication throughout the development process."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can take over existing projects, provide maintenance, add new features, or completely redesign your current website or application."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">&lt;1hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Questions Answered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">We're Here to Help</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Have questions about our services, processes, or pricing? We've compiled answers to the most common questions we receive from our clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Can't find what you're looking for? Our team is always ready to assist you with any specific questions or concerns you may have.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600"
                alt="Customer Support"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Other Ways to Get Help</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
                <p className="text-gray-700 mb-4">Chat with our support team in real-time</p>
                <Link href="/contact" className="text-primary-600 font-medium hover:text-primary-700">
                  Start Chat →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
                <p className="text-gray-700 mb-4">Send us your questions via email</p>
                <a href="mailto:info@CreatorIt.com" className="text-primary-600 font-medium hover:text-primary-700">
                  Email Us →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule Call</h3>
                <p className="text-gray-700 mb-4">Book a consultation with our team</p>
                <Link href="/contact" className="text-primary-600 font-medium hover:text-primary-700">
                  Book Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us and we'll be happy to help
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