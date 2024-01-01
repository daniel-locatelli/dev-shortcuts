import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './windows.component.html',
  styleUrl: './windows.component.css',
  host: {
    class: 'container-shortcuts',
  },
})
export class WindowsComponent {
  general: Shortcut[] = [
    { key: 'Ctrl + X', command: 'Cut the selected item' },
    { key: 'Ctrl + C (or Ctrl + Insert)', command: 'Copy the selected item' },
    { key: 'Ctrl + V (or Shift + Insert)', command: 'Paste the selected item' },
    { key: 'Ctrl + Shift + V', command: 'Paste as plain text' },
    { key: 'Ctrl + Z', command: 'Undo an action' },
    { key: 'Alt + Tab', command: 'Switch between open apps' },
    { key: 'Alt + F4', command: 'Close the active item, or exit the active app' },
    { key: 'Windows logo key + L', command: 'Lock your PC' },
    { key: 'Windows logo key + D', command: 'Display and hide the desktop' },
    { key: 'F2', command: 'Rename the selected item' },
    { key: 'F3', command: 'Search for a file or folder in File Explorer' },
    { key: 'F4', command: 'Display the address bar list in File Explorer' },
    { key: 'F5', command: 'Refresh the active window' },
    { key: 'F6', command: 'Cycle through screen elements in a window or on the desktop' },
    { key: 'F10', command: 'Activate the Menu bar in the active app' },
    { key: 'Alt + A', command: 'Set focus to the first icon in the Suggested actions menu' },
    { key: 'Alt + F8', command: 'Show your password on the sign-in screen' },
    { key: 'Alt + Esc', command: 'Cycle through items in the order in which they were opened' },
    { key: 'Alt + underlined letter', command: 'Perform the command for that letter' },
    { key: 'Alt + Enter', command: 'Display properties for the selected item' },
    { key: 'Alt + Spacebar', command: 'Open the shortcut menu for the active window' },
    { key: 'Alt + Left arrow', command: 'Go back' },
    { key: 'Alt + Right arrow', command: 'Go forward' },
    { key: 'Alt + Page Up', command: 'Move up one screen' },
    { key: 'Alt + Page Down', command: 'Move down one screen' },
    {
      key: 'Ctrl + F4',
      command:
        'Close the active document (in apps that are full-screen and let you have multiple documents open at the same time)',
    },
    { key: 'Ctrl + A', command: 'Select all items in a document or window' },
    { key: 'Ctrl + D (or Delete)', command: 'Delete the selected item and move it to the Recycle Bin' },
    { key: 'Ctrl + E', command: 'Open Search (in most apps)' },
    { key: 'Ctrl + R (or F5)', command: 'Refresh the active window' },
    { key: 'Ctrl + Y', command: 'Redo an action' },
    { key: 'Ctrl + Right arrow', command: 'Move the cursor to the beginning of the next word' },
    { key: 'Ctrl + Left arrow', command: 'Move the cursor to the beginning of the previous word' },
    { key: 'Ctrl + Down arrow', command: 'Move the cursor to the beginning of the next paragraph' },
    { key: 'Ctrl + Up arrow', command: 'Move the cursor to the beginning of the previous paragraph' },
    { key: 'Ctrl + Alt + Tab', command: 'Use the arrow keys to switch between all open apps' },
    {
      key: 'Alt + Shift + arrow keys',
      command: 'When a group or tile is in focus on the Start menu, move it in the direction specified',
    },
    {
      key: 'Ctrl + Shift + arrow keys',
      command: 'When a tile is in focus on the Start menu, move it into another tile to create a folder',
    },
    { key: 'Ctrl + arrow keys', command: "Resize the Start menu when it's open" },
    {
      key: 'Ctrl + arrow key (to move to an item) + Spacebar',
      command: 'Select multiple individual items in a window or on the desktop',
    },
    { key: 'Ctrl + Shift with an arrow key', command: 'Select a block of text' },
    { key: 'Ctrl + Esc', command: 'Open Start' },
    { key: 'Ctrl + Shift + Esc', command: 'Open Task Manager' },
    { key: 'Ctrl + Shift', command: 'Switch the keyboard layout when multiple keyboard layouts are available' },
    { key: 'Ctrl + Spacebar', command: 'Turn the Chinese input method editor (IME) on or off' },
    { key: 'Shift + F10', command: 'Display the shortcut menu for the selected item' },
    {
      key: 'Shift with any arrow key',
      command: 'Select more than one item in a window or on the desktop, or select text in a document',
    },
    { key: 'Shift + Delete', command: 'Delete the selected item without moving it to the Recycle Bin first' },
    { key: 'Right arrow', command: 'Open the next menu to the right, or open a submenu' },
    { key: 'Left arrow', command: 'Open the next menu to the left, or close a submenu' },
    { key: 'Esc', command: 'Stop or leave the current task' },
  ];

  windowsLogo: Shortcut[] = [
    { key: 'Windows logo key', command: 'Open or close Start' },
    { key: 'Windows logo key + A', command: 'Open Quick Settings (Updated in Windows 11)' },
    { key: 'Windows logo key + B', command: 'Set focus to the first icon in the Taskbar corner' },
    { key: 'Windows logo key + C', command: 'Open Windows Copilot (Updated in Windows 11)' },
    { key: 'Windows logo key + Shift + C', command: 'Open the charms menu' },
    {
      key: 'Windows logo key + Ctrl + C',
      command: 'Turn on color filters (enable this shortcut first in Color Filter settings)',
    },
    { key: 'Windows logo key + D', command: 'Display and hide the desktop' },
    { key: 'Windows logo key + E', command: 'Open File Explorer' },
    { key: 'Windows logo key + F', command: 'Open Feedback Hub and take a screenshot' },
    { key: 'Windows logo key + G', command: 'Open Xbox Game Bar when a game is open' },
    {
      key: 'Windows logo key + Alt + B',
      command: 'Turn HDR on or off (Applies to the Xbox Game Bar app version 5.721.7292.0 or newer)',
    },
    { key: 'Windows logo key + H', command: 'Launch voice typing (Updated in Windows 11)' },
    { key: 'Windows logo key + I', command: 'Open Settings' },
    { key: 'Windows logo key + J', command: 'Set focus to a Windows tip when one is available' },
    { key: 'Windows logo key + K', command: 'Open Cast from Quick Settings (Updated in Windows 11)' },
    {
      key: 'Windows logo key + Alt + K',
      command: 'Toggle microphone mute in apps that support Call Mute (Available starting in Windows 11, version 22H2)',
    },
    { key: 'Windows logo key + L', command: 'Lock your PC or switch accounts' },
    { key: 'Windows logo key + M', command: 'Minimize all windows' },
    { key: 'Windows logo key + Shift + M', command: 'Restore minimized windows on the desktop' },
    { key: 'Windows logo key + N', command: 'Open notification center and calendar (Updated in Windows 11)' },
    { key: 'Windows logo key + O', command: 'Lock device orientation' },
    { key: 'Windows logo key + P', command: 'Choose a presentation display mode' },
    { key: 'Windows logo key + Ctrl + Q', command: 'Open Quick Assist' },
    { key: 'Windows logo key + R', command: 'Open the Run dialog box' },
    { key: 'Windows logo key + Alt + R', command: 'Record video of game window in focus (using Xbox Game Bar)' },
    { key: 'Windows logo key + S', command: 'Open search' },
    { key: 'Windows logo key + Shift + S', command: 'Take a screenshot of part of your screen' },
    { key: 'Windows logo key + T', command: 'Cycle through apps on the taskbar' },
    { key: 'Windows logo key + U', command: 'Open Accessibility Settings' },
    {
      key: 'Windows logo key + V',
      command: "Open the clipboard history (Clipboard history isn't turned on by default)",
    },
    { key: 'Windows logo key + Shift + V', command: 'Set focus to a notification' },
    { key: 'Windows logo key + W', command: 'Open Widgets (Updated in Windows 11)' },
    { key: 'Windows logo key + X', command: 'Open the Quick Link menu' },
    { key: 'Windows logo key + Y', command: 'Switch input between Windows Mixed Reality and your desktop' },
    { key: 'Windows logo key + Z', command: 'Open the snap layouts (Updated in Windows 11)' },
    { key: 'Windows logo key + period (.) or semicolon (;)', command: 'Open emoji panel' },
    { key: 'Windows logo key + comma (,)', command: 'Temporarily peek at the desktop' },
    { key: 'Windows logo key + Pause', command: 'Opens Start > Settings > System > About' },
    { key: 'Windows logo key + Ctrl + F', command: "Search for PCs (if you're on a network)" },
    {
      key: 'Windows logo key + number',
      command: 'Open the desktop and start the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Windows logo key + Shift + number',
      command:
        'Open the desktop and start a new instance of the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Windows logo key + Ctrl + number',
      command:
        'Open the desktop and switch to the last active window of the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Windows logo key + Alt + number',
      command:
        'Open the desktop and open the Jump List for the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Windows logo key + Ctrl + Shift + number',
      command:
        'Open the desktop and open a new instance of the app located at the given position on the taskbar as an administrator',
    },
    { key: 'Windows logo key + Tab', command: 'Open Task view' },
    { key: 'Windows logo key + Up arrow', command: 'Maximize the window' },
    {
      key: 'Windows logo key + Alt + Up arrow',
      command: 'Snap window in focus to the top half of the screen (New with Windows 11)',
    },
    {
      key: 'Windows logo key + Down arrow',
      command: 'Remove the current app from the screen or minimize the desktop window',
    },
    {
      key: 'Windows logo key + Alt + Down arrow',
      command: 'Snap window in focus to the bottom half of the screen (New with Windows 11)',
    },
    {
      key: 'Windows logo key + Left arrow',
      command: 'Maximize the app or desktop window to the left side of the screen',
    },
    {
      key: 'Windows logo key + Right arrow',
      command: 'Maximize the app or desktop window to the right side of the screen',
    },
    {
      key: 'Windows logo key + Home',
      command: 'Minimize all except the active desktop window (restores all windows on the second stroke)',
    },
    {
      key: 'Windows logo key + Shift + Up arrow',
      command: 'Stretch the desktop window to the top and bottom of the screen',
    },
    {
      key: 'Windows logo key + Shift + Down arrow',
      command: 'Restore/minimize active desktop windows vertically, maintaining width',
    },
    {
      key: 'Windows logo key + Shift + Left arrow or Right arrow',
      command: 'Move an app or window in the desktop from one monitor to another',
    },
    { key: 'Windows logo key + Shift + Spacebar', command: 'Cycle backward through language and keyboard layout' },
    { key: 'Windows logo key + Spacebar', command: 'Switch input language and keyboard layout' },
    { key: 'Windows logo key + Ctrl + Spacebar', command: 'Change to a previously selected input' },
    { key: 'Windows logo key + Ctrl + Enter', command: 'Turn on Narrator' },
    { key: 'Windows logo key + Plus (+)', command: 'Open Magnifier and zoom in' },
    { key: 'Windows logo key + Minus (-)', command: 'Zoom out in Magnifier' },
    { key: 'Windows logo key + Esc', command: 'Close Magnifier' },
    { key: 'Windows logo key + forward slash (/)', command: 'Begin IME reconversion' },
    { key: 'Windows logo key + Ctrl + Shift + B', command: 'Wake PC from a blank or black screen' },
    { key: 'Windows logo key + PrtScn', command: 'Save full-screen screenshot to file' },
    {
      key: 'Windows logo key + Alt + PrtScn',
      command: 'Save screenshot of game window in focus to file (using Xbox Game Bar)',
    },
    { key: 'Windows logo key + Alt + Enter (on taskbar item focus)', command: 'Open taskbar settings' },
  ];

  commandPrompt: Shortcut[] = [
    { key: 'Ctrl + C (or Ctrl + Insert)', command: 'Copy the selected text' },
    { key: 'Ctrl + V (or Shift + Insert)', command: 'Paste the selected text' },
    { key: 'Ctrl + M', command: 'Enter Mark mode' },
    { key: 'Alt + selection key', command: 'Begin selection in block mode' },
    { key: 'Arrow keys', command: 'Move the cursor in the direction specified' },
    { key: 'Page up', command: 'Move the cursor by one page up' },
    { key: 'Page down', command: 'Move the cursor by one page down' },
    { key: 'Ctrl + Home (Mark mode)', command: 'Move the cursor to the beginning of the buffer' },
    { key: 'Ctrl + End (Mark mode)', command: 'Move the cursor to the end of the buffer' },
    { key: 'Ctrl + Up arrow', command: 'Move up one line in the output history' },
    { key: 'Ctrl + Down arrow', command: 'Move down one line in the output history' },
    {
      key: 'Ctrl + Home (History navigation)',
      command:
        'If the command line is empty, move the viewport to the top of the buffer. Otherwise, delete all the characters to the left of the cursor in the command line',
    },
    {
      key: 'Ctrl + End (History navigation)',
      command:
        'If the command line is empty, move the viewport to the command line. Otherwise, delete all the characters to the right of the cursor in the command line',
    },
  ];

  dialogBox: Shortcut[] = [
    { key: 'F4', command: 'Display the items in the active list' },
    { key: 'Ctrl + Tab', command: 'Move forward through tabs' },
    { key: 'Ctrl + Shift + Tab', command: 'Move back through tabs' },
    { key: 'Ctrl + 1, 2, 3,...', command: 'Move to that tab number' },
    { key: 'Tab', command: 'Move forward through options' },
    { key: 'Shift + Tab', command: 'Move back through options' },
    {
      key: 'Alt + underlined letter',
      command: 'Perform the command (or select the option) that is used with that letter',
    },
    { key: 'Spacebar', command: 'Select or clear the check box if the active option is a check box' },
    {
      key: 'Backspace',
      command: 'Open a folder one level up if a folder is selected in the Save As or Open dialog box',
    },
    { key: 'Arrow keys', command: 'Select a button if the active option is a group of option buttons' },
  ];

  fileExplorer: Shortcut[] = [
    { key: 'Alt + D', command: 'Select the address bar' },
    { key: 'Ctrl + E', command: 'Select the search box' },
    { key: 'Ctrl + F', command: 'Select the search box' },
    { key: 'Ctrl + N', command: 'Open a new window' },
    { key: 'Ctrl + T', command: 'Open a new tab and switch to it' },
    { key: 'Ctrl + W', command: "Closes the active tab. Closes the window if there's only one tab open" },
    { key: 'Ctrl + Tab', command: 'Move to the next tab' },
    { key: 'Ctrl + Shift + Tab', command: 'Move to the previous tab' },
    { key: 'Ctrl + 1, 2, 3,...', command: 'Move to that tab number' },
    { key: 'Ctrl + mouse scroll wheel', command: 'Change the size and appearance of file and folder icons' },
    { key: 'Ctrl + Shift + E', command: 'Display all folders above the selected folder' },
    { key: 'Ctrl + Shift + N', command: 'Create a new folder' },
    { key: 'Num Lock + asterisk (*)', command: 'Display all subfolders under the selected folder' },
    { key: 'Num Lock + plus (+)', command: 'Display the contents of the selected folder' },
    { key: 'Num Lock + minus (-)', command: 'Collapse the selected folder' },
    { key: 'Alt + P', command: 'Display the preview panel' },
    { key: 'Alt + Enter', command: 'Open the Properties dialog box for the selected item' },
    { key: 'Alt + Right arrow', command: 'View the next folder' },
    { key: 'Alt + Up arrow', command: 'View the folder that the folder was in' },
    { key: 'Alt + Left arrow', command: 'View the previous folder' },
    { key: 'Backspace', command: 'View the previous folder' },
    { key: 'Right arrow', command: "Display the current selection (if it's collapsed), or select the first subfolder" },
    {
      key: 'Left arrow',
      command: "Collapse the current selection (if it's expanded), or select the folder that the folder was in",
    },
    { key: 'End', command: 'Display the bottom of the active window' },
    { key: 'Home', command: 'Display the top of the active window' },
    { key: 'F11', command: 'Maximize or minimize the active window' },
  ];

  virtualDesktops: Shortcut[] = [
    { key: 'Windows logo key + Tab', command: 'Open Task view' },
    { key: 'Windows logo key + Ctrl + D', command: 'Add a virtual desktop' },
    {
      key: 'Windows logo key + Ctrl + Right arrow',
      command: 'Switch between virtual desktops you’ve created on the right',
    },
    {
      key: 'Windows logo key + Ctrl + Left arrow',
      command: 'Switch between virtual desktops you’ve created on the left',
    },
    { key: 'Windows logo key + Ctrl + F4', command: "Close the virtual desktop you're using" },
  ];

  taskbar: Shortcut[] = [
    { key: 'Shift + click a taskbar button', command: 'Open an app or quickly open another instance of an app' },
    { key: 'Ctrl + Shift + click a taskbar button', command: 'Open an app as an administrator' },
    { key: 'Shift + right-click a taskbar button', command: 'Show the window menu for the app' },
    { key: 'Shift + right-click a grouped taskbar button', command: 'Show the window menu for the group' },
    { key: 'Ctrl + click a grouped taskbar button', command: 'Cycle through the windows of the group' },
  ];

  settings: Shortcut[] = [
    { key: 'Windows logo key + I', command: 'Open settings' },
    { key: 'Backspace', command: 'Go back to the settings home page' },
    { key: 'Type on any page with search box', command: 'Search settings' },
  ];
}
