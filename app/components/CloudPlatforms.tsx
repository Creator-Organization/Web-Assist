'use client'
import { Cloud, Wrench, Building2, Database, Check, Rocket, DollarSign, Shield } from 'lucide-react'
import { useState } from 'react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function CloudPlatforms() {
  const [activeTab, setActiveTab] = useState<'overview' | 'services'>('overview')

  const cloudModels = [
    {
      name: 'SaaS',
      fullName: 'Software as a Service',
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      description: 'Ready-to-use software applications delivered over the internet. Users access the software through a web browser without needing to install or maintain it.',
      benefits: [
        'Quick deployment and setup',
        'No maintenance required',
        'Automatic updates and patches'
      ],
      bestFor: [
        'Customer relationship management',
        'Team collaboration tools'
      ]
    },
    {
      name: 'PaaS',
      fullName: 'Platform as a Service',
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      description: 'Cloud computing platform that provides developers with tools, libraries, and services to build, deploy, and manage applications without worrying about infrastructure.',
      benefits: [
        'Focus on coding, not infrastructure',
        'Automatic scaling and load balancing',
        'Built-in development tools'
      ],
      bestFor: [
        'Web application deployment',
        'API backend hosting'
      ]
    },
    {
      name: 'IaaS',
      fullName: 'Infrastructure as a Service',
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      description: 'Virtualized computing resources over the internet. Provides fundamental compute, network, and storage resources on-demand, giving you complete control over your infrastructure.',
      benefits: [
        'Complete control over infrastructure',
        'Highly scalable resources',
        'Pay-as-you-use pricing model'
      ],
      bestFor: [
        'Custom server configurations',
        'High-performance computing'
      ]
    },
    {
      name: 'ERP',
      fullName: 'Enterprise Resource Planning',
      icon: <Database className="w-8 h-8 text-blue-600" />,
      description: 'Integrated business management software that connects and manages all aspects of your business operations in real-time, from finance to supply chain to human resources.',
      benefits: [
        'Streamlined business operations',
        'Real-time data integration',
        'Improved decision making'
      ],
      bestFor: [
        'Financial management and accounting',
        'Supply chain management'
      ]
    }
  ]

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      title: 'Faster Time to Market',
      description: 'Deploy applications quickly with pre-built infrastructure and services'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Cost Optimization',
      description: 'Pay only for resources you use with automatic scaling capabilities'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Enterprise Security',
      description: 'Built-in security features and compliance certifications'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cloud Platform Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the different types of cloud platforms and how they can transform your business. We help you choose and implement the right cloud strategy.
          </p>
        </div>

        {/* Cloud Service Model Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {cloudModels.map((model) => (
            <div key={model.name} className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                {model.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{model.name}</h3>
              <p className="text-sm text-gray-600">{model.fullName}</p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === 'overview' 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Platform Overview
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === 'services' 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Detailed Platform Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cloudModels.slice(0, 2).map((model) => (
                <div key={model.name} className="card p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                      {model.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.fullName}</h3>
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {model.name}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{model.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {model.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="text-center">
              <button 
                onClick={() => scrollToSection('get-started')}
                className="btn-primary"
              >
                Learn More About SaaS
              </button>
            </div>

            {/* Platform Comparison Cards */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Which Platform is Right for You?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cloudModels.map((model) => (
                  <div key={model.name} className="card p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      {model.icon}
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{model.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{model.description.substring(0, 100)}...</p>
                    <div className="space-y-2 text-sm">
                      <div className="font-medium text-gray-900">Best for:</div>
                      <ul className="text-gray-600 space-y-1">
                        {model.bestFor.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Why Choose Cloud Platforms?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Cloud Services</h3>
            <p className="text-gray-600 mb-8">Comprehensive cloud migration and management services coming soon.</p>
            <button className="btn-primary">Contact Us for Details</button>
          </div>
        )}
      </div>
    </section>
  )
}
