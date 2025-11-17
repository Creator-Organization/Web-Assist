import { NextRequest, NextResponse } from 'next/server';
import { adminLoginSchema } from '@/lib/validations';
import { AdminRepository } from '@/lib/database';
import { cookies } from 'next/headers';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = adminLoginSchema.parse(body);

    const admin = await AdminRepository.verifyPassword(
      validatedData.username,
      validatedData.password
    );

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password' },
        { status: 401 }
      );
    }

    const sessionData = {
      userId: admin.id,
      username: admin.username,
      role: admin.role,
    };

    cookies().set('admin_session', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid input' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Login failed' },
      { status: 500 }
    );
  }
}