import * as vscode from 'vscode';
import { ToCheck, UnCheck } from '../Ext/External.Methods';




export const AttributeTargetsDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AttributeTargets.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.AttributeTargets.Methods as string[];

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
