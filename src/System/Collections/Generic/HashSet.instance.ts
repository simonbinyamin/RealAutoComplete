import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { UnCheck } from '../../../Ext/External.Methods';


export const HashSetInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
        {
            const listVariables = Array<string>();
            const endsWithBooleans = [];
           
            if (document.getText().includes("HashSet<") 
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("HashSet<") 
                    ) {
                        var lineArray = line.split(" ");
                        console.log(lineArray);
                        console.log("Linked");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }
            
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
                for (let i = 0; i < listVariables.length; i++) {
                    var e = !linePrefix.endsWith(listVariables[i]+".");
                    endsWithBooleans.push(e);
                    
                }

                 if(endsWithBooleans.every(x=>x==true)) {
                    //return null;
                 }

            var json = require('../../../Json/trial.json');
            var Methods = json.System.Collections.Generic.HashSet.Methods as string[];
            var LinqMethods = json.System.Linq.Methods as string[];
            
            
            return new Promise((resolve, reject) => { 
            var completionItems:vscode.CompletionItem[] = [];

               for (let index = 0; index < listVariables.length; index++) {
                   var completionItem:vscode.CompletionItem = new vscode.CompletionItem(listVariables[index]);
                   completionItem.detail = "instance";
                    completionItem.filterText = listVariables[index];
                    completionItem.insertText = listVariables[index];
                    completionItem.kind = vscode.CompletionItemKind.Variable;
                    completionItems.push(completionItem);
                    
                }

                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                for (let index = 0; index < listVariables.length; index++) {
                    
                    
                    if (linePrefix.endsWith(listVariables[index]+'.')) {
                        for (let i = 0; i < Methods.length; i++) {
                            var ob = new vscode.CompletionItem(UnCheck(Methods[i]), vscode.CompletionItemKind.Method)
                            completionItems.push(ob);
                    
                        }

                        if (document.getText().includes("using System.Linq;")) {
                            for (let i = 0; i < LinqMethods.length; i++) {
                                var ob = new vscode.CompletionItem(UnCheck(LinqMethods[i]), vscode.CompletionItemKind.Method)
                                completionItems.push(ob);
                             }
                        }
                    }
                }

            
            return resolve(completionItems);
            });
        }, 
    
},'.'
);
