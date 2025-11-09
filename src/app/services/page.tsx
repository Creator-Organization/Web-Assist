import Link from 'next/link';
import { TrendingUp, Globe, Database, Cpu, Award, Zap, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const categories = [
    {
      title: 'Digital Marketing Services',
      description:
        'Comprehensive digital marketing solutions including SEO, SEM, email marketing, and content strategy',
      href: '/digital-marketing',
      services: [
        'Email Marketing',
        'SEO',
        'SEM',
        'Content Marketing',
        'Google Marketing',
        'Online Surveys',
        'Classifieds',
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600',
    },
    {
      title: 'Web Services',
      description:
        'Complete web solutions from design to development, creating exceptional online experiences',
      href: '/web-services',
      services: [
        'Web Design',
        'Web Development',
        'Interactive Design',
        'E-commerce',
        'Logo Design',
      ],
      icon: <Globe className="w-8 h-8" />,
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600',
    },
    {
      title: 'CMS Development',
      description:
        'Expert content management system development for easy content control',
      href: '/cms-development',
      services: ['WordPress', 'Joomla', 'Drupal', 'Magento'],
      icon: <Database className="w-8 h-8" />,
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600',
    },
    {
      title: 'Software Development',
      description:
        'Custom software solutions and mobile applications that drive business innovation',
      href: '/software-development',
      services: ['Mobile Apps', 'Custom Software', 'Offshore Development'],
      icon: <Cpu className="w-8 h-8" />,
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600',
    },
  ];

  // Soft pastel backgrounds for alternating sections
  const bgColors = ['bg-rose-50', 'bg-green-50', 'bg-indigo-50', 'bg-amber-50'];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Comprehensive digital solutions to help your business succeed online
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">25+</div>
              <div className="text-gray-600">Services Offered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Nextwebi style */}
      <section className="py-16">
        <div className="container mx-auto px-6 xl:px-16 space-y-16">
          {categories.map((category, index) => (
            <div
              key={category.href}
              className={`rounded-xl shadow-md p-10 md:p-14 ${bgColors[index % bgColors.length]} transition-transform duration-300 hover:shadow-xl`}
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* TEXT SIDE */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 shadow-sm">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-semibold text-sky-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2 mb-8">
                    {category.services.map((service, i) => (
                      <span
                        key={i}
                        className="text-gray-800 font-medium hover:text-sky-700 transition-colors flex items-start gap-2"
                      >
                        <span className="text-sky-600 mt-1">▪</span>
                        <span className="underline decoration-sky-200 hover:decoration-sky-400">
                          {service}
                        </span>
                      </span>
                    ))}
                  </div>
                  <Link
                    href={category.href}
                    className="inline-flex items-center text-sky-700 font-semibold hover:text-sky-900 transition-colors"
                  >
                    Explore Services
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* IMAGE SIDE */}
                <div className="flex justify-center md:justify-end">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="rounded-xl shadow-lg w-full max-w-[420px] md:max-w-[500px] transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE CREATORIT */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose CreatorIt
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-700">
                Experienced professionals dedicated to delivering exceptional
                results.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-700">
                Efficient processes that ensure timely project completion.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Assured
              </h3>
              <p className="text-gray-700">
                Rigorous quality checks to guarantee outstanding outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
