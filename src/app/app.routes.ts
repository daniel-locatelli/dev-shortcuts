import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VscodeComponent } from './vscode/vscode.component';
import { HomeComponent } from './home/home.component';
import { GitComponent } from './git/git.component';
import { BashComponent } from './bash/bash.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Quickeys'
    },
    {
        path: 'bash',
        component: BashComponent,
        title: 'Quickeys | Bash'
    },
    {
        path: 'git',
        component: GitComponent,
        title: 'Quickeys | git'
    },
    {
        path: 'vscode',
        component: VscodeComponent,
        title: 'Quickeys | VS Code'
    }
];
