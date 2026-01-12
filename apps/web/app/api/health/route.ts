import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET() {
    try {
        // Check database connectivity
        await prisma.$queryRaw`SELECT 1`

        return NextResponse.json(
            {
                status: "ok",
                database: "connected",
                timestamp: new Date().toISOString(),
                uptime: process.uptime(),
            },
            { status: 200 }
        )
    } catch (error) {
        console.error("[Health Check] Database connection failed:", error)
        return NextResponse.json(
            {
                status: "error",
                database: "disconnected",
                timestamp: new Date().toISOString(),
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 503 }
        )
    }
}
