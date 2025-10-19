// src/components/sections/hero-section.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Shield, Zap, Users, Code, HeadphonesIcon} from 'lucide-react';
import { DisplayText, HeadlineText, BodyText } from '@/components/ui/Typography';
import { AppleButton } from '@/components/ui/AppleButton';
import { AppleCard } from '@/components/ui/AppleCard';

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
    
    if (!targetText) return;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container-apple relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/6 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">
              <Sparkles size={16} />
              Professional Web Development Services in India
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <DisplayText className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold hero-text-strong">
              <span className="block">WebAssist</span>
            </DisplayText>
            <HeadlineText className="mb-6 hero-text-muted font-normal text-2xl md:text-3xl lg:text-4xl">
              Professional Web Development Services
            </HeadlineText>
          </motion.div>

          {/* Typing Animation Section */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="text-2xl md:text-3xl font-semibold mb-4 hero-text-muted">
              We provide
            </div>
            <div className="h-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-bold text-accent-500">
                {currentText}
                <span className="animate-pulse text-primary-500">|</span>
              </span>
            </div>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-accent-500" />
              <span className="text-sm text-neutral-600">Secure</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Zap className="h-8 w-8 text-accent-500" />
              <span className="text-sm text-neutral-600">Fast</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-8 w-8 text-accent-500" />
              <span className="text-sm text-neutral-600">Reliable</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Code className="h-8 w-8 text-accent-500" />
              <span className="text-sm text-neutral-600">Modern</span>
            </div>
            <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1">
              <HeadphonesIcon className="h-8 w-8 text-accent-500" />
              <span className="text-sm text-neutral-600">Supported</span>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-6 hero-text-muted">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                <span>₹50,000 - ₹5,00,000 Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>2-12 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AppleButton 
                variant="primary" 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-apple-lg group"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </AppleButton>
              
              <AppleButton 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform" />
                Learn More
              </AppleButton>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <AppleCard variant="glass" padding="md" className="text-center hero-panel">
                <DisplayText className="text-3xl text-primary-600 mb-2">150+</DisplayText>
                <BodyText className="text-neutral-600">Projects Delivered</BodyText>
              </AppleCard>
              
              <AppleCard variant="glass" padding="md" className="text-center hero-panel">
                <DisplayText className="text-3xl text-secondary-600 mb-2">98%</DisplayText>
                <BodyText className="text-neutral-600">Client Satisfaction</BodyText>
              </AppleCard>
              
              <AppleCard variant="glass" padding="md" className="text-center hero-panel">
                <DisplayText className="text-3xl text-accent-600 mb-2">24hr</DisplayText>
                <BodyText className="text-neutral-600">Response Time</BodyText>
              </AppleCard>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-neutral-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            className="w-1 h-8 bg-neutral-300 rounded-full"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}