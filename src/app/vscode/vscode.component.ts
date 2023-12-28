import { Component } from '@angular/core';

@Component({
  selector: 'app-vscode',
  standalone: true,
  imports: [],
  templateUrl: './vscode.component.html',
  styleUrl: './vscode.component.css',
})
export class VscodeComponent {
  general: Shortcut[] = [
    { Keybinding: 'Ctrl+Shift+P, F1', Command: 'Show Command Palette' },
    {
      Keybinding: 'Ctrl+P',
      Command: 'Quick Open, Go to File…',
    },
    { Keybinding: 'Ctrl+Shift+N', Command: 'New window/instance' },
    { Keybinding: 'Ctrl+Shift+W', Command: 'Close window/instance' },
    { Keybinding: 'Ctrl+,', Command: 'User Settings' },
    { Keybinding: 'Ctrl+K Ctrl+S', Command: 'Keyboard Shortcuts' },
  ];

  basicEditing: Shortcut[] = [
    {Keybinding: 'Ctrl+X', Command: 'Cut line (empty selection)'}
    ,{Keybinding: 'Ctrl+C', Command: 'Copy line (empty selection)'},
    {Keybinding: 'Alt+ ↑ / ↓', Command: 'Move line up/down'},
    {Keybinding: 'Shift+Alt + ↓ / ↑', Command: 'Copy line up/down'},
    {Keybinding: 'Ctrl+Shift+K', Command: 'Delete line'},
    {Keybinding: 'Ctrl+Enter', Command: 'Insert line below'},
    {Keybinding: 'Ctrl+Shift+Enter', Command: 'Insert line above'},
    {Keybinding: 'Ctrl+Shift+\\', Command: 'Jump to matching bracket'}
  ]

// Ctrl+] / [ Indent/outdent line
// Home / End Go to beginning/end of line
// Ctrl+Home Go to beginning of file
// Ctrl+End Go to end of file
// Ctrl+↑ / ↓ Scroll line up/down
// Alt+PgUp / PgDn Scroll page up/down
// Ctrl+Shift+[ Fold (collapse) region
// Ctrl+Shift+] Unfold (uncollapse) region
// Ctrl+K Ctrl+[ Fold (collapse) all subregions
// Ctrl+K Ctrl+] Unfold (uncollapse) all subregions
// Ctrl+K Ctrl+0 Fold (collapse) all regions
// Ctrl+K Ctrl+J Unfold (uncollapse) all regions
// Ctrl+K Ctrl+C Add line comment
// Ctrl+K Ctrl+U Remove line comment
// Ctrl+/ Toggle line comment
// Shift+Alt+A Toggle block comment
// Alt+Z Toggle word wrap

}
