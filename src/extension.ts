import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Code Caffeine Mood-Based Themes Extension Activated!');

  // Register the "helloWorld" command
  let disposable = vscode.commands.registerCommand('code-caffeine-mood-based-themes.helloWorld', () => {
    vscode.window.showInformationMessage('Code Caffeine Mood-Based Themes!');
  });

  // Register the "changeTheme" command with a picker
  let changeThemeDisposable = vscode.commands.registerCommand('code-caffeine-mood-based-themes.changeTheme', async () => {
    // List of available themes
    const themes = [
      // Light themes
      'Light+ (default light)',
      'Solarized Light',
      'Quiet Light',
      'Ayu Light',
      'GitHub Light',
    
      // Dark themes
      'Dark+ (default dark)',
      'Monokai',
      'Abyss',
      'Dracula',
      'One Dark Pro',
      'Night Owl',
      'Cobalt2',
      'Material Theme Darker',
    
      // Colorful themes
      'Shades of Purple',
      'Nord',
      'Oceanic Next',
      'Solarized Dark',
      'Cyanotype',
      'Palenight',
    
      // Other popular themes
      'Gruvbox',
      'Papaya',
      'SynthWave ’84',
      'City Lights',
      'Atom One Dark',
      'Tokyo Night',
      'Visual Studio Dark'
    ];
    

    // Prompt user to select a theme
    const selectedTheme = await vscode.window.showQuickPick(themes, {
      placeHolder: 'Choose a theme for your editor'
    });

    if (selectedTheme) {
      // Update the theme
      vscode.workspace.getConfiguration().update('workbench.colorTheme', selectedTheme, vscode.ConfigurationTarget.Global);
      vscode.window.showInformationMessage(`Theme changed to "${selectedTheme}"!`);
    }
  });

  // Add the disposables to clean up when the extension is deactivated
  context.subscriptions.push(disposable);
  context.subscriptions.push(changeThemeDisposable);
}

export function deactivate() {
  console.log('Code Caffeine Mood-Based Themes Extension Deactivated!');
}
