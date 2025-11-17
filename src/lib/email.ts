import nodemailer from 'nodemailer';
import { DatabaseContact } from '@/types/contact';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

function generateAdminNotificationEmail(contact: DatabaseContact): EmailTemplate {
  const subject = `New Contact Form - ${contact.subject}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea; }
        .label { font-weight: bold; color: #667eea; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
        .value { color: #333; font-size: 15px; }
        .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
        .badge { display: inline-block; padding: 4px 12px; background: #667eea; color: white; border-radius: 12px; font-size: 12px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">CreatorIT Contact Form</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Contact Information</div>
            <div class="value">
              <strong>Name:</strong> ${contact.name}<br>
              <strong>Email:</strong> <a href="mailto:${contact.email}" style="color: #667eea;">${contact.email}</a><br>
              <strong>Phone:</strong> ${contact.countryCode} ${contact.phone}<br>
              ${contact.company ? `<strong>Company:</strong> ${contact.company}` : ''}
            </div>
          </div>

          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${contact.subject}</div>
          </div>

          ${contact.serviceInterest ? `
          <div class="field">
            <div class="label">Service Interest</div>
            <div class="value">${contact.serviceInterest}</div>
          </div>
          ` : ''}

          ${contact.budgetRange ? `
          <div class="field">
            <div class="label">Budget Range</div>
            <div class="value">${contact.budgetRange}</div>
          </div>
          ` : ''}

          <div class="field">
            <div class="label">Message</div>
            <div class="value">${contact.message.replace(/\n/g, '<br>')}</div>
          </div>

          <div class="field">
            <div class="label">Submission Details</div>
            <div class="value">
              <strong>Date:</strong> ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br>
              <strong>Contact ID:</strong> #${contact.id}<br>
              <strong>Status:</strong> <span class="badge">${contact.status.toUpperCase()}</span><br>
              ${contact.captchaScore ? `<strong>CAPTCHA Score:</strong> ${contact.captchaScore}/1.0` : ''}
            </div>
          </div>
        </div>

        <div class="footer">
          <p><strong>CreatorIT Admin Panel</strong></p>
          <p>View full details: <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard" style="color: #667eea;">Admin Dashboard</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission - CreatorIT

Contact Information:
- Name: ${contact.name}
- Email: ${contact.email}
- Phone: ${contact.countryCode} ${contact.phone}
${contact.company ? `- Company: ${contact.company}` : ''}

Subject: ${contact.subject}

${contact.serviceInterest ? `Service Interest: ${contact.serviceInterest}` : ''}
${contact.budgetRange ? `Budget Range: ${contact.budgetRange}` : ''}

Message:
${contact.message}

Submission Details:
- Date: ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
- Contact ID: #${contact.id}
- Status: ${contact.status.toUpperCase()}

View full details at: ${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard
  `;

  return { subject, html, text };
}

function generateUserConfirmationEmail(contact: DatabaseContact): EmailTemplate {
  const subject = `Thank you for contacting CreatorIT`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { padding: 30px 20px; }
        .message-box { background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; margin: 20px 0; }
        .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; border-top: 1px solid #e0e0e0; }
        .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .info-grid { display: grid; gap: 10px; margin: 20px 0; }
        .info-item { padding: 10px; background: #f8f9fa; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Message Received!</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">Thank you for reaching out to us</p>
        </div>
        
        <div class="content">
          <p>Dear <strong>${contact.name}</strong>,</p>
          
          <p>Thank you for contacting <strong>CreatorIT</strong>! We have successfully received your message and our team will review it shortly.</p>
          
          <div class="message-box">
            <h3 style="margin-top: 0; color: #667eea;">Your Message Details:</h3>
            
            <div class="info-grid">
              <div class="info-item">
                <strong>Subject:</strong> ${contact.subject}
              </div>
              ${contact.serviceInterest ? `
              <div class="info-item">
                <strong>Service Interest:</strong> ${contact.serviceInterest}
              </div>
              ` : ''}
              ${contact.budgetRange ? `
              <div class="info-item">
                <strong>Budget Range:</strong> ${contact.budgetRange}
              </div>
              ` : ''}
              <div class="info-item">
                <strong>Message:</strong><br>${contact.message.replace(/\n/g, '<br>')}
              </div>
              <div class="info-item">
                <strong>Submitted:</strong> ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </div>
              <div class="info-item">
                <strong>Reference ID:</strong> #${contact.id}
              </div>
            </div>
          </div>

          <h3>What happens next?</h3>
          <ul>
            <li>✅ Our team will review your message within 2-4 business hours</li>
            <li>✅ We'll reach out to you at <strong>${contact.email}</strong></li>
            <li>✅ You can expect a detailed response within 24 hours</li>
          </ul>

          <div style="text-align: center;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" class="button">Visit Our Website</a>
          </div>

          <p>If you have any urgent questions, feel free to call us directly or reply to this email.</p>
          
          <p>Best regards,<br>
          <strong>The CreatorIT Team</strong></p>
        </div>

        <div class="footer">
          <p><strong>CreatorIT</strong> - Professional Web Development Services</p>
          <p>Website: <a href="https://www.creatorit.in" style="color: #667eea;">www.creatorit.in</a></p>
          <p style="font-size: 11px; color: #999; margin-top: 15px;">
            This is an automated confirmation email. Please keep this email for your records.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
Dear ${contact.name},

Thank you for contacting CreatorIT! We have successfully received your message and our team will review it shortly.

YOUR MESSAGE DETAILS:
Subject: ${contact.subject}
${contact.serviceInterest ? `Service Interest: ${contact.serviceInterest}` : ''}
${contact.budgetRange ? `Budget Range: ${contact.budgetRange}` : ''}

Message:
${contact.message}

Submitted: ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Reference ID: #${contact.id}

WHAT HAPPENS NEXT?
✅ Our team will review your message within 2-4 business hours
✅ We'll reach out to you at ${contact.email}
✅ You can expect a detailed response within 24 hours

If you have any urgent questions, feel free to call us directly or reply to this email.

Best regards,
The CreatorIT Team

---
CreatorIT - Professional Web Development Services
Website: www.creatorit.in
  `;

  return { subject, html, text };
}

export async function sendContactNotification(contact: DatabaseContact): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn('SMTP credentials not configured. Email notification skipped.');
      return false;
    }

    const emailTemplate = generateAdminNotificationEmail(contact);
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"CreatorIT Contact Form" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      replyTo: contact.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    console.log(`Admin notification sent for contact #${contact.id}`);
    return true;
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return false;
  }
}

export async function sendUserConfirmation(contact: DatabaseContact): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn('SMTP credentials not configured. User confirmation skipped.');
      return false;
    }

    const emailTemplate = generateUserConfirmationEmail(contact);

    await transporter.sendMail({
      from: `"CreatorIT" <${process.env.SMTP_USER}>`,
      to: contact.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    console.log(`User confirmation sent to ${contact.email}`);
    return true;
  } catch (error) {
    console.error('Failed to send user confirmation:', error);
    return false;
  }
}
export async function sendQuickReplyEmail(
  contact: DatabaseContact,
  templateType: string
): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn('SMTP credentials not configured. Quick reply email skipped.');
      return false;
    }

    const templates: Record<string, { subject: string; html: string; text: string }> = {
      understanding: {
        subject: 'We understand your request - CreatorIT',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
              .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; }
              .content { padding: 30px 20px; }
              .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✅ We've Received Your Request</h1>
              </div>
              <div class="content">
                <p>Dear <strong>${contact.name}</strong>,</p>
                <p>Thank you for reaching out to us regarding: <strong>${contact.subject}</strong></p>
                <p>We want to let you know that we have carefully reviewed your request and understand your requirements. Our team is currently analyzing the best approach to address your needs.</p>
                <p>We'll get back to you shortly with more details.</p>
                <p>Best regards,<br><strong>The CreatorIT Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>CreatorIT</strong> - Professional Web Development Services</p>
                <p>Website: <a href="https://www.creatorit.in" style="color: #667eea;">www.creatorit.in</a></p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Dear ${contact.name},\n\nThank you for reaching out to us regarding: ${contact.subject}\n\nWe want to let you know that we have carefully reviewed your request and understand your requirements. Our team is currently analyzing the best approach to address your needs.\n\nWe'll get back to you shortly with more details.\n\nBest regards,\nThe CreatorIT Team`
      },
      accepted: {
        subject: 'Request Accepted - CreatorIT',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
              .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 40px 20px; text-align: center; }
              .content { padding: 30px 20px; }
              .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Request Accepted!</h1>
              </div>
              <div class="content">
                <p>Dear <strong>${contact.name}</strong>,</p>
                <p>Great news! We have accepted your request for: <strong>${contact.subject}</strong></p>
                <p>Our team is excited to work with you and will begin the project soon. We'll keep you updated on our progress every step of the way.</p>
                <p>If you have any questions or additional requirements, please don't hesitate to reach out.</p>
                <p>Best regards,<br><strong>The CreatorIT Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>CreatorIT</strong> - Professional Web Development Services</p>
                <p>Website: <a href="https://www.creatorit.in" style="color: #667eea;">www.creatorit.in</a></p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Dear ${contact.name},\n\nGreat news! We have accepted your request for: ${contact.subject}\n\nOur team is excited to work with you and will begin the project soon. We'll keep you updated on our progress every step of the way.\n\nIf you have any questions or additional requirements, please don't hesitate to reach out.\n\nBest regards,\nThe CreatorIT Team`
      },
      in_progress: {
        subject: 'Work in Progress - CreatorIT',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
              .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 40px 20px; text-align: center; }
              .content { padding: 30px 20px; }
              .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 Work in Progress</h1>
              </div>
              <div class="content">
                <p>Dear <strong>${contact.name}</strong>,</p>
                <p>We're currently working on your project: <strong>${contact.subject}</strong></p>
                <p>Our team is actively developing and implementing your requirements. We're making great progress and will keep you informed of any significant milestones.</p>
                <p>Thank you for your patience!</p>
                <p>Best regards,<br><strong>The CreatorIT Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>CreatorIT</strong> - Professional Web Development Services</p>
                <p>Website: <a href="https://www.creatorit.in" style="color: #667eea;">www.creatorit.in</a></p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Dear ${contact.name},\n\nWe're currently working on your project: ${contact.subject}\n\nOur team is actively developing and implementing your requirements. We're making great progress and will keep you informed of any significant milestones.\n\nThank you for your patience!\n\nBest regards,\nThe CreatorIT Team`
      },
      almost_done: {
        subject: 'Almost Complete - CreatorIT',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
              .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); color: white; padding: 40px 20px; text-align: center; }
              .content { padding: 30px 20px; }
              .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎊 Almost Complete!</h1>
              </div>
              <div class="content">
                <p>Dear <strong>${contact.name}</strong>,</p>
                <p>Exciting news about your project: <strong>${contact.subject}</strong></p>
                <p>We're in the final stages and your work is almost complete! We're doing final quality checks and will deliver it to you very soon.</p>
                <p>Get ready to see the amazing results!</p>
                <p>Best regards,<br><strong>The CreatorIT Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>CreatorIT</strong> - Professional Web Development Services</p>
                <p>Website: <a href="https://www.creatorit.in" style="color: #667eea;">www.creatorit.in</a></p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Dear ${contact.name},\n\nExciting news about your project: ${contact.subject}\n\nWe're in the final stages and your work is almost complete! We're doing final quality checks and will deliver it to you very soon.\n\nGet ready to see the amazing results!\n\nBest regards,\nThe CreatorIT Team`
      },
      will_reach_soon: {
        subject: 'We will reach you soon - CreatorIT',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
              .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 40px 20px; text-align: center; }
              .content { padding: 30px 20px; }
              .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📞 We'll Contact You Soon</h1>
              </div>
              <div class="content">
                <p>Dear <strong>${contact.name}</strong>,</p>
                <p>Thank you for your inquiry regarding: <strong>${contact.subject}</strong></p>
                <p>We have received your request and one of our team members will reach out to you shortly to discuss the details and next steps.</p>
                <p>We appreciate your patience and look forward to connecting with you soon!</p>
                <p>Best regards,<br><strong>The CreatorIT Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>CreatorIT</strong> - Professional Web Development Services</p>
                <p>Website: <a href="https://www.creatorit.in" style="color: #667eea;">www.creatorit.in</a></p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Dear ${contact.name},\n\nThank you for your inquiry regarding: ${contact.subject}\n\nWe have received your request and one of our team members will reach out to you shortly to discuss the details and next steps.\n\nWe appreciate your patience and look forward to connecting with you soon!\n\nBest regards,\nThe CreatorIT Team`
      },
      bot_detected: {
        subject: 'Invalid Submission - CreatorIT',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
              .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; padding: 40px 20px; text-align: center; }
              .content { padding: 30px 20px; }
              .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>⚠️ Invalid Submission Detected</h1>
              </div>
              <div class="content">
                <p>Hello,</p>
                <p>We have detected that your recent form submission may have been automated or contains invalid information.</p>
                <p>If you are a genuine user and wish to contact us, please:</p>
                <ul>
                  <li>Visit our website directly at www.creatorit.in</li>
                  <li>Fill out the contact form manually</li>
                  <li>Provide accurate and complete information</li>
                </ul>
                <p>If you believe this is an error, please contact us directly.</p>
                <p>Best regards,<br><strong>The CreatorIT Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>CreatorIT</strong> - Professional Web Development Services</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Hello,\n\nWe have detected that your recent form submission may have been automated or contains invalid information.\n\nIf you are a genuine user and wish to contact us, please visit our website directly at www.creatorit.in and fill out the contact form manually with accurate information.\n\nBest regards,\nThe CreatorIT Team`
      }
    };

    const template = templates[templateType];
    if (!template) {
      console.error('Invalid template type:', templateType);
      return false;
    }

    await transporter.sendMail({
      from: `"CreatorIT" <${process.env.SMTP_USER}>`,
      to: contact.email,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });

    console.log(`Quick reply (${templateType}) sent to ${contact.email}`);
    return true;
  } catch (error) {
    console.error('Failed to send quick reply email:', error);
    return false;
  }
}
export async function testEmailConfiguration(): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured');
      return false;
    }

    await transporter.verify();
    console.log('SMTP configuration is valid');
    return true;
  } catch (error) {
    console.error('SMTP configuration test failed:', error);
    return false;
  }
}