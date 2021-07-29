import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSelectComponent } from './access-select.component';

describe('AccessSelectComponent', () => {
  let component: AccessSelectComponent;
  let fixture: ComponentFixture<AccessSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
