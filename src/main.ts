import * as vscode from 'vscode';

// Main entry point of the extension
export function activate(context: vscode.ExtensionContext) {
  console.log('Code Caffeine Mood-Based Themes Extension is now active!');

  // Register the 'helloWorld' command
  let disposable = vscode.commands.registerCommand('code-caffeine-mood-based-themes.helloWorld', () => {
    vscode.window.showInformationMessage('Code Caffeine Mood-Based Themes!');
  });

  // Push the disposable to the subscriptions array so it will be disposed properly
  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('Code Caffeine Mood-Based Themes Extension is now deactivated!');
}
