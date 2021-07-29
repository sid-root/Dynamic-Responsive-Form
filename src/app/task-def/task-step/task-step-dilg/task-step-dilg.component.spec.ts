import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStepDilgComponent } from './task-step-dilg.component';

describe('TaskStepDilgComponent', () => {
  let component: TaskStepDilgComponent;
  let fixture: ComponentFixture<TaskStepDilgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStepDilgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStepDilgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
