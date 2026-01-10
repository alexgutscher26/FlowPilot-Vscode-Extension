import * as vscode from 'vscode';

export interface ExplainContext {
    code: string;
    fileName: string;
    languageId: string;
    surroundingLines?: string;
    cursorLine?: number;
}

export function getExplainContext(): ExplainContext | null {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return null;
    }

    const document = editor.document;
    const selection = editor.selection;
    const fileName = document.fileName;
    const languageId = document.languageId;
    const cursorLine = selection.active.line;

    let code = '';
    let surroundingLines = '';

    if (!selection.isEmpty) {
        // User selected code
        code = document.getText(selection);

        // Get some surrounding context (e.g., 5 lines before and after)
        const startLine = Math.max(0, selection.start.line - 5);
        const endLine = Math.min(document.lineCount - 1, selection.end.line + 5);
        const contextRange = new vscode.Range(startLine, 0, endLine, document.lineAt(endLine).text.length);
        surroundingLines = document.getText(contextRange);
    } else {
        // No selection: grab 20 lines around cursor
        const checkRange = 20; // lines before and after
        const startLine = Math.max(0, cursorLine - checkRange);
        const endLine = Math.min(document.lineCount - 1, cursorLine + checkRange);

        const range = new vscode.Range(startLine, 0, endLine, document.lineAt(endLine).text.length);
        code = document.getText(range);
        // In this case, code acts as both the target and context, but we can separate if needed.
        // For simplicity, we'll set surroundingLines to the same block or just empty if 'code' covers it.
        surroundingLines = code;
    }

    return {
        code,
        fileName,
        languageId,
        surroundingLines,
        cursorLine
    };
}
