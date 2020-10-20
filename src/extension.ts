// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { App } from './app';
import * as path from 'path';




// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let radonCttOutputChannel: vscode.OutputChannel = vscode.window.createOutputChannel("Radon CTT");
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Extension "radon-ctt-ide-plugin" activated.');

	let runWithConfig = vscode.commands.registerCommand('radon-ctt-ide-plugin.runWithConfig', (cttConfigFile:vscode.Uri) => {
		vscode.window.showInformationMessage('CTT test execution started.');
		
		try {	
			radonCttOutputChannel.show();
			const cttApp = new App('http://0.0.0.0:18080/RadonCTT', cttConfigFile.fsPath, path.dirname(cttConfigFile.fsPath));
			cttApp.runCTT(radonCttOutputChannel);
		} catch (e) {
			console.log(e);
		}
	});

	context.subscriptions.push(runWithConfig);
}

// this method is called when your extension is deactivated
export function deactivate() {}
