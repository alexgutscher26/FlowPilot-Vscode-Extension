# FlowPilot 🦖

**Your AI-powered coding companion for VS Code**

FlowPilot is an intelligent VS Code extension that helps you understand code, debug errors, and improve code quality—all without leaving your editor.

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue)](https://marketplace.visualstudio.com/items?itemName=flowpilot.flowpilot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension/pulls)

---

## ✨ Features

- **💡 Explain Selection**: Highlight any code and get instant, step-by-step explanations
- **🐞 Debug Faster**: AI-powered error analysis with fix suggestions
- **📝 Code Reviews**: On-demand quality checks for bugs, security, and best practices
- **📊 Session Analytics**: Track your coding sessions via the web dashboard
- **🔒 Privacy First**: Your code is only sent when you explicitly trigger commands
- **⚡ Lightning Fast**: Powered by streaming responses and Tree-sitter AST parsing

---

## 🚀 Quick Start

### Install the Extension

```bash
code --install-extension flowpilot.flowpilot
```

Or search for "FlowPilot" in the VS Code Extensions marketplace.

### Try Your First Explanation

1. Open any code file
2. Select a few lines of code
3. Right-click → **"FlowPilot: Explain Selected Code"**
4. Watch the AI break it down in the sidebar

---

## 📁 Project Structure

This is a monorepo containing:

```
FlowPilot-Vscode-Extension/
├── flowpilot-vscode-extension/   # VS Code Extension (TypeScript)
├── apps/web/                      # Next.js Web Dashboard
└── flowpilot-docs/                # Docusaurus Documentation
```

---

## 🛠️ Development

### Prerequisites

- Node.js v18+
- Bun (recommended) or npm
- VS Code

### Setup

```bash
# Clone the repository
git clone https://github.com/alexgutscher26/FlowPilot-Vscode-Extension.git
cd FlowPilot-Vscode-Extension

# Install dependencies
cd flowpilot-vscode-extension
bun install

# Start development
bun run watch
```

Press **F5** in VS Code to launch the Extension Development Host.

For detailed setup instructions, see our [Contributing Guide](./flowpilot-docs/docs/contributing.md).

---

## 📚 Documentation

- **[Getting Started](./flowpilot-docs/docs/getting-started.md)** - Developer setup guide
- **[Features](./flowpilot-docs/docs/features.md)** - Deep dive into capabilities
- **[Architecture](./flowpilot-docs/docs/architecture.md)** - System design and C4 diagrams
- **[Contributing](./flowpilot-docs/docs/contributing.md)** - How to contribute
- **[FAQ](./flowpilot-docs/docs/faq.md)** - Common questions

---

## 🤝 Contributing

We welcome contributions of all kinds! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

**Quick Links:**
- [Contributing Guide](./flowpilot-docs/docs/contributing.md)
- [Open Issues](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension/issues)
- [Feature Requests](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension/issues/new?labels=enhancement)

---

## 👥 Contributors

Thank you to all the amazing people who have contributed to FlowPilot! 🎉

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/alexgutscher26">
          <img src="https://github.com/alexgutscher26.png?s=100" width="100px;" alt="Alex Gutscher"/>
          <br />
          <sub><b>Alex Gutscher</b></sub>
        </a>
        <br />
        <a href="#" title="Code">💻</a>
        <a href="#" title="Documentation">📖</a>
        <a href="#" title="Design">🎨</a>
      </td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

_Want to see your name here? Check out our [Contributing Guide](./flowpilot-docs/docs/contributing.md)!_

---

## 🏗️ Tech Stack

### Extension
- **TypeScript** - Type-safe development
- **Tree-sitter** - AST parsing for JavaScript, Python, TypeScript
- **esbuild** - Fast bundling
- **VS Code API** - Extension framework

### Backend
- **Next.js 16** - Full-stack React framework
- **Prisma** - Type-safe ORM
- **PostgreSQL** - Database
- **OpenRouter** - LLM API gateway

### Web Dashboard
- **React 19** - UI library
- **TailwindCSS** - Styling
- **Better-Auth** - Authentication
- **Radix UI** - Component primitives

---

## 📊 Roadmap

See our [Master Implementation Roadmap](./todo.md) for the full list of planned features and improvements.

**Current Focus:**
- ✅ Core extension features (Explain, Debug, Review)
- ✅ Web dashboard with session analytics
- ✅ Comprehensive documentation
- 🚧 API reference and OpenAPI spec
- 🚧 CI/CD pipeline
- 🚧 VS Code Marketplace publishing

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenRouter** - For providing LLM API access
- **VS Code Team** - For the amazing extension API
- **Tree-sitter** - For powerful AST parsing
- **All Contributors** - For making FlowPilot better every day

---

## 📞 Support

- **Documentation**: [docs.flowpilot.ai](https://docs.flowpilot.ai) *(coming soon)*
- **Issues**: [GitHub Issues](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension/issues)
- **Discussions**: [GitHub Discussions](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension/discussions)
- **Discord**: Join our community *(coming soon)*

---

<div align="center">

**Made with ❤️ by the FlowPilot team**

[Website](https://flowpilot.ai) • [Documentation](./flowpilot-docs) • [Contributing](./flowpilot-docs/docs/contributing.md)

</div>
