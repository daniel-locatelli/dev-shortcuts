import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chrome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chrome.component.html',
  styleUrl: './chrome.component.css',
  host: {
    class: 'development'
  }
})
export class ChromeComponent {

}
