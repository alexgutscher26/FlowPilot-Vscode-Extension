import * as vscode from 'vscode';

import { ParserService } from './services/parserService';

export interface ExplainContext {
    code: string;
    fileName: string;
    languageId: string;
    surroundingLines?: string;
    cursorLine?: number;
    isSyntaxValid?: boolean;
}

export async function getExplainContext(): Promise<ExplainContext | null> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return null;
    }

    const document = editor.document;
    const selections = editor.selections;
    const fileName = document.fileName;
    const languageId = document.languageId;
    // Default to the active cursor line of the primary selection
    const cursorLine = editor.selection.active.line;

    let code = '';
    let surroundingLines = '';

    if (selections.length > 0 && !selections[0].isEmpty) {
        // User selected code
        // Aggregate all selections
        const selectedTexts: string[] = [];
        selections.forEach(sel => {
            if (!sel.isEmpty) {
                selectedTexts.push(document.getText(sel));
            }
        });

        // Join with a clear separator
        code = selectedTexts.join('\n\n---\n\n');

        // For surrounding lines, we'll just stick to the primary selection for now to avoid Context Overflow
        // Get some surrounding context (e.g., 5 lines before and after primary selection)
        const primarySelection = editor.selection;
        const startLine = Math.max(0, primarySelection.start.line - 5);
        const endLine = Math.min(document.lineCount - 1, primarySelection.end.line + 5);
        const contextRange = new vscode.Range(startLine, 0, endLine, document.lineAt(endLine).text.length);
        surroundingLines = document.getText(contextRange);
    } else {
        // No selection: check for enclosing function first
        let expansionRange: vscode.Range | null = null;
        try {
            const parser = ParserService.getInstance();
            // Need full text for parsing to find context
            const fullText = document.getText();
            // Use primary selection active position
            const enclosing = await parser.findEnclosingFunction(fullText, languageId, cursorLine, editor.selection.active.character);

            if (enclosing) {
                expansionRange = new vscode.Range(enclosing.startLine, 0, enclosing.endLine, document.lineAt(enclosing.endLine).text.length);
                console.log(`Auto-expanded selection to lines ${enclosing.startLine}-${enclosing.endLine}`);
            }
        } catch (e) {
            console.error('Auto-expand failed:', e);
        }

        if (expansionRange) {
            code = document.getText(expansionRange);
            // Add a bit of buffer if needed, or just use the function itself
            surroundingLines = code;
            // Update context cursor line to be relative or meaningful if needed, 
            // but for now keeping original cursor line is fine.
        } else {
            // Fallback to simple line grabs
            const checkRange = 20; // lines before and after
            const startLine = Math.max(0, cursorLine - checkRange);
            const endLine = Math.min(document.lineCount - 1, cursorLine + checkRange);

            const range = new vscode.Range(startLine, 0, endLine, document.lineAt(endLine).text.length);
            code = document.getText(range);
            surroundingLines = code;
        }
    }

    // AST Verification
    let isSyntaxValid = true;
    try {
        isSyntaxValid = await ParserService.getInstance().validateSelection(code, languageId);
    } catch (e) {
        console.error('Failed to validate selection syntax:', e);
    }

    return {
        code,
        fileName,
        languageId,
        surroundingLines,
        cursorLine,
        isSyntaxValid
    };
}
