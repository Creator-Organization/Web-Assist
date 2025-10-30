import { Check, Zap, Shield, Clock, Users, Award, ArrowRight, Star } from 'lucide-react';

// FIX: Changed to a const arrow function definition and kept default export to ensure 
// it is correctly recognized as a React component in various environments.
const HomePage = () => {
  return (
    <main className="min-h-screen font-inter">
      {/* Hero Section - Blue Gradient Background */}
      <section className="relative py-16 md:py-24 lg:py-32 hero-bg-image text-white overflow-hidden">
        {/* Removed the second pattern overlay to keep the image clean */}
        
        <div className="container mx-auto px-4 sm:px-6 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 border border-white/20 shadow-lg">
               <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
               <span className="text-xs sm:text-sm">Trusted by 300+ businesses worldwide</span>
             </div>
             
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight px-2 drop-shadow-lg">
               Transform Your Digital Presence with 
               <span className="block text-blue-200 mt-2">Expert Web Solutions</span>
             </h1>
             
             <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-blue-100 leading-relaxed max-w-3xl mx-auto px-4 drop-shadow-md">
               From strategy to deployment, we build powerful web experiences that drive growth and deliver measurable results
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto px-4">
               {/* FIX: Replaced Next.js Link with standard <a> tag */}
               <a href="/contact" className="w-full sm:w-auto">
                 <button className="group bg-white text-primary-800 px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 w-full min-h-[48px]">
                   Start Your Project
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
               </a>
               
                {/* FIX: Replaced Next.js Link with standard <a> tag */}
                <a href="/services" className="w-full sm:w-auto">
                 <button className="bg-primary-700/50 backdrop-blur text-white border-2 border-white/30 px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700/70 transition-all duration-200 w-full min-h-[48px]">
                   View Services
                 </button>
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Kept white for contrast with the Hero */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 xl:px-16">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 mt-2">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* FIX: Replaced Next.js Link with standard <a> tag */}
            <a href="/digital-marketing" className="group bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">Boost your online visibility with SEO, SEM, and strategic content marketing</p>
              <span className="text-primary-600 font-semibold inline-flex items-center gap-2 text-sm lg:text-base">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* FIX: Replaced Next.js Link with standard <a> tag */}
            <a href="/web-services" className="group bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Web Services</h3>
              <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">Beautiful, responsive websites that convert visitors into customers</p>
              <span className="text-primary-600 font-semibold inline-flex items-center gap-2 text-sm lg:text-base">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* FIX: Replaced Next.js Link with standard <a> tag */}
            <a href="/cms-development" className="group bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">CMS Development</h3>
              <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">WordPress, Joomla, Drupal platforms customized for your needs</p>
              <span className="text-primary-600 font-semibold inline-flex items-center gap-2 text-sm lg:text-base">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* FIX: Replaced Next.js Link with standard <a> tag */}
            <a href="/software-development" className="group bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Software Development</h3>
              <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">Custom software and mobile apps for iOS and Android platforms</p>
              <span className="text-primary-600 font-semibold inline-flex items-center gap-2 text-sm lg:text-base">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose WebAssist - Enhanced */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Why WebAssist</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 mt-2">What Makes Us Different</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, title: 'Expert Team', desc: 'Skilled professionals with 15+ years of industry experience', color: 'primary' },
              { icon: Award, title: 'Quality Work', desc: 'High-quality solutions backed by rigorous testing and QA', color: 'primary' },
              { icon: Clock, title: 'On-Time Delivery', desc: 'Projects completed within agreed timelines, every time', color: 'primary' },
              { icon: Shield, title: 'Secure Solutions', desc: 'Enterprise-grade security built into every project', color: 'primary' },
              { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed with load times under 2 seconds', color: 'primary' },
              { icon: Check, title: '24/7 Support', desc: 'Round-the-clock support via email, phone, and chat', color: 'primary' }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-4 lg:p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
        {/* Pattern overlay kept to add visual texture to the stats section */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2Mmgyem00LTR2LTJoLTJ2Mmgyem0wIDR2LTJoLTJ2Mmgyem0wIDR2LTJoLTJ2Mmgyem0wIDR2LTJoLTJ2Mmgyem0tMi00di0yaC0ydjJoMnptMC00di0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-blue-100 text-base md:text-lg">Delivering results that matter</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Projects Completed</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Client Satisfaction</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Years Experience</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-sm md:text-base lg:text-lg">Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechStart Inc.', text: 'WebAssist transformed our online presence completely. Their attention to detail and commitment to excellence is unmatched. Our conversion rate increased by 250%!' },
              { name: 'Michael Chen', role: 'Director, Global Retail Co.', text: 'Professional, reliable, and always delivers on time. The e-commerce platform they built handles thousands of daily transactions flawlessly.' },
              { name: 'Priya Sharma', role: 'Founder, HealthWell', text: 'From strategy to execution, WebAssist exceeded all expectations. Our website traffic tripled within 3 months of launch!' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Our Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building with cutting-edge, battle-tested technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'AWS'].map((tech, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">{tech[0]}</span>
                </div>
                <div className="font-semibold text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and show you how we can deliver results that exceed your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* FIX: Replaced Next.js Link with standard <a> tag */}
            <a href="/contact">
              <button className="group bg-white text-primary-600 px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2 mx-auto">
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
