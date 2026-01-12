import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function PATCH(
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
        const { body: commentBody } = body

        // Validate input
        if (!commentBody || typeof commentBody !== "string") {
            return NextResponse.json(
                { error: "Comment body is required" },
                { status: 400 }
            )
        }

        if (commentBody.trim().length === 0) {
            return NextResponse.json(
                { error: "Comment cannot be empty" },
                { status: 400 }
            )
        }

        if (commentBody.length > 500) {
            return NextResponse.json(
                { error: "Comment must be 500 characters or less" },
                { status: 400 }
            )
        }

        // Find the comment
        const comment = await prisma.featureComment.findUnique({
            where: { id: commentId },
        })

        if (!comment) {
            return NextResponse.json({ error: "Comment not found" }, { status: 404 })
        }

        // Check if user owns the comment
        if (comment.userId !== session.user.id) {
            return NextResponse.json(
                { error: "You can only edit your own comments" },
                { status: 403 }
            )
        }

        // Update the comment
        const updatedComment = await prisma.featureComment.update({
            where: { id: commentId },
            data: {
                body: commentBody.trim(),
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                    },
                },
            },
        })

        return NextResponse.json(updatedComment)
    } catch (error) {
        console.error("Error updating comment:", error)
        return NextResponse.json(
            { error: "Failed to update comment" },
            { status: 500 }
        )
    }
}
