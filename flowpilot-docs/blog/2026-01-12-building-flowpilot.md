---
slug: building-flowpilot
title: Building FlowPilot - Behind the Scenes
date: 2026-01-12
authors: [alexgutscher]
tags: [development, vscode, ai]
---

# Building FlowPilot: Behind the Scenes

Ever wondered how FlowPilot works under the hood? Let me take you on a journey through the architecture and technical decisions that power your AI coding companion.

<!-- truncate -->

## The Tech Stack

### Extension Layer
FlowPilot's VS Code extension is built with **TypeScript** and uses **Tree-sitter** for AST parsing. This allows us to understand your code structure without executing it.

```typescript
// Example: Extracting context with Tree-sitter
const parser = new Parser();
parser.setLanguage(JavaScript);
const tree = parser.parse(sourceCode);
```

### Backend API
The backend is a **Next.js** application deployed on Vercel. We chose Next.js for its:
- Server-Side Rendering capabilities
- API Routes for easy endpoint creation
- Excellent TypeScript support
- Serverless deployment model

### LLM Integration
We use **OpenRouter** as our LLM gateway, which gives us access to multiple models:
- GPT-4 for complex explanations
- Claude 3.5 Sonnet for code reviews
- Llama 3 for faster, simpler queries

## Streaming Responses

One of the coolest features is **real-time streaming** of AI responses. Instead of waiting for the entire response, you see it appear word-by-word.

We use **Server-Sent Events (SSE)** for this:

```typescript
// Backend: Streaming response
for await (const chunk of stream) {
  res.write(`data: ${JSON.stringify(chunk)}\n\n`);
}
```

## Challenges We Faced

### 1. Context Window Limits
LLMs have token limits. For large files, we implemented a **chunking strategy** that splits code by function/class boundaries rather than arbitrary lines.

### 2. VS Code Theming
Making the UI look good in both light and dark themes required using CSS variables:

```css
background-color: var(--vscode-editor-background);
color: var(--vscode-editor-foreground);
```

### 3. Rate Limiting
To prevent abuse, we implemented a **leaky bucket** rate limiter using Redis.

## What's Next?

We're working on:
- **RAG System**: Index your entire codebase for better context
- **Local LLM Support**: Run models locally via Ollama
- **Collaborative Features**: Share explanations with your team

## Open Source

FlowPilot is fully open-source! Check out the code on [GitHub](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension) and contribute.

---

*Stay tuned for more technical deep dives!*
