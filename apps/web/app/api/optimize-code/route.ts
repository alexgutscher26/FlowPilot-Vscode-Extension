import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { code, fileName, languageId } = body

        if (!process.env.OPENROUTER_API_KEY) {
            return NextResponse.json(
                { error: "Server misconfiguration: Missing API Key" },
                { status: 500 }
            )
        }

        const systemPrompt = `
You are an expert software engineer and performance specialist.
Your task is to analyze the provided code snippet and "optimize" it.
Focus on:
1. Time complexity (Big O)
2. Memory usage
3. Readability and idiomatic patterns
4. Removing redundancy

You must return a valid JSON object with the following structure:
{
  "optimizedCode": "<the full code snippet with optimizations applied>",
  "explanation": "Detailed explanation of what changed and why it is better (mention Big O if applicable).",
  "changes": ["<bullet point 1>", "<bullet point 2>"]
}

Do not include markdown formatting (like \`\`\`json) in your response.
`

        const userPrompt = `
File: ${fileName}
Language: ${languageId}
Code to optimize:
${code}
`

        const response = await openai.chat.completions.create({
            model: "openai/gpt-4o-mini", // Fast model for interactive features
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            response_format: { type: "json_object" },
        })

        const content = response.choices[0]?.message?.content
        if (!content) {
            throw new Error("No content received from LLM")
        }

        const jsonResponse = JSON.parse(content)
        return NextResponse.json(jsonResponse)

    } catch (error) {
        console.error("[Optimize Code API] Error:", error)
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
    }
}
