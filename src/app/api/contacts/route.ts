import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, sanitizeFormData } from '@/lib/validations';
import { ContactRepository } from '@/lib/database';
import { sendContactNotification } from '@/lib/email';
import { ZodError } from 'zod';

// Rate limiting map (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per minute

function getRateLimitKey(request: NextRequest): string {
  // Get IP address from various headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp || 'unknown';
  return `contact_form:${ip}`;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(key);

  if (!userLimit) {
    rateLimit.set(key, { count: 1, lastReset: now });
    return true;
  }

  // Reset counter if window has passed
  if (now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(key, { count: 1, lastReset: now });
    return true;
  }

  // Check if limit exceeded
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  // Increment counter
  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please wait a minute before trying again.',
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate and sanitize input
    const validatedData = contactFormSchema.parse(body);
    const sanitizedData = sanitizeFormData(validatedData);

    // Check if email already exists (optional - you might want to allow duplicate emails)
    const emailExists = await ContactRepository.emailExists(sanitizedData.email);
    if (emailExists) {
      console.log(`Duplicate email submission: ${sanitizedData.email}`);
      // You can choose to either reject or allow duplicate emails
      // For now, we'll allow them but log it
    }

    // Save to database
    const contact = await ContactRepository.create(sanitizedData);

    // Send email notification (async, don't wait for it)
    sendContactNotification(contact).catch((error) => {
      console.error('Failed to send email notification:', error);
      // Don't fail the request if email fails
    });

    // Log successful submission
    console.log(`New contact submission: ${contact.id} - ${contact.email}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.',
        contactId: contact.id,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);

    // Handle validation errors
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const fieldPath = err.path[0];
        if (fieldPath && typeof fieldPath === 'string') {
          fieldErrors[fieldPath] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: 'Please check your input and try again.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    // Handle database errors
    if (error instanceof Error) {
      if (error.message.includes('database') || error.message.includes('connection')) {
        return NextResponse.json(
          {
            success: false,
            message: 'We\'re experiencing technical difficulties. Please try again later.',
          },
          { status: 503 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}