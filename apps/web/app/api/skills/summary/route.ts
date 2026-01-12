import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

// GET: Fetch skills summary including learning momentum and skill cards
export async function GET(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    // Get daily activity for the last 30 days
    const explanations = await prisma.explanation.findMany({
      where: {
        userId,
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
      select: {
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    })

    // Group by day
    const dailyActivityMap = new Map<string, number>()
    explanations.forEach((exp) => {
      const day = exp.createdAt.toISOString().split("T")[0]
      dailyActivityMap.set(day, (dailyActivityMap.get(day) || 0) + 1)
    })

    // Create array of last 30 days with counts
    const dailyActivity = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const day = date.toISOString().split("T")[0]
      dailyActivity.push({
        day,
        count: dailyActivityMap.get(day) || 0,
      })
    }

    // Calculate current streak
    let currentStreak = 0
    const today = new Date().toISOString().split("T")[0]
    let checkDate = new Date()

    while (true) {
      const dateStr = checkDate.toISOString().split("T")[0]
      if (dailyActivityMap.has(dateStr) && dailyActivityMap.get(dateStr)! > 0) {
        currentStreak++
        checkDate.setDate(checkDate.getDate() - 1)
      } else if (dateStr === today) {
        // If today has no activity, check yesterday
        checkDate.setDate(checkDate.getDate() - 1)
      } else {
        break
      }
    }

    // Get total explanations count
    const totalExplanations = await prisma.explanation.count({
      where: { userId },
    })

    // Get skills with activity in last 30 days
    const activeSkills = await prisma.skill.count({
      where: {
        userId,
        lastSeenAt: {
          gte: thirtyDaysAgo,
        },
      },
    })

    // Get all skills and apply confidence decay
    const skills = await prisma.skill.findMany({
      where: { userId },
      orderBy: {
        confidence: "desc",
      },
    })

    // Apply confidence decay for stale skills (no activity in 14+ days)
    const fourteenDaysAgo = new Date()
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14)

    const skillsWithDecay = skills.map((skill) => {
      let adjustedConfidence = skill.confidence
      if (skill.lastSeenAt < fourteenDaysAgo) {
        adjustedConfidence = Math.max(0, skill.confidence - 5)
      }
      return {
        ...skill,
        confidence: adjustedConfidence,
      }
    })

    return NextResponse.json({
      learningMomentum: {
        dailyActivity,
        totalExplanations,
        activeSkills,
        currentStreak,
      },
      skills: skillsWithDecay,
    })
  } catch (error) {
    console.error("[Skills Summary API] Error:", error)
    return NextResponse.json({ error: "Failed to fetch skills summary" }, { status: 500 })
  }
}
