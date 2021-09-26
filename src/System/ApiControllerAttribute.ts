import * as vscode from 'vscode';
import { ToCheck, UnCheck } from '../Ext/External.Methods';




export const ApiControllerAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ApiControllerAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const ApiConventionMethodAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ApiConventionMethodAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const ApiConventionTypeAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ApiConventionTypeAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const TypeAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('TypeAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ApiExplorerSettingsAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ApiExplorerSettingsAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const AreaAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AreaAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);



export const AssemblyAlgorithmIdAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyAlgorithmIdAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);




export const AssemblyCompanyAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyCompanyAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyConfigurationAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyConfigurationAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyCopyrightAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyCopyrightAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyCultureAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyCultureAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const AssemblyDefaultAliasAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyDefaultAliasAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyDelaySignAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyDelaySignAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyDescriptionAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyDescriptionAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyFileVersionAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyFileVersionAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyFlagsAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyFlagsAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyInformationalVersionAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyInformationalVersionAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyKeyFileAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyKeyFileAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyKeyNameAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyKeyNameAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyMetadataAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyMetadataAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyProductAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyProductAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblySignatureKeyAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblySignatureKeyAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyTitleAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyTitleAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyTrademarkAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyTrademarkAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AssemblyVersionAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AssemblyVersionAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('Attribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const AutoValidateAntiforgeryTokenAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AutoValidateAntiforgeryTokenAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const AttributeUsageAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('AttributeUsageAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);




export const BindAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('BindAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const BindPropertiesAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('BindPropertiesAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const BindPropertyAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('BindPropertyAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const IgnoreAntiforgeryTokenAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('IgnoreAntiforgeryTokenAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);


export const DefaultMemberAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('DefaultMemberAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const DisableRequestSizeLimitAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('DisableRequestSizeLimitAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const FlagsAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('FlagsAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const FromBodyAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('FromBodyAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const FromFormAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('FromFormAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const FromHeaderAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('FromHeaderAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const FromQueryAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('FromQueryAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const FromRouteAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('FromRouteAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const FromServicesAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('FromServicesAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const HiddenInputAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HiddenInputAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);
 
 export const HttpDeleteAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpDeleteAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);
 
 export const HttpGetAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpGetAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const HttpHeadAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpHeadAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const HttpOptionsAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpOptionsAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const HttpPatchAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpPatchAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const HttpPostAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpPostAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const HttpPutAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('HttpPutAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonArrayAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonArrayAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonConstructorAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonConstructorAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonContainerAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonContainerAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonConverterAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonConverterAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonDictionaryAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonDictionaryAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonExtensionDataAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonExtensionDataAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonIgnoreAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonIgnoreAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonObjectAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonObjectAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonRequiredAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonRequiredAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const JsonPropertyAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('JsonPropertyAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const MiddlewareFilterAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('MiddlewareFilterAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ModelBinderAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ModelBinderAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ModelMetadataTypeAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ModelMetadataTypeAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const MTAThreadAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('MTAThreadAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const NonActionAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('NonActionAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const NonControllerAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('NonControllerAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const NonSerializedAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('NonSerializedAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const NonViewComponentAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('NonViewComponentAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ObfuscateAssemblyAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ObfuscateAssemblyAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ObfuscationAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ObfuscationAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ObsoleteAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ObsoleteAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const PageRemoteAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('PageRemoteAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ParamArrayAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ParamArrayAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ProducesAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ProducesAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ProducesDefaultResponseTypeAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ProducesDefaultResponseTypeAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ProducesErrorResponseTypeAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ProducesErrorResponseTypeAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ProducesResponseTypeAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ProducesResponseTypeAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ValidateAntiForgeryTokenAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ValidateAntiForgeryTokenAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ViewDataAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ViewDataAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ViewComponentAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ViewComponentAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ServiceFilterAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ServiceFilterAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const SerializableAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('SerializableAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const SkipStatusCodePagesAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('SkipStatusCodePagesAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const STAThreadAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('STAThreadAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const TypeAttributesDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('TypeAttributes.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const TempDataAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('TempDataAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const ThreadStaticAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('ThreadStaticAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);

export const TypeFilterAttributeDisposable = vscode.languages.registerCompletionItemProvider(
    'csharp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('TypeFilterAttribute.')) {
                return undefined;
            }
            var json = require('../Json/trial.json');
            var methods = json.System.ApiControllerAttribute.Methods as string[];

            const completionItemslst : Array<vscode.CompletionItem> =  [];
            
            
            for (let i = 0; i < methods.length; i++) {
               var ob = new vscode.CompletionItem(UnCheck(methods[i]), vscode.CompletionItemKind.Method)
               completionItemslst.push(ob);
                
            }

            return completionItemslst;
            
            
        }
    },
    '.'
);
