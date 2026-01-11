import * as vscode from 'vscode';
import { getExplainContext } from './context';
import { getErrorContext } from './errorContext';
import { initializeDiagnostics, analyzeCode, displayDiagnostics, clearDiagnostics } from './codeAnalyzer';
import type { AnalysisResult } from './codeAnalyzer';
import { FlowPilotCodeActionProvider } from './codeActionProvider';
import { WelcomePanel } from './welcomePage';
// Dynamic import reference for type usage only if needed, or rely on inference
import type { FlowPilotProvider as FlowPilotProviderType } from './flowPilotProvider';

export async function activate(context: vscode.ExtensionContext) {
    console.log('FlowPilot: Attempting to activate extension...');
    try {
        console.log('FlowPilot extension is now active!');

        // Initialize Session Manager with stored API Key
        const apiKey = await context.secrets.get('flowpilot.apiKey');
        const { setApiKey } = await import('./sessionManager');
        setApiKey(apiKey);

        // Initialize Parser Service for AST validation
        const { ParserService } = await import('./services/parserService');
        await ParserService.getInstance(context).init();


        // Initialize diagnostic collections for code analysis
        initializeDiagnostics(context);

        // Dynamically import the provider to handle potential load errors (e.g. missing dependencies)
        const { FlowPilotProvider } = await import('./flowPilotProvider');

        // Register the webview provider
        const provider = new FlowPilotProvider(context.extensionUri);

        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(FlowPilotProvider.viewType, provider)
        );

        // Status bar item for analysis feedback
        const analysisStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        analysisStatusBar.text = '$(loading~spin) FlowPilot analyzing...';
        context.subscriptions.push(analysisStatusBar);

        // Debounce timer for real-time analysis
        let analysisTimeout: NodeJS.Timeout | undefined;
        let lastAnalysisResult: AnalysisResult | undefined;

        // Function to run analysis on a document
        async function runAnalysis(document: vscode.TextDocument) {
            // Only analyze supported file types
            const supportedLanguages = ['javascript', 'typescript', 'python', 'javascriptreact', 'typescriptreact', 'java', 'go', 'ruby', 'php', 'csharp'];
            if (!supportedLanguages.includes(document.languageId)) {
                return;
            }

            // Check if code analysis is enabled
            const config = vscode.workspace.getConfiguration('flowpilot');
            if (!config.get<boolean>('features.codeAnalysis', true)) {
                return;
            }

            // Skip very large files (> 10000 lines)
            if (document.lineCount > 10000) {
                console.log('[FlowPilot] Skipping analysis for large file:', document.fileName);
                return;
            }

            try {
                analysisStatusBar.show();
                console.log('[FlowPilot] Starting analysis for:', document.fileName);

                const result = await analyzeCode(document);
                lastAnalysisResult = result;

                // Display diagnostics inline
                displayDiagnostics(document, result);

                // Send results to webview if it's open
                provider.updateAnalysisResults(result);

                analysisStatusBar.hide();

                // Show notification if critical security issues found
                if (result.security?.overallRisk === 'critical') {
                    vscode.window.showWarningMessage(
                        `FlowPilot: Critical security issues found in ${document.fileName.split('/').pop()}`,
                        'View Details'
                    ).then(selection => {
                        if (selection === 'View Details') {
                            vscode.commands.executeCommand('workbench.view.extension.flowpilot');
                        }
                    });
                }
            } catch (error) {
                console.error('[FlowPilot] Analysis failed:', error);
                analysisStatusBar.hide();
                // Don't show error to user, just log it
            }
        }

        // Real-time analysis on document change (debounced)
        context.subscriptions.push(
            vscode.workspace.onDidChangeTextDocument(event => {
                const document = event.document;

                // Clear existing timeout
                if (analysisTimeout) {
                    clearTimeout(analysisTimeout);
                }

                // Debounce: wait 2 seconds after typing stops
                analysisTimeout = setTimeout(() => {
                    runAnalysis(document);
                }, 2000);
            })
        );

        // Analyze when document is opened
        context.subscriptions.push(
            vscode.workspace.onDidOpenTextDocument(document => {
                runAnalysis(document);
            })
        );

        // Clear diagnostics when document is closed
        context.subscriptions.push(
            vscode.workspace.onDidCloseTextDocument(document => {
                clearDiagnostics(document.uri);
            })
        );

        // Manual analysis command
        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.analyzeCurrent', async () => {
                const config = vscode.workspace.getConfiguration('flowpilot');
                if (!config.get<boolean>('features.codeAnalysis', true)) {
                    vscode.window.showInformationMessage('FlowPilot: Code Analysis is disabled in settings.');
                    return;
                }

                const editor = vscode.window.activeTextEditor;
                if (editor) {
                    await runAnalysis(editor.document);
                    vscode.window.showInformationMessage('FlowPilot analysis complete!');
                } else {
                    vscode.window.showWarningMessage('No active editor to analyze.');
                }
            })
        );

        // Register code action provider for FlowPilot diagnostics
        context.subscriptions.push(
            vscode.languages.registerCodeActionsProvider(
                { scheme: 'file' },
                new FlowPilotCodeActionProvider(),
                {
                    providedCodeActionKinds: FlowPilotCodeActionProvider.providedCodeActionKinds
                }
            )
        );

        // Command to explain a diagnostic
        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.explainDiagnostic', async (document: vscode.TextDocument, diagnostic: vscode.Diagnostic) => {
                // Open FlowPilot panel
                await vscode.commands.executeCommand('workbench.view.extension.flowpilot');

                // Get the code around the diagnostic
                const line = diagnostic.range.start.line;
                const startLine = Math.max(0, line - 3);
                const endLine = Math.min(document.lineCount - 1, line + 3);
                const codeSnippet = document.getText(new vscode.Range(startLine, 0, endLine, document.lineAt(endLine).text.length));

                // Send to FlowPilot for explanation
                const context = {
                    code: codeSnippet,
                    fileName: document.fileName,
                    languageId: document.languageId,
                    diagnostic: {
                        message: diagnostic.message,
                        line: line + 1,
                        severity: diagnostic.severity
                    }
                };

                provider.explainCode(context);
            })
        );

        // Register commands
        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.openPanel', () => {
                console.log('FlowPilot: Opening panel...');
                vscode.commands.executeCommand('workbench.view.extension.flowpilot');
            })
        );

        // Test command to verify extension is working
        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.test', () => {
                vscode.window.showInformationMessage('FlowPilot extension is working!');
                console.log('FlowPilot: Test command executed');
            })
        );

        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.reviewFile', async () => {
                const config = vscode.workspace.getConfiguration('flowpilot');
                if (!config.get<boolean>('features.reviewFile', true)) {
                    vscode.window.showInformationMessage('FlowPilot: File Review is disabled in settings.');
                    return;
                }

                // Open the FlowPilot panel first
                await vscode.commands.executeCommand('workbench.view.extension.flowpilot');

                // Trigger the review
                await provider.handleReviewFile();
            })
        );

        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.explainSelection', async () => {
                try {
                    const config = vscode.workspace.getConfiguration('flowpilot');
                    if (!config.get<boolean>('features.explainSelection', true)) {
                        vscode.window.showInformationMessage('FlowPilot: Explain Selection is disabled in settings.');
                        return;
                    }

                    console.log('FlowPilot: explainSelection command triggered');
                    const explainContext = await getExplainContext();
                    if (explainContext) {
                        // Send context to webview provider which will call the backend
                        provider.explainCode(explainContext);

                        vscode.window.showInformationMessage('FlowPilot is analyzing your code...');
                    } else {
                        vscode.window.showWarningMessage('Please open a file to explain code.');
                    }
                } catch (error) {
                    console.error('FlowPilot: Error in explainSelection command:', error);
                    vscode.window.showErrorMessage('FlowPilot: Error analyzing code. Check output for details.');
                }
            })
        );

        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.explainError', async () => {
                try {
                    const config = vscode.workspace.getConfiguration('flowpilot');
                    if (!config.get<boolean>('features.explainError', true)) {
                        vscode.window.showInformationMessage('FlowPilot: Explain Error is disabled in settings.');
                        return;
                    }

                    console.log('FlowPilot: explainError command triggered');
                    const editor = vscode.window.activeTextEditor;

                    if (!editor) {
                        vscode.window.showWarningMessage('Please open a file to explain errors.');
                        return;
                    }

                    const errorContext = getErrorContext(editor);

                    if (!errorContext || errorContext.errors.length === 0) {
                        vscode.window.showInformationMessage('No errors found! 🎉');
                        return;
                    }

                    // Open the FlowPilot panel first
                    await vscode.commands.executeCommand('workbench.view.extension.flowpilot');

                    // Send error context to webview provider which will call the backend
                    provider.explainError(errorContext);

                    vscode.window.showInformationMessage('FlowPilot is analyzing your error...');
                } catch (error) {
                    console.error('FlowPilot: Error in explainError command:', error);
                    vscode.window.showErrorMessage('FlowPilot: Error analyzing error. Check output for details.');
                }
            })
        );

        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.reviewSnippet', async () => {
                try {
                    const config = vscode.workspace.getConfiguration('flowpilot');
                    if (!config.get<boolean>('features.explainSelection', true)) {
                        vscode.window.showInformationMessage('FlowPilot: Review Snippet is disabled in settings.');
                        return;
                    }

                    console.log('FlowPilot: reviewSnippet command triggered');
                    const explainContext = await getExplainContext();
                    if (explainContext && explainContext.code) {
                        // Ensure panel is open
                        await vscode.commands.executeCommand('workbench.view.extension.flowpilot');
                        // Send to provider
                        provider.reviewSnippet(explainContext);
                        vscode.window.showInformationMessage('FlowPilot is reviewing your snippet...');
                    } else {
                        vscode.window.showWarningMessage('Please select some code to review.');
                    }
                } catch (error) {
                    console.error('FlowPilot: Error in reviewSnippet command:', error);
                    vscode.window.showErrorMessage('FlowPilot: Error reviewing snippet.');
                }
            })
        );

        // Status Bar Nudge Logic
        const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        context.subscriptions.push(statusBarItem);
        let nudgeTimeout: NodeJS.Timeout | undefined;

        context.subscriptions.push(
            vscode.window.onDidChangeTextEditorSelection(e => {
                if (nudgeTimeout) clearTimeout(nudgeTimeout);
                statusBarItem.hide();

                if (e.selections.length > 0 && !e.selections[0].isEmpty) {
                    nudgeTimeout = setTimeout(() => {
                        statusBarItem.text = `$(lightbulb) Review this snippet?`;
                        statusBarItem.command = 'flowpilot.reviewSnippet';
                        statusBarItem.tooltip = 'Get an AI review of your selected code';
                        statusBarItem.show();
                    }, 10000); // 10 seconds
                }
            })
        );
        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.connect', async () => {
                const key = await vscode.window.showInputBox({
                    prompt: 'Enter your FlowPilot API Key',
                    placeHolder: 'fp_...',
                    password: true,
                    ignoreFocusOut: true
                });

                if (key) {
                    await context.secrets.store('flowpilot.apiKey', key);
                    setApiKey(key);
                    vscode.window.showInformationMessage('FlowPilot: Successfully connected!');
                    // provider.refreshAuth(); // ref: key is updated via setApiKey
                }
            })
        );

        // Listen for configuration changes
        context.subscriptions.push(
            vscode.workspace.onDidChangeConfiguration(e => {
                if (e.affectsConfiguration('flowpilot.features.codeAnalysis')) {
                    const config = vscode.workspace.getConfiguration('flowpilot');
                    const enabled = config.get<boolean>('features.codeAnalysis', true);

                    if (enabled) {
                        // Trigger analysis for all open documents
                        vscode.workspace.textDocuments.forEach(doc => runAnalysis(doc));
                    } else {
                        // Clear diagnostics for all open documents
                        vscode.workspace.textDocuments.forEach(doc => clearDiagnostics(doc.uri));
                    }
                }
            })
        );

        console.log('FlowPilot: Activation completed successfully.');

        // Register URI Handler
        context.subscriptions.push(
            vscode.window.registerUriHandler({
                handleUri(uri: vscode.Uri) {
                    const query = new URLSearchParams(uri.query);
                    const key = query.get('key');
                    if (key) {
                        context.secrets.store('flowpilot.apiKey', key).then(() => {
                            vscode.window.showInformationMessage('FlowPilot: Successfully connected to dashboard!');
                            setApiKey(key); // Update directly
                        });
                    }
                }
            })
        );

        // Register Welcome Page Command
        context.subscriptions.push(
            vscode.commands.registerCommand('flowpilot.showWelcome', () => {
                WelcomePanel.createOrShow(context.extensionUri);
            })
        );

        // Check for first install
        const isFirstRun = !context.globalState.get('flowpilot.hasShownWelcome');
        if (isFirstRun) {
            vscode.commands.executeCommand('flowpilot.showWelcome');
            context.globalState.update('flowpilot.hasShownWelcome', true);
        }

    } catch (error) {
        console.error('FlowPilot: Extension activation failed:', error);
        vscode.window.showErrorMessage(`FlowPilot: Extension activation failed: ${error}`);
    }
}

export function deactivate() {
    console.log('FlowPilot extension is now deactivated');
}