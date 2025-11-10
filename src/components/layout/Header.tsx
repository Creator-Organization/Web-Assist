'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Image from 'next/image'; // ✅ Added this import for optimized image handling
import creatorItLogo from '../../../Images/creatorit-logo4.png'; // ✅ Added your local logo path

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
        {/* ✅ Only this logo section is updated */}
        <a href="/" className="flex items-center">
          <Image
            src={creatorItLogo}
            alt="CreatorIt Logo"
            className="w-28 h-auto"
            priority
          />
        </a>

        {/* Rest of your code remains EXACTLY the same */}
        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 font-medium flex items-center">
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {[
                { href: '/digital-marketing', label: 'Digital Marketing' },
                { href: '/web-services', label: 'Web Services' },
                { href: '/cms-development', label: 'CMS Development' },
                { href: '/software-development', label: 'Software Development' },
              ].map((item, i) => (
                <NavLink
                  key={i}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 font-medium flex items-center">
              About
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {[
                { href: '/about/why-us', label: 'Why Us' },
                { href: '/about/vision', label: 'Vision & Mission' },
                { href: '/about/partners', label: 'Partners' },
                { href: '/faq', label: 'FAQ' },
              ].map((item, i) => (
                <NavLink
                  key={i}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink href="/clients">Clients</NavLink>
          <NavLink href="/careers">Careers</NavLink>
        </nav>

        {/* Right Section */}
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

        {/* Mobile Button */}
        <button
          onClick={toggleMobileMenu}
          className="xl:hidden text-gray-700 hover:text-blue-600 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ✅ No UI changes below */}
      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-20 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-3">
          <NavLink href="/" onClick={closeMobileMenu}>
            Home
          </NavLink>

          {/* Services dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full text-left text-gray-800 hover:text-blue-600 flex items-center justify-between font-medium py-2"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeDropdown === 'services' && (
              <div className="ml-3 mt-2 space-y-2">
                {[
                  { href: '/digital-marketing', label: 'Digital Marketing' },
                  { href: '/web-services', label: 'Web Services' },
                  { href: '/cms-development', label: 'CMS Development' },
                  { href: '/software-development', label: 'Software Development' },
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

          {/* About dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full text-left text-gray-800 hover:text-blue-600 flex items-center justify-between font-medium py-2"
            >
              About
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'about' ? 'rotate-180' : ''
                }`}
              />
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
          <NavLink href="/careers" onClick={closeMobileMenu}>
            Careers
          </NavLink>
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
