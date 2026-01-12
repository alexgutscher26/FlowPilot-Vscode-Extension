
import * as assert from 'assert';
import { SanitizationService } from '../../services/sanitizationService';

// Declarations for Mocha globals to avoid TS errors
declare var suite: any;
declare var test: any;

suite('Sanitization Service Test Suite', () => {

    test('Redacts OpenAI API Keys', () => {
        const input = 'const key = "sk-proj-1234567890abcdef1234567890abcdefT3BlbkFJ1234567890abcdef";';
        const expected = 'const key = "[REDACTED]";';
        assert.strictEqual(SanitizationService.redactSecrets(input), expected);

        const input2 = 'const key = "sk-1234567890abcdef1234567890abcdef12345678";'; // 32+ chars
        const expected2 = 'const key = "[REDACTED]";';
        assert.strictEqual(SanitizationService.redactSecrets(input2), expected2);
    });

    test('Redacts GitHub Tokens', () => {
        const input = 'const token = "ghp_1234567890abcdef1234567890abcdef1234";';
        const expected = 'const token = "[REDACTED]";';
        assert.strictEqual(SanitizationService.redactSecrets(input), expected);
    });

    test('Redacts Generic Secrets', () => {
        const input = 'const api_key = "abcdef1234567890abcdef1234567890";';
        const expected = 'const api_key = "[REDACTED]";';
        assert.strictEqual(SanitizationService.redactSecrets(input), expected);
    });

    test('Does not redact innocent text', () => {
        const input = 'const message = "Hello world";';
        assert.strictEqual(SanitizationService.redactSecrets(input), input);
    });
});
