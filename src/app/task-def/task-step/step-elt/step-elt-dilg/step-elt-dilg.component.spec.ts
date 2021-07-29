import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEltDilgComponent } from './step-elt-dilg.component';

describe('StepEltDilgComponent', () => {
  let component: StepEltDilgComponent;
  let fixture: ComponentFixture<StepEltDilgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepEltDilgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEltDilgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
