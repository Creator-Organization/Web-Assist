'use client';

import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              WebAssist
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional web development services offering custom website building, 
              maintenance, and consulting using modern full-stack technologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-400" />
                <span className="text-gray-300">contact@webassist.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-accent-400 transition-colors">Custom Websites</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">E-commerce Solutions</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Web Applications</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">API Development</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-accent-400 transition-colors">React & Next.js</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Node.js & Express</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">PostgreSQL & MongoDB</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">AWS & Vercel</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">TypeScript</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} WebAssist. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-accent-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}