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
    const days = parseInt(searchParams.get('days') || '30');

    const analytics = await ChatRepository.getAnalytics(days);

    return NextResponse.json({
      success: true,
      analytics,
    });
  } catch (error) {
    console.error('Failed to fetch analytics:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}