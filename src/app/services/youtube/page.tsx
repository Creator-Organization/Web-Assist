'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BesideYoutubeImage from '../../../../Images/Beside_youtube_marketing.jpg';
import InsideEmailSEOImage from '../../../../Images/Inside_Email_and_SEO.png';

export default function YouTubeMarketingPage() {
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
            YouTube Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Grow your brand, increase engagement, and drive conversions with high-impact YouTube content and targeted video campaigns.
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
              <h2 className="text-3xl font-bold mb-4 text-sky-800">Reach Viewers Worldwide</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                YouTube marketing lets you tell your brand's story through video — the most engaging medium online. Our strategies help you gain subscribers, boost watch time, and turn viewers into loyal customers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From channel optimization to creative content planning and paid video ads, we craft campaigns that cut through the noise and deliver measurable growth.
              </p>
              <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 text-sky-900 rounded shadow p-5">
                <p className="italic mb-2">"Our subscriber growth doubled and conversions from video increased dramatically — best decision for our brand."</p>
                <p className="font-semibold">— Sarah Johnson, Marketing Director</p>
              </div>
            </motion.div>

            {/* RIGHT IMAGE (LOCAL IMPORT) */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center relative z-10"
            >
              <Image
                src={BesideYoutubeImage}
                alt="YouTube Marketing Strategy"
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
            {/* What is YouTube Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">What is YouTube Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                YouTube marketing uses video content to promote brands, products, and services. It leverages organic uploads, SEO-optimized titles/descriptions, and paid ads to increase visibility and engagement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With billions of active users, YouTube offers unmatched reach and the opportunity to build authentic connections through storytelling, tutorials, product demos, and brand films.
              </p>
            </motion.div>

            {/* Why Choose YouTube Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Why Choose YouTube Marketing?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Video content drives higher engagement and dwell time — both positive signals for brand awareness and conversions. YouTube integrates with Google Ads, enabling precise targeting and measurable results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you want to educate your audience, showcase products, or run targeted ad campaigns, YouTube provides flexible formats and analytics to optimize performance.
              </p>
            </motion.div>

            {/* Content Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Content Strategy</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We plan content that aligns with your audience's interests — from short-form hooks and tutorials to long-form explainers and product showcases. Each video is optimized for search and viewer retention.
              </p>
            </motion.div>

            {/* Drive Conversions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-sky-800 mb-6">Drive Conversions</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Use YouTube to funnel viewers to your website, landing pages, or product listings. With clear CTAs, end screens, and strategic ad placements, videos become a high-performing channel for lead generation and sales.
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
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">YouTube Marketing Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "High Engagement", desc: "Video content drives stronger emotional connections and longer attention spans." },
                { title: "Search Visibility", desc: "Optimized videos appear in both YouTube and Google search results." },
                { title: "Credibility Building", desc: "Showcase your expertise and build trust through consistent video content." },
                { title: "Flexible Formats", desc: "Use short shorts, tutorials, ads, and livestreams to reach different audience segments." }
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
              src={InsideEmailSEOImage}
              alt="YouTube Channel Analytics"
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
              Track watch time, audience retention, click-through rates, and conversions to refine your content and ad strategy. Our analytics help you understand what's resonating and where to invest next.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide comprehensive reporting and actionable insights so you can scale your channel and improve ROI from video marketing.
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
            Ready to Grow Your Channel?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let us help you create compelling videos and strategic campaigns that turn viewers into customers.
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
