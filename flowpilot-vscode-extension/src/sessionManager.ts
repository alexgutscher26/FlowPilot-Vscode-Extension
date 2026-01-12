import * as vscode from 'vscode';
import fetch from 'node-fetch';

let apiKey: string | undefined;

export function setApiKey(key: string | undefined) {
    apiKey = key;
    console.log('[SessionManager] API Key set:', apiKey ? 'Yes' : 'No');
}

interface InteractionEvent {
    interactionType: 'Code Review' | 'Explanation' | 'Debugging' | 'Refactoring';
    language?: string;
    codeSnippet?: string;
    explanation?: string;
    metadata?: any;
    concepts?: string[];
}

export async function trackInteraction(event: InteractionEvent) {
    if (!apiKey) {
        // If no API key, we can't sync to dashboard, but we might want to log locally or warn once
        // console.warn('[SessionManager] No API key configured. Session not synced.');
        return;
    }

    try {
        console.log('[SessionManager] Sending interaction:', event.interactionType, 'with concepts:', event.concepts);

        const response = await fetch('http://localhost:3000/api/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify(event)
        });

        if (!response.ok) {
            console.warn('[SessionManager] Failed to record interaction:', response.status);
            if (response.status === 401) {
                vscode.window.showWarningMessage('FlowPilot: API Key is invalid or expired. Please reconnect.');
            }
        } else {
            console.log('[SessionManager] Interaction recorded successfully');
        }
    } catch (error) {
        console.error('[SessionManager] Error sending interaction:', error);
    }
}

// Helper to extract language from context or active editor
function getLanguage(context: any): string {
    return context?.languageId || vscode.window.activeTextEditor?.document.languageId || 'plaintext';
}

// Helper to extract concepts from code and explanation
function extractConcepts(code: string, explanation: any, languageId: string): string[] {
    const concepts: string[] = [];

    // If explanation is a JSON object with concepts field, use it
    if (explanation && typeof explanation === 'object' && Array.isArray(explanation.concepts)) {
        concepts.push(...explanation.concepts);
    }

    // Otherwise, extract from code patterns
    const codeStr = code.toLowerCase();

    // React/JavaScript patterns
    if (codeStr.includes('usestate') || codeStr.includes('useeffect') || codeStr.includes('usememo') || codeStr.includes('usecallback')) {
        concepts.push('React Hooks');
    }
    if (codeStr.includes('async') || codeStr.includes('await')) {
        concepts.push('Async/Await');
    }
    if (codeStr.includes('promise')) {
        concepts.push('Promises');
    }
    if (codeStr.includes('map(') || codeStr.includes('filter(') || codeStr.includes('reduce(')) {
        concepts.push('Array Methods');
    }
    if (codeStr.includes('try') && codeStr.includes('catch')) {
        concepts.push('Error Handling');
    }
    if (codeStr.includes('fetch(') || codeStr.includes('axios')) {
        concepts.push('API Integration');
    }
    if (codeStr.includes('interface ') || codeStr.includes('type ') && languageId === 'typescript') {
        concepts.push('TypeScript Types');
    }
    if (codeStr.includes('class ') && codeStr.includes('extends')) {
        concepts.push('Object-Oriented Programming');
    }

    // Python patterns
    if (codeStr.includes('def ') && codeStr.includes('return')) {
        concepts.push('Functions');
    }
    if (codeStr.includes('for ') || codeStr.includes('while ')) {
        concepts.push('Loops');
    }

    // Remove duplicates and return
    return [...new Set(concepts)];
}

// Wrappers for specific actions
export async function trackExplain(type: 'selection' | 'error' | 'review', context?: any) {
    let interactionType: InteractionEvent['interactionType'] = 'Explanation';
    if (type === 'error') interactionType = 'Debugging';
    if (type === 'review') interactionType = 'Code Review';

    await trackInteraction({
        interactionType,
        language: getLanguage(context),
        codeSnippet: context?.code,
        concepts: [] // Will be updated after explanation is received
    });
}

// New function to track with explanation result
export async function trackExplanationResult(type: 'selection' | 'error' | 'review', context: any, explanation: any) {
    let interactionType: InteractionEvent['interactionType'] = 'Explanation';
    if (type === 'error') interactionType = 'Debugging';
    if (type === 'review') interactionType = 'Code Review';

    const language = getLanguage(context);
    const code = context?.code || context?.codeSnippet || '';
    const concepts = extractConcepts(code, explanation, language);

    await trackInteraction({
        interactionType,
        language,
        codeSnippet: code,
        explanation: typeof explanation === 'string' ? explanation : JSON.stringify(explanation),
        concepts
    });
}
