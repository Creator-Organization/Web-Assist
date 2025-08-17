'use client'
import { Star, Quote } from 'lucide-react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "WebAssist delivered our SaaS platform on time and within budget. Their expertise in React and Node.js was evident throughout the project. The team was professional, communicative, and delivered exactly what we needed.",
      client: "John Smith",
      title: "CEO",
      company: "TechStart Inc",
      projectType: "SaaS Platform",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      text: "The team's attention to performance and user experience resulted in a 40% increase in our conversion rates. Their technical skills and project management approach exceeded our expectations.",
      client: "Sarah Johnson",
      title: "CTO",
      company: "E-commerce Plus",
      projectType: "E-commerce Website",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      text: "Excellent project management and technical delivery. They made the complex simple and were always available for questions. The final product exceeded our expectations.",
      client: "Lisa Chen",
      title: "Project Manager",
      company: "Corp Solutions",
      projectType: "Corporate Website",
      rating: 5,
      featured: true
    }
  ]

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform their digital presence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative">
              {/* Featured Badge */}
              {testimonial.featured && (
                <div className="absolute -top-3 right-6 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  Featured
                </div>
              )}
              
              {/* Quote Icon */}
              <div className="text-white/30 mb-6">
                <Quote className="w-12 h-12" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.client}</h4>
                  <p className="text-blue-100 text-sm">{testimonial.title} · {testimonial.company}</p>
                </div>
                
                {/* Project Type Badge */}
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg mb-6">
            Ready to join our satisfied clients?
          </p>
          <button 
            onClick={() => scrollToSection('get-started')}
            className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}
