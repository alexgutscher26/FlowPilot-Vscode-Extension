import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

// POST: Receive session data from VS Code extension
export async function POST(req: Request) {
  try {
    const apiKeyHeader = req.headers.get("x-api-key")

    if (!apiKeyHeader) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 401 })
    }

    // Validate API Key
    const apiKeyRecord = await prisma.apiKey.findUnique({
      where: { key: apiKeyHeader },
      include: { user: true },
    })

    if (!apiKeyRecord) {
      return NextResponse.json({ error: "Invalid API Key" }, { status: 401 })
    }

    // Update last used
    await prisma.apiKey.update({
      where: { id: apiKeyRecord.id },
      data: { lastUsed: new Date() },
    })

    const sessionData = await req.json()

    // Create Coding Session
    // Note: The extension sends a simplified object, but we want to store rich data.
    // For MVP, we'll map what we can. Ideally extension sends more detail.
    // Assuming sessionData structure from extension: { id, started, explains, errors, reviews, concepts }

    // Use the first concept or a default as the description
    let description = "Coding Session"
    if (sessionData.concepts && sessionData.concepts.length > 0) {
      description = `Session focusing on ${sessionData.concepts[0]}`
    }

    // We can create a summary record.
    // Since the extension sends cumulative updates, we might want to upsert or create distinct events.
    // For simplicity now, let's treat each "update" as a snapshot or a new event if we want a history log,
    // BUT the dashboard wants a list of sessions.
    // Let's create a NEW entry for this specific interaction "snapshot" or just log it for now.
    // Better approach: The dashboard shows "Refactoring Auth Middleware", "Null Pointer Analysis".
    // These look like distinct *actions* rather than a long-running "session".

    // Let's treat the incoming data as an "Action" or "Interaction"
    // We'll map the extension's "trackExplain" call to a DB entry.

    await prisma.codingSession.create({
      data: {
        userId: apiKeyRecord.userId,
        description: description,
        interactionType: sessionData.interactionType || "General", // Extension needs to send this
        language: sessionData.language || "Unknown",
        codeSnippet: sessionData.codeSnippet,
        explanation: sessionData.explanation,
        metadata: sessionData,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Sessions API] Error:", error)
    return NextResponse.json({ error: "Failed to save session" }, { status: 500 })
  }
}

// GET: Fetch sessions for the Dashboard
export async function GET(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const sessions = await prisma.codingSession.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        startedAt: "desc",
      },
      take: 50, // Limit for now
    })

    return NextResponse.json(sessions)
  } catch (error) {
    console.error("[Sessions API] GET Error:", error)
    return NextResponse.json({ error: "Failed to fetch sessions" }, { status: 500 })
  }
}
