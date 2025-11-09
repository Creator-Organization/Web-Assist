'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';


export default function ClassifiedsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-blue-50 text-gray-800 font-inter overflow-x-hidden">

      {/* 🌟 HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-700 via-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-md">
            Classified Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Professional classified ad posting and directory listing services to expand your business reach.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started Today
            </button>
          </Link>
        </motion.div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-blue-50 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2 }}
          className="absolute -top-24 left-1/2 w-[600px] h-[600px] bg-sky-300 rounded-full blur-3xl -translate-x-1/2"
        />
      </section>

      {/* 💬 INTRO SECTION */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-sky-200 opacity-20 rounded-full -z-10" />

            {/* Text Section */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-sky-800">Maximum Online Visibility</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Today 75% of business comes through the internet and online classified services are faster than traditional newspapers. Our expert team works around the clock to ensure your ads get maximum visibility on high-traffic platforms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide 100% manual posting with complete detail reports including user credentials so you can modify or delete your ads anytime.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-5 rounded-xl shadow-sm">
                <p className="italic text-gray-700">
                  "CreatorIt's classified posting service brought us 200+ quality leads in the first month!"
                </p>
                <p className="font-semibold mt-2 text-sky-700">— Robert Johnson, Sales Manager</p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600"
                alt="Classified Advertising Strategy"
                className="rounded-2xl shadow-2xl w-full max-w-[480px] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 MAIN CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Manual Posting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Manual Posting Service</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We are providing classified posting services with high skilled and expert personnel for ad posting service. CreatorIt provides 100% manual posting with no automated ad posting software.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide only live ads with complete detail reports including user credentials. We post your ads only on high authority and high-traffic classified websites.
              </p>
            </motion.div>

            {/* Verified Accounts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Verified Accounts</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We have verified accounts on the world's famous free classified posting websites. If you are interested in our classified posting service and want to get more business through the internet, we have prepared service packages that suit your needs.
              </p>
            </motion.div>

            {/* Targeted Reach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Targeted Reach</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in posting services for targeted cities and countries on major classified platforms. Our strategic approach ensures your ads reach the right audience in the right locations for maximum conversion potential.
              </p>
            </motion.div>

            {/* Affordable Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Affordable Pricing</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                CreatorIt is a classified advertising service provider at very affordable prices, recognized worldwide as a leading ad posting agency. We offer custom packages designed to fit your budget and business goals.
              </p>
            </motion.div>
          </div>

          {/* SERVICES SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Our Classified Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Manual Ad Posting", desc: "100% manual posting on high-authority classified sites." },
                { title: "Targeted Campaigns", desc: "City and country-specific ad placement strategies." },
                { title: "Live Ads Management", desc: "Full access to modify and manage your posted ads." },
                { title: "Detailed Reporting", desc: "Complete reports with credentials and performance metrics." },
                { title: "High Traffic Sites", desc: "Posting on popular platforms with maximum visibility." },
                { title: "24/7 Support", desc: "Round-the-clock assistance for your classified campaigns." },
              ].map(({ title, desc }, i) => (
                <div className="flex items-start" key={i}>
                  <span className="text-sky-600 mr-3 text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📊 PERFORMANCE SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6 xl:px-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600"
              alt="Classified Performance Metrics"
              className="rounded-2xl shadow-2xl w-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Performance Tracking</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Monitor your classified ad performance with detailed reports and analytics. Track views, responses, and conversions to measure the effectiveness of your campaigns.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive reporting gives you full transparency and control over your classified advertising investments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Expand Your Business Reach
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us help you reach more customers through strategic classified ad posting.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Get Started Today
            </button>
          </Link>
        </motion.div>

        {/* Floating Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-24 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"
        />
      </section>
    </main>
  );
}
