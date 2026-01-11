---
sidebar_position: 5
title: Architecture
description: System architecture and design of FlowPilot.
---

# 🏗️ Architecture Overview

This document provides a comprehensive view of FlowPilot's architecture using the C4 Model (Context, Container, Component, Code). Understanding these diagrams will help you navigate the codebase and contribute effectively.

---

## Level 1: System Context

The highest-level view showing how FlowPilot fits into the developer's ecosystem.

```mermaid
graph TB
    Developer[("👨‍�💻 Developer<br/>(User)")]
    VSCode["VS Code IDE"]
    FlowPilot["FlowPilot System"]
    LLM["LLM Provider<br/>(OpenRouter/OpenAI)"]
    GitHub["GitHub<br/>(OAuth)"]
    
    Developer -->|Uses| VSCode
    VSCode -->|Runs| FlowPilot
    FlowPilot -->|Queries| LLM
    FlowPilot -->|Authenticates via| GitHub
    
    style FlowPilot fill:#1b5cff,stroke:#154fe0,color:#fff
    style Developer fill:#4caf50,stroke:#45a049,color:#fff
```

**Key Interactions:**
- **Developer** writes code in VS Code and interacts with FlowPilot features
- **FlowPilot** analyzes code and sends requests to LLM providers
- **GitHub OAuth** handles user authentication for the web dashboard

---

## Level 2: Container Diagram

Shows the major containers (applications/services) that make up FlowPilot.

```mermaid
graph TB
    subgraph "Developer Machine"
        VSCode["VS Code"]
        Extension["FlowPilot Extension<br/>(TypeScript)"]
    end
    
    subgraph "Cloud Infrastructure"
        WebApp["Web Dashboard<br/>(Next.js)"]
        API["Backend API<br/>(Next.js API Routes)"]
        DB[("PostgreSQL<br/>Database")]
    end
    
    LLM["OpenRouter API<br/>(External)"]
    
    VSCode -->|Hosts| Extension
    Extension -->|HTTP/REST| API
    Extension -->|WebSocket?| API
    WebApp -->|Calls| API
    API -->|Reads/Writes| DB
    API -->|Streaming| LLM
    
    style Extension fill:#1b5cff,stroke:#154fe0,color:#fff
    style API fill:#1b5cff,stroke:#154fe0,color:#fff
    style WebApp fill:#1b5cff,stroke:#154fe0,color:#fff
```

**Container Responsibilities:**

| Container | Technology | Purpose |
|-----------|-----------|---------|
| **FlowPilot Extension** | TypeScript, VS Code API | Code analysis, context extraction, UI rendering |
| **Backend API** | Next.js, tRPC | Request routing, LLM orchestration, session tracking |
| **Web Dashboard** | Next.js, React, TailwindCSS | User analytics, session history, settings |
| **PostgreSQL** | Prisma ORM | User data, sessions, API keys |

---

## Level 3: Component Diagram (Extension)

Detailed view of the VS Code Extension's internal components.

```mermaid
graph TB
    subgraph "VS Code Extension"
        ExtensionHost["extension.ts<br/>(Activation)"]
        
        subgraph "Providers"
            FlowPilotProvider["FlowPilotProvider<br/>(Webview UI)"]
            CodeActionProvider["CodeActionProvider<br/>(Quick Fixes)"]
        end
        
        subgraph "Context Extractors"
            ExplainContext["getExplainContext()<br/>(Selection)"]
            ErrorContext["getErrorContext()<br/>(Diagnostics)"]
        end
        
        subgraph "Analysis"
            CodeAnalyzer["codeAnalyzer.ts<br/>(Linting/Security)"]
            ParserService["ParserService<br/>(Tree-sitter AST)"]
        end
        
        SessionManager["sessionManager.ts<br/>(Telemetry)"]
        WelcomePage["WelcomePage<br/>(Onboarding)"]
    end
    
    BackendAPI["Backend API<br/>(localhost:3000)"]
    
    ExtensionHost -->|Registers| FlowPilotProvider
    ExtensionHost -->|Registers| CodeActionProvider
    ExtensionHost -->|Initializes| ParserService
    
    FlowPilotProvider -->|Uses| ExplainContext
    FlowPilotProvider -->|Uses| ErrorContext
    FlowPilotProvider -->|POST /api/explain| BackendAPI
    FlowPilotProvider -->|POST /api/explain-error| BackendAPI
    
    CodeAnalyzer -->|Uses| ParserService
    CodeAnalyzer -->|Creates| Diagnostics["VS Code Diagnostics"]
    
    SessionManager -->|POST /api/telemetry| BackendAPI
    
    style FlowPilotProvider fill:#1b5cff,stroke:#154fe0,color:#fff
    style BackendAPI fill:#ff9800,stroke:#f57c00,color:#fff
```

**Component Descriptions:**

### Core Components

- **`extension.ts`**: Entry point, registers all commands and providers
- **`FlowPilotProvider`**: Manages the sidebar webview panel, handles user interactions
- **`CodeActionProvider`**: Provides "Quick Fix" actions for diagnostics

### Context Extraction

- **`getExplainContext()`**: Extracts selected code + surrounding context
- **`getErrorContext()`**: Captures error diagnostics from VS Code

### Analysis Engine

- **`codeAnalyzer.ts`**: Runs linting and security checks
- **`ParserService`**: Uses Tree-sitter for AST parsing (JavaScript, Python, TypeScript)

---

## Level 3: Component Diagram (Backend)

Internal structure of the Next.js backend.

```mermaid
graph TB
    subgraph "Next.js Backend"
        subgraph "API Routes"
            ExplainAPI["/api/explain<br/>(POST)"]
            ErrorAPI["/api/explain-error<br/>(POST)"]
            ReviewAPI["/api/review-snippet<br/>(POST)"]
            TelemetryAPI["/api/telemetry<br/>(POST)"]
        end
        
        subgraph "Services"
            LLMService["llmService.ts<br/>(OpenRouter Client)"]
            PromptRegistry["Prompt Templates"]
        end
        
        subgraph "Data Layer"
            Prisma["Prisma Client"]
        end
    end
    
    OpenRouter["OpenRouter API"]
    Database[("PostgreSQL")]
    
    ExplainAPI -->|Uses| LLMService
    ErrorAPI -->|Uses| LLMService
    ReviewAPI -->|Uses| LLMService
    
    LLMService -->|Uses| PromptRegistry
    LLMService -->|Streaming| OpenRouter
    
    TelemetryAPI -->|Writes| Prisma
    Prisma -->|Queries| Database
    
    style LLMService fill:#1b5cff,stroke:#154fe0,color:#fff
    style ExplainAPI fill:#4caf50,stroke:#45a049,color:#fff
```

**API Endpoints:**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/explain` | POST | Stream code explanation |
| `/api/explain-error` | POST | Stream error diagnosis |
| `/api/review-snippet` | POST | Return code review |
| `/api/telemetry` | POST | Log usage events |

---

## Data Flow: "Explain Selection"

Sequence diagram showing the complete flow when a user explains code.

```mermaid
sequenceDiagram
    participant User
    participant VSCode
    participant Extension
    participant Backend
    participant LLM
    
    User->>VSCode: Selects code
    User->>VSCode: Right-click > "Explain Selection"
    VSCode->>Extension: Trigger command
    Extension->>Extension: getExplainContext()
    Extension->>Extension: Extract code + context
    Extension->>Backend: POST /api/explain
    Backend->>LLM: Stream request (OpenRouter)
    LLM-->>Backend: SSE chunks
    Backend-->>Extension: SSE chunks
    Extension->>Extension: Parse & render
    Extension->>VSCode: Update Webview UI
    VSCode->>User: Display explanation
```

---

## Technology Stack

### Extension
- **Language**: TypeScript
- **Build**: esbuild
- **AST Parsing**: Tree-sitter (JavaScript, Python, TypeScript)
- **HTTP Client**: node-fetch, axios

### Backend
- **Framework**: Next.js 16
- **API**: REST + Server-Sent Events (SSE)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **LLM**: OpenRouter (OpenAI-compatible)

### Web Dashboard
- **Framework**: Next.js 16 (React 19)
- **Styling**: TailwindCSS
- **Auth**: Better-Auth (GitHub OAuth)
- **UI Components**: Radix UI

---

## Deployment Architecture

```mermaid
graph TB
    subgraph "Developer Machine"
        VSCodeLocal["VS Code + Extension"]
    end
    
    subgraph "Vercel (Production)"
        NextJS["Next.js App<br/>(Web + API)"]
    end
    
    subgraph "External Services"
        PostgreSQL["Neon PostgreSQL<br/>(Serverless)"]
        OpenRouter["OpenRouter API"]
    end
    
    VSCodeLocal -->|HTTPS| NextJS
    NextJS -->|Connection Pool| PostgreSQL
    NextJS -->|HTTPS| OpenRouter
    
    style NextJS fill:#1b5cff,stroke:#154fe0,color:#fff
```

**Hosting:**
- **Extension**: Distributed via VS Code Marketplace (`.vsix` package)
- **Web + API**: Deployed on Vercel (serverless functions)
- **Database**: Neon (serverless PostgreSQL)

---

## Security Considerations

1. **API Keys**: Stored in VS Code's `SecretStorage` API (encrypted)
2. **HTTPS Only**: All backend communication over TLS
3. **Rate Limiting**: Implemented at API layer (Redis/Upstash)
4. **Code Privacy**: Code snippets sent to LLM are not stored or used for training
5. **Authentication**: JWT tokens with short expiry for dashboard sessions

---

## Next Steps

- [API Reference](./api-reference.md) - Detailed endpoint documentation
- [Contributing Guide](./contributing.md) - How to contribute to the codebase
- [Getting Started](./getting-started.md) - Set up your dev environment
