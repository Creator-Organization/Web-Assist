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
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-primary-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/creatorit-logo1.png"
              alt="Creator IT Logo"
              width={140}
              height={40}
              priority
              className="h-auto w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-teal-200 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
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
            {activeDropdown === 'services' && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/digital-marketing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/web-services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Web Services
                </Link>
                <Link
                  href="/cms-development"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  CMS Development
                </Link>
                <Link
                  href="/software-development"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Software Development
                </Link>
              </div>
            )}
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
            {activeDropdown === 'about' && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/about/why-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Why Us
                </Link>
                <Link
                  href="/about/vision"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Vision & Mission
                </Link>
                <Link
                  href="/about/partners"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Partners
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/clients"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors"
          >
            Clients
          </Link>

          <Link
            href="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 rounded-lg transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 top-16"
        />
      )}
    </header>
  );
}