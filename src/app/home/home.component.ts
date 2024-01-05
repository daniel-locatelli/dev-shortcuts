import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    '(window:resize)': 'onWindowResize($event)',
    class: 'home',
  },
})
export class HomeComponent implements AfterViewInit {
  public screenWidth!: number;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }

  isMobile(screenWidth: number) {
    return screenWidth <= 700;
  }

  @ViewChild('scroll') scrollElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    if (this.scrollElement && this.scrollElement.nativeElement) {
      this.scrollElement.nativeElement.focus();
    }
  }

}
