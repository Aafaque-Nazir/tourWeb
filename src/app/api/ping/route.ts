import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure it's not cached

export async function GET() {
    return NextResponse.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
}
