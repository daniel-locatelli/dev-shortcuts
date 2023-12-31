import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { VscodeComponent } from './vscode/vscode.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, VscodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // host: {
  //   '(keydown)': 'updateValue($event)',
  // },
})
export class AppComponent {
  // In the docs they ask not to use @HostListener
  // https://angular.dev/guide/components/host-elements#the-hostbinding-and-hostlistener-decorators

  constructor(private router: Router) {  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.router.navigate(['/']);;
        event.preventDefault();
        break;
      case '1':
        this.router.navigate(['/bash']);;
        event.preventDefault();
        break;
      case '2':
        this.router.navigate(['/git']);;
        event.preventDefault();
        break;
      case '3':
        this.router.navigate(['/vscode']);;
        event.preventDefault();
        break;
    }
  }
}
