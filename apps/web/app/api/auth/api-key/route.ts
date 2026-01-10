
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // server-side auth
import { prisma } from "@/lib/db";
import crypto from "crypto";
import { headers } from "next/headers";

export async function POST(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Generate a secure API key
        const rawKey = crypto.randomBytes(32).toString("hex");
        const apiKey = `fp_${rawKey}`; // 'fp_' prefix for FlowPilot

        await prisma.apiKey.create({
            data: {
                key: apiKey,
                userId: session.user.id,
                name: "VS Code Extension",
            },
        });

        return NextResponse.json({ apiKey });
    } catch (error) {
        console.error("Error creating API key:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
