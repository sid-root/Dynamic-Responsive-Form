import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptListConfigComponent } from './opt-list-config.component';

describe('OptListConfigComponent', () => {
  let component: OptListConfigComponent;
  let fixture: ComponentFixture<OptListConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptListConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptListConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
