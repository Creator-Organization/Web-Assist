import Link from 'next/link';
import { Users, Award, Clock, Code, Heart, Briefcase, TrendingUp } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 opacity-80 pointer-events-none z-0" />
        <div className="relative container mx-auto px-6 xl:px-16 z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight drop-shadow-lg">Careers at creatorit</h1>
          <p className="text-xl max-w-3xl text-center mb-6 drop-shadow">
            Join our team and grow your career with us
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Employee Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Work With Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Thank you for your interest in creatorit. We offer excellent career opportunities and we hope that you will become a valued member of our team in the future.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are always looking for talented individuals who are passionate about technology and committed to delivering exceptional results. Whether you're a developer, designer, marketer, or project manager, we'd love to hear from you.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                <p className="text-lg text-gray-900 font-semibold mb-2">Submit your resume:</p>
                <a href="mailto:career@creatorit.com" className="text-lg text-primary-600 hover:text-primary-700 font-medium">
                  career@creatorit.com
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600"
                alt="creatorit Team"
                className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Opportunities</h3>
                <p className="text-gray-700">Continuous learning and career advancement with training programs</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Compensation</h3>
                <p className="text-gray-700">Industry-standard salaries plus performance incentives</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Work</h3>
                <p className="text-gray-700">Work-life balance with flexible schedules and remote options</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Technology</h3>
                <p className="text-gray-700">Work with the latest tools and cutting-edge technologies</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Team Culture</h3>
                <p className="text-gray-700">Collaborative environment with supportive colleagues</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Health & Wellness</h3>
                <p className="text-gray-700">Comprehensive health benefits and wellness programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Current Openings</h2>
            <div className="space-y-4">
              {[
                { title: 'Senior Full Stack Developer', dept: 'Engineering', type: 'Full-time' },
                { title: 'UI/UX Designer', dept: 'Design', type: 'Full-time' },
                { title: 'Digital Marketing Specialist', dept: 'Marketing', type: 'Full-time' },
                { title: 'Project Manager', dept: 'Operations', type: 'Full-time' },
                { title: 'DevOps Engineer', dept: 'Engineering', type: 'Contract' }
              ].map((job, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.dept}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Send us your resume and let's start the conversation
          </p>
          <a href="mailto:career@creatorit.com">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-apple text-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-apple hover:shadow-apple-lg">
              Apply Now
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}