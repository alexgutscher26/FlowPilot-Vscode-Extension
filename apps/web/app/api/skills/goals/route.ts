import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

// GET: Fetch all goals for authenticated user
export async function GET(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const userId = session.user.id
        const { searchParams } = new URL(req.url)
        const status = searchParams.get("status") || "active"

        const goals = await prisma.skillGoal.findMany({
            where: {
                userId,
                ...(status !== "all" && { status: status as any }),
            },
            include: {
                skill: {
                    select: {
                        id: true,
                        concept: true,
                        confidence: true,
                        language: true,
                        totalExplanations: true,
                    },
                },
            },
            orderBy: [
                { status: "asc" }, // Active goals first
                { deadline: "asc" }, // Soonest deadline first
                { createdAt: "desc" },
            ],
        })

        // Calculate progress for each goal
        const goalsWithProgress = goals.map((goal) => {
            const currentConfidence = goal.skill?.confidence || 0
            const progress = Math.min(
                Math.round((currentConfidence / goal.targetConfidence) * 100),
                100
            )

            return {
                ...goal,
                currentProgress: progress,
            }
        })

        return NextResponse.json({ goals: goalsWithProgress })
    } catch (error) {
        console.error("[Skills Goals API] GET Error:", error)
        return NextResponse.json(
            { error: "Failed to fetch goals" },
            { status: 500 }
        )
    }
}

// POST: Create new skill goal
export async function POST(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const userId = session.user.id
        const body = await req.json()
        const { conceptName, targetConfidence, deadline } = body

        // Validation
        if (!conceptName || typeof conceptName !== "string") {
            return NextResponse.json(
                { error: "Concept name is required" },
                { status: 400 }
            )
        }

        if (
            targetConfidence &&
            (targetConfidence < 0 || targetConfidence > 100)
        ) {
            return NextResponse.json(
                { error: "Target confidence must be between 0 and 100" },
                { status: 400 }
            )
        }

        // Check if skill exists for this concept
        const existingSkill = await prisma.skill.findUnique({
            where: {
                userId_concept: {
                    userId,
                    concept: conceptName,
                },
            },
        })

        // Check if goal already exists for this concept
        const existingGoal = await prisma.skillGoal.findFirst({
            where: {
                userId,
                conceptName,
                status: "active",
            },
        })

        if (existingGoal) {
            return NextResponse.json(
                { error: "Active goal already exists for this concept" },
                { status: 400 }
            )
        }

        const currentConfidence = existingSkill?.confidence || 0
        const progress = Math.min(
            Math.round((currentConfidence / (targetConfidence || 80)) * 100),
            100
        )

        const goal = await prisma.skillGoal.create({
            data: {
                userId,
                skillId: existingSkill?.id,
                conceptName,
                targetConfidence: targetConfidence || 80,
                currentProgress: progress,
                deadline: deadline ? new Date(deadline) : null,
                status: "active",
            },
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

        return NextResponse.json({ goal }, { status: 201 })
    } catch (error) {
        console.error("[Skills Goals API] POST Error:", error)
        return NextResponse.json(
            { error: "Failed to create goal" },
            { status: 500 }
        )
    }
}

// PATCH: Update goal status or deadline
export async function PATCH(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const userId = session.user.id
        const body = await req.json()
        const { goalId, status, deadline, targetConfidence } = body

        if (!goalId) {
            return NextResponse.json(
                { error: "Goal ID is required" },
                { status: 400 }
            )
        }

        // Verify goal belongs to user
        const existingGoal = await prisma.skillGoal.findUnique({
            where: { id: goalId },
        })

        if (!existingGoal || existingGoal.userId !== userId) {
            return NextResponse.json({ error: "Goal not found" }, { status: 404 })
        }

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
        console.error("[Skills Goals API] PATCH Error:", error)
        return NextResponse.json(
            { error: "Failed to update goal" },
            { status: 500 }
        )
    }
}

// DELETE: Remove goal (soft delete by setting status to abandoned)
export async function DELETE(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const userId = session.user.id
        const { searchParams } = new URL(req.url)
        const goalId = searchParams.get("id")

        if (!goalId) {
            return NextResponse.json(
                { error: "Goal ID is required" },
                { status: 400 }
            )
        }

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
        console.error("[Skills Goals API] DELETE Error:", error)
        return NextResponse.json(
            { error: "Failed to delete goal" },
            { status: 500 }
        )
    }
}
