import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../../../Ext/External.Methods';




export const ArrayInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            const listVariables = [];
            const endsWithBooleans = [];
            
            if (document.getText().includes("[]")) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("[]")) {
                        var lineArray = line.split(" ");
                        console.log(lineArray);
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
                console.log(listVariables);
            }


            const linePrefix = document.lineAt(position).text.substr(0, position.character);
                for (let i = 0; i < listVariables.length; i++) {
                    var e = !linePrefix.endsWith(listVariables[i]+".");
                    endsWithBooleans.push(e);
                    
                }

                 if(endsWithBooleans.every(x=>x==true)) {
                    return undefined;
                 }

            var json = require('../../../Json/trial.json');
            var Methods = json.System.Collections.Generic.Array.Methods as string[];
            var LinqMethods = json.System.Linq.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];

            for (let i = 0; i < Methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(Methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);

            }
            
            if (document.getText().includes("using System.Linq;")) {
                for (let i = 0; i < LinqMethods.length; i++) {
                    var ob = new vscode.CompletionItem(UnCheck(LinqMethods[i]), vscode.CompletionItemKind.Method)
                    completionItemslst.push(ob);
                 }
            }
            return completionItemslst;
        }
    },
    '.'
);
