import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockByDaysComponent } from './stock-by-days.component';

describe('StockByDaysComponent', () => {
  let component: StockByDaysComponent;
  let fixture: ComponentFixture<StockByDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockByDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockByDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
