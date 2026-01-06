# FlowPilot TODO

Audit results: items below are not yet implemented or need enhancement.

## 1. VS Code Extension Core
- Add persistent status bar item for quick tutor access
- Implement language detection fallback (shebang/file extension)
- Add global enable/disable setting (workspace-aware)
- Add multi-language abstraction layer for future languages

## 2. Explain Selection Flow
- Contribute keybindings for explain selection (user-configurable)
- Include file name and relative path in request context
- Enforce snippet/token length limits before sending requests
- Add client-side prompt template management (versioned)
- Implement scroll-to-code mapping from explanations to editor lines

## 3. Explain Error Flow
- Provide hover action: “Ask FlowPilot about this error”
- Include stack trace when available (debugger integration)
- Show explicit “error explanation mode” badge in Tutor Panel
- Add copy-to-clipboard button for full error explanation

## 4. Review Snippet
- Capture function signature and context when selection is inside a function
- Detect loop/class method context for richer analysis
- Add review focus flags (performance/readability/style) via settings
- Render diff-style view with side-by-side blocks and highlights
- Add “Copy improved version” and “Insert into file (experimental)” actions
- Display warning notice: “Review changes; FlowPilot is a tutor, not an auto-fixer”

## 5. Tutor UX & Pedagogy
- Enforce max/min length constraints per section
- Apply tone/style guidelines for junior-friendly explanations
- Map concepts to internal taxonomy and add external doc links
- Track concept chip clicks with telemetry
- Add reflection prompts with collapsible UI and settings toggle
- Implement “FlowPilot: Intro walkthrough” onboarding command
- Provide sample Python file with curated mistakes and step-by-step overlay

## 6. Proactive “Stuck?” Nudge
- Track last keystroke time for inactivity detection
- Make inactivity threshold configurable
- Detect repetitive edits on the same line (not only diagnostics)

## 7. Settings & Configuration
- Add global enable/disable FlowPilot setting
- Enable/disable per language
- Control maximum snippet size sent to backend
- Toggle reflection questions
- Default explanation depth (short/normal/detailed)
- Add “What data is collected” info/link
- Respect VS Code global telemetry opt-out setting

## 8. Telemetry & Analytics Hooks
- Track session metrics (explanations per session, session duration buckets)
- Track concept chip clicks and reflection prompt views
- Measure and record LLM/API response time on client
- Track error rate and timeout counts for LLM calls
- Version event schema for future evolution/A-B testing

## 9. Backend & LLM Integration
- Provide single entry point with mode parameter (explain/error/review)
- Separate, versioned prompt templates (client-level management or config)
- Fallback to plain-text rendering when JSON schema validation fails
- Safeguard against very long responses (truncate/chunk in UI)
