import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendreirComponent } from './calendreir.component';

describe('CalendreirComponent', () => {
  let component: CalendreirComponent;
  let fixture: ComponentFixture<CalendreirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendreirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendreirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
