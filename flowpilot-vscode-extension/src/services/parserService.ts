import * as vscode from 'vscode';
import * as path from 'path';
import Parser = require('web-tree-sitter');

export class ParserService {
    private static instance: ParserService;
    private parsers: Map<string, any> = new Map();
    private isInitialized = false;
    private resourcesPath: string;

    private constructor(context: vscode.ExtensionContext) {
        this.resourcesPath = path.join(context.extensionPath, 'resources', 'parsers');
    }

    public static getInstance(context?: vscode.ExtensionContext): ParserService {
        if (!ParserService.instance) {
            if (!context) {
                throw new Error("ParserService must be initialized with context first");
            }
            ParserService.instance = new ParserService(context);
        }
        return ParserService.instance;
    }

    public async init() {
        if (this.isInitialized) {
            return;
        }
        try {
            await (Parser as any).init();
            this.isInitialized = true;
            console.log('web-tree-sitter initialized');
        } catch (error) {
            console.error('Failed to initialize web-tree-sitter:', error);
        }
    }

    private async getParser(languageId: string): Promise<any | null> {
        if (!this.isInitialized) {
            await this.init();
        }

        if (this.parsers.has(languageId)) {
            return this.parsers.get(languageId)!;
        }

        let wasmName = '';
        if (languageId === 'javascript' || languageId === 'javascriptreact') {
            wasmName = 'tree-sitter-javascript.wasm';
        } else if (languageId === 'typescript' || languageId === 'typescriptreact') {
            wasmName = 'tree-sitter-typescript.wasm';
        } else if (languageId === 'python') {
            wasmName = 'tree-sitter-python.wasm';
        } else {
            return null;
        }

        const wasmPath = path.join(this.resourcesPath, wasmName);
        try {
            const lang = await (Parser as any).Language.load(wasmPath);
            const parser = new (Parser as any)();
            parser.setLanguage(lang);
            this.parsers.set(languageId, parser);
            return parser;
        } catch (error) {
            console.error(`Failed to load parser for ${languageId} from ${wasmPath}:`, error);
            return null;
        }
    }

    public async validateSelection(code: string, languageId: string): Promise<boolean> {
        const parser = await this.getParser(languageId);
        if (!parser) {
            return true; // Assume valid if no parser
        }

        try {
            const tree = parser.parse(code);
            const hasError = this.checkForErrors(tree.rootNode);
            return !hasError;
        } catch (error) {
            console.error('Error during parsing:', error);
            return false;
        }
    }

    private checkForErrors(node: any): boolean {
        if (node.type === 'ERROR' || node.type === 'MISSING') {
            return true;
        }
        for (const child of node.children) {
            if (this.checkForErrors(child)) {
                return true;
            }
        }
        return false;
    }
}
