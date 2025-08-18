import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    apiKeyPrefix: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.slice(0, 8) ?? null,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? null,
    envPresent: {
      apiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      projectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    },
  });
}
