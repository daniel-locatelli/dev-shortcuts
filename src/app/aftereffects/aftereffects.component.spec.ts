import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftereffectsComponent } from './aftereffects.component';

describe('AftereffectsComponent', () => {
  let component: AftereffectsComponent;
  let fixture: ComponentFixture<AftereffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AftereffectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AftereffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
