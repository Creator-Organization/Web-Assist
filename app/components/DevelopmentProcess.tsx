'use client'
import { Search, Palette, Code, Rocket, Check, Calendar, Target, Users, ChevronLeft, ChevronRight, Play } from 'lucide-react'
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

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(3)
  const [viewMode, setViewMode] = useState<'cards' | 'timeline' | 'detailed'>('cards')
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  const processSteps = [
    {
      id: 1,
      name: 'Discovery & Planning',
      icon: <Search className="w-6 h-6 text-purple-600" />,
      duration: '1-2 weeks',
      description: 'We analyze your requirements, plan the architecture, and create a detailed project roadmap.',
      whatWeDo: [
        'Requirements gathering and analysis',
        'Technical architecture planning',
        'Project timeline and milestone definition',
        'Technology stack selection'
      ],
      whatYouGet: [
        'Detailed project specification document',
        'Technical architecture diagram',
        'Project timeline with milestones',
        'Cost breakdown and payment schedule'
      ],
      yourRole: [
        'Provide business requirements and goals',
        'Review and approve project specifications',
        'Participate in planning sessions',
        'Provide feedback on timeline and approach'
      ]
    },
    {
      id: 2,
      name: 'Design & Architecture',
      icon: <Palette className="w-6 h-6 text-pink-600" />,
      duration: '2-3 weeks',
      description: 'We create beautiful, user-friendly designs and establish the technical foundation.',
      whatWeDo: [
        'UI/UX design and wireframing',
        'Database schema design',
        'API architecture planning',
        'Security and performance planning'
      ],
      whatYouGet: [
        'Complete design mockups and prototypes',
        'Interactive wireframes for user testing',
        'Technical architecture documentation',
        'Design system and component library'
      ],
      yourRole: [
        'Review and approve design concepts',
        'Provide feedback on user experience',
        'Participate in design review sessions',
        'Approve final design direction'
      ]
    },
    {
      id: 3,
      name: 'Development & Testing',
      icon: <Code className="w-6 h-6 text-purple-600" />,
      duration: '4-12 weeks',
      description: 'We build your application using modern development practices and comprehensive testing.',
      whatWeDo: [
        'Frontend and backend development',
        'Database implementation and optimization',
        'API development and integration',
        'Comprehensive testing and quality assurance'
      ],
      whatYouGet: [
        'Fully functional application',
        'Comprehensive testing reports',
        'Performance optimization results',
        'Security audit documentation'
      ],
      yourRole: [
        'Regular progress reviews and feedback',
        'Testing and validation of features',
        'Approval of major milestones',
        'Communication of any requirement changes'
      ]
    },
    {
      id: 4,
      name: 'Launch & Support',
      icon: <Rocket className="w-6 h-6 text-red-600" />,
      duration: '1-2 weeks + ongoing',
      description: 'We ensure a smooth launch and provide ongoing support to keep your application running optimally.',
      whatWeDo: [
        'Production environment setup and configuration',
        'Domain and SSL certificate setup',
        'Performance monitoring and analytics setup'
      ],
      whatYouGet: [
        'Live, fully functional website',
        'Training materials and documentation',
        'Monitoring and analytics dashboard setup'
      ],
      yourRole: [
        'Final pre-launch review and approval',
        'Team training sessions (2-3 hours)',
        'Go-live monitoring and immediate support'
      ]
    }
  ]

  const currentStep = processSteps.find(step => step.id === activeStep)

  const nextStep = () => {
    setActiveStep(prev => prev === 4 ? 1 : prev + 1)
  }

  const prevStep = () => {
    setActiveStep(prev => prev === 1 ? 4 : prev - 1)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A proven 4-step methodology that ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
          
                  {/* Key Metrics */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>Total Timeline: 8-19 weeks</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            <span>Proven Process</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Client Collaboration</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Project Completion</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '85%'}}></div>
          </div>
        </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                viewMode === 'cards' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Card View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                viewMode === 'timeline' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Timeline View
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                viewMode === 'detailed' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Detailed View
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                isAutoPlaying 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Play className="w-4 h-4 inline mr-2" />
              Auto Play
            </button>
          </div>
        </div>

        {/* Card View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`card p-6 text-center cursor-pointer transition-all ${
                  step.id === activeStep 
                    ? 'ring-2 ring-primary-500 bg-primary-50' 
                    : ''
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.name}</h3>
                <p className="text-sm text-gray-600">{step.duration}</p>
              </div>
            ))}
          </div>
        )}

        {/* Timeline View */}
        {viewMode === 'timeline' && (
          <div className="mb-12">
            <div className="flex items-center justify-center">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    step.id === activeStep 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {step.id === activeStep ? step.id : <Check className="w-6 h-6" />}
                  </div>
                  <div className="text-center mx-4">
                    <h3 className="font-semibold text-gray-900">{step.name}</h3>
                    <p className="text-sm text-gray-600">{step.duration}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-16 h-1 bg-gray-300 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Step View */}
        {currentStep && (
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                {currentStep.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Step {currentStep.id}: {currentStep.name}</h3>
                <p className="text-gray-600">{currentStep.duration} • {currentStep.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  What We Do
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {currentStep.whatWeDo.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  What You Get
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {currentStep.whatYouGet.map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Your Role
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {currentStep.yourRole.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevStep}
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Step
              </button>
              
              <div className="flex gap-4">
                <button className="btn-outline">Ask About Timeline</button>
                <button className="btn-primary">Learn More</button>
              </div>
              
              <button
                onClick={nextStep}
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Our structured process ensures your project stays on track from concept to launch. Let's discuss your specific requirements and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('get-started')}
                className="btn-primary"
              >
                Start Your Project
              </button>
              <button className="btn-outline">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
