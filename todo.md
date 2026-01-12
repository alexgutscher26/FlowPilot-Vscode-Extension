# 🚀 FlowPilot Master Implementation Roadmap & Todo List

## 📋 Table of Contents
1. [Phase I: Core VS Code Extension Architecture](#phase-i-core-vs-code-extension-architecture)
2. [Phase II: Web Dashboard & User Portal](#phase-ii-web-dashboard--user-portal)
3. [Phase III: Backend Services, API & Database](#phase-iii-backend-services-api--database)
4. [Phase IV: External Software Integrations](#phase-iv-external-software-integrations)
5. [Phase V: Advanced AI & Machine Learning](#phase-v-advanced-ai--machine-learning)
6. [Phase VI: Quality Assurance & Testing Strategy](#phase-vi-quality-assurance--testing-strategy)
7. [Phase VII: DevOps, CI/CD & Infrastructure](#phase-vii-devops-cicd--infrastructure)
8. [Phase VIII: Documentation, Legal & Community](#phase-viii-documentation-legal--community)

---

## 🟢 Phase I: Core VS Code Extension Architecture
*Focus: Stabilizing the editor experience, reducing latency, and maximizing utility within the IDE.*

### 1.1 "Explain Selection" Module
- [ ] **Context Extraction Engine**
    - [x] Implement AST-based parsing (using `tree-sitter` or similar) to verify valid code blocks are selected.
    - [x] Create fallback logic: If selection is empty, auto-expand selection to current function boundaries.
    - [x] Add support for multi-cursor selections (aggregate context or error out gracefully).
    - [x] Sanitize input: Remove secrets/API keys from code before sending to LLM.
- [ ] **Streaming Response Handling**
    - [ ] Implement Server-Sent Events (SSE) listener in the Extension Host.
    - [ ] Create a "Typing Effect" buffer to smooth out text rendering in the Webview.
    - [ ] Handle network interruptions: Auto-retry logic with exponential backoff.
- [ ] **Smart Formatting**
    - [ ] Render Markdown tables, lists, and code blocks with syntax highlighting in the chat bubble.
    - [ ] Implement "Copy Code Block" buttons for every snippet returned by AI.

### 1.2 "Explain Error" & Debugging Coach
- [ ] **Diagnostic Collection Integration**
    - [ ] Listen to `vscode.languages.getDiagnostics()` events in real-time.
    - [ ] Filter diagnostics by severity (Error, Warning) to avoid noise.
    - [ ] Debounce events (don't trigger analysis while user is typing furiously).
- [ ] **Terminal Output Parsing**
    - [ ] Hook into `vscode.window.onDidWriteTerminalData` (if permissible API exists) or prompt user to copy stack traces.
    - [ ] Regex patterns to identify stack traces for Python, Node.js, Java, Go, Rust.
- [ ] **One-Click Fix Action**
    - [ ] Implement `WorkspaceEdit` interface to apply diffs returned by the AI.
    - [ ] Create a "Preview Fix" mode (using VS Code's diff view) before commiting changes.

### 1.3 "Review File" & Code Quality
- [ ] **Large File Handling**
    - [ ] Implement a token counter (using `tiktoken` locally) to estimate request size.
    - [ ] Create a "Chunking Strategy": Split files by class/function boundaries, not arbitrary lines.
    - [ ] Map reduced/summarized chunks back to original line numbers for comments.
- [ ] **Diff Review Mode**
    - [ ] Integrate checks against `git diff HEAD` to review *only* uncommitted changes.
    - [ ] Ignore files in `.gitignore` or specific `.flowpilotignore`.

### 1.4 Webview Panel Architecture (The UI)
- [ ] **React Application in Webview**
    - [ ] Set up `react-router` within the webview for different "Modes" (Chat, Settings, History).
    - [ ] Implement `postMessage` layer for bidirection communication:
        - `Extension -> Webview`: "New Analysis Ready", "Theme Changed", "Auth Status".
        - `Webview -> Extension`: "Insert Code", "Open File", "Run Command".
- [ ] **State Persistence**
    - [ ] Serialize chat history to `workspaceState` or `globalState` so it survives VS Code restarts.
    - [ ] Implement "Clear Chat" and "Export Chat to Markdown" features.
- [ ] **Theming & Aesthetics**
    - [ ] Bind all CSS colors to VS Code css variables (e.g., `var(--vscode-editor-background)`).
    - [ ] Create high-contrast fallback styles.
    - [ ] Add loading skeletons/shimmers for all async states.

### 1.5 Configuration & Customization
- [ ] **Settings Scopes**
    - [ ] Differentiate between User Settings (Global) and Workspace Settings (Project-specific).
    - [ ] Build a "Profile" system (e.g., "Strict Reviewer" vs "Helpful Tutor").
- [ ] **Keybindings**
    - [ ] Set default shortcuts for commonly used commands (e.g., `Ctrl+Shift+E` for Explain).
    - [ ] Detect conflicts with popular extensions (Vim, Sublime keymaps).

---

## 🔵 Phase II: Web Dashboard & User Portal
*Focus: A standalone Next.js application for authentication, deeper analytics, and account management.*

### 2.1 Authentication System (Auth.js / Better-Auth)
- [ ] **Providers**
    - [ ] GitHub OAuth (Primary functionality for devs).
    - [ ] Google OAuth (Secondary).
    - [ ] Email/Magic Link (Passwordless entry).
- [ ] **Session Management**
    - [ ] Implement JWT strategy with granular scopes.
    - [ ] Create "Device Management" page: "Revoke Access for Macbook Pro".
- [ ] **Onboarding Flow**
    - [ ] "Welcome" wizard collecting user role (Student, Senior Dev, Manager).
    - [ ] "Setup Guide": Dynamic tutorial verifying the extension is installed and connected.

### 2.2 Dashboard Views
- [ ] **"Home" Overview**
    - [ ] Daily Coding Streak visualization (GitHub-style contribution graph).
    - [ ] "Time Saved" calculator based on accepted AI suggestions.
- [ ] **"Recent Sessions"**
    - [ ] Table view of all plugin interactions with filtering (by Language, Date, Outcome).
    - [ ] Detail view: Replay the entire chat transcript of a debugging session.
- [ ] **"Skills Graph"**
    - [ ] Visual radar chart showing proficiency (e.g., "80% Python", "20% SQL").
    - [ ] "Gap Analysis": Suggest learning resources for recurrent error types.

### 2.3 Community & Social
- [ ] **Public Profiles**
    - [ ] Optional public URL `flowpilot.ai/u/username`.
    - [ ] Badges for achievements ("Bug Buster", "Early Adopter").
- [ ] **"Tip of the Day" CMS**
    - [ ] Admin dashboard to draft, schedule, and publish coding tips.
    - [ ] API endpoint serving tips to the VS Code extension startup screen.

---

## 🟣 Phase III: Backend Services, API & Database
*Focus: Scalability, security, and data integrity.*

### 3.1 API Design (REST + TRPC/GraphQL)
- [ ] **Core Endpoints**
    - [ ] `POST /api/v1/analyze`: Receive code, return analysis.
    - [ ] `POST /api/v1/chat`: Streaming chat completion endpoint.
    - [ ] `POST /api/v1/telemetry`: Logging anonymous usage data.
- [ ] **Rate Limiting & Security**
    - [ ] Implement `Upstash` or `Redis` leaky bucket rate limiting per API key.
    - [ ] Add Request Signing verification to prevent spoofed requests from non-extension clients.

### 3.2 Database Schema (PostgreSQL via Prisma)
- [ ] **User Models**
    - [ ] `User`: id, email, tier (Free/Pro), preferences (JSON).
    - [ ] `Organization`: Support for team accounts (Foreign Key relations).
- [ ] **Session Models**
    - [ ] `Session`: id, user_id, start_time, end_time, language.
    - [ ] `Interaction`: id, session_id, user_prompt, ai_response, tokens_used.
    - [ ] `ErrorLog`: Specialized table for analyzing aggregated error trends.
- [ ] **Optimizations**
    - [ ] Add database indexing on `user_id` and timestamp columns.
    - [ ] Implement "Soft Delete" (`deletedAt` column) for data recovery.

### 3.3 LLM Orchestration Service
- [ ] **Model Router**
    - [ ] Logic to route simple queries (syntax checks) to cheaper/faster models (e.g., GPT-3.5-Turbo, Llama 3 8B).
    - [ ] Route complex queries (architecture review) to reasoning models (e.g., GPT-4, Claude 3.5 Sonnet).
- [ ] **Prompt Engineering Registry**
    - [ ] Centralize system prompts in code or DB (don't hardcode strings scattered in files).
    - [ ] Implement A/B testing framework for prompts to optimize answer quality.

---

## 🔶 Phase IV: External Software Integrations
*Focus: Embedding FlowPilot into the wider developer ecosystem.*

### 4.1 Project Management Tools
- [ ] **Jira Integration**
    - [ ] OAuth2 handshake with Atlassian.
    - [ ] Feature: "Convert to Ticket". Highlight comment `// TODO: Refactor this` -> [Create Jira Issue].
    - [ ] Feature: "Context Fetch". Pull ticket description into LLM context when working on branch `feature/JIRA-123`.
- [ ] **Linear Integration**
    - [ ] Webhook listener for issue assignments.
    - [ ] Feature: Notify developer in VS Code when a new high-priority bug is assigned.
- [ ] **Trello/Asana**
    - [ ] Simple API integrations for card creation.

### 4.2 Version Control Systems
- [ ] **GitHub / GitLab / Bitbucket**
    - [ ] **PR Bot**: Automated generic reviews on Pull Requests.
    - [ ] **Semantic Commit Messages**:
        1. Run `git diff --staged`.
        2. Send to LLM.
        3. Populate VS Code SCM input box with "feat: add user auth".

### 4.3 Documentation Platforms
- [ ] **Notion / Confluence**
    - [ ] "Export to Docs": Turn a chat explanation of a module into a formatted Notion page update.
    - [ ] "Search Docs": Allow FlowPilot to RAG (Retrieval Augmented Generation) against company wiki.

### 4.4 Communication Tools
- [ ] **Slack / Discord**
    - [ ] "Ask Team": Button to post a formatted code snippet + error + AI analysis to a specific channel.
    - [ ] Interactive notifications: "Your code review is ready" sent to DM.

---

## 🔴 Phase V: Advanced AI & Machine Learning
*Focus: Moving beyond wrapper-level features to proprietary intelligence.*

### 5.1 RAG (Retrieval Augmented Generation) System
- [ ] **Vector Database Setup**
    - [ ] Deploy Pinecone, Weaviate, or pgvector.
    - [ ] Index the entire User Workspace codebase.
- [ ] **Embedding Pipeline**
    - [ ] Watch file changes -> Debounce -> Re-embed modified file -> Update Vector DB.
    - [ ] Semantic Search: "Where is the authentication logic?" queries the vector DB first.

### 5.2 Local LLM Fallbacks
- [ ] **Ollama / LM Studio Protocol**
    - [x] Detect if local server is running on port `11434`.
    - [x] Configuration toggle: "Prefer Local Model (Privacy Mode)".
    - [x] Support generic OpenAI-compatible endpoints for local inference.

### 5.3 Personalized Finetuning (Long Term)
- [ ] Data pipeline to collect user's specific coding style (variable naming conventions, preferred libraries).
- [ ] LoRA training adapter usage for "Style-Matching".

---

## 📂 Phase VI: Quality Assurance & Testing Strategy

### 6.1 VS Code Extension Testing
- [ ] **Unit Tests (Mocha)**
    - [ ] Test context isolation.
    - [ ] Test configuration reading/writing.
- [ ] **Integration Tests (vscode-test)**
    - [ ] Launch strict instance of VS Code.
    - [ ] Programmatically open files, select text, trigger command, assert webview visibility.

### 6.2 Web Frontend Testing
- [ ] **Component Tests (Vitest + React Testing Library)**
    - [ ] Test all button states (loading, disabled, active).
    - [ ] Test Theme Provider overrides.
- [ ] **E2E Tests (Playwright/Cypress)**
    - [ ] Full user flow: Sign up -> Generate Key -> Dashboard Load.
    - [ ] Mobile responsiveness checks.

### 6.3 Security Audits
- [x] **Dependency Scan**: Setup `bun audit` or Snyk in CI pipeline.
- [ ] **Penetration Testing**: Attempt prompt injection attacks on the LLM.

---

## ⚙️ Phase VII: DevOps, CI/CD & Infrastructure

### 7.1 Build Pipelines (GitHub Actions)
- [ ] **Extension Build**
    - [x] `version-bump`: Auto-increment semver.
    - [x] `package`: Run `vsce package`.
    - [x] `artifact`: Upload `.vsix` file to GitHub Releases.

### 7.2 Deployment
- [ ] **Vercel / Netlify** (for Web Frontend)
    - [ ] Configure Preview Deployments for PRs.
    - [ ] Set up Environment Variables (Production vs Staging).
- [ ] **VS Code Marketplace**
    - [x] Create Publisher Account (Microsoft).
    - [ ] Automate publishing via `vsce publish` token.
    - [ ] Open VSX Registry Support (for VSCodium users).

### 7.3 Monitoring
- [ ] **Sentry**: Catch logic crashes in both Extension and Web.
- [ ] **PostHog**: Product analytics (Funnel analysis: Install -> Activation).
- [x] **Uptime Robot**: Monitor API health endpoints.

---

## 📜 Phase VIII: Documentation, Legal & Community

### 8.1 User Documentation
- [x] **Doc Site (Docusaurus)**
    - [x] "Getting Started" Guide for Developers.
    - [x] "Features Deep Dive".
    - [x] FAQ: "Why is the AI hallucinating?"
- [x] **In-Editor Walkthrough**
    - [x] VS Code "Welcome Page" with interactive checklist. not showing up

### 8.2 Developer Documentation
- [x] **Architecture Diagrams**: C4 Model diagrams of how Extension talks to Backend.
- [x] **API Reference**: Swagger/OpenAPI spec for the backend.
- [x] **Contributing Guide**: Codespaces setup, `pnpm` workspace strictness.

### 8.3 Legal
- [x] **Privacy Policy**: Explicit details on code data handling (Does code leave the machine? Is it stored?).
- [x] **Terms of Service**: Usage limits, liability disclaimers.
- [ ] **GDPR/CCPA Compliance**: Data export and deletion tools.
