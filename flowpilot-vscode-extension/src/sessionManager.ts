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
        console.log('[SessionManager] Sending interaction:', event.interactionType);

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

// Wrappers for specific actions
export async function trackExplain(type: 'selection' | 'error' | 'review', context?: any) {
    let interactionType: InteractionEvent['interactionType'] = 'Explanation';
    if (type === 'error') interactionType = 'Debugging';
    if (type === 'review') interactionType = 'Code Review';

    await trackInteraction({
        interactionType,
        language: getLanguage(context),
        codeSnippet: context?.code, // Assuming context has 'code'
        // concepts: ... could add concept extraction here
    });
}
