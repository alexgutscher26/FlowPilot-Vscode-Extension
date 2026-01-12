import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: featureId } = await params
    const { searchParams } = new URL(request.url)
    const cursor = searchParams.get("cursor")
    const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50)

    // Get current user ID for reaction status
    const session = await auth.api.getSession({
      headers: request.headers,
    })
    const userId = session?.user?.id

    // Fetch top-level comments (no parent) with pagination
    const comments = await prisma.featureComment.findMany({
      where: {
        featureId,
        parentCommentId: null,
      },
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        reactions: {
          select: {
            emoji: true,
            userId: true,
          },
        },
        replies: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            reactions: {
              select: {
                emoji: true,
                userId: true,
              },
            },
            _count: {
              select: {
                replies: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
          take: 50, // Limit replies per comment
        },
        _count: {
          select: {
            replies: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    const hasMore = comments.length > limit
    const commentsToReturn = hasMore ? comments.slice(0, -1) : comments

    // Transform reactions to grouped format
    const transformedComments = commentsToReturn.map((comment) => {
      const reactionGroups = comment.reactions.reduce(
        (acc, r) => {
          if (!acc[r.emoji]) {
            acc[r.emoji] = { emoji: r.emoji, count: 0, userReacted: false }
          }
          acc[r.emoji].count++
          if (userId && r.userId === userId) {
            acc[r.emoji].userReacted = true
          }
          return acc
        },
        {} as Record<string, { emoji: string; count: number; userReacted: boolean }>
      )

      const transformReplies = (replies: any[]) =>
        replies.map((reply) => {
          const replyReactionGroups = reply.reactions.reduce(
            (acc, r) => {
              if (!acc[r.emoji]) {
                acc[r.emoji] = { emoji: r.emoji, count: 0, userReacted: false }
              }
              acc[r.emoji].count++
              if (userId && r.userId === userId) {
                acc[r.emoji].userReacted = true
              }
              return acc
            },
            {} as Record<string, { emoji: string; count: number; userReacted: boolean }>
          )

          return {
            ...reply,
            reactions: Object.values(replyReactionGroups),
            isEdited: reply.updatedAt > reply.createdAt,
            replyCount: reply._count.replies,
          }
        })

      return {
        ...comment,
        reactions: Object.values(reactionGroups),
        isEdited: comment.updatedAt > comment.createdAt,
        replyCount: comment._count.replies,
        replies: transformReplies(comment.replies),
      }
    })

    const total = await prisma.featureComment.count({
      where: {
        featureId,
        parentCommentId: null,
      },
    })

    return NextResponse.json({
      comments: transformedComments,
      nextCursor: hasMore ? commentsToReturn[commentsToReturn.length - 1].id : null,
      total,
    })
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id: featureId } = await params
    const body = await request.json()
    const { body: commentBody, parentCommentId } = body

    // Validate input
    if (!commentBody || typeof commentBody !== "string") {
      return NextResponse.json({ error: "Comment body is required" }, { status: 400 })
    }

    if (commentBody.trim().length === 0) {
      return NextResponse.json({ error: "Comment cannot be empty" }, { status: 400 })
    }

    if (commentBody.length > 500) {
      return NextResponse.json({ error: "Comment must be 500 characters or less" }, { status: 400 })
    }

    // If replying, check nesting depth
    if (parentCommentId) {
      const parentComment = await prisma.featureComment.findUnique({
        where: { id: parentCommentId },
        select: { parentCommentId: true },
      })

      if (!parentComment) {
        return NextResponse.json({ error: "Parent comment not found" }, { status: 404 })
      }

      // Prevent nesting beyond 2 levels
      if (parentComment.parentCommentId) {
        return NextResponse.json({ error: "Maximum nesting depth reached" }, { status: 400 })
      }
    }

    // Check if feature exists
    const feature = await prisma.feature.findUnique({
      where: { id: featureId },
    })

    if (!feature) {
      return NextResponse.json({ error: "Feature not found" }, { status: 404 })
    }

    // Create the comment
    const comment = await prisma.featureComment.create({
      data: {
        body: commentBody.trim(),
        featureId,
        userId: session.user.id,
        parentCommentId: parentCommentId || null,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        reactions: true,
        _count: {
          select: {
            replies: true,
          },
        },
      },
    })

    return NextResponse.json(
      {
        ...comment,
        reactions: [],
        isEdited: false,
        replyCount: 0,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 })
  }
}
