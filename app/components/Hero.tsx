'use client'
import { Shield, Zap, Users, Code, Headphones, ChevronDown } from 'lucide-react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"></div>
      
             {/* Animated Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
         <div className="absolute top-40 right-20 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
         <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
         
         {/* Floating Tech Icons */}
         <div className="absolute top-32 right-32 text-white/10 animate-bounce-slow">
           <div className="text-6xl">⚛️</div>
         </div>
         <div className="absolute top-48 left-16 text-white/10 animate-pulse-slow">
           <div className="text-5xl">🚀</div>
         </div>
         <div className="absolute bottom-32 right-16 text-white/10 animate-bounce-slow">
           <div className="text-4xl">💻</div>
         </div>
       </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Company Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          WebAssist
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in animation-delay-200">
          Professional Web Development Services
        </p>
        
        {/* Main Message */}
        <div className="mb-12 animate-fade-in animation-delay-400">
          <span className="text-2xl md:text-3xl text-blue-100">We provide</span>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="relative">
              <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Custom-Built Solutions
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
            <div className="w-1 h-16 bg-gradient-to-b from-white via-blue-200 to-transparent animate-bounce-slow"></div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium">Secure</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium">Fast</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium">Reliable</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium">Modern</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium">Supported</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-800">
          <button 
            onClick={() => scrollToSection('get-started')}
            className="btn-primary bg-secondary-500 hover:bg-secondary-600"
          >
            Start Your Project
          </button>
          <button 
            onClick={() => {
              const techStackSection = document.querySelector('section:nth-of-type(2)')
              if (techStackSection) {
                techStackSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                })
              }
            }}
            className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}
