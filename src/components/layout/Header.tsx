'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Image from 'next/image';

import creatorItLogo from '../../../Images/Creator_IT_Logo_5.png';


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (menu: string) =>
    setActiveDropdown(activeDropdown === menu ? null : menu);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const NavLink = ({
    href,
    children,
    onClick,
    className = '',
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }) => (
    <a
      href={href}
      onClick={onClick}
      className={`text-gray-800 hover:text-blue-600 font-medium transition-colors ${className}`}
    >
      {children}
    </a>
  );

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-12 flex items-center justify-between h-20">

        {/* -------------- LOGO SECTION (Left side) ---------------- */}
        <a href="/" className="flex items-center space-x-2">
          <Image
            src={creatorItLogo}
            alt="CreatorIt Logo"
            className="w-28 h-auto"
            priority
          />
        </a>

        {/* ------------------ DESKTOP NAVIGATION ------------------ */}
        <nav className="hidden xl:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>

          {/* Services MEGA MENU */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 font-medium flex items-center py-8">
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {/* Mega Menu Dropdown */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <div className="grid grid-cols-3 gap-0">
                {/* LEFT SECTION: Core Services */}
                <div className="col-span-2 p-8 border-r border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
                    Core Services
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Web Services Card */}
                    <a
                      href="/web-services"
                      className="p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group/card"
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">🌐</span>
                        <h4 className="text-sm font-bold text-gray-900 group-hover/card:text-blue-600">
                          Web Services
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Web Development, Design, E-commerce & More
                      </p>
                    </a>

                    {/* Digital Marketing Card */}
                    <a
                      href="/digital-marketing"
                      className="p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group/card"
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📈</span>
                        <h4 className="text-sm font-bold text-gray-900 group-hover/card:text-blue-600">
                          Digital Marketing
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        SEO, SEM, Social Media, Content & Email Marketing
                      </p>
                    </a>

                    {/* CMS Development Card */}
                    <a
                      href="/cms-development"
                      className="p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group/card"
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📝</span>
                        <h4 className="text-sm font-bold text-gray-900 group-hover/card:text-blue-600">
                          CMS Development
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        WordPress, Drupal, Joomla & Magento
                      </p>
                    </a>

                    {/* Software Development Card */}
                    <a
                      href="/software-development"
                      className="p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group/card"
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">💻</span>
                        <h4 className="text-sm font-bold text-gray-900 group-hover/card:text-blue-600">
                          Software Development
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Custom Software, Mobile Apps & Integration
                      </p>
                    </a>
                  </div>
                </div>

                {/* RIGHT SECTION: ERP Solutions - Now fully clickable */}
                <a
                  href="/erp-solutions"
                  className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col hover:from-blue-100 hover:to-purple-100 transition-all cursor-pointer group/erp rounded-r-xl"
                >
                  <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    ERP Solutions
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover/erp:text-blue-600 transition-colors">
                    Ready-to-Deploy Systems
                  </h4>
                  <p className="text-sm text-gray-600 mb-5">
                    Transform your business with our enterprise-ready solutions
                  </p>

                  <div className="space-y-2.5 mb-6 flex-grow">
                    <div className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Hospital Management
                    </div>
                    <div className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      School Management Pro
                    </div>
                    <div className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      CRM & HR Systems
                    </div>
                    <div className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      E-commerce Portals
                    </div>
                    <div className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      POS Systems
                    </div>
                    <div className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Travel & Job Portals
                    </div>
                    <div className="text-sm font-medium text-gray-500 mt-3">
                      And 15+ more...
                    </div>
                  </div>

                  <div className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover/erp:text-blue-700 mt-auto">
                    Explore All ERP Solutions
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/erp:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* About Dropdown - Enhanced */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 font-medium flex items-center py-8">
              About
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  About CreatorIT
                </h3>

                <div className="space-y-2">
                  <a
                    href="/about/why-us"
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all group/item"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-3 group-hover/item:bg-blue-200 transition-colors">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">
                        Why Us
                      </h4>
                      <p className="text-xs text-gray-500">Our unique value</p>
                    </div>
                  </a>

                  <a
                    href="/about/vision"
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all group/item"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mr-3 group-hover/item:bg-purple-200 transition-colors">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">
                        Vision & Mission
                      </h4>
                      <p className="text-xs text-gray-500">Our goals & purpose</p>
                    </div>
                  </a>

                  <a
                    href="/about/partners"
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all group/item"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mr-3 group-hover/item:bg-green-200 transition-colors">
                      <span className="text-xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">
                        Partners
                      </h4>
                      <p className="text-xs text-gray-500">Trusted collaborations</p>
                    </div>
                  </a>

                  <a
                    href="/faq"
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all group/item"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg mr-3 group-hover/item:bg-orange-200 transition-colors">
                      <span className="text-xl">❓</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">
                        FAQ
                      </h4>
                      <p className="text-xs text-gray-500">Common questions</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <NavLink href="/clients">Clients</NavLink>

          <a
            href="https://internshipandproject.creatorresearch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Careers
          </a>
        </nav>

        {/* ------------------ RIGHT SECTION (Desktop) ------------------ */}
        <div className="hidden xl:flex items-center space-x-6">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-md transition-all shadow-sm"
          >
            Quick Enquiry
          </a>

          <div className="flex items-center space-x-2 text-gray-800">
            <div className="bg-blue-50 p-2 rounded-full">
              <Phone className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">+91-9545415111</span>
              <span className="text-xs text-gray-500">Need Help? Call Us Now</span>
            </div>
          </div>
        </div>

        {/* ------------------ MOBILE MENU BUTTON ------------------ */}
        <button
          onClick={toggleMobileMenu}
          className="xl:hidden text-gray-700 hover:text-blue-600 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-20 right-0 h-full w-72 bg-white shadow-2xl transform 
        transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-3">
          <NavLink href="/" onClick={closeMobileMenu}>Home</NavLink>

          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full text-left text-gray-800 hover:text-blue-600 flex items-center justify-between font-medium py-2"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${
                activeDropdown === 'services' ? 'rotate-180' : ''
              }`} />
            </button>

            {activeDropdown === 'services' && (
              <div className="ml-3 mt-2 space-y-2">
                {[
                  { href: '/digital-marketing', label: 'Digital Marketing' },
                  { href: '/web-services', label: 'Web Services' },
                  { href: '/cms-development', label: 'CMS Development' },
                  { href: '/software-development', label: 'Software Development' },
                  { href: '/erp-solutions', label: 'ERP Solutions' },
                ].map((item, i) => (
                  <NavLink
                    key={i}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full text-left text-gray-800 hover:text-blue-600 flex items-center justify-between font-medium py-2"
            >
              About
              <ChevronDown className={`w-4 h-4 transition-transform ${
                activeDropdown === 'about' ? 'rotate-180' : ''
              }`} />
            </button>

            {activeDropdown === 'about' && (
              <div className="ml-3 mt-2 space-y-2">
                {[
                  { href: '/about/why-us', label: 'Why Us' },
                  { href: '/about/vision', label: 'Vision & Mission' },
                  { href: '/about/partners', label: 'Partners' },
                  { href: '/faq', label: 'FAQ' },
                ].map((item, i) => (
                  <NavLink
                    key={i}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/clients" onClick={closeMobileMenu}>
            Clients
          </NavLink>

          <a
            href="https://internshipandproject.creatorresearch.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Careers
          </a>

          <NavLink href="/contact" onClick={closeMobileMenu}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 top-20 xl:hidden"
        />
      )}
    </header>
  );
}
