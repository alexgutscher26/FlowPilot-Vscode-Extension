import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    // Get the current user's ID from the session if available
    const userId = request.headers.get("x-user-id") // We'll handle auth properly in the page

    // Fetch all features with vote counts
    const features = await prisma.feature.findMany({
      include: {
        votes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            votes: true,
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    // Transform features to include vote count and user's vote status
    const transformedFeatures = features.map((feature) => ({
      id: feature.id,
      title: feature.title,
      description: feature.description,
      status: feature.status,
      tag: feature.tag,
      voteCount: feature._count.votes,
      commentCount: feature._count.comments,
      userHasVoted: userId ? feature.votes.some((vote) => vote.userId === userId) : false,
      createdAt: feature.createdAt,
    }))

    // Group features by status
    const grouped = {
      now: transformedFeatures.filter((f) => f.status === "now"),
      in_progress: transformedFeatures.filter((f) => f.status === "in_progress"),
      next: transformedFeatures.filter((f) => f.status === "next"),
      planned: transformedFeatures.filter((f) => f.status === "planned"),
      later: transformedFeatures.filter((f) => f.status === "later"),
      considering: transformedFeatures.filter((f) => f.status === "considering"),
    }

    return NextResponse.json(grouped)
  } catch (error) {
    console.error("Error fetching roadmap:", error)
    return NextResponse.json({ error: "Failed to fetch roadmap" }, { status: 500 })
  }
}
