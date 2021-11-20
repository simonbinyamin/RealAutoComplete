// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { Item } from './Models/Item';

import axios from 'axios';
import { environment } from './Environments/environment';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "realautocomplete" is now active!');
	const url: string = environment.URL;
	let auto_result : Item[];
	let script_result : Item[];
	try {
		const response = await axios.get(url);
		console.log(response.data);
		auto_result = response.data.auto.lst;
		script_result = response.data.script.lst;
	} catch (exception) {
		process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
	}
	
	let disposable = vscode.commands.registerCommand('realautocomplete.real-csharp-autocomplete', () => {
		vscode.window.showInformationMessage('Hello World from realautocomplete!');
		vscode.languages.registerCompletionItemProvider('csharp', {

			async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
			{
				return new Promise((resolve, reject) => { 
				var completionItems:vscode.CompletionItem[] = [];

				for (let index = 0; index < auto_result.length; index++) {
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(auto_result[index].Id);
					completionItem.detail = auto_result[index].Id;
					completionItem.filterText = auto_result[index].Id;
					completionItem.insertText = auto_result[index].Name.replace(/\\n/g,'\n');
					completionItem.kind = vscode.CompletionItemKind.TypeParameter;
					completionItems.push(completionItem);
					
				}

				for (let index = 0; index < script_result.length; index++) {
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(script_result[index].Id);
					completionItem.detail = script_result[index].Id;
					completionItem.filterText = script_result[index].Id;
					completionItem.insertText = script_result[index].Name.replace(/\\n/g,'\n');
					completionItem.kind = vscode.CompletionItemKind.User;
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