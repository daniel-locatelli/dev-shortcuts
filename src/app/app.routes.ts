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
        title: 'Shortcuts'
    },
    {
        path: 'bash',
        component: BashComponent,
        title: 'Shortcuts | Bash'
    },
    {
        path: 'git',
        component: GitComponent,
        title: 'Shortcuts | git'
    },
    {
        path: 'vscode',
        component: VscodeComponent,
        title: 'Shortcuts | VS Code'
    }
];
