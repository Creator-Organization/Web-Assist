// src/app/page.tsx
import { HeroSection } from '@/components/sections/hero-section';
import { TechStackSelector } from '@/components/tech-stack/TechStackSelector';
import { CloudPlatforms } from '@/components/cloud-platforms/CloudPlatforms';
import { ProcessTimeline } from '@/components/process/ProcessTimeline';
import { TestimonialsSection } from '@/components/testimonials';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateTestimonialsStructuredData } from '@/lib/seo';
import { getFeaturedTestimonials } from '@/lib/testimonials';

export default async function HomePage() {
  // Fetch testimonials for structured data
  let testimonialsStructuredData = null;
  try {
    const testimonials = await getFeaturedTestimonials(6);
    if (testimonials.length > 0) {
      testimonialsStructuredData = generateTestimonialsStructuredData(testimonials);
    }
  } catch (error) {
    console.log('Could not fetch testimonials for structured data:', error);
  }

  return (
    <main className="min-h-screen">
      {/* Structured Data for Testimonials */}
      {testimonialsStructuredData && (
        <StructuredData data={testimonialsStructuredData} />
      )}
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Tech Stack Selection Section */}
      <TechStackSelector />
      
      {/* Cloud Platform Education Section */}
      <CloudPlatforms />
      
      {/* Process Timeline Section */}
      <ProcessTimeline />
      
      {/* Testimonials Section - NEW in Phase 3 */}
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from the businesses we've helped transform their digital presence."
        maxDisplay={6}
        showFeaturedOnly={false}
      />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}