import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../../Ext/External.Methods';




export const drawingImageDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Image.')) {
                return undefined;
            }
            
            var json = require('../../Json/trial.json');
            var drawingImageMethods = json.System.Drawing.Image.Methods as string[];
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < drawingImageMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(drawingImageMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
        }
    },
    '.'
);
