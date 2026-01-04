/**
 * Property-based tests for confusion detection timing
 * Feature: code-coach-vscode, Property 8: Confusion Detection Timing
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

const mockDiagnostic = {
    message: 'Test error message',
    range: new vscode.Range(0, 0, 0, 10),
    severity: vscode.DiagnosticSeverity.Error,
    source: 'python'
} as vscode.Diagnostic;

// Mock document
const mockDocument = {
    languageId: 'python',
    uri: vscode.Uri.file('/test/file.py'),
    fileName: '/test/file.py'
} as vscode.TextDocument;

describe('Confusion Detection Timing Properties', () => {
    let confusionDetector: ConfusionDetector;
    let helpOfferedCallback: jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        
        // Mock VS Code APIs
        (vscode.workspace.getConfiguration as jest.Mock) = jest.fn().mockReturnValue(mockWorkspaceConfig);
        (vscode.window.createStatusBarItem as jest.Mock) = jest.fn().mockReturnValue(mockStatusBarItem);
        (vscode.languages.getDiagnostics as jest.Mock) = jest.fn().mockReturnValue([mockDiagnostic]);
        
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
        confusionDetector.dispose();
        jest.useRealTimers();
    });

    // Feature: code-coach-vscode, Property 8: Confusion Detection Timing
    test('Property 8: Dwell time threshold should trigger help offer after 15 seconds', () => {
        fc.assert(fc.property(
            // Generate various dwell times around the 15-second threshold
            fc.record({
                dwellTimeMs: fc.integer({ min: 0, max: 30000 }), // 0 to 30 seconds
                lineNumber: fc.integer({ min: 0, max: 100 }),
                diagnosticMessage: fc.string({ minLength: 5, maxLength: 100 })
            }),
            (testCase) => {
                // Reset mocks
                helpOfferedCallback.mockClear();
                
                // Create test diagnostic
                const testDiagnostic = {
                    ...mockDiagnostic,
                    message: testCase.diagnosticMessage,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10)
                };

                // Mock getDiagnostics to return our test diagnostic
                (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);

                // Simulate cursor position change to line with diagnostic
                const mockSelectionChangeEvent = {
                    textEditor: {
                        document: mockDocument
                    },
                    selections: [{
                        active: new vscode.Position(testCase.lineNumber, 0)
                    }]
                } as any;

                // Trigger cursor position change
                (confusionDetector as any).onCursorPositionChanged(mockSelectionChangeEvent);

                // Fast-forward time by the test dwell time
                jest.advanceTimersByTime(testCase.dwellTimeMs);

                // Property: Help should be offered if and only if dwell time >= 15 seconds
                const expectedHelpOffers = testCase.dwellTimeMs >= 15000 ? 1 : 0;
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedHelpOffers);

                if (expectedHelpOffers > 0) {
                    expect(helpOfferedCallback).toHaveBeenCalledWith(testDiagnostic, 'dwell');
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 8: Cooldown period should prevent repeated notifications', () => {
        fc.assert(fc.property(
            // Generate test scenarios with multiple dwell periods
            fc.record({
                firstDwellMs: fc.constant(16000), // Always trigger first notification
                timeBetweenDwells: fc.integer({ min: 0, max: 600000 }), // 0 to 10 minutes
                secondDwellMs: fc.constant(16000), // Always trigger second attempt
                lineNumber: fc.integer({ min: 0, max: 50 })
            }),
            (testCase) => {
                // Reset mocks and metrics
                helpOfferedCallback.mockClear();
                confusionDetector.resetMetrics(mockDocument);
                
                const testDiagnostic = {
                    ...mockDiagnostic,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10)
                };

                (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);

                const mockSelectionChangeEvent = {
                    textEditor: { document: mockDocument },
                    selections: [{ active: new vscode.Position(testCase.lineNumber, 0) }]
                } as any;

                // First dwell period
                (confusionDetector as any).onCursorPositionChanged(mockSelectionChangeEvent);
                jest.advanceTimersByTime(testCase.firstDwellMs);

                // Move cursor away and back
                const awayEvent = {
                    textEditor: { document: mockDocument },
                    selections: [{ active: new vscode.Position(testCase.lineNumber + 1, 0) }]
                } as any;
                (confusionDetector as any).onCursorPositionChanged(awayEvent);
                
                // Wait for time between dwells
                jest.advanceTimersByTime(testCase.timeBetweenDwells);
                
                // Second dwell period
                (confusionDetector as any).onCursorPositionChanged(mockSelectionChangeEvent);
                jest.advanceTimersByTime(testCase.secondDwellMs);

                // Property: Second notification should only occur if cooldown period (5 minutes) has passed
                const cooldownPeriod = 300000; // 5 minutes
                const expectedNotifications = testCase.timeBetweenDwells >= cooldownPeriod ? 2 : 1;
                
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedNotifications);
                
                // All calls should be for 'dwell' reason
                for (let i = 0; i < helpOfferedCallback.mock.calls.length; i++) {
                    expect(helpOfferedCallback.mock.calls[i][1]).toBe('dwell');
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 8: Moving cursor should reset dwell timer', () => {
        fc.assert(fc.property(
            // Generate cursor movement scenarios
            fc.record({
                initialDwellMs: fc.integer({ min: 1000, max: 14000 }), // Less than threshold
                moveToLine: fc.integer({ min: 0, max: 100 }),
                finalDwellMs: fc.integer({ min: 16000, max: 20000 }), // More than threshold
                originalLine: fc.integer({ min: 0, max: 100 })
            }),
            (testCase) => {
                // Ensure lines are different
                if (testCase.moveToLine === testCase.originalLine) {
                    testCase.moveToLine = testCase.originalLine + 1;
                }
                
                helpOfferedCallback.mockClear();
                
                const originalDiagnostic = {
                    ...mockDiagnostic,
                    range: new vscode.Range(testCase.originalLine, 0, testCase.originalLine, 10)
                };
                
                const newDiagnostic = {
                    ...mockDiagnostic,
                    range: new vscode.Range(testCase.moveToLine, 0, testCase.moveToLine, 10)
                };

                // Mock diagnostics for both lines
                (vscode.languages.getDiagnostics as jest.Mock).mockImplementation((uri) => {
                    return [originalDiagnostic, newDiagnostic];
                });

                // Start on original line
                const originalEvent = {
                    textEditor: { document: mockDocument },
                    selections: [{ active: new vscode.Position(testCase.originalLine, 0) }]
                } as any;
                (confusionDetector as any).onCursorPositionChanged(originalEvent);
                
                // Dwell for less than threshold
                jest.advanceTimersByTime(testCase.initialDwellMs);
                
                // Move to different line
                const moveEvent = {
                    textEditor: { document: mockDocument },
                    selections: [{ active: new vscode.Position(testCase.moveToLine, 0) }]
                } as any;
                (confusionDetector as any).onCursorPositionChanged(moveEvent);
                
                // Dwell for more than threshold on new line
                jest.advanceTimersByTime(testCase.finalDwellMs);

                // Property: Should only get notification for the final line, not the original
                expect(helpOfferedCallback).toHaveBeenCalledTimes(1);
                expect(helpOfferedCallback).toHaveBeenCalledWith(newDiagnostic, 'dwell');
            }
        ), { numRuns: 100 });
    });

    test('Property 8: No help should be offered when proactive suggestions are disabled', () => {
        fc.assert(fc.property(
            // Generate various dwell scenarios
            fc.record({
                dwellTimeMs: fc.integer({ min: 15000, max: 30000 }), // Always above threshold
                lineNumber: fc.integer({ min: 0, max: 50 }),
                proactiveSuggestions: fc.boolean()
            }),
            (testCase) => {
                // Configure proactive suggestions setting
                mockWorkspaceConfig.get.mockImplementation((key: string, defaultValue?: any) => {
                    if (key === 'proactiveSuggestions') return testCase.proactiveSuggestions;
                    return defaultValue;
                });
                
                helpOfferedCallback.mockClear();
                
                const testDiagnostic = {
                    ...mockDiagnostic,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10)
                };

                (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);

                const mockSelectionChangeEvent = {
                    textEditor: { document: mockDocument },
                    selections: [{ active: new vscode.Position(testCase.lineNumber, 0) }]
                } as any;

                // Trigger cursor position change
                (confusionDetector as any).onCursorPositionChanged(mockSelectionChangeEvent);
                
                // Fast-forward past threshold
                jest.advanceTimersByTime(testCase.dwellTimeMs);

                // Property: Help should only be offered when proactive suggestions are enabled
                const expectedCalls = testCase.proactiveSuggestions ? 1 : 0;
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedCalls);
            }
        ), { numRuns: 100 });
    });

    test('Property 8: Only Python files should trigger confusion detection', () => {
        fc.assert(fc.property(
            // Generate various file types
            fc.record({
                languageId: fc.oneof(
                    fc.constant('python'),
                    fc.constant('javascript'),
                    fc.constant('typescript'),
                    fc.constant('java'),
                    fc.constant('plaintext')
                ),
                dwellTimeMs: fc.constant(16000), // Always above threshold
                lineNumber: fc.integer({ min: 0, max: 20 })
            }),
            (testCase) => {
                helpOfferedCallback.mockClear();
                
                const testDocument = {
                    ...mockDocument,
                    languageId: testCase.languageId
                };
                
                const testDiagnostic = {
                    ...mockDiagnostic,
                    range: new vscode.Range(testCase.lineNumber, 0, testCase.lineNumber, 10)
                };

                (vscode.languages.getDiagnostics as jest.Mock).mockReturnValue([testDiagnostic]);

                const mockSelectionChangeEvent = {
                    textEditor: { document: testDocument },
                    selections: [{ active: new vscode.Position(testCase.lineNumber, 0) }]
                } as any;

                // Trigger cursor position change
                (confusionDetector as any).onCursorPositionChanged(mockSelectionChangeEvent);
                
                // Fast-forward past threshold
                jest.advanceTimersByTime(testCase.dwellTimeMs);

                // Property: Help should only be offered for Python files
                const expectedCalls = testCase.languageId === 'python' ? 1 : 0;
                expect(helpOfferedCallback).toHaveBeenCalledTimes(expectedCalls);
            }
        ), { numRuns: 100 });
    });
});