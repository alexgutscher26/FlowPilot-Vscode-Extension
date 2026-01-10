
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { code, fileName, languageId, surroundingLines } = body;

        console.log('[Explain API] Received request:', { fileName, languageId, codeLength: code?.length });

        if (!process.env.OPENROUTER_API_KEY) {
            console.error('[Explain API] Missing OPENROUTER_API_KEY');
            return NextResponse.json({ error: 'Server misconfiguration: Missing API Key' }, { status: 500 });
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

Format the "lineByLine" array to match the input code lines exactly.
Do not include markdown formatting (like \`\`\`json) in your response, just the raw JSON object.
`;

        const userPrompt = `
File: ${fileName}
Language: ${languageId}
Code to explain:
${code}
`;

        // Use fast, reliable paid models with fallback
        const models = [
            'openai/gpt-4o-mini',           // Fastest, most reliable
            'anthropic/claude-3-5-haiku',   // Fast, high quality
            'google/gemini-2.0-flash-exp:free'  // Free fallback
        ];

        let accumulatedContent = '';
        let selectedModel = models[0];

        // Try models in sequence until one works
        for (const model of models) {
            try {
                console.log(`[Explain API] Trying model: ${model}`);
                selectedModel = model;

                const stream = await openai.chat.completions.create({
                    model: model,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userPrompt }
                    ],
                    response_format: { type: 'json_object' },
                    stream: true
                });

                // Create a streaming response
                const encoder = new TextEncoder();
                const readable = new ReadableStream({
                    async start(controller) {
                        try {
                            for await (const chunk of stream) {
                                const content = chunk.choices[0]?.delta?.content || '';
                                if (content) {
                                    accumulatedContent += content;
                                    // Send each chunk as SSE
                                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ chunk: content, accumulated: accumulatedContent })}\n\n`));
                                }
                            }

                            // Send final complete message
                            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, content: accumulatedContent })}\n\n`));
                            controller.close();
                        } catch (error) {
                            console.error('[Explain API] Streaming error:', error);
                            controller.error(error);
                        }
                    }
                });

                // Log the usage
                try {
                    const logEntry = {
                        timestamp: new Date().toISOString(),
                        userId: 'anonymous-user',
                        language: languageId,
                        fileName: fileName,
                        model: selectedModel
                    };
                    const fs = require('fs');
                    const path = require('path');
                    const logDir = path.join(process.cwd(), 'logs');
                    if (!fs.existsSync(logDir)) {
                        fs.mkdirSync(logDir);
                    }
                    fs.appendFileSync(path.join(logDir, 'usage.jsonl'), JSON.stringify(logEntry) + '\n');
                } catch (logError) {
                    console.error('[Explain API] Logging failed:', logError);
                }

                return new Response(readable, {
                    headers: {
                        'Content-Type': 'text/event-stream',
                        'Cache-Control': 'no-cache',
                        'Connection': 'keep-alive',
                    },
                });

            } catch (error: any) {
                console.warn(`[Explain API] Model ${model} failed:`, error?.message || error);

                // If this is the last model, throw the error
                if (model === models[models.length - 1]) {
                    throw error;
                }
                // Otherwise, try the next model
                continue;
            }
        }

        // This should never be reached due to the throw above
        throw new Error('All models failed');

    } catch (error) {
        console.error('[Explain API] Error:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
