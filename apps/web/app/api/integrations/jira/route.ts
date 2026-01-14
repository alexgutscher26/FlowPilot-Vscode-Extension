
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { z } from "zod"

const jiraConfigSchema = z.object({
    domain: z.string().min(1, "Domain is required"),
    email: z.string().email("Invalid email address"),
    apiToken: z.string().min(1, "API Token is required"),
    defaultProject: z.string().optional(),
})

export async function GET(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const integration = await prisma.integration.findUnique({
            where: {
                userId_provider: {
                    userId: session.user.id,
                    provider: "jira",
                },
            },
        })

        if (!integration) {
            return NextResponse.json({ connected: false })
        }

        const config = integration.config as any
        return NextResponse.json({
            connected: true,
            domain: config.domain,
            email: config.email,
            defaultProject: config.defaultProject,
            // Never return the API token
        })
    } catch (error) {
        console.error("Failed to get Jira integration:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const body = await req.json()
        const result = jiraConfigSchema.safeParse(body)

        if (!result.success) {
            return NextResponse.json(
                { message: "Invalid configuration", errors: result.error.flatten() },
                { status: 400 }
            )
        }

        const { domain, email, apiToken, defaultProject } = result.data

        // Verify Jira credentials
        // Remove "https://" or "http://" if present for the host, but needed for the URL
        let host = domain.replace(/^https?:\/\//, "").replace(/\/$/, "")
        const testUrl = `https://${host}/rest/api/3/myself`

        const testRes = await fetch(testUrl, {
            method: "GET",
            headers: {
                Authorization: `Basic ${Buffer.from(`${email}:${apiToken}`).toString("base64")}`,
                Accept: "application/json",
            },
        })

        if (!testRes.ok) {
            return NextResponse.json(
                { message: "Failed to connect to Jira. Please check your credentials." },
                { status: 400 }
            )
        }

        // Save integration
        await prisma.integration.upsert({
            where: {
                userId_provider: {
                    userId: session.user.id,
                    provider: "jira",
                },
            },
            update: {
                config: { domain: host, email, apiToken, defaultProject },
            },
            create: {
                userId: session.user.id,
                provider: "jira",
                config: { domain: host, email, apiToken, defaultProject },
            },
        })

        return NextResponse.json({ connected: true })
    } catch (error) {
        console.error("Failed to save Jira integration:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function DELETE(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        await prisma.integration.deleteMany({
            where: {
                userId: session.user.id,
                provider: "jira",
            },
        })

        return NextResponse.json({ connected: false })
    } catch (error) {
        console.error("Failed to delete Jira integration:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
