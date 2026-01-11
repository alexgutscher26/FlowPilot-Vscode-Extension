import * as vscode from 'vscode';

/**
 * Provides code actions for FlowPilot diagnostics
 * This allows users to click "Explain and Fix" on diagnostics and have it open in FlowPilot
 */
export class FlowPilotCodeActionProvider implements vscode.CodeActionProvider {

    public static readonly providedCodeActionKinds = [
        vscode.CodeActionKind.QuickFix
    ];

    provideCodeActions(
        document: vscode.TextDocument,
        range: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext,
        token: vscode.CancellationToken
    ): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];

        // Check if there are any FlowPilot diagnostics in this range
        const flowPilotDiagnostics = context.diagnostics.filter(
            diag => diag.source === 'FlowPilot' || diag.source === 'FlowPilot Security'
        );

        if (flowPilotDiagnostics.length === 0) {
            return actions;
        }

        // Create "Explain with FlowPilot" action for each diagnostic
        // Check if explain error feature is enabled
        const config = vscode.workspace.getConfiguration('flowpilot');
        if (!config.get<boolean>('features.explainError', true)) {
            return actions;
        }

        for (const diagnostic of flowPilotDiagnostics) {
            const action = new vscode.CodeAction(
                'Explain with FlowPilot',
                vscode.CodeActionKind.QuickFix
            );

            action.command = {
                command: 'flowpilot.explainDiagnostic',
                title: 'Explain with FlowPilot',
                arguments: [document, diagnostic]
            };

            action.diagnostics = [diagnostic];
            action.isPreferred = true; // Make this the default action

            actions.push(action);
        }

        return actions;
    }
}
