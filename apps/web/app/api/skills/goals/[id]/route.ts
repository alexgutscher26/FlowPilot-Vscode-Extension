import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

// GET: Fetch specific goal details
export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const userId = session.user.id
        const goalId = params.id

        const goal = await prisma.skillGoal.findUnique({
            where: { id: goalId },
            include: {
                skill: {
                    select: {
                        id: true,
                        concept: true,
                        confidence: true,
                        language: true,
                        totalExplanations: true,
                        sessionsCount: true,
                        lastSeenAt: true,
                    },
                },
            },
        })

        if (!goal || goal.userId !== userId) {
            return NextResponse.json({ error: "Goal not found" }, { status: 404 })
        }

        return NextResponse.json({ goal })
    } catch (error) {
        console.error("[Skills Goal API] GET Error:", error)
        return NextResponse.json(
            { error: "Failed to fetch goal" },
            { status: 500 }
        )
    }
}

// PATCH: Update specific goal
export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const userId = session.user.id
        const goalId = params.id
        const body = await req.json()

        // Verify goal belongs to user
        const existingGoal = await prisma.skillGoal.findUnique({
            where: { id: goalId },
        })

        if (!existingGoal || existingGoal.userId !== userId) {
            return NextResponse.json({ error: "Goal not found" }, { status: 404 })
        }

        const { status, deadline, targetConfidence } = body
        const updateData: any = {}

        if (status) updateData.status = status
        if (deadline !== undefined)
            updateData.deadline = deadline ? new Date(deadline) : null
        if (targetConfidence !== undefined)
            updateData.targetConfidence = targetConfidence

        const updatedGoal = await prisma.skillGoal.update({
            where: { id: goalId },
            data: updateData,
            include: {
                skill: {
                    select: {
                        id: true,
                        concept: true,
                        confidence: true,
                        language: true,
                    },
                },
            },
        })

        return NextResponse.json({ goal: updatedGoal })
    } catch (error) {
        console.error("[Skills Goal API] PATCH Error:", error)
        return NextResponse.json(
            { error: "Failed to update goal" },
            { status: 500 }
        )
    }
}

// DELETE: Remove goal
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const userId = session.user.id
        const goalId = params.id

        // Verify goal belongs to user
        const existingGoal = await prisma.skillGoal.findUnique({
            where: { id: goalId },
        })

        if (!existingGoal || existingGoal.userId !== userId) {
            return NextResponse.json({ error: "Goal not found" }, { status: 404 })
        }

        await prisma.skillGoal.update({
            where: { id: goalId },
            data: { status: "abandoned" },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("[Skills Goal API] DELETE Error:", error)
        return NextResponse.json(
            { error: "Failed to delete goal" },
            { status: 500 }
        )
    }
}
