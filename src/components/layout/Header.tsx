'use client';

import { useState } from 'react';
// FIX: Replaced next/link with standard React functional components/HTML <a>
// import Link from 'next/link';
// FIX: Replaced next/image with standard HTML <img>
// import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Type fixed to accept string or null for environments that may require explicit type annotation
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset dropdown when opening/closing mobile menu
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Helper component to replace Next.js Link
  const NavLink = ({ href, children, onClick, className = "" }: { href: string, children: React.ReactNode, onClick?: () => void, className?: string }) => (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );

  return (
    // UPDATED: Changed from a custom hex (#0C122D) to a standard Tailwind deep blue (bg-primary-900)
    <header className="bg-primary-900 sticky top-0 z-50 shadow-lg border-b border-primary-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink href="/" className="flex items-center">
            {/* FIX: Replaced Next.js Image with standard HTML <img> tag */}
            {/* NOTE: If the logo image itself is dark, it will need to be replaced with a light version */}
            <img
              src="/images/CreatorIt-logo2.png"
              alt="Website Logo"
              style={{ width: '140px', height: '70px' }} // Set explicit size to replace width/height props
              className="h-auto w-auto" // Tailwind classes might override inline styles, keep both for compatibility
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <NavLink href="/" className="text-blue-100 hover:text-primary-400 transition-colors duration-200 font-medium">
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-blue-100 hover:text-primary-400 transition-colors duration-200 font-medium flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown Menu (adjusted bg and hover colors for contrast) */}
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <NavLink href="/digital-marketing" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Digital Marketing
                </NavLink>
                <NavLink href="/web-services" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Web Services
                </NavLink>
                <NavLink href="/cms-development" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  CMS Development
                </NavLink>
                <NavLink href="/software-development" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Software Development
                </NavLink>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-blue-100 hover:text-primary-400 transition-colors duration-200 font-medium flex items-center">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown Menu (adjusted bg and hover colors for contrast) */}
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <NavLink href="/about/why-us" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Why Us
                </NavLink>
                <NavLink href="/about/vision" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Vision & Mission
                </NavLink>
                <NavLink href="/about/partners" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Partners
                </NavLink>
                <NavLink href="/faq" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  FAQ
                </NavLink>
              </div>
            </div>

            <NavLink href="/clients" className="text-blue-100 hover:text-primary-400 transition-colors duration-200 font-medium">
              Clients
            </NavLink>

            <NavLink href="/careers" className="text-blue-100 hover:text-primary-400 transition-colors duration-200 font-medium">
              Careers
            </NavLink>

            <NavLink href="/contact" className="text-blue-100 hover:text-primary-400 transition-colors duration-200 font-medium">
              Contact
            </NavLink>
          </nav>


          {/* Mobile Menu Button (Icon Color) */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden text-blue-100 hover:text-primary-400 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Background is still white for contrast) */}
      <div
        className={`xl:hidden fixed top-16 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-3">
          <NavLink
            href="/"
            onClick={closeMobileMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-4 rounded-lg transition-colors text-base font-medium"
          >
            Home
          </NavLink>

          {/* Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full text-left text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-4 rounded-lg transition-colors flex items-center justify-between text-base font-medium"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'services' && (
              <div className="ml-4 mt-2 space-y-2">
                <NavLink
                  href="/digital-marketing"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  Digital Marketing
                </NavLink>
                <NavLink
                  href="/web-services"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  Developer
                </NavLink>
                <NavLink
                  href="/cms-development"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  CMS Development
                </NavLink>
                <NavLink
                  href="/software-development"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  Software Development
                </NavLink>
              </div>
            )}
          </div>

          {/* About Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full text-left text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-4 rounded-lg transition-colors flex items-center justify-between text-base font-medium"
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'about' && (
              <div className="ml-4 mt-2 space-y-2">
                <NavLink
                  href="/about/why-us"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  Why Us
                </NavLink>
                <NavLink
                  href="/about/vision"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  Vision & Mission
                </NavLink>
                <NavLink
                  href="/about/partners"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  Partners
                </NavLink>
                <NavLink
                  href="/faq"
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  FAQ
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            href="/clients"
            onClick={closeMobileMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-4 rounded-lg transition-colors text-base font-medium"
          >
            Clients
          </NavLink>

          <NavLink
            href="/careers"
            onClick={closeMobileMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-4 rounded-lg transition-colors text-base font-medium"
          >
            Careers
          </NavLink>

          <NavLink
            href="/contact"
            onClick={closeMobileMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-4 rounded-lg transition-colors text-base font-medium"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="xl:hidden fixed inset-0 bg-black bg-opacity-50 top-16 z-40"
        />
      )}
    </header>
  );
}
