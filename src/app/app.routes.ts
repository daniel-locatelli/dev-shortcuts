import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VscodeComponent } from './vscode/vscode.component';
import { HomeComponent } from './home/home.component';
import { GitComponent } from './git/git.component';
import { BashComponent } from './bash/bash.component';
import { WindowsComponent } from './windows/windows.component';
import { ChromeComponent } from './chrome/chrome.component';
import { ChromedevComponent } from './chromedev/chromedev.component';
import { PremiereproComponent } from './premierepro/premierepro.component';
import { AftereffectsComponent } from './aftereffects/aftereffects.component';

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
        path: 'windows',
        component: WindowsComponent,
        title: 'Quickeys | Windows'
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
    },
    {
        path: 'chrome',
        component: ChromeComponent,
        title: 'Quickeys | Chrome'
    },
    {
        path: 'chromedev',
        component: ChromedevComponent,
        title: 'Quickeys | Chrome Dev'
    },
    {
        path: 'premierepro',
        component: PremiereproComponent,
        title: 'Quickeys | Premiere Pro'
    }
    ,
    {
        path: 'aftereffects',
        component: AftereffectsComponent,
        title: 'Quickeys | Affter Effects'
    }
];
