import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { UnCheck } from '../../Ext/External.Methods';


export const NumberInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
        {
            const listVariables = Array<string>();
            const endsWithBooleans = [];
           //            
            if (document.getText().includes("int ") 
            || document.getText().includes("uint ")
            || document.getText().includes("ulong ")
            || document.getText().includes("long ")
            || document.getText().includes("float ")
            || document.getText().includes("double ")
            || document.getText().includes("decimal ")
            || document.getText().includes("short ")
            || document.getText().includes("ushort ")
            || document.getText().includes("byte ")
            || document.getText().includes("sbyte ")
            || document.getText().includes("char ")
            || document.getText().includes("bool ")
            || document.getText().includes("Boolean ")
            || document.getText().includes("object ")
            || document.getText().includes("Object ")
            || document.getText().includes("Int16 ")
            || document.getText().includes("Int32 ")
            || document.getText().includes("Int64 ")
            || document.getText().includes("IntPtr ")
            || document.getText().includes("Single ")

            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("int ") 
                    || line.includes("uint ")
                    || line.includes("ulong ")
                    || line.includes("long ")
                    || line.includes("float ")
                    || line.includes("double ")
                    || line.includes("decimal ")
                    || line.includes("short ")
                    || line.includes("ushort ")
                    || line.includes("byte ")
                    || line.includes("sbyte ")
                    || line.includes("char ")
                    || line.includes("bool ")
                    || line.includes("Boolean ")
                    || line.includes("object ")
                    || line.includes("Object ")
                    || line.includes("Int16 ")
                    || line.includes("Int32 ")
                    || line.includes("Int64 ")
                    || line.includes("IntPtr ")
                    || line.includes("Single ")

                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1].slice(0,-1));
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

            var json = require('../../Json/trial.json');
            var Methods = json.System.DatatypesInstance.single.Methods as string[];
            

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
                    }
                }


            return resolve(completionItems);
            });
        }, 
    
},'.'
);
