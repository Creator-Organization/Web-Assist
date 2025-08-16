'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Zap, Users, Code, HeadphonesIcon } from 'lucide-react';

const valuePropositions = [
  'Security & DDoS Protection',
  'Data Privacy & Confidentiality',
  '99.9% Uptime Guarantee',
  'Custom-Built Solutions',
  'Post-Launch Support',
];

export function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = valuePropositions[currentIndex];
    
    if (!targetText) return; // Safety check
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % valuePropositions.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-primary-800/10 to-accent-500/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 container-max section-padding text-center text-white">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="block">WebAssist</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
            Professional Web Development Services
          </p>
        </motion.div>

        {/* Typing animation section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-2xl md:text-3xl font-semibold mb-4">
            We provide
          </div>
          <div className="h-16 flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-bold text-accent-300">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        {/* Feature icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center space-y-2">
            <Shield className="h-8 w-8 text-accent-300" />
            <span className="text-sm text-blue-100">Secure</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Zap className="h-8 w-8 text-accent-300" />
            <span className="text-sm text-blue-100">Fast</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Users className="h-8 w-8 text-accent-300" />
            <span className="text-sm text-blue-100">Reliable</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Code className="h-8 w-8 text-accent-300" />
            <span className="text-sm text-blue-100">Modern</span>
          </div>
          <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1">
            <HeadphonesIcon className="h-8 w-8 text-accent-300" />
            <span className="text-sm text-blue-100">Supported</span>
          </div>
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
          >
            Start Your Project
          </button>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-900"
          >
            Learn More
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center"
        >
          <button
            onClick={scrollToContact}
            className="animate-bounce focus:outline-none group"
            aria-label="Scroll to contact section"
          >
            <ChevronDown className="h-8 w-8 text-white/70 group-hover:text-white transition-colors" />
          </button>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}