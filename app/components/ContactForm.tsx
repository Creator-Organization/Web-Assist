'use client'
import { Send, Mail, MessageCircle, CheckCircle, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budgetRange: '',
    preferredTechStack: '',
    timeline: '',
    projectDescription: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const projectTypes = [
    'Custom Website',
    'E-commerce Platform',
    'Web Application',
    'SaaS Platform',
    'API Development',
    'Maintenance & Support',
    'Other'
  ]

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ]

  const techStacks = [
    'No preference',
    'Next.js + PostgreSQL',
    'React + Node.js',
    'Vue.js + MongoDB',
    'Angular + SQL Server',
    'WordPress + MySQL',
    'Laravel + MySQL',
    'Django + PostgreSQL'
  ]

  const timelines = [
    'ASAP',
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months',
    'Flexible'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    // Here you would typically send the data to your backend
    alert('Thank you! We\'ll get back to you within 24 hours.')
  }

  return (
    <section id="get-started" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your web project to life? Tell us about your vision and we'll provide a free consultation with a detailed project proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   <div className="relative">
                   <input
                     type="text"
                     id="name"
                     name="name"
                     required
                     value={formData.name}
                     onChange={handleChange}
                     placeholder=" "
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all peer"
                   />
                   <label 
                     htmlFor="name" 
                     className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-600 peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-xs peer-[-webkit-autofill]:text-primary-600 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                   >
                     Name *
                   </label>
                 </div>
                  
                                     <div className="relative">
                     <input
                       type="email"
                       id="email"
                       name="email"
                       required
                       value={formData.email}
                       onChange={handleChange}
                       placeholder=" "
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all peer"
                     />
                     <label 
                       htmlFor="email" 
                       className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-600 peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-xs peer-[-webkit-autofill]:text-primary-600 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                     >
                       Email *
                     </label>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="relative">
                     <input
                       type="tel"
                       id="phone"
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       placeholder=" "
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all peer"
                     />
                     <label 
                       htmlFor="phone" 
                       className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-600 peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-xs peer-[-webkit-autofill]:text-primary-600 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                     >
                       Phone
                     </label>
                   </div>
                  
                                     <div className="relative">
                     <input
                       type="text"
                       id="company"
                       name="company"
                       value={formData.company}
                       onChange={handleChange}
                       placeholder=" "
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all peer"
                     />
                     <label 
                       htmlFor="company" 
                       className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-600 peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-xs peer-[-webkit-autofill]:text-primary-600 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                     >
                       Company
                     </label>
                   </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredTechStack" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Tech Stack
                    </label>
                    <select
                      id="preferredTechStack"
                      name="preferredTechStack"
                      value={formData.preferredTechStack}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">No preference</option>
                      {techStacks.slice(1).map((stack) => (
                        <option key={stack} value={stack}>{stack}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={6}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Please describe your project requirements, goals, and any specific features you need..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                                 {/* Submit Button */}
                 <div className="text-center">
                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="btn-primary flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                   >
                     <span className="relative z-10 flex items-center gap-2">
                       {isSubmitting ? (
                         <>
                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                           Sending...
                         </>
                       ) : (
                         <>
                           <Send className="w-5 h-5 group-hover:animate-bounce" />
                           Send Message
                         </>
                       )}
                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   </button>
                 </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Service Commitments */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Response</h3>
                  <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Free Consultation</h3>
                  <p className="text-gray-600 text-sm">30-minute strategy session at no cost</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Detailed Proposal</h3>
                  <p className="text-gray-600 text-sm">Custom project plan with timeline & pricing</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">contact@webassist.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
