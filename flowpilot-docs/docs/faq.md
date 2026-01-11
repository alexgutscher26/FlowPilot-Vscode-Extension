---
sidebar_position: 4
title: FAQ
description: Frequently asked questions about FlowPilot.
---

# ❓ Frequently Asked Questions

## 🤖 AI & Accuracy

### Why is the AI hallucinating?

"Hallucination" in AI refers to when a Large Language Model (LLM) confidently generates false or non-existent information. This can happen for a few reasons:

1.  **Probabilistic Nature:** LLMs predict the *next most likely word* based on patterns they've seen during training. They don't "know" facts in the way humans do; they know statistical associations. sometimes, this leads to plausible-sounding but incorrect code or libraries.
2.  **Outdated Knowledge:** If a library updated its API yesterday, the AI (trained on data from months ago) might suggest the old, deprecated method.
3.  **Lack of Context:** If the AI doesn't see your entire file or project structure, it might invent functions or variables that it *assumes* exist based on common coding patterns.

**How to minimize hallucinations in FlowPilot:**
- **Provide Context:** FlowPilot automatically tries to grab relevant context, but selecting more code or having open relevant files helps.
- **Verify Imports:** Always double-check suggested library imports.
- **Treat it as a Copilot, not an Autopilot:** YOU are the pilot. FlowPilot is here to suggest and explain, but you should always review the code before committing to production.

### Is my code private?

Yes. FlowPilot sends snippets of your code to the LLM provider (e.g., OpenAI, Anthropic, or OpenRouter) *only* when you explicitly trigger a command like "Explain Selection" or "Review File". Your code is **not** used to train their public models.

---

## 🛠️ Troubleshooting

### The extension isn't loading!
1.  Check your internet connection (FlowPilot requires an active connection to query the AI).
2.  Ensure you have a valid API Key set in the settings.
3.  Try running `Developer: Reload Window` in the VS Code command palette.

### "Rate Limit Exceeded"?
If you see this error, it means you've made too many requests in a short period. Wait a minute and try again. Pro users have higher rate limits.
