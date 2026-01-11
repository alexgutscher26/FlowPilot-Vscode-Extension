
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
});

interface SecurityFinding {
    line: number;
    severity: 'critical' | 'high' | 'medium' | 'low';
    category: string;
    title: string;
    description: string;
    remediation: string;
    codeSnippet?: string;
}

interface SecurityResponse {
    findings: SecurityFinding[];
    summary: {
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
    overallRisk: 'critical' | 'high' | 'medium' | 'low' | 'none';
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { code, fileName, languageId } = body;

        console.log('[Security Analysis API] Received request:', { fileName, languageId, codeLength: code?.length });

        if (!process.env.OPENROUTER_API_KEY) {
            console.error('[Security Analysis API] Missing OPENROUTER_API_KEY');
            return NextResponse.json({ error: 'Server misconfiguration: Missing API Key' }, { status: 500 });
        }

        if (!code || !languageId) {
            return NextResponse.json({ error: 'Missing required fields: code, languageId' }, { status: 400 });
        }

        const systemPrompt = `
You are a security expert specializing in code vulnerability detection.
Your task is to analyze code for security vulnerabilities and risks.

Focus on detecting:
1. **SQL Injection**: Unsanitized user input in SQL queries
2. **XSS (Cross-Site Scripting)**: Unescaped user input in HTML/JavaScript
3. **Hardcoded Secrets**: API keys, passwords, tokens in code
4. **Insecure Cryptography**: Weak algorithms, hardcoded keys, improper usage
5. **Path Traversal**: Unsafe file path operations
6. **Command Injection**: Unsanitized input in system commands
7. **Unsafe Deserialization**: Deserializing untrusted data
8. **Authentication Issues**: Weak auth, missing validation
9. **CSRF Vulnerabilities**: Missing CSRF protection
10. **Information Disclosure**: Sensitive data exposure

For each finding, provide:
- Line number (1-indexed)
- Severity: "critical", "high", "medium", or "low"
- Category (e.g., "SQL Injection", "Hardcoded Secret")
- Title (brief summary)
- Description (what the vulnerability is)
- Remediation (how to fix it)

You must return a valid JSON object with this structure:
{
  "findings": [
    {
      "line": <number>,
      "severity": "critical" | "high" | "medium" | "low",
      "category": "<vulnerability type>",
      "title": "<brief title>",
      "description": "<what is vulnerable>",
      "remediation": "<how to fix it>"
    }
  ]
}

Be thorough but avoid false positives. Only report genuine security concerns.
Do not include markdown formatting (like \`\`\`json) in your response, just the raw JSON object.
`;

        const userPrompt = `
Language: ${languageId}
File: ${fileName || 'untitled'}

Code to analyze for security vulnerabilities:
\`\`\`${languageId}
${code}
\`\`\`

Please identify all security vulnerabilities and risks in this code.
`;

        const models = [
            'openai/gpt-4o-mini',
            'anthropic/claude-3-5-haiku',
            'google/gemini-2.0-flash-exp:free'
        ];

        let selectedModel = models[0];

        // Try models in sequence
        for (const model of models) {
            try {
                console.log(`[Security Analysis API] Trying model: ${model}`);
                selectedModel = model;

                const response = await openai.chat.completions.create({
                    model: model,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userPrompt }
                    ],
                    response_format: { type: 'json_object' },
                    temperature: 0.2, // Very low temperature for consistent security analysis
                });

                const content = response.choices[0]?.message?.content;
                if (!content) {
                    throw new Error('No content received from LLM');
                }

                const jsonResponse = JSON.parse(content);

                // Validate and structure the response
                const findings: SecurityFinding[] = jsonResponse.findings || [];

                const summary = {
                    critical: findings.filter(f => f.severity === 'critical').length,
                    high: findings.filter(f => f.severity === 'high').length,
                    medium: findings.filter(f => f.severity === 'medium').length,
                    low: findings.filter(f => f.severity === 'low').length,
                };

                // Determine overall risk
                let overallRisk: 'critical' | 'high' | 'medium' | 'low' | 'none' = 'none';
                if (summary.critical > 0) {
                    overallRisk = 'critical';
                } else if (summary.high > 0) {
                    overallRisk = 'high';
                } else if (summary.medium > 0) {
                    overallRisk = 'medium';
                } else if (summary.low > 0) {
                    overallRisk = 'low';
                }

                const securityResponse: SecurityResponse = {
                    findings,
                    summary,
                    overallRisk
                };

                // Log usage
                try {
                    const logEntry = {
                        timestamp: new Date().toISOString(),
                        userId: 'anonymous-user',
                        type: 'security-analysis',
                        language: languageId,
                        fileName: fileName,
                        findingsCount: findings.length,
                        overallRisk: overallRisk,
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
                    console.error('[Security Analysis API] Logging failed:', logError);
                }

                return NextResponse.json(securityResponse);

            } catch (error: any) {
                console.warn(`[Security Analysis API] Model ${model} failed:`, error?.message || error);
                if (model === models[models.length - 1]) {
                    throw error;
                }
            }
        }

        throw new Error('All models failed');

    } catch (error) {
        console.error('[Security Analysis API] Error:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
