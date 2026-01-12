import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const session = await auth.api.getSession({
            headers: request.headers,
        })

        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await request.json()
        const { title, description } = body

        // Validate input
        if (!title || !description) {
            return NextResponse.json(
                { error: "Title and description are required" },
                { status: 400 }
            )
        }

        if (title.length > 100) {
            return NextResponse.json(
                { error: "Title must be 100 characters or less" },
                { status: 400 }
            )
        }

        if (description.length > 1000) {
            return NextResponse.json(
                { error: "Description must be 1000 characters or less" },
                { status: 400 }
            )
        }

        // Create the feature
        const feature = await prisma.feature.create({
            data: {
                title,
                description,
                status: "considering",
                tag: "feature",
                createdByUserId: session.user.id,
            },
        })

        return NextResponse.json(feature, { status: 201 })
    } catch (error) {
        console.error("Error creating feature:", error)
        return NextResponse.json(
            { error: "Failed to create feature" },
            { status: 500 }
        )
    }
}
