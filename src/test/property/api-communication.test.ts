/**
 * Property-based tests for API communication protocol
 * Feature: code-coach-vscode, Property 18: API Communication Protocol
 */

import * as fc from 'fast-check';
import axios from 'axios';
import { CodeCoachApiClient } from '../../api/CodeCoachApiClient';
import {
    ExplainRequest,
    ReviewRequest,
    ErrorRequest,
    ExplanationResponse,
    ReviewResponse,
    ErrorResponse,
    CodeCoachConfig
} from '../../types';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Use global vscode mock
const vscode = (global as any).vscode;

// Mock VS Code API
const mockWorkspace = {
    getConfiguration: jest.fn(() => ({
        get: jest.fn((key: string, defaultValue: any = undefined) => {
            switch (key) {
                case 'apiBaseUrl': return 'https://api.codecoach.dev';
                case 'apiKey': return 'test-api-key-12345';
                case 'telemetryEnabled': return true;
                case 'userLevel': return 'beginner';
                case 'proactiveSuggestions': return true;
                default: return defaultValue;
            }
        })
    }))
};

// Override the global mock for this test
vscode.workspace = mockWorkspace;

describe('API Communication Protocol Properties', () => {
    let apiClient: CodeCoachApiClient;
    let mockAxiosInstance: any;

    beforeEach(() => {
        jest.clearAllMocks();
        
        // Setup axios mock
        mockAxiosInstance = {
            post: jest.fn(),
            interceptors: {
                request: {
                    use: jest.fn()
                }
            }
        };
        
        mockedAxios.create.mockReturnValue(mockAxiosInstance);

        // Create API client with test configuration
        const config: CodeCoachConfig = {
            apiBaseUrl: 'https://api.codecoach.dev',
            apiKey: 'test-api-key-12345',
            telemetryEnabled: true,
            userLevel: 'beginner',
            proactiveSuggestions: true,
            demoMode: false
        };

        apiClient = new CodeCoachApiClient(config);
    });

    // Feature: code-coach-vscode, Property 18: API Communication Protocol
    test('Property 18: API requests should use correct HTTP endpoints with well-structured payloads', () => {
        fc.assert(fc.asyncProperty(
            // Generate various API request scenarios
            fc.record({
                requestType: fc.constantFrom('explain', 'review', 'error'),
                code: fc.string({ minLength: 1, maxLength: 1000 }),
                languageId: fc.constantFrom('python', 'javascript', 'typescript'),
                filePath: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
                surroundingContext: fc.option(fc.string({ maxLength: 500 })),
                userLevel: fc.constantFrom('beginner' as const, 'intermediate' as const)
            }),
            async (scenario) => {
                // Setup mock response based on request type
                let mockResponse: any;
                let expectedEndpoint: string = '';
                let requestPayload: any;

                switch (scenario.requestType) {
                    case 'explain':
                        mockResponse = {
                            data: {
                                type: 'explain',
                                summary: 'Test explanation',
                                lineByLine: [
                                    { lineOffset: 0, code: scenario.code, explanation: 'Test line explanation' }
                                ],
                                pitfalls: ['Test pitfall'],
                                tryItYourself: 'Test exercise'
                            } as ExplanationResponse
                        };
                        expectedEndpoint = '/api/v1/explain';
                        requestPayload = {
                            code: scenario.code,
                            languageId: scenario.languageId,
                            filePath: scenario.filePath,
                            surroundingContext: scenario.surroundingContext,
                            userLevel: scenario.userLevel
                        } as ExplainRequest;
                        break;

                    case 'review':
                        mockResponse = {
                            data: {
                                type: 'review',
                                summary: 'Test review',
                                goodPoints: ['Good point 1'],
                                improvementPoints: ['Improvement 1'],
                                improvements: [
                                    { description: 'Test improvement', reasoning: 'Test reasoning' }
                                ]
                            } as ReviewResponse
                        };
                        expectedEndpoint = '/api/v1/review';
                        requestPayload = {
                            code: scenario.code,
                            languageId: scenario.languageId,
                            filePath: scenario.filePath,
                            reviewType: 'quality',
                            userLevel: scenario.userLevel
                        } as ReviewRequest;
                        break;

                    case 'error':
                        mockResponse = {
                            data: {
                                type: 'error',
                                errorMeaning: 'Test error meaning',
                                whyHere: 'Test why here',
                                howToFix: 'Test how to fix'
                            } as ErrorResponse
                        };
                        expectedEndpoint = '/api/v1/explain-error';
                        requestPayload = {
                            code: scenario.code,
                            errorMessage: 'Test error message',
                            errorRange: {
                                start: { line: 0, character: 0 },
                                end: { line: 0, character: 10 }
                            },
                            languageId: scenario.languageId,
                            userLevel: scenario.userLevel
                        } as ErrorRequest;
                        break;
                }

                // Setup axios mock to return the response
                mockAxiosInstance.post.mockResolvedValue(mockResponse);

                // Make API call based on request type
                let result: any;
                try {
                    switch (scenario.requestType) {
                        case 'explain':
                            result = await apiClient.explainSelection(requestPayload as ExplainRequest);
                            break;
                        case 'review':
                            result = await apiClient.reviewSelection(requestPayload as ReviewRequest);
                            break;
                        case 'error':
                            result = await apiClient.explainError(requestPayload as ErrorRequest);
                            break;
                    }
                } catch (error) {
                    // For this property test, we expect successful calls
                    throw error;
                }

                // Property: Correct endpoint should be called
                expect(mockAxiosInstance.post).toHaveBeenCalledWith(
                    expectedEndpoint,
                    expect.objectContaining({
                        ...requestPayload,
                        userLevel: scenario.userLevel // Should be included in all requests
                    })
                );

                // Property: Request payload should contain all necessary context
                const actualPayload = mockAxiosInstance.post.mock.calls[0][1];
                expect(actualPayload).toHaveProperty('code', scenario.code);
                expect(actualPayload).toHaveProperty('languageId', scenario.languageId);
                expect(actualPayload).toHaveProperty('userLevel', scenario.userLevel);

                // Property: Optional fields should be included when provided
                if (scenario.filePath !== null) {
                    expect(actualPayload).toHaveProperty('filePath', scenario.filePath);
                }
                if (scenario.surroundingContext !== null && scenario.requestType === 'explain') {
                    expect(actualPayload).toHaveProperty('surroundingContext', scenario.surroundingContext);
                }

                // Property: Response should match expected structure
                expect(result).toHaveProperty('type', scenario.requestType);
                expect(result).toEqual(mockResponse.data);
            }
        ), { numRuns: 100 });
    });

    test('Property 18: API client should include proper authentication and headers in all requests', () => {
        fc.assert(fc.property(
            // Generate various configuration scenarios
            fc.record({
                apiBaseUrl: fc.webUrl(),
                apiKey: fc.string({ minLength: 10, maxLength: 50 }),
                userLevel: fc.constantFrom('beginner' as const, 'intermediate' as const)
            }),
            (configScenario) => {
                // Create API client with generated configuration
                const testConfig: CodeCoachConfig = {
                    apiBaseUrl: configScenario.apiBaseUrl,
                    apiKey: configScenario.apiKey,
                    telemetryEnabled: true,
                    userLevel: configScenario.userLevel,
                    proactiveSuggestions: true,
                    demoMode: false
                };

                const testClient = new CodeCoachApiClient(testConfig);

                // Property: Axios should be created with correct configuration
                expect(mockedAxios.create).toHaveBeenCalledWith(
                    expect.objectContaining({
                        baseURL: configScenario.apiBaseUrl,
                        timeout: 30000,
                        headers: expect.objectContaining({
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${configScenario.apiKey}`,
                            'User-Agent': 'CodeCoach-VSCode/0.1.0'
                        })
                    })
                );

                // Property: Request interceptor should be configured to add user level
                expect(mockAxiosInstance.interceptors.request.use).toHaveBeenCalled();
            }
        ), { numRuns: 100 });
    });

    test('Property 18: API requests should handle VS Code Range serialization correctly', () => {
        fc.assert(fc.asyncProperty(
            // Generate VS Code Range scenarios
            fc.record({
                startLine: fc.integer({ min: 0, max: 1000 }),
                startCharacter: fc.integer({ min: 0, max: 100 }),
                endLine: fc.integer({ min: 0, max: 1000 }),
                endCharacter: fc.integer({ min: 0, max: 100 }),
                code: fc.string({ minLength: 1, maxLength: 100 }),
                errorMessage: fc.string({ minLength: 1, maxLength: 200 })
            }),
            async (rangeScenario) => {
                // Create VS Code Range using the mock
                const mockRange = {
                    start: { line: rangeScenario.startLine, character: rangeScenario.startCharacter },
                    end: { line: rangeScenario.endLine, character: rangeScenario.endCharacter }
                };

                // Mock the Range constructor
                vscode.Range = jest.fn().mockImplementation((start, end) => ({
                    start,
                    end
                }));

                const vsCodeRange = new vscode.Range(
                    { line: rangeScenario.startLine, character: rangeScenario.startCharacter },
                    { line: rangeScenario.endLine, character: rangeScenario.endCharacter }
                );

                // Setup mock response
                const mockResponse = {
                    data: {
                        type: 'error',
                        errorMeaning: 'Test error meaning',
                        whyHere: 'Test why here',
                        howToFix: 'Test how to fix'
                    } as ErrorResponse
                };

                mockAxiosInstance.post.mockResolvedValue(mockResponse);

                // Create error request with VS Code Range
                const errorRequest: ErrorRequest = {
                    code: rangeScenario.code,
                    errorMessage: rangeScenario.errorMessage,
                    errorRange: vsCodeRange,
                    languageId: 'python',
                    userLevel: 'beginner'
                };

                // Make API call
                await apiClient.explainError(errorRequest);

                // Property: VS Code Range should be serialized to plain object
                const actualPayload = mockAxiosInstance.post.mock.calls[0][1];
                expect(actualPayload).toHaveProperty('errorRange');
                expect(actualPayload.errorRange).toEqual({
                    start: {
                        line: rangeScenario.startLine,
                        character: rangeScenario.startCharacter
                    },
                    end: {
                        line: rangeScenario.endLine,
                        character: rangeScenario.endCharacter
                    }
                });

                // Property: Serialized range should not contain VS Code specific methods
                expect(actualPayload.errorRange.contains).toBeUndefined();
                expect(actualPayload.errorRange.intersection).toBeUndefined();
                expect(actualPayload.errorRange.union).toBeUndefined();
            }
        ), { numRuns: 100 });
    });

    test('Property 18: Telemetry requests should respect user preferences and not affect main functionality', () => {
        fc.assert(fc.asyncProperty(
            // Generate telemetry scenarios
            fc.record({
                telemetryEnabled: fc.boolean(),
                eventType: fc.constantFrom('explainSelection' as const, 'reviewSelection' as const, 'explainError' as const, 'feedback' as const),
                metadata: fc.dictionary(fc.string(), fc.oneof(fc.string(), fc.integer(), fc.boolean()))
            }),
            async (telemetryScenario) => {
                // Create API client with telemetry setting
                const testConfig: CodeCoachConfig = {
                    apiBaseUrl: 'https://api.codecoach.dev',
                    apiKey: 'test-api-key-12345',
                    telemetryEnabled: telemetryScenario.telemetryEnabled,
                    userLevel: 'beginner',
                    proactiveSuggestions: true,
                    demoMode: false
                };

                const testClient = new CodeCoachApiClient(testConfig);

                // Create telemetry event
                const telemetryEvent = {
                    type: telemetryScenario.eventType,
                    metadata: telemetryScenario.metadata,
                    timestamp: Date.now()
                };

                // Setup mock for telemetry endpoint
                mockAxiosInstance.post.mockImplementation((endpoint: string) => {
                    if (endpoint === '/api/v1/telemetry') {
                        if (telemetryScenario.telemetryEnabled) {
                            return Promise.resolve({ data: { success: true } });
                        } else {
                            // Should not be called if telemetry is disabled
                            throw new Error('Telemetry should not be called when disabled');
                        }
                    }
                    return Promise.resolve({ data: {} });
                });

                // Make telemetry call
                await testClient.logEvent(telemetryEvent);

                // Property: Telemetry should only be sent when enabled
                if (telemetryScenario.telemetryEnabled) {
                    expect(mockAxiosInstance.post).toHaveBeenCalledWith('/api/v1/telemetry', telemetryEvent);
                } else {
                    // Should not call telemetry endpoint when disabled
                    const telemetryCalls = mockAxiosInstance.post.mock.calls.filter(
                        (call: any) => call[0] === '/api/v1/telemetry'
                    );
                    expect(telemetryCalls).toHaveLength(0);
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 18: API client configuration updates should properly recreate HTTP client when needed', () => {
        fc.assert(fc.property(
            // Generate configuration update scenarios
            fc.record({
                initialConfig: fc.record({
                    apiBaseUrl: fc.webUrl(),
                    apiKey: fc.string({ minLength: 10, maxLength: 30 })
                }),
                updatedConfig: fc.record({
                    apiBaseUrl: fc.webUrl(),
                    apiKey: fc.string({ minLength: 10, maxLength: 30 })
                }),
                userLevel: fc.constantFrom('beginner' as const, 'intermediate' as const)
            }),
            (updateScenario) => {
                // Create initial configuration
                const initialConfig: CodeCoachConfig = {
                    apiBaseUrl: updateScenario.initialConfig.apiBaseUrl,
                    apiKey: updateScenario.initialConfig.apiKey,
                    telemetryEnabled: true,
                    userLevel: updateScenario.userLevel,
                    proactiveSuggestions: true,
                    demoMode: false
                };

                // Create updated configuration
                const updatedConfig: CodeCoachConfig = {
                    apiBaseUrl: updateScenario.updatedConfig.apiBaseUrl,
                    apiKey: updateScenario.updatedConfig.apiKey,
                    telemetryEnabled: true,
                    userLevel: updateScenario.userLevel,
                    proactiveSuggestions: true,
                    demoMode: false
                };

                // Create API client with initial config
                const testClient = new CodeCoachApiClient(initialConfig);
                const initialCreateCalls = mockedAxios.create.mock.calls.length;

                // Update configuration
                testClient.updateConfig(updatedConfig);

                // Property: HTTP client should be recreated if URL or API key changed
                const needsNewClient = 
                    updatedConfig.apiBaseUrl !== initialConfig.apiBaseUrl ||
                    updatedConfig.apiKey !== initialConfig.apiKey;

                if (needsNewClient) {
                    expect(mockedAxios.create.mock.calls.length).toBe(initialCreateCalls + 1);
                    
                    // Verify new client was created with updated configuration
                    const lastCreateCall = mockedAxios.create.mock.calls[mockedAxios.create.mock.calls.length - 1]?.[0];
                    if (lastCreateCall) {
                        expect(lastCreateCall.baseURL).toBe(updatedConfig.apiBaseUrl);
                        expect((lastCreateCall.headers as any)?.Authorization).toBe(`Bearer ${updatedConfig.apiKey}`);
                    }
                } else {
                    // Should not create new client if URL and key are the same
                    expect(mockedAxios.create.mock.calls.length).toBe(initialCreateCalls);
                }
            }
        ), { numRuns: 100 });
    });
});