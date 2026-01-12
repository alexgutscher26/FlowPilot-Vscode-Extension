---
sidebar_position: 3
title: Features Deep Dive
description: A comprehensive look at FlowPilot's core capabilities.
---

# 🔍 Features Deep Dive

FlowPilot is designed to be an unobtrusive but powerful companion in your VS Code editor. Here is a detailed look at its core features and how to make the most of them.

## 💡 Explain Selection

**Understand complex code in seconds.**

Don't let legacy code or complex regex confuse you. Highlight any snippet of code and ask FlowPilot to break it down.

### How to use:
1.  **Select** a block of code in your editor.
2.  Right-click and choose **"FlowPilot: Explain Selected Code"**.
3.  *Alternatively*, press `Cmd+Shift+P` (or `Ctrl+Shift+P`) and run the command.

**What happens:**
FlowPilot analyzes the selected code along with its surrounding context (variables, imports) to provide a precise explanation of *what* the code does and *why* it works that way.

---

## 🐞 Explain & Fix Error

**Debug faster with an AI Coach.**

When you see a red squiggly line, FlowPilot can diagnose the issue and teach you how to fix it.

### How to use:
1.  Place your cursor on the line with the error.
2.  Run the command **"FlowPilot: Explain Error"**.

**The "Error Coach" Panel:**
Instead of just fixing the code for you, FlowPilot opens a dedicated "Error Coach" panel. This panel:
- **Explains** the root cause of the error (e.g., "TypeError: Cannot read property of undefined").
- **Visualizes** the fix with a diff view.
- **Teaches** you the concept so you don't make the same mistake again.

---

## 📝 Review Entire File

**On-demand code reviews.**

Before you push your code, let FlowPilot perform a comprehensive review of your current file.

### How to use:
1.  Open the file you want to review.
2.  Run **"FlowPilot: Review Entire File"** from the Command Palette.
3.  *Or* click the `Review` button in the FlowPilot side panel.

**What it checks for:**
- **Potential Bugs:** Logic errors, off-by-one errors, null pointer exceptions.
- **Security Vulnerabilities:** Hardcoded secrets, injection risks.
- **Code Quality:** Readability, best practices, and potential refactors.

---

## 💬 Chat Assistant

**Your pair programmer.**

The FlowPilot side panel (`Cmd+Opt+F` or click the icon in the activity bar) is your conversational interface.

- **Ask Questions:** "How do I implement specific authentication middleware?"
- **Generate Code:** "Write a React component for a responsive navbar."
- **Refactor:** "Rewrite this function to be more efficient."

The chat understands your current project context, making its suggestions relevant to your specific codebase.

---

## 🔒 Private Local Inference

**Use FlowPilot completely offline.**

For enhanced privacy or disconnected environments, FlowPilot can connect to specific local LLM servers.

### Supported Backends:
- **Ollama:** The easiest way to get up and running locally.
- **LM Studio:** Compatible with OpenAI-style endpoints.

### How to enable:
1. Ensure your local server is running (e.g., `ollama serve`).
2. Go to **Settings > FlowPilot**.
3. Enable **"Prefer Local Model"**.
4. (Optional) Customize the endpoint URL and Model name.
