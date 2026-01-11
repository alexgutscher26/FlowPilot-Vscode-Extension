---
sidebar_position: 5
title: API Reference
description: Complete API documentation for FlowPilot backend endpoints
---

# 🔌 API Reference

This document provides a complete reference for FlowPilot's backend API endpoints. All endpoints are hosted at `http://localhost:3000` during development.

---

## 🔐 Authentication

Most API endpoints require authentication via API key.

### Headers

```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Getting an API Key

1. Visit the web dashboard at `http://localhost:3000`
2. Sign in with GitHub
3. Navigate to Settings → API Keys
4. Generate a new API key
5. Copy the key and store it securely in VS Code's Secret Storage

---

## 📡 Endpoints

### Code Analysis

#### `POST /api/explain`

Stream an explanation of selected code.

**Request Body:**

```json
{
  "code": "function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }",
  "fileName": "math.js",
  "languageId": "javascript",
  "surroundingLines": "// Helper functions\nfunction fibonacci(n) {...}\nconst result = fibonacci(10);"
}
```

**Response:** Server-Sent Events (SSE)

```
data: {"accumulated": "This is a recursive implementation", "done": false}

data: {"accumulated": "This is a recursive implementation of the Fibonacci sequence...", "done": false}

data: {"content": "{\"summary\":\"Recursive Fibonacci\",\"steps\":[...]}", "done": true}
```

**Final JSON Structure:**

```json
{
  "summary": "Recursive implementation of Fibonacci sequence",
  "steps": [
    {
      "number": 1,
      "title": "Base Case Check",
      "description": "Returns n if n <= 1"
    },
    {
      "number": 2,
      "title": "Recursive Calls",
      "description": "Calls itself with n-1 and n-2"
    }
  ],
  "suggestions": [
    "Consider using memoization for better performance",
    "Add input validation for negative numbers"
  ]
}
```

---

#### `POST /api/explain-error`

Stream an explanation and fix for an error.

**Request Body:**

```json
{
  "code": "const user = null;\nconsole.log(user.name);",
  "fileName": "app.js",
  "languageId": "javascript",
  "errors": [
    {
      "message": "Cannot read property 'name' of null",
      "line": 2,
      "severity": 1
    }
  ]
}
```

**Response:** Server-Sent Events (SSE)

**Final JSON Structure:**

```json
{
  "rootCause": "Attempting to access property on null value",
  "explanation": "The variable 'user' is null, so accessing 'user.name' throws a TypeError.",
  "fix": "Add null check before accessing properties",
  "fixedCode": "const user = null;\nif (user) {\n  console.log(user.name);\n}",
  "steps": [
    "Check if user exists before accessing properties",
    "Use optional chaining: user?.name",
    "Provide a default value"
  ]
}
```

---

#### `POST /api/review-snippet`

Get a code review for a selected snippet.

**Request Body:**

```json
{
  "code": "function add(a, b) { return a + b; }",
  "fileName": "utils.js",
  "languageId": "javascript"
}
```

**Response:**

```json
{
  "score": 85,
  "summary": "Good implementation with minor improvements needed",
  "issues": [
    {
      "severity": "low",
      "message": "Missing JSDoc comments",
      "line": 1
    }
  ],
  "suggestions": [
    "Add type checking for parameters",
    "Include JSDoc documentation"
  ],
  "refactoredCode": "/**\n * Adds two numbers\n * @param {number} a\n * @param {number} b\n * @returns {number}\n */\nfunction add(a, b) {\n  return a + b;\n}"
}
```

---

#### `POST /api/lint-code`

Run linting analysis on code.

**Request Body:**

```json
{
  "code": "var x = 1;\nconsole.log(x)",
  "languageId": "javascript"
}
```

**Response:**

```json
{
  "issues": [
    {
      "line": 1,
      "column": 1,
      "severity": "warning",
      "message": "Unexpected var, use let or const instead",
      "rule": "no-var"
    },
    {
      "line": 2,
      "column": 16,
      "severity": "error",
      "message": "Missing semicolon",
      "rule": "semi"
    }
  ]
}
```

---

#### `POST /api/analyze-security`

Analyze code for security vulnerabilities.

**Request Body:**

```json
{
  "code": "const query = 'SELECT * FROM users WHERE id = ' + userId;",
  "languageId": "javascript"
}
```

**Response:**

```json
{
  "overallRisk": "high",
  "vulnerabilities": [
    {
      "type": "SQL Injection",
      "severity": "critical",
      "line": 1,
      "description": "Direct string concatenation in SQL query",
      "recommendation": "Use parameterized queries or ORM"
    }
  ]
}
```

---

### Session Management

#### `POST /api/sessions`

Create a new coding session.

**Request Body:**

```json
{
  "startTime": "2026-01-11T16:00:00Z",
  "languageId": "typescript",
  "fileName": "app.ts"
}
```

**Response:**

```json
{
  "id": "session_abc123",
  "userId": "user_xyz789",
  "startTime": "2026-01-11T16:00:00Z",
  "languageId": "typescript"
}
```

---

#### `GET /api/sessions`

Get all sessions for the authenticated user.

**Query Parameters:**
- `limit` (optional): Number of sessions to return (default: 50)
- `offset` (optional): Pagination offset (default: 0)

**Response:**

```json
{
  "sessions": [
    {
      "id": "session_abc123",
      "startTime": "2026-01-11T16:00:00Z",
      "endTime": "2026-01-11T17:30:00Z",
      "languageId": "typescript",
      "eventsCount": 42
    }
  ],
  "total": 150,
  "hasMore": true
}
```

---

#### `GET /api/sessions/:id`

Get details for a specific session.

**Response:**

```json
{
  "id": "session_abc123",
  "startTime": "2026-01-11T16:00:00Z",
  "endTime": "2026-01-11T17:30:00Z",
  "languageId": "typescript",
  "events": [
    {
      "type": "explain",
      "timestamp": "2026-01-11T16:15:00Z",
      "fileName": "app.ts"
    }
  ]
}
```

---

### User Management

#### `GET /api/user/profile`

Get the authenticated user's profile.

**Response:**

```json
{
  "id": "user_xyz789",
  "email": "developer@example.com",
  "name": "Alex Developer",
  "avatar": "https://github.com/alexgutscher26.png",
  "tier": "free",
  "createdAt": "2026-01-01T00:00:00Z"
}
```

---

#### `POST /api/user/ensure`

Ensure user exists (creates if not).

**Request Body:**

```json
{
  "email": "developer@example.com",
  "name": "Alex Developer"
}
```

**Response:**

```json
{
  "id": "user_xyz789",
  "email": "developer@example.com",
  "isNew": false
}
```

---

### Authentication

#### `POST /api/auth/api-key`

Generate a new API key.

**Request Body:**

```json
{
  "name": "VS Code Extension"
}
```

**Response:**

```json
{
  "key": "fp_live_abc123xyz789",
  "name": "VS Code Extension",
  "createdAt": "2026-01-11T16:00:00Z"
}
```

⚠️ **Important**: Store this key securely. It will only be shown once.

---

### Miscellaneous

#### `GET /api/tip`

Get a random coding tip.

**Response:**

```json
{
  "id": "tip_001",
  "title": "Use const by default",
  "content": "Prefer const over let when the variable won't be reassigned. This makes your code more predictable.",
  "category": "best-practices"
}
```

---

## 🔄 Rate Limits

| Tier | Requests/Minute | Requests/Day |
|------|----------------|--------------|
| Free | 20 | 500 |
| Pro  | 100 | 5,000 |

**Rate Limit Headers:**

```http
X-RateLimit-Limit: 20
X-RateLimit-Remaining: 15
X-RateLimit-Reset: 1641916800
```

---

## ❌ Error Responses

All errors follow this format:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Missing required field: code",
    "details": {
      "field": "code"
    }
  }
}
```

**Common Error Codes:**

| Code | HTTP Status | Description |
|------|------------|-------------|
| `INVALID_REQUEST` | 400 | Malformed request body |
| `UNAUTHORIZED` | 401 | Missing or invalid API key |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

---

## 🧪 Testing with cURL

### Explain Code

```bash
curl -X POST http://localhost:3000/api/explain \
  -H "Content-Type: application/json" \
  -d '{
    "code": "const sum = (a, b) => a + b;",
    "fileName": "math.js",
    "languageId": "javascript"
  }'
```

### Get Sessions

```bash
curl http://localhost:3000/api/sessions \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## 📚 SDK & Libraries

### TypeScript/JavaScript

```typescript
import { FlowPilotClient } from '@flowpilot/sdk';

const client = new FlowPilotClient({
  apiKey: 'fp_live_abc123xyz789',
  baseUrl: 'http://localhost:3000'
});

const explanation = await client.explain({
  code: 'function hello() { return "world"; }',
  languageId: 'javascript'
});
```

*(SDK coming soon)*

---

## 🔗 Related Documentation

- [Architecture](./architecture.md) - System design and data flow
- [Contributing](./contributing.md) - How to add new endpoints
- [Getting Started](./getting-started.md) - Development setup

---

## 📝 Changelog

### v0.8.10 (Current)
- Added `/api/analyze-security` endpoint
- Improved streaming performance for `/api/explain`
- Added rate limiting headers

### v0.8.0
- Initial API release
- Core endpoints: explain, explain-error, review-snippet
