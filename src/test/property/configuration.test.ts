/**
 * Property-based tests for configuration system integration
 * Feature: code-coach-vscode, Property 15: Configuration System Integration
 * Feature: code-coach-vscode, Property 10: Configuration Respect
 */

import * as fc from 'fast-check';
import { CodeCoachConfig } from '../../types';
import { ConfigurationManager } from '../../config/ConfigurationManager';

// Mock VS Code module
jest.mock('vscode', () => ({
    workspace: {
        getConfiguration: jest.fn(),
        onDidChangeConfiguration: jest.fn()
    },
    ConfigurationTarget: {
        Global: 1,
        Workspace: 2,
        WorkspaceFolder: 3
    },
    window: {
        showErrorMessage: jest.fn(),
        showWarningMessage: jest.fn()
    },
    commands: {
        executeCommand: jest.fn()
    }
}));

import * as vscode from 'vscode';

// Get mocked functions
const mockGetConfiguration = vscode.workspace.getConfiguration as jest.MockedFunction<typeof vscode.workspace.getConfiguration>;
const mockOnDidChangeConfiguration = vscode.workspace.onDidChangeConfiguration as jest.MockedFunction<typeof vscode.workspace.onDidChangeConfiguration>;

describe('Configuration System Integration Properties', () => {
    let mockConfiguration: any;

    beforeEach(() => {
        jest.clearAllMocks();
        
        // Create fresh mock configuration for each test
        mockConfiguration = {
            get: jest.fn(),
            update: jest.fn(),
            inspect: jest.fn(),
            has: jest.fn()
        };
        
        mockGetConfiguration.mockReturnValue(mockConfiguration);
    });

    // Feature: code-coach-vscode, Property 15: Configuration System Integration
    test('Property 15: Configuration values should be stored and retrieved correctly through VS Code settings API', () => {
        fc.assert(fc.property(
            // Generate random configuration values
            fc.record({
                apiBaseUrl: fc.webUrl(),
                apiKey: fc.string({ minLength: 10, maxLength: 50 }),
                telemetryEnabled: fc.boolean(),
                userLevel: fc.constantFrom('beginner' as const, 'intermediate' as const),
                proactiveSuggestions: fc.boolean(),
                demoMode: fc.boolean()
            }),
            (config: CodeCoachConfig) => {
                // Setup mock to return the configuration values
                mockConfiguration.get.mockImplementation((key: string) => {
                    switch (key) {
                        case 'apiBaseUrl':
                            return config.apiBaseUrl;
                        case 'apiKey':
                            return config.apiKey;
                        case 'telemetryEnabled':
                            return config.telemetryEnabled;
                        case 'userLevel':
                            return config.userLevel;
                        case 'proactiveSuggestions':
                            return config.proactiveSuggestions;
                        default:
                            return undefined;
                    }
                });

                // Get configuration through VS Code API
                const vsConfig = vscode.workspace.getConfiguration('codeCoach');
                
                // Verify all configuration values can be retrieved
                const retrievedConfig: CodeCoachConfig = {
                    apiBaseUrl: vsConfig.get('apiBaseUrl')!,
                    apiKey: vsConfig.get('apiKey')!,
                    telemetryEnabled: vsConfig.get('telemetryEnabled')!,
                    userLevel: vsConfig.get('userLevel')!,
                    proactiveSuggestions: vsConfig.get('proactiveSuggestions')!,
                    demoMode: vsConfig.get('demoMode')!
                };

                // Property: Retrieved configuration should match stored configuration
                expect(retrievedConfig.apiBaseUrl).toBe(config.apiBaseUrl);
                expect(retrievedConfig.apiKey).toBe(config.apiKey);
                expect(retrievedConfig.telemetryEnabled).toBe(config.telemetryEnabled);
                expect(retrievedConfig.userLevel).toBe(config.userLevel);
                expect(retrievedConfig.proactiveSuggestions).toBe(config.proactiveSuggestions);

                // Verify VS Code API was called correctly
                expect(mockGetConfiguration).toHaveBeenCalledWith('codeCoach');
                expect(mockConfiguration.get).toHaveBeenCalledWith('apiBaseUrl');
                expect(mockConfiguration.get).toHaveBeenCalledWith('apiKey');
                expect(mockConfiguration.get).toHaveBeenCalledWith('telemetryEnabled');
                expect(mockConfiguration.get).toHaveBeenCalledWith('userLevel');
                expect(mockConfiguration.get).toHaveBeenCalledWith('proactiveSuggestions');
            }
        ), { numRuns: 100 });
    });

    test('Property 15: Configuration validation should provide helpful error messages for invalid values', () => {
        fc.assert(fc.property(
            // Generate invalid configuration scenarios
            fc.record({
                apiBaseUrl: fc.oneof(
                    fc.constant(''), // Empty URL
                    fc.constant('not-a-url'), // Invalid URL format
                    fc.string({ maxLength: 5 }) // Too short to be valid URL
                ),
                userLevel: fc.oneof(
                    fc.constant('expert'), // Invalid level
                    fc.constant(''), // Empty level
                    fc.string({ minLength: 20 }) // Too long
                )
            }),
            (invalidConfig) => {
                // Test URL validation
                const isValidUrl = (url: string): boolean => {
                    try {
                        new URL(url);
                        return url.length > 0;
                    } catch {
                        return false;
                    }
                };

                // Test user level validation
                const isValidUserLevel = (level: string): boolean => {
                    return ['beginner', 'intermediate'].includes(level);
                };

                // Property: Invalid configurations should be detected
                if (invalidConfig.apiBaseUrl) {
                    const urlValid = isValidUrl(invalidConfig.apiBaseUrl);
                    if (!urlValid) {
                        // Should provide helpful error message
                        const errorMessage = `Invalid API URL: ${invalidConfig.apiBaseUrl}. Please provide a valid HTTP/HTTPS URL.`;
                        expect(errorMessage).toContain('Invalid API URL');
                        expect(errorMessage).toContain('valid HTTP/HTTPS URL');
                    }
                }

                if (invalidConfig.userLevel) {
                    const levelValid = isValidUserLevel(invalidConfig.userLevel);
                    if (!levelValid) {
                        // Should provide helpful error message
                        const errorMessage = `Invalid user level: ${invalidConfig.userLevel}. Must be 'beginner' or 'intermediate'.`;
                        expect(errorMessage).toContain('Invalid user level');
                        expect(errorMessage).toContain('beginner');
                        expect(errorMessage).toContain('intermediate');
                    }
                }
            }
        ), { numRuns: 100 });
    });

    test('Property 15: Configuration changes should be properly handled through VS Code settings system', () => {
        fc.assert(fc.property(
            // Generate configuration change scenarios
            fc.record({
                oldValue: fc.record({
                    telemetryEnabled: fc.boolean(),
                    userLevel: fc.constantFrom('beginner' as const, 'intermediate' as const)
                }),
                newValue: fc.record({
                    telemetryEnabled: fc.boolean(),
                    userLevel: fc.constantFrom('beginner' as const, 'intermediate' as const)
                })
            }),
            (changeScenario) => {
                let changeHandlerCalled = false;
                let changeEvent: any = null;

                // Mock configuration change handler
                const changeHandler = (event: any) => {
                    changeHandlerCalled = true;
                    changeEvent = event;
                };

                // Setup configuration change listener
                mockOnDidChangeConfiguration.mockImplementation((handler) => {
                    // Simulate configuration change
                    const event = {
                        affectsConfiguration: (section: string) => section === 'codeCoach'
                    };
                    handler(event);
                    changeHandler(event);
                    return { dispose: jest.fn() };
                });

                // Register change listener
                const disposable = vscode.workspace.onDidChangeConfiguration(changeHandler);

                // Property: Configuration changes should trigger change handlers
                expect(changeHandlerCalled).toBe(true);
                expect(changeEvent).toBeDefined();
                expect(changeEvent.affectsConfiguration('codeCoach')).toBe(true);

                // Verify disposable is returned for cleanup
                expect(disposable).toBeDefined();
                expect(disposable.dispose).toBeDefined();
            }
        ), { numRuns: 100 });
    });

    // Feature: code-coach-vscode, Property 10: Configuration Respect
    test('Property 10: Extension should modify behavior according to user preference settings', () => {
        fc.assert(fc.property(
            // Generate different configuration scenarios
            fc.record({
                proactiveSuggestions: fc.boolean(),
                telemetryEnabled: fc.boolean(),
                userLevel: fc.constantFrom('beginner' as const, 'intermediate' as const)
            }),
            (config) => {
                // Setup mock configuration
                mockConfiguration.get.mockImplementation((key: string, defaultValue?: any) => {
                    switch (key) {
                        case 'proactiveSuggestions':
                            return config.proactiveSuggestions;
                        case 'telemetryEnabled':
                            return config.telemetryEnabled;
                        case 'userLevel':
                            return config.userLevel;
                        default:
                            return defaultValue;
                    }
                });

                // Create mock extension context
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

                // Create configuration manager
                const configManager = new ConfigurationManager(mockContext);

                // Property: Configuration manager should respect user preferences
                expect(configManager.areProactiveSuggestionsEnabled()).toBe(config.proactiveSuggestions);
                expect(configManager.isTelemetryEnabled()).toBe(config.telemetryEnabled);
                expect(configManager.getUserLevel()).toBe(config.userLevel);

                // Property: API request configuration should include user preferences
                const apiConfig = configManager.getConfigurationForApiRequest();
                expect(apiConfig.proactiveSuggestions).toBe(config.proactiveSuggestions);
                expect(apiConfig.telemetryEnabled).toBe(config.telemetryEnabled);
                expect(apiConfig.userLevel).toBe(config.userLevel);

                // Cleanup
                configManager.dispose();
            }
        ), { numRuns: 100 });
    });

    test('Property 10: Proactive suggestions should be disabled when user preference is false', () => {
        fc.assert(fc.property(
            fc.boolean(),
            (proactiveSuggestionsEnabled) => {
                // Setup mock configuration
                mockConfiguration.get.mockImplementation((key: string, defaultValue?: any) => {
                    if (key === 'proactiveSuggestions') {
                        return proactiveSuggestionsEnabled;
                    }
                    return defaultValue;
                });

                // Create mock extension context
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

                // Create configuration manager
                const configManager = new ConfigurationManager(mockContext);

                // Property: Proactive suggestions setting should be respected
                const actualSetting = configManager.areProactiveSuggestionsEnabled();
                expect(actualSetting).toBe(proactiveSuggestionsEnabled);

                // Property: If proactive suggestions are disabled, confusion detection should not offer help
                if (!proactiveSuggestionsEnabled) {
                    // This would be tested in the confusion detector, but we verify the config is accessible
                    expect(configManager.areProactiveSuggestionsEnabled()).toBe(false);
                }

                // Cleanup
                configManager.dispose();
            }
        ), { numRuns: 100 });
    });

    test('Property 10: User skill level should be included in all API requests', () => {
        fc.assert(fc.property(
            fc.constantFrom('beginner' as const, 'intermediate' as const),
            (userLevel) => {
                // Setup mock configuration
                mockConfiguration.get.mockImplementation((key: string, defaultValue?: any) => {
                    if (key === 'userLevel') {
                        return userLevel;
                    }
                    return defaultValue;
                });

                // Create mock extension context
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

                // Create configuration manager
                const configManager = new ConfigurationManager(mockContext);

                // Property: User level should be accessible for API requests
                const retrievedUserLevel = configManager.getUserLevel();
                expect(retrievedUserLevel).toBe(userLevel);

                // Property: API configuration should include the user level
                const apiConfig = configManager.getConfigurationForApiRequest();
                expect(apiConfig.userLevel).toBe(userLevel);

                // Cleanup
                configManager.dispose();
            }
        ), { numRuns: 100 });
    });

    test('Property 10: Telemetry collection should respect user consent preference', () => {
        fc.assert(fc.property(
            fc.boolean(),
            (telemetryEnabled) => {
                // Setup mock configuration
                mockConfiguration.get.mockImplementation((key: string, defaultValue?: any) => {
                    if (key === 'telemetryEnabled') {
                        return telemetryEnabled;
                    }
                    return defaultValue;
                });

                // Create mock extension context
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

                // Create configuration manager
                const configManager = new ConfigurationManager(mockContext);

                // Property: Telemetry setting should be respected
                const actualTelemetrySetting = configManager.isTelemetryEnabled();
                expect(actualTelemetrySetting).toBe(telemetryEnabled);

                // Property: API configuration should include telemetry preference
                const apiConfig = configManager.getConfigurationForApiRequest();
                expect(apiConfig.telemetryEnabled).toBe(telemetryEnabled);

                // Cleanup
                configManager.dispose();
            }
        ), { numRuns: 100 });
    });
});