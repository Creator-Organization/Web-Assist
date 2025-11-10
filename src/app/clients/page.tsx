import Link from 'next/link';
import Image from 'next/image';


// --- Client Logos ---
import swiggyLogo from '../../../Images/clients/client_swiggy.png';
import kennametalLogo from '../../../Images/clients/client_Kennametal.png';
import ifbLogo from '../../../Images/clients/client_IFB.png';
import jainLogo from '../../../Images/clients/client_Jain.png';
import mylogicLogo from '../../../Images/clients/client_MyLogic.png';
import adda52Logo from '../../../Images/clients/client_Adda52.png';

// --- Industries We Serve Images ---
import ecommerceImage from '../../../Images/Industries_We_Serve/E-commerce.jpg';
import healthcareImage from '../../../Images/Industries_We_Serve/Healthcare.jpg';
import educationImage from '../../../Images/Industries_We_Serve/Education.jpg';
import financeImage from '../../../Images/Industries_We_Serve/Finance.jpg';
import realEstateImage from '../../../Images/Industries_We_Serve/Real-Estate.jpg';
import technologyImage from '../../../Images/Industries_We_Serve/Technology.jpg';
import professionalServicesImage from '../../../Images/Industries_We_Serve/Professional-Services.jpg';
import manufacturingImage from '../../../Images/Industries_We_Serve/Manufacturing.jpg';
import hospitalityImage from '../../../Images/Industries_We_Serve/Hospitality.jpg';

export default function ClientsPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-[1]" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Our valuable Clients</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Trusted by businesses across various industries
          </p>
        </div>
      </section>

      {/* Text + Logo Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our valuable Clients</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                CreatorIt has an impressive list of clients on its roster, which pays testimony to the high quality, timeliness and value of our work. We have worked with businesses ranging from startups to established enterprises across various industries.

Our clients trust us to help them achieve their digital goals and grow their online presence with cutting-edge solutions and dedicated support.
              </p>
              <a href="/clients">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  View More Clients
                </button>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { logo: swiggyLogo, name: 'Swiggy' },
                { logo: kennametalLogo, name: 'Kennametal' },
                { logo: ifbLogo, name: 'IFB' },
                { logo: jainLogo, name: 'Jain' },
                { logo: mylogicLogo, name: 'MyLogic' },
                { logo: adda52Logo, name: 'Adda52' }
              ].map((client, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { image: ecommerceImage, title: 'E-commerce', desc: 'Online retail and marketplace solutions' },
                { image: healthcareImage, title: 'Healthcare', desc: 'Medical and healthcare technology platforms' },
                { image: educationImage, title: 'Education', desc: 'Learning management and educational tools' },
                { image: financeImage, title: 'Finance', desc: 'Financial services and fintech applications' },
                { image: realEstateImage, title: 'Real Estate', desc: 'Property management and listing platforms' },
                { image: technologyImage, title: 'Technology', desc: 'SaaS products and tech startups' },
                { image: professionalServicesImage, title: 'Professional Services', desc: 'Consulting and business services' },
                { image: manufacturingImage, title: 'Manufacturing', desc: 'Industrial and manufacturing solutions' },
                { image: hospitalityImage, title: 'Hospitality', desc: 'Hotels, restaurants, and travel services' }
              ].map((industry, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{industry.title}</h3>
                    <p className="text-gray-700">{industry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"CreatorIt transformed our online presence completely. Their attention to detail and commitment to excellence is unmatched."</p>
                <p className="text-gray-900 font-semibold">Sarah Johnson</p>
                <p className="text-gray-600">CEO, TechStart Inc.</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"Professional, reliable, and always delivers on time. CreatorIt has been an invaluable partner in our digital journey."</p>
                <p className="text-gray-900 font-semibold">Michael Chen</p>
                <p className="text-gray-600">Director, Global Retail Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Join Our Growing Client Family</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business succeed
          </p>
          <Link href="/contact">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}