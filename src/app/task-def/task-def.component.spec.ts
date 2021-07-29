import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDefComponent } from './task-def.component';

describe('TaskDefComponent', () => {
  let component: TaskDefComponent;
  let fixture: ComponentFixture<TaskDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
