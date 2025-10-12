// src/components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    // Toggle the main menu state
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // When opening/closing, reset the active dropdown
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Function to close menu on link click
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  return (
    // Increased z-index for the header (e.g., z-50)
    <header className="bg-primary-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/images/creatorit-logo1.png"
              alt="Creator IT Logo"
              width={140}
              height={40}
              priority
              className="h-22 w-auto sm:h-24 md:h-26"
            />
          </Link>

          {/* Desktop Navigation (No change needed here) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-teal-200 transition-colors duration-200 font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-teal-200 transition-colors duration-200 font-medium flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/digital-marketing" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Digital Marketing
                </Link>
                <Link href="/web-services" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Web Services
                </Link>
                <Link href="/cms-development" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  CMS Development
                </Link>
                <Link href="/software-development" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Software Development
                </Link>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-teal-200 transition-colors duration-200 font-medium flex items-center">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about/why-us" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Why Us
                </Link>
                <Link href="/about/vision" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Vision & Mission
                </Link>
                <Link href="/about/partners" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Partners
                </Link>
                <Link href="/faq" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>

            <Link href="/clients" className="text-white hover:text-teal-200 transition-colors duration-200 font-medium">
              Clients
            </Link>

            <Link href="/careers" className="text-white hover:text-teal-200 transition-colors duration-200 font-medium">
              Careers
            </Link>

            <Link href="/contact" className="text-white hover:text-teal-200 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button - Z-index fixed */}
          <button
            onClick={toggleMobileMenu}
            // Ensure this button stays above the overlay (z-index of header handles this)
            className="lg:hidden text-white hover:text-teal-200 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content - Must be z-40 or less than header, and position fixed */}
      <div
        className={`lg:hidden fixed top-16 md:top-20 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${ // <-- Added z-40
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2 overflow-y-auto pb-40" // <-- Added overflow-y-auto and padding
          style={{ height: 'calc(100vh - 4rem)' }} // Adjust height to account for header
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors"
          >
            Home
          </Link>

          {/* Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full text-left text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {/* Added animation class for smoother dropdown transition */}
            <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 ${activeDropdown === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <Link
                  href="/digital-marketing"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/web-services"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Web Services
                </Link>
                <Link
                  href="/cms-development"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  CMS Development
                </Link>
                <Link
                  href="/software-development"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Software Development
                </Link>
            </div>
          </div>

          {/* About Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full text-left text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {/* Added animation class for smoother dropdown transition */}
            <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 ${activeDropdown === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <Link
                  href="/about/why-us"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Why Us
                </Link>
                <Link
                  href="/about/vision"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Vision & Mission
                </Link>
                <Link
                  href="/about/partners"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Partners
                </Link>
                <Link
                  href="/faq"
                  onClick={closeMenu}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  FAQ
                </Link>
            </div>
          </div>

          <Link
            href="/clients"
            onClick={closeMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors"
          >
            Clients
          </Link>

          <Link
            href="/careers"
            onClick={closeMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay - Must be z-30 (less than menu content) and start below header */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 top-16 md:top-20 z-30" // <-- Added z-30
        />
      )}
    </header>
  );
}