import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
})

function cleanAndParseJson(content: string) {
    // 1. Try direct parse
    try {
        return JSON.parse(content);
    } catch {
        // Continue to cleaning strategies
    }

    // 2. Extract from markdown code blocks
    const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (codeBlockMatch) {
        try {
            return JSON.parse(codeBlockMatch[1]);
        } catch {
            // Continue
        }
    }

    // 3. Extract JSON object from substrings
    const start = content.indexOf('{');
    const end = content.lastIndexOf('}');

    if (start !== -1 && end !== -1 && end > start) {
        const jsonStr = content.substring(start, end + 1);
        try {
            return JSON.parse(jsonStr);
        } catch {
            // Try to clean potential trailing commas or minor issues if we were to get advanced,
            // but for now, just failing here is acceptable if the extraction failed.
        }
    }

    throw new Error("Failed to extract valid JSON from response");
}

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
You are an expert coding assistant who loves documentation.
Your task is to add high-quality, standard-compliant docstrings to the provided code.

IMPORTANT: The user wants DETAILED and COMPREHENSIVE documentation.
- For Python: Use Google-style or NumPy-style docstrings.
- For TypeScript/JS: Use JSDoc with explicit types.

Your docstrings MUST include:
1. A clear, concise summary of what the function/class does.
2. detailed @param tags for ALL parameters, including their types and descriptions.
3. A @returns tag with the return type and description (if applicable).
4. @throws tags for any known exceptions.
5. An @example tag showing how to use the function, if it clarifies usage.
6. Mention of any side effects or complexity specifics, if relevant.

You must return a valid JSON object with the following structure:
{
  "codeWithDocstring": "<the full code snippet including the new docstrings>",
  "docstringOnly": "<just the docstring text itself, if possible>",
  "explanation": "Brief note on what the function/class does."
}

IMPORTANT OUTPUT RULES:
- OUTPUT RAW JSON ONLY.
- DO NOT INCLUDE MARKKDOWN FORMATTING (like \`\`\`json).
- DO NOT INCLUDE ANY CONVERSATIONAL TEXT.
- ESCAPE ALL NEWLINES IN STRINGS.
`

        const userPrompt = `
File: ${fileName}
Language: ${languageId}
Code:
${code}
`

        const models = [
            "google/gemini-2.0-flash-exp:free",
            "meta-llama/llama-3.3-70b-instruct:free",
        ];

        let jsonResponse;
        let lastError;

        for (const model of models) {
            try {
                console.log(`[Add Docstring] Trying model: ${model}`);
                const response = await openai.chat.completions.create({
                    model: model,
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: userPrompt },
                    ],
                });

                const content = response.choices[0]?.message?.content;
                if (!content) throw new Error("No content received from LLM");

                try {
                    jsonResponse = cleanAndParseJson(content);
                    break; // Success!
                } catch (parseError) {
                    console.warn(`[Add Docstring] Failed to parse JSON from model ${model}:`, content);
                    throw new Error("Invalid JSON response");
                }

            } catch (error: any) {
                console.warn(`[Add Docstring] Model ${model} failed:`, error.message);
                lastError = error;
                // Continue to next model
                continue;
            }
        }

        if (!jsonResponse) {
            throw lastError || new Error("All models failed to respond");
        }

        return NextResponse.json(jsonResponse);

    } catch (error) {
        console.error("[Add Docstring API] Error:", error)
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
    }
}
