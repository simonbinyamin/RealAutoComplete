import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../Ext/External.Methods';




export const dateTimeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('DateTime.')) {
                return undefined;
            }
            
            var json = require('../Json/trial.json');
            var dateTimeMethods = json.System.DateTime.Methods as string[];
            var dateTimeProps = json.System.DateTime.Props as string[];
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < dateTimeMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(dateTimeMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            for (let i = 0; i < dateTimeProps.length; i++) {
                var ob = new vscode.CompletionItem(UnCheck(dateTimeProps[i]), vscode.CompletionItemKind.Property)
                completionItemslst.push(ob);
                 
             }
             
            return completionItemslst;
        }
    },
    '.'
);
