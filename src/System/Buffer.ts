import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../Ext/External.Methods';




export const BufferDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Buffer.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var stringMethods = json.System.Buffer.Methods as string[];
            
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
