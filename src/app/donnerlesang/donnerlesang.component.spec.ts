import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerlesangComponent } from './donnerlesang.component';

describe('DonnerlesangComponent', () => {
  let component: DonnerlesangComponent;
  let fixture: ComponentFixture<DonnerlesangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnerlesangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnerlesangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
