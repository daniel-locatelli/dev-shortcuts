import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-git',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './git.component.html',
  styleUrl: './git.component.css',
  host: {
    class: 'container-shortcuts',
  },
})
export class GitComponent {
  repositorySetup: Shortcut[] = [
    { key: 'git init', command: 'Initialize a new repository' },
    { key: 'git clone <repository-url>', command: 'Clone a repository' },
  ];

  configuration: Shortcut[] = [
    { key: 'git config --global user.name "Name"', command: 'Set user information' },
    { key: 'git config --global user.email "Email"', command: 'Set user email' },
    { key: 'git config --global core.editor <editor>', command: 'Set default text editor' },
  ];

  basicSnapshotting: Shortcut[] = [
    // Basic Snapshotting
    { key: 'git add <file(s)>', command: 'Add changes to the staging area' },
    { key: 'git commit -m "Commit message"', command: 'Commit changes' },
    { key: 'git rm <file(s)>', command: 'Remove files from the working directory and staging area' },
  ];

  branchingAndMerging: Shortcut[] = [
    // Branching and Merging
    { key: 'git branch <branch-name>', command: 'Create a new branch' },
    { key: 'git checkout <branch-name>', command: 'Switch to a branch' },
    { key: 'git checkout -b <new-branch-name>', command: 'Create and switch to a new branch' },
    { key: 'git merge <branch-name>', command: 'Merge branches' },
  ];

  remoteRepositories: Shortcut[] = [
    // Remote Repositories
    { key: 'git remote add <remote-name> <repository-url>', command: 'Add a remote repository' },
    { key: 'git fetch <remote-name>', command: 'Fetch changes from a remote repository' },
    { key: 'git pull <remote-name> <branch-name>', command: 'Pull changes from a remote repository' },
    { key: 'git push <remote-name> <branch-name>', command: 'Push changes to a remote repository' },
    {key: 'git remote -v', command: 'Show URL of remote branches'}
  ];

  inspectingChanges: Shortcut[] = [
    // Inspecting Changes
    { key: 'git status', command: 'Show modified files not yet staged' },
    { key: 'git diff', command: 'Show changes between commits' },
    { key: 'git log', command: 'Show commit history' },
  ];

  undoingChanges: Shortcut[] = [
    // Undoing Changes
    { key: 'git checkout -- <file(s)>', command: 'Discard changes in the working directory' },
    { key: 'git reset --soft HEAD^', command: 'Undo the last commit (local only)' },
    { key: 'git reset HEAD^', command: 'Undo the last commit and unstage changes' },
    {
      key: 'git fetch --all \n git reset --hard origin/<branch-name>',
      command: 'Discard local changes and pull from remote',
    },
  ];
}
