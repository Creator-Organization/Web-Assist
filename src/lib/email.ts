import { Resend } from 'resend';
import { DatabaseContact } from '@/types/contact';
import { formatPhoneNumber, formatDate } from '@/lib/utils';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

// Generate email template for contact notifications
function generateContactNotificationEmail(contact: DatabaseContact): EmailTemplate {
  const formattedPhone = contact.phone ? formatPhoneNumber(contact.phone) : 'Not provided';
  const formattedDate = formatDate(contact.createdAt);

  const subject = `New Contact Form Submission - ${contact.name}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e3a8a; }
        .value { margin-top: 5px; padding: 8px; background: white; border-left: 4px solid #2563eb; }
        .priority { background: #fef3c7; border-left-color: #f59e0b; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0;">creatorit Contact Form</p>
      </div>
      
      <div class="content">
        <div class="field">
          <div class="label">Contact Information</div>
          <div class="value">
            <strong>Name:</strong> ${contact.name}<br>
            <strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a><br>
            <strong>Phone:</strong> ${formattedPhone}<br>
            <strong>Company:</strong> ${contact.company || 'Not provided'}
          </div>
        </div>

        <div class="field">
          <div class="label">Project Details</div>
          <div class="value">
            <strong>Project Type:</strong> ${contact.projectType}<br>
            <strong>Budget Range:</strong> ${contact.budgetRange}<br>
            <strong>Timeline:</strong> ${contact.timeline}<br>
            <strong>Preferred Tech Stack:</strong> ${contact.preferredStack || 'No preference'}
          </div>
        </div>

        <div class="field">
          <div class="label">Project Description</div>
          <div class="value">
            ${contact.projectDescription.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div class="field">
          <div class="label">Submission Details</div>
          <div class="value">
            <strong>Submitted:</strong> ${formattedDate}<br>
            <strong>Contact ID:</strong> ${contact.id}<br>
            <strong>Status:</strong> ${contact.status}
          </div>
        </div>

        ${contact.budgetRange.includes('$50,000') || contact.budgetRange.includes('Over $100,000') || contact.timeline === 'ASAP (Rush job)' ? `
        <div class="field">
          <div class="label">⚠️ High Priority Lead</div>
          <div class="value priority">
            This lead has indicated a high budget range or urgent timeline. Consider prioritizing this inquiry.
          </div>
        </div>
        ` : ''}
      </div>

      <div class="footer">
        <p>This email was automatically generated from the creatorit contact form.</p>
        <p>To respond to this inquiry, reply directly to this email or contact ${contact.name} at ${contact.email}</p>
      </div>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission - creatorit

Contact Information:
- Name: ${contact.name}
- Email: ${contact.email}
- Phone: ${formattedPhone}
- Company: ${contact.company || 'Not provided'}

Project Details:
- Project Type: ${contact.projectType}
- Budget Range: ${contact.budgetRange}
- Timeline: ${contact.timeline}
- Preferred Tech Stack: ${contact.preferredStack || 'No preference'}

Project Description:
${contact.projectDescription}

Submission Details:
- Submitted: ${formattedDate}
- Contact ID: ${contact.id}
- Status: ${contact.status}

${contact.budgetRange.includes('$50,000') || contact.budgetRange.includes('Over $100,000') || contact.timeline === 'ASAP (Rush job)' 
  ? '\n⚠️ HIGH PRIORITY LEAD - High budget or urgent timeline\n' 
  : ''}

To respond to this inquiry, contact ${contact.name} at ${contact.email}
  `;

  return { subject, html, text };
}

// Send contact form notification email
export async function sendContactNotification(contact: DatabaseContact): Promise<boolean> {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Email notification skipped.');
      return false;
    }

    const fromEmail = process.env.FROM_EMAIL || 'noreply@creatorit.com';
    const toEmail = process.env.TO_EMAIL || 'contact@creatorit.com';

    const emailTemplate = generateContactNotificationEmail(contact);

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
      // Add reply-to for easy responses
      reply_to: contact.email,
      // Add tags for tracking (sanitized for Resend requirements)
      tags: [
        { name: 'type', value: 'contact_form' },
        { 
          name: 'project_type', 
          value: contact.projectType
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '')
        },
        { 
          name: 'budget', 
          value: contact.budgetRange
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '')
        },
      ],
    });

    console.log('Email notification sent successfully:', result.data?.id || 'success');
    return true;

  } catch (error) {
    console.error('Failed to send email notification:', error);
    
    // Log specific error details for debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    return false;
  }
}

// Send auto-reply to contact (optional)
export async function sendAutoReply(contact: DatabaseContact): Promise<boolean> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Auto-reply skipped.');
      return false;
    }

    const fromEmail = process.env.FROM_EMAIL || 'noreply@creatorit.com';

    const subject = 'Thank you for contacting creatorit';
    
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for contacting creatorit</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
          .content { margin: 20px 0; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0;">Thank You!</h1>
          <p style="margin: 10px 0 0 0;">Your message has been received</p>
        </div>
        
        <div class="content">
          <p>Hello ${contact.name},</p>
          
          <p>Thank you for reaching out to creatorit! We've received your inquiry about your <strong>${contact.projectType.toLowerCase()}</strong> project.</p>
          
          <p>Here's what happens next:</p>
          <ul>
            <li>We'll review your project requirements within 2-4 hours</li>
            <li>One of our senior developers will reach out within 24 hours</li>
            <li>We'll schedule a free consultation to discuss your project in detail</li>
          </ul>
          
          <p>In the meantime, feel free to check out our recent work and client testimonials on our website.</p>
          
          <p>If you have any urgent questions, you can reply to this email or call us directly.</p>
          
          <p>Best regards,<br>
          <strong>The creatorit Team</strong></p>
        </div>

        <div class="footer">
          <p>creatorit - Professional Web Development Services</p>
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </body>
      </html>
    `;

    const text = `
Hello ${contact.name},

Thank you for reaching out to creatorit! We've received your inquiry about your ${contact.projectType.toLowerCase()} project.

Here's what happens next:
- We'll review your project requirements within 2-4 hours
- One of our senior developers will reach out within 24 hours  
- We'll schedule a free consultation to discuss your project in detail

In the meantime, feel free to check out our recent work and client testimonials on our website.

If you have any urgent questions, you can reply to this email or call us directly.

Best regards,
The creatorit Team

---
creatorit - Professional Web Development Services
This is an automated response. Please do not reply to this email.
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: contact.email,
      subject,
      html,
      text,
      tags: [
        { name: 'type', value: 'auto_reply' },
      ],
    });

    console.log('Auto-reply sent successfully:', result.data?.id || 'success');
    return true;

  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return false;
  }
}

// Test email configuration
export async function testEmailConfiguration(): Promise<boolean> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return false;
    }

    const fromEmail = process.env.FROM_EMAIL || 'noreply@creatorit.com';
    const toEmail = process.env.TO_EMAIL || 'contact@creatorit.com';

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'creatorit Email Configuration Test',
      html: '<p>This is a test email to verify your creatorit email configuration is working correctly.</p>',
      text: 'This is a test email to verify your creatorit email configuration is working correctly.',
    });

    console.log('Test email sent successfully:', result.data?.id || 'success');
    return true;

  } catch (error) {
    console.error('Email configuration test failed:', error);
    return false;
  }
}