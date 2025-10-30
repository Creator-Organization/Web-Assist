// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/digital-marketing" className="hover:text-primary-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/web-services" className="hover:text-primary-400 transition-colors">
                  Web Services
                </Link>
              </li>
              <li>
                <Link href="/cms-development" className="hover:text-primary-400 transition-colors">
                  CMS Development
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-primary-400 transition-colors">
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about/why-us" className="hover:text-primary-400 transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/about/vision" className="hover:text-primary-400 transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-primary-400 transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>info@CreatorIt.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+91 9545415111</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>73 Pannalal Nagar,Ch.Sambhaji Nagar, India</span>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About CreatorIt</h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Professional web development services delivering custom solutions that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CreatorIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}