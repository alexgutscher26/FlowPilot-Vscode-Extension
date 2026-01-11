---
slug: how-to-use-flowpilot
title: "How to Get the Most Out of FlowPilot"
date: 2026-01-13
authors: [flowpilot-team]
tags: [tutorial, features]
---

# How to Get the Most Out of FlowPilot

FlowPilot is packed with features to help you code smarter. Here's a comprehensive guide to using each one effectively.

<!-- truncate -->

## 💡 Explain Selection

### When to Use
- Understanding legacy code
- Learning new libraries or frameworks
- Deciphering complex algorithms
- Onboarding to a new codebase

### Best Practices

**1. Select Meaningful Context**
Don't just select a single line—include surrounding code for better explanations.

```javascript
// ❌ Bad: Just the function call
doSomething(data);

// ✅ Good: Include the function definition
function doSomething(data) {
  return data.map(x => x * 2);
}
doSomething([1, 2, 3]);
```

**2. Use for Learning**
Ask FlowPilot to explain patterns you see frequently:
- Regex patterns
- Recursive functions
- Design patterns (Factory, Observer, etc.)

## 🐞 Explain Error

### When to Use
- Debugging runtime errors
- Understanding compiler warnings
- Fixing linting issues

### Pro Tips

**1. Include Stack Traces**
The more context FlowPilot has, the better the explanation.

**2. Ask for Multiple Solutions**
FlowPilot often suggests several ways to fix an issue. Try them all to see which fits your use case.

**3. Learn the "Why"**
Don't just apply the fix—read the explanation to understand *why* the error occurred.

## 📝 Review Entire File

### When to Use
- Before committing code
- After major refactoring
- When preparing for code review
- Learning best practices

### What FlowPilot Checks

- **Bugs**: Logic errors, off-by-one errors, null pointer exceptions
- **Security**: SQL injection, XSS vulnerabilities, hardcoded secrets
- **Code Quality**: Readability, naming conventions, code smells
- **Performance**: Inefficient algorithms, unnecessary loops

### Example Workflow

```bash
1. Write your code
2. Run FlowPilot: Review Entire File
3. Address the suggestions
4. Run tests
5. Commit with confidence
```

## 📊 Session Analytics

### Tracking Your Progress

The web dashboard shows:
- **Coding Streak**: How many consecutive days you've coded
- **Language Breakdown**: Which languages you use most
- **Time Saved**: Estimated time saved by using FlowPilot
- **Top Errors**: Most common errors you encounter

### Setting Goals

Use the analytics to:
- Identify knowledge gaps (e.g., frequent errors in async code)
- Track learning progress (e.g., decreasing error rate over time)
- Celebrate milestones (e.g., 100 explanations requested)

## ⚙️ Customization

### Settings

Access FlowPilot settings via:
```
Cmd/Ctrl + Shift + P → "FlowPilot: Settings"
```

**Available Options:**
- Enable/disable specific features
- Set preferred LLM model
- Configure keyboard shortcuts
- Adjust streaming speed

### Keyboard Shortcuts

Default shortcuts:
- `Cmd/Ctrl + Shift + E`: Explain Selection
- `Cmd/Ctrl + Shift + X`: Explain Error
- `Cmd/Ctrl + Shift + R`: Review File

Customize these in VS Code's Keyboard Shortcuts settings.

## 🎯 Advanced Tips

### 1. Use with Git Diff
Review only your changes before committing:
```bash
git diff HEAD | flowpilot review
```

### 2. Batch Explanations
Select multiple functions and ask FlowPilot to explain the overall architecture.

### 3. Language-Specific Features
FlowPilot adapts to your language:
- **Python**: Explains list comprehensions, decorators
- **JavaScript**: Explains closures, promises, async/await
- **TypeScript**: Explains generics, type inference

## 🚀 Next Steps

- Join our [Discord community](#) to share tips
- Check out the [FAQ](../docs/faq.md) for common questions
- Contribute to [FlowPilot on GitHub](https://github.com/alexgutscher26/FlowPilot-Vscode-Extension)

---

Happy coding! 🦖
