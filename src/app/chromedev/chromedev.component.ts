import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chromedev',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chromedev.component.html',
  styleUrl: './chromedev.component.css',
  host: {
    class: 'container-shortcuts',
  },
})
export class ChromedevComponent {
  openDevTools: Shortcut[] = [
    { key: 'F12, Control+Shift+I', command: 'Open whatever panel you used last' },
    { key: 'Control+Shift+J', command: 'Open the Console panel' },
    { key: 'Control+Shift+C', command: 'Open the Elements panel' },
  ];

  global: Shortcut[] = [
    { key: '? or F1', command: 'Show Settings' },
    { key: 'Control+]', command: 'Focus the next panel' },
    { key: 'Control+[', command: 'Focus the previous panel' },
    {
      key: 'Control+Shift+D',
      command:
        'Switch back to whatever docking position you last used. If DevTools has been in its default position for the entire session, then this shortcut undocks DevTools into a separate window',
    },
    { key: 'Control+Shift+M', command: 'Toggle Device Mode' },
    { key: 'Control+Shift+C', command: 'Toggle Inspect Element Mode' },
    { key: 'Control+Shift+P', command: 'Open the Command Menu' },
    { key: 'Escape', command: 'Toggle the Drawer' },
    { key: 'F5 or Control+R', command: 'Normal reload' },
    { key: 'Control+F5 or Control+Shift+R', command: 'Hard reload' },
    {
      key: 'Control+F',
      command:
        'Search for text within the current panel. Supported only in the Elements, Console, Sources, Performance, Memory, JavaScript Profiler, and Quick Source panels.',
    },
    {
      key: 'Control+Shift+F',
      command: 'Opens the Search tab in the Drawer, which lets you search for text across all loaded resources',
    },
    { key: 'Control+O or Control+P', command: 'Open a file in the Sources panel' },
    { key: 'Control+Shift++', command: 'Zoom in' },
    { key: 'Control+-', command: 'Zoom out' },
    { key: 'Control+0', command: 'Restore default zoom level' },
    {
      key: 'Press Control+O to open the Command Menu, type ! followed by the name of the script, then press Enter',
      command: 'Run snippet',
    },
  ];

  elementsPanel: Shortcut[] = [
    { key: 'Control + Z', command: 'Undo change' },
    { key: 'Control + Y', command: 'Redo change' },
    { key: 'Up Arrow / Down Arrow', command: 'Select the element above / below the currently-selected element' },
    {
      key: 'Right Arrow',
      command:
        'Expand the currently-selected node. If the node is already expanded, this shortcut selects the element below it',
    },
    {
      key: 'Left Arrow',
      command:
        'Collapse the currently-selected node. If the node is already collapsed, this shortcut selects the element above it',
    },
    {
      key: "Hold Control + Alt then click the arrow icon next to the element's name",
      command: 'Expand or collapse the currently-selected node and all of its children',
    },
    { key: 'Enter', command: 'Toggle Edit Attributes mode on the currently-selected element' },
    { key: 'Tab / Shift + Tab', command: 'Select the next / previous attribute after entering Edit Attributes mode' },
    { key: 'H', command: 'Hide the currently-selected element' },
    { key: 'F2', command: 'Toggle Edit as HTML mode on the currently-selected element' },
  ];
  stylesPanel: Shortcut[] = [
    { key: 'Hold Control then click the property value', command: 'Go to the line where a property value is declared' },
    {
      key: 'Hold Shift then click the Color Preview box next to the value',
      command: 'Cycle through the RGBA, HSLA, and Hex representations of a color value',
    },
    {
      key: 'Click a property name or value then press Tab / Shift+Tab',
      command: 'Select the next / previous property or value',
    },
    {
      key: 'Click a value then press Alt+Up Arrow / Alt+Down Arrow',
      command: 'Increment / decrement a property value by 0.1',
    },
    { key: 'Click a value then press Up Arrow / Down Arrow', command: 'Increment / decrement a property value by 1' },
    {
      key: 'Click a value then press Shift+Up Arrow / Shift+Down Arrow',
      command: 'Increment / decrement a property value by 10',
    },
    {
      key: 'Click a value then press Control+Up Arrow / Control+Down Arrow',
      command: 'Increment / decrement a property value by 100',
    },
    {
      key: 'Hold Shift then click the Angle Preview box next to the value',
      command:
        'Cycle through the degrees (deg), gradians (grad), radians (rad), and turns (turn) representations of an angle value',
    },
    {
      key: 'Click the Angle Preview box next to the value then press Up Arrow / Down Arrow',
      command: 'Increment / decrement an angle value by 1',
    },
    {
      key: 'Click the Angle Preview box next to the value then press Shift+Up Arrow / Shift+Down Arrow',
      command: 'Increment / decrement an angle value by 10',
    },
    {
      key: 'Shift, click / mouse slide on the Angle Clock Overlay',
      command: 'Increment / decrement an angle value by 15',
    },
  ];
  sourcesPanel: Shortcut[] = [
    {
      key: 'F8 or Control+\\',
      command: 'Pause script execution (if currently running) or resume (if currently paused)',
    },
    { key: 'F10 or Control+`', command: 'Step over next function call' },
    { key: 'F11 or Control+;', command: 'Step into next function call' },
    { key: 'Shift+F11 or Control+Shift+;', command: 'Step out of current function' },
    { key: 'Hold Control and then click the line of code', command: 'Continue to a certain line of code while paused' },
    { key: 'Control+./Control+,', command: 'Select the call frame below / above the currently-selected frame' },
    { key: 'Control+S', command: 'Save changes to local modifications' },
    { key: 'Control+Alt+S', command: 'Save all changes' },
    { key: 'Control+G', command: 'Go to line' },
    {
      key: 'Press Control+O to open the Command Menu, type : followed by the line number, then press Enter',
      command: 'Jump to a line number of the currently-open file',
    },
    {
      key: 'Press Control+O to open the Command Menu, type :, then the line number, :, then the column number, then press Enter',
      command: 'Jump to a column of the currently-open file (e.g., line 5, column 9)',
    },
    {
      key: 'Press Control+Shift+O, then type in the name of the declaration / rule set, or select it from the list of options',
      command:
        'Go to a function declaration (if currently-open file is HTML or a script), or a rule set (if currently-open file is a stylesheet)',
    },
    { key: 'Alt+W', command: 'Close the active tab' },
    { key: 'Control+Page Up or Page Down', command: 'Open next or previous tab' },
    { key: 'Control+Shift+Y', command: 'Toggle the Navigation sidebar on the left' },
    { key: 'Control+Shift+H', command: 'Toggle the Debugger sidebar on the right' },
  ];
  codeEditor: Shortcut[] = [
    { key: 'Control+Delete', command: 'Delete all characters in the last word, up to the cursor' },
    {
      key: 'Focus your cursor on the line and then press Control+B',
      command: 'Add or remove a line-of-code breakpoint',
    },
    {
      key: 'Focus your cursor on the line and then press Control+Alt+B',
      command: 'Open the breakpoint edit dialog to edit conditional breakpoints or logpoints',
    },
    { key: 'Control+M', command: 'Go to matching bracket' },
    {
      key: 'Control+/',
      command:
        'Toggle single-line comment. If multiple lines are selected, DevTools adds a comment to the start of each line',
    },
    {
      key: 'Control+D / Control+U',
      command:
        'Select / de-select the next occurrence of whatever word the cursor is on. Each occurrence is highlighted simultaneously',
    },
  ];

  networkPanel: Shortcut[] = [
    { key: 'Control+E', command: 'Start / stop recording' },
    { key: 'Control+R', command: 'Record a reload' },
    { key: 'R', command: 'Replay a selected XHR request' },
    { key: 'Escape', command: 'Hide the details of a selected request' },
  ];

  performancePanel: Shortcut[] = [
    { key: 'Control+E', command: 'Start / stop recording' },
    { key: 'Control+S', command: 'Save recording' },
    { key: 'Control+O', command: 'Load recording' },
  ];

  memoryPanel: Shortcut[] = [{ key: 'Control+E', command: 'Start / stop recording (Windows/Linux)' }];

  consolePanel: Shortcut[] = [
    { key: 'Right Arrow or Tab', command: 'Accept autocomplete suggestion' },
    { key: 'Escape', command: 'Reject autocomplete suggestion' },
    { key: 'Up / Down or Control+P / N', command: 'Navigate the autocomplete list up or down' },
    { key: 'Up Arrow', command: 'Get previous statement' },
    { key: 'Down Arrow', command: 'Get next statement' },
    { key: 'Control+`', command: 'Focus the Console' },
    { key: 'Control+L', command: 'Clear the Console' },
    {
      key: 'Shift+Enter',
      command:
        'Force a multi-line entry. Note that DevTools should detect multi-line scenarios by default, so this shortcut is now usually unnecessary',
    },
    { key: 'Enter', command: 'Execute' },
    {
      key: 'Hold Alt then click Expand >',
      command: "Expand all sub-properties of an object that's been logged to the Console",
    },
  ];

  searchTab: Shortcut[] = [{ key: 'Control+Shift+{ or }', command: 'Expand/collapse all search results' }];
  recorderPanel: Shortcut[] = [
    { key: 'Control+E', command: 'Start or stop recording' },
    { key: 'Control+Enter', command: 'Replay recording' },
    { key: 'Control+C', command: 'Copy recording or selected step' },
    { key: 'Control+B', command: 'Toggle code view' },
  ];
}
