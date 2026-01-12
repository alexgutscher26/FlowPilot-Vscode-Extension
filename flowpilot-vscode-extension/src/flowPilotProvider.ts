import * as vscode from 'vscode';
import fetch from 'node-fetch';
import { trackExplain } from './sessionManager';
import { SanitizationService } from './services/sanitizationService';

export class FlowPilotProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'flowpilotPanel';
    private _view?: vscode.WebviewView;

    constructor(
        private readonly _extensionUri: vscode.Uri,
    ) { }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._extensionUri
            ]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        // Handle messages from the webview
        webviewView.webview.onDidReceiveMessage((data: any) => {
            switch (data.type) {
                case 'sendMessage':
                    this.handleUserMessage(data.text);
                    break;
                case 'reviewFile':
                    this.handleReviewFile();
                    break;
                case 'optimizeCode':
                    this.optimizeCode();
                    break;
                case 'addDocstring':
                    this.addDocstring();
                    break;
            }
        });
    }

    public async handleReviewFile() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            if (this._view) {
                this._view.webview.postMessage({
                    type: 'aiResponse',
                    text: 'No active file to review. Please open a file first.'
                });
            }
            return;
        }

        const document = editor.document;
        const fullContent = document.getText();
        const fileName = document.fileName;
        const languageId = document.languageId;

        // Sanitize code
        const sanitizedCode = SanitizationService.redactSecrets(fullContent);

        const context = {
            code: sanitizedCode,
            fileName: fileName,
            languageId: languageId,
            surroundingLines: sanitizedCode
        };

        await this.explainCode(context);
    }

    public async explainCode(context: any) {
        // Track selection explanation
        trackExplain('selection', context);

        // Sanitize context code
        if (context.code) {
            context.code = SanitizationService.redactSecrets(context.code);
        }
        if (context.surroundingLines) {
            context.surroundingLines = SanitizationService.redactSecrets(context.surroundingLines);
        }

        if (this._view) {
            this._view.webview.postMessage({ type: 'streamingStart' });

            const config = vscode.workspace.getConfiguration('flowpilot');
            const preferLocal = config.get<boolean>('privacy.preferLocalModel', false);

            if (preferLocal) {
                await this.explainCodeLocal(context, config);
            } else {
                await this.explainCodeCloud(context);
            }
        }
    }

    private async explainCodeLocal(context: any, config: vscode.WorkspaceConfiguration) {
        const endpoint = config.get<string>('local.modelEndpoint', 'http://localhost:11434/v1/chat/completions');
        const modelName = config.get<string>('local.modelName', 'llama3');

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
File: ${context.fileName}
Language: ${context.languageId}
Code to explain:
${context.code}
`;

        await this.streamLocalResponse(endpoint, modelName, systemPrompt, userPrompt, 'showExplanation');
    }

    private async explainCodeCloud(context: any) {
        try {
            const response = await fetch('http://localhost:3000/api/explain', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(context)
            });
            await this.handleCloudStream(response, 'showExplanation');
        } catch (error) {
            console.error('Error explaining code:', error);
            this.sendErrorResponse();
        }
    }

    public async explainError(context: any) {
        // Track error explanation
        trackExplain('error', context);

        // Sanitize error context
        if (context.codeSnippet) {
            context.codeSnippet = SanitizationService.redactSecrets(context.codeSnippet);
        }

        if (this._view) {
            this._view.webview.postMessage({ type: 'streamingStart' });

            const config = vscode.workspace.getConfiguration('flowpilot');
            const preferLocal = config.get<boolean>('privacy.preferLocalModel', false);

            if (preferLocal) {
                await this.explainErrorLocal(context, config);
            } else {
                await this.explainErrorCloud(context);
            }
        }
    }

    private async explainErrorLocal(context: any, config: vscode.WorkspaceConfiguration) {
        const endpoint = config.get<string>('local.modelEndpoint', 'http://localhost:11434/v1/chat/completions');
        const modelName = config.get<string>('local.modelName', 'llama3');
        const primaryError = context.errors?.[0] || { message: 'Unknown error', line: 0 };

        const systemPrompt = `
You are a patient coding tutor helping developers understand and fix errors.
Your task is to explain the error in a clear, educational way.
You must return a valid JSON object with the following structure:
{
    "plainEnglish": "A simple, jargon-free explanation of what the error means",
    "whyItHappens": "The root cause - why this error occurred in this specific code",
    "howToFix": ["Step 1: ...", "Step 2: ...", "Step 3: ..."],
    "prevention": "Best practices to avoid this error in the future"
}

Be concise but thorough. Use beginner-friendly language.
Do not include markdown formatting (like \`\`\`json) in your response, just the raw JSON object.
`;

        const userPrompt = `
File: ${context.fileName}
Language: ${context.languageId}
Error: ${primaryError.message}
Line: ${primaryError.line}

Code around the error:
${context.codeSnippet}

Please explain this error and how to fix it.
`;

        await this.streamLocalResponse(endpoint, modelName, systemPrompt, userPrompt, 'showErrorExplanation');
    }

    private async explainErrorCloud(context: any) {
        try {
            const response = await fetch('http://localhost:3000/api/explain-error', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(context)
            });
            await this.handleCloudStream(response, 'showErrorExplanation');
        } catch (error) {
            console.error('Error explaining error:', error);
            this.sendErrorResponse();
        }
    }

    private handleUserMessage(text: string) {
        // Simulate AI response
        setTimeout(() => {
            if (this._view) {
                this._view.webview.postMessage({
                    type: 'aiResponse',
                    text: `I understand you're asking about: "${text}". Let me help you with that...`
                });
            }
        }, 1000);
    }

    private optimizeCode() {
        vscode.window.showInformationMessage('Code optimization suggestion: Consider using memoization for better performance.');
    }

    private addDocstring() {
        vscode.window.showInformationMessage('Docstring added to your function.');
    }

    public async reviewSnippet(context: any) {
        trackExplain('review', context);

        // Sanitize context code
        if (context.code) {
            context.code = SanitizationService.redactSecrets(context.code);
        }

        if (this._view) {
            this._view.webview.postMessage({ type: 'streamingStart' });
            this._view.webview.postMessage({ type: 'aiResponse', text: 'Reviewing your snippet...' });

            const config = vscode.workspace.getConfiguration('flowpilot');
            const preferLocal = config.get<boolean>('privacy.preferLocalModel', false);

            if (preferLocal) {
                await this.reviewSnippetLocal(context, config);
            } else {
                await this.reviewSnippetCloud(context);
            }
        }
    }

    private async reviewSnippetLocal(context: any, config: vscode.WorkspaceConfiguration) {
        const endpoint = config.get<string>('local.modelEndpoint', 'http://localhost:11434/v1/chat/completions');
        const modelName = config.get<string>('local.modelName', 'llama3');

        const systemPrompt = `
You are an expert coding assistant used in a VS Code extension "FlowPilot".
Your task is to review the provided code snippet.
First confirm what it does, then critique it based on:
- Readability (0-10)
- Performance concerns (e.g. time complexity)
- Edge cases missed
- More idiomatic ("Pythonic" or "TypeScript-y", etc.) version

You must return a valid JSON object with the following structure:
{
  "does": "A brief confirmation of what the code does.",
  "score": <number 0-10>,
  "issues": ["<issue1>", "<issue2>", ...],
  "improvedCode": "<the full improved code snippet>",
  "whyBetter": "Explanation of why the improved version is better."
}

Do not include markdown formatting (like \`\`\`json) in your response, just the raw JSON object.
`;

        const userPrompt = `
File: ${context.fileName}
Language: ${context.languageId}
Code to review:
${context.code}
`;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: modelName,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userPrompt }
                    ],
                    response_format: { type: "json_object" },
                    stream: false // Using non-streaming for simplicity in snippet review
                })
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data: any = await response.json();
            const content = data.choices[0]?.message?.content;
            if (!content) throw new Error('No content received from local model');

            // Parse content
            const jsonReview = this.cleanAndParseJson(content);

            if (this._view) {
                this._view.webview.postMessage({
                    type: 'showReview',
                    review: jsonReview
                });
            }

        } catch (error) {
            console.error('Error reviewing snippet locally:', error);
            this.sendErrorResponse('Sorry, I encountered an error while reviewing the snippet locally.');
        }
    }

    private async reviewSnippetCloud(context: any) {
        try {
            const response = await fetch('http://localhost:3000/api/review-snippet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(context)
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const reviewData = await response.json();

            if (this._view) {
                this._view.webview.postMessage({
                    type: 'showReview',
                    review: reviewData
                });
            }
        } catch (error) {
            console.error('Error reviewing snippet:', error);
            this.sendErrorResponse('Sorry, I encountered an error while reviewing the snippet.');
        }
    }

    // --- Helper Methods ---

    private cleanAndParseJson(text: string): any {
        try {
            return JSON.parse(text);
        } catch (e) {
            // Try to remove markdown code blocks if present
            const clean = text.replace(/```json/g, '').replace(/```/g, '').trim();
            try {
                return JSON.parse(clean);
            } catch (e2) {
                console.error("Failed to parse JSON:", text);
                return {};
            }
        }
    }

    private sendErrorResponse(msg: string = 'Sorry, I encountered an error while communicating with the backend.') {
        if (this._view) {
            this._view.webview.postMessage({
                type: 'aiResponse',
                text: msg
            });
        }
    }

    private async handleCloudStream(response: any, messageType: string) {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const body = response.body;
        if (!body) throw new Error('No response body');

        let buffer = '';
        let accumulatedContent = '';

        body.on('data', (chunk: Buffer) => {
            buffer += chunk.toString('utf8');
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const parsed = JSON.parse(line.slice(6));
                        if (parsed.done) {
                            accumulatedContent = parsed.content;
                            try {
                                const finalJson = JSON.parse(accumulatedContent);
                                if (this._view) {
                                    this._view.webview.postMessage({
                                        type: messageType,
                                        explanation: finalJson // Assuming 'explanation' field name for both types for now, or adapt
                                    });
                                }
                            } catch (e) {
                                this.sendErrorResponse('Sorry, I received an invalid response from the AI.');
                            }
                        } else if (parsed.accumulated) {
                            accumulatedContent = parsed.accumulated;
                            if (this._view) {
                                this._view.webview.postMessage({
                                    type: 'streamingChunk',
                                    content: parsed.accumulated
                                });
                            }
                        }
                    } catch (e) { console.warn('Failed to parse SSE:', e); }
                }
            }
        });

        await new Promise<void>((resolve, reject) => {
            body.on('end', () => resolve());
            body.on('error', (e: Error) => reject(e));
        });
    }

    private async streamLocalResponse(endpoint: string, model: string, systemPrompt: string, userPrompt: string, messageType: string) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userPrompt }
                    ],
                    stream: true,
                    response_format: { type: "json_object" }
                })
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const body = response.body;
            if (!body) throw new Error('No response body');

            let buffer = '';
            let accumulatedContent = '';

            body.on('data', (chunk: Buffer) => {
                buffer += chunk.toString('utf8');
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (!trimmed || trimmed === 'data: [DONE]') continue;
                    if (trimmed.startsWith('data: ')) {
                        try {
                            const data = JSON.parse(trimmed.slice(6));
                            const content = data.choices?.[0]?.delta?.content || '';
                            if (content) {
                                accumulatedContent += content;
                                if (this._view) {
                                    this._view.webview.postMessage({
                                        type: 'streamingChunk',
                                        content: accumulatedContent
                                    });
                                }
                            }
                        } catch (e) { console.warn('Failed to parse local stream:', e); }
                    }
                }
            });

            await new Promise<void>((resolve, reject) => {
                body.on('end', () => resolve());
                body.on('error', (e: Error) => reject(e));
            });

            // Final parse
            const finalJson = this.cleanAndParseJson(accumulatedContent);
            if (this._view) {
                this._view.webview.postMessage({
                    type: messageType,
                    explanation: finalJson // Note: explanation uses 'explanation' key, review uses 'review'. We need to be careful.
                });
            }

        } catch (error) {
            console.error('Error in local stream:', error);
            this.sendErrorResponse('Sorry, I encountered an error with the local model.');
        }
    }

    public updateAnalysisResults(result: any) {
        if (this._view) {
            this._view.webview.postMessage({
                type: 'analysisResults',
                result: result
            });
        }
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        return this.getHtmlContent(webview);
    }

    private getHtmlContent(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.js'));
        const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.css'));

        // Use a nonce to only allow a specific script to be run.
        const nonce = getNonce();

        const robotIcon = `<svg viewBox="0 0 24 24" class="fp-icon-svg" aria-hidden="true"><path fill="currentColor" d="M11 2h2v2.08c2.83.48 5 2.94 5 5.92v6c0 3.31-2.69 6-6 6h-2c-3.31 0-6-2.69-6-6v-6c0-2.98 2.17-5.44 5-5.92V2Zm-1 6c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-2Zm-1.25 3.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm6.5 1.25a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0ZM8 17h8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z"/></svg>`;
        const refreshIcon = `<svg viewBox="0 0 24 24" class="fp-icon-svg" aria-hidden="true"><path fill="currentColor" d="M17.65 6.35A7.95 7.95 0 0 0 12 4V1L7 6l5 5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 13.65-6.65Z"/></svg>`;
        const moreIcon = `<svg viewBox="0 0 24 24" class="fp-icon-svg" aria-hidden="true"><path fill="currentColor" d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"/></svg>`;
        const bugIcon = `<svg viewBox="0 0 24 24" class="fp-icon-svg" aria-hidden="true"><path fill="currentColor" d="M20 8h-3.81A5.99 5.99 0 0 0 13 5.07V4h-2v1.07A5.99 5.99 0 0 0 7.81 8H4v2h3.09c-.05.33-.09.66-.09 1v1H4v2h3v2H4v2h3.81A6 6 0 0 0 11 21.93V22h2v-.07A6 6 0 0 0 16.19 18H20v-2h-3v-2h3v-2h-3v-1c0-.34-.03-.67-.09-1H20V8Zm-5 8a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-5a4 4 0 0 1 4 4v5Z"/></svg>`;
        const bulbIcon = `<svg viewBox="0 0 24 24" class="fp-icon-svg" aria-hidden="true"><path fill="currentColor" d="M9 21h6v-1H9v1Zm3-20a7 7 0 0 0-4 12.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.26A7 7 0 0 0 12 1Zm3 11.6-1 .76V16h-4v-2.64l-1-.76A5 5 0 1 1 15 12.6Z"/></svg>`;
        const sendIcon = `<svg viewBox="0 0 24 24" class="fp-icon-svg" aria-hidden="true"><path fill="currentColor" d="M2 21 23 12 2 3v7l15 2-15 2v7Z"/></svg>`;

        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} data:; font-src ${webview.cspSource};">
                <link href="${styleUri}" rel="stylesheet">
                <title>FlowPilot - AI Coding Coach</title>
            </head>
            <body>
                <div class="flowpilot-container">
                    <template id="fp-icon-robot">${robotIcon}</template>
                    <!-- Panel Header -->
                    <div class="panel-header">
                        <div class="header-left">
                            <span class="fp-icon fp-icon-primary">${robotIcon}</span>
                            <span class="header-title">Code Coach</span>
                        </div>
                        <div class="header-actions">
                            <button class="icon-button" id="refresh-btn" type="button" aria-label="Refresh">
                                <span class="fp-icon">${refreshIcon}</span>
                            </button>
                            <button class="icon-button" id="more-btn" type="button" aria-label="More options">
                                <span class="fp-icon">${moreIcon}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Panel Content -->
                    <div class="panel-content">
                        <!-- Main CTA -->
                        <button class="cta-button" id="review-file-btn">
                            <span class="fp-icon">${bugIcon}</span>
                            Review entire file
                        </button>

                        <!-- Logic Breakdown Card -->
                        <div class="explanation-card hidden" id="explanation-card">
                            <div class="card-header">
                                <div class="card-title">
                                    <span class="fp-icon fp-icon-accent">${bulbIcon}</span>
                                    <span>Logic Breakdown</span>
                                </div>
                                <span class="line-badge" id="line-badge">Lines 6-11</span>
                            </div>
                            <p class="card-description" id="card-description">
                                You've selected a recursive implementation of the Fibonacci sequence. Here is how it works step-by-step:
                            </p>
                            <div class="explanation-steps" id="explanation-steps">
                                <!-- Steps will be populated dynamically -->
                            </div>
                            <div class="card-actions">
                                <button class="action-button" id="optimize-btn">Optimize Code</button>
                                <button class="action-button" id="docstring-btn">Add Docstring</button>
                            </div>
                        </div>

                        <!-- Chat Messages -->
                        <div class="chat-messages" id="chat-messages">
                            <!-- Messages will be populated dynamically -->
                        </div>
                    </div>

                    <!-- Chat Input -->
                    <div class="chat-input-container">
                        <div class="input-wrapper">
                            <input 
                                type="text" 
                                class="chat-input" 
                                id="chat-input"
                                placeholder="Ask FlowPilot about your code..."
                            />
                            <button class="send-button" id="send-btn">
                                <span class="fp-icon">${sendIcon}</span>
                            </button>
                        </div>
                        <div class="input-footer">
                            <span class="powered-by">Powered by Code Coach AI</span>
                            <span class="history-link">History</span>
                        </div>
                    </div>
                </div>

                <script nonce="${nonce}" src="${scriptUri}"></script>
            </body>
            </html>`;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
