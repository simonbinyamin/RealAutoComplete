import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../Ext/External.Methods';




export const uriDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Uri.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var uriMethods = json.System.Uri.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < uriMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(uriMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);
