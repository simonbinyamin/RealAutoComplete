import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../../Ext/External.Methods';




export const DoubleInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            const listVariables = [];
            const endsWithBooleans = [];
            //int uint ulong long float double decimal short ushort byte sbyte char bool object
            if (document.getText().includes("double ")
            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("double ")) {
                        var lineArray = line.split(" ");
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

            var json = require('../../Json/trial.json');
            var Methods = json.System.DatatypesInstance.single.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];

            for (let i = 0; i < Methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(Methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);

            }

            return completionItemslst;
        }
    },
    '.'
);
