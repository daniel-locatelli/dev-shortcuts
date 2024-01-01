import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chrome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chrome.component.html',
  styleUrl: './chrome.component.css',
  host: {
    class: 'container-shortcuts',
  },
})
export class ChromeComponent {
  tabAndWindow: Shortcut[] = [
    { key: 'Ctrl + N', command: 'Open a new window' },
    { key: 'Ctrl + Shift + N', command: 'Open a new window in Incognito mode' },
    { key: 'Ctrl + T', command: 'Open a new tab, and jump to it' },
    { key: 'Ctrl + Shift + T', command: 'Reopen previously closed tabs in the order they were closed' },
    { key: 'Ctrl + Tab, Ctrl + PgDn', command: 'Jump to the next open tab' },
    { key: 'Ctrl + Shift + Tab, Ctrl + PgUp', command: 'Jump to the previous open tab' },
    { key: 'Ctrl + 1 ... Ctrl + 8', command: 'Jump to a specific tab' },
    { key: 'Ctrl + 9', command: 'Jump to the rightmost tab' },
    { key: 'Alt + Home', command: 'Open your home page in the current tab' },
    { key: 'Alt + ←', command: 'Open the previous page from your browsing history in the current tab' },
    { key: 'Alt + →', command: 'Open the next page from your browsing history in the current tab' },
    { key: 'Ctrl + W, Ctrl + F4', command: 'Close the current tab' },
    { key: 'Ctrl + Shift + W, Alt + F4', command: 'Close the current window' },
    { key: 'Alt + Space N', command: 'Minimize the current window' },
    { key: 'Alt + Space X', command: 'Maximize the current window' },
    { key: 'Alt + F X', command: 'Quit Google Chrome' },
    { key: 'Ctrl + Shift + PgUp, Ctrl + Shift + PgDn', command: 'Move tabs right or left' },
  ];

  googleChromeFeatures: Shortcut[] = [
    { key: 'Alt + F, Alt + E', command: 'Open the Chrome menu' },
    { key: 'Ctrl + Shift + B', command: 'Show or hide the Bookmarks bar' },
    { key: 'Ctrl + Shift + O', command: 'Open the Bookmarks Manager' },
    { key: 'Ctrl + H', command: 'Open the History page in a new tab' },
    { key: 'Ctrl + J', command: 'Open the Downloads page in a new tab' },
    { key: 'Shift + Esc', command: 'Open the Chrome Task Manager' },
    { key: 'Shift + Alt + T', command: 'Set focus on the first item in the Chrome toolbar' },
    { key: 'F10', command: 'Set focus on the rightmost item in the Chrome toolbar' },
    { key: 'F6', command: 'Switch focus to unfocused dialog (if showing) and all toolbars' },
    { key: 'Ctrl + F, F3', command: 'Open the Find Bar to search the current page' },
    { key: 'Ctrl + G', command: 'Jump to the next match to your Find Bar search' },
    { key: 'Ctrl + Shift + G', command: 'Jump to the previous match to your Find Bar search' },
    { key: 'Ctrl + Shift + J, F12', command: 'Open Developer Tools' },
    { key: 'Ctrl + Shift + Delete', command: 'Open the Clear Browsing Data options' },
    { key: 'F1', command: 'Open the Chrome Help Center in a new tab' },
    { key: 'Ctrl + Shift + M', command: 'Log in a different user or browse as a Guest' },
    { key: 'Alt + Shift + I', command: 'Open a feedback form' },
    { key: 'F7', command: 'Turn on caret browsing' },
    { key: 'Ctrl + F6', command: 'Skip to web contents' },
    { key: 'Alt + Shift + A', command: 'Focus on inactive dialogs' },
  ];

  addressBar: Shortcut[] = [
    { key: 'Type a search term + Enter', command: 'Search with your default search engine' },
    { key: 'Type a search engine name and press Tab', command: 'Search using a different search engine' },
    {
      key: 'Type a site name + Ctrl + Enter',
      command: 'Add www. and .com to a site name, and open it in the current tab',
    },
    {
      key: 'Type a site name + Ctrl + Shift + Enter',
      command: 'Add www. and .com to a site name, and open it in a new window',
    },
    { key: 'Type a search term + Alt + Enter', command: 'Open a new tab and perform a Google search' },
    { key: 'Ctrl + L, Alt + D, F6', command: 'Jump to the address bar' },
    { key: 'Ctrl + K, Ctrl + E', command: 'Search from anywhere on the page' },
    { key: 'Down arrow to highlight + Shift + Delete', command: 'Remove predictions from your address bar' },
    { key: 'Ctrl + F5', command: 'Move cursor to the address bar' },
  ];

  webpage: Shortcut[] = [
    { key: 'Ctrl + P', command: 'Open options to print the current page' },
    { key: 'Ctrl + S', command: 'Open options to save the current page' },
    { key: 'F5, Ctrl + R', command: 'Reload the current page' },
    { key: 'Shift + F5, Ctrl + Shift + R', command: 'Reload the current page, ignoring cached content' },
    { key: 'Esc', command: 'Stop the page loading' },
    { key: 'Tab', command: 'Browse clickable items moving forward' },
    { key: 'Shift + Tab', command: 'Browse clickable items moving backward' },
    { key: 'Ctrl + O + Select a file', command: 'Open a file from your computer in Chrome' },
    { key: 'Ctrl + U', command: 'Display non-editable HTML source code for the current page' },
    { key: 'Ctrl + D', command: 'Save your current webpage as a bookmark' },
    { key: 'Ctrl + Shift + D', command: 'Save all open tabs as bookmarks in a new folder' },
    { key: 'F11', command: 'Turn full-screen mode on or off' },
    { key: 'Ctrl and +', command: 'Make everything on the page bigger' },
    { key: 'Ctrl and -', command: 'Make everything on the page smaller' },
    { key: 'Ctrl + 0', command: 'Return everything on the page to default size' },
    { key: 'Space, PgDn', command: 'Scroll down a webpage, a screen at a time' },
    { key: 'Shift + Space, PgUp', command: 'Scroll up a webpage, a screen at a time' },
    { key: 'Home', command: 'Go to the top of the page' },
    { key: 'End', command: 'Go to the bottom of the page' },
    { key: 'Shift + Scroll your mousewheel', command: 'Scroll horizontally on the page' },
    { key: 'Ctrl + ←', command: 'Move your cursor to the beginning of the previous word in a text field' },
    { key: 'Ctrl + →', command: 'Move your cursor to the next word' },
    { key: 'Ctrl + Backspace', command: 'Delete the previous word in a text field' },
    { key: 'Alt + Home', command: 'Open the Home page in the current tab' },
  ];

mouse: Shortcut[] = [
    { key: 'Open a link in a current tab (mouse only)', command: 'Drag a link to a tab' },
    { key: 'Open a link in new background tab', command: 'Ctrl + Click a link' },
    { key: 'Open a link, and jump to it', command: 'Ctrl + Shift + Click a link' },
    { key: 'Open a link, and jump to it (mouse only)', command: 'Drag a link to a blank area of the tab strip' },
    { key: 'Open a link in a new window', command: 'Shift + Click a link' },
    { key: 'Open a tab in a new window (mouse only)', command: 'Drag the tab out of the tab strip' },
    { key: 'Move a tab to a current window (mouse only)', command: 'Drag the tab into an existing window' },
    { key: 'Return a tab to its original position', command: 'Press Esc while dragging' },
    { key: 'Save the current webpage as a bookmark', command: 'Drag the web address to the Bookmarks Bar' },
    { key: 'Scroll horizontally on the page', command: 'Shift + Scroll your mousewheel' },
    { key: 'Download the target of a link', command: 'Alt + Click a link' },
    { key: 'Display your browsing history', command: 'Right-click Back Back or click & hold Back Back' },
    { key: 'Display your browsing history', command: 'Right-click Next Next or click & hold Next Next' },
    { key: 'Switch between maximized and windowed modes', command: 'Double-click a blank area of the tab strip' },
    { key: 'Make everything on the page bigger', command: 'Ctrl + Scroll your mousewheel up' },
    { key: 'Make everything on the page smaller', command: 'Ctrl + Scroll your mousewheel down' },
  ];
  
}
