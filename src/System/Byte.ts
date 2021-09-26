import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../Ext/External.Methods';




export const ByteDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Byte.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);

export const Int16Disposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Int16.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);

export const Int32Disposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Int32.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);

export const Int64Disposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Int64.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);

export const intDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('int.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);

export const IntPtrDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('IntPtr.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);

export const DecimalDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Decimal.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);

export const DoubleDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Double.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Byte.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < stringMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(stringMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);
