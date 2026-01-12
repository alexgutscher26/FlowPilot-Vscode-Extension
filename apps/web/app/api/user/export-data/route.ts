import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { prisma } from "@/lib/db"

export async function GET(req: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const email = session.user.email

    // Fetch all user data
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        codingSessions: {
          select: {
            id: true,
            description: true,
            interactionType: true,
            language: true,
            codeSnippet: true,
            explanation: true,
            metadata: true,
            startedAt: true,
            endedAt: true,
          },
        },
        apiKeys: {
          select: {
            id: true,
            name: true,
            lastUsed: true,
            createdAt: true,
            // Exclude the actual key for security
          },
        },
        tips: {
          select: {
            id: true,
            content: true,
            title: true,
            explanation: true,
            createdAt: true,
          },
        },
        sessions: {
          select: {
            id: true,
            createdAt: true,
            ipAddress: true,
            userAgent: true,
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Prepare export data
    const exportData = {
      exportDate: new Date().toISOString(),
      profile: {
        id: user.id,
        email: user.email,
        name: user.name,
        bio: user.bio,
        image: user.image,
        theme: user.theme,
        emailVerified: user.emailVerified,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      codingSessions: user.codingSessions,
      apiKeys: user.apiKeys,
      tips: user.tips,
      sessions: user.sessions,
      statistics: {
        totalCodingSessions: user.codingSessions.length,
        totalApiKeys: user.apiKeys.length,
        totalTips: user.tips.length,
        totalSessions: user.sessions.length,
      },
    }

    // Return as downloadable JSON
    return new NextResponse(JSON.stringify(exportData, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="flowpilot-data-export-${new Date().toISOString().split("T")[0]}.json"`,
      },
    })
  } catch (error) {
    console.error("Error exporting user data:", error)
    return NextResponse.json({ error: "Failed to export data" }, { status: 500 })
  }
}
