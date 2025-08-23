"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Clock, Wallet, Check, Upload, FileText, ArrowLeft } from 'lucide-react';

// Mock data - in a real app, you would fetch this based on the ID from the URL
const internshipDetails = {
    id: 1,
    title: "Web Development Intern",
    stipend: "₹8000/month",
    duration: "3 months",
    description: "Join our dynamic team to build and maintain cutting-edge web applications. You will work with modern technologies and contribute to real-world projects, gaining invaluable hands-on experience in the software development lifecycle.",
    responsibilities: [
        "Collaborate with the development team to design and implement new features.",
        "Write clean, maintainable, and efficient code.",
        "Participate in code reviews to maintain code quality.",
        "Troubleshoot and debug applications."
    ],
    skillsRequired: [
        "Proficiency in HTML, CSS, and JavaScript.",
        "Experience with a modern JavaScript framework (React, Vue, or Angular).",
        "Understanding of RESTful APIs.",
        "Basic knowledge of Git and version control."
    ],
    learningOutcomes: [
        "Real-world experience in a professional development environment.",
        "Deep understanding of the full software development lifecycle.",
        "Improved coding and problem-solving skills.",
        "Opportunity to build a professional network."
    ]
};

export default function ApplicationPage({ params }) {
    const [resume, setResume] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!resume) {
            alert("Please upload your resume.");
            return;
        }
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        Internship<span className="text-blue-600">Hub</span>
                    </Link>
                    <div className="flex items-center space-x-2">
                        <Link href="/student" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors flex items-center">
                           <ArrowLeft className="h-4 w-4 mr-2" /> Back to Internships
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Internship Details */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{internshipDetails.title}</h1>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 mb-6">
                            <div className="flex items-center"><Briefcase className="h-4 w-4 mr-2" /> Full-time</div>
                            <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> {internshipDetails.duration}</div>
                            <div className="flex items-center"><Wallet className="h-4 w-4 mr-2" /> {internshipDetails.stipend}</div>
                        </div>

                        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b pb-2">About the Internship</h2>
                        <p className="text-gray-600 leading-relaxed">{internshipDetails.description}</p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b pb-2">Key Responsibilities</h2>
                        <ul className="space-y-2 text-gray-600 list-inside">
                            {internshipDetails.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{item}</li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b pb-2">Skills Required</h2>
                        <ul className="space-y-2 text-gray-600 list-inside">
                            {internshipDetails.skillsRequired.map((item, index) => (
                                <li key={index} className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{item}</li>
                            ))}
                        </ul>
                        
                        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b pb-2">What You Will Learn</h2>
                        <ul className="space-y-2 text-gray-600 list-inside">
                            {internshipDetails.learningOutcomes.map((item, index) => (
                                <li key={index} className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Application Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-lg shadow-md sticky top-24">
                            {isSubmitted ? (
                                <div className="text-center">
                                    <Check className="h-16 w-16 mx-auto text-white bg-green-500 rounded-full p-2" />
                                    <h2 className="text-2xl font-bold text-gray-800 mt-4">Application Submitted!</h2>
                                    <p className="text-gray-600 mt-2">We have received your application. We will get back to you soon.</p>
                                    <Link href="/student" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                        Back to Dashboard
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply Now</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                        <div className="flex text-sm text-gray-600">
                                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                                                    </div>
                                                </div>
                                                {resume && (
                                                    <div className="mt-4 flex items-center text-sm text-gray-700">
                                                        <FileText className="h-5 w-5 text-gray-500 mr-2" />
                                                        <span>{resume.name}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300">
                                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
