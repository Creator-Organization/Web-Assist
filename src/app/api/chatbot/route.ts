import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { ChatRepository } from '@/lib/database';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const CREATORIT_INFO = `
CREATORIT - COMPANY INFORMATION

=== OVERVIEW ===
CreatorIT is a professional web development and digital services company operating at www.creatorit.in. We specialize in creating unique, high-quality web solutions for businesses.

=== SERVICES ===

1. WEB DEVELOPMENT
   - Custom website development
   - Responsive web design
   - Modern web applications
   - E-commerce solutions
   - Progressive Web Apps (PWAs)

2. CMS DEVELOPMENT
   - WordPress Development
   - Joomla Development
   - Drupal Development
   - Custom CMS Solutions

3. DIGITAL MARKETING
   - SEO (Search Engine Optimization)
   - SEM (Search Engine Marketing)
   - Social Media Marketing
   - Content Marketing
   - Email Marketing
   - Google Ads Management

4. SOFTWARE DEVELOPMENT
   - Custom Software Solutions
   - Mobile App Development
   - Desktop Applications
   - API Development & Integration
   - Cloud-based Solutions

5. SPECIALIZED SERVICES
   - Web Design & Interactive Design
   - Logo Design & Branding
   - E-commerce Development (Magento)
   - Offshore Development
   - Online Surveys & Classifieds

=== READY-TO-DEPLOY ERP PROJECTS ===
We offer a wide range of ready-to-deploy ERP and management systems:

1. Advance Support Ticket System
2. Advocate Management System
3. Courier and Logistics Management System
4. CRM Software Pro Version
5. E-commerce Portal (Multiple Vendor)
6. Gym Management and Fitness Management System
7. Hospital Management System
8. HR Management System
9. Matrimonial Web Portal + Admin Panel
10. News Portal with Admin Panel
11. Online Classes and Tutorial Web Portal
12. Online Exam Web Portal + Admin Panel
13. Online Job Portal + Admin Panel
14. Pharmacy Management System
15. Point of Sales System (POS)
16. POS System for Restaurants
17. Project Management Software (Ultimate)
18. Real Estate System
19. School Management System Pro Version
20. Tour and Travel Portal with Admin Panel
21. Web to APK Converter

All these systems are:
- Ready to deploy
- Fully functional
- Include admin panels
- Customizable to your needs
- Professional and tested

=== TECHNOLOGY STACK ===
- Frontend: React, Next.js, TypeScript
- Backend: Node.js, Python
- Databases: PostgreSQL, MongoDB
- Cloud: Vercel, AWS
- CMS: WordPress, Drupal, Joomla

=== WHY CHOOSE US ===
✓ Professional, unique designs (not template-based)
✓ Ready-to-deploy solutions available
✓ Modern technology stack
✓ Responsive and mobile-friendly
✓ SEO optimized
✓ 24/7 support
✓ Timely delivery
✓ Competitive pricing

=== CONTACT INFORMATION ===
Website: https://www.creatorit.in
Location: Aurangabad, Maharashtra, India
Available: 24/7 support
Contact: Use our contact form on the website

=== OUR APPROACH ===
We focus on delivering unique, professional websites that stand out. We avoid template-like designs and create custom solutions tailored to each client's needs. We also offer ready-to-deploy ERP systems for businesses looking for quick implementation.
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory = [], sessionId } = body;

    console.log('[Chatbot] Received message:', { message, sessionId });

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    const messages = [
      {
        role: 'system',
        content: `You are the official AI assistant for CreatorIT, a professional web development and digital services company.

STRICT GUIDELINES:
1. ONLY answer questions about CreatorIT - services, web development, digital marketing, software development, CMS solutions, pricing, contact information, and company details.
2. If asked about ANY other topic (weather, news, other companies, general knowledge, recipes, politics, etc.), politely decline and redirect to CreatorIT services.
3. Use ONLY the company information provided below. Do not invent information.
4. If specific pricing or detailed information is not available, suggest they use the contact form on the website.
5. Be professional, helpful, and concise.
6. Emphasize key benefits: unique designs, modern technology, professional quality, and 24/7 support.
7. Always encourage users to visit www.creatorit.in or use the contact form for detailed inquiries.
8. IMPORTANT: User is already ON the website, so say things like "You can fill out our contact form on this page" NOT "Visit our website".

${CREATORIT_INFO}

Remember: You represent CreatorIT. Focus exclusively on helping potential clients understand our web development and digital services.`,
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message,
      },
    ];

    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: messages as any,
      temperature: 0.3,
      max_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Extract keywords from user message for analytics
    const keywords = extractKeywords(message);

    // Get user info
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                      request.headers.get('x-real-ip') || 
                      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    console.log('[Chatbot] Attempting to save to database...', {
      sessionId: sessionId || `session_${Date.now()}`,
      hasMessage: !!message,
      hasReply: !!reply,
      keywords,
    });

    // Save to database with proper error logging
    try {
      await ChatRepository.saveConversation({
        sessionId: sessionId || `session_${Date.now()}`,
        userMessage: message,
        botResponse: reply,
        keywords,
        ipAddress,
        userAgent,
      });
      console.log('[Chatbot] Successfully saved to database');
    } catch (dbError) {
      console.error('[Chatbot] Database save failed:', {
        error: dbError,
        message: dbError instanceof Error ? dbError.message : 'Unknown error',
        stack: dbError instanceof Error ? dbError.stack : undefined,
      });
    }

    return NextResponse.json({
      success: true,
      message: reply,
    });
  } catch (error) {
    console.error('[Chatbot] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

// Helper function to extract keywords
function extractKeywords(message: string): string[] {
  const keywords: string[] = [];
  const lowercaseMsg = message.toLowerCase();

  const keywordMap: Record<string, string> = {
    'contact': 'contact',
    'price': 'pricing',
    'cost': 'pricing',
    'budget': 'pricing',
    'web': 'web_development',
    'website': 'web_development',
    'development': 'web_development',
    'marketing': 'digital_marketing',
    'seo': 'seo',
    'sem': 'sem',
    'social media': 'social_media',
    'cms': 'cms_development',
    'wordpress': 'wordpress',
    'joomla': 'joomla',
    'drupal': 'drupal',
    'software': 'software_development',
    'erp': 'erp_systems',
    'crm': 'crm',
    'ecommerce': 'ecommerce',
    'email': 'email_marketing',
    'service': 'services',
    'about': 'about_company',
  };

  for (const [key, value] of Object.entries(keywordMap)) {
    if (lowercaseMsg.includes(key) && !keywords.includes(value)) {
      keywords.push(value);
    }
  }

  return keywords.length > 0 ? keywords : ['general_inquiry'];
}