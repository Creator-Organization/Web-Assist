import { NextRequest, NextResponse } from 'next/server';
import { ChatRepository } from '@/lib/database';
import { cookies } from 'next/headers';

function checkAuth() {
  const session = cookies().get('admin_session');
  if (!session) return null;
  try {
    return JSON.parse(session.value);
  } catch {
    return null;
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = checkAuth();
  if (!session) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { isResolved, adminNotes } = body;

    const updated = await ChatRepository.updateChatStatus(
      parseInt(params.id),
      isResolved,
      adminNotes
    );

    if (updated) {
      return NextResponse.json({
        success: true,
        message: 'Chat status updated',
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Chat not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Failed to update chat:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update chat' },
      { status: 500 }
    );
  }
}