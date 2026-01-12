import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Await params in Next.js 16+
    const { id: featureId } = await params

    // Check if feature exists
    const feature = await prisma.feature.findUnique({
      where: { id: featureId },
    })

    if (!feature) {
      return NextResponse.json({ error: "Feature not found" }, { status: 404 })
    }

    // Check if user has already voted
    const existingVote = await prisma.featureVote.findUnique({
      where: {
        featureId_userId: {
          featureId,
          userId: session.user.id,
        },
      },
    })

    if (existingVote) {
      // Remove vote (toggle off)
      await prisma.featureVote.delete({
        where: {
          id: existingVote.id,
        },
      })
    } else {
      // Add vote (toggle on)
      await prisma.featureVote.create({
        data: {
          featureId,
          userId: session.user.id,
        },
      })
    }

    // Get updated vote count
    const voteCount = await prisma.featureVote.count({
      where: { featureId },
    })

    return NextResponse.json({
      voteCount,
      userHasVoted: !existingVote, // Toggled state
    })
  } catch (error) {
    console.error("Error toggling vote:", error)
    return NextResponse.json({ error: "Failed to toggle vote" }, { status: 500 })
  }
}
