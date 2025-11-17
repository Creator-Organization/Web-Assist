import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sendQuickReplyEmail } from '@/lib/email';
import { ContactRepository } from '@/lib/database';

function checkAuth() {
  const session = cookies().get('admin_session');
  if (!session) return null;
  try {
    return JSON.parse(session.value);
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const session = checkAuth();
  if (!session) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { contactId, templateType } = body;

    if (!contactId || !templateType) {
      return NextResponse.json(
        { success: false, message: 'Contact ID and template type are required' },
        { status: 400 }
      );
    }

    const contact = await ContactRepository.getById(contactId);
    if (!contact) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }

    const emailSent = await sendQuickReplyEmail(contact, templateType);

    if (emailSent) {
      await ContactRepository.updateStatus(
        contactId,
        'replied',
        `Quick reply sent: ${templateType}`,
        session.username
      );

      return NextResponse.json({
        success: true,
        message: 'Quick reply sent successfully',
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Quick reply error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send quick reply' },
      { status: 500 }
    );
  }
}