---
sidebar_position: 6
title: Contributing Guide
description: How to contribute to FlowPilot
---

# 🤝 Contributing to FlowPilot

Thank you for your interest in contributing to FlowPilot! This guide will help you get started with the development workflow, coding standards, and contribution process.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher
- **npm** or **bun** (we use bunin examples)
- **Git**
- **VS Code** (for extension development)

---

## 🚀 Getting Started

### 1. Fork & Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/alexgutscher26/FlowPilot-Vscode-Extension
cd FlowPilot-Vscode-Extension
```

### 2. Install Dependencies

```bash
# Install extension dependencies
cd flowpilot-vscode-extension
bun install

# Install web dashboard dependencies
cd ../apps/web
bun install

# Install docs dependencies
cd ../flowpilot-docs
bun install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in `apps/web`:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/flowpilot"

# OpenRouter API (for LLM)
OPENROUTER_API_KEY="your_api_key_here"

# Better Auth
BETTER_AUTH_SECRET="your_secret_here"
BETTER_AUTH_URL="http://localhost:3000"

# GitHub OAuth (optional, for dashboard auth)
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
```

### 4. Set Up Database

```bash
cd apps/web
npx prisma migrate dev
npx prisma generate
```

---

## 🛠️ Development Workflow

### Extension Development

```bash
cd flowpilot-vscode-extension
bun run watch
```

Then press **F5** in VS Code to launch the Extension Development Host.

### Web Dashboard Development

```bash
cd apps/web
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Documentation Development

```bash
cd flowpilot-docs
bun run start
```

Visit [http://localhost:3000](http://localhost:3000) (or 3001 if port is busy)

---

## 📝 Coding Standards

### TypeScript

- Use **TypeScript** for all new code
- Enable strict mode
- Avoid `any` types—use proper type definitions
- Use `const` over `let` when possible

### Naming Conventions

- **Files**: `camelCase.ts` for utilities, `PascalCase.tsx` for React components
- **Functions**: `camelCase`
- **Classes**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`

### Code Style

We use ESLint and Prettier for code formatting:

```bash
# Run linter
bun run lint

# Auto-fix linting issues
bun run lint -- --fix
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add explain error command
fix: resolve streaming response bug
docs: update architecture diagrams
chore: update dependencies
```

---

## 🔍 Testing

### Extension Tests

```bash
cd flowpilot-vscode-extension
bun run test
```

### Web Tests

```bash
cd apps/web
bun run test
```

---

## 🎯 Contribution Areas

### 🐛 Bug Fixes

1. Check [existing issues](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension/issues)
2. Comment on the issue you want to work on
3. Create a branch: `git checkout -b fix/issue-description`
4. Fix the bug and add tests if applicable
5. Submit a PR

### ✨ New Features

1. Open a **Feature Request** issue first to discuss
2. Wait for maintainer approval
3. Create a branch: `git checkout -b feat/feature-name`
4. Implement the feature
5. Add tests and documentation
6. Submit a PR

### 📚 Documentation

Documentation improvements are always welcome!

- Fix typos or unclear explanations
- Add examples or diagrams
- Improve architecture documentation
- Update API references

---

## 🔄 Pull Request Process

### 1. Create a Branch

```bash
git checkout -b feat/your-feature-name
```

### 2. Make Your Changes

- Write clean, well-documented code
- Add tests for new functionality
- Update documentation if needed

### 3. Test Locally

```bash
# Run linter
bun run lint

# Run tests
bun run test

# Test the extension manually in VS Code
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
```

### 5. Push to Your Fork

```bash
git push origin feat/your-feature-name
```

### 6. Open a Pull Request

- Go to the [main repository](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension)
- Click "New Pull Request"
- Select your fork and branch
- Fill out the PR template:
  - **Description**: What does this PR do?
  - **Related Issue**: Link to the issue (e.g., `Closes #123`)
  - **Testing**: How did you test this?
  - **Screenshots**: If applicable

### 7. Code Review

- Maintainers will review your PR
- Address any requested changes
- Once approved, your PR will be merged!

---

## 🏗️ Project Structure

```
FlowPilot-Vscode-Extension/
├── flowpilot-vscode-extension/   # VS Code Extension
│   ├── src/
│   │   ├── extension.ts          # Entry point
│   │   ├── flowPilotProvider.ts  # Webview provider
│   │   ├── codeAnalyzer.ts       # Linting/security
│   │   └── context.ts            # Context extraction
│   └── package.json
│
├── apps/web/                      # Next.js Dashboard
│   ├── app/
│   │   ├── api/                  # API routes
│   │   ├── dashboard/            # Dashboard pages
│   │   └── layout.tsx
│   ├── prisma/
│   │   └── schema.prisma         # Database schema
│   └── package.json
│
└── flowpilot-docs/                # Documentation
    ├── docs/
    ├── blog/
    └── docusaurus.config.ts
```

---

## 🎨 Design Guidelines

### Extension UI

- Follow VS Code's design language
- Use CSS variables for theming (e.g., `var(--vscode-editor-background)`)
- Ensure dark mode compatibility
- Keep UI minimal and unobtrusive

### Web Dashboard

- Use TailwindCSS for styling
- Follow responsive design principles
- Maintain consistency with extension branding

---

## 🐞 Debugging Tips

### Extension Debugging

1. Press **F5** to launch Extension Development Host
2. Set breakpoints in your TypeScript code
3. Use `console.log()` or VS Code's debugger
4. Check the **Output** panel for logs

### Backend Debugging

1. Use `console.log()` in API routes
2. Check terminal output where `bunrun dev` is running
3. Use browser DevTools Network tab for API requests

---

## 📞 Getting Help

- **Discord**: Join our community (coming soon)
- **GitHub Issues**: Ask questions or report bugs
- **Discussions**: Start a discussion for general questions

---

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:

- Be respectful and considerate
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

---

## 🎉 Recognition

All contributors will be recognized in our:

- **README.md** Contributors section
- **Release notes** for their contributions
- **GitHub Contributors** page

Thank you for making FlowPilot better! 🚀
