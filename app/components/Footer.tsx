'use client'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">WebAssist</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional web development services offering custom website building, maintenance, and consulting using modern full-stack technologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">contact@webassist.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Custom Websites</li>
              <li>E-commerce Solutions</li>
              <li>Web Applications</li>
              <li>API Development</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-300">
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>PostgreSQL & MongoDB</li>
              <li>AWS & Vercel</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} WebAssist. All rights reserved.
          </p>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
