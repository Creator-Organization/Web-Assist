'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/digital-marketing" className="hover:text-primary-400 transition-colors">Digital Marketing</a></li>
              <li><a href="/web-services" className="hover:text-primary-400 transition-colors">Web Services</a></li>
              <li><a href="/cms-development" className="hover:text-primary-400 transition-colors">CMS Development</a></li>
              <li><a href="/software-development" className="hover:text-primary-400 transition-colors">Software Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about/why-us" className="hover:text-primary-400">Why Us</a></li>
              <li><a href="/about/vision" className="hover:text-primary-400">Vision</a></li>
              <li><a href="/clients" className="hover:text-primary-400">Clients</a></li>
              <li><a href="/careers" className="hover:text-primary-400">Careers</a></li>
              <li><a href="/faq" className="hover:text-primary-400">FAQ</a></li>
              <li><a href="/contact" className="hover:text-primary-400">Contact</a></li>
            </ul>
          </div>

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
                <span>73 Pannalal Nagar, Ch. Sambhaji Nagar, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About CreatorIt</h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Professional web development services delivering custom solutions that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {currentYear} CreatorIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
