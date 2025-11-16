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

export async function GET(request: NextRequest) {
  const session = checkAuth();
  if (!session) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const sessionId = searchParams.get('sessionId') || undefined;
    const isResolvedParam = searchParams.get('isResolved');
    const isResolved = isResolvedParam ? isResolvedParam === 'true' : undefined;

    const result = await ChatRepository.getChatHistory(page, 50, {
      sessionId,
      isResolved,
    });

    return NextResponse.json({
      success: true,
      chats: result.chats,
      total: result.total,
      totalPages: result.totalPages,
    });
  } catch (error) {
    console.error('Failed to fetch chats:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch chats' },
      { status: 500 }
    );
  }
}