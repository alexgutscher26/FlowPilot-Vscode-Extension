/**
 * Property-based tests for repeated error detection
 * Feature: code-coach-vscode, Property 9: Repeated Error Detection
 */

import * as fc from 'fast-check';
import * as vscode from 'vscode';
import { ConfusionDetector } from '../../confusion/ConfusionDetector';

// Mock VS Code API
const mockContext = {
    subscriptions: [],
    globalState: {
        get: jest.fn(),
        update: jest.fn()
    },
    workspaceState: {
        get: jest.fn(),
        update: jest.fn()
    }
} as any;

const mockConfigurationManager = {
    getConfiguration: jest.fn(),
    dispose: jest.fn()
} as any;

// Mock VS Code workspace configuration
const mockWorkspaceConfig = {
    get: jest.fn()
};

// Mock VS Code window and languages APIs
const mockStatusBarItem = {
    text: '',
    tooltip: '',
    command: undefined,
    show: jest.fn(),
    hide: jest.fn(),
    dispose: jest.fn()
};

// Mock document
const mockDocument = {
    languageId: 'python',
    uri: vscode.Uri.file('/test/file.py'),
    fileName: '/test/file.py'
} as vscode.TextDocument;

describe('Repeated Error Detection Properties', () => {
    let confusionDetector: ConfusionDetector;
    let helpOfferedCallback: jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        
        // Mock VS Code APIs
        (vscode.workspace.getConfiguration as jest.Mock) = jest.fn().mockReturnValue(mockWorkspaceConfig);
        (vscode.window.createStatusBarItem as jest.Mock) = jest.fn().mockReturnValue(mockStatusBarItem);
        (vscode.languages.getDiagnostics as jest.Mock) = jest.fn().mockReturnValue([]);
        (vscode.window.onDidChangeTextEditorSelection as jest.Mock) = jest.fn().mockReturnValue({ dispose: jest.fn() });
        (vscode.window.onDidChangeActiveTextEditor as jest.Mock) = jest.fn().mockReturnValue({ dispose: jest.fn() });
        (vscode.languages.onDidChangeDiagnostics as jest.Mock) = jest.fn().mockReturnValue({ dispose: jest.fn() });
        (vscode.workspace.onDidChangeConfiguration as jest.Mock) = jest.fn().mockReturnValue({ dispose: jest.fn() });
        
        // Default configuration
        mockWorkspaceConfig.get.mockImplementation((key: string, defaultValue?: any) => {
            if (key === 'proactiveSuggestions') return true;
            return defaultValue;
        });

        confusionDetector = new ConfusionDetector(mockContext, mockConfigurationManager);
        
        // Set up callback to track help offers
        helpOfferedCallback = jest.fn();
        confusionDetector.onHelpOfferedCallback(helpOfferedCallback);
    });

    afterEach(() => {
        if (confusionDetector) {
            confusionDetector.dispose();
        }
        jest.useRealTimers();
    });

    // Feature: code-coach-vscode, Property 9: Repeated Error Detection
    test('Property 9: Repeated errors should trigger help after threshold is reached', () => {
        fc.assert(fc.property(
            // Generate test scenarios with repeated errors
            fc.record({
                errorMessage: fc.string({ minLength: 10, maxLength: 100 }),
                lineNumber: fc.integer({ min: 0, max: 100 }),
                repeatCount: fc.integer({ min: 1, max: 10 }),
                timeBetweenRepeats: fc.integer({ min: 1000, max: 60000 }) // 1 second to 1 minute
            }),
            (testCase) => {
                helpOfferedCallback.mockClear();
                
                const testDiagnostic = {
                    message: testCase.errorMessage,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: 'python'
                } as vscode.Diagnostic;

                const diagnosticChangeEvent = {
                    uris: [mockDocument.uri]
                } as vscode.DiagnosticChangeEvent;

                // Mock workspace.textDocuments to include our document
                Object.defineProperty(vscode.workspace, 'textDocuments', {
                    value: [mockDocument],
                    configurable: true
                });

                // Simulate repeated diagnostic changes
                for (let i = 0; i < testCase.repeatCount; i++) {
                    // Mock getDiagnostics to return the same diagnostic
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);
                    
                    // Trigger diagnostic change
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    
                    // Advance time between repeats
                    if (i < testCase.repeatCount - 1) {
                        jest.advanceTimersByTime(testCase.timeBetweenRepeats);
                    }
                }

                // Property: Help should be offered when repeat count reaches threshold (3)
                const maxRepeatThreshold = 3;
                const expectedHelpOffers = testCase.repeatCount >= maxRepeatThreshold ? 1 : 0;
                
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedHelpOffers);
                
                if (expectedHelpOffers > 0) {
                    expect(helpOfferedCallback).toHaveBeenCalledWith(testDiagnostic, 'repeat');
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 9: Old repeated errors should not trigger help after timeout', () => {
        fc.assert(fc.property(
            // Generate scenarios with old and new errors
            fc.record({
                errorMessage: fc.string({ minLength: 10, maxLength: 50 }),
                lineNumber: fc.integer({ min: 0, max: 50 }),
                initialRepeats: fc.integer({ min: 2, max: 4 }),
                timeGap: fc.integer({ min: 300000, max: 900000 }), // 5-15 minutes
                finalRepeats: fc.integer({ min: 1, max: 3 })
            }),
            (testCase) => {
                helpOfferedCallback.mockClear();
                
                const testDiagnostic = {
                    message: testCase.errorMessage,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: 'python'
                } as vscode.Diagnostic;

                const diagnosticChangeEvent = {
                    uris: [mockDocument.uri]
                } as vscode.DiagnosticChangeEvent;

                Object.defineProperty(vscode.workspace, 'textDocuments', {
                    value: [mockDocument],
                    configurable: true
                });

                // Initial repeated errors
                for (let i = 0; i < testCase.initialRepeats; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000); // 30 seconds between
                }

                // Long time gap (should reset history)
                jest.advanceTimersByTime(testCase.timeGap);

                // New repeated errors after timeout
                for (let i = 0; i < testCase.finalRepeats; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Property: Old errors should not count toward new repeat threshold
                // Only final repeats should count, so help should only be offered if finalRepeats >= 3
                const expectedHelpOffers = testCase.finalRepeats >= 3 ? 1 : 0;
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedHelpOffers);
            }
        ), { numRuns: 100 });
    });

    test('Property 9: Different error messages should be tracked separately', () => {
        fc.assert(fc.property(
            // Generate scenarios with multiple different errors
            fc.record({
                error1Message: fc.string({ minLength: 10, maxLength: 50 }),
                error2Message: fc.string({ minLength: 10, maxLength: 50 }),
                lineNumber: fc.integer({ min: 0, max: 50 }),
                error1Repeats: fc.integer({ min: 1, max: 5 }),
                error2Repeats: fc.integer({ min: 1, max: 5 })
            }),
            (testCase) => {
                // Ensure error messages are different
                if (testCase.error1Message === testCase.error2Message) {
                    testCase.error2Message = testCase.error1Message + '_different';
                }
                
                helpOfferedCallback.mockClear();
                
                const diagnostic1 = {
                    message: testCase.error1Message,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: 'python'
                } as vscode.Diagnostic;

                const diagnostic2 = {
                    message: testCase.error2Message,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: 'python'
                } as vscode.Diagnostic;

                const diagnosticChangeEvent = {
                    uris: [mockDocument.uri]
                } as vscode.DiagnosticChangeEvent;

                Object.defineProperty(vscode.workspace, 'textDocuments', {
                    value: [mockDocument],
                    configurable: true
                });

                // Repeat first error
                for (let i = 0; i < testCase.error1Repeats; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([diagnostic1]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Repeat second error
                for (let i = 0; i < testCase.error2Repeats; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([diagnostic2]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Property: Each error should be tracked separately
                const error1ShouldTrigger = testCase.error1Repeats >= 3;
                const error2ShouldTrigger = testCase.error2Repeats >= 3;
                const expectedTotalOffers = (error1ShouldTrigger ? 1 : 0) + (error2ShouldTrigger ? 1 : 0);
                
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedTotalOffers);
            }
        ), { numRuns: 100 });
    });

    test('Property 9: Repeated errors on different lines should be tracked separately', () => {
        fc.assert(fc.property(
            // Generate scenarios with same error on different lines
            fc.record({
                errorMessage: fc.string({ minLength: 10, maxLength: 50 }),
                line1: fc.integer({ min: 0, max: 50 }),
                line2: fc.integer({ min: 0, max: 50 }),
                line1Repeats: fc.integer({ min: 1, max: 5 }),
                line2Repeats: fc.integer({ min: 1, max: 5 })
            }),
            (testCase) => {
                // Ensure lines are different
                if (testCase.line1 === testCase.line2) {
                    testCase.line2 = testCase.line1 + 1;
                }
                
                helpOfferedCallback.mockClear();
                
                const diagnostic1 = {
                    message: testCase.errorMessage,
                    range: new vscode.Range(testCase.line1, 0, testCase.line1, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: 'python'
                } as vscode.Diagnostic;

                const diagnostic2 = {
                    message: testCase.errorMessage,
                    range: new vscode.Range(testCase.line2, 0, testCase.line2, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: 'python'
                } as vscode.Diagnostic;

                const diagnosticChangeEvent = {
                    uris: [mockDocument.uri]
                } as vscode.DiagnosticChangeEvent;

                Object.defineProperty(vscode.workspace, 'textDocuments', {
                    value: [mockDocument],
                    configurable: true
                });

                // Repeat error on first line
                for (let i = 0; i < testCase.line1Repeats; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([diagnostic1]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Repeat error on second line
                for (let i = 0; i < testCase.line2Repeats; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([diagnostic2]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Property: Same error on different lines should be tracked separately
                const line1ShouldTrigger = testCase.line1Repeats >= 3;
                const line2ShouldTrigger = testCase.line2Repeats >= 3;
                const expectedTotalOffers = (line1ShouldTrigger ? 1 : 0) + (line2ShouldTrigger ? 1 : 0);
                
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedTotalOffers);
            }
        ), { numRuns: 100 });
    });

    test('Property 9: Cooldown period should prevent repeated notifications for same error', () => {
        fc.assert(fc.property(
            // Generate scenarios testing cooldown behavior
            fc.record({
                errorMessage: fc.string({ minLength: 10, maxLength: 50 }),
                lineNumber: fc.integer({ min: 0, max: 50 }),
                firstBatch: fc.constant(4), // Enough to trigger first notification
                timeBetweenBatches: fc.integer({ min: 0, max: 600000 }), // 0 to 10 minutes
                secondBatch: fc.constant(4) // Enough to trigger second notification
            }),
            (testCase) => {
                helpOfferedCallback.mockClear();
                confusionDetector.resetMetrics(mockDocument);
                
                const testDiagnostic = {
                    message: testCase.errorMessage,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: 'python'
                } as vscode.Diagnostic;

                const diagnosticChangeEvent = {
                    uris: [mockDocument.uri]
                } as vscode.DiagnosticChangeEvent;

                Object.defineProperty(vscode.workspace, 'textDocuments', {
                    value: [mockDocument],
                    configurable: true
                });

                // First batch of repeated errors
                for (let i = 0; i < testCase.firstBatch; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Time gap between batches
                jest.advanceTimersByTime(testCase.timeBetweenBatches);

                // Second batch of repeated errors
                for (let i = 0; i < testCase.secondBatch; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Property: Second notification should only occur if cooldown period (5 minutes) has passed
                const cooldownPeriod = 300000; // 5 minutes
                const expectedNotifications = testCase.timeBetweenBatches >= cooldownPeriod ? 2 : 1;
                
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedNotifications);
                
                // All calls should be for 'repeat' reason
                for (let i = 0; i < helpOfferedCallback.mock.calls.length; i++) {
                    expect(helpOfferedCallback.mock.calls[i][1]).toBe('repeat');
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 9: Non-Python files should not trigger repeated error detection', () => {
        fc.assert(fc.property(
            // Generate scenarios with different file types
            fc.record({
                languageId: fc.oneof(
                    fc.constant('python'),
                    fc.constant('javascript'),
                    fc.constant('typescript'),
                    fc.constant('java'),
                    fc.constant('plaintext')
                ),
                errorMessage: fc.string({ minLength: 10, maxLength: 50 }),
                lineNumber: fc.integer({ min: 0, max: 20 }),
                repeatCount: fc.constant(5) // Always above threshold
            }),
            (testCase) => {
                helpOfferedCallback.mockClear();
                
                const testDocument = {
                    ...mockDocument,
                    languageId: testCase.languageId
                };
                
                const testDiagnostic = {
                    message: testCase.errorMessage,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: testCase.languageId
                } as vscode.Diagnostic;

                const diagnosticChangeEvent = {
                    uris: [testDocument.uri]
                } as vscode.DiagnosticChangeEvent;

                Object.defineProperty(vscode.workspace, 'textDocuments', {
                    value: [testDocument],
                    configurable: true
                });

                // Repeat errors
                for (let i = 0; i < testCase.repeatCount; i++) {
                    (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);
                    (confusionDetector as any).onDiagnosticsChanged(diagnosticChangeEvent);
                    jest.advanceTimersByTime(30000);
                }

                // Property: Only Python files should trigger repeated error detection
                const expectedOffers = testCase.languageId === 'python' ? 1 : 0;
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedOffers);
            }
        ), { numRuns: 100 });
    });
});