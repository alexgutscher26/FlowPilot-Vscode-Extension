import * as vscode from 'vscode';

export type SupportedLanguage = 'python';

export class LanguageSupport {
    public static shouldActivate(document: vscode.TextDocument): boolean {
        const id = document.languageId.toLowerCase();
        if (id === 'python') {
            return true;
        }
        const name = document.fileName.toLowerCase();
        if (name.endsWith('.py') || name.endsWith('.pyw')) {
            return true;
        }
        try {
            const firstLine = document.lineAt(0).text.toLowerCase();
            if (firstLine.startsWith('#!') && firstLine.includes('python')) {
                return true;
            }
        } catch {}
        return false;
    }
}

