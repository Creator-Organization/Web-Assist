'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

// Local Image
import HeroServicesImage from '../../../Images/Hero_Services.png';

export default function ErpSolutionsPage() {
  
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20 z-[1]" />

        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center drop-shadow-lg">
            ERP Solutions by CreatorIt
          </h1>
          <p className="text-xl max-w-3xl text-center drop-shadow">
            Advanced, scalable and fully-customizable ERP systems tailored for every business domain
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">ERP Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Enterprise Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE + TEXT ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Complete Enterprise Automation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our ERP solutions are engineered for industries like healthcare, logistics,
                education, real estate, retail, and more. Each system is optimized for speed,
                security, and real-time performance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you want a ready-made system or a fully customized enterprise platform,
                CreatorIt delivers scalable and robust ERP systems with end-to-end functionality.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src={HeroServicesImage}
                alt="ERP System Illustration"
                width={600}
                height={450}
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* ================= ERP PROJECT LIST ================= */}
      {/* ================= ALL ERP PROJECTS (PREMIUM HIGHLIGHT GRID) ================= */}
<section className="py-20 bg-gradient-to-b from-white to-gray-100">
  <div className="container mx-auto px-6 xl:px-16 max-w-6xl">

    <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">
      Our Complete ERP Solutions
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        "Advance Support Ticket System",
        "Advocate Management System",
        "Courier and Logistics Management System",
        "CRM Software Pro Version",
        "Ecommerce Portal (Multiple Vendor)",
        "Gym Management and Fitness Management System",
        "Hospital Management System",
        "HR Management System",
        "Matrimonial Web Portal + Admin Panel",
        "News Portal with Admin Panel",
        "Online Classes & Tutorial Web Portal",
        "Online Exam Web Portal + Admin Panel",
        "Online Job Portal + Admin Panel",
        "Pharmacy Management System",
        "Point of Sales System (POS)",
        "POS System for Restaurants",
        "Project Management Software (Ultimate)",
        "Real Estate System",
        "School Management System Pro Version",
        "Tour & Travel Portal with Admin Panel",
        "Web To APK Converter",
      ].map((project, index) => (
        <div
          key={index}
          className="
            group relative
            bg-white
            rounded-2xl
            p-6
            shadow-lg
            border
            hover:shadow-2xl
            hover:border-blue-500
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          {/* Glow Background */}
          <div className="
            absolute inset-0 
            rounded-2xl 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-300 
            bg-gradient-to-r from-blue-200/40 to-blue-400/40 
            blur-xl 
            -z-10
          "></div>

          {/* Icon */}
          <div className="
            w-14 h-14 
            bg-blue-100 text-blue-600 
            rounded-xl 
            flex items-center justify-center 
            mb-5
            group-hover:bg-blue-600 group-hover:text-white
            group-hover:scale-110
            transition-all duration-300
          ">
            <CheckCircle className="w-8 h-8" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
            {project}
          </h3>

          {/* Auto description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            A complete smart ERP solution crafted for modern businesses, workflow automation, and enterprise efficiency.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Need a Custom ERP for Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's build a powerful ERP solution tailored specifically for your needs.
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 hover:-translate-y-1 shadow">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
