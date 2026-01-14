import { NextResponse } from "next/server"
import OpenAI from "openai"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { prisma } from "@/lib/db"
import { processConceptsForUser } from "@/lib/skillProcessor"
import { checkLimit, incrementUsage, checkLineCountLimit, checkRateLimit } from "@/lib/user-usage"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { code, fileName, languageId, surroundingLines, apiKey } = body

    console.log("[Explain API] Received request:", {
      fileName,
      languageId,
      codeLength: code?.length,
    })

    // Get authenticated user (optional - can work without auth)
    let userId: string | null = null
    try {
      const session = await auth.api.getSession({
        headers: await headers(),
      })
      userId = session?.user?.id || null
    } catch (authError) {
      console.log("[Explain API] No authenticated user, proceeding anonymously")
    }

    if (!userId) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    // Rate Limit
    const rateLimit = await checkRateLimit(userId)
    if (!rateLimit.allowed) {
      return NextResponse.json({ error: "API rate limit exceeded. Upgrade to Pro for more." }, { status: 429 })
    }

    // Line Count Limit
    const lineLimit = await checkLineCountLimit(userId, code?.split('\n').length || 0)
    if (!lineLimit.allowed) {
      return NextResponse.json({ error: `Line count limit exceeded. Max ${lineLimit.limit} lines allowed.` }, { status: 403 })
    }

    // Feature Limit
    const featureLimit = await checkLimit(userId, "EXPLANATION")
    if (!featureLimit.allowed) {
      return NextResponse.json({ error: "Daily explanation limit reached. Upgrade to Pro for unlimited." }, { status: 403 })
    }

    if (!process.env.OPENROUTER_API_KEY) {
      console.error("[Explain API] Missing OPENROUTER_API_KEY")
      return NextResponse.json(
        { error: "Server misconfiguration: Missing API Key" },
        { status: 500 }
      )
    }

    const systemPrompt = `
You are an expert coding assistant used in a VS Code extension.
Your task is to explain the provided code snippet clearly and concisely.
You must return a valid JSON object with the following structure:
{
    "overview": "A brief summary of what the code does.",
    "lineByLine": [
        {
            "line": <number, relative to the selection start (1-based)>,
            "content": "<exact content of the line>",
            "explanation": "<short explanation of this specific line>"
        }
    ],
    "concepts": ["<concept1>", "<concept2>", ...],
    "suggestions": ["<suggestion1>", "<suggestion2>", ...]
}

IMPORTANT for "concepts" field:
- Extract 2-5 key programming concepts demonstrated in the code
- Use standard, recognizable concept names (e.g., "React Hooks", "Async/Await", "TypeScript Generics", "Array Methods", "Error Handling")
- Focus on concepts that are actually demonstrated, not just mentioned
- Be specific but not overly granular (e.g., "useState Hook" not just "React")

Format the "lineByLine" array to match the input code lines exactly.
Do not include markdown formatting (like \`\`\`json) in your response, just the raw JSON object.
`

    const userPrompt = `
File: ${fileName}
Language: ${languageId}
Code to explain:
${code}
`

    // Use fast, reliable paid models with fallback
    const models = [
      "openai/gpt-4o-mini", // Fastest, most reliable
      "anthropic/claude-3-5-haiku", // Fast, high quality
      "google/gemini-2.0-flash-exp:free", // Free fallback
    ]

    let accumulatedContent = ""
    let selectedModel = models[0]

    // Try models in sequence until one works
    for (const model of models) {
      try {
        console.log(`[Explain API] Trying model: ${model}`)
        selectedModel = model

        const stream = await openai.chat.completions.create({
          model: model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          response_format: { type: "json_object" },
          stream: true,
        })

        // Create a streaming response
        const encoder = new TextEncoder()
        const readable = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of stream) {
                const content = chunk.choices[0]?.delta?.content || ""
                if (content) {
                  accumulatedContent += content
                  // Send each chunk as SSE
                  controller.enqueue(
                    encoder.encode(
                      `data: ${JSON.stringify({ chunk: content, accumulated: accumulatedContent })}\n\n`
                    )
                  )
                }
              }

              // Send final complete message
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ done: true, content: accumulatedContent })}\n\n`
                )
              )

              // Process concepts if user is authenticated
              if (userId && accumulatedContent) {
                try {
                  const parsedResponse = JSON.parse(accumulatedContent)
                  const concepts = parsedResponse.concepts || []

                  if (concepts.length > 0) {
                    // Increment Usage
                    await incrementUsage(userId, "EXPLANATION")

                    // Store explanation record
                    await prisma.explanation.create({
                      data: {
                        userId,
                        language: languageId,
                        concepts,
                        interactionType: "Explanation",
                      },
                    })

                    // Process concepts and update skills
                    await processConceptsForUser(
                      userId,
                      concepts.map((concept: string) => ({
                        concept,
                        language: languageId,
                      }))
                    )

                    console.log(`[Explain API] Processed ${concepts.length} concepts for user ${userId}`)
                  }
                } catch (conceptError) {
                  console.error("[Explain API] Failed to process concepts:", conceptError)
                  // Don't fail the request if concept processing fails
                }
              }

              controller.close()
            } catch (error) {
              console.error("[Explain API] Streaming error:", error)
              controller.error(error)
            }
          },
        })

        // Log the usage
        try {
          const logEntry = {
            timestamp: new Date().toISOString(),
            userId: userId || "anonymous-user",
            language: languageId,
            fileName: fileName,
            model: selectedModel,
          }
          const fs = require("fs")
          const path = require("path")
          const logDir = path.join(process.cwd(), "logs")
          if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir)
          }
          fs.appendFileSync(path.join(logDir, "usage.jsonl"), JSON.stringify(logEntry) + "\n")
        } catch (logError) {
          console.error("[Explain API] Logging failed:", logError)
        }

        return new Response(readable, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
          },
        })
      } catch (error: any) {
        console.warn(`[Explain API] Model ${model} failed:`, error?.message || error)

        // If this is the last model, throw the error
        if (model === models[models.length - 1]) {
          throw error
        }
        // Otherwise, try the next model
        continue
      }
    }

    // This should never be reached due to the throw above
    throw new Error("All models failed")
  } catch (error) {
    console.error("[Explain API] Error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
