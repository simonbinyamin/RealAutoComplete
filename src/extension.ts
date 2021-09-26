// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { httpContextDisposable, requestServicesDisposable } from './Microsoft/AspNetCore/Http/HttpContext';
import { ActionDisposable, AssemblyLoadEventHandlerDisposable, DelegateDisposable, EventHandlerDisposable } from './System/Action';
import { ActivatorDisposable } from './System/Activator';
import { ApiControllerAttributeDisposable, ApiConventionMethodAttributeDisposable, 
	ApiConventionTypeAttributeDisposable, ApiExplorerSettingsAttributeDisposable, AreaAttributeDisposable, 
	AssemblyAlgorithmIdAttributeDisposable, AssemblyCompanyAttributeDisposable, AssemblyConfigurationAttributeDisposable, 
	AssemblyCopyrightAttributeDisposable, AssemblyCultureAttributeDisposable, AssemblyDefaultAliasAttributeDisposable, 
	AssemblyDelaySignAttributeDisposable, AssemblyDescriptionAttributeDisposable, AssemblyFileVersionAttributeDisposable, 
	AssemblyFlagsAttributeDisposable, AssemblyInformationalVersionAttributeDisposable, AssemblyKeyFileAttributeDisposable, 
	AssemblyKeyNameAttributeDisposable, AssemblyMetadataAttributeDisposable, AssemblyProductAttributeDisposable, 
	AssemblySignatureKeyAttributeDisposable, AssemblyTitleAttributeDisposable, AssemblyTrademarkAttributeDisposable,
	AssemblyVersionAttributeDisposable, AttributeDisposable, AttributeUsageAttributeDisposable, 
	AutoValidateAntiforgeryTokenAttributeDisposable, BindAttributeDisposable, BindPropertiesAttributeDisposable, 
	BindPropertyAttributeDisposable, IgnoreAntiforgeryTokenAttributeDisposable,DefaultMemberAttributeDisposable,
	DisableRequestSizeLimitAttributeDisposable,
	FlagsAttributeDisposable,
	FromBodyAttributeDisposable,
	FromFormAttributeDisposable,
	FromHeaderAttributeDisposable,
	FromQueryAttributeDisposable,
	FromRouteAttributeDisposable,
	FromServicesAttributeDisposable,
	HiddenInputAttributeDisposable,
	 HttpDeleteAttributeDisposable,
	 HttpGetAttributeDisposable,
	HttpHeadAttributeDisposable,
	HttpOptionsAttributeDisposable,
	HttpPatchAttributeDisposable,
	HttpPostAttributeDisposable,
	HttpPutAttributeDisposable,
	JsonArrayAttributeDisposable,
	JsonConstructorAttributeDisposable,
	JsonContainerAttributeDisposable,
	JsonConverterAttributeDisposable,
	JsonDictionaryAttributeDisposable,
	JsonExtensionDataAttributeDisposable,
	JsonIgnoreAttributeDisposable,
	JsonObjectAttributeDisposable,
	JsonRequiredAttributeDisposable,
	JsonPropertyAttributeDisposable,
	MiddlewareFilterAttributeDisposable,
	ModelBinderAttributeDisposable,
	ModelMetadataTypeAttributeDisposable,
	MTAThreadAttributeDisposable,
	NonActionAttributeDisposable,
	NonControllerAttributeDisposable,
	NonSerializedAttributeDisposable,
	NonViewComponentAttributeDisposable,
	ObfuscateAssemblyAttributeDisposable,
	ObfuscationAttributeDisposable,
	ObsoleteAttributeDisposable,
	PageRemoteAttributeDisposable,
	ParamArrayAttributeDisposable,
	ProducesAttributeDisposable,
	ProducesDefaultResponseTypeAttributeDisposable,
	ProducesErrorResponseTypeAttributeDisposable,
	ProducesResponseTypeAttributeDisposable,
	ValidateAntiForgeryTokenAttributeDisposable,
	ViewDataAttributeDisposable,
	ViewComponentAttributeDisposable,
	ServiceFilterAttributeDisposable,
	SerializableAttributeDisposable,
	SkipStatusCodePagesAttributeDisposable,
	STAThreadAttributeDisposable,
	TypeAttributeDisposable,
	TempDataAttributeDisposable,
	ThreadStaticAttributeDisposable,
	TypeFilterAttributeDisposable } from './System/ApiControllerAttribute';
import { AppContextDisposable } from './System/AppContext';
import { AppDomainDisposable } from './System/AppDomain';
import { arrayDisposable } from './System/Array';
import { AssemblyDisposable, AssemblyFlagsDisposable, AssemblyHashAlgorithmDisposable, AssemblyNameDisposable, AssemblyNameFlagsDisposable } from './System/Assembly';
import { AttributeTargetsDisposable } from './System/AttributeTargets';
import { BooleanDisposable } from './System/Boolean';
import { BufferDisposable } from './System/Buffer';
import { ByteDisposable, DecimalDisposable, DoubleDisposable, Int16Disposable, Int32Disposable, Int64Disposable, intDisposable, IntPtrDisposable } from './System/Byte';
import { AttributeInstanceDisposable } from './System/Class.instance/atribute.instance';
import { ArrayInstanceDisposable } from './System/Collections/Generic/Array.instance';
import { DictionaryInstanceDisposable } from './System/Collections/Generic/Dictionary.instance';
import { HashSetInstanceDisposable } from './System/Collections/Generic/HashSet.instance';
import { LinkedListInstanceDisposable } from './System/Collections/Generic/LinkedList.instance';
import { ListInstanceDisposable } from './System/Collections/Generic/List.instance';
import { QueueInstanceDisposable } from './System/Collections/Generic/Queue.instance';
import { StackInstanceDisposable } from './System/Collections/Generic/Stack.instance';
import { consoleDisposable } from './System/Console';
import { BitConverterDisposable, convertDisposable } from './System/Convert';
import { DateTimeInstanceDisposable } from './System/Datatypes.Instance/DateTime.instance';
import { StringInstanceDisposable } from './System/Datatypes.Instance/string.instance';
import { NumberInstanceDisposable } from './System/Datatypes.Instance/number.instance';
import { dateTimeDisposable } from './System/DateTime';
import { drawingImageDisposable } from './System/Drawing/Image';
import { EnumDisposable } from './System/Enum';
import { EnvironmentDisposable } from './System/Environment';
import { guidDisposable } from './System/Guid';
import { HttpMethodDisposable } from './System/HttpMethod';
import { ImmutableArrayExtensionsDisposable } from './System/ImmutableArrayExtensions';
import { IndexDisposable } from './System/Index';
import { JObjectDisposable } from './System/JObject';
import { JsonConvertDisposable } from './System/JsonConvert';
import { mathDisposable } from './System/Math';
import { ParallelDisposable } from './System/Parallel';
import { QueryableDisposable } from './System/Queryable';
import { stringDisposable } from './System/String';
import { TaskDisposable } from './System/Task';
import { ToStringDisposable } from './System/ToString';
import { uriDisposable } from './System/Uri';
import { AssemblyInstanceDisposable } from './System/Class.instance/assembly.instance';


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
				var classes = json.Classes as string[];
				var events = json.Events as string[];
				var structs = json.Struts as string[]

				for (let index = 0; index < classes.length; index++) {
					
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(classes[index]);
					completionItem.detail = classes[index];
					completionItem.filterText = classes[index];
					completionItem.insertText = classes[index];
					completionItem.kind = vscode.CompletionItemKind.Class;
					completionItems.push(completionItem);
					
				}

				for (let index = 0; index < structs.length; index++) {
					
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(structs[index]);
					completionItem.detail = structs[index];
					completionItem.filterText = structs[index];
					completionItem.insertText = structs[index];
					completionItem.kind = vscode.CompletionItemKind.Struct;
					completionItems.push(completionItem);
					
				}

				for (let index = 0; index < events.length; index++) {
					
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(events[index]);
					completionItem.detail = events[index];
					completionItem.filterText = events[index];
					completionItem.insertText = events[index];
					completionItem.kind = vscode.CompletionItemKind.Event;
					completionItems.push(completionItem);
					
				}
				
				
				return resolve(completionItems);
				});
			},
		
		});
		
		
		
	});
	


	context.subscriptions.push(disposable,
		consoleDisposable, 
		NumberInstanceDisposable,
		AssemblyInstanceDisposable,
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
		ActionDisposable,
		AssemblyLoadEventHandlerDisposable,
		ActivatorDisposable,
		AppDomainDisposable,
		AppContextDisposable,
		ApiControllerAttributeDisposable,
		ApiConventionMethodAttributeDisposable,
		ApiConventionTypeAttributeDisposable,
		ApiExplorerSettingsAttributeDisposable,
		AreaAttributeDisposable,
		AssemblyAlgorithmIdAttributeDisposable,
		AssemblyCompanyAttributeDisposable,
		AssemblyConfigurationAttributeDisposable,
		AssemblyCopyrightAttributeDisposable,
		AssemblyCultureAttributeDisposable,
		AssemblyDefaultAliasAttributeDisposable,
		AssemblyDelaySignAttributeDisposable,
		AssemblyDescriptionAttributeDisposable,
		AssemblyFileVersionAttributeDisposable,
		AssemblyFlagsAttributeDisposable,
		AssemblyInformationalVersionAttributeDisposable,
		AssemblyKeyFileAttributeDisposable,
		AssemblyKeyNameAttributeDisposable,
		AssemblyMetadataAttributeDisposable,
		AssemblyProductAttributeDisposable,
		AssemblySignatureKeyAttributeDisposable,
		AssemblyTitleAttributeDisposable,
		AssemblyTrademarkAttributeDisposable,
		AssemblyVersionAttributeDisposable,
		IgnoreAntiforgeryTokenAttributeDisposable,
		AssemblyDisposable,
		AssemblyNameFlagsDisposable,
		AssemblyNameDisposable,
		AssemblyHashAlgorithmDisposable,
		AssemblyFlagsDisposable,
		AttributeDisposable,
		AutoValidateAntiforgeryTokenAttributeDisposable,
		AttributeUsageAttributeDisposable,
		AttributeTargetsDisposable,
		BindAttributeDisposable,
		BindPropertiesAttributeDisposable,
		BindPropertyAttributeDisposable,
		BitConverterDisposable,
		BooleanDisposable,
		BufferDisposable,
		ByteDisposable,
		QueryableDisposable,
		ImmutableArrayExtensionsDisposable,
		IndexDisposable,
		Int16Disposable,
		Int32Disposable,
		Int64Disposable,
		intDisposable,
		IntPtrDisposable,
		DefaultMemberAttributeDisposable,
		DisableRequestSizeLimitAttributeDisposable,
		FlagsAttributeDisposable,
		FromBodyAttributeDisposable,
		FromFormAttributeDisposable,
		FromHeaderAttributeDisposable,
		FromQueryAttributeDisposable,
		FromRouteAttributeDisposable,
		FromServicesAttributeDisposable,
		HiddenInputAttributeDisposable,
		HttpDeleteAttributeDisposable,
		HttpGetAttributeDisposable,
		HttpHeadAttributeDisposable,
		HttpOptionsAttributeDisposable,
		HttpPatchAttributeDisposable,
		HttpPostAttributeDisposable,
		HttpPutAttributeDisposable,
		JsonArrayAttributeDisposable,
		JsonConstructorAttributeDisposable,
		JsonContainerAttributeDisposable,
		JsonConverterAttributeDisposable,
		JsonDictionaryAttributeDisposable,
		JsonExtensionDataAttributeDisposable,
		JsonIgnoreAttributeDisposable,
		JsonObjectAttributeDisposable,
		JsonRequiredAttributeDisposable,
		JsonPropertyAttributeDisposable,
		MiddlewareFilterAttributeDisposable,
		ModelBinderAttributeDisposable,
		ModelMetadataTypeAttributeDisposable,
		MTAThreadAttributeDisposable,
		NonActionAttributeDisposable,
		NonControllerAttributeDisposable,
		NonSerializedAttributeDisposable,
		NonViewComponentAttributeDisposable,
		ObfuscateAssemblyAttributeDisposable,
		ObfuscationAttributeDisposable,
		ObsoleteAttributeDisposable,
		PageRemoteAttributeDisposable,
		ParamArrayAttributeDisposable,
		ProducesAttributeDisposable,
		ProducesDefaultResponseTypeAttributeDisposable,
		ProducesErrorResponseTypeAttributeDisposable,
		ProducesResponseTypeAttributeDisposable,
		ValidateAntiForgeryTokenAttributeDisposable,
		ViewDataAttributeDisposable,
		ViewComponentAttributeDisposable,
		ServiceFilterAttributeDisposable,
		SerializableAttributeDisposable,
		SkipStatusCodePagesAttributeDisposable,
		STAThreadAttributeDisposable,
		TypeAttributeDisposable,
		TempDataAttributeDisposable,
		ThreadStaticAttributeDisposable,
		TypeFilterAttributeDisposable,
		DoubleDisposable,
		DecimalDisposable,
		DelegateDisposable,
		EventHandlerDisposable,
		ToStringDisposable,
		EnumDisposable,
        EnvironmentDisposable,
        HttpMethodDisposable,
        JObjectDisposable,
        JsonConvertDisposable,
        ParallelDisposable,
        TaskDisposable,
		AttributeInstanceDisposable
		);
}
            //int uint ulong long float double decimal short ushort byte sbyte char bool object
// this method is called when your extension is deactivated
export function deactivate() {}