// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { httpContextDisposable, requestServicesDisposable } from './Microsoft/AspNetCore/Http/HttpContext';
import { arrayDisposable } from './System/Array';
import { ArrayInstanceDisposable } from './System/Collections/Generic/Array.instance';
import { DictionaryInstanceDisposable } from './System/Collections/Generic/Dictionary.instance';
import { HashSetInstanceDisposable } from './System/Collections/Generic/HashSet.instance';
import { LinkedListInstanceDisposable } from './System/Collections/Generic/LinkedList.instance';
import { ListInstanceDisposable } from './System/Collections/Generic/List.instance';
import { QueueInstanceDisposable } from './System/Collections/Generic/Queue.instance';
import { StackInstanceDisposable } from './System/Collections/Generic/Stack.instance';
import { consoleDisposable } from './System/Console';
import { convertDisposable } from './System/Convert';
import { BoolInstanceDisposable } from './System/Datatypes.Instance/bool.instance';
import { ByteInstanceDisposable } from './System/Datatypes.Instance/byte.instance';
import { CharInstanceDisposable } from './System/Datatypes.Instance/char.instance';
import { DateTimeInstanceDisposable } from './System/Datatypes.Instance/DateTime.instance';
import { DecimalInstanceDisposable } from './System/Datatypes.Instance/decimal.instance';
import { DoubleInstanceDisposable } from './System/Datatypes.Instance/double.instance';
import { FloatInstanceDisposable } from './System/Datatypes.Instance/float.instance';
import { IntInstanceDisposable } from './System/Datatypes.Instance/int.instance';
import { LongInstanceDisposable } from './System/Datatypes.Instance/long.instance';
import { ObjectInstanceDisposable } from './System/Datatypes.Instance/object.instance';
import { SbyteInstanceDisposable } from './System/Datatypes.Instance/sbyte.instance';
import { ShortInstanceDisposable } from './System/Datatypes.Instance/short.instance';
import { StringInstanceDisposable } from './System/Datatypes.Instance/string.instance';
import { UintInstanceDisposable } from './System/Datatypes.Instance/uint.instance';
import { UlongInstanceDisposable } from './System/Datatypes.Instance/ulong.instance';
import { UshortInstanceDisposable } from './System/Datatypes.Instance/ushort.instance';
import { dateTimeDisposable } from './System/DateTime';
import { drawingImageDisposable } from './System/Drawing/Image';
import { guidDisposable } from './System/Guid';
import { mathDisposable } from './System/Math';
import { stringDisposable } from './System/String';
import { uriDisposable } from './System/Uri';


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
				
				var completionItem:vscode.CompletionItem = new vscode.CompletionItem("Console");
				completionItem.detail = "Console";
				completionItem.filterText = "Console";
				completionItem.insertText = "Console";
				completionItem.kind = vscode.CompletionItemKind.Class;
				completionItems.push(completionItem);
				
				var completionItem2:vscode.CompletionItem = new vscode.CompletionItem("Convert");
				completionItem2.detail = "Convert";
				completionItem2.filterText = "Convert";
				completionItem2.insertText = "Convert";
				completionItem2.kind = vscode.CompletionItemKind.Class;
				completionItems.push(completionItem2);

				
				var uri:vscode.CompletionItem = new vscode.CompletionItem("Uri");
				uri.detail = "Uri";
				uri.filterText = "Uri";
				uri.insertText = "Uri";
				uri.kind = vscode.CompletionItemKind.Class;
				completionItems.push(uri);
				
				var array:vscode.CompletionItem = new vscode.CompletionItem("Array");
				array.detail = "Array";
				array.filterText = "Array";
				array.insertText = "Array";
				array.kind = vscode.CompletionItemKind.Class;
				completionItems.push(array);
				
				var math:vscode.CompletionItem = new vscode.CompletionItem("Math");
				math.detail = "Math";
				math.filterText = "Math";
				math.insertText = "Math";
				math.kind = vscode.CompletionItemKind.Class;
				completionItems.push(math);
				
				
				var string:vscode.CompletionItem = new vscode.CompletionItem("String");
				string.detail = "String";
				string.filterText = "String";
				string.insertText = "String";
				string.kind = vscode.CompletionItemKind.Class;
				completionItems.push(string);
				
				var drawingImage:vscode.CompletionItem = new vscode.CompletionItem("Image");
				drawingImage.detail = "Image";
				drawingImage.filterText = "Image";
				drawingImage.insertText = "Image";
				drawingImage.kind = vscode.CompletionItemKind.Class;
				completionItems.push(drawingImage);
				
				var httpContext:vscode.CompletionItem = new vscode.CompletionItem("HttpContext");
				httpContext.detail = "HttpContext";
				httpContext.filterText = "HttpContext";
				httpContext.insertText = "HttpContext";
				httpContext.kind = vscode.CompletionItemKind.Class;
				completionItems.push(httpContext);
				
				var dateTime:vscode.CompletionItem = new vscode.CompletionItem("DateTime");
				dateTime.detail = "DateTime";
				dateTime.filterText = "DateTime";
				dateTime.insertText = "DateTime";
				dateTime.kind = vscode.CompletionItemKind.Class;
				completionItems.push(dateTime);
				
				var guid:vscode.CompletionItem = new vscode.CompletionItem("Guid");
				guid.detail = "Guid";
				guid.filterText = "Guid";
				guid.insertText = "Guid";
				guid.kind = vscode.CompletionItemKind.Struct;
				completionItems.push(guid);
				
				return resolve(completionItems) ;
				});
			},
		
		});
		
		
		
	});
	


	context.subscriptions.push(disposable,
		consoleDisposable, 
		convertDisposable, 
		uriDisposable,
		arrayDisposable,
		mathDisposable,
		stringDisposable,
		drawingImageDisposable,
		httpContextDisposable,
		requestServicesDisposable,
		dateTimeDisposable,
		guidDisposable,
		ListInstanceDisposable,
		ArrayInstanceDisposable,
		StackInstanceDisposable,
		QueueInstanceDisposable,
		DictionaryInstanceDisposable,
		LinkedListInstanceDisposable,
		HashSetInstanceDisposable,
		DateTimeInstanceDisposable,
		StringInstanceDisposable,
		IntInstanceDisposable,
		UintInstanceDisposable,
		UlongInstanceDisposable,
		LongInstanceDisposable,
		FloatInstanceDisposable,
		DoubleInstanceDisposable,
		DecimalInstanceDisposable,
		ShortInstanceDisposable,
		UshortInstanceDisposable,
		ByteInstanceDisposable,
		SbyteInstanceDisposable,
		CharInstanceDisposable,
		BoolInstanceDisposable,
		ObjectInstanceDisposable,
		);
}
            //int uint ulong long float double decimal short ushort byte sbyte char bool object
// this method is called when your extension is deactivated
export function deactivate() {}
