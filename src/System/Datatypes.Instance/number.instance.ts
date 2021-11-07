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
            const datatypes = ["int", "uint", "ulong", "long", "float", "double", "decimal", "short", "ushort", "byte", "sbyte", "char", "bool", "Boolean", "object", "Object", "Int16", "Int32", "Int64", "IntPtr", "Single"];
                      
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
                    if(line.includes("int ") && line.indexOf(";") !== -1
                    || line.includes("uint ")&& line.indexOf(";") !== -1
                    || line.includes("ulong ")&& line.indexOf(";") !== -1
                    || line.includes("long ")&& line.indexOf(";") !== -1
                    || line.includes("float ")&& line.indexOf(";") !== -1
                    || line.includes("double ")&& line.indexOf(";") !== -1
                    || line.includes("decimal ")&& line.indexOf(";") !== -1
                    || line.includes("short ")&& line.indexOf(";") !== -1
                    || line.includes("ushort ")&& line.indexOf(";") !== -1
                    || line.includes("byte ")&& line.indexOf(";") !== -1
                    || line.includes("sbyte ")&& line.indexOf(";") !== -1
                    || line.includes("char ")&& line.indexOf(";") !== -1
                    || line.includes("bool ")&& line.indexOf(";") !== -1
                    || line.includes("Boolean ")&& line.indexOf(";") !== -1
                    || line.includes("object ")&& line.indexOf(";") !== -1
                    || line.includes("Object ")&& line.indexOf(";") !== -1
                    || line.includes("Int16 ")&& line.indexOf(";") !== -1
                    || line.includes("Int32 ")&& line.indexOf(";") !== -1
                    || line.includes("Int64 ")&& line.indexOf(";") !== -1
                    || line.includes("IntPtr ")&& line.indexOf(";") !== -1
                    || line.includes("Single ") && line.indexOf(";") !== -1

                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }
            

            // var x = 5;
            if (document.getText().includes("var ")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("var ") && line.indexOf(";") !== -1 && !line.includes("new")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        if(isNaN(Number(lineArray[3].slice(0, -1)))==false) {
                            listVariables.push(lineArray[1].slice(0, -1));
                        }

                    }
                }
            }

            // method(Uri x,Uri x, Uri x)
            for (let type = 0; type < datatypes.length; type++) {
                if (document.getText().indexOf(datatypes[type]) !== -1
                ) {
                    for (let i = 1; i < document.lineCount; i++) {
                        var line = document.lineAt(i).text;
                        if(line.indexOf(datatypes[type]) !== -1 && !line.includes("var") && line.indexOf(";") === -1
                        ) {
                            var lineArray = line.split(" ");
                            lineArray = lineArray.filter(e => String(e).trim());
    
                            let index1 = lineArray.findIndex(str => str.includes(datatypes[type]))
    
                            if(index1 > 1) {
    
                                var instaince = lineArray[index1+1];
                                if(instaince.indexOf(",") !== -1) {
                                 listVariables.push(instaince.slice(0, -1));                               
                                } else if (instaince.indexOf("){") !== -1) {
                                    listVariables.push(instaince.slice(0, -2));
                                } else if (instaince.indexOf(")") !== -1) {
                                    listVariables.push(instaince.slice(0, -1));
                                }
    
                            }
    
                           
                        }
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
