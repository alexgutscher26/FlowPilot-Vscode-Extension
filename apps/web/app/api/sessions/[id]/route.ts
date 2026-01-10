
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;

        const codingSession = await prisma.codingSession.findUnique({
            where: {
                id: id,
                userId: session.user.id // Ensure user owns the session
            }
        });

        if (!codingSession) {
            return NextResponse.json({ error: "Session not found" }, { status: 404 });
        }

        return NextResponse.json(codingSession);

    } catch (error) {
        console.error('[Session Details API] Error:', error);
        return NextResponse.json({ error: 'Failed to fetch session details' }, { status: 500 });
    }
}
