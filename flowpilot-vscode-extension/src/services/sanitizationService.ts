
export class SanitizationService {
    private static readonly PATTERNS = [
        // OpenAI keys
        /sk-[a-zA-Z0-9]{20,}T3BlbkFJ[a-zA-Z0-9]{20,}/g, // New project keys
        /sk-[a-zA-Z0-9]{32,}/g, // Legacy keys, might match others but better safe

        // GitHub Tokens
        /ghp_[a-zA-Z0-9]{36}/g,
        /github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59}/g,

        // Generic "Token" / "Key" / "Secret" assignments (simple heuristics)
        // Matches "key = '...'" or "token: '...'" with high entropy strings
        /(?:api_key|access_token|secret_key|auth_token)\s*[:=]\s*['"]([a-zA-Z0-9_\-]{20,})['"]/gi,
    ];

    /**
     * Redacts known secret patterns from the input text.
     * @param text The text to sanitize.
     * @returns The sanitized text with secrets replaced by [REDACTED].
     */
    public static redactSecrets(text: string): string {
        let sanitized = text;

        for (const pattern of this.PATTERNS) {
            sanitized = sanitized.replace(pattern, (match, p1) => {
                if (typeof p1 === 'string') {
                    return match.replace(p1, '[REDACTED]');
                }
                return '[REDACTED]';
            });
        }

        return sanitized;
    }
}
