import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

const ALLOWED_EMOJIS = ["👍", "❤️", "😄", "🎉", "🚀"]

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; commentId: string }> }
) {
  try {
    // Check authentication
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { commentId } = await params
    const body = await request.json()
    const { emoji } = body

    // Validate emoji
    if (!emoji || !ALLOWED_EMOJIS.includes(emoji)) {
      return NextResponse.json(
        { error: "Invalid emoji. Allowed: " + ALLOWED_EMOJIS.join(" ") },
        { status: 400 }
      )
    }

    // Check if comment exists
    const comment = await prisma.featureComment.findUnique({
      where: { id: commentId },
    })

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 })
    }

    // Check if reaction already exists
    const existingReaction = await prisma.commentReaction.findUnique({
      where: {
        commentId_userId_emoji: {
          commentId,
          userId: session.user.id,
          emoji,
        },
      },
    })

    if (existingReaction) {
      // Remove reaction (toggle off)
      await prisma.commentReaction.delete({
        where: { id: existingReaction.id },
      })
    } else {
      // Add reaction (toggle on)
      await prisma.commentReaction.create({
        data: {
          commentId,
          userId: session.user.id,
          emoji,
        },
      })
    }

    // Get updated reaction counts
    const reactions = await prisma.commentReaction.groupBy({
      by: ["emoji"],
      where: { commentId },
      _count: { emoji: true },
    })

    const userReactions = await prisma.commentReaction.findMany({
      where: {
        commentId,
        userId: session.user.id,
      },
      select: { emoji: true },
    })

    const reactionData = reactions.map((r) => ({
      emoji: r.emoji,
      count: r._count.emoji,
      userReacted: userReactions.some((ur) => ur.emoji === r.emoji),
    }))

    return NextResponse.json({ reactions: reactionData })
  } catch (error) {
    console.error("Error toggling reaction:", error)
    return NextResponse.json({ error: "Failed to toggle reaction" }, { status: 500 })
  }
}
