import * as vscode from 'vscode';
import { ToCheck, UnCheck } from '../Ext/External.Methods';




export const ActionDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Action.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.Action.Methods as string[];

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


export const AssemblyLoadEventHandlerDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyLoadEventHandler.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.Action.Methods as string[];

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



export const DelegateDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Delegate.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.Action.Methods as string[];

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



export const EventHandlerDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('EventHandler.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.Action.Methods as string[];

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