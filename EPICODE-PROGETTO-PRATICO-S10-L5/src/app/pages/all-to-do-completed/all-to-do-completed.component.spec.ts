import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllToDoCompletedComponent } from './all-to-do-completed.component';

describe('AllToDoCompletedComponent', () => {
  let component: AllToDoCompletedComponent;
  let fixture: ComponentFixture<AllToDoCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllToDoCompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllToDoCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
