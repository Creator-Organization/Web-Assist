'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, DollarSign, Code, Search, ServerCog, Wrench } from 'lucide-react';

export default function AgileProcessSection() {
  const steps = [
    {
      title: 'Scoping',
      description:
        'We gather complete project requirements, define scope, and plan milestones for smooth execution.',
      icon: <ClipboardCheck className="w-7 h-7 text-sky-700" />,
    },
    {
      title: 'Cost Estimation',
      description:
        'Transparent module-wise cost estimation ensuring resource optimization and budget efficiency.',
      icon: <DollarSign className="w-7 h-7 text-sky-700" />,
    },
    {
      title: 'Development',
      description:
        'We follow agile sprints to iteratively build and refine your solution for optimal performance.',
      icon: <Code className="w-7 h-7 text-sky-700" />,
    },
    {
      title: 'QA & Testing',
      description:
        'Comprehensive testing ensures top-notch quality, functionality, and security at every stage.',
      icon: <Search className="w-7 h-7 text-sky-700" />,
    },
    {
      title: 'Deployment',
      description:
        'Seamless deployment with minimal downtime and complete environment integration.',
      icon: <ServerCog className="w-7 h-7 text-sky-700" />,
    },
    {
      title: 'Maintenance',
      description:
        'We provide continuous monitoring, updates, and technical support to keep your system running flawlessly.',
      icon: <Wrench className="w-7 h-7 text-sky-700" />,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="relative py-20 bg-[#f3f6fb] overflow-hidden font-inter">
      <div className="container mx-auto px-6 xl:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Agile Process.
            </h2>
            <h3 className="text-2xl font-semibold text-sky-600 mb-6">
              Simple, Seamless, Streamlined
            </h3>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              We follow a structured and agile methodology to ensure efficient,
              transparent, and high-quality delivery at every stage — from
              planning to deployment.
            </p>

            {/* FLOW DIAGRAM */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className={`px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold ${
                      index === activeStep
                        ? 'bg-sky-600 text-white shadow-md'
                        : 'bg-white text-gray-800'
                    } transition-all duration-300`}
                  >
                    {step.title}
                  </div>
                  {index !== steps.length - 1 && (
                    <span className="text-sky-400 text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Animated Circular Process */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dotted border-sky-300 flex items-center justify-center">
              {steps.map((step, index) => {
                const angle = (index / steps.length) * 2 * Math.PI;
                const radius = 180; // move icons slightly outward
const x = Math.cos(angle) * radius;
const y = Math.sin(angle) * radius - 15; // pushes icons slightly upward visually


                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x,
                      y,
                      scale: activeStep === index ? 1.2 : 1,
                      boxShadow:
                        activeStep === index
                          ? '0px 0px 20px rgba(56, 189, 248, 0.6)'
                          : '0px 0px 0px rgba(0,0,0,0)',
                    }}
                    transition={{ duration: 0.8 }}
                    className={`absolute w-16 h-16 rounded-xl flex items-center justify-center ${
                      activeStep === index
                        ? 'bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg'
                        : 'bg-white shadow-md'
                    }`}
                  >
                    {step.icon}
                  </motion.div>
                );
              })}

              {/* CENTER TEXT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute text-center max-w-xs px-6"
                >
                  {steps[activeStep] && (
  <>
    <h3 className="text-2xl font-semibold text-sky-700 mb-2">
      {steps[activeStep].title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      {steps[activeStep].description}
    </p>
  </>
)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* DECORATIVE BLURS */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-sky-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/40 rounded-full blur-3xl"></div>
    </section>
  );
}
