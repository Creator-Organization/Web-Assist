'use client';

import React from 'react';
import { Check, Zap, Shield, Clock, Users, Award, ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, DollarSign, Code, Search, ServerCog, Wrench } from 'lucide-react';
import Image from 'next/image';

import AgileProcessSection from '../components/AgileProcess/AgileProcessSelection';

// --- What Makes Us Different Images ---
import expertTeamImage from '../../Images/What_Makes_Us_Different/Expert_Team.png';
import qualityWorkImage from '../../Images/What_Makes_Us_Different/Quality_Work.png';
import onTimeDeliveryImage from '../../Images/What_Makes_Us_Different/On-Time Delivery.png';
import secureSolutionImage from '../../Images/What_Makes_Us_Different/Secure_Solution.png';
import fastPerformanceImage from '../../Images/What_Makes_Us_Different/Fast_Performance.png';
import support247Image from '../../Images/What_Makes_Us_Different/24&7_support.png';

// --- Client Logos ---
import swiggyLogo from '../../Images/clients/client_swiggy.png';
import kennametalLogo from '../../Images/clients/client_Kennametal.png';
import ifbLogo from '../../Images/clients/client_IFB.png';
import jainLogo from '../../Images/clients/client_Jain.png';
import mylogicLogo from '../../Images/clients/client_MyLogic.png';
import adda52Logo from '../../Images/clients/client_Adda52.png';

// --- Technology Stack Logos ---
import reactLogo from '../../Images/stack_logos/React.png';
import nextjsLogo from '../../Images/stack_logos/Next.js.png';
import nodejsLogo from '../../Images/stack_logos/Node.js.png';
import wordpressLogo from '../../Images/stack_logos/WordPress.png';
import shopifyLogo from '../../Images/stack_logos/Shopify.png';
import awsLogo from '../../Images/stack_logos/AWS.png';


const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen font-inter bg-white">
     {/* HERO SECTION */}
<section className="relative bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white py-12 md:py-16 lg:py-20 overflow-visible">
  <div className="container mx-auto px-4 sm:px-6 xl:px-16 relative z-10 text-center">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 border border-white/20 shadow-lg mx-auto">
      <Star className="w-4 h-4 text-yellow-300" />
      <span className="text-xs sm:text-sm">Trusted by 300+ businesses worldwide</span>
    </div>

    {/* Heading */}
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight px-2 drop-shadow-lg">
      Transform Your Digital Presence with
      <span className="block text-blue-200 mt-2">Expert Web Solutions</span>
    </h1>

    {/* Subheading */}
    <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto px-4 drop-shadow-md">
      From strategy to deployment, we build powerful web experiences that drive growth and deliver measurable results
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mx-auto px-4">
      <a href="/contact" className="w-full sm:w-auto">
        <button className="group bg-white text-sky-900 px-5 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 w-full min-h-[44px]">
          Start Your Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </a>

      <a href="/services" className="w-full sm:w-auto">
        <button className="bg-primary-700/20 text-white border-2 border-white/30 px-5 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-700/40 transition-all duration-200 w-full min-h-[44px]">
          View Services
        </button>
      </a>
    </div>
  </div>

  {/* CLEARLY VISIBLE FLOATING TRUST BAR */}
  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4.5rem] w-[94%] sm:w-[85%] lg:w-[70%] bg-white/95 backdrop-blur-md text-gray-700 rounded-2xl shadow-2xl py-5 sm:py-6 px-6 sm:px-10 flex flex-wrap justify-center items-center gap-5 sm:gap-8 text-sm border border-gray-100 z-20">
    <div className="flex items-center gap-2">
      <Check className="w-5 h-5 text-green-500" />
      <span className="font-medium">500+ Projects Delivered</span>
    </div>
    <div className="flex items-center gap-2">
      <Check className="w-5 h-5 text-green-500" />
      <span className="font-medium">98% Client Satisfaction</span>
    </div>
    <div className="flex items-center gap-2">
      <Check className="w-5 h-5 text-green-500" />
      <span className="font-medium">15+ Years Experience</span>
    </div>
    <div className="flex items-center gap-2">
      <Check className="w-5 h-5 text-green-500" />
      <span className="font-medium">24/7 Support</span>
    </div>
  </div>
</section>



     {/* SERVICES OVERVIEW */}
<section className="py-16 md:py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
    <div className="text-center mb-12 md:mb-16">
      <span className="text-sky-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 mt-2">Our Services</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        End-to-end digital solutions designed to accelerate your business growth
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
      {[
        {
          title: "Digital Marketing",
          desc: "Boost your online visibility with SEO, SEM, and strategic content marketing",
          color: "from-sky-50 to-sky-100",
          icon: (
            <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          link: "/digital-marketing"
        },
        {
          title: "Web Services",
          desc: "Beautiful, responsive websites that convert visitors into customers",
          color: "from-indigo-50 to-indigo-100",
          icon: (
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          link: "/web-services"
        },
        {
          title: "CMS Development",
          desc: "WordPress, Joomla, Drupal platforms customized for your needs",
          color: "from-cyan-50 to-cyan-100",
          icon: (
            <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          ),
          link: "/cms-development"
        },
        {
          title: "Software Development",
          desc: "Custom software and mobile apps for iOS and Android platforms",
          color: "from-blue-50 to-blue-100",
          icon: (
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
          link: "/software-development"
        }
      ].map((service, i) => (
        <a
          key={i}
          href={service.link}
          className={`group bg-gradient-to-b ${service.color} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6 lg:p-8`}
        >
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-sm">
            {service.icon}
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
            {service.desc}
          </p>
          <span className="text-sky-600 font-semibold inline-flex items-center gap-2 text-sm lg:text-base">
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* WHY CREATORIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wide">Why CreatorIt</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { image: expertTeamImage, title: 'Expert Team', desc: 'Skilled professionals with 15+ years of industry experience' },
              { image: qualityWorkImage, title: 'Quality Work', desc: 'High-quality solutions backed by rigorous testing and QA' },
              { image: onTimeDeliveryImage, title: 'On-Time Delivery', desc: 'Projects completed within agreed timelines, every time' },
              { image: secureSolutionImage, title: 'Secure Solutions', desc: 'Enterprise-grade security built into every project' },
              { image: fastPerformanceImage, title: 'Fast Performance', desc: 'Optimized for speed with load times under 2 seconds' },
              { image: support247Image, title: '24/7 Support', desc: 'Round-the-clock support via email, phone, and chat' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                
                {/* Image container - fills most of the box */}
                <div className="relative z-10 flex-1 p-4 md:p-6 flex items-center justify-center min-h-[200px] md:min-h-[240px] lg:min-h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Text content at bottom */}
                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 md:p-6 pt-2 border-t border-gray-100">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-700 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky-600 to-sky-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-blue-100 text-base md:text-lg">Delivering results that matter</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc.',
                text: 'CreatorIt transformed our online presence completely. Their attention to detail and commitment to excellence is unmatched. Our conversion rate increased by 250%!'
              },
              {
                name: 'Michael Chen',
                role: 'Director, Global Retail Co.',
                text: 'Professional, reliable, and always delivers on time. The e-commerce platform they built handles thousands of daily transactions flawlessly.'
              },
              {
                name: 'Priya Sharma',
                role: 'Founder, HealthWell',
                text: "From strategy to execution, CreatorIt exceeded all expectations. Our website traffic tripled within 3 months of launch!"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + CLIENTELE (simplified) */}
      

      {/* CLIENT LOGOS (placeholder grid) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h4 className="text-3xl font-bold text-slate-900 mb-6">Our valuable clientele</h4>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Our clients count on us for their end to end IT services and digital marketing needs. As a technology partner we work to become your IT team.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center max-w-6xl mx-auto">
            <div className="p-4 bg-white rounded-lg shadow-sm border h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image
                src={swiggyLogo}
                alt="Swiggy"
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image
                src={kennametalLogo}
                alt="Kennametal"
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image
                src={ifbLogo}
                alt="IFB"
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image
                src={jainLogo}
                alt="Jain"
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image
                src={mylogicLogo}
                alt="MyLogic"
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image
                src={adda52Logo}
                alt="Adda52"
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

     <AgileProcessSection />
      
       {/* TECHNOLOGIES WE MASTER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-wide">Our Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Technologies We Master
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Building with cutting-edge, battle-tested technologies
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { logo: reactLogo, name: 'React' },
              { logo: nextjsLogo, name: 'Next.js' },
              { logo: nodejsLogo, name: 'Node.js' },
              { logo: wordpressLogo, name: 'WordPress' },
              { logo: shopifyLogo, name: 'Shopify' },
              { logo: awsLogo, name: 'AWS' }
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-sky-50 rounded-2xl py-8 px-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-4">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-900 font-semibold text-lg">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
            Let's discuss your project and show you how we can deliver results that exceed your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="group bg-white text-sky-700 px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2 mx-auto">
                Start Your Project Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
          <p className="text-blue-100 mt-6 text-sm">Free consultation • No commitment required • Response within 24 hours</p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
