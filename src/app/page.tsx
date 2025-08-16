// src/app/page.tsx
import { HeroSection } from '@/components/sections/hero-section';
import { TechStackSelector } from '@/components/tech-stack/TechStackSelector';
import { CloudPlatforms } from '@/components/cloud-platforms/CloudPlatforms';
import { ProcessTimeline } from '@/components/process/ProcessTimeline';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Tech Stack Selection Section */}
      <TechStackSelector />
      
      {/* Cloud Platform Education Section */}
      <CloudPlatforms />
      
      {/* Process Timeline Section */}
      <ProcessTimeline />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}