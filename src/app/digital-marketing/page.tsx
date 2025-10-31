import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, BarChart } from 'lucide-react';

// --- Logo Imports ---
import emailMarketingLogo from '../../../Images/Email_Marketing.png';
import seoServicesLogo from '../../../Images/seo_services.png';
import searchEngineMarketingLogo from '../../../Images/search_engine_marketing.png';
import contentMarketingLogo from '../../../Images/content_marketing.png';
import googleMarketingLogo from '../../../Images/Google_marketing.png';
import onlineSurveysLogo from '../../../Images/Online_services.png';
import classifiedServicesLogo from '../../../Images/Classified_Services.png';

// --- New Image Imports (for the service sections) ---
import besideEmailMarketing from '../../../Images/Beside_Email_Marketing.png';
// I'm assuming you wanted to add images for the rest of the services.
// Please verify the paths for these images:
import besideSeoServices from '../../../Images/Beside_SEO_Services&_Drupal_Development.png'; // Reusing a path from the first request based on name similarity
import besideSearchEngineMarketing from '../../../Images/Beside_Search_Engine_Marketing.png';
import besideContentMarketing from '../../../Images/Beside_Content_Marketing.png';
import besideGoogleMarketing from '../../../Images/Beside_Google_Marketing.png';
import besideOnlineSurveys from '../../../Images/Beside_Online_Surveys.png';
import besideClassifiedServices from '../../../Images/Beside_Classified_Services.png';


export default function DigitalMarketingPage(): JSX.Element {
  // Define a common image size for consistency (400x300 for a wide aspect ratio)
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 300;
    
  const services = [
    {
      title: 'Email Marketing',
      description: 'Build customer loyalty and enhance brand recognition through targeted email campaigns that convert subscribers into customers',
      href: '/services/email-marketing',
      icon: <Image src={emailMarketingLogo} alt="Email Marketing" className="w-12 h-12 object-contain" />,
      image: besideEmailMarketing
    },
    {
      title: 'SEO Services',
      description: 'Professional search engine optimization to boost your rankings and increase organic traffic with proven strategies',
      href: '/services/seo',
      icon: <Image src={seoServicesLogo} alt="SEO Services" className="w-12 h-12 object-contain" />,
      image: besideSeoServices
    },
    {
      title: 'Search Engine Marketing',
      description: 'Strategic paid search campaigns with Google Ads and performance-driven marketing for immediate results',
      href: '/services/sem',
      icon: <Image src={searchEngineMarketingLogo} alt="Search Engine Marketing" className="w-12 h-12 object-contain" />,
      image: besideSearchEngineMarketing
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation that drives engagement and builds your brand presence across all channels',
      href: '/services/content-marketing',
      icon: <Image src={contentMarketingLogo} alt="Content Marketing" className="w-12 h-12 object-contain" />,
      image: besideContentMarketing
    },
    {
      title: 'Google Marketing',
      description: 'Comprehensive Google marketing including Ads, My Business, and search visibility optimization',
      href: '/services/google-marketing',
      icon: <Image src={googleMarketingLogo} alt="Google Marketing" className="w-12 h-12 object-contain" />,
      image: besideGoogleMarketing
    },
    {
      title: 'Online Surveys',
      description: 'Professional survey creation and market research tools for valuable customer insights and data',
      href: '/services/online-surveys',
      icon: <Image src={onlineSurveysLogo} alt="Online Surveys" className="w-12 h-12 object-contain" />,
      image: besideOnlineSurveys
    },
    {
      title: 'Classified Services',
      description: 'Professional classified ad posting and directory listing services to expand your reach',
      icon: <Image src={classifiedServicesLogo} alt="Classified Services" className="w-12 h-12 object-contain" />,
      href: '/services/classifieds',
      image: besideClassifiedServices
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Digital Marketing Services</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Comprehensive digital marketing solutions to grow your online presence and reach your target audience
          </p>
        </div>
      </section>

     

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">300+</div>
              <div className="text-gray-600">Campaigns Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">250%</div>
              <div className="text-gray-600">Avg ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Campaign Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Transform Your Digital Presence</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our digital marketing services help businesses of all sizes reach their target audience, increase brand awareness, and drive measurable results. From search engine optimization to email marketing, we provide comprehensive solutions tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      

      {/* Services with Alternating Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div key={service.href} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  {/* Icon rendering */}
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  {/* UPDATED: Use Next.js Image component for consistency and size control */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    // Apply explicit width and height for static images (Next.js requirement)
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="rounded-lg shadow-lg w-full h-auto max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '400px', // Replicate your max-width class
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Digital Marketing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Results</h3>
                <p className="text-gray-700">Every campaign is backed by analytics and continuous optimization for maximum ROI</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Strategies</h3>
                <p className="text-gray-700">Tested marketing strategies that have delivered results across multiple industries</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Transparency</h3>
                <p className="text-gray-700">Detailed reporting and regular updates on campaign performance and progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Boost Your Online Presence?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our digital marketing experts create a strategy that drives results
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}