// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { Item } from './Models/Item';



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "realautocomplete" is now active!');

	let disposable = vscode.commands.registerCommand('realautocomplete.real-csharp-intellisense', () => {
		vscode.window.showInformationMessage('Hello World from realautocomplete!');
		vscode.languages.registerCompletionItemProvider('csharp', {
			
			
			
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
			{
	
				
				return new Promise((resolve, reject) => { 
				var completionItems:vscode.CompletionItem[] = [];
				var json = require('./Json/trial.json');
				var autolst:Item[] = json.Auto.Lst as Item[];
				var Keywords = json.Keywords as string[];

				for (let index = 0; index < Keywords.length; index++) {
					
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(Keywords[index]);
					completionItem.detail = Keywords[index];
					completionItem.filterText = Keywords[index];
					completionItem.insertText = Keywords[index];
					completionItem.kind = vscode.CompletionItemKind.User;
					completionItems.push(completionItem);
					
				}
				
				for (let index = 0; index < autolst.length; index++) {
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(autolst[index].Id);
					completionItem.detail = autolst[index].Id;
					completionItem.filterText = autolst[index].Id;
					completionItem.insertText = autolst[index].Name;
					completionItem.kind = vscode.CompletionItemKind.TypeParameter;
					completionItems.push(completionItem);
					
				}
				
				return resolve(completionItems);
				});
			},
		
		});
		
		
		
	});
	


	context.subscriptions.push(disposable
		);
}
            //int uint ulong long float double decimal short ushort byte sbyte char bool object
// this method is called when your extension is deactivated
export function deactivate() {}