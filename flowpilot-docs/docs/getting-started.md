---
sidebar_position: 2
title: Getting Started
description: Set up your development environment for FlowPilot.
---

# 🚀 Getting Started for Developers

Welcome to the FlowPilot engineering team! This guide will help you set up your local development environment to contribute to the VS Code extension, the Web Dashboard, and this documentation site.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **Git**
- **Visual Studio Code**
- **npm** (or bun/pnpm, though guidelines below use npm)

## 🏗️ Project Structure

The repository is organized as a monorepo-style workspace:

```
flowpilot/
├── apps/
│   └── web/                 # Next.js Web Dashboard & API
├── flowpilot-vscode-extension/   # The Core VS Code Extension
├── flowpilot-docs/          # Docusaurus Documentation Site (You are here)
└── todo.md                  # Master Roadmap
```

---

## 💻 Setting Up the VS Code Extension

This is the core of the product. To build and debug the extension:

1.  **Navigate to the folder:**
    ```bash
    cd flowpilot-vscode-extension
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Compiler in Watch Mode:**
    ```bash
    npm run watch
    ```
    This uses `esbuild` to compile the TypeScript code and watches for changes.

4.  **Launch the Extension Host:**
    - Open the `flowpilot-vscode-extension` folder in VS Code.
    - Press **F5** (or go to *Run and Debug* sidebar and click top arrow).
    - A new "Extension Development Host" window will open with FlowPilot loaded.

> **💡 Tip:** Use `Developer: Reload Window` in the Extension Host (`Ctrl+R`) to apply changes after recompiling.

---

## 🌐 Setting Up the Web Dashboard

The web dashboard handles authentication, user history, and deeper analytics.

1.  **Navigate to the folder:**
    ```bash
    cd apps/web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📚 Running Documentation Locally

To edit or preview these docs:

1.  **Navigate to the folder:**
    ```bash
    cd flowpilot-docs
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Local Server:**
    ```bash
    npm start
    ```
    The site will open at [http://localhost:3000](http://localhost:3000) (or 3001 if port is busy).

---

## 🤝 Contribution Workflow

1.  **Pick a Task**: Check `todo.md` for open items.
2.  **Create a Branch**: `git checkout -b feat/my-new-feature`.
3.  **Develop & Test**: verify your changes in the Debugger.
4.  **Submit PR**: Push your branch and open a Pull Request.

Happy Coding! 🦖
