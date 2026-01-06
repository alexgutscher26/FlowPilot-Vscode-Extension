/**
 * Telemetry system for FlowPilot extension
 * Provides privacy-compliant anonymous event tracking with user consent
 */

import * as vscode from 'vscode';
import { ConfigurationManager } from '../config/ConfigurationManager';

export interface TelemetryEventData {
    eventType: 'explainSelection' | 'reviewSelection' | 'explainError' | 'feedback' | 'confusion' | 'configuration' | 'metrics' | 'session';
    metadata: Record<string, any>;
    sessionId: string;
    extensionVersion: string;
    vscodeVersion: string;
    timestamp: number;
}

export interface PrivacyCompliantMetadata {
    // Language and file type information (safe to collect)
    languageId?: string;
    fileExtension?: string;
    constructType?: 'function' | 'class' | 'loop' | 'conditional' | 'other';
    schemaVersion?: string;
    
    // Code structure information (no actual code content)
    codeLength?: number;
    lineCount?: number;
    selectionLength?: number;
    complexityNestingEstimate?: number;
    
    // Error information (no sensitive details)
    errorType?: string;
    diagnosticSeverity?: string;
    requestedHelp?: boolean;
    
    // User interaction patterns (anonymous)
    responseTime?: number;
    userLevel?: string;
    feedbackRating?: boolean;
    feedbackCommentLength?: number;
    
    // Performance metrics
    apiResponseTime?: number;
    success?: boolean;
    
    // Feature usage
    featureUsed?: string;
    triggerMethod?: 'command' | 'contextMenu' | 'codeAction' | 'proactive';
    
    // Confusion detection fields
    triggerType?: string;
    dwellTime?: number;
    errorRepeatCount?: number;
    
    // Review fields
    reviewType?: string;
    
    // Configuration fields
    settingChanged?: string;
    newValue?: string;
    proactiveEnabled?: boolean;

    // Metrics
    callType?: 'explain' | 'review' | 'error';
    timeout?: boolean;
    sessionDurationBucket?: '≤1m' | '≤5m' | '≤15m' | '≤60m' | '>60m';
    explanationsPerSession?: number;
    reviewsPerSession?: number;
    errorsPerSession?: number;
    timeoutsPerSession?: number;
    failuresPerSession?: number;
}

export class Telemetry {
    private sessionId: string;
    private extensionVersion: string;
    private vscodeVersion: string;
    private eventQueue: TelemetryEventData[] = [];
    private isProcessingQueue = false;
    private disposables: vscode.Disposable[] = [];
    private schemaVersion: string = 'v1';
    private sessionStart: number;
    private sessionCounters = {
        explain: 0,
        review: 0,
        error: 0,
        failures: 0,
        timeouts: 0
    };

    constructor(
        private context: vscode.ExtensionContext,
        private configManager: ConfigurationManager
    ) {
        this.sessionId = this.generateSessionId();
        this.extensionVersion = this.getExtensionVersion();
        this.vscodeVersion = vscode.version;
        this.sessionStart = Date.now();
        
        this.setupEventQueueProcessor();
    }

    /**
     * Track an explanation request event
     */
    public trackExplanationRequest(metadata: {
        languageId: string;
        fileExtension?: string;
        codeLength: number;
        lineCount: number;
        selectionLength: number;
        triggerMethod: 'command' | 'contextMenu' | 'codeAction';
        userLevel: string;
        constructType?: PrivacyCompliantMetadata['constructType'];
        responseTime?: number;
        success?: boolean;
        apiResponseTime?: number;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }

        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            languageId: metadata.languageId,
            fileExtension: metadata.fileExtension,
            codeLength: metadata.codeLength,
            lineCount: metadata.lineCount,
            selectionLength: metadata.selectionLength,
            triggerMethod: metadata.triggerMethod,
            userLevel: metadata.userLevel,
            constructType: metadata.constructType,
            responseTime: metadata.responseTime,
            success: metadata.success,
            apiResponseTime: metadata.apiResponseTime,
            featureUsed: 'explain'
        });

        this.queueEvent('explainSelection', sanitizedMetadata);
        this.sessionCounters.explain += 1;
        if (sanitizedMetadata.success === false) {
            this.sessionCounters.failures += 1;
        }
    }

    /**
     * Track a code review request event
     */
    public trackReviewRequest(metadata: {
        languageId: string;
        fileExtension?: string;
        codeLength: number;
        lineCount: number;
        selectionLength: number;
        reviewType: string;
        triggerMethod: 'command' | 'contextMenu';
        userLevel: string;
        complexityNestingEstimate?: number;
        responseTime?: number;
        success?: boolean;
        apiResponseTime?: number;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }

        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            languageId: metadata.languageId,
            fileExtension: metadata.fileExtension,
            codeLength: metadata.codeLength,
            lineCount: metadata.lineCount,
            selectionLength: metadata.selectionLength,
            triggerMethod: metadata.triggerMethod,
            userLevel: metadata.userLevel,
            complexityNestingEstimate: metadata.complexityNestingEstimate,
            responseTime: metadata.responseTime,
            success: metadata.success,
            apiResponseTime: metadata.apiResponseTime,
            featureUsed: 'review',
            reviewType: metadata.reviewType
        });

        this.queueEvent('reviewSelection', sanitizedMetadata);
        this.sessionCounters.review += 1;
        if (sanitizedMetadata.success === false) {
            this.sessionCounters.failures += 1;
        }
    }

    /**
     * Track an error explanation request event
     */
    public trackErrorExplanation(metadata: {
        languageId: string;
        fileExtension?: string;
        errorType: string;
        diagnosticSeverity: string;
        codeLength: number;
        triggerMethod: 'command' | 'contextMenu' | 'codeAction' | 'proactive';
        requestedHelp?: boolean;
        userLevel: string;
        responseTime?: number;
        success?: boolean;
        apiResponseTime?: number;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }

        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            languageId: metadata.languageId,
            fileExtension: metadata.fileExtension,
            errorType: metadata.errorType,
            diagnosticSeverity: metadata.diagnosticSeverity,
            codeLength: metadata.codeLength,
            triggerMethod: metadata.triggerMethod,
            requestedHelp: metadata.requestedHelp,
            userLevel: metadata.userLevel,
            responseTime: metadata.responseTime,
            success: metadata.success,
            apiResponseTime: metadata.apiResponseTime,
            featureUsed: 'errorExplanation'
        });

        this.queueEvent('explainError', sanitizedMetadata);
        this.sessionCounters.error += 1;
        if (sanitizedMetadata.success === false) {
            this.sessionCounters.failures += 1;
        }
    }

    /**
     * Track user feedback events
     */
    public trackFeedback(feedback: {
        helpful: boolean;
        featureUsed: 'explain' | 'review' | 'errorExplanation' | 'conceptClick' | 'reflectionView';
        userLevel: string;
        feedbackCommentLength?: number;
        responseTime?: number;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }

        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            feedbackRating: feedback.helpful,
            featureUsed: feedback.featureUsed,
            userLevel: feedback.userLevel,
            feedbackCommentLength: feedback.feedbackCommentLength,
            responseTime: feedback.responseTime
        });

        this.queueEvent('feedback', sanitizedMetadata);
    }

    public trackConceptClick(data: { concept: string; url?: string; userLevel: string }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }
        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            featureUsed: 'conceptClick',
            userLevel: data.userLevel
        });
        this.queueEvent('feedback', sanitizedMetadata);
    }

    public trackReflectionView(userLevel: string): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }
        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            featureUsed: 'reflectionView',
            userLevel
        });
        this.queueEvent('feedback', sanitizedMetadata);
    }

    /**
     * Track confusion detection events
     */
    public trackConfusionDetection(metadata: {
        triggerType: 'dwellTime' | 'repeatedError' | 'editCycle';
        dwellTime?: number;
        errorRepeatCount?: number;
        languageId: string;
        userLevel: string;
        proactiveEnabled: boolean;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }

        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            triggerType: metadata.triggerType,
            dwellTime: metadata.dwellTime,
            errorRepeatCount: metadata.errorRepeatCount,
            languageId: metadata.languageId,
            userLevel: metadata.userLevel,
            proactiveEnabled: metadata.proactiveEnabled,
            featureUsed: 'confusionDetection'
        });

        this.queueEvent('confusion', sanitizedMetadata);
    }

    public trackLLMOutcome(metadata: {
        callType: 'explain' | 'review' | 'error';
        success: boolean;
        timeout: boolean;
        apiResponseTime?: number;
        userLevel: string;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }
        if (!metadata.success) {
            this.sessionCounters.failures += 1;
        }
        if (metadata.timeout) {
            this.sessionCounters.timeouts += 1;
        }
        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            callType: metadata.callType,
            success: metadata.success,
            timeout: metadata.timeout,
            apiResponseTime: metadata.apiResponseTime,
            featureUsed: 'llmOutcome',
            userLevel: metadata.userLevel
        });
        this.queueEvent('metrics', sanitizedMetadata);
    }

    /**
     * Track configuration changes
     */
    public trackConfigurationChange(metadata: {
        settingChanged: string;
        newValue: string; // Only track the type/category, not actual values
        userLevel: string;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }

        const sanitizedMetadata = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            settingChanged: metadata.settingChanged,
            newValue: metadata.newValue,
            userLevel: metadata.userLevel,
            featureUsed: 'configuration'
        });

        this.queueEvent('configuration', sanitizedMetadata);
    }

    /**
     * Track error events for debugging and improvement
     */
    public trackError(metadata: {
        errorType: string;
        errorMessage: string;
        component: string;
        userLevel: string;
        context?: string;
    }): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }

        const sanitizedMetadata = this.sanitizeMetadata({
            errorType: metadata.errorType,
            // Sanitize error message to remove sensitive information
            errorMessage: this.sanitizeErrorMessage(metadata.errorMessage),
            featureUsed: metadata.component,
            userLevel: metadata.userLevel,
            // Add context if provided
            ...(metadata.context && { triggerType: metadata.context })
        });

        this.queueEvent('configuration', sanitizedMetadata); // Use configuration event type for errors
    }

    /**
     * Sanitize metadata to ensure no sensitive information is included
     */
    private sanitizeMetadata(metadata: Record<string, any>): PrivacyCompliantMetadata {
        const sanitized: PrivacyCompliantMetadata = {};

        // Allow only specific safe fields
        const allowedFields: (keyof PrivacyCompliantMetadata)[] = [
            'languageId', 'fileExtension', 'constructType', 'codeLength', 'lineCount', 'selectionLength', 'schemaVersion',
            'complexityNestingEstimate', 'errorType', 'diagnosticSeverity', 'requestedHelp', 'responseTime',
            'userLevel', 'feedbackRating', 'feedbackCommentLength', 'apiResponseTime', 'success',
            'featureUsed', 'triggerMethod', 'callType', 'timeout', 'sessionDurationBucket',
            'explanationsPerSession', 'reviewsPerSession', 'errorsPerSession', 'timeoutsPerSession', 'failuresPerSession'
        ];

        for (const field of allowedFields) {
            if (metadata[field] !== undefined) {
                // Additional sanitization for specific fields
                if (field === 'errorType') {
                    // Only include error category, not specific messages
                    sanitized[field] = this.sanitizeErrorType(metadata[field]);
                } else if (field === 'codeLength' || field === 'lineCount' || field === 'selectionLength') {
                    // Bucket sizes to prevent fingerprinting
                    sanitized[field] = this.bucketSize(metadata[field]);
                } else if (field === 'responseTime' || field === 'apiResponseTime') {
                    // Bucket response times
                    sanitized[field] = this.bucketTime(metadata[field]);
                } else {
                    sanitized[field] = metadata[field];
                }
            }
        }

        // Add any additional safe fields that might be in metadata
        if (metadata.triggerType) {
            sanitized.triggerType = metadata.triggerType;
        }
        if (metadata.dwellTime !== undefined) {
            sanitized.dwellTime = this.bucketTime(metadata.dwellTime);
        }
        if (metadata.errorRepeatCount !== undefined) {
            sanitized.errorRepeatCount = Math.min(metadata.errorRepeatCount, 10); // Cap at 10
        }
        if (metadata.reviewType) {
            sanitized.reviewType = metadata.reviewType;
        }
        if (metadata.settingChanged) {
            sanitized.settingChanged = metadata.settingChanged;
        }
        if (metadata.newValue) {
            sanitized.newValue = metadata.newValue;
        }
        if (metadata.proactiveEnabled !== undefined) {
            sanitized.proactiveEnabled = metadata.proactiveEnabled;
        }

        return sanitized;
    }

    private bucketSessionDuration(ms: number): PrivacyCompliantMetadata['sessionDurationBucket'] {
        if (ms <= 60_000) return '≤1m';
        if (ms <= 5 * 60_000) return '≤5m';
        if (ms <= 15 * 60_000) return '≤15m';
        if (ms <= 60 * 60_000) return '≤60m';
        return '>60m';
    }

    /**
     * Sanitize error types to remove sensitive information
     */
    private sanitizeErrorType(errorType: string): string {
        // Map specific error messages to general categories
        const errorCategories: Record<string, string> = {
            'SyntaxError': 'syntax',
            'IndentationError': 'indentation',
            'NameError': 'name',
            'TypeError': 'type',
            'ValueError': 'value',
            'AttributeError': 'attribute',
            'ImportError': 'import',
            'ModuleNotFoundError': 'import',
            'KeyError': 'key',
            'IndexError': 'index'
        };

        // Extract the error type from the message
        for (const [errorName, category] of Object.entries(errorCategories)) {
            if (errorType.includes(errorName)) {
                return category;
            }
        }

        return 'other';
    }

    /**
     * Sanitize error messages to remove sensitive information
     */
    private sanitizeErrorMessage(errorMessage: string): string {
        // Remove file paths, user names, and other sensitive information
        let sanitized = errorMessage;
        
        // Remove file paths (Windows and Unix style)
        sanitized = sanitized.replace(/[A-Za-z]:\\[^\\]+\\[^\\]+/g, '[PATH]');
        sanitized = sanitized.replace(/\/[^\/]+\/[^\/]+/g, '[PATH]');
        
        // Remove potential user names
        sanitized = sanitized.replace(/\/Users\/[^\/]+/g, '/Users/[USER]');
        sanitized = sanitized.replace(/\\Users\\[^\\]+/g, '\\Users\\[USER]');
        
        // Remove line numbers and specific positions to prevent fingerprinting
        sanitized = sanitized.replace(/line \d+/g, 'line [NUM]');
        sanitized = sanitized.replace(/column \d+/g, 'column [NUM]');
        
        // Truncate very long messages
        if (sanitized.length > 200) {
            sanitized = sanitized.substring(0, 200) + '...';
        }
        
        return sanitized;
    }

    /**
     * Bucket sizes to prevent fingerprinting while maintaining useful analytics
     */
    private bucketSize(size: number): number {
        if (size <= 10) return 10;
        if (size <= 50) return 50;
        if (size <= 100) return 100;
        if (size <= 500) return 500;
        if (size <= 1000) return 1000;
        return 1000; // Cap at 1000+
    }

    /**
     * Bucket times to prevent fingerprinting
     */
    private bucketTime(timeMs: number): number {
        if (timeMs <= 100) return 100;
        if (timeMs <= 500) return 500;
        if (timeMs <= 1000) return 1000;
        if (timeMs <= 5000) return 5000;
        if (timeMs <= 10000) return 10000;
        return 10000; // Cap at 10s+
    }

    /**
     * Queue an event for processing
     */
    private queueEvent(eventType: TelemetryEventData['eventType'], metadata: PrivacyCompliantMetadata): void {
        const event: TelemetryEventData = {
            eventType,
            metadata,
            sessionId: this.sessionId,
            extensionVersion: this.extensionVersion,
            vscodeVersion: this.vscodeVersion,
            timestamp: Date.now()
        };

        this.eventQueue.push(event);
        this.processEventQueue();
    }

    /**
     * Process the event queue (fire-and-forget)
     */
    private async processEventQueue(): Promise<void> {
        if (this.isProcessingQueue || this.eventQueue.length === 0) {
            return;
        }

        this.isProcessingQueue = true;

        try {
            // Process events in batches
            const batchSize = 10;
            while (this.eventQueue.length > 0) {
                const batch = this.eventQueue.splice(0, batchSize);
                await this.sendEventBatch(batch);
            }
        } catch (error) {
            // Silently fail - telemetry should never interfere with extension functionality
            console.debug('Telemetry batch processing failed:', error);
        } finally {
            this.isProcessingQueue = false;
        }
    }

    /**
     * Send a batch of events to the telemetry endpoint
     */
    private async sendEventBatch(events: TelemetryEventData[]): Promise<void> {
        try {
            const config = this.configManager.getConfiguration();
            
            // Skip if telemetry is disabled or in demo mode
            if (!config.telemetryEnabled || config.demoMode) {
                return;
            }

            const telemetryEndpoint = `${config.apiBaseUrl}/telemetry`;
            
            const response = await fetch(telemetryEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiKey}`,
                    'User-Agent': `CodeCoach-VSCode/${this.extensionVersion}`
                },
                body: JSON.stringify({
                    events,
                    batchId: this.generateBatchId(),
                    timestamp: Date.now()
                })
            });

            // Don't throw on HTTP errors - telemetry is fire-and-forget
            if (!response.ok) {
                console.debug(`Telemetry batch failed with status: ${response.status}`);
            }
        } catch (error) {
            // Silently fail - telemetry should never interfere with extension functionality
            console.debug('Telemetry batch send failed:', error);
        }
    }

    /**
     * Setup automatic event queue processing
     */
    private setupEventQueueProcessor(): void {
        // Process queue every 30 seconds
        const interval = setInterval(() => {
            this.processEventQueue();
        }, 30000);

        // Process queue when extension is deactivated
        const disposable = vscode.Disposable.from({
            dispose: () => {
                clearInterval(interval);
                this.emitSessionMetrics();
                this.processEventQueue(); // Final flush
            }
        });

        this.disposables.push(disposable);
        this.context.subscriptions.push(disposable);
    }

    private emitSessionMetrics(): void {
        if (!this.configManager.isTelemetryEnabled()) {
            return;
        }
        const durationMs = Date.now() - this.sessionStart;
        const sanitized = this.sanitizeMetadata({
            schemaVersion: this.schemaVersion,
            sessionDurationBucket: this.bucketSessionDuration(durationMs),
            explanationsPerSession: Math.min(this.sessionCounters.explain, 1000),
            reviewsPerSession: Math.min(this.sessionCounters.review, 1000),
            errorsPerSession: Math.min(this.sessionCounters.error, 1000),
            timeoutsPerSession: Math.min(this.sessionCounters.timeouts, 1000),
            failuresPerSession: Math.min(this.sessionCounters.failures, 1000),
            featureUsed: 'sessionSummary'
        });
        this.queueEvent('session', sanitized);
    }

    /**
     * Generate a unique session ID
     */
    private generateSessionId(): string {
        return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Generate a unique batch ID
     */
    private generateBatchId(): string {
        return `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Get extension version from package.json
     */
    private getExtensionVersion(): string {
        try {
            const packageJson = require('../../package.json');
            return packageJson.version || 'unknown';
        } catch {
            return 'unknown';
        }
    }

    /**
     * Flush all pending events (for extension deactivation)
     */
    public async flush(): Promise<void> {
        if (this.eventQueue.length > 0) {
            await this.processEventQueue();
        }
    }

    /**
     * Get telemetry status for debugging
     */
    public getStatus(): {
        enabled: boolean;
        sessionId: string;
        queueLength: number;
        extensionVersion: string;
    } {
        return {
            enabled: this.configManager.isTelemetryEnabled(),
            sessionId: this.sessionId,
            queueLength: this.eventQueue.length,
            extensionVersion: this.extensionVersion
        };
    }

    /**
     * Dispose of resources
     */
    public dispose(): void {
        this.emitSessionMetrics();
        this.flush(); // Fire-and-forget final flush
        this.disposables.forEach(d => d.dispose());
        this.disposables = [];
    }
}
