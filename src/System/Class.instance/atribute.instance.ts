import { triggerAsyncId } from 'async_hooks';
import { kMaxLength } from 'buffer';
import * as vscode from 'vscode';
import { UnCheck } from '../../Ext/External.Methods';


export const AttributeInstanceDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> 
        {
            const listVariables = Array<string>();
            const endsWithBooleans = [];
           
            if (document.getText().includes("ApiControllerAttribute ") 
            || document.getText().includes("ApiConventionMethodAttribute ")
            || document.getText().includes("ApiConventionTypeAttribute ")
            || document.getText().includes("ApiExplorerSettingsAttribute ")
            || document.getText().includes("AreaAttribute ")
            || document.getText().includes("AssemblyAlgorithmIdAttribute ")
            || document.getText().includes("AssemblyCompanyAttribute ")
            || document.getText().includes("AssemblyConfigurationAttribute ")
            || document.getText().includes("AssemblyCopyrightAttribute ")
            || document.getText().includes("AssemblyCultureAttribute ")
            || document.getText().includes("AssemblyDefaultAliasAttribute ")
            || document.getText().includes("AssemblyDelaySignAttribute ")
            || document.getText().includes("AssemblyDescriptionAttribute ")
            || document.getText().includes("AssemblyFileVersionAttribute ")
            || document.getText().includes("AssemblyFlagsAttribute ")
            || document.getText().includes("AssemblyInformationalVersionAttribute ")
            || document.getText().includes("AssemblyKeyFileAttribute ")
            || document.getText().includes("AssemblyKeyNameAttribute ")
            || document.getText().includes("AssemblyMetadataAttribute ")
            || document.getText().includes("AssemblyProductAttribute ")
            || document.getText().includes("AssemblySignatureKeyAttribute ")
            || document.getText().includes("AssemblyTitleAttribute ")
            || document.getText().includes("AssemblyTrademarkAttribute ")
            || document.getText().includes("AssemblyVersionAttribute ")
            || document.getText().includes("IgnoreAntiforgeryTokenAttribute ")
            || document.getText().includes("DefaultMemberAttribute ")
            || document.getText().includes("DisableRequestSizeLimitAttribute ")
            || document.getText().includes("FlagsAttribute ")
            || document.getText().includes("FromBodyAttribute ")
            || document.getText().includes("FromFormAttribute ")
            || document.getText().includes("FromHeaderAttribute ")
            || document.getText().includes("FromQueryAttribute ")
            || document.getText().includes("FromRouteAttribute ")
            || document.getText().includes("FromServicesAttribute ")
            || document.getText().includes("HiddenInputAttribute ")
            || document.getText().includes("HttpDeleteAttribute ")
            || document.getText().includes("HttpGetAttribute ")
            || document.getText().includes("HttpHeadAttribute ")
            || document.getText().includes("HttpOptionsAttribute ")
            || document.getText().includes("HttpPatchAttribute ")
            || document.getText().includes("HttpPostAttribute ")
            || document.getText().includes("HttpPutAttribute ")
            || document.getText().includes("JsonArrayAttribute ")
            || document.getText().includes("JsonConstructorAttribute ")
            || document.getText().includes("JsonContainerAttribute ")
            || document.getText().includes("JsonConverterAttribute ")
            || document.getText().includes("JsonDictionaryAttribute ")
            || document.getText().includes("JsonExtensionDataAttribute ")
            || document.getText().includes("JsonIgnoreAttribute ")
            || document.getText().includes("JsonObjectAttribute ")
            || document.getText().includes("JsonRequiredAttribute ")
            || document.getText().includes("JsonPropertyAttribute ")
            || document.getText().includes("MiddlewareFilterAttribute ")
            || document.getText().includes("ModelBinderAttribute ")
            || document.getText().includes("ModelMetadataTypeAttribute ")
            || document.getText().includes("MTAThreadAttribute ")
            || document.getText().includes("NonActionAttribute ")
            || document.getText().includes("NonControllerAttribute ")
            || document.getText().includes("NonSerializedAttribute ")
            || document.getText().includes("NonViewComponentAttribute ")
            || document.getText().includes("ObfuscateAssemblyAttribute ")
            || document.getText().includes("ObfuscationAttribute ")
            || document.getText().includes("ObsoleteAttribute ")
            || document.getText().includes("PageRemoteAttribute ")
            || document.getText().includes("ParamArrayAttribute ")
            || document.getText().includes("ProducesAttribute ")
            || document.getText().includes("ProducesDefaultResponseTypeAttribute ")
            || document.getText().includes("ProducesErrorResponseTypeAttribute ")
            || document.getText().includes("ProducesResponseTypeAttribute ")
            || document.getText().includes("ValidateAntiForgeryTokenAttribute ")
            || document.getText().includes("ViewDataAttribute ")
            || document.getText().includes("ViewComponentAttribute ")
            || document.getText().includes("ServiceFilterAttribute ")
            || document.getText().includes("SerializableAttribute ")
            || document.getText().includes("SkipStatusCodePagesAttribute ")
            || document.getText().includes("STAThreadAttribute ")
            || document.getText().includes("TypeAttribute ")
            || document.getText().includes("TempDataAttribute ")
            || document.getText().includes("ThreadStaticAttribute ")
            || document.getText().includes("TypeFilterAttribute ")
            || document.getText().includes("Attribute ")
            || document.getText().includes("AutoValidateAntiforgeryTokenAttribute ")
            || document.getText().includes("AttributeUsageAttribute ")
            || document.getText().includes("AttributeTargets ")
            || document.getText().includes("BindAttribute ")
            || document.getText().includes("BindPropertiesAttribute ")
            || document.getText().includes("BindPropertyAttribute ")

            ) {
                for (let i = 1; i < document.lineCount; i++) {
                    var line = document.lineAt(i).text;
                    if(line.includes("ApiControllerAttribute ") 
                    || line.includes("ApiConventionMethodAttribute ")
                    || line.includes("ApiConventionTypeAttribute ")
                    || line.includes("ApiExplorerSettingsAttribute ")
                    || line.includes("AreaAttribute ")
                    || line.includes("AssemblyAlgorithmIdAttribute ")
                    || line.includes("AssemblyCompanyAttribute ")
                    || line.includes("AssemblyConfigurationAttribute ")
                    || line.includes("AssemblyCopyrightAttribute ")
                    || line.includes("AssemblyCultureAttribute ")
                    || line.includes("AssemblyDefaultAliasAttribute ")
                    || line.includes("AssemblyDelaySignAttribute ")
                    || line.includes("AssemblyDescriptionAttribute ")
                    || line.includes("AssemblyFileVersionAttribute ")
                    || line.includes("AssemblyFlagsAttribute ")
                    || line.includes("AssemblyInformationalVersionAttribute ")
                    || line.includes("AssemblyKeyFileAttribute ")
                    || line.includes("AssemblyKeyNameAttribute ")
                    || line.includes("AssemblyMetadataAttribute ")
                    || line.includes("AssemblyProductAttribute ")
                    || line.includes("AssemblySignatureKeyAttribute ")
                    || line.includes("AssemblyTitleAttribute ")
                    || line.includes("AssemblyTrademarkAttribute ")
                    || line.includes("AssemblyVersionAttribute ")
                    || line.includes("IgnoreAntiforgeryTokenAttribute ")
                    || line.includes("DefaultMemberAttribute ")
                    || line.includes("DisableRequestSizeLimitAttribute ")
                    || line.includes("FlagsAttribute ")
                    || line.includes("FromBodyAttribute ")
                    || line.includes("FromFormAttribute ")
                    || line.includes("FromHeaderAttribute ")
                    || line.includes("FromQueryAttribute ")
                    || line.includes("FromRouteAttribute ")
                    || line.includes("FromServicesAttribute ")
                    || line.includes("HiddenInputAttribute ")
                    || line.includes("HttpDeleteAttribute ")
                    || line.includes("HttpGetAttribute ")
                    || line.includes("HttpHeadAttribute ")
                    || line.includes("HttpOptionsAttribute ")
                    || line.includes("HttpPatchAttribute ")
                    || line.includes("HttpPostAttribute ")
                    || line.includes("HttpPutAttribute ")
                    || line.includes("JsonArrayAttribute ")
                    || line.includes("JsonConstructorAttribute ")
                    || line.includes("JsonContainerAttribute ")
                    || line.includes("JsonConverterAttribute ")
                    || line.includes("JsonDictionaryAttribute ")
                    || line.includes("JsonExtensionDataAttribute ")
                    || line.includes("JsonIgnoreAttribute ")
                    || line.includes("JsonObjectAttribute ")
                    || line.includes("JsonRequiredAttribute ")
                    || line.includes("JsonPropertyAttribute ")
                    || line.includes("MiddlewareFilterAttribute ")
                    || line.includes("ModelBinderAttribute ")
                    || line.includes("ModelMetadataTypeAttribute ")
                    || line.includes("MTAThreadAttribute ")
                    || line.includes("NonActionAttribute ")
                    || line.includes("NonControllerAttribute ")
                    || line.includes("NonSerializedAttribute ")
                    || line.includes("NonViewComponentAttribute ")
                    || line.includes("ObfuscateAssemblyAttribute ")
                    || line.includes("ObfuscationAttribute ")
                    || line.includes("ObsoleteAttribute ")
                    || line.includes("PageRemoteAttribute ")
                    || line.includes("ParamArrayAttribute ")
                    || line.includes("ProducesAttribute ")
                    || line.includes("ProducesDefaultResponseTypeAttribute ")
                    || line.includes("ProducesErrorResponseTypeAttribute ")
                    || line.includes("ProducesResponseTypeAttribute ")
                    || line.includes("ValidateAntiForgeryTokenAttribute ")
                    || line.includes("ViewDataAttribute ")
                    || line.includes("ViewComponentAttribute ")
                    || line.includes("ServiceFilterAttribute ")
                    || line.includes("SerializableAttribute ")
                    || line.includes("SkipStatusCodePagesAttribute ")
                    || line.includes("STAThreadAttribute ")
                    || line.includes("TypeAttribute ")
                    || line.includes("TempDataAttribute ")
                    || line.includes("ThreadStaticAttribute ")
                    || line.includes("TypeFilterAttribute ")
                    || line.includes("Attribute ")
                    || line.includes("AutoValidateAntiforgeryTokenAttribute ")
                    || line.includes("AttributeUsageAttribute ")
                    || line.includes("AttributeTargets ")
                    || line.includes("BindAttribute ")
                    || line.includes("BindPropertiesAttribute ")
                    || line.includes("BindPropertyAttribute ")

                    ) {
                        var lineArray = line.split(" ");
                        lineArray = lineArray.filter(e => String(e).trim());
                        listVariables.push(lineArray[1]);
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
            var Methods = json.System.ApiControllerAttribute.Methods as string[];
            
            
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
