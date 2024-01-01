import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromedevComponent } from './chromedev.component';

describe('ChromedevComponent', () => {
  let component: ChromedevComponent;
  let fixture: ComponentFixture<ChromedevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChromedevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChromedevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
