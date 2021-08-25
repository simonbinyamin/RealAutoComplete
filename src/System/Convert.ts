import { Console } from 'console';
import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../Ext/External.Methods';




export const convertDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Convert.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var convertMethods = json.System.Convert.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < convertMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(convertMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);
