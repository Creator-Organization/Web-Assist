'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BesideWhatsAppImage from '../../../../Images/Beside_whatsapp_marketing.jpg';
import InsideOffshoreImage from '../../../../Images/Inside_Offshore.png';

export default function WhatsappMarketingPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-blue-50 text-gray-800 overflow-x-hidden font-inter">

      {/* 🌟 HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-700 via-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-md">
            WhatsApp Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Reach your audience instantly with automated WhatsApp messaging, personalized conversations, and high-engagement campaigns.
          </p>
          <Link href="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
          </Link>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-blue-50 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute -top-24 left-1/2 w-[600px] h-[600px] bg-sky-300 rounded-full blur-3xl -translate-x-1/2"
        />
      </section>

      {/* 💬 IMAGE + TEXT + TESTIMONIAL SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute -left-24 top-10 w-64 h-64 bg-sky-200 opacity-20 rounded-full -z-10" />

            {/* LEFT TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-white p-0 md:p-6 rounded-lg shadow-none"
            >
              <h2 className="text-3xl font-bold mb-4 text-sky-800">Instant Customer Engagement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                WhatsApp marketing helps brands connect instantly with customers using fast, interactive, and personalized messaging. Rich media, buttons, and automation make it one of the most effective communication channels.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From promotions to reminders, support, and updates — WhatsApp ensures higher open rates and real-time engagement.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 text-sky-900 rounded shadow p-5">
                <p className="italic mb-2">"Our customer engagement skyrocketed — WhatsApp messages are opened instantly and drive quick responses!"</p>
                <p className="font-semibold">— Sarah Johnson, Marketing Director</p>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center relative z-10"
            >
              <Image
                src={BesideWhatsAppImage}
                alt="WhatsApp Marketing Strategy"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 MAIN CONTENT SECTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* What is WhatsApp Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">What is WhatsApp Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                WhatsApp marketing uses WhatsApp Business and API tools to automate messaging, send personalized promotions, provide customer support, and build interactive campaigns.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It allows businesses to engage with customers using text, images, videos, buttons, catalogs, and more.
              </p>
            </motion.div>

            {/* Why Choose WhatsApp Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Why Choose WhatsApp Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                WhatsApp has an incredible 98% open rate — ensuring your message is seen almost instantly. Businesses choose it for unmatched visibility and engagement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Automation, rich media, and interactive features make it ideal for campaigns of any scale.
              </p>
            </motion.div>

            {/* Personalized Messaging Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Personalized Messaging</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Deliver hyper-personalized messages including names, order details, purchase history, and product recommendations.
              </p>
            </motion.div>

            {/* Drive Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Drive Conversions Fast</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                WhatsApp messages lead directly to purchases, bookings, support chats, or website visits with one tap, driving significantly higher conversion rates.
              </p>
            </motion.div>
          </div>

          {/* BENEFITS GRID */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-10 mt-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">WhatsApp Marketing Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '98% Open Rates', desc: 'Messages are seen instantly, ensuring near-guaranteed reach.' },
                { title: 'Real-Time Communication', desc: 'Customers reply immediately, boosting engagement and satisfaction.' },
                { title: 'Rich Media Interaction', desc: 'Send images, videos, buttons, catalogs, and documents for impactful storytelling.' },
                { title: 'Automated Messaging', desc: 'Chatbots and flows handle marketing, support, and conversions automatically.' }
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

      {/* 📊 ANALYTICS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6 xl:px-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={InsideOffshoreImage}
              alt="WhatsApp Campaign Analytics"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-sky-800">Data-Driven Results</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Track delivery rates, read receipts, reply frequency, and conversion metrics to refine your messaging strategy and improve ROI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our analytics tools help you understand customer behaviors, messaging effectiveness, and timing — enabling smart data-backed decisions.
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
            Ready to Launch WhatsApp Campaigns?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us help you automate communication, increase engagement, and maximize conversions using WhatsApp.
          </p>
          <Link href="/contact">
            <button className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-sky-50 transition-all transform hover:-translate-y-1 duration-300">
              Contact Us Today
            </button>
          </Link>
        </motion.div>

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