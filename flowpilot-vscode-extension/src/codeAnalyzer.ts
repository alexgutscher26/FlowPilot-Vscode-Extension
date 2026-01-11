import * as vscode from 'vscode';
import fetch from 'node-fetch';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

interface LintIssue {
    line: number;
    column?: number;
    severity: 'error' | 'warning' | 'info';
    message: string;
    rule?: string;
    suggestedFix?: string;
}

interface SecurityFinding {
    line: number;
    severity: 'critical' | 'high' | 'medium' | 'low';
    category: string;
    title: string;
    description: string;
    remediation: string;
}

export interface AnalysisResult {
    linting?: {
        issues: LintIssue[];
        summary: {
            errors: number;
            warnings: number;
            infos: number;
        };
    };
    security?: {
        findings: SecurityFinding[];
        summary: {
            critical: number;
            high: number;
            medium: number;
            low: number;
        };
        overallRisk: 'critical' | 'high' | 'medium' | 'low' | 'none';
    };
}

// Diagnostic collection for displaying issues inline
let lintDiagnostics: vscode.DiagnosticCollection;
let securityDiagnostics: vscode.DiagnosticCollection;

export function initializeDiagnostics(context: vscode.ExtensionContext) {
    lintDiagnostics = vscode.languages.createDiagnosticCollection('flowpilot');
    securityDiagnostics = vscode.languages.createDiagnosticCollection('flowpilot-security');

    context.subscriptions.push(lintDiagnostics);
    context.subscriptions.push(securityDiagnostics);

    console.log('[FlowPilot] Diagnostic collections initialized:', {
        lint: lintDiagnostics.name,
        security: securityDiagnostics.name
    });
}

/**
 * Analyze code for linting issues
 */
export async function analyzeLinting(
    code: string,
    languageId: string,
    fileName?: string
): Promise<LintIssue[]> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/lint-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                languageId,
                fileName: fileName || 'untitled'
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data.issues || [];
    } catch (error) {
        console.error('[FlowPilot] Linting analysis failed:', error);
        throw error;
    }
}

/**
 * Analyze code for security vulnerabilities
 */
export async function analyzeSecurity(
    code: string,
    languageId: string,
    fileName?: string
): Promise<SecurityFinding[]> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/analyze-security`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                languageId,
                fileName: fileName || 'untitled'
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data.findings || [];
    } catch (error) {
        console.error('[FlowPilot] Security analysis failed:', error);
        throw error;
    }
}

/**
 * Run both linting and security analysis
 */
export async function analyzeCode(
    document: vscode.TextDocument
): Promise<AnalysisResult> {
    const code = document.getText();
    const languageId = document.languageId;
    const fileName = document.fileName;

    console.log('[FlowPilot] Analyzing code:', { fileName, languageId, codeLength: code.length });

    try {
        // Run both analyses in parallel
        const [lintIssues, securityFindings] = await Promise.all([
            analyzeLinting(code, languageId, fileName).catch(err => {
                console.error('[FlowPilot] Linting failed:', err);
                return [];
            }),
            analyzeSecurity(code, languageId, fileName).catch(err => {
                console.error('[FlowPilot] Security analysis failed:', err);
                return [];
            })
        ]);

        // Calculate summaries
        const lintSummary = {
            errors: lintIssues.filter(i => i.severity === 'error').length,
            warnings: lintIssues.filter(i => i.severity === 'warning').length,
            infos: lintIssues.filter(i => i.severity === 'info').length,
        };

        const securitySummary = {
            critical: securityFindings.filter(f => f.severity === 'critical').length,
            high: securityFindings.filter(f => f.severity === 'high').length,
            medium: securityFindings.filter(f => f.severity === 'medium').length,
            low: securityFindings.filter(f => f.severity === 'low').length,
        };

        let overallRisk: 'critical' | 'high' | 'medium' | 'low' | 'none' = 'none';
        if (securitySummary.critical > 0) overallRisk = 'critical';
        else if (securitySummary.high > 0) overallRisk = 'high';
        else if (securitySummary.medium > 0) overallRisk = 'medium';
        else if (securitySummary.low > 0) overallRisk = 'low';

        return {
            linting: {
                issues: lintIssues,
                summary: lintSummary
            },
            security: {
                findings: securityFindings,
                summary: securitySummary,
                overallRisk
            }
        };
    } catch (error) {
        console.error('[FlowPilot] Code analysis failed:', error);
        throw error;
    }
}

/**
 * Display analysis results as inline diagnostics
 */
export function displayDiagnostics(
    document: vscode.TextDocument,
    result: AnalysisResult
) {
    const uri = document.uri;
    const lintDiags: vscode.Diagnostic[] = [];
    const securityDiags: vscode.Diagnostic[] = [];

    // Convert linting issues to diagnostics
    if (result.linting) {
        for (const issue of result.linting.issues) {
            const line = Math.max(0, issue.line - 1); // Convert to 0-indexed

            // Ensure line number is within document bounds
            if (line >= document.lineCount) {
                console.warn(`[FlowPilot] Line ${issue.line} is out of bounds (document has ${document.lineCount} lines)`);
                continue;
            }

            const lineText = document.lineAt(line);
            const startCol = issue.column || 0;
            const endCol = lineText.range.end.character;
            const range = new vscode.Range(line, startCol, line, endCol);

            let severity: vscode.DiagnosticSeverity;
            if (issue.severity === 'error') {
                severity = vscode.DiagnosticSeverity.Error;
            } else if (issue.severity === 'warning') {
                severity = vscode.DiagnosticSeverity.Warning;
            } else {
                severity = vscode.DiagnosticSeverity.Information;
            }

            const diagnostic = new vscode.Diagnostic(
                range,
                issue.message,
                severity
            );
            diagnostic.source = 'FlowPilot';
            if (issue.rule) {
                diagnostic.code = issue.rule;
            }

            lintDiags.push(diagnostic);
        }
    }

    // Convert security findings to diagnostics
    if (result.security) {
        for (const finding of result.security.findings) {
            const line = Math.max(0, finding.line - 1); // Convert to 0-indexed

            // Ensure line number is within document bounds
            if (line >= document.lineCount) {
                console.warn(`[FlowPilot Security] Line ${finding.line} is out of bounds (document has ${document.lineCount} lines)`);
                continue;
            }

            const lineText = document.lineAt(line);
            const range = new vscode.Range(line, 0, line, lineText.range.end.character);

            let severity: vscode.DiagnosticSeverity;
            if (finding.severity === 'critical' || finding.severity === 'high') {
                severity = vscode.DiagnosticSeverity.Error;
            } else if (finding.severity === 'medium') {
                severity = vscode.DiagnosticSeverity.Warning;
            } else {
                severity = vscode.DiagnosticSeverity.Information;
            }

            const message = `🔒 ${finding.title}: ${finding.description}`;
            const diagnostic = new vscode.Diagnostic(
                range,
                message,
                severity
            );
            diagnostic.source = 'FlowPilot Security';
            diagnostic.code = finding.category;

            securityDiags.push(diagnostic);
        }
    }

    // Update diagnostic collections
    lintDiagnostics.set(uri, lintDiags);
    securityDiagnostics.set(uri, securityDiags);

    console.log('[FlowPilot] Diagnostics displayed:', {
        linting: lintDiags.length,
        security: securityDiags.length
    });

    // Debug: Log first diagnostic details
    if (lintDiags.length > 0) {
        const first = lintDiags[0];
        console.log('[FlowPilot] First lint diagnostic:', {
            message: first.message,
            severity: first.severity,
            range: `${first.range.start.line}:${first.range.start.character}-${first.range.end.line}:${first.range.end.character}`,
            source: first.source
        });
    }

    // Debug: Verify diagnostic collection has items
    console.log('[FlowPilot] Diagnostic collection size:', lintDiagnostics.get(uri)?.length || 0);
}

/**
 * Clear diagnostics for a document
 */
export function clearDiagnostics(uri: vscode.Uri) {
    lintDiagnostics.delete(uri);
    securityDiagnostics.delete(uri);
}
