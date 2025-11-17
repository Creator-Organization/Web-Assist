'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Shield, Clock, TrendingUp, Users, Database, Headphones, ArrowRight, Building2, GraduationCap, Heart, ShoppingCart, Briefcase, FileText, Plane, MessageSquare, Award, Server, Laptop } from 'lucide-react';

// Local Image
import HeroServicesImage from '../../../Images/Hero_Services.png';

export default function ErpSolutionsPage() {
  
  const erpProjects = [
    {
      name: "Advance Support Ticket System",
      description: "Streamline customer support with intelligent ticket routing, automated responses, and comprehensive analytics dashboard.",
      icon: Headphones,
      features: ["Automated Routing", "Analytics Dashboard", "Multi-channel Support"]
    },
    {
      name: "Advocate Management System",
      description: "Complete legal practice management with case tracking, client management, billing, and document automation.",
      icon: Award,
      features: ["Case Tracking", "Client Portal", "Document Automation"]
    },
    {
      name: "Courier and Logistics Management System",
      description: "Real-time package tracking, route optimization, fleet management, and automated delivery notifications.",
      icon: TrendingUp,
      features: ["Real-time Tracking", "Route Optimization", "Fleet Management"]
    },
    {
      name: "CRM Software Pro Version",
      description: "Advanced customer relationship management with sales pipeline, lead scoring, and marketing automation.",
      icon: Database,
      features: ["Sales Pipeline", "Lead Scoring", "Marketing Automation"]
    },
    {
      name: "Ecommerce Portal (Multiple Vendor)",
      description: "Full-featured marketplace with vendor onboarding, payment gateway integration, and inventory management.",
      icon: ShoppingCart,
      features: ["Multi-vendor", "Payment Gateway", "Inventory Control"]
    },
    {
      name: "Gym Management and Fitness Management System",
      description: "Member management, class scheduling, payment processing, and fitness tracking with mobile app integration.",
      icon: Zap,
      features: ["Member Portal", "Class Scheduling", "Mobile App"]
    },
    {
      name: "Hospital Management System",
      description: "Comprehensive healthcare solution with patient records, appointment scheduling, billing, and pharmacy integration.",
      icon: Heart,
      features: ["Patient Records", "Appointment System", "Pharmacy Integration"]
    },
    {
      name: "HR Management System",
      description: "Complete HR suite with payroll, attendance, leave management, performance reviews, and employee self-service portal.",
      icon: Users,
      features: ["Payroll", "Attendance", "Performance Management"]
    },
    {
      name: "Matrimonial Web Portal + Admin Panel",
      description: "Feature-rich matchmaking platform with advanced search, profile verification, and secure messaging system.",
      icon: CheckCircle,
      features: ["Profile Verification", "Advanced Search", "Secure Messaging"]
    },
    {
      name: "News Portal with Admin Panel",
      description: "Dynamic content management with multi-category support, SEO optimization, and real-time publishing capabilities.",
      icon: FileText,
      features: ["CMS", "SEO Optimized", "Real-time Publishing"]
    },
    {
      name: "Online Classes & Tutorial Web Portal",
      description: "E-learning platform with video streaming, assignment management, progress tracking, and interactive assessments.",
      icon: GraduationCap,
      features: ["Video Streaming", "Assessments", "Progress Tracking"]
    },
    {
      name: "Online Exam Web Portal + Admin Panel",
      description: "Secure examination system with question bank, auto-grading, proctoring features, and detailed analytics.",
      icon: Shield,
      features: ["Question Bank", "Auto-grading", "Proctoring"]
    },
    {
      name: "Online Job Portal + Admin Panel",
      description: "Comprehensive recruitment platform with resume parsing, applicant tracking, and employer dashboards.",
      icon: Briefcase,
      features: ["Resume Parsing", "Applicant Tracking", "Employer Dashboard"]
    },
    {
      name: "Pharmacy Management System",
      description: "Complete pharmacy solution with inventory control, prescription management, billing, and regulatory compliance.",
      icon: Heart,
      features: ["Inventory Control", "Prescription Management", "Compliance"]
    },
    {
      name: "Point of Sales System (POS)",
      description: "Modern POS with inventory tracking, sales analytics, customer management, and multi-payment support.",
      icon: ShoppingCart,
      features: ["Inventory Tracking", "Sales Analytics", "Multi-payment"]
    },
    {
      name: "POS System for Restaurants",
      description: "Restaurant-specific POS with table management, kitchen display system, menu customization, and delivery integration.",
      icon: Building2,
      features: ["Table Management", "KDS", "Delivery Integration"]
    },
    {
      name: "Project Management Software (Ultimate)",
      description: "Enterprise project management with task tracking, team collaboration, time logging, and resource allocation.",
      icon: TrendingUp,
      features: ["Task Tracking", "Team Collaboration", "Resource Management"]
    },
    {
      name: "Real Estate System",
      description: "Property listing and management platform with virtual tours, lead management, and transaction tracking.",
      icon: Building2,
      features: ["Property Listings", "Virtual Tours", "Lead Management"]
    },
    {
      name: "School Management System Pro Version",
      description: "Complete school administration with student records, fee management, timetabling, and parent communication portal.",
      icon: GraduationCap,
      features: ["Student Records", "Fee Management", "Parent Portal"]
    },
    {
      name: "Tour & Travel Portal with Admin Panel",
      description: "Travel booking system with package management, itinerary builder, payment processing, and customer reviews.",
      icon: Plane,
      features: ["Package Management", "Booking System", "Reviews"]
    },
    {
      name: "Web To APK Converter",
      description: "Convert your web applications into native Android APKs with push notifications and offline support.",
      icon: Laptop,
      features: ["Web to Mobile", "Push Notifications", "Offline Support"]
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and real-time performance"
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "Get up and running in days, not months"
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Intuitive interface with minimal training required"
    }
  ];

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
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium">20+ Ready-to-Deploy Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg">
            ERP Solutions by CreatorIt
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-center drop-shadow">
            Advanced, scalable and fully-customizable ERP systems tailored for every business domain
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="group cursor-default">
              <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">20+</div>
              <div className="text-gray-600 font-medium">ERP Modules</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-gray-600 font-medium">Enterprise Deployments</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">99%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE + TEXT ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                Enterprise Grade
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Complete Enterprise Automation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Our ERP solutions are engineered for industries like healthcare, logistics,
                education, real estate, retail, and more. Each system is optimized for speed,
                security, and real-time performance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Whether you want a ready-made system or a fully customized enterprise platform,
                CreatorIt delivers scalable and robust ERP systems with end-to-end functionality.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-2xl opacity-20"></div>
                <Image
                  src={HeroServicesImage}
                  alt="ERP System Illustration"
                  width={600}
                  height={450}
                  className="relative rounded-lg shadow-2xl w-full max-w-[400px] md:max-w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ERP PROJECT LIST ================= */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-6 xl:px-16 max-w-7xl">

          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Our Complete ERP Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our extensive collection of industry-specific ERP systems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="
                    group relative
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-md
                    border border-gray-200
                    hover:shadow-2xl
                    hover:border-blue-500
                    transition-all duration-300
                    hover:-translate-y-2
                    cursor-pointer
                    flex flex-col
                    h-full
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
                    w-16 h-16 
                    bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 
                    rounded-xl 
                    flex items-center justify-center 
                    mb-4
                    group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white
                    group-hover:scale-110 group-hover:rotate-3
                    transition-all duration-300
                    shadow-sm
                  ">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition leading-tight">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto pt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need a Custom ERP for Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's build a powerful ERP solution tailored specifically for your needs. Our team of experts is ready to transform your business operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Contact Us Today
                </button>
              </Link>
              <Link href="/clients">
                <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 border border-white/30">
                  View Our Clients
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}