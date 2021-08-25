import { Console } from 'console';
import * as vscode from 'vscode';
import { map, ToCheck, UnCheck } from '../../../Ext/External.Methods';




 export const requestServicesDisposable = vscode.languages.registerCompletionItemProvider(
     'csharp',
     {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

             const linePrefix = document.lineAt(position).text.substr(0, position.character);
             if (!linePrefix.endsWith('RequestServices.')) {
                 return undefined;
             }

 
             var json = require('../../../Json/trial.json');
             var httpContextMethods = json.Microsoft.AspNetCore.Http.HttpContext.RequestServices.Methods as string[];
   
             const completionItemslst : Array<vscode.CompletionItem> =  [];
             
             for (let i = 0; i < httpContextMethods.length; i++) {
                var ob = new vscode.CompletionItem(UnCheck(httpContextMethods[i]), vscode.CompletionItemKind.Method)
                completionItemslst.push(ob);
                 
             }
 
             return completionItemslst;
             
         }
     },
     '.'
 );


export const httpContextDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpContext.')) {
                return undefined;
            }
            
            var json = require('../../../Json/trial.json');
            var httpContextMethods = json.Microsoft.AspNetCore.Http.HttpContext.Methods as string[];
            var httpContextProps = json.Microsoft.AspNetCore.Http.HttpContext.Props as string[];
            
            
            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            for (let i = 0; i < httpContextMethods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(httpContextMethods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }
            
            
            for (let i = 0; i < httpContextProps.length; i++) {
                var ob2 = new vscode.CompletionItem(UnCheck(httpContextProps[i]), vscode.CompletionItemKind.Property)
                completionItemslst.push(ob2);
                 
             }
             

            return completionItemslst;
        }
    },
    '.'
);
