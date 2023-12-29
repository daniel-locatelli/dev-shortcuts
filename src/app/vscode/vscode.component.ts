import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vscode',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vscode.component.html',
  styleUrl: './vscode.component.css',
  host: {
    class: 'shortcuts'
  }
})
export class VscodeComponent {
  general: Shortcut[] = [
    { Keybinding: 'Ctrl+Shift+P, F1', Command: 'Show Command Palette' },
    { Keybinding: 'Ctrl+P', Command: 'Quick Open, Go to File…' },
    { Keybinding: 'Ctrl+Shift+N', Command: 'New window/instance' },
    { Keybinding: 'Ctrl+Shift+W', Command: 'Close window/instance' },
    { Keybinding: 'Ctrl+,', Command: 'User Settings' },
    { Keybinding: 'Ctrl+K Ctrl+S', Command: 'Keyboard Shortcuts' },
  ];

  basicEditing: Shortcut[] = [
    { Keybinding: 'Ctrl+X', Command: 'Cut line (empty selection)' },
    { Keybinding: 'Ctrl+C', Command: 'Copy line (empty selection)' },
    { Keybinding: 'Alt+ ↑ / ↓', Command: 'Move line up/down' },
    { Keybinding: 'Shift+Alt + ↓ / ↑', Command: 'Copy line up/down' },
    { Keybinding: 'Ctrl+Shift+K', Command: 'Delete line' },
    { Keybinding: 'Ctrl+Enter', Command: 'Insert line below' },
    { Keybinding: 'Ctrl+Shift+Enter', Command: 'Insert line above' },
    { Keybinding: 'Ctrl+Shift+\\', Command: 'Jump to matching bracket' },
    { Keybinding: 'Ctrl+] / [', Command: 'Indent/outdent line' },
    { Keybinding: 'Home / End', Command: 'Go to beginning/end of line' },
    { Keybinding: 'Ctrl+Home', Command: 'Go to beginning of file' },
    { Keybinding: 'Ctrl+End', Command: 'Go to end of file' },
    { Keybinding: 'Ctrl+↑ / ↓', Command: 'Scroll line up/down' },
    { Keybinding: 'Alt+PgUp / PgDn', Command: 'Scroll page up/down' },
    { Keybinding: 'Ctrl+Shift+[', Command: 'Fold (collapse) region' },
    { Keybinding: 'Ctrl+Shift+]', Command: 'Unfold (uncollapse) region' },
    { Keybinding: 'Ctrl+K Ctrl+[', Command: 'Fold (collapse) all subregions' },
    { Keybinding: 'Ctrl+K Ctrl+]', Command: 'Unfold (uncollapse) all subregions' },
    { Keybinding: 'Ctrl+K Ctrl+0', Command: 'Fold (collapse) all regions' },
    { Keybinding: 'Ctrl+K Ctrl+J', Command: 'Unfold (uncollapse) all regions' },
    { Keybinding: 'Ctrl+K Ctrl+C', Command: 'Add line comment' },
    { Keybinding: 'Ctrl+K Ctrl+U', Command: 'Remove line comment' },
    { Keybinding: 'Ctrl+/', Command: 'Toggle line comment' },
    { Keybinding: 'Shift+Alt+A', Command: 'Toggle block comment' },
    { Keybinding: 'Alt+Z', Command: 'Toggle word wrap' },
  ];

  navigation: Shortcut[] = [
    { Keybinding: 'Ctrl+T', Command: 'Show all Symbols' },
    { Keybinding: 'Ctrl+G', Command: 'Go to Line...' },
    { Keybinding: 'Ctrl+P', Command: 'Go to File...' },
    { Keybinding: 'Ctrl+Shift+O', Command: 'Go to Symbol...' },
    { Keybinding: 'Ctrl+Shift+M', Command: 'Show Problems panel' },
    { Keybinding: 'F8', Command: 'Go to next error or warning' },
    { Keybinding: 'Shift+F8', Command: 'Go to previous error or warning' },
    { Keybinding: 'Ctrl+Shift+Tab', Command: 'Navigate editor group history' },
    { Keybinding: 'Alt+ ← / →', Command: 'Go back / forward' },
    { Keybinding: 'Ctrl+M', Command: 'Toggle Tab moves focus' },
  ];

  searchAndReplace: Shortcut[] = [
    { Keybinding: 'Ctrl+F', Command: 'Find' },
    { Keybinding: 'Ctrl+H', Command: 'Replace' },
    { Keybinding: 'F3 / Shift+F3', Command: 'Find next/previous' },
    { Keybinding: 'Alt+Enter', Command: 'Select all occurences of Find match' },
    { Keybinding: 'Ctrl+D', Command: 'Add selection to next Find match' },
    { Keybinding: 'Ctrl+K Ctrl+D', Command: 'Move last selection to next Find match' },
    { Keybinding: 'Alt+C / R / W', Command: 'Toggle case-sensitive / regex / whole word' },
  ];

  multiCursorAndSelection: Shortcut[] = [
    { Keybinding: 'Alt+Click', Command: 'Insert cursor' },
    { Keybinding: 'Ctrl+Alt+ ↑ / ↓', Command: 'Insert cursor above / below' },
    { Keybinding: 'Ctrl+U', Command: 'Undo last cursor operation' },
    { Keybinding: 'Shift+Alt+I', Command: 'Insert cursor at end of each line selected' },
    { Keybinding: 'Ctrl+L', Command: 'Select current line' },
    { Keybinding: 'Ctrl+Shift+L', Command: 'Select all occurrences of current selection' },
    { Keybinding: 'Ctrl+F2', Command: 'Select all occurrences of current word' },
    { Keybinding: 'Shift+Alt+→', Command: 'Expand selection' },
    { Keybinding: 'Shift+Alt+←', Command: 'Shrink selection' },
    { Keybinding: 'Shift+Alt+(drag mouse)', Command: 'Column (box) selection' },
    { Keybinding: 'Ctrl+Shift+Alt+(arrow key)', Command: 'Column (box) selection' },
    { Keybinding: 'Ctrl+Shift+Alt+PgUp/PgDn', Command: 'Column (box) selection page up/down' },
  ];

  richLanguagesEditing: Shortcut[] = [
    { Keybinding: 'Ctrl+Space, Ctrl+I', Command: 'Trigger suggestion' },
    { Keybinding: 'Ctrl+Shift+Space', Command: 'Trigger parameter hints' },
    { Keybinding: 'Shift+Alt+F', Command: 'Format document' },
    { Keybinding: 'Ctrl+K Ctrl+F', Command: 'Format selection' },
    { Keybinding: 'F12', Command: 'Go to Definition' },
    { Keybinding: 'Alt+F12', Command: 'Peek Definition' },
    { Keybinding: 'Ctrl+K F12', Command: 'Open Definition to the side' },
    { Keybinding: 'Ctrl+.', Command: 'Quick Fix' },
    { Keybinding: 'Shift+F12', Command: 'Show References' },
    { Keybinding: 'F2', Command: 'Rename Symbol' },
    { Keybinding: 'Ctrl+K Ctrl+X', Command: 'Trim trailing whitespace' },
    { Keybinding: 'Ctrl+K M', Command: 'Change file language' },
  ];

  editorManagement: Shortcut[] = [
    { Keybinding: 'Ctrl+F4, Ctrl+W', Command: 'Close editor' },
    { Keybinding: 'Ctrl+K F', Command: 'Close folder' },
    { Keybinding: 'Ctrl+\\', Command: 'Split editor' },
    { Keybinding: 'Ctrl+ 1 / 2 / 3', Command: 'Ctrl+ 1 / 2 / 3 Focus into 1st, 2nd or 3rd editor group' },
    { Keybinding: 'Ctrl+K Ctrl+ ←/→', Command: 'Focus into previous/next editor group' },
    { Keybinding: 'Ctrl+Shift+PgUp / PgDn', Command: 'Move editor left/right' },
    { Keybinding: 'Ctrl+K ← / →', Command: 'Move active editor group' },
  ];

  fileManagement: Shortcut[] = [
    { Keybinding: 'Ctrl+N', Command: 'New File' },
    { Keybinding: 'Ctrl+O', Command: 'Open File...' },
    { Keybinding: 'Ctrl+S', Command: 'Save' },
    { Keybinding: 'Ctrl+Shift+S', Command: 'Save As...' },
    { Keybinding: 'Ctrl+K S', Command: 'Save All' },
    { Keybinding: 'Ctrl+F4', Command: 'Close' },
    { Keybinding: 'Ctrl+K Ctrl+W', Command: 'Close All' },
    { Keybinding: 'Ctrl+Shift+T', Command: 'Reopen closed editor' },
    { Keybinding: 'Ctrl+K Enter', Command: 'Keep preview mode editor open' },
    { Keybinding: 'Ctrl+Tab', Command: 'Open next' },
    { Keybinding: 'Ctrl+Shift+Tab', Command: 'Open previous' },
    { Keybinding: 'Ctrl+K P', Command: 'Copy path of active file' },
    { Keybinding: 'Ctrl+K R', Command: 'Reveal active file in Explorer' },
    { Keybinding: 'Ctrl+K O', Command: 'Show active file in new window/instance' },
  ];

  display: Shortcut[] = [
    { Keybinding: 'F11', Command: 'Toggle full screen' },
    { Keybinding: 'Shift+Alt+0', Command: 'Toggle editor layout (horizontal/vertical)' },
    { Keybinding: 'Ctrl+ = / -', Command: 'Zoom in/out' },
    { Keybinding: 'Ctrl+B', Command: 'Toggle Sidebar visibility' },
    { Keybinding: 'Ctrl+Shift+E', Command: 'Show Explorer / Toggle focus' },
    { Keybinding: 'Ctrl+Shift+F', Command: 'Show Search' },
    { Keybinding: 'Ctrl+Shift+G', Command: 'Show Source Control' },
    { Keybinding: 'Ctrl+Shift+D', Command: 'Show Debug' },
    { Keybinding: 'Ctrl+Shift+X', Command: 'Show Extensions' },
    { Keybinding: 'Ctrl+Shift+H', Command: 'Replace in files' },
    { Keybinding: 'Ctrl+Shift+J', Command: 'Toggle Search details' },
    { Keybinding: 'Ctrl+Shift+U', Command: 'Show Output panel' },
    { Keybinding: 'Ctrl+Shift+V', Command: 'Open Markdown preview' },
    { Keybinding: 'Ctrl+K V', Command: 'Open Markdown preview to the side' },
    { Keybinding: 'Ctrl+K Z', Command: 'Zen Mode (Esc Esc to exit)' },
  ];

  debug: Shortcut[] = [
    { Keybinding: 'F9', Command: 'Toggle breakpoint' },
    { Keybinding: 'F5', Command: 'Start/Continue' },
    { Keybinding: 'Shift+F5', Command: 'Stop' },
    { Keybinding: 'F11 / Shift+F11', Command: 'Step into/out' },
    { Keybinding: 'F10', Command: 'Step over' },
    { Keybinding: 'Ctrl+K Ctrl+I', Command: 'Show hover' },
  ];

  integratedTerminal: Shortcut[] = [
    { Keybinding: 'Ctrl+`', Command: 'Show integrated terminal' },
    { Keybinding: 'Ctrl+Shift+`', Command: 'Create new terminal' },
    { Keybinding: 'Ctrl+C', Command: 'Copy selection' },
    { Keybinding: 'Ctrl+V', Command: 'Paste into active terminal' },
    { Keybinding: 'Ctrl+↑ / ↓', Command: 'Scroll up/down' },
    { Keybinding: 'Shift+PgUp / PgDn', Command: 'Scroll page up/down' },
    { Keybinding: 'Ctrl+Home / End', Command: 'Scroll to top/bottom' },
  ];
}
