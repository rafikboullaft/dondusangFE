import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDuProduitComponent } from './stock-du-produit.component';

describe('StockDuProduitComponent', () => {
  let component: StockDuProduitComponent;
  let fixture: ComponentFixture<StockDuProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDuProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDuProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
