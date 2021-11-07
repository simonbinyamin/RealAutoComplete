import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { UnCheck } from '../../../Ext/External.Methods';


export const QueueInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
        {
            const listVariables = Array<string>();
            const endsWithBooleans = [];
           
            // if (document.getText().includes("Queue<") 
            // ) {
            //     for (let i = 1; i < document.lineCount; i++) {
            //         var line = document.lineAt(i).text;
            //         if(line.includes("Queue<") 
            //         ) {
            //             var lineArray = line.split(" ");
            //             lineArray = lineArray.filter(e => String(e).trim());
            //             listVariables.push(lineArray[1]);
            //         }
            //     }
            // }
            
            //Uri x = new Uri
            if (document.getText().includes("Queue<")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("Queue<") && line.indexOf(";") !== -1 && line.includes("new") && !line.includes("var")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }
            
            // var x =  new Uri
            if (document.getText().includes("var ") && document.getText().includes("new Queue<")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("var ") && line.includes("new Queue<")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }

            // Uri x;
            if (document.getText().includes("Queue<")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("Queue<") && line.indexOf(";") !== -1 && !line.includes("new")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1].slice(0, -1));
                    }
                }
            }

            // method(Uri x,Uri x, Uri x)
            if (document.getText().indexOf("Queue<") !== -1
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.indexOf("Queue<") !== -1 && !line.includes("var") && line.indexOf(";") === -1
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());

                        let index1 = lineArray.findIndex(str => str.includes("Queue<"))

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

            const linePrefix = document.lineAt(position).text.substr(0, position.character);
                for (let i = 0; i < listVariables.length; i++) {
                    var e = !linePrefix.endsWith(listVariables[i]+".");
                    endsWithBooleans.push(e);
                    
                }

                 if(endsWithBooleans.every(x=>x==true)) {
                    //return null;
                 }

            var json = require('../../../Json/trial.json');
            var Methods = json.System.Collections.Generic.Queue.Methods as string[];
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
