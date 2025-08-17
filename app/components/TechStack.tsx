'use client'
import { Star, Calendar, DollarSign, Zap, Heart, Building, BookOpen, Database, Server } from 'lucide-react'
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

export default function TechStack() {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'browse' | 'compare'>('browse')

  const techStacks = [
    {
      id: 'nextjs-postgresql',
      name: 'Next.js + PostgreSQL',
      icon: <Database className="w-8 h-8 text-purple-600" />,
      description: 'Modern, full-stack React framework with robust database integration and excellent performance.',
      timeline: '4-6 weeks',
      cost: '$15,000 - $50,000',
      complexity: 'Moderate',
      isTopPick: true
    },
    {
      id: 'vuejs-mongodb',
      name: 'Vue.js + MongoDB',
      icon: <Heart className="w-8 h-8 text-green-600" />,
      description: 'Progressive JavaScript framework with flexible NoSQL database for scalable applications.',
      timeline: '4-8 weeks',
      cost: '$12,000 - $45,000',
      complexity: 'Moderate'
    },
    {
      id: 'angular-sqlserver',
      name: 'Angular + SQL Server',
      icon: <Building className="w-8 h-8 text-red-600" />,
      description: 'Enterprise-grade framework with robust relational database for complex business applications.',
      timeline: '6-10 weeks',
      cost: '$20,000 - $60,000',
      complexity: 'Complex'
    },
    {
      id: 'wordpress-mysql',
      name: 'WordPress + MySQL',
      icon: <BookOpen className="w-8 h-8 text-gray-600" />,
      description: 'Content management system with reliable database for content-heavy websites.',
      timeline: '2-4 weeks',
      cost: '$5,000 - $25,000',
      complexity: 'Simple'
    },
    {
      id: 'laravel-mysql',
      name: 'Laravel + MySQL',
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      description: 'Elegant PHP framework with robust database for rapid web application development.',
      timeline: '4-7 weeks',
      cost: '$15,000 - $40,000',
      complexity: 'Moderate'
    },
    {
      id: 'django-postgresql',
      name: 'Django + PostgreSQL',
      icon: <Server className="w-8 h-8 text-green-600" />,
      description: 'High-level Python framework with advanced database features for scalable applications.',
      timeline: '5-8 weeks',
      cost: '$18,000 - $50,000',
      complexity: 'Moderate'
    }
  ]

  const toggleStack = (stackId: string) => {
    if (selectedStacks.includes(stackId)) {
      setSelectedStacks(selectedStacks.filter(id => id !== stackId))
    } else if (selectedStacks.length < 3) {
      setSelectedStacks([...selectedStacks, stackId])
    }
  }

  const topPick = techStacks.find(stack => stack.isTopPick)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect technology combination for your project. We'll guide you through the options and help you make the best choice.
          </p>
        </div>

        {/* Top Recommendation */}
        {topPick && (
                     <div className="mb-16">
             <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-yellow-200 relative hover:animate-glow transition-all duration-300">
               <div className="absolute -top-4 left-8 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 animate-pulse">
                 <Star className="w-4 h-4" />
                 Our Top Recommendation
               </div>
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                      {topPick.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{topPick.name}</h3>
                      <p className="text-gray-600">{topPick.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {topPick.timeline}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      {topPick.cost}
                    </div>
                  </div>
                </div>
                
                                 <button 
                   onClick={() => scrollToSection('get-started')}
                   className="btn-primary"
                 >
                   Get Quote for Top Pick
                 </button>
              </div>
            </div>
          </div>
        )}

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setViewMode('browse')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                viewMode === 'browse' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Browse Stacks
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                viewMode === 'compare' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Compare Stacks
            </button>
          </div>
        </div>

        {/* Compare Section */}
        {viewMode === 'compare' && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Compare Technology Stacks</h3>
              <p className="text-gray-600">Select 2-3 stacks to compare their features, costs, and timelines.</p>
            </div>
            
            <div className="text-left mb-6">
              <span className="text-sm text-gray-600">Selected: {selectedStacks.length}/3</span>
            </div>
          </div>
        )}

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack) => (
            <div
              key={stack.id}
              className={`card p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                selectedStacks.includes(stack.id) 
                  ? 'ring-2 ring-primary-500 bg-primary-50' 
                  : 'hover:ring-2 hover:ring-primary-200'
              }`}
              onClick={() => viewMode === 'compare' && toggleStack(stack.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:animate-float transition-all duration-300">
                  {stack.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{stack.name}</h3>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Timeline: {stack.timeline}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Complexity: {stack.complexity}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Consultation */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Stack to Choose?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experienced team can help you select the perfect technology stack based on your specific requirements, budget, and timeline.
            </p>
            <button 
              onClick={() => scrollToSection('get-started')}
              className="btn-primary bg-secondary-500 hover:bg-secondary-600"
            >
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
