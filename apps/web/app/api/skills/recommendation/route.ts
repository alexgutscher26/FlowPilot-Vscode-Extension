import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

// Mapping of concepts to review modules
const REVIEW_MODULES: Record<string, { title: string; duration?: string; snippets?: number }> = {
  "React Hooks": { title: "Master useEffect Dependencies", duration: "5 min" },
  "Async/Await": { title: "Async/Await Pattern", snippets: 2 },
  "TypeScript Generics": { title: "Generic Type Patterns", duration: "7 min" },
  Promises: { title: "Promise Chain Mastery", snippets: 3 },
  "State Management": { title: "React State Patterns", duration: "6 min" },
  "Array Methods": { title: "Array Manipulation Techniques", snippets: 4 },
  "Error Handling": { title: "Error Handling Best Practices", duration: "5 min" },
  "API Integration": { title: "REST API Patterns", snippets: 2 },
}

// GET: Get personalized learning recommendations
export async function GET(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    // Find skills with:
    // 1. High total explanations (>10) but low confidence (<60)
    // 2. Recently active (last 7 days)
    const candidateSkills = await prisma.skill.findMany({
      where: {
        userId,
        totalExplanations: {
          gte: 10,
        },
        confidence: {
          lt: 60,
        },
        lastSeenAt: {
          gte: sevenDaysAgo,
        },
      },
      orderBy: [{ lastSeenAt: "desc" }, { totalExplanations: "desc" }],
      take: 5,
    })

    // Map to review modules
    const recommendations = candidateSkills
      .map((skill) => {
        const module = REVIEW_MODULES[skill.concept]
        if (module) {
          return {
            concept: skill.concept,
            ...module,
          }
        }
        // Default recommendation for unmapped concepts
        return {
          concept: skill.concept,
          title: `Review ${skill.concept} Fundamentals`,
          duration: "5 min",
        }
      })
      .slice(0, 2) // Return top 2 recommendations

    return NextResponse.json({
      focus: recommendations,
    })
  } catch (error) {
    console.error("[Skills Recommendation API] Error:", error)
    return NextResponse.json({ error: "Failed to fetch recommendations" }, { status: 500 })
  }
}
