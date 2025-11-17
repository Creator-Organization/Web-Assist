'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BesideVoiceImage from '../../../../Images/Beside_voice_marketing.jpg';
import BesideSEOImage from '../../../../Images/Beside_SEO_Services_and_Drupal_Development.png';

export default function VoiceMarketingPage() {
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
            Voice Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Connect with audiences instantly using personalized voice messages, interactive audio campaigns, and automated voice outreach.
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
              <h2 className="text-3xl font-bold mb-4 text-sky-800">Reach Customers Through Voice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Voice marketing enables businesses to deliver messages in the most human and impactful way — through sound. From voice calls to AI-generated messaging, brands can communicate clearly and personally.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you want reminders, promotions, verifications, or personalized greetings, voice campaigns ensure instant delivery and high engagement.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 text-sky-900 rounded shadow p-5">
                <p className="italic mb-2">"Our engagement rate doubled after switching to voice campaigns — customers respond faster and more naturally."</p>
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
                src={BesideVoiceImage}
                alt="Voice Marketing Strategy"
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

            {/* What is Voice Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">What is Voice Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Voice marketing uses automated or personalized voice messages to communicate directly with customers. It's fast, effective, and reaches audiences through mobile calls, IVR systems, and AI voice assistants.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It’s ideal for promotions, alerts, reminders, surveys, OTP verifications, and customer engagement — all delivered through rich audio messaging.
              </p>
            </motion.div>

            {/* Why Choose Voice Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Why Choose Voice Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Voice has the highest recall rate — people remember spoken messages more than text. It creates emotional connection and ensures clear delivery.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Businesses use voice marketing for instant communication, wide reach, high engagement, and greater personalization.
              </p>
            </motion.div>

            {/* Personalized Voice Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Personalized Voice Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tailor voice messages to demographics, language preferences, and customer behavior. Add human-like tone, pacing, and personalization for maximum impact.
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
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Drive Conversions</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Voice campaigns can trigger instant actions — callbacks, purchases, confirmations, or website visits. With clear CTAs, brands achieve higher response rates compared to text-based marketing.
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
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">Voice Marketing Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Higher Recall", desc: "Spoken messages are more memorable and impactful than plain text." },
                { title: "Immediate Attention", desc: "Voice captures attention instantly — ideal for time-sensitive offers and alerts." },
                { title: "Human Connection", desc: "Audio conveys emotion and personality, building stronger brand rapport." },
                { title: "Automation Friendly", desc: "Automated IVR, voice bots, and scheduled calls scale outreach efficiently." }
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
              src={BesideSEOImage}
              alt="Voice Campaign Analytics"
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
              Monitor answer rates, call completions, engagement duration, and conversion lifts from voice campaigns to optimize scripts and timings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our reporting helps you understand response behaviors, ideal send windows, and which messages convert best — so you can scale the most effective campaigns.
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
            Ready to Activate Voice Campaigns?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us build voice-first experiences that increase engagement, speed up responses, and deliver measurable ROI.
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
