---
sidebar_position: 1
title: Introduction
description: Welcome to FlowPilot - Your AI Coding Coach
---

# Welcome to FlowPilot

**FlowPilot** is your AI-powered coding companion that lives right inside VS Code. Think of it as having a senior developer looking over your shoulder, ready to explain complex code, debug tricky errors, and help you write better software—all without leaving your editor.

---

## 🎯 What is FlowPilot?

FlowPilot is a VS Code extension that brings the power of Large Language Models (LLMs) directly into your development workflow. Instead of context-switching to ChatGPT or Stack Overflow, you can:

- **Understand code instantly** by selecting any snippet and asking for an explanation
- **Debug faster** with AI-powered error analysis and fix suggestions
- **Improve code quality** with on-demand reviews and refactoring tips
- **Track your progress** via the web dashboard with session analytics

---

## ✨ Key Features

### Explain Selection
Highlight any code snippet—whether it's a cryptic regex, a recursive algorithm, or legacy code from 2015—and FlowPilot will break it down step-by-step.

### Error Coach
Stuck on a bug? FlowPilot analyzes error messages, explains the root cause, and suggests fixes. It's like having a rubber duck that actually talks back.

### File Review
Before you commit, run a full file review. FlowPilot checks for potential bugs, security vulnerabilities, and code smells.

### Web Dashboard
Track your coding sessions, see which languages you're working in, and visualize your progress over time.

---

## 🚀 Quick Start

### 1. Install the Extension

Install FlowPilot from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=flowpilot.flowpilot): 

```bash
# Or via command line
code --install-extension flowpilot.flowpilot
```

### 2. Try Your First Explanation

1. Open any code file
2. Select a few lines of code
3. Right-click → **"FlowPilot: Explain Selected Code"**
4. Watch the AI break it down in the sidebar

### 3. (Optional) Connect to Dashboard

For session tracking and analytics:

1. Run `FlowPilot: Connect to Dashboard`
2. Sign in with GitHub
3. Copy your API key back into VS Code

---

## 🎓 Who is FlowPilot For?

- **Students** learning to code who need explanations in plain English
- **Junior Developers** ramping up on unfamiliar codebases
- **Senior Engineers** debugging obscure errors or reviewing PRs
- **Anyone** who's ever stared at code thinking "What does this even do?"

---

## 🛠️ How It Works

```mermaid
graph LR
    A[You select code] --> B[FlowPilot extracts context]
    B --> C[Sends to LLM API]
    C --> D[AI analyzes & explains]
    D --> E[Results in sidebar]
    
    style A fill:#4caf50,stroke:#45a049,color:#fff
    style E fill:#1b5cff,stroke:#154fe0,color:#fff
```

FlowPilot uses **Tree-sitter** for AST parsing to understand your code structure, then sends relevant context to an LLM (via OpenRouter). The response is streamed back in real-time and displayed in a beautiful, syntax-highlighted panel.

---

## 📚 Next Steps

### [Getting Started](./getting-started.md)
Set up your development environment and start contributing.

### [Features Deep Dive](./features.md)
Learn about all of FlowPilot's capabilities in detail.

### [Architecture](./architecture.md)
Understand how the extension, backend, and LLM work together.

### [FAQ](./faq.md)
Common questions about AI hallucinations, privacy, and troubleshooting.

---

## 🤝 Contributing

FlowPilot is open-source! We welcome contributions of all kinds:

- 🐛 **Bug Reports**: Found an issue? [Open an issue](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension/issues)
- 💡 **Feature Requests**: Have an idea? We'd love to hear it
- 🔧 **Pull Requests**: Check out our [Contributing Guide](./contributing.md)

---

## 📞 Get Help

- **Documentation**: You're reading it! 📖
- **Discord**: Join our community (coming soon)
- **GitHub Issues**: For bugs and feature requests

---

**Ready to code smarter?** Install FlowPilot and let's get started! 🚀
