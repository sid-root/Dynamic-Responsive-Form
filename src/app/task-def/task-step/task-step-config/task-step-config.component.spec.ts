import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStepConfigComponent } from './task-step-config.component';

describe('TaskStepConfigComponent', () => {
  let component: TaskStepConfigComponent;
  let fixture: ComponentFixture<TaskStepConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStepConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStepConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
