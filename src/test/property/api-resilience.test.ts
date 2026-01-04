/**
 * Property-based tests for API error resilience
 * Feature: code-coach-vscode, Property 19: Error Resilience
 */

import * as fc from 'fast-check';
import axios from 'axios';
import { CodeCoachApiClient } from '../../api/CodeCoachApiClient';
import {
    ExplainRequest,
    ReviewRequest,
    ErrorRequest,
    CodeCoachConfig
} from '../../types';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Use global vscode mock
const vscode = (global as any).vscode;

describe('API Error Resilience Properties', () => {
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
                },
                response: {
                    use: jest.fn()
                }
            }
        };
        
        mockedAxios.create.mockReturnValue(mockAxiosInstance);
        mockedAxios.isAxiosError.mockImplementation((error: any) => {
            return error && error.isAxiosError === true;
        });

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

    // Feature: code-coach-vscode, Property 19: Error Resilience
    test('Property 19: API failures should be handled gracefully with appropriate fallback behavior', () => {
        fc.assert(fc.asyncProperty(
            // Generate various error scenarios
            fc.record({
                errorType: fc.constantFrom('timeout', 'network', 'server_error', 'auth_error', 'rate_limit', 'malformed_response'),
                operation: fc.constantFrom('explainSelection', 'reviewSelection', 'explainError'),
                retryAttempts: fc.integer({ min: 0, max: 5 })
            }),
            async (errorScenario) => {
                // Create appropriate error based on scenario
                let mockError: any;
                
                switch (errorScenario.errorType) {
                    case 'timeout':
                        mockError = {
                            isAxiosError: true,
                            code: 'ECONNABORTED',
                            message: 'timeout of 30000ms exceeded',
                            config: { url: '/api/v1/explain', method: 'post' }
                        };
                        break;
                    case 'network':
                        mockError = {
                            isAxiosError: true,
                            code: 'ENOTFOUND',
                            message: 'getaddrinfo ENOTFOUND api.codecoach.dev',
                            config: { url: '/api/v1/explain', method: 'post' },
                            request: {}
                        };
                        break;
                    case 'server_error':
                        mockError = {
                            isAxiosError: true,
                            message: 'Request failed with status code 500',
                            config: { url: '/api/v1/explain', method: 'post' },
                            response: {
                                status: 500,
                                statusText: 'Internal Server Error',
                                data: { message: 'Internal server error' }
                            }
                        };
                        break;
                    case 'auth_error':
                        mockError = {
                            isAxiosError: true,
                            message: 'Request failed with status code 401',
                            config: { url: '/api/v1/explain', method: 'post' },
                            response: {
                                status: 401,
                                statusText: 'Unauthorized',
                                data: { message: 'Invalid API key' }
                            }
                        };
                        break;
                    case 'rate_limit':
                        mockError = {
                            isAxiosError: true,
                            message: 'Request failed with status code 429',
                            config: { url: '/api/v1/explain', method: 'post' },
                            response: {
                                status: 429,
                                statusText: 'Too Many Requests',
                                data: { message: 'Rate limit exceeded' }
                            }
                        };
                        break;
                    case 'malformed_response':
                        mockError = {
                            isAxiosError: true,
                            message: 'Request failed with status code 200',
                            config: { url: '/api/v1/explain', method: 'post' },
                            response: {
                                status: 200,
                                statusText: 'OK',
                                data: { invalid: 'response format' } // Missing required fields
                            }
                        };
                        break;
                }

                // Setup mock to reject with the error
                mockAxiosInstance.post.mockRejectedValue(mockError);

                // Create test request based on operation
                let testRequest: any;
                let apiCall: Promise<any>;

                switch (errorScenario.operation) {
                    case 'explainSelection':
                        testRequest = {
                            code: 'print("hello")',
                            languageId: 'python',
                            filePath: 'test.py'
                        } as ExplainRequest;
                        apiCall = apiClient.explainSelection(testRequest);
                        break;
                    case 'reviewSelection':
                        testRequest = {
                            code: 'print("hello")',
                            languageId: 'python',
                            reviewType: 'quality' as const
                        } as ReviewRequest;
                        apiCall = apiClient.reviewSelection(testRequest);
                        break;
                    case 'explainError':
                        // Mock Range constructor
                        vscode.Range = jest.fn().mockImplementation((start, end) => ({
                            start,
                            end
                        }));
                        
                        testRequest = {
                            code: 'print("hello")',
                            errorMessage: 'SyntaxError: invalid syntax',
                            errorRange: new vscode.Range(
                                { line: 0, character: 0 },
                                { line: 0, character: 5 }
                            ),
                            languageId: 'python'
                        } as ErrorRequest;
                        apiCall = apiClient.explainError(testRequest);
                        break;
                    default:
                        throw new Error(`Unknown operation: ${errorScenario.operation}`);
                }

                // Property: API failures should result in meaningful error messages
                try {
                    await apiCall;
                    // Should not reach here for error scenarios
                    expect(true).toBe(false);
                } catch (error) {
                    // Property: Error should be an Error instance with meaningful message
                    expect(error).toBeInstanceOf(Error);
                    const errorInstance = error as Error;
                    expect(errorInstance.message).toBeDefined();
                    expect(errorInstance.message.length).toBeGreaterThan(0);

                    // Property: Error messages should be user-friendly and actionable
                    const errorMessage = errorInstance.message.toLowerCase();
                    
                    switch (errorScenario.errorType) {
                        case 'timeout':
                            expect(errorMessage).toContain('timeout');
                            expect(errorMessage).toContain('try again');
                            break;
                        case 'network':
                            expect(errorMessage).toContain('network');
                            expect(errorMessage).toContain('connection');
                            break;
                        case 'server_error':
                            expect(errorMessage).toContain('server');
                            expect(errorMessage).toContain('try again');
                            break;
                        case 'auth_error':
                            expect(errorMessage).toContain('authentication');
                            expect(errorMessage).toContain('api key');
                            break;
                        case 'rate_limit':
                            expect(errorMessage).toContain('rate limit');
                            expect(errorMessage).toContain('wait');
                            break;
                        case 'malformed_response':
                            expect(errorMessage.includes('invalid') || errorMessage.includes('format')).toBe(true);
                            break;
                    }

                    // Property: Error messages should not contain sensitive information
                    expect(errorMessage).not.toContain('bearer');
                    expect(errorMessage).not.toContain('authorization');
                    expect(errorMessage).not.toContain('test-api-key');
                }

                // Property: Retryable errors should trigger multiple attempts
                const isRetryable = ['timeout', 'network', 'server_error', 'rate_limit'].includes(errorScenario.errorType);
                
                if (isRetryable) {
                    // Should have made multiple attempts (original + retries)
                    expect(mockAxiosInstance.post.mock.calls.length).toBeGreaterThan(1);
                    expect(mockAxiosInstance.post.mock.calls.length).toBeLessThanOrEqual(4); // Max 3 retries + 1 original
                } else {
                    // Non-retryable errors should only make one attempt
                    expect(mockAxiosInstance.post.mock.calls.length).toBe(1);
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 19: Retry logic should use exponential backoff for transient failures', () => {
        fc.assert(fc.asyncProperty(
            // Generate retryable error scenarios
            fc.record({
                errorCode: fc.constantFrom('ECONNABORTED', 'ENOTFOUND', 'ECONNRESET'),
                maxRetries: fc.integer({ min: 1, max: 3 })
            }),
            async (retryScenario) => {
                // Track timing of retry attempts
                const attemptTimes: number[] = [];
                const originalPost = mockAxiosInstance.post;

                mockAxiosInstance.post.mockImplementation(async () => {
                    attemptTimes.push(Date.now());
                    
                    const error = {
                        isAxiosError: true,
                        code: retryScenario.errorCode,
                        message: `Network error: ${retryScenario.errorCode}`,
                        config: { url: '/api/v1/explain', method: 'post' },
                        request: {}
                    };
                    
                    throw error;
                });

                const testRequest: ExplainRequest = {
                    code: 'print("test")',
                    languageId: 'python'
                };

                // Execute API call and expect it to fail
                try {
                    await apiClient.explainSelection(testRequest);
                    expect(true).toBe(false); // Should not succeed
                } catch (error) {
                    // Expected to fail
                }

                // Property: Should have made multiple attempts
                expect(attemptTimes.length).toBeGreaterThan(1);
                expect(attemptTimes.length).toBeLessThanOrEqual(4); // Max 3 retries + 1 original

                // Property: Delays between attempts should increase (exponential backoff)
                if (attemptTimes.length > 1) {
                    for (let i = 1; i < attemptTimes.length; i++) {
                        const currentTime = attemptTimes[i];
                        const previousTime = attemptTimes[i - 1];
                        
                        if (currentTime !== undefined && previousTime !== undefined) {
                            const delay = currentTime - previousTime;
                            
                            // Should have some delay between attempts (at least 500ms due to exponential backoff)
                            expect(delay).toBeGreaterThanOrEqual(500);
                            
                            // Delay should not be excessive (max 10 seconds)
                            expect(delay).toBeLessThanOrEqual(11000);
                        }
                    }
                }

                // Restore original mock
                mockAxiosInstance.post = originalPost;
            }
        ), { numRuns: 50 }); // Reduced runs due to timing sensitivity
    });

    test('Property 19: Response validation should provide detailed error messages for malformed data', () => {
        fc.assert(fc.asyncProperty(
            // Generate various malformed response scenarios
            fc.record({
                responseType: fc.constantFrom('explain', 'review', 'error'),
                malformationType: fc.constantFrom('missing_type', 'wrong_type', 'missing_required_field', 'invalid_field_type', 'empty_object')
            }),
            async (malformedScenario) => {
                // Create malformed response based on scenario
                let malformedResponse: any;

                switch (malformedScenario.malformationType) {
                    case 'missing_type':
                        malformedResponse = {
                            summary: 'Test summary',
                            lineByLine: []
                        };
                        break;
                    case 'wrong_type':
                        malformedResponse = {
                            type: 'invalid_type',
                            summary: 'Test summary',
                            lineByLine: []
                        };
                        break;
                    case 'missing_required_field':
                        malformedResponse = {
                            type: malformedScenario.responseType
                            // Missing required fields
                        };
                        break;
                    case 'invalid_field_type':
                        malformedResponse = {
                            type: malformedScenario.responseType,
                            summary: 123, // Should be string
                            lineByLine: 'invalid' // Should be array
                        };
                        break;
                    case 'empty_object':
                        malformedResponse = {};
                        break;
                }

                // Setup mock to return malformed response
                mockAxiosInstance.post.mockResolvedValue({
                    data: malformedResponse
                });

                // Create appropriate test request
                let testRequest: any;
                let apiCall: Promise<any> | undefined;

                switch (malformedScenario.responseType) {
                    case 'explain':
                        testRequest = {
                            code: 'print("test")',
                            languageId: 'python'
                        } as ExplainRequest;
                        apiCall = apiClient.explainSelection(testRequest);
                        break;
                    case 'review':
                        testRequest = {
                            code: 'print("test")',
                            languageId: 'python',
                            reviewType: 'quality' as const
                        } as ReviewRequest;
                        apiCall = apiClient.reviewSelection(testRequest);
                        break;
                    case 'error':
                        vscode.Range = jest.fn().mockImplementation((start, end) => ({
                            start,
                            end
                        }));
                        
                        testRequest = {
                            code: 'print("test")',
                            errorMessage: 'Test error',
                            errorRange: new vscode.Range(
                                { line: 0, character: 0 },
                                { line: 0, character: 5 }
                            ),
                            languageId: 'python'
                        } as ErrorRequest;
                        apiCall = apiClient.explainError(testRequest);
                        break;
                }

                // Property: Malformed responses should result in validation errors
                if (apiCall) {
                    try {
                        await apiCall;
                        expect(true).toBe(false); // Should not succeed
                    } catch (error) {
                        // Property: Error should be descriptive and mention validation
                        expect(error).toBeInstanceOf(Error);
                        const errorInstance = error as Error;
                        expect(errorInstance.message).toBeDefined();
                        expect(errorInstance.message.length).toBeGreaterThan(0);
                        
                        const errorMessage = errorInstance.message.toLowerCase();
                        expect(errorMessage.includes('invalid') || errorMessage.includes('format') || errorMessage.includes('missing')).toBe(true);

                        // Property: Error should provide context about what's wrong
                        switch (malformedScenario.malformationType) {
                            case 'missing_type':
                            case 'wrong_type':
                                expect(errorMessage).toContain('type');
                                break;
                            case 'missing_required_field':
                                expect(errorMessage.includes('missing') || errorMessage.includes('required')).toBe(true);
                                break;
                            case 'invalid_field_type':
                                expect(errorMessage.includes('invalid') || errorMessage.includes('format')).toBe(true);
                                break;
                            case 'empty_object':
                                expect(errorMessage.includes('invalid') || errorMessage.includes('expected')).toBe(true);
                                break;
                        }
                    }
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 19: Telemetry failures should not affect main functionality', () => {
        fc.assert(fc.asyncProperty(
            // Generate telemetry failure scenarios
            fc.record({
                telemetryEnabled: fc.boolean(),
                telemetryError: fc.constantFrom('network_error', 'server_error', 'timeout'),
                mainOperationSuccess: fc.boolean()
            }),
            async (telemetryScenario) => {
                // Create API client with telemetry setting
                const config: CodeCoachConfig = {
                    apiBaseUrl: 'https://api.codecoach.dev',
                    apiKey: 'test-api-key-12345',
                    telemetryEnabled: telemetryScenario.telemetryEnabled,
                    userLevel: 'beginner',
                    proactiveSuggestions: true,
                    demoMode: false
                };

                const testClient = new CodeCoachApiClient(config);

                // Setup telemetry endpoint to fail
                let telemetryError: any;
                switch (telemetryScenario.telemetryError) {
                    case 'network_error':
                        telemetryError = {
                            isAxiosError: true,
                            code: 'ENOTFOUND',
                            message: 'Network error',
                            request: {}
                        };
                        break;
                    case 'server_error':
                        telemetryError = {
                            isAxiosError: true,
                            message: 'Server error',
                            response: { status: 500, data: { message: 'Internal error' } }
                        };
                        break;
                    case 'timeout':
                        telemetryError = {
                            isAxiosError: true,
                            code: 'ECONNABORTED',
                            message: 'Timeout'
                        };
                        break;
                }

                mockAxiosInstance.post.mockImplementation((endpoint: string) => {
                    if (endpoint === '/api/v1/telemetry') {
                        return Promise.reject(telemetryError);
                    }
                    return Promise.resolve({ data: {} });
                });

                // Create telemetry event
                const telemetryEvent = {
                    type: 'explainSelection' as const,
                    metadata: { test: 'data' },
                    timestamp: Date.now()
                };

                // Property: Telemetry failures should not throw errors
                try {
                    await testClient.logEvent(telemetryEvent);
                    // Should complete without throwing
                } catch (error) {
                    // Telemetry should never throw errors
                    expect(true).toBe(false);
                }

                // Property: Telemetry should only be attempted when enabled
                if (telemetryScenario.telemetryEnabled) {
                    const telemetryCalls = mockAxiosInstance.post.mock.calls.filter(
                        (call: any) => call[0] === '/api/v1/telemetry'
                    );
                    expect(telemetryCalls.length).toBeGreaterThan(0);
                } else {
                    const telemetryCalls = mockAxiosInstance.post.mock.calls.filter(
                        (call: any) => call[0] === '/api/v1/telemetry'
                    );
                    expect(telemetryCalls.length).toBe(0);
                }
            }
        ), { numRuns: 100 });
    });
});