import * as vscode from 'vscode';
import { ToCheck, UnCheck } from '../Ext/External.Methods';




export const AssemblyDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Assembly.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.Assembly.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyFlagsDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyFlags.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.AssemblyFlags.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyHashAlgorithmDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyHashAlgorithm.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.AssemblyHashAlgorithm.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyNameDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyName.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.AssemblyName.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyNameFlagsDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyNameFlags.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.AssemblyNameFlags.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);
