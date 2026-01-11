import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
})

interface LintIssue {
  line: number
  column?: number
  severity: "error" | "warning" | "info"
  message: string
  rule?: string
  suggestedFix?: string
}

interface LintResponse {
  issues: LintIssue[]
  summary: {
    errors: number
    warnings: number
    infos: number
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { code, fileName, languageId } = body

    console.log("[Lint Code API] Received request:", {
      fileName,
      languageId,
      codeLength: code?.length,
    })

    if (!process.env.OPENROUTER_API_KEY) {
      console.error("[Lint Code API] Missing OPENROUTER_API_KEY")
      return NextResponse.json(
        { error: "Server misconfiguration: Missing API Key" },
        { status: 500 }
      )
    }

    if (!code || !languageId) {
      return NextResponse.json(
        { error: "Missing required fields: code, languageId" },
        { status: 400 }
      )
    }

    const systemPrompt = `
You are an expert code linter and style checker for multiple programming languages.
Your task is to analyze the provided code and identify:
1. Style violations (naming conventions, formatting, indentation)
2. Code smells (long functions, complex conditionals, duplicated code)
3. Best practice violations (missing error handling, inefficient patterns, anti-patterns)
4. Potential bugs (off-by-one errors, null pointer risks, type mismatches)

For each issue found, provide:
- Line number (1-indexed)
- Severity: "error" (must fix), "warning" (should fix), or "info" (suggestion)
- Clear message explaining the issue
- Suggested fix when applicable

You must return a valid JSON object with this structure:
{
  "issues": [
    {
      "line": <number>,
      "severity": "error" | "warning" | "info",
      "message": "<clear description>",
      "rule": "<rule name, e.g., 'naming-convention'>",
      "suggestedFix": "<optional: how to fix it>"
    }
  ]
}

Be thorough but practical. Focus on issues that genuinely impact code quality.
Do not include markdown formatting (like \`\`\`json) in your response, just the raw JSON object.
`

    const userPrompt = `
Language: ${languageId}
File: ${fileName || "untitled"}

Code to analyze:
\`\`\`${languageId}
${code}
\`\`\`

Please analyze this code for style violations, code smells, and best practice violations.
`

    const models = [
      "openai/gpt-4o-mini",
      "anthropic/claude-3-5-haiku",
      "google/gemini-2.0-flash-exp:free",
    ]

    let selectedModel = models[0]

    // Try models in sequence
    for (const model of models) {
      try {
        console.log(`[Lint Code API] Trying model: ${model}`)
        selectedModel = model

        const response = await openai.chat.completions.create({
          model: model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3, // Lower temperature for more consistent linting
        })

        const content = response.choices[0]?.message?.content
        if (!content) {
          throw new Error("No content received from LLM")
        }

        const jsonResponse = JSON.parse(content)

        // Validate and structure the response
        const issues: LintIssue[] = jsonResponse.issues || []
        const summary = {
          errors: issues.filter((i) => i.severity === "error").length,
          warnings: issues.filter((i) => i.severity === "warning").length,
          infos: issues.filter((i) => i.severity === "info").length,
        }

        const lintResponse: LintResponse = {
          issues,
          summary,
        }

        // Log usage
        try {
          const logEntry = {
            timestamp: new Date().toISOString(),
            userId: "anonymous-user",
            type: "lint-code",
            language: languageId,
            fileName: fileName,
            issuesFound: issues.length,
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
          console.error("[Lint Code API] Logging failed:", logError)
        }

        return NextResponse.json(lintResponse)
      } catch (error: any) {
        console.warn(`[Lint Code API] Model ${model} failed:`, error?.message || error)
        if (model === models[models.length - 1]) {
          throw error
        }
      }
    }

    throw new Error("All models failed")
  } catch (error) {
    console.error("[Lint Code API] Error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
