import * as vscode from 'vscode';

export class WelcomePanel {
    public static currentPanel: WelcomePanel | undefined;
    public static readonly viewType = 'flowpilotWelcome';

    private readonly _panel: vscode.WebviewPanel;
    private readonly _extensionUri: vscode.Uri;
    private readonly _disposables: vscode.Disposable[] = [];

    public static createOrShow(extensionUri: vscode.Uri) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;

        // If we already have a panel, show it.
        if (WelcomePanel.currentPanel) {
            WelcomePanel.currentPanel._panel.reveal(column);
            return;
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            WelcomePanel.viewType,
            'Welcome to FlowPilot',
            column || vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')]
            }
        );

        WelcomePanel.currentPanel = new WelcomePanel(panel, extensionUri);
    }

    private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
        this._panel = panel;
        this._extensionUri = extensionUri;

        // Set the webview's initial html content
        this._panel.webview.html = this._getHtmlForWebview(this._panel.webview);

        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programmatically
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'openDashboard':
                        vscode.env.openExternal(vscode.Uri.parse('http://localhost:3000'));
                        return;
                    case 'tryExplainSelection':
                        vscode.window.showInformationMessage('Tip: Select some code and run "FlowPilot: Explain Selected Code"');
                        return;
                    case 'tryExplainError':
                        vscode.window.showInformationMessage('Tip: Hover over an error or run "FlowPilot: Explain Error"');
                        return;
                }
            },
            null,
            this._disposables
        );
    }

    public dispose() {
        WelcomePanel.currentPanel = undefined;

        // Clean up our resources
        this._panel.dispose();

        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        // Use a nonce to only allow a specific script to be run.
        const nonce = getNonce();

        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to FlowPilot</title>
                <style>
                    :root {
                        --primary: #1b5cff;
                        --primary-hover: #154fe0;
                        --bg-color: var(--vscode-editor-background);
                        --card-bg: var(--vscode-editor-inactiveSelectionBackground);
                        --text-primary: var(--vscode-editor-foreground);
                        --text-secondary: var(--vscode-descriptionForeground);
                        --border: var(--vscode-widget-border);
                        --shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    }

                    body {
                        font-family: var(--vscode-font-family);
                        padding: 0;
                        margin: 0;
                        color: var(--text-primary);
                        background-color: var(--bg-color);
                        display: flex;
                        justify-content: center;
                        min-height: 100vh;
                    }

                    .container {
                        max-width: 800px;
                        width: 100%;
                        padding: 40px 20px;
                        animation: fadeIn 0.5s ease-out;
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    header {
                        text-align: center;
                        margin-bottom: 50px;
                    }

                    h1 {
                        font-size: 3rem;
                        margin-bottom: 10px;
                        background: linear-gradient(135deg, var(--primary) 0%, #a0c4ff 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        display: inline-block;
                    }

                    p.subtitle {
                        font-size: 1.2rem;
                        color: var(--text-secondary);
                        max-width: 600px;
                        margin: 0 auto;
                        line-height: 1.6;
                    }

                    .grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 20px;
                        margin-bottom: 40px;
                    }

                    .card {
                        background-color: color-mix(in srgb, var(--bg-color), white 5%);
                        border: 1px solid var(--border);
                        border-radius: 12px;
                        padding: 24px;
                        transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        position: relative;
                        overflow: hidden;
                    }

                    .card:hover {
                        transform: translateY(-4px);
                        box-shadow: var(--shadow);
                        border-color: var(--primary);
                    }

                    .card-icon {
                        width: 48px;
                        height: 48px;
                        background-color: rgba(27, 92, 255, 0.1);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 16px;
                        color: var(--primary);
                    }

                    .card h3 {
                        margin: 0 0 8px 0;
                        font-size: 1.3rem;
                    }

                    .card p {
                        margin: 0 0 20px 0;
                        color: var(--text-secondary);
                        font-size: 0.95rem;
                        line-height: 1.5;
                        flex-grow: 1;
                    }

                    .card-actions {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: auto;
                    }

                    .btn {
                        background-color: var(--primary);
                        color: white;
                        border: none;
                        padding: 10px 18px;
                        border-radius: 8px;
                        font-size: 0.9rem;
                        font-weight: 600;
                        cursor: pointer;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        transition: background-color 0.2s;
                        text-decoration: none;
                    }

                    .btn:hover {
                        background-color: var(--primary-hover);
                    }

                    .btn-secondary {
                        background-color: transparent;
                        border: 1px solid var(--border);
                        color: var(--text-primary);
                    }

                    .btn-secondary:hover {
                        border-color: var(--primary);
                        color: var(--primary);
                        background-color: rgba(27, 92, 255, 0.05);
                    }

                    .status-checkbox {
                        appearance: none;
                        width: 24px;
                        height: 24px;
                        border: 2px solid var(--text-secondary);
                        border-radius: 50%;
                        cursor: pointer;
                        position: relative;
                        transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
                    }

                    .status-checkbox:checked {
                        background-color: #4caf50;
                        border-color: #4caf50;
                    }

                    .status-checkbox:checked::after {
                        content: '';
                        position: absolute;
                        left: 7px;
                        top: 3px;
                        width: 5px;
                        height: 10px;
                        border: solid white;
                        border-width: 0 2px 2px 0;
                        transform: rotate(45deg);
                    }
                    
                    /* Completed State Styling */
                     .card.completed {
                        border-color: #4caf50;
                     }
                     .card.completed .card-icon {
                        background-color: rgba(76, 175, 80, 0.1);
                        color: #4caf50;
                     }

                    .footer {
                        text-align: center;
                        margin-top: 60px;
                        padding-top: 20px;
                        border-top: 1px solid var(--border);
                        color: var(--text-secondary);
                        font-size: 0.9rem;
                    }

                    .footer a {
                        color: var(--primary);
                        text-decoration: none;
                    }

                    .footer a:hover {
                        text-decoration: underline;
                    }

                    /* Icons */
                    .icon { width: 24px; height: 24px; }
                    
                </style>
            </head>
            <body>
                <div class="container">
                    <header>
                        <div style="font-size: 4rem; margin-bottom: 20px;">🦖</div>
                        <h1>Welcome to FlowPilot</h1>
                        <p class="subtitle">Your AI-powered coding companion. Let's get you set up and ready to code smarter, not harder.</p>
                    </header>

                    <h2 style="margin-bottom: 24px; display: flex; align-items: center; gap: 10px;">
                        <span>✅</span> Getting Started
                    </h2>

                    <div class="grid">
                        <!-- Step 1: Install -->
                        <div class="card completed">
                            <div class="card-icon">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                            <h3>Extension Installed</h3>
                            <p>FlowPilot is successfully installed and ready to use in VS Code.</p>
                            <div class="card-actions">
                                <input type="checkbox" class="status-checkbox" checked disabled>
                            </div>
                        </div>

                        <!-- Step 2: Dashboard -->
                        <div class="card" id="card-dashboard">
                             <div class="card-icon">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3>Connect Dashboard</h3>
                            <p>Unlock session history, deep analytics, and more by connecting the web dashboard.</p>
                            <div class="card-actions">
                                <button class="btn" onclick="openDashboard()">Connect Now</button>
                                <input type="checkbox" class="status-checkbox" id="check-dashboard">
                            </div>
                        </div>

                        <!-- Step 3: Explain Selection -->
                         <div class="card" id="card-explain">
                             <div class="card-icon">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3>Explain Selection</h3>
                            <p>Select any code snippet and ask FlowPilot to explain it. Right-click > "Explain Selected Code".</p>
                            <div class="card-actions">
                                <button class="btn btn-secondary" onclick="tryExplainSelection()">Try It</button>
                                <input type="checkbox" class="status-checkbox" id="check-explain">
                            </div>
                        </div>

                        <!-- Step 4: Explain Error -->
                         <div class="card" id="card-error">
                             <div class="card-icon">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3>Fix Errors</h3>
                            <p>Stuck on a bug? FlowPilot can analyze error messages and suggest fixes instantly.</p>
                            <div class="card-actions">
                                <button class="btn btn-secondary" onclick="tryExplainError()">Learn More</button>
                                <input type="checkbox" class="status-checkbox" id="check-error">
                            </div>
                        </div>
                    </div>

                    <div class="footer">
                        <p>Need help? Visit our <a href="https://docs.flowpilot.ai">Documentation</a> or join our <a href="#">Discord Community</a>.</p>
                    </div>
                </div>

                <script nonce="${nonce}">
                    const vscode = acquireVsCodeApi();

                    function openDashboard() {
                        vscode.postMessage({ command: 'openDashboard' });
                        document.getElementById('check-dashboard').checked = true;
                        markCardCompleted('card-dashboard');
                    }

                    function tryExplainSelection() {
                        vscode.postMessage({ command: 'tryExplainSelection' });
                        document.getElementById('check-explain').checked = true;
                        markCardCompleted('card-explain');
                    }

                    function tryExplainError() {
                        vscode.postMessage({ command: 'tryExplainError' });
                        document.getElementById('check-error').checked = true;
                        markCardCompleted('card-error');
                    }

                    function markCardCompleted(cardId) {
                        const card = document.getElementById(cardId);
                        if (card) {
                            card.classList.add('completed');
                        }
                    }
                    
                    // Simple local state management for checklist (not persisted for now)
                    window.addEventListener('message', event => {
                        const message = event.data;
                        // Handle messages from extension
                    });
                </script>
            </body>
            </html>`;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
