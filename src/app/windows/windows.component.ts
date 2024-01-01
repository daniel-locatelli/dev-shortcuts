import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './windows.component.html',
  styleUrl: './windows.component.css',
  host: {
    class: 'development'
  }
})
export class WindowsComponent {

}
