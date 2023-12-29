import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VscodeComponent } from './vscode/vscode.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Shortcuts'
    },
    {
        path: 'vscode',
        component: VscodeComponent,
        title: 'Shortcuts | VS Code'
    }
];
