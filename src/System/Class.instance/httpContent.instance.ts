import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { UnCheck } from '../../Ext/External.Methods';


export const HttpContentInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
        {
            const listVariables = Array<string>();
            const endsWithBooleans = [];
           
            // if (document.getText().includes("HttpContent ") 
            // ) {
            //     for (let i = 1; i < document.lineCount; i++) {
            //         var line = document.lineAt(i).text;
            //         if(line.includes("HttpContent ") 
            //         ) {
            //             var lineArray = line.split(" ");
            //             lineArray = lineArray.filter(e => String(e).trim());
            //             listVariables.push(lineArray[1]);
            //         }
            //     }
            // }
            
            //HttpContent x = new HttpContent
            if (document.getText().includes("HttpContent ")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("HttpContent ") && line.indexOf(";") !== -1 && line.includes("new")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }
            
            // var x =  new HttpContent
            if (document.getText().includes("var ") && document.getText().includes("new HttpContent")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("var ") && line.includes("new HttpContent")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }

            // HttpContent x;
            if (document.getText().includes("HttpContent ")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("HttpContent ") && line.indexOf(";") !== -1 && !line.includes("new")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1].slice(0, -1));
                    }
                }
            }

            // method(HttpContent x,HttpContent x, HttpContent x)
            if (document.getText().indexOf("HttpContent") !== -1
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.indexOf("HttpContent") !== -1 && !line.includes("var") && line.indexOf(";") === -1
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());

                        let index1 = lineArray.findIndex(str => str.includes("Uri"))

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

            var json = require('../../Json/trial.json');
            var Methods = json.System.ClassInstance.HttpContent.Methods as string[];
            
            
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
