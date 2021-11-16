// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { Item } from './Models/Item';
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
import { consoleDisposable } from './System/Console';
import { BitConverterDisposable, convertDisposable } from './System/Convert';
import { dateTimeDisposable } from './System/DateTime';
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
				var classes = json.Classes as string[];
				var events = json.Events as string[];
				var structs = json.Struts as string[];
				var Keywords = json.Keywords as string[];

				for (let index = 0; index < Keywords.length; index++) {
					
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(Keywords[index]);
					completionItem.detail = Keywords[index];
					completionItem.filterText = Keywords[index];
					completionItem.insertText = Keywords[index];
					completionItem.kind = vscode.CompletionItemKind.Keyword;
					completionItems.push(completionItem);
					
				}

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
				
				for (let index = 0; index < autolst.length; index++) {
					var completionItem:vscode.CompletionItem = new vscode.CompletionItem(autolst[index].Id);
					completionItem.detail = autolst[index].Id;
					completionItem.filterText = autolst[index].Id;
					completionItem.insertText = autolst[index].Name;
					completionItem.kind = vscode.CompletionItemKind.Snippet;
					completionItems.push(completionItem);
					
				}
	
				
				return resolve(completionItems);
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
		dateTimeDisposable,
		guidDisposable,
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
		);
}
            //int uint ulong long float double decimal short ushort byte sbyte char bool object
// this method is called when your extension is deactivated
export function deactivate() {}