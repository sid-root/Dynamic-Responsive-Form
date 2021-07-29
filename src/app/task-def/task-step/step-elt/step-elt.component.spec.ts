import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEltComponent } from './step-elt.component';

describe('StepEltComponent', () => {
  let component: StepEltComponent;
  let fixture: ComponentFixture<StepEltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepEltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
