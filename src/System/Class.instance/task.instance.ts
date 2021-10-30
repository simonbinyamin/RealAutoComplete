import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { UnCheck } from '../../Ext/External.Methods';


export const TaskInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
        {
            const listVariables = Array<string>();
            const endsWithBooleans = [];
           
            //Task x = new Task
            if (document.getText().includes("Task ")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("Task ") && line.indexOf(";") !== -1 && line.includes("new")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }
            
            // var x =  new Task
            if (document.getText().includes("var ") && document.getText().includes("new Task")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("var ") && line.includes("new Task")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
                    }
                }
            }

            // Task x;
            if (document.getText().includes("Task ")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("Task ") && line.indexOf(";") !== -1 && !line.includes("new")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1].slice(0, -1));
                    }
                }
            }

            // method(Task x,Task x, Task x)
            if (document.getText().indexOf("Task") !== -1
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.indexOf("Task") !== -1 && !line.includes("var")
                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());

                        let index1 = lineArray.findIndex(str => str.includes("Task"))

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
            var Methods = json.System.ClassInstance.Task.Methods as string[];
            
            
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
