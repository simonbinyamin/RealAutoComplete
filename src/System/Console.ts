import * as vscode from 'vscode';
import { UnCheck } from '../Ext/External.Methods';




export const consoleDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Console.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var consoleMethods = json.System.Console.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < consoleMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(consoleMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);
